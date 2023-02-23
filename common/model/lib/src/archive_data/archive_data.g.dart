// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'archive_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Archive _$$_ArchiveFromJson(Map<String, dynamic> json) => _$_Archive(
      id: json['id'] as String,
      archiveId: json['archiveId'] as String,
      formatId: json['formatId'] as String,
      accounts: (json['accounts'] as List<dynamic>?)
              ?.map((e) => Account.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      apps: (json['apps'] as List<dynamic>?)
              ?.map((e) => App.fromJson(e as Map<String, dynamic>))
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
  'archiveId': 'archiveId',
  'formatId': 'formatId',
  'accounts': 'accounts',
  'apps': 'apps',
  'topics': 'topics',
  'activities': 'activities',
  'extra': 'extra',
};

Map<String, dynamic> _$$_ArchiveToJson(_$_Archive instance) {
  final val = <String, dynamic>{
    'id': instance.id,
    'archiveId': instance.archiveId,
    'formatId': instance.formatId,
    'accounts': instance.accounts.map((e) => e.toJson()).toList(),
    'apps': instance.apps.map((e) => e.toJson()).toList(),
    'topics': instance.topics.map((e) => e.toJson()).toList(),
    'activities': instance.activities.map((e) => e.toJson()).toList(),
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonExtra().toJson(instance.extra));
  return val;
}
