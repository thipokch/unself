import 'package:ungraph_database/ungraph_database.dart';

class EdgeData extends DynamicData<EdgeData> {
  EdgeData(this.specSlug, super.data);

  final String specSlug;
}
