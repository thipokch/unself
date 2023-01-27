import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:unself_model/unself_model.dart';

void main() {
  group('test Field', () {
    final Field aField = Field(
      id: 'id',
      name: 'id',
      type: FieldType.text,
      system: true,
      required: true,
      unique: true,
      options: {'extra': 'diva'},
    );

    final Field bField = Field(
      id: 'image',
      name: 'image',
      type: FieldType.url,
      system: false,
      required: false,
      unique: true,
    );

    final Collection a = Collection(
      id: 'id',
      name: 'id',
      schema: [aField, bField],
      options: {'extra': 'diva'},
    );

    final String aJson =
        '{"id":"id","type":"","name":"id","system":false,"listRule":null,"viewRule":null,"createRule":null,"updateRule":null,"deleteRule":null,"schema":[{"id":"id","name":"id","type":"text","system":true,"required":true,"unique":true,"options":{"extra":"diva"}},{"id":"image","name":"image","type":"url","system":false,"required":false,"unique":true,"options":{}}],"options":{"extra":"diva"}}';

    setUp(() {});

    test('toJson', () {
      expect(jsonEncode(a), aJson);
    });

    test('fromJson', () {
      expect(Collection.fromJson(jsonDecode(aJson)), a);
    });
  });
}
