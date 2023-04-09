import 'dart:async';

import 'package:rxdart/subjects.dart';
import 'package:un_file/un_file.dart';
import 'package:unpack/unpack.dart';

import 'imodule.dart';

class Moduler extends IModule {
  Moduler(
    super.spec,
    super.fileSpec, {
    ModuleState state = const ModuleInitial(),
  }) {
    _states = BehaviorSubject<ModuleState>.seeded(state);
  }

  late final BehaviorSubject<ModuleState> _states;

  @override
  Stream<ModuleState> get states => _states.stream;

  @override
  ModuleState get currentState => _states.value;

  @override
  ModuleStep get currentStep => currentState.step;

  @override
  FutureOr<void> process(XFile file) async {
    final fileBytes = await IFile.filer(spec, fileSpec).prepare(file);

    _states.add(const ModuleState.extract());

    final extracted = <String, dynamic>{};

    for (final key in fileBytes.keys) {
      final content = fileBytes[key];
      if (content != null) extracted[key] = await _extract(content);
    }

    _states.add(const ModuleState.transform());

    final transformed = <String, dynamic>{};

    for (final extract in extracted.entries) {
      transformed[extract.key] = await _transform(extract.value);
    }

    _states.add(const ModuleState.load());

    for (final transform in transformed.entries) {
      await _load(transform.value);
    }

    _states.add(const ModuleState.complete());
  }
}

extension on Moduler {
  // bool _match(String file) => spec.fileMatcher.matches(file);

  FutureOr<Map<String, dynamic>> _extract(Iterable<int> bytes) =>
      IExtract.extractor(spec.extractSpec).extract(bytes);

  FutureOr<Map<String, dynamic>> _transform(Map<String, dynamic> data) =>
      ITransform.tranformer(spec.transformSpec).transform(data);

  FutureOr<bool> _load(Map<String, dynamic> data) =>
      ILoad.loader(spec.loadSpec).load(data);
}
