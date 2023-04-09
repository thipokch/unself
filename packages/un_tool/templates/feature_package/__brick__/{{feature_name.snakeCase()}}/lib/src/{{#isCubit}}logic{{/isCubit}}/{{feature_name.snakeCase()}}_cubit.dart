import 'dart:async';
import 'dart:developer';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

part '{{feature_name.snakeCase()}}_state.dart';
part '{{feature_name.snakeCase()}}_cubit.freezed.dart';


typedef {{feature_name.pascalCase()}}Builder = BlocBuilder<{{feature_name.pascalCase()}}Cubit, {{feature_name.pascalCase()}}State>;
typedef {{feature_name.pascalCase()}}Listener = BlocListener<{{feature_name.pascalCase()}}Cubit, {{feature_name.pascalCase()}}State>;
typedef {{feature_name.pascalCase()}}Selector<T> = BlocSelector<{{feature_name.pascalCase()}}Cubit, {{feature_name.pascalCase()}}State, T>;
typedef {{feature_name.pascalCase()}}Consumer = BlocConsumer<{{feature_name.pascalCase()}}Cubit, {{feature_name.pascalCase()}}State>;

class {{feature_name.pascalCase()}}Cubit extends Cubit<{{feature_name.pascalCase()}}State> {
  {{feature_name.pascalCase()}}Cubit() : super(const _Initial());

  /// A description for yourCustomFunction 
  FutureOr<void> yourCustomFunction() {
    // TODO: Add Logic
  }
}
