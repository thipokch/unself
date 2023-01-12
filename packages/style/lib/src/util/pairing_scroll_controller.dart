import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class PairingScrollController extends PrimaryScrollController {
  final PairingScrollControllerGroup group;

  PairingScrollController({
    Key? key,
    required this.group,
    required super.child,
  }) : super(
          key: key,
          controller: group._mirror,
        );

  static PairingScrollControllerGroup? of(BuildContext context) => context
      .dependOnInheritedWidgetOfExactType<PairingScrollController>()
      ?.group;

  @override
  bool updateShouldNotify(PairingScrollController oldWidget) =>
      group._mirror != oldWidget.group._mirror ||
      group._offsetNotifier != oldWidget.group._offsetNotifier ||
      !listEquals(group._actors, oldWidget.group._actors);

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<PairingScrollControllerGroup>(
      'group',
      group,
      ifNull: 'no controller',
      showName: false,
    ));
  }
}

class PairingScrollControllerGroup {
  PairingScrollControllerGroup() {
    _offsetNotifier = _PairedScrollControllerGroupOffsetNotifier(this);
    _mirror = _PairedScrollController(this);
    _mirror.addListener(_offsetNotifier.notifyListeners);
  }

  late ScrollController _mirror;

  final _actors = <_PairedScrollController>[];

  late _PairedScrollControllerGroupOffsetNotifier _offsetNotifier;

  double get offset {
    assert(
      _attachedControllers.isNotEmpty,
      'PairedScrollControllerGroup does not have any scroll controllers '
      'attached.',
    );

    return _attachedControllers.last.offset;
  }

  ScrollController push() {
    final controller = _PairedScrollController(this);
    _actors.add(controller);
    controller.addListener(_offsetNotifier.notifyListeners);

    if (_actors.isNotEmpty) {
      _actors.last.removeListener(_offsetNotifier.notifyListeners);
      _actors.last.addListener(_offsetNotifier.notifyListeners);
    }

    return controller;
  }

  // ScrollController? pop() {
  //   final controller = _actors.isNotEmpty ? _actors.removeLast() : null;
  //   controller?.removeListener(_offsetNotifier.notifyListeners);
  //   if (_actors.isNotEmpty) {
  //     _actors.last.addListener(_offsetNotifier.notifyListeners);
  //   }
  //   return controller;
  // }

  void addOffsetChangedListener(VoidCallback onChanged) =>
      _offsetNotifier.addListener(onChanged);

  void removeOffsetChangedListener(VoidCallback listener) =>
      _offsetNotifier.removeListener(listener);

  Iterable<_PairedScrollController> get _attachedControllers =>
      [_actors.where((controller) => controller.hasClients).last];

  Future<void> animateTo(
    double offset, {
    required Curve curve,
    required Duration duration,
  }) async {
    final animations = <Future<void>>[];
    for (final controller in _attachedControllers) {
      animations
          .add(controller.animateTo(offset, duration: duration, curve: curve));
    }

    return Future.wait<void>(animations).then<void>((List<void> _) => null);
  }

  void jumpTo(double value) {
    for (final controller in _attachedControllers) {
      controller.jumpTo(value);
    }
  }

  void resetScroll() {
    jumpTo(0.0);
  }
}

class _PairedScrollControllerGroupOffsetNotifier extends ChangeNotifier {
  _PairedScrollControllerGroupOffsetNotifier(this.controllerGroup);

  final PairingScrollControllerGroup controllerGroup;

  double? _cachedOffset;

  @override
  void notifyListeners() {
    final currentOffset = controllerGroup.offset;
    if (currentOffset != _cachedOffset) {
      _cachedOffset = currentOffset;
      super.notifyListeners();
    }
  }
}

class _PairedScrollController extends ScrollController {
  final PairingScrollControllerGroup _cluster;

  _PairedScrollController(
    this._cluster,
  ) : super(
          initialScrollOffset: 0.0,
          keepScrollOffset: false,
        );

  @override
  void dispose() {
    _cluster._actors.remove(this);

    if (_cluster._actors.isNotEmpty) {
      final fx = _cluster._offsetNotifier.notifyListeners;
      _cluster._actors.last.removeListener(fx);
    }

    super.dispose();
  }

  @override
  void attach(ScrollPosition position) {
    assert(
        position is _PairedScrollPosition,
        '_PairedScrollControllers can only be used with'
        ' _PairedScrollPositions.');
    final _PairedScrollPosition linkedPosition =
        position as _PairedScrollPosition;
    assert(linkedPosition.owner == this,
        '_PairedScrollPosition cannot change controllers once created.');
    super.attach(position);
  }

  @override
  _PairedScrollPosition createScrollPosition(
    ScrollPhysics physics,
    ScrollContext context,
    ScrollPosition? oldPosition,
  ) {
    return _PairedScrollPosition(
      this,
      physics: physics,
      context: context,
      initialPixels: initialScrollOffset,
      oldPosition: oldPosition,
    );
  }

  // @override
  // double get initialScrollOffset => _cluster._attachedControllers.isEmpty
  //     ? super.initialScrollOffset
  //     : _cluster.offset;

  @override
  _PairedScrollPosition get position => super.position as _PairedScrollPosition;

  Iterable<_PairedScrollController> get _allPeersWithClients =>
      _cluster._attachedControllers.where((peer) => peer != this);

  bool get canLinkWithPeers => _allPeersWithClients.isNotEmpty;

  Iterable<_PairedScrollActivity> linkWithPeers(_PairedScrollPosition driver) {
    assert(canLinkWithPeers);

    return _allPeersWithClients
        .map((peer) => peer.link(driver))
        .expand((e) => e);
  }

  Iterable<_PairedScrollActivity> link(_PairedScrollPosition driver) {
    assert(hasClients);
    final activities = <_PairedScrollActivity>[];
    for (final position in positions) {
      final linkedPosition = position as _PairedScrollPosition;
      activities.add(linkedPosition.link(driver));
    }

    return activities;
  }
}

class _PairedScrollPosition extends ScrollPositionWithSingleContext {
  _PairedScrollPosition(
    this.owner, {
    required ScrollPhysics physics,
    required ScrollContext context,
    double? initialPixels,
    ScrollPosition? oldPosition,
  }) : super(
          physics: physics,
          context: context,
          initialPixels: initialPixels,
          oldPosition: oldPosition,
        );

  final _PairedScrollController owner;

  final Set<_PairedScrollActivity> _peerActivities = <_PairedScrollActivity>{};

  // We override hold to propagate it to all peer controllers.
  @override
  ScrollHoldController hold(VoidCallback holdCancelCallback) {
    for (final controller in owner._allPeersWithClients) {
      controller.position._holdInternal();
    }

    return super.hold(holdCancelCallback);
  }

  // Calls hold without propagating to peers.
  void _holdInternal() {
    // ignore: no-empty-block
    super.hold(() {});
  }

  @override
  void beginActivity(ScrollActivity? newActivity) {
    if (newActivity == null) {
      return;
    }
    for (var activity in _peerActivities) {
      activity.unlink(this);
    }

    _peerActivities.clear();

    super.beginActivity(newActivity);
  }

  @override
  double setPixels(double newPixels) {
    if (newPixels == pixels) {
      return 0.0;
    }
    updateUserScrollDirection(newPixels - pixels > 0.0
        ? ScrollDirection.forward
        : ScrollDirection.reverse);

    if (owner.canLinkWithPeers) {
      _peerActivities.addAll(owner.linkWithPeers(this));
      for (var activity in _peerActivities) {
        activity.moveTo(newPixels);
      }
    }

    return setPixelsInternal(newPixels);
  }

  double setPixelsInternal(double newPixels) {
    return super.setPixels(newPixels);
  }

  @override
  void forcePixels(double value) {
    if (value == pixels) {
      return;
    }
    updateUserScrollDirection(value - pixels > 0.0
        ? ScrollDirection.forward
        : ScrollDirection.reverse);

    if (owner.canLinkWithPeers) {
      _peerActivities.addAll(owner.linkWithPeers(this));
      for (var activity in _peerActivities) {
        activity.jumpTo(value);
      }
    }

    forcePixelsInternal(value);
  }

  void forcePixelsInternal(double value) {
    super.forcePixels(value);
  }

  _PairedScrollActivity link(_PairedScrollPosition driver) {
    if (this.activity is! _PairedScrollActivity) {
      beginActivity(_PairedScrollActivity(this));
    }
    final _PairedScrollActivity activity =
        this.activity as _PairedScrollActivity;
    activity.link(driver);

    return activity;
  }

  void unlink(_PairedScrollActivity activity) {
    _peerActivities.remove(activity);
  }

  @override
  // We override this Unself to make it public (overridden Unself is protected)
  // ignore: unnecessary_overrides
  void updateUserScrollDirection(ScrollDirection value) {
    super.updateUserScrollDirection(value);
  }

  @override
  void debugFillDescription(List<String> description) {
    super.debugFillDescription(description);
    description.add('owner: $owner');
  }
}

class _PairedScrollActivity extends ScrollActivity {
  _PairedScrollActivity(_PairedScrollPosition delegate) : super(delegate);

  @override
  _PairedScrollPosition get delegate => super.delegate as _PairedScrollPosition;

  final Set<_PairedScrollPosition> drivers = <_PairedScrollPosition>{};

  void link(_PairedScrollPosition driver) {
    drivers.add(driver);
  }

  void unlink(_PairedScrollPosition driver) {
    drivers.remove(driver);
    if (drivers.isEmpty) {
      delegate.goIdle();
    }
  }

  @override
  bool get shouldIgnorePointer => true;

  @override
  bool get isScrolling => true;

  // _PariedScrollActivity is not self-driven but moved by calls to the [moveTo]
  // Unself.
  @override
  double get velocity => 0.0;

  void moveTo(double newPixels) {
    _updateUserScrollDirection();
    delegate.setPixelsInternal(newPixels);
  }

  void jumpTo(double newPixels) {
    _updateUserScrollDirection();
    delegate.forcePixelsInternal(newPixels);
  }

  void _updateUserScrollDirection() {
    assert(drivers.isNotEmpty);
    ScrollDirection commonDirection = drivers.first.userScrollDirection;
    for (var driver in drivers) {
      if (driver.userScrollDirection != commonDirection) {
        commonDirection = ScrollDirection.idle;
      }
    }
    delegate.updateUserScrollDirection(commonDirection);
  }

  @override
  void dispose() {
    for (var driver in drivers) {
      driver.unlink(this);
    }
    super.dispose();
  }
}
