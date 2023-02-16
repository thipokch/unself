import 'package:unself_model/unself_model.dart';

final facebookMapping = Mapping(
  id: 'facebook@0.0.1',
  created: DateTime(0),
  updated: DateTime(0),
  app: App(
    id: 'facebook',
    created: DateTime(0),
    updated: DateTime(0),
    name: 'Facebook',
  ),
  version: Version(0, 0, 1),
  constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
  format: MappingFormat.zipJson,
  entries: const [
    MappingEntry(
      from: 'other_logged_information.ads_interests/topics_v2',
      to: 'topic',
    ),
    MappingEntry(
      from: 'other_logged_information.ads_interests/topics_v2',
      to: 'ads_interest',
    ),
  ],
);
