// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'settings.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_Settings _$$_SettingsFromJson(Map<String, dynamic> json) => _$_Settings(
      themeMode: $enumDecode(_$ThemeModeEnumMap, json['themeMode']),
      extra: json['extra'] == null
          ? const {}
          : const JsonEmptyMap().fromJson(json['extra'] as Map?),
    );

Map<String, dynamic> _$$_SettingsToJson(_$_Settings instance) {
  final val = <String, dynamic>{
    'themeMode': _$ThemeModeEnumMap[instance.themeMode]!,
  };

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('extra', const JsonEmptyMap().toJson(instance.extra));
  return val;
}

const _$ThemeModeEnumMap = {
  ThemeMode.system: 'system',
  ThemeMode.light: 'light',
  ThemeMode.dark: 'dark',
};
