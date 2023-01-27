import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';

void main() {
  group('test Field', () {
    final Field a = Field(
      id: 'id',
      name: 'id',
      type: FieldType.text,
      system: true,
      required: true,
      unique: true,
      options: {'extra': 'diva'},
    );

    final String aJson =
        '{"id":"id","name":"id","type":"text","system":true,"required":true,"unique":true,"options":{"extra":"diva"}}';

    setUp(() {});

    test('toJson', () {
      expect(jsonEncode(a), aJson);
    });

    test('fromJson', () {
      expect(Field.fromJson(jsonDecode(aJson)), a);
    });
  });
}
