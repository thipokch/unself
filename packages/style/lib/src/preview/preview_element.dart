import 'package:flutter/material.dart';
import 'package:unself_style/unself_component.dart';
import 'package:unself_style/src/preview/preview.dart';

class ElementPreview extends StatelessWidget {
  const ElementPreview({
    super.key,
    required this.showNavBottomBar,
  });

  final bool showNavBottomBar;

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    Widget Function(String) _sectionLabel = UnPreview.sectionLabel;

    return Expanded(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12.0),
        child: ListView(
          shrinkWrap: true,
          children: [
            _sectionLabel("Buttons"),
            // const Buttons(),
            _sectionLabel("Chips"),
            // const ChipPreview(),
            _sectionLabel("Headings"),
            // const HeadingPreview(),
            showNavBottomBar
                ? const NavigationBars(
                    selectedIndex: 0,
                    isExampleBar: true,
                  )
                : Container(),
          ],
        ),
      ),
    );
  }
}

//
// COMPONENTS
//

class Dialogs extends StatefulWidget {
  const Dialogs({super.key});

  @override
  State<Dialogs> createState() => _DialogsState();
}

class _DialogsState extends State<Dialogs> {
  void openDialog(BuildContext context) {
    showDialog<void>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text("Basic Dialog Title"),
        content: const Text(
          "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
        ),
        actions: <Widget>[
          TextButton(
            child: const Text('Dismiss'),
            onPressed: () => Navigator.of(context).pop(),
          ),
          TextButton(
            child: const Text('Action'),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: ButtonTonal(
        child: const Text(
          "Open Dialog",
        ),
        onPressed: () => openDialog(context),
      ),
    );
  }
}

//
// NAVIGATION BAR
//

const List<NavigationDestination> appBarDestinations = [
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.widgets_outlined),
    label: 'Components',
    selectedIcon: Icon(Icons.widgets),
  ),
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.format_paint_outlined),
    label: 'Color',
    selectedIcon: Icon(Icons.format_paint),
  ),
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.text_snippet_outlined),
    label: 'Typography',
    selectedIcon: Icon(Icons.text_snippet),
  ),
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.invert_colors_on_outlined),
    label: 'Elevation',
    selectedIcon: Icon(Icons.opacity),
  ),
];

final List<NavigationRailDestination> navRailDestinations = appBarDestinations
    .map(
      (destination) => NavigationRailDestination(
        icon: Tooltip(
          message: destination.label,
          child: destination.icon,
        ),
        selectedIcon: Tooltip(
          message: destination.label,
          child: destination.selectedIcon,
        ),
        label: Text(destination.label),
      ),
    )
    .toList();

const List<Widget> exampleBarDestinations = [
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.explore_outlined),
    label: 'Explore',
    selectedIcon: Icon(Icons.explore),
  ),
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.pets_outlined),
    label: 'Pets',
    selectedIcon: Icon(Icons.pets),
  ),
  NavigationDestination(
    tooltip: "",
    icon: Icon(Icons.account_box_outlined),
    label: 'Account',
    selectedIcon: Icon(Icons.account_box),
  ),
];

class NavigationBars extends StatefulWidget {
  final void Function(int)? onSelectItem;
  final int selectedIndex;
  final bool isExampleBar;

  const NavigationBars({
    super.key,
    this.onSelectItem,
    required this.selectedIndex,
    required this.isExampleBar,
  });

  @override
  State<NavigationBars> createState() => _NavigationBarsState();
}

class _NavigationBarsState extends State<NavigationBars> {
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _selectedIndex = widget.selectedIndex;
  }

  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      selectedIndex: _selectedIndex,
      onDestinationSelected: (index) {
        setState(() {
          _selectedIndex = index;
        });
        if (!widget.isExampleBar) widget.onSelectItem!(index);
      },
      destinations:
          widget.isExampleBar ? exampleBarDestinations : appBarDestinations,
    );
  }
}

class NavigationRailSection extends StatefulWidget {
  final void Function(int) onSelectItem;
  final int selectedIndex;

  const NavigationRailSection({
    super.key,
    required this.onSelectItem,
    required this.selectedIndex,
  });

  @override
  State<NavigationRailSection> createState() => _NavigationRailSectionState();
}

class _NavigationRailSectionState extends State<NavigationRailSection> {
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _selectedIndex = widget.selectedIndex;
  }

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      minWidth: 50,
      destinations: navRailDestinations,
      selectedIndex: _selectedIndex,
      useIndicator: true,
      onDestinationSelected: (index) {
        setState(() {
          _selectedIndex = index;
        });
        widget.onSelectItem(index);
      },
    );
  }
}
