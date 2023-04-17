import 'package:un_model/un_model.dart';

const userSlug = 'user';

const userNode = NodeSpec(
  slugged: userSlug,
  name: 'User',
  description: 'Individual account or identify across apps.',
  jsonSpecs: [
    JsonSpec(
      name: 'name',
      description: 'description',
      type: 'string',
    )
  ],
);
