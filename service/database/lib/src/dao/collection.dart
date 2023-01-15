import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

@DriftAccessor()
class CollectionDao extends DatabaseAccessor<Database> {
  CollectionDao(Database db) : super(db);

  late final _migrator = Migrator(attachedDatabase);

  // late final Map<Type, UnCollection<dynamic>> _collections;
  late final Map<String, CollectionOrm<dynamic>> _collectionsByName;

  $CollectionTable get collection => attachedDatabase.collection;
  $FieldTable get field => attachedDatabase.field;

  /// @nodoc
  loadCollectionsFromDb() async {
    final List<CollectionData> collections = await select(collection).get();

    final collectionSchema = <CollectionData, List<FieldData>>{
      for (final collection in collections)
        collection: await (select(field)
              ..where((_) => _.collectionId.equals(collection.id)))
            .get()
    };

    _collectionsByName = <String, CollectionOrm>{
      for (final schema in collectionSchema.entries)
        schema.key.name.toLowerCase(): schema.key.toOrm(
          attachedDatabase,
          schema.value.map((e) => e.toOrm()).toList(),
        )
    };
  }

  /// [getCollectionByName] finds a single [Collection] by its name (case insensitive).
  CollectionOrm<D> getCollectionByName<D>(String name) =>
      _collectionsByName[name.toLowerCase()] as CollectionOrm<D>;

  /// [saveCollection] upserts the provided [CollectionData] model and updates
  /// its related records table schema.
  Future saveCollection(CollectionData collection, List<FieldData> fields) =>
      transaction(() async {
        await into(attachedDatabase.collection)
            .insertOnConflictUpdate(collection);

        for (final field in fields) {
          await into(attachedDatabase.field).insertOnConflictUpdate(field);
        }
        await _migrator.createTable(collection.toOrm(
            attachedDatabase, fields.map((e) => e.toOrm()).toList()));
      });

  /// [deleteCollection] deletes the provided [Collection] model.
  /// This method automatically deletes the related collection records table.
  ///
  /// The collection cannot be deleted, if:
  /// - is system collection (aka. collection.System is true)
  /// - is referenced as part of a relation field in another collection
  Future deleteCollection(String name) => transaction(() async {
        // TODO: implement edge cases

        // if (collection.system) {
        //   throw Exception('Cannot delete system collection');
        // }

        // final referenced = await (select(field)
        //       ..where((_) => _.collectionId.equals(collection.id)))
        //     .get();

        // if (referenced.isNotEmpty) {
        //   throw Exception(
        //       'Cannot delete collection, because it is referenced in other collections');
        // }

        // await (delete(attachedDatabase.collection)
        //       ..where((_) => _.id.equals(collection.id)))
        //     .go();

        // await (delete(attachedDatabase.field)
        //       ..where((_) => _.collectionId.equals(collection.id)))
        //     .go();

        await _migrator.deleteTable(name);
      });
}
