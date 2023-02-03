import 'package:unself_file/unself_file.dart';
import 'package:flutter/material.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_unpack_assistant/unself_unpack_assistant.dart';

/// {@template unpack_assistant_view}
/// View of the UnpackAssistantPage.
///
/// Add what it does
/// {@endtemplate}
class UnpackAssistantView extends StatelessWidget {
  /// {@macro unpack_assistant_view}
  const UnpackAssistantView({super.key});

  @override
  Widget build(BuildContext context) => UnpackAssistantBuilder(
        builder: (context, state) => Center(
          child: Column(
            children: [
              Text(state.toString()),
              ButtonText(
                onPressed: () => XFilePicker.instance
                    .pickFiles(
                      type: FileType.custom,
                      allowedExtensions: ['zip'],
                      withData: false,
                      withReadStream: false,
                    )
                    .then(
                      (_) => context
                          .read<UnpackAssistantBloc>()
                          .add(UnpackAssistantEvent.selectArchive(
                            xFile: _!.files.single.xFile,
                          )),
                    ),
                child: const Text('Select Archive'),
              ),
            ],
          ),
        ),
      );
}
