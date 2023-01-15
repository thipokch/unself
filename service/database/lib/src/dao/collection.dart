// ignore_for_file: unused_field

import 'package:drift/drift.dart';
import 'package:unself_database/unself_database.dart';

class CollectionDao extends DatabaseAccessor<Database> {
  CollectionDao(Database db) : super(db);

  late final _migrator = Migrator(attachedDatabase);

  // late final Map<Type, UnCollection<dynamic>> _collections;
  late final Map<String, CollectionOrm<dynamic>> _collectionsByName;

  $CollectionTable get collection => attachedDatabase.collection;
  $FieldTable get field => attachedDatabase.field;

  // /// @nodoc
  // @protected
  // void loadCollections() async {
  //   select(collection)
  //       .join([
  //         leftOuterJoin(field,
  //             field.collectionId.equalsExp(collection.id))
  //       ])
  //       .get()
  //       .then<Map<Type, UnCollection<dynamic>>>((result) => {
  //             for (var row in result)
  //               row.runtimeType:
  //                   UnCollection.fromData(attachedDatabase, v.read, columns)
  //           });
  // }

  /// @nodoc
  void loadCollectionsFromDb() async {
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

  /// [saveCollection] upserts the provided [Collection] model and updates
  /// its related records table schema.
  void saveCollection(Collection collection, List<Field> fields) =>
      throw UnimplementedError();

  /// [deleteCollection] deletes the provided [Collection] model.
  /// This method automatically deletes the related collection records table.
  ///
  /// The collection cannot be deleted, if:
  /// - is system collection (aka. collection.System is true)
  /// - is referenced as part of a relation field in another collection
  void deleteCollection(Collection collection) => throw UnimplementedError();
}
