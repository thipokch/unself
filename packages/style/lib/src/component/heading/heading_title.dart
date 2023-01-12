import 'package:flutter/material.dart';

class HeadingTitle extends StatelessWidget {
  final String label;

  const HeadingTitle({
    Key? key,
    required this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        left: 8.0,
        top: 32.0,
        right: 8.0,
        bottom: 8.0,
      ),
      child: Text(
        label,
        style: Theme.of(context).textTheme.headlineMedium,
      ),
    );
  }
}
