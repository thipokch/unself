import 'package:un_model/un_model.dart';

const contactSlug = 'contact';

const contactNode = NodeSpec(
  slugged: contactSlug,
  name: 'Contact',
  description: 'A contact imported from an app by the user.',
  jsonSpecs: [
    JsonSpec(
      name: 'name',
      description: 'description',
      type: 'string',
    )
  ],
);
