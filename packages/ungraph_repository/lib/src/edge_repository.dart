import 'package:ungraph_repository/ungraph_repository.dart';
import 'package:ungraph_database/ungraph_database.dart' show EdgeDao;
import 'package:un_model/un_model.dart';

class EdgeRepository {
  final EdgeSpec spec;
  final EdgeDao _dao;

  const EdgeRepository(this.spec, this._dao);

  Future<List<Edge>> getAll() =>
      _dao.getAll().then((list) => list.map(EdgeMapper.entityToModel).toList());
}
