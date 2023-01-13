/// {@template analytic_context}
/// [AnalyticContext] description
/// {@endtemplate}
class AnalyticContext {
  final Map map;

  /// {@macro analytic_context}
  const AnalyticContext({
    required this.map,
  });

  String? get anonymousId => map['anonymousId'] ?? map['traits']['anonymousId'];
}
