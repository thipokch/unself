import 'package:flutter/material.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';

/// {@template unpack_assistant_sliver}
/// Sliver of the UnpackAssistantPage.
///
/// Add what it does
/// {@endtemplate}
class UnpackAssistantSliver extends StatelessWidget {
  /// {@macro unpack_assistant_sliver}
  const UnpackAssistantSliver({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<UnpackAssistantBloc, UnpackAssistantState>(
      builder: (context, state) {
        return Center(child: Text(state.toString()));
      },
    );
  }
}
