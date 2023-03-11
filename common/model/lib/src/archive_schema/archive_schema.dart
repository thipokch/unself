import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

export 'iarchive_schema.dart';

part 'archive_schema.freezed.dart';
part 'archive_schema.g.dart';

typedef DoCallback = dynamic Function(dynamic json, ArchiveSchema schema);
typedef SchemeFinder = Entity Function(String name);
typedef AccumulatorCallback = void Function(
  String name,
  dynamic key,
  dynamic entity,
);

abstract class IArchivePointer {
  const IArchivePointer();

  Map<String, IArchiveSchema> get definition;
}

// typedef LookupCallback = _ArchiveSchemaRef Function(dynamic json);

@freezed
class ArchiveSchema with _$ArchiveSchema implements IArchiveSchema {
  const ArchiveSchema._();

  @FreezedUnionValue('ArchiveSchema.ref')
  const factory ArchiveSchema.ref(String name) = Ref;

  @FreezedUnionValue('ArchiveSchema.union')
  const factory ArchiveSchema.union(
    // Serialization doesn't support fuctions
    // required LookupCallback lookup,
    List<String> names, {
    @Default('type') String key,
  }) = Union;

  @FreezedUnionValue('ArchiveSchema.entity')
  const factory ArchiveSchema.entity(
    String name,
    Map<String, IArchiveSchema> definition, {
    @Default('id') String key,
    @Default('') String traverse,
  }) = Entity;

  // @FreezedUnionValue('ArchiveSchema.traverse')
  // const factory ArchiveSchema.traverse([
  //   @Default({}) Map<String, IArchiveSchema> definition,
  // ]) = Traverse;

  Entity getEntity(dynamic json, SchemeFinder find) => maybeMap(
        ref: (_) => find(_.name),
        union: (_) => Ref(json[_.key]).getEntity(json, find),
        // traverse: (_) => find(_.name),
        orElse: () => throw StateError("Can't getEntity on $runtimeType"),
      );

  dynamic useId(dynamic id, Entity entity) => maybeMap(
        ref: (_) => id,
        union: (_) => {
          'id': id,
          'type': entity.name,
        },
        // traverse: (_) => id,
        orElse: () => throw StateError("Can't getEntity on $runtimeType"),
      );

  /// Creates a [ArchiveSchema] from Json map
  factory ArchiveSchema.fromJson(Map<String, dynamic> data) =>
      _$ArchiveSchemaFromJson(data);
}

@freezed
class ArchiveSchemaList with _$ArchiveSchemaList implements IArchiveSchema {
  const ArchiveSchemaList._();

  @FreezedUnionValue('ArchiveSchemaList.ref')
  const factory ArchiveSchemaList.ref(String name) = RefList;

  @FreezedUnionValue('ArchiveSchemaList.union')
  const factory ArchiveSchemaList.union(
    List<String> names, {
    @Default('type') String key,
  }) = UnionList;

  ArchiveSchema get schema =>
      map(ref: (_) => Ref(_.name), union: (_) => Union(_.names, key: _.key));

  dynamic doCallback(dynamic json, DoCallback callback) =>
      (json as List).map((item) => callback(item, schema)).toList();

  /// Creates a [ArchiveSchema] from Json map
  factory ArchiveSchemaList.fromJson(Map<String, dynamic> data) =>
      _$ArchiveSchemaListFromJson(data);
}
