import 'package:drift/drift.dart';
import 'package:slugid/slugid.dart';

mixin PrimaryUuid on Table {
  TextColumn get id => text().clientDefault(
        () => Slugid.nice().toString(), // Compressed UUIDv4
      )();

  @override
  Set<Column> get primaryKey => {id};
}
