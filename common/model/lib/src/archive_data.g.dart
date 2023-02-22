// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Archive _$$_ArchiveFromJson(Map<String, dynamic> json) => _$_Archive(
      id: json['id'] as String,
      created: const JsonDateTime().fromJson(json['created']),
      updated: const JsonDateTime().fromJson(json['updated']),
      accounts: (json['accounts'] as List<dynamic>?)
              ?.map((e) => Account.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      apps: (json['apps'] as List<dynamic>?)
              ?.map((e) => App.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      users: (json['users'] as List<dynamic>?)
              ?.map((e) => User.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      topics: (json['topics'] as List<dynamic>?)
              ?.map((e) => Topic.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      activities: (json['activities'] as List<dynamic>?)
              ?.map((e) => Activity.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      extra: json['extra'] == null
          ? const {}
          : const JsonExtra().fromJson(json['extra'] as Map?),
    );

const _$$_ArchiveFieldMap = <String, String>{
  'id': 'id',
  'created': 'created',
  'updated': 'updated',
  'accounts': 'accounts',
  'apps': 'apps',
  'users': 'users',
  'topics': 'topics',
  'activities': 'activities',
  'extra': 'extra',
};

Map<String, dynamic> _$$_ArchiveToJson(_$_Archive instance) {
  final val = <String, dynamic>{
    'id': instance.id,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('created', const JsonDateTime().toJson(instance.created));
  writeNotNull('updated', const JsonDateTime().toJson(instance.updated));
  val['accounts'] = instance.accounts.map((e) => e.toJson()).toList();
  val['apps'] = instance.apps.map((e) => e.toJson()).toList();
  val['users'] = instance.users.map((e) => e.toJson()).toList();
  val['topics'] = instance.topics.map((e) => e.toJson()).toList();
  val['activities'] = instance.activities.map((e) => e.toJson()).toList();
  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
