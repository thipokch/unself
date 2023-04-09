import 'package:ungraph_database/ungraph_database.dart';

class NodeData extends DynamicData<NodeData> {
  NodeData(this.specSlug, super.data);

  final String specSlug;
}
