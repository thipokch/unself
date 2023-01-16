import 'package:build/build.dart';
import 'package:source_gen/source_gen.dart';
import 'package:widgetbook_generator/generators/widgetbook_generator.dart';

/// Builder for the WidgetbookApp annotation.
/// Creates exactly one app.widgetbook.dart file next to the file containing
/// the WidgetbookApp annotation.
Builder previewBuilder(BuilderOptions options) => LibraryBuilder(
      WidgetbookGenerator(),
      generatedExtension: '.preview.dart',
      header: '''
// ignore_for_file: type=lint
// ignore_for_file: unused_import, unnecessary_import, unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark
''',
    );
