import 'dart:convert';

import 'package:drift/drift.dart';

class ListConverter<T> extends TypeConverter<List<T>, String> {
  @override
  List<T> fromSql(String fromDb) => List<T>.from(jsonDecode(fromDb) ?? []);

  @override
  String toSql(List<T> value) => jsonEncode(value);
}
