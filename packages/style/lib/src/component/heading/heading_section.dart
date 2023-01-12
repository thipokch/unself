import 'package:flutter/material.dart';

class HeadingSection extends StatelessWidget {
  final String label;

  const HeadingSection({
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
        label.toUpperCase(),
        style: Theme.of(context).textTheme.titleMedium!.copyWith(
              letterSpacing: 0.75,
            ),
      ),
    );
  }
}
