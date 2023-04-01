// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'local_database.dart';

// ignore_for_file: type=lint
class $UnpackSpecTable extends UnpackSpec
    with TableInfo<$UnpackSpecTable, UnpackSpecData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $UnpackSpecTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      hasAutoIncrement: true,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('PRIMARY KEY AUTOINCREMENT'));
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _fileSpecMeta =
      const VerificationMeta('fileSpec');
  @override
  late final GeneratedColumn<String> fileSpec = GeneratedColumn<String>(
      'file_spec', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _retrieveSpecMeta =
      const VerificationMeta('retrieveSpec');
  @override
  late final GeneratedColumn<String> retrieveSpec = GeneratedColumn<String>(
      'retrieve_spec', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _modulesMeta =
      const VerificationMeta('modules');
  @override
  late final GeneratedColumn<String> modules = GeneratedColumn<String>(
      'modules', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns =>
      [id, name, fileSpec, retrieveSpec, modules];
  @override
  String get aliasedName => _alias ?? 'unpack_spec';
  @override
  String get actualTableName => 'unpack_spec';
  @override
  VerificationContext validateIntegrity(Insertable<UnpackSpecData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('file_spec')) {
      context.handle(_fileSpecMeta,
          fileSpec.isAcceptableOrUnknown(data['file_spec']!, _fileSpecMeta));
    } else if (isInserting) {
      context.missing(_fileSpecMeta);
    }
    if (data.containsKey('retrieve_spec')) {
      context.handle(
          _retrieveSpecMeta,
          retrieveSpec.isAcceptableOrUnknown(
              data['retrieve_spec']!, _retrieveSpecMeta));
    } else if (isInserting) {
      context.missing(_retrieveSpecMeta);
    }
    if (data.containsKey('modules')) {
      context.handle(_modulesMeta,
          modules.isAcceptableOrUnknown(data['modules']!, _modulesMeta));
    } else if (isInserting) {
      context.missing(_modulesMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UnpackSpecData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UnpackSpecData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      fileSpec: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}file_spec'])!,
      retrieveSpec: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}retrieve_spec'])!,
      modules: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}modules'])!,
    );
  }

  @override
  $UnpackSpecTable createAlias(String alias) {
    return $UnpackSpecTable(attachedDatabase, alias);
  }
}

class UnpackSpecData extends DataClass implements Insertable<UnpackSpecData> {
  final int id;
  final String name;
  final String fileSpec;
  final String retrieveSpec;
  final String modules;
  const UnpackSpecData(
      {required this.id,
      required this.name,
      required this.fileSpec,
      required this.retrieveSpec,
      required this.modules});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['name'] = Variable<String>(name);
    map['file_spec'] = Variable<String>(fileSpec);
    map['retrieve_spec'] = Variable<String>(retrieveSpec);
    map['modules'] = Variable<String>(modules);
    return map;
  }

  UnpackSpecCompanion toCompanion(bool nullToAbsent) {
    return UnpackSpecCompanion(
      id: Value(id),
      name: Value(name),
      fileSpec: Value(fileSpec),
      retrieveSpec: Value(retrieveSpec),
      modules: Value(modules),
    );
  }

  factory UnpackSpecData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UnpackSpecData(
      id: serializer.fromJson<int>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      fileSpec: serializer.fromJson<String>(json['fileSpec']),
      retrieveSpec: serializer.fromJson<String>(json['retrieveSpec']),
      modules: serializer.fromJson<String>(json['modules']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'name': serializer.toJson<String>(name),
      'fileSpec': serializer.toJson<String>(fileSpec),
      'retrieveSpec': serializer.toJson<String>(retrieveSpec),
      'modules': serializer.toJson<String>(modules),
    };
  }

  UnpackSpecData copyWith(
          {int? id,
          String? name,
          String? fileSpec,
          String? retrieveSpec,
          String? modules}) =>
      UnpackSpecData(
        id: id ?? this.id,
        name: name ?? this.name,
        fileSpec: fileSpec ?? this.fileSpec,
        retrieveSpec: retrieveSpec ?? this.retrieveSpec,
        modules: modules ?? this.modules,
      );
  @override
  String toString() {
    return (StringBuffer('UnpackSpecData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('fileSpec: $fileSpec, ')
          ..write('retrieveSpec: $retrieveSpec, ')
          ..write('modules: $modules')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, name, fileSpec, retrieveSpec, modules);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UnpackSpecData &&
          other.id == this.id &&
          other.name == this.name &&
          other.fileSpec == this.fileSpec &&
          other.retrieveSpec == this.retrieveSpec &&
          other.modules == this.modules);
}

class UnpackSpecCompanion extends UpdateCompanion<UnpackSpecData> {
  final Value<int> id;
  final Value<String> name;
  final Value<String> fileSpec;
  final Value<String> retrieveSpec;
  final Value<String> modules;
  const UnpackSpecCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.fileSpec = const Value.absent(),
    this.retrieveSpec = const Value.absent(),
    this.modules = const Value.absent(),
  });
  UnpackSpecCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String fileSpec,
    required String retrieveSpec,
    required String modules,
  })  : name = Value(name),
        fileSpec = Value(fileSpec),
        retrieveSpec = Value(retrieveSpec),
        modules = Value(modules);
  static Insertable<UnpackSpecData> custom({
    Expression<int>? id,
    Expression<String>? name,
    Expression<String>? fileSpec,
    Expression<String>? retrieveSpec,
    Expression<String>? modules,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (fileSpec != null) 'file_spec': fileSpec,
      if (retrieveSpec != null) 'retrieve_spec': retrieveSpec,
      if (modules != null) 'modules': modules,
    });
  }

  UnpackSpecCompanion copyWith(
      {Value<int>? id,
      Value<String>? name,
      Value<String>? fileSpec,
      Value<String>? retrieveSpec,
      Value<String>? modules}) {
    return UnpackSpecCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      fileSpec: fileSpec ?? this.fileSpec,
      retrieveSpec: retrieveSpec ?? this.retrieveSpec,
      modules: modules ?? this.modules,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (fileSpec.present) {
      map['file_spec'] = Variable<String>(fileSpec.value);
    }
    if (retrieveSpec.present) {
      map['retrieve_spec'] = Variable<String>(retrieveSpec.value);
    }
    if (modules.present) {
      map['modules'] = Variable<String>(modules.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UnpackSpecCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('fileSpec: $fileSpec, ')
          ..write('retrieveSpec: $retrieveSpec, ')
          ..write('modules: $modules')
          ..write(')'))
        .toString();
  }
}

class $UnpackStateTable extends UnpackState
    with TableInfo<$UnpackStateTable, UnpackStateData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $UnpackStateTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int> id = GeneratedColumn<int>(
      'id', aliasedName, false,
      hasAutoIncrement: true,
      type: DriftSqlType.int,
      requiredDuringInsert: false,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('PRIMARY KEY AUTOINCREMENT'));
  static const VerificationMeta _specIdMeta = const VerificationMeta('specId');
  @override
  late final GeneratedColumn<int> specId = GeneratedColumn<int>(
      'spec_id', aliasedName, false,
      type: DriftSqlType.int,
      requiredDuringInsert: true,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('REFERENCES unpack_spec (id)'));
  static const VerificationMeta _stepMeta = const VerificationMeta('step');
  @override
  late final GeneratedColumn<String> step = GeneratedColumn<String>(
      'step', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _selectedModulesMeta =
      const VerificationMeta('selectedModules');
  @override
  late final GeneratedColumn<String> selectedModules = GeneratedColumn<String>(
      'selected_modules', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  static const VerificationMeta _filePathMeta =
      const VerificationMeta('filePath');
  @override
  late final GeneratedColumn<String> filePath = GeneratedColumn<String>(
      'file_path', aliasedName, true,
      type: DriftSqlType.string, requiredDuringInsert: false);
  @override
  List<GeneratedColumn> get $columns =>
      [id, specId, step, selectedModules, filePath];
  @override
  String get aliasedName => _alias ?? 'unpack_state';
  @override
  String get actualTableName => 'unpack_state';
  @override
  VerificationContext validateIntegrity(Insertable<UnpackStateData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('spec_id')) {
      context.handle(_specIdMeta,
          specId.isAcceptableOrUnknown(data['spec_id']!, _specIdMeta));
    } else if (isInserting) {
      context.missing(_specIdMeta);
    }
    if (data.containsKey('step')) {
      context.handle(
          _stepMeta, step.isAcceptableOrUnknown(data['step']!, _stepMeta));
    } else if (isInserting) {
      context.missing(_stepMeta);
    }
    if (data.containsKey('selected_modules')) {
      context.handle(
          _selectedModulesMeta,
          selectedModules.isAcceptableOrUnknown(
              data['selected_modules']!, _selectedModulesMeta));
    }
    if (data.containsKey('file_path')) {
      context.handle(_filePathMeta,
          filePath.isAcceptableOrUnknown(data['file_path']!, _filePathMeta));
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UnpackStateData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return UnpackStateData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}id'])!,
      specId: attachedDatabase.typeMapping
          .read(DriftSqlType.int, data['${effectivePrefix}spec_id'])!,
      step: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}step'])!,
      selectedModules: attachedDatabase.typeMapping.read(
          DriftSqlType.string, data['${effectivePrefix}selected_modules']),
      filePath: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}file_path']),
    );
  }

  @override
  $UnpackStateTable createAlias(String alias) {
    return $UnpackStateTable(attachedDatabase, alias);
  }
}

class UnpackStateData extends DataClass implements Insertable<UnpackStateData> {
  final int id;
  final int specId;
  final String step;
  final String? selectedModules;
  final String? filePath;
  const UnpackStateData(
      {required this.id,
      required this.specId,
      required this.step,
      this.selectedModules,
      this.filePath});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['spec_id'] = Variable<int>(specId);
    map['step'] = Variable<String>(step);
    if (!nullToAbsent || selectedModules != null) {
      map['selected_modules'] = Variable<String>(selectedModules);
    }
    if (!nullToAbsent || filePath != null) {
      map['file_path'] = Variable<String>(filePath);
    }
    return map;
  }

  UnpackStateCompanion toCompanion(bool nullToAbsent) {
    return UnpackStateCompanion(
      id: Value(id),
      specId: Value(specId),
      step: Value(step),
      selectedModules: selectedModules == null && nullToAbsent
          ? const Value.absent()
          : Value(selectedModules),
      filePath: filePath == null && nullToAbsent
          ? const Value.absent()
          : Value(filePath),
    );
  }

  factory UnpackStateData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UnpackStateData(
      id: serializer.fromJson<int>(json['id']),
      specId: serializer.fromJson<int>(json['specId']),
      step: serializer.fromJson<String>(json['step']),
      selectedModules: serializer.fromJson<String?>(json['selectedModules']),
      filePath: serializer.fromJson<String?>(json['filePath']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'specId': serializer.toJson<int>(specId),
      'step': serializer.toJson<String>(step),
      'selectedModules': serializer.toJson<String?>(selectedModules),
      'filePath': serializer.toJson<String?>(filePath),
    };
  }

  UnpackStateData copyWith(
          {int? id,
          int? specId,
          String? step,
          Value<String?> selectedModules = const Value.absent(),
          Value<String?> filePath = const Value.absent()}) =>
      UnpackStateData(
        id: id ?? this.id,
        specId: specId ?? this.specId,
        step: step ?? this.step,
        selectedModules: selectedModules.present
            ? selectedModules.value
            : this.selectedModules,
        filePath: filePath.present ? filePath.value : this.filePath,
      );
  @override
  String toString() {
    return (StringBuffer('UnpackStateData(')
          ..write('id: $id, ')
          ..write('specId: $specId, ')
          ..write('step: $step, ')
          ..write('selectedModules: $selectedModules, ')
          ..write('filePath: $filePath')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, specId, step, selectedModules, filePath);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UnpackStateData &&
          other.id == this.id &&
          other.specId == this.specId &&
          other.step == this.step &&
          other.selectedModules == this.selectedModules &&
          other.filePath == this.filePath);
}

class UnpackStateCompanion extends UpdateCompanion<UnpackStateData> {
  final Value<int> id;
  final Value<int> specId;
  final Value<String> step;
  final Value<String?> selectedModules;
  final Value<String?> filePath;
  const UnpackStateCompanion({
    this.id = const Value.absent(),
    this.specId = const Value.absent(),
    this.step = const Value.absent(),
    this.selectedModules = const Value.absent(),
    this.filePath = const Value.absent(),
  });
  UnpackStateCompanion.insert({
    this.id = const Value.absent(),
    required int specId,
    required String step,
    this.selectedModules = const Value.absent(),
    this.filePath = const Value.absent(),
  })  : specId = Value(specId),
        step = Value(step);
  static Insertable<UnpackStateData> custom({
    Expression<int>? id,
    Expression<int>? specId,
    Expression<String>? step,
    Expression<String>? selectedModules,
    Expression<String>? filePath,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (specId != null) 'spec_id': specId,
      if (step != null) 'step': step,
      if (selectedModules != null) 'selected_modules': selectedModules,
      if (filePath != null) 'file_path': filePath,
    });
  }

  UnpackStateCompanion copyWith(
      {Value<int>? id,
      Value<int>? specId,
      Value<String>? step,
      Value<String?>? selectedModules,
      Value<String?>? filePath}) {
    return UnpackStateCompanion(
      id: id ?? this.id,
      specId: specId ?? this.specId,
      step: step ?? this.step,
      selectedModules: selectedModules ?? this.selectedModules,
      filePath: filePath ?? this.filePath,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (specId.present) {
      map['spec_id'] = Variable<int>(specId.value);
    }
    if (step.present) {
      map['step'] = Variable<String>(step.value);
    }
    if (selectedModules.present) {
      map['selected_modules'] = Variable<String>(selectedModules.value);
    }
    if (filePath.present) {
      map['file_path'] = Variable<String>(filePath.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UnpackStateCompanion(')
          ..write('id: $id, ')
          ..write('specId: $specId, ')
          ..write('step: $step, ')
          ..write('selectedModules: $selectedModules, ')
          ..write('filePath: $filePath')
          ..write(')'))
        .toString();
  }
}

abstract class _$LocalDatabase extends GeneratedDatabase {
  _$LocalDatabase(QueryExecutor e) : super(e);
  late final $UnpackSpecTable unpackSpec = $UnpackSpecTable(this);
  late final $UnpackStateTable unpackState = $UnpackStateTable(this);
  late final UnpackStateDao unpackStateDao =
      UnpackStateDao(this as LocalDatabase);
  late final UnpackSpecDao unpackSpecDao = UnpackSpecDao(this as LocalDatabase);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [unpackSpec, unpackState];
}
