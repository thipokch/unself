// ignore_for_file: no-empty-block

import 'package:flutter/material.dart';
import 'package:unself_preview/unself_preview.dart';
import 'package:unself_style/unself_component.dart';
import 'package:unself_style/unself_style.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart';

@WidgetbookUseCase(name: 'Default', type: Buttons)
Widget buildButtons(BuildContext context) => const Buttons();

class Buttons extends StatefulWidget {
  const Buttons({super.key});

  @override
  State<Buttons> createState() => _ButtonsState();
}

class _ButtonsState extends State<Buttons> {
  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    const Widget _divider = UnPreview.rowDivider;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Wrap(
          alignment: WrapAlignment.spaceEvenly,
          children: const [
            ButtonsWithoutIcon(isDisabled: false),
            _divider,
            ButtonsWithIcon(),
            _divider,
            ButtonsWithoutIcon(isDisabled: true),
          ],
        ),
        _divider,
        const ButtonAction(
          onPressed: null,
          action: "action button",
        ),
        _divider,
        const FloatingActionButtons(),
      ],
    );
  }
}

class ButtonsWithoutIcon extends StatelessWidget {
  final bool isDisabled;

  const ButtonsWithoutIcon({super.key, required this.isDisabled});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ButtonElevated(
          onPressed: isDisabled ? null : () {},
          child: const Text("Elevated"),
        ),
        UnPreview.colDivider,
        ButtonFilled(
          onPressed: isDisabled ? null : () {},
          child: const Text('Filled'),
        ),
        UnPreview.colDivider,
        ButtonTonal(
          onPressed: isDisabled ? null : () {},
          child: const Text('Filled Tonal'),
        ),
        UnPreview.colDivider,
        ButtonOutlined(
          onPressed: isDisabled ? null : () {},
          child: const Text("Outlined"),
        ),
        UnPreview.colDivider,
        ButtonText(
          onPressed: isDisabled ? null : () {},
          child: const Text("Text"),
        ),
      ],
    );
  }
}

class ButtonsWithIcon extends StatelessWidget {
  const ButtonsWithIcon({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        ButtonElevated.icon(
          onPressed: () {},
          icon: const Icon(UnSymbols.add),
          label: const Text("Icon"),
        ),
        UnPreview.colDivider,
        ButtonFilled.icon(
          onPressed: () {},
          icon: const Icon(UnSymbols.add),
          label: const Text('Icon'),
        ),
        UnPreview.colDivider,
        ButtonTonal.icon(
          onPressed: () {},
          icon: const Icon(UnSymbols.add),
          label: const Text('Icon'),
        ),
        UnPreview.colDivider,
        ButtonOutlined.icon(
          onPressed: () {},
          icon: const Icon(UnSymbols.add),
          label: const Text(" Icon"),
        ),
        UnPreview.colDivider,
        ButtonText.icon(
          onPressed: () {},
          icon: const Icon(UnSymbols.add),
          label: const Text("Icon"),
        ),
      ],
    );
  }
}

class FloatingActionButtons extends StatelessWidget {
  const FloatingActionButtons({super.key});

  @override
  Widget build(BuildContext context) {
    // ignore: no_leading_underscores_for_local_identifiers
    const Widget _divider = UnPreview.rowDivider;

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Wrap(
        alignment: WrapAlignment.spaceEvenly,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          FloatingActionButton.small(
            onPressed: () {},
            child: const Icon(UnSymbols.add),
          ),
          _divider,
          FloatingActionButton(
            onPressed: () {},
            child: const Icon(UnSymbols.add),
          ),
          _divider,
          FloatingActionButton.extended(
            onPressed: () {},
            icon: const Icon(UnSymbols.add),
            label: const Text("Create"),
          ),
          _divider,
          FloatingActionButton.large(
            onPressed: () {},
            child: const Icon(UnSymbols.add),
          ),
        ],
      ),
    );
  }
}
