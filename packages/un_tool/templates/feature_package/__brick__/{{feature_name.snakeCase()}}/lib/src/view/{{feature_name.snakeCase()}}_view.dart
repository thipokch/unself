import 'package:flutter/material.dart';
import 'package:unself_{{feature_name.snakeCase()}}/unself_{{feature_name.snakeCase()}}.dart';

/// {@template {{feature_name.snakeCase()}}_view}
/// View of the {{feature_name.pascalCase()}}Page.
///
/// Add what it does
/// {@endtemplate}
class {{feature_name.pascalCase()}}View {{#isBloc}}extends StatelessWidget{{/isBloc}}{{#isCubit}}extends StatelessWidget{{/isCubit}}{{#isProvider}}extends StatelessWidget{{/isProvider}}{{#isNone}}extends StatelessWidget{{/isNone}}{{#isRiverpod}}extends ConsumerWidget{{/isRiverpod}} {
  /// {@macro {{feature_name.snakeCase()}}_view}
  const {{feature_name.pascalCase()}}View({super.key});
{{#isBloc}}
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<{{feature_name.pascalCase()}}Bloc, {{feature_name.pascalCase()}}State>(
      builder: (context, state) {
        return Center(child: Text(state.toString()));
      },
    );
  }{{/isBloc}}{{#isCubit}}
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<{{feature_name.pascalCase()}}Cubit, {{feature_name.pascalCase()}}State>(
      builder: (context, state) {
        return Center(child: Text(state.toString()));
      },
    );
  }{{/isCubit}}{{#isProvider}}
  @override
  Widget build(BuildContext context) {
    return Consumer<{{feature_name.pascalCase()}}Notifier>(
      builder: (context, state, child) {
        return Center(child: Text(state.count.toString()));
      },
    );
  }{{/isProvider}}{{#isRiverpod}}
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch({{feature_name.camelCase()}}Provider);
    return Text(count.toString());
  }{{/isRiverpod}}{{#isNone}}
  @override
  Widget build(BuildContext context) {
    return const Center(child:Text('{{feature_name.pascalCase()}}Page'));
  }{{/isNone}}
}
