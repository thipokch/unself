import 'package:freezed_annotation/freezed_annotation.dart';

class JsonDateTime implements JsonConverter<DateTime, dynamic> {
  const JsonDateTime();

  @override
  fromJson(_) {
    if (_ is DateTime) return _;
    if (_ is int) return DateTime.fromMillisecondsSinceEpoch(_);

    return DateTime.parse(_);
  }

  @override
  toJson(_) => _.toIso8601String();
}
