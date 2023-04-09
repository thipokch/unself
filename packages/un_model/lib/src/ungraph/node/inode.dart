part of 'node.dart';

abstract class INode {
  String? get id;
  List<String> get labels;
  Map<String, dynamic>? get properties;
}
