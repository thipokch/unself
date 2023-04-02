import 'package:unself_file/unself_file.dart';
import 'package:unself_model/unself_model.dart';

final facebookSampleData =
    XFile('../unpack_spec/sample_data/facebook/facebook_2301.zip');

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
  // id: 0,
  name: 'name',
  fileSpec: FileSpec.zip(),
  retrieveSpec: RetrieveSpec.localFile(),
  modules: modules,
);
