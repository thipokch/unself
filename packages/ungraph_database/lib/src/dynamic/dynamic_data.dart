import 'package:drift/drift.dart';
import 'package:ungraph_database/ungraph_database.dart';

class DynamicData<D> extends DataClass implements Insertable<D> {
  DynamicData(this.data);

  final Map<String, dynamic> data;

  @override
  Map<String, Expression<Object>> toColumns(bool nullToAbsent) =>
      data.map((k, v) => MapEntry(k, Variable(v)))
        ..putIfAbsent('id', () => Variable(Slugid.nice().toString()));

  @override
  // TODO: implement toJson
  Map<String, dynamic> toJson({ValueSerializer? serializer}) =>
      throw UnimplementedError();

  @override
  String toString() => data.toString();
}
