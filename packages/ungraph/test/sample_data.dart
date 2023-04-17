import 'package:un_model/un_model.dart';

const nsPost = NodeSpec(
  name: 'Facebook Posts',
  description: '',
  jsonSpecs: [
    JsonSpec(name: 'name', description: 'description', type: 'string')
  ],
);

final esComment = EdgeSpec(
  name: 'Facebook Comments',
  description: '',
  type: '',
  sourceNodeSpecId: nsPost.slug,
  targetNodeSpecId: nsPost.slug,
  jsonSpecs: const [
    JsonSpec(name: 'name', description: 'description', type: 'string')
  ],
);

final nPost = Node(
  specSlug: nsPost.slug,
  properties: {
    'name': 'Post 1',
  },
);

final eComment = Edge(
  specSlug: esComment.slug,
  sourceId: nPost.id!,
  targetId: nPost.id!,
  properties: {
    'name': 'Comment 1',
  },
);
