import 'package:flutter/material.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';

/// {@template unpack_assistant_page}
/// A description for UnpackAssistantPage
/// {@endtemplate}
class UnpackAssistantPage extends StatelessWidget {
  /// {@macro unpack_assistant_page}
  const UnpackAssistantPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => UnpackAssistantBloc(),
      child: const Scaffold(
        body: UnpackAssistantView(),
      ),
    );
  }
}
