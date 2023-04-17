import 'package:ungraph_database/ungraph_database.dart';
import 'package:un_model/un_model.dart';

class JsonSpecMapper {
  const JsonSpecMapper._();

  // static DynamicColumn modelToColumn(String tableName, PropSpec model) =>
  //     DynamicColumn.fromString(
  //       model.name,
  //       'test_table',
  //       false,
  //       type: model.type,
  //     );

  static DynamicJson modelToJson(String tableName, JsonSpec model) =>
      DynamicJson.fromString(
        model.name,
        'test_table',
        false,
        type: model.type,
      );
}
