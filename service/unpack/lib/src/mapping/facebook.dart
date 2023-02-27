import 'package:unself_model/unself_model.dart';

final facebookMapping = ArchiveFormat(
  id: 'facebook@0.0.1',
  created: DateTime(0),
  updated: DateTime(0),
  appId: 'facebook',
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
    Mapping(
      from: 'profile_information.profile_information',
      to: 'accounts',
      fields: [
        Mapping(
          from: 'profile_v2/name/full_name',
          to: 'name',
        ),
        Mapping(
          from: 'profile_v2/name/first_name',
          to: 'first_name',
        ),
        Mapping(
          from: 'profile_v2/name/middle_name',
          to: 'middle_name',
        ),
        Mapping(
          from: 'profile_v2/name/last_name',
          to: 'last_name',
        ),
        Mapping(
          from: 'profile_v2/emails/emails',
          to: 'emails',
        ),
        Mapping(
          from: 'profile_v2/emails/previous_emails',
          to: 'previous_emails',
        ),
        Mapping(
          from: 'profile_v2/emails/pending_emails',
          to: 'pending_emails',
        ),
        Mapping(
          from: 'profile_v2/emails/ad_account_emails',
          to: 'ad_account_emails',
        ),
        Mapping(
          from: 'profile_v2/birthday/year',
          to: 'birth_year',
        ),
        Mapping(
          from: 'profile_v2/birthday/month',
          to: 'birth_month',
        ),
        Mapping(
          from: 'profile_v2/birthday/day',
          to: 'birth_day',
        ),
        Mapping(
          from: 'profile_v2/gender/custom_genders',
          to: 'custom_genders',
        ),
        Mapping(
          from: 'profile_v2/gender/pronoun',
          to: 'pronoun',
        ),
        Mapping(
          from: 'profile_v2/previous_names',
          to: 'previous_names',
        ),
        Mapping(
          from: 'profile_v2/other_names',
          to: 'other_names',
        ),
        Mapping(
          from: 'profile_v2/education_experiences',
          to: 'education_experiences',
        ),
        Mapping(
          from: 'profile_v2/work_experiences',
          to: 'work_experiences',
        ),
        Mapping(
          from: 'profile_v2/blood_info/blood_donor_status',
          to: 'blood_donor_status',
        ),
        Mapping(
          from: 'profile_v2/websites',
          to: 'websites',
        ),
        Mapping(
          from: 'profile_v2/registration_timestamp',
          to: 'registration_timestamp',
        ),
        Mapping(
          from: 'profile_v2/username',
          to: 'username',
        ),
        Mapping(
          from: 'profile_v2/profile_uri',
          to: 'profile_uri',
        ),
      ],
      extra: {
        'appId': 'facebook',
        'isOwner': true,
        'source': 'profile_information.profile_information/profile_v2',
      },
      options: {
        'includePath': ['profile_v2'],
        'idFrom': 'name',
      },
    ),
  ],
);
