// ignore_for_file: avoid_print

import 'package:json_path/json_path.dart';

void main() {
  final document = <Map<String, dynamic>>[
    {
      "state": "Florida",
      "shortname": "FL",
      "info": {"governor": "Rick Scott"},
      "counties": [
        {
          "name": "Dade",
          "population": 12345,
          "test": ["FUCK", "YOU"]
        },
        {"name": "Broward", "population": 40000},
        {"name": "Palm Beach", "population": 60000},
      ],
    },
    {
      "state": "Ohio",
      "shortname": "OH",
      "info": {"governor": "John Kasich"},
      "counties": [
        {"name": "Summit", "population": 1234},
        {"name": "Cuyahoga", "population": 1337},
      ],
    }
  ];

  // Json Path
  for (var expression in [
    "",
    "[:]",
    "[:]['counties'][:]",
    "[:][*][:][:]",
  ]) {
    final pointer = JsonPath(
      "\$$expression",
    );

    print('👉 "${pointer.expression}"');
    pointer
        .read(document)
        .map((match) => '${match.pointer}:\t${match.value}')
        .forEach(print);
  }

  // // RFC 6901
  // for (var expression in [
  //   "/0/state",
  // ]) {
  //   final pointer = JsonPointer(expression);

  //   print('👉 "${pointer}"');
  //   final result = pointer.read(document);
  //   print(result);
  // }
}
