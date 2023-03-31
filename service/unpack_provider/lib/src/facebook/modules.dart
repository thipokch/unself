import 'package:unself_model/unself_model.dart';
import 'package:unself_unpack/unself_unpack.dart';

const adsTopics = JsonModule(
  id: 'facebook_ads_topics',
  name: 'facebook_ads_topics',
  fileMatcher: 'other_logged_information/ads_interests.json',
  schema: [
    Struct('facebook_ads_topics', {
      'topics_v2': RefList('topics'),
    }),
    Entity('topics', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
  load: UngraphLoadSpec(),
);

const advertiserDataUse = JsonModule(
  id: 'facebook_advertiser_data_use',
  name: 'facebook_advertiser_data_use',
  fileMatcher:
      'ads_information/advertisers_using_your_activity_or_information.json',
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
  load: UngraphLoadSpec(),
);

const advertiserContactUpload = JsonModule(
  id: 'facebook_advertiser_contact_upload',
  name: 'facebook_advertiser_contact_upload',
  fileMatcher:
      'ads_information/advertisers_who_uploaded_a_contact_list_with_your_information.json',
  schema: [
    Struct('facebook_advertiser_contact_upload', {
      'custom_audiences_v2': RefList('advertisers'),
    }),
    Entity('advertisers', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
  load: UngraphLoadSpec(),
);

const advertiserInteraction = JsonModule(
  id: 'facebook_advertiser_interaction',
  name: 'facebook_advertiser_interaction',
  fileMatcher: 'ads_information/advertisers_you\'ve_interacted_with.json',
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
  load: UngraphLoadSpec(),
);

const externalActivities = JsonModule(
  id: 'facebook_external_activities',
  name: 'facebook_external_activities',
  fileMatcher:
      'apps_and_websites_off_of_facebook/your_off-facebook_activity.json',
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
  load: UngraphLoadSpec(),
);

const externalInstalls = JsonModule(
  id: 'facebook_external_installs',
  name: 'facebook_external_installs',
  fileMatcher:
      'apps_and_websites_off_of_facebook/your_off-facebook_activity.json',
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
  load: UngraphLoadSpec(),
);

const account = JsonModule(
  id: 'facebook_account',
  name: 'facebook_account',
  fileMatcher: 'profile_information/profile_information.json',
  schema: [
    Struct('facebook_account', {
      'profile_v2': Ref('accounts'),
    }),
    Flat('accounts'),
  ],
  load: UngraphLoadSpec(),
);

const inferredTopics = JsonModule(
  id: 'facebook_inferred_topics',
  name: 'facebook_inferred_topics',
  fileMatcher: 'your_topics/your_topics.json',
  schema: [
    Struct('facebook_inferred_topics', {
      'inferred_topics_v2': RefList('topics'),
    }),
    Entity('topics', definition: {
      'id': SlugFrom('@value'),
      'name': ValueFrom('@value'),
    }),
  ],
  load: UngraphLoadSpec(),
);
