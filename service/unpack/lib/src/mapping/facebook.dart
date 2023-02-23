import 'package:unself_model/unself_model.dart';

final facebookMapping = ArchiveFormat(
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
  format: ArchiveFileFormat.zipJson,
  mappings: const [
    Mapping(
      from: 'other_logged_information.ads_interests/topics_v2',
      to: 'topics',
      fields: [
        Mapping(
          from: 'string',
          to: 'name',
        ),
      ],
      extra: {
        'source': 'other_logged_information.ads_interests/topics_v2',
      },
      options: {
        'idFrom': 'name',
      },
    ),
    Mapping(
      from:
          'apps_and_websites_off_of_facebook.your_off-facebook_activity/off_facebook_activity_v2/*/events',
      to: 'activities',
      fields: [
        Mapping(from: 'id', to: 'id'),
        Mapping(from: 'name', to: 'name'),
        Mapping(from: 'type', to: 'type'),
        Mapping(from: 'timestamp', to: 'timestamp'),
      ],
      extra: {
        'accountId': '',
        'appId': '',
        'source':
            'apps_and_websites_off_of_facebook.your_off-facebook_activity/off_facebook_activity_v2/*/events',
      },
      options: {
        'includePath': ['off_facebook_activity_v2/*/name'],
        'idFrom': 'name',
      },
    ),
  ],
);
