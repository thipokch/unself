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
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  @override
  late final GeneratedColumn<String> type = GeneratedColumn<String>(
      'type', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
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
  static const VerificationMeta _optionsMeta =
      const VerificationMeta('options');
  @override
  late final GeneratedColumn<String> options = GeneratedColumn<String>(
      'options', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  @override
  List<GeneratedColumn> get $columns => [
        id,
        type,
        name,
        system,
        listRule,
        viewRule,
        createRule,
        updateRule,
        deleteRule,
        options
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
    if (data.containsKey('type')) {
      context.handle(
          _typeMeta, type.isAcceptableOrUnknown(data['type']!, _typeMeta));
    } else if (isInserting) {
      context.missing(_typeMeta);
    }
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
    if (data.containsKey('options')) {
      context.handle(_optionsMeta,
          options.isAcceptableOrUnknown(data['options']!, _optionsMeta));
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
      type: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!,
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
      options: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}options']),
    );
  }

  @override
  $CollectionTable createAlias(String alias) {
    return $CollectionTable(attachedDatabase, alias);
  }
}

class CollectionData extends DataClass implements Insertable<CollectionData> {
  final String id;
  final String type;
  final String name;
  final bool system;
  final String? listRule;
  final String? viewRule;
  final String? createRule;
  final String? updateRule;
  final String? deleteRule;
  final String? options;
  const CollectionData(
      {required this.id,
      required this.type,
      required this.name,
      required this.system,
      this.listRule,
      this.viewRule,
      this.createRule,
      this.updateRule,
      this.deleteRule,
      this.options});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['type'] = Variable<String>(type);
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
    if (!nullToAbsent || options != null) {
      map['options'] = Variable<String>(options);
    }
    return map;
  }

  CollectionCompanion toCompanion(bool nullToAbsent) {
    return CollectionCompanion(
      id: Value(id),
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
      options: options == null && nullToAbsent
          ? const Value.absent()
          : Value(options),
    );
  }

  factory CollectionData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return CollectionData(
      id: serializer.fromJson<String>(json['id']),
      type: serializer.fromJson<String>(json['type']),
      name: serializer.fromJson<String>(json['name']),
      system: serializer.fromJson<bool>(json['system']),
      listRule: serializer.fromJson<String?>(json['listRule']),
      viewRule: serializer.fromJson<String?>(json['viewRule']),
      createRule: serializer.fromJson<String?>(json['createRule']),
      updateRule: serializer.fromJson<String?>(json['updateRule']),
      deleteRule: serializer.fromJson<String?>(json['deleteRule']),
      options: serializer.fromJson<String?>(json['options']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'type': serializer.toJson<String>(type),
      'name': serializer.toJson<String>(name),
      'system': serializer.toJson<bool>(system),
      'listRule': serializer.toJson<String?>(listRule),
      'viewRule': serializer.toJson<String?>(viewRule),
      'createRule': serializer.toJson<String?>(createRule),
      'updateRule': serializer.toJson<String?>(updateRule),
      'deleteRule': serializer.toJson<String?>(deleteRule),
      'options': serializer.toJson<String?>(options),
    };
  }

  CollectionData copyWith(
          {String? id,
          String? type,
          String? name,
          bool? system,
          Value<String?> listRule = const Value.absent(),
          Value<String?> viewRule = const Value.absent(),
          Value<String?> createRule = const Value.absent(),
          Value<String?> updateRule = const Value.absent(),
          Value<String?> deleteRule = const Value.absent(),
          Value<String?> options = const Value.absent()}) =>
      CollectionData(
        id: id ?? this.id,
        type: type ?? this.type,
        name: name ?? this.name,
        system: system ?? this.system,
        listRule: listRule.present ? listRule.value : this.listRule,
        viewRule: viewRule.present ? viewRule.value : this.viewRule,
        createRule: createRule.present ? createRule.value : this.createRule,
        updateRule: updateRule.present ? updateRule.value : this.updateRule,
        deleteRule: deleteRule.present ? deleteRule.value : this.deleteRule,
        options: options.present ? options.value : this.options,
      );
  @override
  String toString() {
    return (StringBuffer('CollectionData(')
          ..write('id: $id, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('listRule: $listRule, ')
          ..write('viewRule: $viewRule, ')
          ..write('createRule: $createRule, ')
          ..write('updateRule: $updateRule, ')
          ..write('deleteRule: $deleteRule, ')
          ..write('options: $options')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, type, name, system, listRule, viewRule,
      createRule, updateRule, deleteRule, options);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is CollectionData &&
          other.id == this.id &&
          other.type == this.type &&
          other.name == this.name &&
          other.system == this.system &&
          other.listRule == this.listRule &&
          other.viewRule == this.viewRule &&
          other.createRule == this.createRule &&
          other.updateRule == this.updateRule &&
          other.deleteRule == this.deleteRule &&
          other.options == this.options);
}

class CollectionCompanion extends UpdateCompanion<CollectionData> {
  final Value<String> id;
  final Value<String> type;
  final Value<String> name;
  final Value<bool> system;
  final Value<String?> listRule;
  final Value<String?> viewRule;
  final Value<String?> createRule;
  final Value<String?> updateRule;
  final Value<String?> deleteRule;
  final Value<String?> options;
  const CollectionCompanion({
    this.id = const Value.absent(),
    this.type = const Value.absent(),
    this.name = const Value.absent(),
    this.system = const Value.absent(),
    this.listRule = const Value.absent(),
    this.viewRule = const Value.absent(),
    this.createRule = const Value.absent(),
    this.updateRule = const Value.absent(),
    this.deleteRule = const Value.absent(),
    this.options = const Value.absent(),
  });
  CollectionCompanion.insert({
    required String id,
    required String type,
    required String name,
    required bool system,
    this.listRule = const Value.absent(),
    this.viewRule = const Value.absent(),
    this.createRule = const Value.absent(),
    this.updateRule = const Value.absent(),
    this.deleteRule = const Value.absent(),
    this.options = const Value.absent(),
  })  : id = Value(id),
        type = Value(type),
        name = Value(name),
        system = Value(system);
  static Insertable<CollectionData> custom({
    Expression<String>? id,
    Expression<String>? type,
    Expression<String>? name,
    Expression<bool>? system,
    Expression<String>? listRule,
    Expression<String>? viewRule,
    Expression<String>? createRule,
    Expression<String>? updateRule,
    Expression<String>? deleteRule,
    Expression<String>? options,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (type != null) 'type': type,
      if (name != null) 'name': name,
      if (system != null) 'system': system,
      if (listRule != null) 'list_rule': listRule,
      if (viewRule != null) 'view_rule': viewRule,
      if (createRule != null) 'create_rule': createRule,
      if (updateRule != null) 'update_rule': updateRule,
      if (deleteRule != null) 'delete_rule': deleteRule,
      if (options != null) 'options': options,
    });
  }

  CollectionCompanion copyWith(
      {Value<String>? id,
      Value<String>? type,
      Value<String>? name,
      Value<bool>? system,
      Value<String?>? listRule,
      Value<String?>? viewRule,
      Value<String?>? createRule,
      Value<String?>? updateRule,
      Value<String?>? deleteRule,
      Value<String?>? options}) {
    return CollectionCompanion(
      id: id ?? this.id,
      type: type ?? this.type,
      name: name ?? this.name,
      system: system ?? this.system,
      listRule: listRule ?? this.listRule,
      viewRule: viewRule ?? this.viewRule,
      createRule: createRule ?? this.createRule,
      updateRule: updateRule ?? this.updateRule,
      deleteRule: deleteRule ?? this.deleteRule,
      options: options ?? this.options,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (type.present) {
      map['type'] = Variable<String>(type.value);
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
    if (options.present) {
      map['options'] = Variable<String>(options.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('CollectionCompanion(')
          ..write('id: $id, ')
          ..write('type: $type, ')
          ..write('name: $name, ')
          ..write('system: $system, ')
          ..write('listRule: $listRule, ')
          ..write('viewRule: $viewRule, ')
          ..write('createRule: $createRule, ')
          ..write('updateRule: $updateRule, ')
          ..write('deleteRule: $deleteRule, ')
          ..write('options: $options')
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
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  @override
  late final GeneratedColumn<String> type = GeneratedColumn<String>(
      'type', aliasedName, false,
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
  static const VerificationMeta _optionsMeta =
      const VerificationMeta('options');
  @override
  late final GeneratedColumn<String> options = GeneratedColumn<String>(
      'options', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _collectionIdMeta =
      const VerificationMeta('collectionId');
  @override
  late final GeneratedColumn<String> collectionId = GeneratedColumn<String>(
      'collection_id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('REFERENCES collection (id)'));
  @override
  List<GeneratedColumn> get $columns =>
      [id, name, type, system, required, unique, options, collectionId];
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
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('type')) {
      context.handle(
          _typeMeta, type.isAcceptableOrUnknown(data['type']!, _typeMeta));
    } else if (isInserting) {
      context.missing(_typeMeta);
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
    if (data.containsKey('options')) {
      context.handle(_optionsMeta,
          options.isAcceptableOrUnknown(data['options']!, _optionsMeta));
    }
    if (data.containsKey('collection_id')) {
      context.handle(
          _collectionIdMeta,
          collectionId.isAcceptableOrUnknown(
              data['collection_id']!, _collectionIdMeta));
    } else if (isInserting) {
      context.missing(_collectionIdMeta);
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
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      type: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!,
      system: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}system'])!,
      required: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}required'])!,
      unique: attachedDatabase.typeMapping
          .read(DriftSqlType.bool, data['${effectivePrefix}unique'])!,
      options: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}options']),
      collectionId: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}collection_id'])!,
    );
  }

  @override
  $FieldTable createAlias(String alias) {
    return $FieldTable(attachedDatabase, alias);
  }
}

class FieldData extends DataClass implements Insertable<FieldData> {
  final String id;
  final String name;
  final String type;
  final bool system;
  final bool required;
  final bool unique;
  final String? options;
  final String collectionId;
  const FieldData(
      {required this.id,
      required this.name,
      required this.type,
      required this.system,
      required this.required,
      required this.unique,
      this.options,
      required this.collectionId});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['name'] = Variable<String>(name);
    map['type'] = Variable<String>(type);
    map['system'] = Variable<bool>(system);
    map['required'] = Variable<bool>(required);
    map['unique'] = Variable<bool>(unique);
    if (!nullToAbsent || options != null) {
      map['options'] = Variable<String>(options);
    }
    map['collection_id'] = Variable<String>(collectionId);
    return map;
  }

  FieldCompanion toCompanion(bool nullToAbsent) {
    return FieldCompanion(
      id: Value(id),
      name: Value(name),
      type: Value(type),
      system: Value(system),
      required: Value(required),
      unique: Value(unique),
      options: options == null && nullToAbsent
          ? const Value.absent()
          : Value(options),
      collectionId: Value(collectionId),
    );
  }

  factory FieldData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return FieldData(
      id: serializer.fromJson<String>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      type: serializer.fromJson<String>(json['type']),
      system: serializer.fromJson<bool>(json['system']),
      required: serializer.fromJson<bool>(json['required']),
      unique: serializer.fromJson<bool>(json['unique']),
      options: serializer.fromJson<String?>(json['options']),
      collectionId: serializer.fromJson<String>(json['collectionId']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'name': serializer.toJson<String>(name),
      'type': serializer.toJson<String>(type),
      'system': serializer.toJson<bool>(system),
      'required': serializer.toJson<bool>(required),
      'unique': serializer.toJson<bool>(unique),
      'options': serializer.toJson<String?>(options),
      'collectionId': serializer.toJson<String>(collectionId),
    };
  }

  FieldData copyWith(
          {String? id,
          String? name,
          String? type,
          bool? system,
          bool? required,
          bool? unique,
          Value<String?> options = const Value.absent(),
          String? collectionId}) =>
      FieldData(
        id: id ?? this.id,
        name: name ?? this.name,
        type: type ?? this.type,
        system: system ?? this.system,
        required: required ?? this.required,
        unique: unique ?? this.unique,
        options: options.present ? options.value : this.options,
        collectionId: collectionId ?? this.collectionId,
      );
  @override
  String toString() {
    return (StringBuffer('FieldData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('type: $type, ')
          ..write('system: $system, ')
          ..write('required: $required, ')
          ..write('unique: $unique, ')
          ..write('options: $options, ')
          ..write('collectionId: $collectionId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(
      id, name, type, system, required, unique, options, collectionId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is FieldData &&
          other.id == this.id &&
          other.name == this.name &&
          other.type == this.type &&
          other.system == this.system &&
          other.required == this.required &&
          other.unique == this.unique &&
          other.options == this.options &&
          other.collectionId == this.collectionId);
}

class FieldCompanion extends UpdateCompanion<FieldData> {
  final Value<String> id;
  final Value<String> name;
  final Value<String> type;
  final Value<bool> system;
  final Value<bool> required;
  final Value<bool> unique;
  final Value<String?> options;
  final Value<String> collectionId;
  const FieldCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.type = const Value.absent(),
    this.system = const Value.absent(),
    this.required = const Value.absent(),
    this.unique = const Value.absent(),
    this.options = const Value.absent(),
    this.collectionId = const Value.absent(),
  });
  FieldCompanion.insert({
    required String id,
    required String name,
    required String type,
    required bool system,
    required bool required,
    required bool unique,
    this.options = const Value.absent(),
    required String collectionId,
  })  : id = Value(id),
        name = Value(name),
        type = Value(type),
        system = Value(system),
        required = Value(required),
        unique = Value(unique),
        collectionId = Value(collectionId);
  static Insertable<FieldData> custom({
    Expression<String>? id,
    Expression<String>? name,
    Expression<String>? type,
    Expression<bool>? system,
    Expression<bool>? required,
    Expression<bool>? unique,
    Expression<String>? options,
    Expression<String>? collectionId,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (type != null) 'type': type,
      if (system != null) 'system': system,
      if (required != null) 'required': required,
      if (unique != null) 'unique': unique,
      if (options != null) 'options': options,
      if (collectionId != null) 'collection_id': collectionId,
    });
  }

  FieldCompanion copyWith(
      {Value<String>? id,
      Value<String>? name,
      Value<String>? type,
      Value<bool>? system,
      Value<bool>? required,
      Value<bool>? unique,
      Value<String?>? options,
      Value<String>? collectionId}) {
    return FieldCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      type: type ?? this.type,
      system: system ?? this.system,
      required: required ?? this.required,
      unique: unique ?? this.unique,
      options: options ?? this.options,
      collectionId: collectionId ?? this.collectionId,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (type.present) {
      map['type'] = Variable<String>(type.value);
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
    if (options.present) {
      map['options'] = Variable<String>(options.value);
    }
    if (collectionId.present) {
      map['collection_id'] = Variable<String>(collectionId.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('FieldCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('type: $type, ')
          ..write('system: $system, ')
          ..write('required: $required, ')
          ..write('unique: $unique, ')
          ..write('options: $options, ')
          ..write('collectionId: $collectionId')
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
