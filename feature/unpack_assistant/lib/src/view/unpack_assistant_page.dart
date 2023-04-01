import 'package:flutter/material.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';
import 'package:unself_unpack/unself_unpack.dart';

/// {@template unpack_assistant_page}
/// A description for UnpackAssistantPage
/// {@endtemplate}
class UnpackAssistantPage extends StatelessWidget {
  /// {@macro unpack_assistant_page}
  const UnpackAssistantPage({super.key});

  @override
  Widget build(BuildContext context) => BlocProvider(
        create: (context) => UnpackAssistantBloc(
          unpackService: UnpackService(
            repository: context.read(),
          ),
        ),
        child: const Scaffold(
          body: UnpackAssistantView(),
        ),
      );
}
