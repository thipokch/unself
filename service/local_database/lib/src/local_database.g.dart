// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'local_database.dart';

// ignore_for_file: type=lint
class $CollectionTable extends Collection
    with TableInfo<$CollectionTable, CollectionData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $CollectionTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _createdMeta =
      const VerificationMeta('created');
  @override
  late final GeneratedColumn<DateTime> created = GeneratedColumn<DateTime>(
      'created', aliasedName, false,
      type: DriftSqlType.dateTime, requiredDuringInsert: true);
  static const VerificationMeta _updatedMeta =
      const VerificationMeta('updated');
  @override
  late final GeneratedColumn<DateTime> updated = GeneratedColumn<DateTime>(
      'updated', aliasedName, false,
      type: DriftSqlType.dateTime, requiredDuringInsert: true);
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  @override
  late final GeneratedColumnWithTypeConverter<CollectionType, String> type =
      GeneratedColumn<String>('type', aliasedName, false,
              type: DriftSqlType.string, requiredDuringInsert: true)
          .withConverter<CollectionType>($CollectionTable.$convertertype);
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _systemMeta = const VerificationMeta('system');
  @override
  late final GeneratedColumn<bool> system =
      GeneratedColumn<bool>('system', aliasedName, false,
          type: DriftSqlType.bool,
          requiredDuringInsert: true,
          defaultConstraints: GeneratedColumn.constraintsDependsOnDialect({
            SqlDialect.sqlite: 'CHECK ("system" IN (0, 1))',
            SqlDialect.mysql: '',
            SqlDialect.postgres: '',
          }));
  static const VerificationMeta _listRuleMeta =
      const VerificationMeta('listRule');
  @override
  late final GeneratedColumn<String> listRule = GeneratedColumn<String>(
      'list_rule', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _viewRuleMeta =
      const VerificationMeta('viewRule');
  @override
  late final GeneratedColumn<String> viewRule = GeneratedColumn<String>(
      'view_rule', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _createRuleMeta =
      const VerificationMeta('createRule');
  @override
  late final GeneratedColumn<String> createRule = GeneratedColumn<String>(
      'create_rule', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _updateRuleMeta =
      const VerificationMeta('updateRule');
  @override
  late final GeneratedColumn<String> updateRule = GeneratedColumn<String>(
      'update_rule', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _deleteRuleMeta =
      const VerificationMeta('deleteRule');
  @override
  late final GeneratedColumn<String> deleteRule = GeneratedColumn<String>(
      'delete_rule', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _extraMeta = const VerificationMeta('extra');
  @override
  late final GeneratedColumn<String> extra = GeneratedColumn<String>(
      'extra', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns => [
        id,
        created,
        updated,
        type,
        name,
        system,
        listRule,
        viewRule,
        createRule,
        updateRule,
        deleteRule,
        extra
      ];
  @override
  String get aliasedName => _alias ?? 'collection';
  @override
  String get actualTableName => 'collection';
  @override
  VerificationContext validateIntegrity(Insertable<CollectionData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    } else if (isInserting) {
      context.missing(_idMeta);
    }
    if (data.containsKey('created')) {
      context.handle(_createdMeta,
          created.isAcceptableOrUnknown(data['created']!, _createdMeta));
    } else if (isInserting) {
      context.missing(_createdMeta);
    }
    if (data.containsKey('updated')) {
      context.handle(_updatedMeta,
          updated.isAcceptableOrUnknown(data['updated']!, _updatedMeta));
    } else if (isInserting) {
      context.missing(_updatedMeta);
    }
    context.handle(_typeMeta, const VerificationResult.success());
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('system')) {
      context.handle(_systemMeta,
          system.isAcceptableOrUnknown(data['system']!, _systemMeta));
    } else if (isInserting) {
      context.missing(_systemMeta);
    }
    if (data.containsKey('list_rule')) {
      context.handle(_listRuleMeta,
          listRule.isAcceptableOrUnknown(data['list_rule']!, _listRuleMeta));
    }
    if (data.containsKey('view_rule')) {
      context.handle(_viewRuleMeta,
          viewRule.isAcceptableOrUnknown(data['view_rule']!, _viewRuleMeta));
    }
    if (data.containsKey('create_rule')) {
      context.handle(
          _createRuleMeta,
          createRule.isAcceptableOrUnknown(
              data['create_rule']!, _createRuleMeta));
    }
    if (data.containsKey('update_rule')) {
      context.handle(
          _updateRuleMeta,
          updateRule.isAcceptableOrUnknown(
              data['update_rule']!, _updateRuleMeta));
    }
    if (data.containsKey('delete_rule')) {
      context.handle(
          _deleteRuleMeta,
          deleteRule.isAcceptableOrUnknown(
              data['delete_rule']!, _deleteRuleMeta));
    }
    if (data.containsKey('extra')) {
      context.handle(
          _extraMeta, extra.isAcceptableOrUnknown(data['extra']!, _extraMeta));
    } else if (isInserting) {
      context.missing(_extraMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  CollectionData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return CollectionData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      created: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}created'])!,
      updated: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}updated'])!,
      type: $CollectionTable.$convertertype.fromSql(attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!),
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      system: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}system'])!,
      listRule: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}list_rule']),
      viewRule: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}view_rule']),
      createRule: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}create_rule']),
      updateRule: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}update_rule']),
      deleteRule: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}delete_rule']),
      extra: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}extra'])!,
    );
  }

  @override
  $CollectionTable createAlias(String alias) {
    return $CollectionTable(attachedDatabase, alias);
  }

  static JsonTypeConverter2<CollectionType, String, String> $convertertype =
      const EnumNameConverter<CollectionType>(CollectionType.values);
}

class CollectionData extends DataClass implements Insertable<CollectionData> {
  final String id;
  final DateTime created;
  final DateTime updated;
  final CollectionType type;
  final String name;
  final bool system;
  final String? listRule;
  final String? viewRule;
  final String? createRule;
  final String? updateRule;
  final String? deleteRule;
  final String extra;
  const CollectionData(
      {required this.id,
      required this.created,
      required this.updated,
      required this.type,
      required this.name,
      required this.system,
      this.listRule,
      this.viewRule,
      this.createRule,
      this.updateRule,
      this.deleteRule,
      required this.extra});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['created'] = Variable<DateTime>(created);
    map['updated'] = Variable<DateTime>(updated);
    {
      final converter = $CollectionTable.$convertertype;
      map['type'] = Variable<String>(converter.toSql(type));
    }
    map['name'] = Variable<String>(name);
    map['system'] = Variable<bool>(system);
    if (!nullToAbsent || listRule != null) {
      map['list_rule'] = Variable<String>(listRule);
    }
    if (!nullToAbsent || viewRule != null) {
      map['view_rule'] = Variable<String>(viewRule);
    }
    if (!nullToAbsent || createRule != null) {
      map['create_rule'] = Variable<String>(createRule);
    }
    if (!nullToAbsent || updateRule != null) {
      map['update_rule'] = Variable<String>(updateRule);
    }
    if (!nullToAbsent || deleteRule != null) {
      map['delete_rule'] = Variable<String>(deleteRule);
    }
    map['extra'] = Variable<String>(extra);
    return map;
  }

  CollectionCompanion toCompanion(bool nullToAbsent) {
    return CollectionCompanion(
      id: Value(id),
      created: Value(created),
      updated: Value(updated),
      type: Value(type),
      name: Value(name),
      system: Value(system),
      listRule: listRule == null && nullToAbsent
          ? const Value.absent()
          : Value(listRule),
      viewRule: viewRule == null && nullToAbsent
          ? const Value.absent()
          : Value(viewRule),
      createRule: createRule == null && nullToAbsent
          ? const Value.absent()
          : Value(createRule),
      updateRule: updateRule == null && nullToAbsent
          ? const Value.absent()
          : Value(updateRule),
      deleteRule: deleteRule == null && nullToAbsent
          ? const Value.absent()
          : Value(deleteRule),
      extra: Value(extra),
    );
  }

  factory CollectionData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return CollectionData(
      id: serializer.fromJson<String>(json['id']),
      created: serializer.fromJson<DateTime>(json['created']),
      updated: serializer.fromJson<DateTime>(json['updated']),
      type: $CollectionTable.$convertertype
          .fromJson(serializer.fromJson<String>(json['type'])),
      name: serializer.fromJson<String>(json['name']),
      system: serializer.fromJson<bool>(json['system']),
      listRule: serializer.fromJson<String?>(json['listRule']),
      viewRule: serializer.fromJson<String?>(json['viewRule']),
      createRule: serializer.fromJson<String?>(json['createRule']),
      updateRule: serializer.fromJson<String?>(json['updateRule']),
      deleteRule: serializer.fromJson<String?>(json['deleteRule']),
      extra: serializer.fromJson<String>(json['extra']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'created': serializer.toJson<DateTime>(created),
      'updated': serializer.toJson<DateTime>(updated),
      'type': serializer
          .toJson<String>($CollectionTable.$convertertype.toJson(type)),
      'name': serializer.toJson<String>(name),
      'system': serializer.toJson<bool>(system),
      'listRule': serializer.toJson<String?>(listRule),
      'viewRule': serializer.toJson<String?>(viewRule),
      'createRule': serializer.toJson<String?>(createRule),
      'updateRule': serializer.toJson<String?>(updateRule),
      'deleteRule': serializer.toJson<String?>(deleteRule),
      'extra': serializer.toJson<String>(extra),
    };
  }

  CollectionData copyWith(
          {String? id,
          DateTime? created,
          DateTime? updated,
          CollectionType? type,
          String? name,
          bool? system,
          Value<String?> listRule = const Value.absent(),
          Value<String?> viewRule = const Value.absent(),
          Value<String?> createRule = const Value.absent(),
          Value<String?> updateRule = const Value.absent(),
          Value<String?> deleteRule = const Value.absent(),
          String? extra}) =>
      CollectionData(
        id: id ?? this.id,
        created: created ?? this.created,
        updated: updated ?? this.updated,
        type: type ?? this.type,
        name: name ?? this.name,
        system: system ?? this.system,
        listRule: listRule.present ? listRule.value : this.listRule,
        viewRule: viewRule.present ? viewRule.value : this.viewRule,
        createRule: createRule.present ? createRule.value : this.createRule,
        updateRule: updateRule.present ? updateRule.value : this.updateRule,
        deleteRule: deleteRule.present ? deleteRule.value : this.deleteRule,
        extra: extra ?? this.extra,
      );
  @override
  String toString() {
    return (StringBuffer('CollectionData(')
          ..write('id: $id, ')
          ..write('created: $created, ')
          ..write('updated: $updated, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('listRule: $listRule, ')
          ..write('viewRule: $viewRule, ')
          ..write('createRule: $createRule, ')
          ..write('updateRule: $updateRule, ')
          ..write('deleteRule: $deleteRule, ')
          ..write('extra: $extra')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, created, updated, type, name, system,
      listRule, viewRule, createRule, updateRule, deleteRule, extra);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is CollectionData &&
          other.id == this.id &&
          other.created == this.created &&
          other.updated == this.updated &&
          other.type == this.type &&
          other.name == this.name &&
          other.system == this.system &&
          other.listRule == this.listRule &&
          other.viewRule == this.viewRule &&
          other.createRule == this.createRule &&
          other.updateRule == this.updateRule &&
          other.deleteRule == this.deleteRule &&
          other.extra == this.extra);
}

class CollectionCompanion extends UpdateCompanion<CollectionData> {
  final Value<String> id;
  final Value<DateTime> created;
  final Value<DateTime> updated;
  final Value<CollectionType> type;
  final Value<String> name;
  final Value<bool> system;
  final Value<String?> listRule;
  final Value<String?> viewRule;
  final Value<String?> createRule;
  final Value<String?> updateRule;
  final Value<String?> deleteRule;
  final Value<String> extra;
  const CollectionCompanion({
    this.id = const Value.absent(),
    this.created = const Value.absent(),
    this.updated = const Value.absent(),
    this.type = const Value.absent(),
    this.name = const Value.absent(),
    this.system = const Value.absent(),
    this.listRule = const Value.absent(),
    this.viewRule = const Value.absent(),
    this.createRule = const Value.absent(),
    this.updateRule = const Value.absent(),
    this.deleteRule = const Value.absent(),
    this.extra = const Value.absent(),
  });
  CollectionCompanion.insert({
    required String id,
    required DateTime created,
    required DateTime updated,
    required CollectionType type,
    required String name,
    required bool system,
    this.listRule = const Value.absent(),
    this.viewRule = const Value.absent(),
    this.createRule = const Value.absent(),
    this.updateRule = const Value.absent(),
    this.deleteRule = const Value.absent(),
    required String extra,
  })  : id = Value(id),
        created = Value(created),
        updated = Value(updated),
        type = Value(type),
        name = Value(name),
        system = Value(system),
        extra = Value(extra);
  static Insertable<CollectionData> custom({
    Expression<String>? id,
    Expression<DateTime>? created,
    Expression<DateTime>? updated,
    Expression<String>? type,
    Expression<String>? name,
    Expression<bool>? system,
    Expression<String>? listRule,
    Expression<String>? viewRule,
    Expression<String>? createRule,
    Expression<String>? updateRule,
    Expression<String>? deleteRule,
    Expression<String>? extra,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (created != null) 'created': created,
      if (updated != null) 'updated': updated,
      if (type != null) 'type': type,
      if (name != null) 'name': name,
      if (system != null) 'system': system,
      if (listRule != null) 'list_rule': listRule,
      if (viewRule != null) 'view_rule': viewRule,
      if (createRule != null) 'create_rule': createRule,
      if (updateRule != null) 'update_rule': updateRule,
      if (deleteRule != null) 'delete_rule': deleteRule,
      if (extra != null) 'extra': extra,
    });
  }

  CollectionCompanion copyWith(
      {Value<String>? id,
      Value<DateTime>? created,
      Value<DateTime>? updated,
      Value<CollectionType>? type,
      Value<String>? name,
      Value<bool>? system,
      Value<String?>? listRule,
      Value<String?>? viewRule,
      Value<String?>? createRule,
      Value<String?>? updateRule,
      Value<String?>? deleteRule,
      Value<String>? extra}) {
    return CollectionCompanion(
      id: id ?? this.id,
      created: created ?? this.created,
      updated: updated ?? this.updated,
      type: type ?? this.type,
      name: name ?? this.name,
      system: system ?? this.system,
      listRule: listRule ?? this.listRule,
      viewRule: viewRule ?? this.viewRule,
      createRule: createRule ?? this.createRule,
      updateRule: updateRule ?? this.updateRule,
      deleteRule: deleteRule ?? this.deleteRule,
      extra: extra ?? this.extra,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (created.present) {
      map['created'] = Variable<DateTime>(created.value);
    }
    if (updated.present) {
      map['updated'] = Variable<DateTime>(updated.value);
    }
    if (type.present) {
      final converter = $CollectionTable.$convertertype;
      map['type'] = Variable<String>(converter.toSql(type.value));
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (system.present) {
      map['system'] = Variable<bool>(system.value);
    }
    if (listRule.present) {
      map['list_rule'] = Variable<String>(listRule.value);
    }
    if (viewRule.present) {
      map['view_rule'] = Variable<String>(viewRule.value);
    }
    if (createRule.present) {
      map['create_rule'] = Variable<String>(createRule.value);
    }
    if (updateRule.present) {
      map['update_rule'] = Variable<String>(updateRule.value);
    }
    if (deleteRule.present) {
      map['delete_rule'] = Variable<String>(deleteRule.value);
    }
    if (extra.present) {
      map['extra'] = Variable<String>(extra.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('CollectionCompanion(')
          ..write('id: $id, ')
          ..write('created: $created, ')
          ..write('updated: $updated, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('listRule: $listRule, ')
          ..write('viewRule: $viewRule, ')
          ..write('createRule: $createRule, ')
          ..write('updateRule: $updateRule, ')
          ..write('deleteRule: $deleteRule, ')
          ..write('extra: $extra')
          ..write(')'))
        .toString();
  }
}

class $FieldTable extends Field with TableInfo<$FieldTable, FieldData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $FieldTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _createdMeta =
      const VerificationMeta('created');
  @override
  late final GeneratedColumn<DateTime> created = GeneratedColumn<DateTime>(
      'created', aliasedName, false,
      type: DriftSqlType.dateTime, requiredDuringInsert: true);
  static const VerificationMeta _updatedMeta =
      const VerificationMeta('updated');
  @override
  late final GeneratedColumn<DateTime> updated = GeneratedColumn<DateTime>(
      'updated', aliasedName, false,
      type: DriftSqlType.dateTime, requiredDuringInsert: true);
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  @override
  late final GeneratedColumnWithTypeConverter<FieldType, String> type =
      GeneratedColumn<String>('type', aliasedName, false,
              type: DriftSqlType.string, requiredDuringInsert: true)
          .withConverter<FieldType>($FieldTable.$convertertype);
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _systemMeta = const VerificationMeta('system');
  @override
  late final GeneratedColumn<bool> system =
      GeneratedColumn<bool>('system', aliasedName, false,
          type: DriftSqlType.bool,
          requiredDuringInsert: true,
          defaultConstraints: GeneratedColumn.constraintsDependsOnDialect({
            SqlDialect.sqlite: 'CHECK ("system" IN (0, 1))',
            SqlDialect.mysql: '',
            SqlDialect.postgres: '',
          }));
  static const VerificationMeta _requiredMeta =
      const VerificationMeta('required');
  @override
  late final GeneratedColumn<bool> required =
      GeneratedColumn<bool>('required', aliasedName, false,
          type: DriftSqlType.bool,
          requiredDuringInsert: true,
          defaultConstraints: GeneratedColumn.constraintsDependsOnDialect({
            SqlDialect.sqlite: 'CHECK ("required" IN (0, 1))',
            SqlDialect.mysql: '',
            SqlDialect.postgres: '',
          }));
  static const VerificationMeta _uniqueMeta = const VerificationMeta('unique');
  @override
  late final GeneratedColumn<bool> unique =
      GeneratedColumn<bool>('unique', aliasedName, false,
          type: DriftSqlType.bool,
          requiredDuringInsert: true,
          defaultConstraints: GeneratedColumn.constraintsDependsOnDialect({
            SqlDialect.sqlite: 'CHECK ("unique" IN (0, 1))',
            SqlDialect.mysql: '',
            SqlDialect.postgres: '',
          }));
  static const VerificationMeta _collectionIdMeta =
      const VerificationMeta('collectionId');
  @override
  late final GeneratedColumn<String> collectionId = GeneratedColumn<String>(
      'collection_id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('REFERENCES collection (id)'));
  static const VerificationMeta _extraMeta = const VerificationMeta('extra');
  @override
  late final GeneratedColumn<String> extra = GeneratedColumn<String>(
      'extra', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns => [
        id,
        created,
        updated,
        type,
        name,
        system,
        required,
        unique,
        collectionId,
        extra
      ];
  @override
  String get aliasedName => _alias ?? 'field';
  @override
  String get actualTableName => 'field';
  @override
  VerificationContext validateIntegrity(Insertable<FieldData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    } else if (isInserting) {
      context.missing(_idMeta);
    }
    if (data.containsKey('created')) {
      context.handle(_createdMeta,
          created.isAcceptableOrUnknown(data['created']!, _createdMeta));
    } else if (isInserting) {
      context.missing(_createdMeta);
    }
    if (data.containsKey('updated')) {
      context.handle(_updatedMeta,
          updated.isAcceptableOrUnknown(data['updated']!, _updatedMeta));
    } else if (isInserting) {
      context.missing(_updatedMeta);
    }
    context.handle(_typeMeta, const VerificationResult.success());
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('system')) {
      context.handle(_systemMeta,
          system.isAcceptableOrUnknown(data['system']!, _systemMeta));
    } else if (isInserting) {
      context.missing(_systemMeta);
    }
    if (data.containsKey('required')) {
      context.handle(_requiredMeta,
          required.isAcceptableOrUnknown(data['required']!, _requiredMeta));
    } else if (isInserting) {
      context.missing(_requiredMeta);
    }
    if (data.containsKey('unique')) {
      context.handle(_uniqueMeta,
          unique.isAcceptableOrUnknown(data['unique']!, _uniqueMeta));
    } else if (isInserting) {
      context.missing(_uniqueMeta);
    }
    if (data.containsKey('collection_id')) {
      context.handle(
          _collectionIdMeta,
          collectionId.isAcceptableOrUnknown(
              data['collection_id']!, _collectionIdMeta));
    } else if (isInserting) {
      context.missing(_collectionIdMeta);
    }
    if (data.containsKey('extra')) {
      context.handle(
          _extraMeta, extra.isAcceptableOrUnknown(data['extra']!, _extraMeta));
    } else if (isInserting) {
      context.missing(_extraMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  FieldData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return FieldData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      created: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}created'])!,
      updated: attachedDatabase.typeMapping
          .read(DriftSqlType.dateTime, data['${effectivePrefix}updated'])!,
      type: $FieldTable.$convertertype.fromSql(attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!),
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      system: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}system'])!,
      required: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}required'])!,
      unique: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}unique'])!,
      collectionId: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}collection_id'])!,
      extra: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}extra'])!,
    );
  }

  @override
  $FieldTable createAlias(String alias) {
    return $FieldTable(attachedDatabase, alias);
  }

  static JsonTypeConverter2<FieldType, String, String> $convertertype =
      const EnumNameConverter<FieldType>(FieldType.values);
}

class FieldData extends DataClass implements Insertable<FieldData> {
  final String id;
  final DateTime created;
  final DateTime updated;
  final FieldType type;
  final String name;
  final bool system;
  final bool required;
  final bool unique;
  final String collectionId;
  final String extra;
  const FieldData(
      {required this.id,
      required this.created,
      required this.updated,
      required this.type,
      required this.name,
      required this.system,
      required this.required,
      required this.unique,
      required this.collectionId,
      required this.extra});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['created'] = Variable<DateTime>(created);
    map['updated'] = Variable<DateTime>(updated);
    {
      final converter = $FieldTable.$convertertype;
      map['type'] = Variable<String>(converter.toSql(type));
    }
    map['name'] = Variable<String>(name);
    map['system'] = Variable<bool>(system);
    map['required'] = Variable<bool>(required);
    map['unique'] = Variable<bool>(unique);
    map['collection_id'] = Variable<String>(collectionId);
    map['extra'] = Variable<String>(extra);
    return map;
  }

  FieldCompanion toCompanion(bool nullToAbsent) {
    return FieldCompanion(
      id: Value(id),
      created: Value(created),
      updated: Value(updated),
      type: Value(type),
      name: Value(name),
      system: Value(system),
      required: Value(required),
      unique: Value(unique),
      collectionId: Value(collectionId),
      extra: Value(extra),
    );
  }

  factory FieldData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return FieldData(
      id: serializer.fromJson<String>(json['id']),
      created: serializer.fromJson<DateTime>(json['created']),
      updated: serializer.fromJson<DateTime>(json['updated']),
      type: $FieldTable.$convertertype
          .fromJson(serializer.fromJson<String>(json['type'])),
      name: serializer.fromJson<String>(json['name']),
      system: serializer.fromJson<bool>(json['system']),
      required: serializer.fromJson<bool>(json['required']),
      unique: serializer.fromJson<bool>(json['unique']),
      collectionId: serializer.fromJson<String>(json['collectionId']),
      extra: serializer.fromJson<String>(json['extra']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'created': serializer.toJson<DateTime>(created),
      'updated': serializer.toJson<DateTime>(updated),
      'type':
          serializer.toJson<String>($FieldTable.$convertertype.toJson(type)),
      'name': serializer.toJson<String>(name),
      'system': serializer.toJson<bool>(system),
      'required': serializer.toJson<bool>(required),
      'unique': serializer.toJson<bool>(unique),
      'collectionId': serializer.toJson<String>(collectionId),
      'extra': serializer.toJson<String>(extra),
    };
  }

  FieldData copyWith(
          {String? id,
          DateTime? created,
          DateTime? updated,
          FieldType? type,
          String? name,
          bool? system,
          bool? required,
          bool? unique,
          String? collectionId,
          String? extra}) =>
      FieldData(
        id: id ?? this.id,
        created: created ?? this.created,
        updated: updated ?? this.updated,
        type: type ?? this.type,
        name: name ?? this.name,
        system: system ?? this.system,
        required: required ?? this.required,
        unique: unique ?? this.unique,
        collectionId: collectionId ?? this.collectionId,
        extra: extra ?? this.extra,
      );
  @override
  String toString() {
    return (StringBuffer('FieldData(')
          ..write('id: $id, ')
          ..write('created: $created, ')
          ..write('updated: $updated, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('required: $required, ')
          ..write('unique: $unique, ')
          ..write('collectionId: $collectionId, ')
          ..write('extra: $extra')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, created, updated, type, name, system,
      required, unique, collectionId, extra);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is FieldData &&
          other.id == this.id &&
          other.created == this.created &&
          other.updated == this.updated &&
          other.type == this.type &&
          other.name == this.name &&
          other.system == this.system &&
          other.required == this.required &&
          other.unique == this.unique &&
          other.collectionId == this.collectionId &&
          other.extra == this.extra);
}

class FieldCompanion extends UpdateCompanion<FieldData> {
  final Value<String> id;
  final Value<DateTime> created;
  final Value<DateTime> updated;
  final Value<FieldType> type;
  final Value<String> name;
  final Value<bool> system;
  final Value<bool> required;
  final Value<bool> unique;
  final Value<String> collectionId;
  final Value<String> extra;
  const FieldCompanion({
    this.id = const Value.absent(),
    this.created = const Value.absent(),
    this.updated = const Value.absent(),
    this.type = const Value.absent(),
    this.name = const Value.absent(),
    this.system = const Value.absent(),
    this.required = const Value.absent(),
    this.unique = const Value.absent(),
    this.collectionId = const Value.absent(),
    this.extra = const Value.absent(),
  });
  FieldCompanion.insert({
    required String id,
    required DateTime created,
    required DateTime updated,
    required FieldType type,
    required String name,
    required bool system,
    required bool required,
    required bool unique,
    required String collectionId,
    required String extra,
  })  : id = Value(id),
        created = Value(created),
        updated = Value(updated),
        type = Value(type),
        name = Value(name),
        system = Value(system),
        required = Value(required),
        unique = Value(unique),
        collectionId = Value(collectionId),
        extra = Value(extra);
  static Insertable<FieldData> custom({
    Expression<String>? id,
    Expression<DateTime>? created,
    Expression<DateTime>? updated,
    Expression<String>? type,
    Expression<String>? name,
    Expression<bool>? system,
    Expression<bool>? required,
    Expression<bool>? unique,
    Expression<String>? collectionId,
    Expression<String>? extra,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (created != null) 'created': created,
      if (updated != null) 'updated': updated,
      if (type != null) 'type': type,
      if (name != null) 'name': name,
      if (system != null) 'system': system,
      if (required != null) 'required': required,
      if (unique != null) 'unique': unique,
      if (collectionId != null) 'collection_id': collectionId,
      if (extra != null) 'extra': extra,
    });
  }

  FieldCompanion copyWith(
      {Value<String>? id,
      Value<DateTime>? created,
      Value<DateTime>? updated,
      Value<FieldType>? type,
      Value<String>? name,
      Value<bool>? system,
      Value<bool>? required,
      Value<bool>? unique,
      Value<String>? collectionId,
      Value<String>? extra}) {
    return FieldCompanion(
      id: id ?? this.id,
      created: created ?? this.created,
      updated: updated ?? this.updated,
      type: type ?? this.type,
      name: name ?? this.name,
      system: system ?? this.system,
      required: required ?? this.required,
      unique: unique ?? this.unique,
      collectionId: collectionId ?? this.collectionId,
      extra: extra ?? this.extra,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (created.present) {
      map['created'] = Variable<DateTime>(created.value);
    }
    if (updated.present) {
      map['updated'] = Variable<DateTime>(updated.value);
    }
    if (type.present) {
      final converter = $FieldTable.$convertertype;
      map['type'] = Variable<String>(converter.toSql(type.value));
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (system.present) {
      map['system'] = Variable<bool>(system.value);
    }
    if (required.present) {
      map['required'] = Variable<bool>(required.value);
    }
    if (unique.present) {
      map['unique'] = Variable<bool>(unique.value);
    }
    if (collectionId.present) {
      map['collection_id'] = Variable<String>(collectionId.value);
    }
    if (extra.present) {
      map['extra'] = Variable<String>(extra.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('FieldCompanion(')
          ..write('id: $id, ')
          ..write('created: $created, ')
          ..write('updated: $updated, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('required: $required, ')
          ..write('unique: $unique, ')
          ..write('collectionId: $collectionId, ')
          ..write('extra: $extra')
          ..write(')'))
        .toString();
  }
}

abstract class _$LocalDatabase extends GeneratedDatabase {
  _$LocalDatabase(QueryExecutor e) : super(e);
  late final $CollectionTable collection = $CollectionTable(this);
  late final $FieldTable field = $FieldTable(this);
  late final CollectionDao collectionDao = CollectionDao(this as LocalDatabase);
  late final DocumentDao documentDao = DocumentDao(this as LocalDatabase);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [collection, field];
}
