part of 'edge.dart';

abstract class IEdge {
  String? get id;
  String get type;
  Map<String, dynamic>? get properties;
}
