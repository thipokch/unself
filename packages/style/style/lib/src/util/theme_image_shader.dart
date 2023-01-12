// import 'package:flutter/material.dart';

// import '../airbrush/airbrush_gradient_image.dart';

// class ThemeImageShader extends ThemeExtension<ThemeImageShader> {
//   final ImageShader? shader;

//   ThemeImageShader(this.shader);

//   static Widget setPrimaryEmoji({
//     required String emoji,
//     required Widget child,
//   }) =>
//       _ThemeImageShaderProvider(icon: emoji, child: child);

//   @override
//   ThemeExtension<ThemeImageShader> copyWith({
//     ImageShader? shader,
//   }) =>
//       ThemeImageShader(shader ?? this.shader);

//   @override
//   ThemeExtension<ThemeImageShader> lerp(
//     ThemeExtension<ThemeImageShader>? other,
//     double t,
//   ) =>
//       this;
// }

// class _ThemeImageShaderProvider extends StatelessWidget {
//   final String icon;
//   final Widget child;

//   const _ThemeImageShaderProvider({
//     required this.icon,
//     required this.child,
//   });

//   @override
//   Widget build(BuildContext context) => FutureBuilder<ImageShader>(
//         future: loadEmojiShader(icon),
//         builder: (context, snapshot) => Theme(
//           data: Theme.of(context).copyWith(
//             extensions: [
//               ...Theme.of(context).extensions.values,
//               ThemeImageShader(snapshot.data),
//             ],
//           ),
//           child: child,
//         ),
//       );
// }
