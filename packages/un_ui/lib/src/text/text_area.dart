import 'package:flutter/material.dart';

class TextArea extends StatelessWidget {
  final ValueChanged<String>? onChanged;
  final GestureTapCallback? onTap;
  final bool? autofocus;
  final TextEditingController? controller;

  const TextArea({
    Key? key,
    this.onChanged,
    this.onTap,
    this.autofocus,
    this.controller,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Expanded(
      child: TextField(
        controller: controller,
        autofocus: autofocus ?? false,
        onChanged: onChanged,
        textAlign: TextAlign.center,
        textAlignVertical: TextAlignVertical.center,
        style: textTheme.bodyLarge,
        expands: true,
        maxLines: null,
        // maxLength: 280,
        onTap: onTap,
        decoration: const InputDecoration(
          hintText: 'Start Writing...',
          border: InputBorder.none,
          // contentPadding: EdgeInsets.only(
          //   top: 16.0,
          //   left: 16.0,
          //   right: 16.0,
          //   bottom: 16.0,
          // ),
        ),

        // buildCounter: (
        //   _, {
        //   required currentLength,
        //   maxLength,
        //   required isFocused,
        // }) =>
        //     Container(
        //   height: 16,
        //   alignment: Alignment.center,
        //   child: Text(
        //     isFocused ? "$currentLength / $maxLength" : "",
        //     textAlign: TextAlign.center,
        //     style: textTheme.labelMedium,
        //   ),
        // ),
      ),
    );
  }
}
