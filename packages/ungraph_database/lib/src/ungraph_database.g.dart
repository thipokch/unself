// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'ungraph_database.dart';

// ignore_for_file: type=lint
class $UnpackSpecTable extends UnpackSpec
    with TableInfo<$UnpackSpecTable, UnpackSpecData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $UnpackSpecTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: false,
      clientDefault: () => Slugid.nice().toString());
  static const VerificationMeta _slugMeta = const VerificationMeta('slug');
  @override
  late final GeneratedColumn<String> slug = GeneratedColumn<String>(
      'slug', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'));
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
      [id, slug, name, fileSpec, retrieveSpec, modules];
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
    if (data.containsKey('slug')) {
      context.handle(
          _slugMeta, slug.isAcceptableOrUnknown(data['slug']!, _slugMeta));
    } else if (isInserting) {
      context.missing(_slugMeta);
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
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      slug: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}slug'])!,
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
  final String id;
  final String slug;
  final String name;
  final String fileSpec;
  final String retrieveSpec;
  final String modules;
  const UnpackSpecData(
      {required this.id,
      required this.slug,
      required this.name,
      required this.fileSpec,
      required this.retrieveSpec,
      required this.modules});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['slug'] = Variable<String>(slug);
    map['name'] = Variable<String>(name);
    map['file_spec'] = Variable<String>(fileSpec);
    map['retrieve_spec'] = Variable<String>(retrieveSpec);
    map['modules'] = Variable<String>(modules);
    return map;
  }

  UnpackSpecCompanion toCompanion(bool nullToAbsent) {
    return UnpackSpecCompanion(
      id: Value(id),
      slug: Value(slug),
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
      id: serializer.fromJson<String>(json['id']),
      slug: serializer.fromJson<String>(json['slug']),
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
      'id': serializer.toJson<String>(id),
      'slug': serializer.toJson<String>(slug),
      'name': serializer.toJson<String>(name),
      'fileSpec': serializer.toJson<String>(fileSpec),
      'retrieveSpec': serializer.toJson<String>(retrieveSpec),
      'modules': serializer.toJson<String>(modules),
    };
  }

  UnpackSpecData copyWith(
          {String? id,
          String? slug,
          String? name,
          String? fileSpec,
          String? retrieveSpec,
          String? modules}) =>
      UnpackSpecData(
        id: id ?? this.id,
        slug: slug ?? this.slug,
        name: name ?? this.name,
        fileSpec: fileSpec ?? this.fileSpec,
        retrieveSpec: retrieveSpec ?? this.retrieveSpec,
        modules: modules ?? this.modules,
      );
  @override
  String toString() {
    return (StringBuffer('UnpackSpecData(')
          ..write('id: $id, ')
          ..write('slug: $slug, ')
          ..write('name: $name, ')
          ..write('fileSpec: $fileSpec, ')
          ..write('retrieveSpec: $retrieveSpec, ')
          ..write('modules: $modules')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode =>
      Object.hash(id, slug, name, fileSpec, retrieveSpec, modules);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UnpackSpecData &&
          other.id == this.id &&
          other.slug == this.slug &&
          other.name == this.name &&
          other.fileSpec == this.fileSpec &&
          other.retrieveSpec == this.retrieveSpec &&
          other.modules == this.modules);
}

class UnpackSpecCompanion extends UpdateCompanion<UnpackSpecData> {
  final Value<String> id;
  final Value<String> slug;
  final Value<String> name;
  final Value<String> fileSpec;
  final Value<String> retrieveSpec;
  final Value<String> modules;
  final Value<int> rowid;
  const UnpackSpecCompanion({
    this.id = const Value.absent(),
    this.slug = const Value.absent(),
    this.name = const Value.absent(),
    this.fileSpec = const Value.absent(),
    this.retrieveSpec = const Value.absent(),
    this.modules = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  UnpackSpecCompanion.insert({
    this.id = const Value.absent(),
    required String slug,
    required String name,
    required String fileSpec,
    required String retrieveSpec,
    required String modules,
    this.rowid = const Value.absent(),
  })  : slug = Value(slug),
        name = Value(name),
        fileSpec = Value(fileSpec),
        retrieveSpec = Value(retrieveSpec),
        modules = Value(modules);
  static Insertable<UnpackSpecData> custom({
    Expression<String>? id,
    Expression<String>? slug,
    Expression<String>? name,
    Expression<String>? fileSpec,
    Expression<String>? retrieveSpec,
    Expression<String>? modules,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (slug != null) 'slug': slug,
      if (name != null) 'name': name,
      if (fileSpec != null) 'file_spec': fileSpec,
      if (retrieveSpec != null) 'retrieve_spec': retrieveSpec,
      if (modules != null) 'modules': modules,
      if (rowid != null) 'rowid': rowid,
    });
  }

  UnpackSpecCompanion copyWith(
      {Value<String>? id,
      Value<String>? slug,
      Value<String>? name,
      Value<String>? fileSpec,
      Value<String>? retrieveSpec,
      Value<String>? modules,
      Value<int>? rowid}) {
    return UnpackSpecCompanion(
      id: id ?? this.id,
      slug: slug ?? this.slug,
      name: name ?? this.name,
      fileSpec: fileSpec ?? this.fileSpec,
      retrieveSpec: retrieveSpec ?? this.retrieveSpec,
      modules: modules ?? this.modules,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (slug.present) {
      map['slug'] = Variable<String>(slug.value);
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
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UnpackSpecCompanion(')
          ..write('id: $id, ')
          ..write('slug: $slug, ')
          ..write('name: $name, ')
          ..write('fileSpec: $fileSpec, ')
          ..write('retrieveSpec: $retrieveSpec, ')
          ..write('modules: $modules, ')
          ..write('rowid: $rowid')
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
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: false,
      clientDefault: () => Slugid.nice().toString());
  static const VerificationMeta _specIdMeta = const VerificationMeta('specId');
  @override
  late final GeneratedColumn<String> specId = GeneratedColumn<String>(
      'spec_id', aliasedName, false,
      type: DriftSqlType.string,
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
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      specId: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}spec_id'])!,
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
  final String id;
  final String specId;
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
    map['id'] = Variable<String>(id);
    map['spec_id'] = Variable<String>(specId);
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
      id: serializer.fromJson<String>(json['id']),
      specId: serializer.fromJson<String>(json['specId']),
      step: serializer.fromJson<String>(json['step']),
      selectedModules: serializer.fromJson<String?>(json['selectedModules']),
      filePath: serializer.fromJson<String?>(json['filePath']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'specId': serializer.toJson<String>(specId),
      'step': serializer.toJson<String>(step),
      'selectedModules': serializer.toJson<String?>(selectedModules),
      'filePath': serializer.toJson<String?>(filePath),
    };
  }

  UnpackStateData copyWith(
          {String? id,
          String? specId,
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
  final Value<String> id;
  final Value<String> specId;
  final Value<String> step;
  final Value<String?> selectedModules;
  final Value<String?> filePath;
  final Value<int> rowid;
  const UnpackStateCompanion({
    this.id = const Value.absent(),
    this.specId = const Value.absent(),
    this.step = const Value.absent(),
    this.selectedModules = const Value.absent(),
    this.filePath = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  UnpackStateCompanion.insert({
    this.id = const Value.absent(),
    required String specId,
    required String step,
    this.selectedModules = const Value.absent(),
    this.filePath = const Value.absent(),
    this.rowid = const Value.absent(),
  })  : specId = Value(specId),
        step = Value(step);
  static Insertable<UnpackStateData> custom({
    Expression<String>? id,
    Expression<String>? specId,
    Expression<String>? step,
    Expression<String>? selectedModules,
    Expression<String>? filePath,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (specId != null) 'spec_id': specId,
      if (step != null) 'step': step,
      if (selectedModules != null) 'selected_modules': selectedModules,
      if (filePath != null) 'file_path': filePath,
      if (rowid != null) 'rowid': rowid,
    });
  }

  UnpackStateCompanion copyWith(
      {Value<String>? id,
      Value<String>? specId,
      Value<String>? step,
      Value<String?>? selectedModules,
      Value<String?>? filePath,
      Value<int>? rowid}) {
    return UnpackStateCompanion(
      id: id ?? this.id,
      specId: specId ?? this.specId,
      step: step ?? this.step,
      selectedModules: selectedModules ?? this.selectedModules,
      filePath: filePath ?? this.filePath,
      rowid: rowid ?? this.rowid,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<String>(id.value);
    }
    if (specId.present) {
      map['spec_id'] = Variable<String>(specId.value);
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
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
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
          ..write('filePath: $filePath, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

class $NodeSpecTable extends NodeSpec
    with TableInfo<$NodeSpecTable, NodeSpecData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $NodeSpecTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: false,
      clientDefault: () => Slugid.nice().toString());
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _descriptionMeta =
      const VerificationMeta('description');
  @override
  late final GeneratedColumn<String> description = GeneratedColumn<String>(
      'description', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _slugMeta = const VerificationMeta('slug');
  @override
  late final GeneratedColumn<String> slug = GeneratedColumn<String>(
      'slug', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'));
  static const VerificationMeta _labelsMeta = const VerificationMeta('labels');
  @override
  late final GeneratedColumn<String> labels = GeneratedColumn<String>(
      'labels', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _jsonSpecsMeta =
      const VerificationMeta('jsonSpecs');
  @override
  late final GeneratedColumn<String> jsonSpecs = GeneratedColumn<String>(
      'json_specs', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns =>
      [id, name, description, slug, labels, jsonSpecs];
  @override
  String get aliasedName => _alias ?? 'node_spec';
  @override
  String get actualTableName => 'node_spec';
  @override
  VerificationContext validateIntegrity(Insertable<NodeSpecData> instance,
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
    if (data.containsKey('description')) {
      context.handle(
          _descriptionMeta,
          description.isAcceptableOrUnknown(
              data['description']!, _descriptionMeta));
    } else if (isInserting) {
      context.missing(_descriptionMeta);
    }
    if (data.containsKey('slug')) {
      context.handle(
          _slugMeta, slug.isAcceptableOrUnknown(data['slug']!, _slugMeta));
    } else if (isInserting) {
      context.missing(_slugMeta);
    }
    if (data.containsKey('labels')) {
      context.handle(_labelsMeta,
          labels.isAcceptableOrUnknown(data['labels']!, _labelsMeta));
    } else if (isInserting) {
      context.missing(_labelsMeta);
    }
    if (data.containsKey('json_specs')) {
      context.handle(_jsonSpecsMeta,
          jsonSpecs.isAcceptableOrUnknown(data['json_specs']!, _jsonSpecsMeta));
    } else if (isInserting) {
      context.missing(_jsonSpecsMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  NodeSpecData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return NodeSpecData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      description: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}description'])!,
      slug: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}slug'])!,
      labels: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}labels'])!,
      jsonSpecs: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}json_specs'])!,
    );
  }

  @override
  $NodeSpecTable createAlias(String alias) {
    return $NodeSpecTable(attachedDatabase, alias);
  }
}

class NodeSpecData extends DataClass implements Insertable<NodeSpecData> {
  final String id;
  final String name;
  final String description;
  final String slug;
  final String labels;
  final String jsonSpecs;
  const NodeSpecData(
      {required this.id,
      required this.name,
      required this.description,
      required this.slug,
      required this.labels,
      required this.jsonSpecs});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['name'] = Variable<String>(name);
    map['description'] = Variable<String>(description);
    map['slug'] = Variable<String>(slug);
    map['labels'] = Variable<String>(labels);
    map['json_specs'] = Variable<String>(jsonSpecs);
    return map;
  }

  NodeSpecCompanion toCompanion(bool nullToAbsent) {
    return NodeSpecCompanion(
      id: Value(id),
      name: Value(name),
      description: Value(description),
      slug: Value(slug),
      labels: Value(labels),
      jsonSpecs: Value(jsonSpecs),
    );
  }

  factory NodeSpecData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return NodeSpecData(
      id: serializer.fromJson<String>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      description: serializer.fromJson<String>(json['description']),
      slug: serializer.fromJson<String>(json['slug']),
      labels: serializer.fromJson<String>(json['labels']),
      jsonSpecs: serializer.fromJson<String>(json['jsonSpecs']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'name': serializer.toJson<String>(name),
      'description': serializer.toJson<String>(description),
      'slug': serializer.toJson<String>(slug),
      'labels': serializer.toJson<String>(labels),
      'jsonSpecs': serializer.toJson<String>(jsonSpecs),
    };
  }

  NodeSpecData copyWith(
          {String? id,
          String? name,
          String? description,
          String? slug,
          String? labels,
          String? jsonSpecs}) =>
      NodeSpecData(
        id: id ?? this.id,
        name: name ?? this.name,
        description: description ?? this.description,
        slug: slug ?? this.slug,
        labels: labels ?? this.labels,
        jsonSpecs: jsonSpecs ?? this.jsonSpecs,
      );
  @override
  String toString() {
    return (StringBuffer('NodeSpecData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description, ')
          ..write('slug: $slug, ')
          ..write('labels: $labels, ')
          ..write('jsonSpecs: $jsonSpecs')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode =>
      Object.hash(id, name, description, slug, labels, jsonSpecs);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is NodeSpecData &&
          other.id == this.id &&
          other.name == this.name &&
          other.description == this.description &&
          other.slug == this.slug &&
          other.labels == this.labels &&
          other.jsonSpecs == this.jsonSpecs);
}

class NodeSpecCompanion extends UpdateCompanion<NodeSpecData> {
  final Value<String> id;
  final Value<String> name;
  final Value<String> description;
  final Value<String> slug;
  final Value<String> labels;
  final Value<String> jsonSpecs;
  final Value<int> rowid;
  const NodeSpecCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.description = const Value.absent(),
    this.slug = const Value.absent(),
    this.labels = const Value.absent(),
    this.jsonSpecs = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  NodeSpecCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String description,
    required String slug,
    required String labels,
    required String jsonSpecs,
    this.rowid = const Value.absent(),
  })  : name = Value(name),
        description = Value(description),
        slug = Value(slug),
        labels = Value(labels),
        jsonSpecs = Value(jsonSpecs);
  static Insertable<NodeSpecData> custom({
    Expression<String>? id,
    Expression<String>? name,
    Expression<String>? description,
    Expression<String>? slug,
    Expression<String>? labels,
    Expression<String>? jsonSpecs,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (description != null) 'description': description,
      if (slug != null) 'slug': slug,
      if (labels != null) 'labels': labels,
      if (jsonSpecs != null) 'json_specs': jsonSpecs,
      if (rowid != null) 'rowid': rowid,
    });
  }

  NodeSpecCompanion copyWith(
      {Value<String>? id,
      Value<String>? name,
      Value<String>? description,
      Value<String>? slug,
      Value<String>? labels,
      Value<String>? jsonSpecs,
      Value<int>? rowid}) {
    return NodeSpecCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      description: description ?? this.description,
      slug: slug ?? this.slug,
      labels: labels ?? this.labels,
      jsonSpecs: jsonSpecs ?? this.jsonSpecs,
      rowid: rowid ?? this.rowid,
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
    if (description.present) {
      map['description'] = Variable<String>(description.value);
    }
    if (slug.present) {
      map['slug'] = Variable<String>(slug.value);
    }
    if (labels.present) {
      map['labels'] = Variable<String>(labels.value);
    }
    if (jsonSpecs.present) {
      map['json_specs'] = Variable<String>(jsonSpecs.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('NodeSpecCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description, ')
          ..write('slug: $slug, ')
          ..write('labels: $labels, ')
          ..write('jsonSpecs: $jsonSpecs, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

class $EdgeSpecTable extends EdgeSpec
    with TableInfo<$EdgeSpecTable, EdgeSpecData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $EdgeSpecTable(this.attachedDatabase, [this._alias]);
  static const VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<String> id = GeneratedColumn<String>(
      'id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: false,
      clientDefault: () => Slugid.nice().toString());
  static const VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String> name = GeneratedColumn<String>(
      'name', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _descriptionMeta =
      const VerificationMeta('description');
  @override
  late final GeneratedColumn<String> description = GeneratedColumn<String>(
      'description', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _slugMeta = const VerificationMeta('slug');
  @override
  late final GeneratedColumn<String> slug = GeneratedColumn<String>(
      'slug', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints: GeneratedColumn.constraintIsAlways('UNIQUE'));
  static const VerificationMeta _typeMeta = const VerificationMeta('type');
  @override
  late final GeneratedColumn<String> type = GeneratedColumn<String>(
      'type', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _jsonSpecsMeta =
      const VerificationMeta('jsonSpecs');
  @override
  late final GeneratedColumn<String> jsonSpecs = GeneratedColumn<String>(
      'json_specs', aliasedName, false,
      type: DriftSqlType.string, requiredDuringInsert: true);
  static const VerificationMeta _sourceNodeSpecIdMeta =
      const VerificationMeta('sourceNodeSpecId');
  @override
  late final GeneratedColumn<String> sourceNodeSpecId = GeneratedColumn<String>(
      'source_node_spec_id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('REFERENCES node_spec (slug)'));
  static const VerificationMeta _targetNodeSpecIdMeta =
      const VerificationMeta('targetNodeSpecId');
  @override
  late final GeneratedColumn<String> targetNodeSpecId = GeneratedColumn<String>(
      'target_node_spec_id', aliasedName, false,
      type: DriftSqlType.string,
      requiredDuringInsert: true,
      defaultConstraints:
          GeneratedColumn.constraintIsAlways('REFERENCES node_spec (slug)'));
  @override
  List<GeneratedColumn> get $columns => [
        id,
        name,
        description,
        slug,
        type,
        jsonSpecs,
        sourceNodeSpecId,
        targetNodeSpecId
      ];
  @override
  String get aliasedName => _alias ?? 'edge_spec';
  @override
  String get actualTableName => 'edge_spec';
  @override
  VerificationContext validateIntegrity(Insertable<EdgeSpecData> instance,
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
    if (data.containsKey('description')) {
      context.handle(
          _descriptionMeta,
          description.isAcceptableOrUnknown(
              data['description']!, _descriptionMeta));
    } else if (isInserting) {
      context.missing(_descriptionMeta);
    }
    if (data.containsKey('slug')) {
      context.handle(
          _slugMeta, slug.isAcceptableOrUnknown(data['slug']!, _slugMeta));
    } else if (isInserting) {
      context.missing(_slugMeta);
    }
    if (data.containsKey('type')) {
      context.handle(
          _typeMeta, type.isAcceptableOrUnknown(data['type']!, _typeMeta));
    } else if (isInserting) {
      context.missing(_typeMeta);
    }
    if (data.containsKey('json_specs')) {
      context.handle(_jsonSpecsMeta,
          jsonSpecs.isAcceptableOrUnknown(data['json_specs']!, _jsonSpecsMeta));
    } else if (isInserting) {
      context.missing(_jsonSpecsMeta);
    }
    if (data.containsKey('source_node_spec_id')) {
      context.handle(
          _sourceNodeSpecIdMeta,
          sourceNodeSpecId.isAcceptableOrUnknown(
              data['source_node_spec_id']!, _sourceNodeSpecIdMeta));
    } else if (isInserting) {
      context.missing(_sourceNodeSpecIdMeta);
    }
    if (data.containsKey('target_node_spec_id')) {
      context.handle(
          _targetNodeSpecIdMeta,
          targetNodeSpecId.isAcceptableOrUnknown(
              data['target_node_spec_id']!, _targetNodeSpecIdMeta));
    } else if (isInserting) {
      context.missing(_targetNodeSpecIdMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  EdgeSpecData map(Map<String, dynamic> data, {String? tablePrefix}) {
    final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : '';
    return EdgeSpecData(
      id: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}id'])!,
      name: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}name'])!,
      description: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}description'])!,
      slug: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}slug'])!,
      type: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}type'])!,
      jsonSpecs: attachedDatabase.typeMapping
          .read(DriftSqlType.string, data['${effectivePrefix}json_specs'])!,
      sourceNodeSpecId: attachedDatabase.typeMapping.read(
          DriftSqlType.string, data['${effectivePrefix}source_node_spec_id'])!,
      targetNodeSpecId: attachedDatabase.typeMapping.read(
          DriftSqlType.string, data['${effectivePrefix}target_node_spec_id'])!,
    );
  }

  @override
  $EdgeSpecTable createAlias(String alias) {
    return $EdgeSpecTable(attachedDatabase, alias);
  }
}

class EdgeSpecData extends DataClass implements Insertable<EdgeSpecData> {
  final String id;
  final String name;
  final String description;
  final String slug;
  final String type;
  final String jsonSpecs;
  final String sourceNodeSpecId;
  final String targetNodeSpecId;
  const EdgeSpecData(
      {required this.id,
      required this.name,
      required this.description,
      required this.slug,
      required this.type,
      required this.jsonSpecs,
      required this.sourceNodeSpecId,
      required this.targetNodeSpecId});
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<String>(id);
    map['name'] = Variable<String>(name);
    map['description'] = Variable<String>(description);
    map['slug'] = Variable<String>(slug);
    map['type'] = Variable<String>(type);
    map['json_specs'] = Variable<String>(jsonSpecs);
    map['source_node_spec_id'] = Variable<String>(sourceNodeSpecId);
    map['target_node_spec_id'] = Variable<String>(targetNodeSpecId);
    return map;
  }

  EdgeSpecCompanion toCompanion(bool nullToAbsent) {
    return EdgeSpecCompanion(
      id: Value(id),
      name: Value(name),
      description: Value(description),
      slug: Value(slug),
      type: Value(type),
      jsonSpecs: Value(jsonSpecs),
      sourceNodeSpecId: Value(sourceNodeSpecId),
      targetNodeSpecId: Value(targetNodeSpecId),
    );
  }

  factory EdgeSpecData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return EdgeSpecData(
      id: serializer.fromJson<String>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      description: serializer.fromJson<String>(json['description']),
      slug: serializer.fromJson<String>(json['slug']),
      type: serializer.fromJson<String>(json['type']),
      jsonSpecs: serializer.fromJson<String>(json['jsonSpecs']),
      sourceNodeSpecId: serializer.fromJson<String>(json['sourceNodeSpecId']),
      targetNodeSpecId: serializer.fromJson<String>(json['targetNodeSpecId']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<String>(id),
      'name': serializer.toJson<String>(name),
      'description': serializer.toJson<String>(description),
      'slug': serializer.toJson<String>(slug),
      'type': serializer.toJson<String>(type),
      'jsonSpecs': serializer.toJson<String>(jsonSpecs),
      'sourceNodeSpecId': serializer.toJson<String>(sourceNodeSpecId),
      'targetNodeSpecId': serializer.toJson<String>(targetNodeSpecId),
    };
  }

  EdgeSpecData copyWith(
          {String? id,
          String? name,
          String? description,
          String? slug,
          String? type,
          String? jsonSpecs,
          String? sourceNodeSpecId,
          String? targetNodeSpecId}) =>
      EdgeSpecData(
        id: id ?? this.id,
        name: name ?? this.name,
        description: description ?? this.description,
        slug: slug ?? this.slug,
        type: type ?? this.type,
        jsonSpecs: jsonSpecs ?? this.jsonSpecs,
        sourceNodeSpecId: sourceNodeSpecId ?? this.sourceNodeSpecId,
        targetNodeSpecId: targetNodeSpecId ?? this.targetNodeSpecId,
      );
  @override
  String toString() {
    return (StringBuffer('EdgeSpecData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description, ')
          ..write('slug: $slug, ')
          ..write('type: $type, ')
          ..write('jsonSpecs: $jsonSpecs, ')
          ..write('sourceNodeSpecId: $sourceNodeSpecId, ')
          ..write('targetNodeSpecId: $targetNodeSpecId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, name, description, slug, type, jsonSpecs,
      sourceNodeSpecId, targetNodeSpecId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is EdgeSpecData &&
          other.id == this.id &&
          other.name == this.name &&
          other.description == this.description &&
          other.slug == this.slug &&
          other.type == this.type &&
          other.jsonSpecs == this.jsonSpecs &&
          other.sourceNodeSpecId == this.sourceNodeSpecId &&
          other.targetNodeSpecId == this.targetNodeSpecId);
}

class EdgeSpecCompanion extends UpdateCompanion<EdgeSpecData> {
  final Value<String> id;
  final Value<String> name;
  final Value<String> description;
  final Value<String> slug;
  final Value<String> type;
  final Value<String> jsonSpecs;
  final Value<String> sourceNodeSpecId;
  final Value<String> targetNodeSpecId;
  final Value<int> rowid;
  const EdgeSpecCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.description = const Value.absent(),
    this.slug = const Value.absent(),
    this.type = const Value.absent(),
    this.jsonSpecs = const Value.absent(),
    this.sourceNodeSpecId = const Value.absent(),
    this.targetNodeSpecId = const Value.absent(),
    this.rowid = const Value.absent(),
  });
  EdgeSpecCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String description,
    required String slug,
    required String type,
    required String jsonSpecs,
    required String sourceNodeSpecId,
    required String targetNodeSpecId,
    this.rowid = const Value.absent(),
  })  : name = Value(name),
        description = Value(description),
        slug = Value(slug),
        type = Value(type),
        jsonSpecs = Value(jsonSpecs),
        sourceNodeSpecId = Value(sourceNodeSpecId),
        targetNodeSpecId = Value(targetNodeSpecId);
  static Insertable<EdgeSpecData> custom({
    Expression<String>? id,
    Expression<String>? name,
    Expression<String>? description,
    Expression<String>? slug,
    Expression<String>? type,
    Expression<String>? jsonSpecs,
    Expression<String>? sourceNodeSpecId,
    Expression<String>? targetNodeSpecId,
    Expression<int>? rowid,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (description != null) 'description': description,
      if (slug != null) 'slug': slug,
      if (type != null) 'type': type,
      if (jsonSpecs != null) 'json_specs': jsonSpecs,
      if (sourceNodeSpecId != null) 'source_node_spec_id': sourceNodeSpecId,
      if (targetNodeSpecId != null) 'target_node_spec_id': targetNodeSpecId,
      if (rowid != null) 'rowid': rowid,
    });
  }

  EdgeSpecCompanion copyWith(
      {Value<String>? id,
      Value<String>? name,
      Value<String>? description,
      Value<String>? slug,
      Value<String>? type,
      Value<String>? jsonSpecs,
      Value<String>? sourceNodeSpecId,
      Value<String>? targetNodeSpecId,
      Value<int>? rowid}) {
    return EdgeSpecCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      description: description ?? this.description,
      slug: slug ?? this.slug,
      type: type ?? this.type,
      jsonSpecs: jsonSpecs ?? this.jsonSpecs,
      sourceNodeSpecId: sourceNodeSpecId ?? this.sourceNodeSpecId,
      targetNodeSpecId: targetNodeSpecId ?? this.targetNodeSpecId,
      rowid: rowid ?? this.rowid,
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
    if (description.present) {
      map['description'] = Variable<String>(description.value);
    }
    if (slug.present) {
      map['slug'] = Variable<String>(slug.value);
    }
    if (type.present) {
      map['type'] = Variable<String>(type.value);
    }
    if (jsonSpecs.present) {
      map['json_specs'] = Variable<String>(jsonSpecs.value);
    }
    if (sourceNodeSpecId.present) {
      map['source_node_spec_id'] = Variable<String>(sourceNodeSpecId.value);
    }
    if (targetNodeSpecId.present) {
      map['target_node_spec_id'] = Variable<String>(targetNodeSpecId.value);
    }
    if (rowid.present) {
      map['rowid'] = Variable<int>(rowid.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('EdgeSpecCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description, ')
          ..write('slug: $slug, ')
          ..write('type: $type, ')
          ..write('jsonSpecs: $jsonSpecs, ')
          ..write('sourceNodeSpecId: $sourceNodeSpecId, ')
          ..write('targetNodeSpecId: $targetNodeSpecId, ')
          ..write('rowid: $rowid')
          ..write(')'))
        .toString();
  }
}

abstract class _$UngraphDatabase extends GeneratedDatabase {
  _$UngraphDatabase(QueryExecutor e) : super(e);
  late final $UnpackSpecTable unpackSpec = $UnpackSpecTable(this);
  late final $UnpackStateTable unpackState = $UnpackStateTable(this);
  late final $NodeSpecTable nodeSpec = $NodeSpecTable(this);
  late final $EdgeSpecTable edgeSpec = $EdgeSpecTable(this);
  late final DynamicDatabase dynamicDatabase =
      DynamicDatabase(this as UngraphDatabase);
  late final UnpackStateDao unpackStateDao =
      UnpackStateDao(this as UngraphDatabase);
  late final UnpackSpecDao unpackSpecDao =
      UnpackSpecDao(this as UngraphDatabase);
  late final EdgeSpecDao edgeSpecDao = EdgeSpecDao(this as UngraphDatabase);
  late final NodeSpecDao nodeSpecDao = NodeSpecDao(this as UngraphDatabase);
  @override
  Iterable<TableInfo<Table, Object?>> get allTables =>
      allSchemaEntities.whereType<TableInfo<Table, Object?>>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities =>
      [unpackSpec, unpackState, nodeSpec, edgeSpec];
}
