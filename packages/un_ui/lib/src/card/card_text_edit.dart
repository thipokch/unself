import 'package:flutter/material.dart';

class CardTextEdit extends StatefulWidget {
  const CardTextEdit({
    super.key,
    required this.initialText,
    required this.onChanged,
    required this.onTap,
    this.autoFocus,
  });

  final String? initialText;
  final bool? autoFocus;
  final ValueChanged<String>? onChanged;
  final VoidCallback? onTap;

  @override
  State<CardTextEdit> createState() => CardTextEditState();
}

class CardTextEditState extends State<CardTextEdit> {
  late final TextEditingController controller =
      TextEditingController(text: widget.initialText);

  @override
  Widget build(BuildContext context) => TextField(
        controller: controller,
        autofocus: widget.autoFocus ?? true,
        onChanged: widget.onChanged,
        textAlign: TextAlign.center,
        textAlignVertical: TextAlignVertical.center,
        style: Theme.of(context).textTheme.bodyLarge,
        expands: true,
        maxLines: null,
        maxLength: 300,
        onTap: widget.onTap,
        decoration: const InputDecoration(
          hintText: 'Start Writing...',
          border: InputBorder.none,
          contentPadding: EdgeInsets.only(
            top: 16.0,
            left: 16.0,
            right: 16.0,
            bottom: 16.0,
          ),
        ),
        buildCounter: (
          _, {
          required currentLength,
          maxLength,
          required isFocused,
        }) =>
            Container(
          height: 16,
          alignment: Alignment.center,
          child: Text(
            isFocused ? "$currentLength / $maxLength" : "",
            textAlign: TextAlign.center,
            style: Theme.of(_).textTheme.labelMedium?.copyWith(
                  color: Theme.of(context).colorScheme.outline,
                ),
          ),
        ),
      );
}
