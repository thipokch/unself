import 'package:un_model/un_model.dart';
import 'package:ungraph_spec/ungraph_spec.dart';

const userEdge = [
  userApp,
  userProfile,
];

const userApp = EdgeSpec(
  name: 'User App',
  description: 'The app of the user account.',
  type: '',
  sourceNodeSpecId: userSlug,
  targetNodeSpecId: appSlug,
  jsonSpecs: [],
);

const userProfile = EdgeSpec(
  name: 'User Profile',
  description: 'Profile information of the given user.',
  type: '',
  sourceNodeSpecId: userSlug,
  targetNodeSpecId: profileSlug,
  jsonSpecs: [],
);
