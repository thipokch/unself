import 'package:unself_local_database/unself_local_database.dart';

class UnpackService {
  const UnpackService({
    required LocalDatabase localDb,
  }) : _db = localDb;

  // ignore: unused_field
  final LocalDatabase _db;
}
