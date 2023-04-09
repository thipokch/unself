// import 'package:un_style/un_style.dart';
// import 'package:un_ui/element_motion.dart';
// import 'package:figma_squircle/figma_squircle.dart';
// import 'package:flutter/material.dart';
// import 'package:un_ui/util/conditional_parent_widget.dart';

// import '../text/text_area.dart';

// class UnEditingCard extends StatelessWidget {
//   final Widget? header;
//   final Widget? footer;
//   final bool? autofocus;
//   final TextEditingController? controller;
//   final ValueChanged<String>? onChanged;
//   final GestureTapCallback? onTap;
//   final bool isExpandable;
//   final bool isSelected;

//   const UnEditingCard({
//     super.key,
//     this.header,
//     this.footer,
//     this.isSelected = false,
//     this.isExpandable = false,
//     this.autofocus,
//     this.onChanged,
//     this.onTap,
//     this.controller,
//   });

//   @override
//   Widget build(BuildContext context) => Card(
//         elevation: 1,
//         clipBehavior: Clip.antiAliasWithSaveLayer,
//         shape: const SmoothRectangleBorder(
//           borderRadius: SmoothBorderRadius.all(
//             SmoothRadius(
//               cornerRadius: UnCorner.Large,
//               cornerSmoothing: UnCorner.SmoothFactor,
//             ),
//           ),
//         ),
//         child: InkWell(
//           onTap: onTap,
//           child: Padding(
//             padding: const EdgeInsets.symmetric(
//               vertical: 12.0,
//               horizontal: 8.0,
//             ),
//             child: AnimatedSize(
//               alignment: Alignment.topCenter,
//               duration: ElementMotion.moderate,
//               curve: ElementMotion.linear,
//               child: ConditionalParentWidget(
//                 condition: isSelected || !isExpandable,
//                 conditionalBuilder: (child) =>
//                     AspectRatio(aspectRatio: 1, child: child),
//                 child: Column(
//                   children: [
//                     if (header != null) header!,
//                     if (isSelected || !isExpandable)
//                       TextArea(
//                         controller: controller,
//                         onTap: onTap,
//                         autofocus: autofocus,
//                         onChanged: onChanged,
//                       ),
//                     if (footer != null) footer!,
//                   ],
//                 ),
//               ),
//             ),
//           ),
//         ),
//       );
// }
