import 'package:unself_unpack/unself_unpack.dart';

import 'modules.dart';

const facebookSpec = SourceSpec(
  id: 'id',
  name: 'name',
  fileSpec: FileSpec.zip(),
  retrieveSpec: RetrieveSpec.localFile(),
  modules: facebookModules,
);

const facebookModules = <ModuleSpec>[
  adsTopics,
  advertiserDataUse,
  advertiserContactUpload,
  advertiserInteraction,
  externalActivities,
  externalInstalls,
  account,
  inferredTopics,
];
