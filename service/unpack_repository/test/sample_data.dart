import 'package:unself_model/unself_model.dart';

const modules = <ModuleSpec>[
  JsonModule(
    id: 'other_logged_information.ads_interests',
    name: 'Ads Interest',
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
  ),
];

const spec = UnpackSpec(
  name: 'name',
  fileSpec: FileSpec.zip(),
  retrieveSpec: RetrieveSpec.localFile(),
  modules: modules,
);
