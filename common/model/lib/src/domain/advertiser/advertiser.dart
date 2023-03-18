// ignore_for_file: invalid_annotation_target

import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:unself_model/unself_model.dart';

part 'advertiser.freezed.dart';
part 'advertiser.g.dart';

/// {@template advertiser}
/// [Advertiser] is a user's and their acquaintances' identity on a [Advertiser].
/// Each person can have multiple [Advertiser]s and on multiple [Advertiser]s.
/// {@endtemplate}
@freezed
class Advertiser with _$Advertiser implements Node {
  const Advertiser._();

  /// {@macro advertiser}
  const factory Advertiser({
    @JsonString() required String id,
    // @JsonDateTime() required DateTime created,
    // @JsonDateTime() required DateTime updated,
    required String archiveId,

    /// [name] is the name used by the [Advertiser] on the [Advertiser].
    required String name,

    /// [extra] is a map of additional properties.
    @JsonExtra() @Default({}) Map<String, dynamic> extra,
  }) = _Advertiser;

  /// Creates a [Advertiser] from Json map
  factory Advertiser.fromJson(Map<String, dynamic> data) =>
      _$AdvertiserFromJson(data);

  @override
  final labels = const ['advertiser'];

  // @override
  // String toString() => 'Advertiser(id: $id, name: $name, app: ${app.id})';
}
