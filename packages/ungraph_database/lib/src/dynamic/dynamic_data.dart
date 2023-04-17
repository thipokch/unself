import 'dart:convert';

import 'package:drift/drift.dart';

class DynamicData<D> extends DataClass implements Insertable<D> {
  DynamicData(this.data);

  final Map<String, dynamic> data;

  @override
  Map<String, Expression<Object>> toColumns(bool nullToAbsent) => {
        'json': Variable<String>(jsonEncode(data)),
      };

  @override
  // TODO: implement toJson
  Map<String, dynamic> toJson({ValueSerializer? serializer}) =>
      throw UnimplementedError();

  @override
  String toString() => data.toString();
}
