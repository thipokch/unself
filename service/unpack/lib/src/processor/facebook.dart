import 'dart:async';

import 'package:unself_local_database/unself_local_database.dart';
import 'package:unself_unpack/src/processor/processor.dart';

/// {@template facebook_processor}
/// [FacebookProcessor] unpacks archive files and collect metadata.
/// {@endtemplate}
class FacebookProcessor implements IProcessor {
  const FacebookProcessor();

  @override
  FutureOr<List<Collection>> collect() {
    // TODO: implement collect
    throw UnimplementedError();
  }

  @override
  FutureOr<void> process({required List<Collection> collection}) {
    // TODO: implement process
    throw UnimplementedError();
  }
}
