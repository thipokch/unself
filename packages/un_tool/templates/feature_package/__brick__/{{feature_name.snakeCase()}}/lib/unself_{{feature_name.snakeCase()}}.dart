library unself_{{feature_name.snakeCase()}};

{{#isBloc}}export 'src/logic/logic.dart';{{/isBloc}}{{#isCubit}}export 'src/logic/logic.dart';{{/isCubit}}{{#isProvider}}export 'src/provider/provider.dart';{{/isProvider}}{{#isRiverpod}}export 'src/provider/provider.dart';{{/isRiverpod}}

export 'src/view/view.dart';
