import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

part 'document.g.dart';

@DriftAccessor()
class DocumentDao extends DatabaseAccessor<Database> with _$DocumentDaoMixin {
  DocumentDao(Database db) : super(db);

  /// [saveRecord] upserts the provided [Record] model.
  void saveRecord() => throw UnimplementedError();
}
