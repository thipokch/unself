import 'package:un_model/un_model.dart';
import 'package:ungraph_spec/ungraph_spec.dart';

const personUser = EdgeSpec(
  name: 'Person User',
  description: 'User for the person.',
  type: '',
  sourceNodeSpecId: personSlug,
  targetNodeSpecId: userSlug,
  jsonSpecs: [],
);
