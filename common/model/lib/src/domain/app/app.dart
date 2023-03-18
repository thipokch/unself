// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'app.freezed.dart';
part 'app.g.dart';

/// {@template app}
/// [App] is a software application or services that the user uses.
/// {@endtemplate}
@freezed
class App with _$App implements Base {
  const App._();

  /// {@macro app}
  const factory App({
    @JsonString() required String id,
    // @JsonDateTime() required DateTime created,
    // @JsonDateTime() required DateTime updated,

    /// [name] is the name of the [App].
    required String name,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _App;

  /// Creates a [App] from Json map
  factory App.fromJson(Map<String, dynamic> json) => _$AppFromJson(json);

  // @override
  // String toString() => 'App(id: $id, name: $name)';
}
