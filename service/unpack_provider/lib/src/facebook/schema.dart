import 'package:unself_model/unself_model.dart';

final facebookSchema = ArchiveSchema(
  id: 'facebook@0.0.1',
  created: DateTime(0),
  updated: DateTime(0),
  appId: 'facebook',
  version: Version(0, 0, 1),
  constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
  part: const [
    _meta,
    _adsTopics,
    _advertiserDataUse,
    _advertiserContactUpload,
    _advertiserInteraction,
    _externalActivities,
    _externalInstalls,
    _account,
    _inferredTopics,
  ],
);

const _meta = MetaPart({
  'apps': [
    {
      'id': 'facebook',
      'name': 'Facebook',
    }
  ],
});

const _adsTopics = ZipJsonPart(
  id: 'facebook_ads_topics',
  part: 'other_logged_information.ads_interests',
  schema: [
    Struct('facebook_ads_topics', {
      'topics_v2': RefList('topics'),
    }),
    Entity('topics', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);

const _advertiserDataUse = ZipJsonPart(
  id: 'facebook_advertiser_data_use',
  part: 'ads_information.advertisers_using_your_activity_or_information',
  schema: [
    Struct('facebook_advertiser_data_use', {
      'custom_audiences_all_types_v2': RefList('advertisers'),
    }),
    Entity(
      'advertisers',
      definition: {
        'id': SlugFrom('advertiser_name'),
        'name': ValueFrom('advertiser_name'),
      },
    ),
  ],
);

const _advertiserContactUpload = ZipJsonPart(
  id: 'facebook_advertiser_contact_upload',
  part:
      'ads_information.advertisers_who_uploaded_a_contact_list_with_your_information',
  schema: [
    Struct('facebook_advertiser_contact_upload', {
      'custom_audiences_v2': RefList('advertisers'),
    }),
    Entity('advertisers', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);

const _advertiserInteraction = ZipJsonPart(
  id: 'facebook_advertiser_interaction',
  part: 'ads_information.advertisers_you\'ve_interacted_with',
  schema: [
    Struct('facebook_advertiser_interaction', {
      'history_v2': RefList('activities'),
    }),
    Entity('activities', definition: {
      'title': Ref('advertisers'),
      'advertiserId': SlugFrom('title'),
    }),
    Entity('advertisers', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);

const _externalActivities = ZipJsonPart(
  id: 'facebook_external_activities',
  part: 'apps_and_websites_off_of_facebook.your_off-facebook_activity',
  schema: [
    Struct('facebook_external_activities', {
      'off_facebook_activity_v2': RefList('activities'),
    }),
    Flat('activities', entityPath: [
      'events',
      '*'
    ], includePath: [
      ['name'],
    ], definition: {
      'name': Ref('apps'),
      'externalAppId': SlugFrom('name'),
    }),
    Entity('apps', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);

const _externalInstalls = ZipJsonPart(
  id: 'facebook_external_installs',
  part: 'apps_and_websites_off_of_facebook.your_off-facebook_activity',
  schema: [
    Struct('facebook_external_installs', {
      'installed_apps_v2': RefList('activities'),
    }),
    Entity('activities', definition: {
      'name': Ref('apps'),
      'appId': SlugFrom('name'),
    }),
    Entity('apps', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);

const _account = ZipJsonPart(
  id: 'facebook_account',
  part: 'profile_information.profile_information',
  schema: [
    Struct('facebook_account', {
      'profile_v2': Ref('accounts'),
    }),
    Flat('accounts'),
  ],
);

const _inferredTopics = ZipJsonPart(
  id: 'facebook_inferred_topics',
  part: 'your_topics.your_topics',
  schema: [
    Struct('facebook_inferred_topics', {
      'inferred_topics_v2': RefList('topics'),
    }),
    Entity('topics', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
);
