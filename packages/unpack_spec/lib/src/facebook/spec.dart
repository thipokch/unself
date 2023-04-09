import 'package:un_model/un_model.dart';

import 'modules.dart';

const facebookSpec = UnpackSpec(
  // id: 'id',
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
