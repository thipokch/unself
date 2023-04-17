import 'package:un_model/un_model.dart';

const profileSlug = 'profile';

const profileNode = NodeSpec(
  slugged: profileSlug,
  name: 'Profile',
  description: 'Profiles or Websites',
  jsonSpecs: [
    JsonSpec(
      name: 'First Name',
      description: 'The user\'s first name',
      type: 'string',
    ),
    JsonSpec(
      name: 'Last Name',
      description: 'The user\'s last name',
      type: 'string',
    ),
    JsonSpec(
      name: 'Name',
      description: 'Full name of the user.',
      type: 'string',
    ),
    JsonSpec(
      name: 'Gender',
      description: 'User\'s gender',
      type: 'string',
    ),
    JsonSpec(
      name: 'Birthday',
      description: 'User\'s date of birth.',
      type: 'dateTime',
    ),
  ],
);
