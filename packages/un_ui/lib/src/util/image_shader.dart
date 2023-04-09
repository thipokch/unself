import 'dart:ui';

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

/// Loads JPEG image and the [FragmentProgram]
Future<ImageShader> loadImageShader(String assetString) async {
  final asset = await rootBundle.load(assetString);
  final image = await decodeImageFromList(asset.buffer.asUint8List());

  return ImageShader(
    image,
    // Specify how image repetition is handled for x and y dimension
    TileMode.repeated,
    TileMode.repeated,
    // Transformation matrix (identity matrix = no transformation)
    Matrix4.identity().storage,
  );
}
