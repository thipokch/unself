import 'package:drift/drift.dart';
import 'package:unself_local_database/unself_local_database.dart';

part 'document.g.dart';

@DriftAccessor()
class DocumentDao extends DatabaseAccessor<LocalDatabase>
    with _$DocumentDaoMixin {
  DocumentDao(LocalDatabase db) : super(db);

  /// [saveRecord] upserts the provided [Record] model.
  void saveRecord() => throw UnimplementedError();
}
