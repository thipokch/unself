import 'package:ungraph_database/ungraph_database.dart';
import 'package:un_model/un_model.dart';

class PropSpecMapper {
  const PropSpecMapper._();

  static DynamicColumn modelToColumn(PropSpec model) =>
      DynamicColumn.fromString(
        'id',
        'test_table',
        false,
        type: model.type,
      );
}
