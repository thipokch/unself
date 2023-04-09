import 'package:collection/collection.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

const jsonTypeKey = '@type';

typedef IFromJson<I> = Map<Type, I Function(Map<String, dynamic> json)>;

I iFromJson<I, J>(
  IFromJson iFromJson,
  Map<String, dynamic> json,
) {
  late final fromType = json[jsonTypeKey];

  final object = iFromJson.entries
      .singleWhereOrNull((type) => type.toString().toLowerCase() == fromType)
      ?.value
      .call(json);

  if (object is I) return object;

  throw CheckedFromJsonException(json, jsonTypeKey, 'ZipExtractConfig',
      'Invalid union type "${json[jsonTypeKey]}"!');
}
