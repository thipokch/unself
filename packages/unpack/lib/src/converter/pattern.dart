import 'package:freezed_annotation/freezed_annotation.dart';

class PatternConverter implements JsonConverter<Pattern, Map<String, String>> {
  const PatternConverter();

  @override
  fromJson(_) {
    switch (_['runtimeType']) {
      case 'RegExp':
        return RegExp(_['pattern']!);
      case 'String':
        return _['pattern']!;
      default:
        throw CheckedFromJsonException(_, 'runtimeType', 'Pattern',
            'Invalid union type "${_['runtimeType']}"!');
    }
  }

  @override
  toJson(_) {
    switch (_.runtimeType) {
      case RegExp:
        return {
          'runtimeType': 'RegExp',
          'pattern': (_ as RegExp).pattern,
        };
      case String:
        return {
          'runtimeType': 'String',
          'pattern': _ as String,
        };
      default:
        throw StateError('Invalid union type "${_.runtimeType}"!');
    }
  }
}
