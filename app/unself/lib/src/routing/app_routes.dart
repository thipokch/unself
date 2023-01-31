import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_app/unself_app.dart';
part 'app_routes.g.dart';

// @TypedGoRoute<SessionFlow>(
//   path: '/session',
//   routes: <TypedGoRoute<GoRouteData>>[
//     // TypedGoRoute<SessionDetailRoute>(path: ':id'),
//     // TypedGoRoute<SessionEditRoute>(path: ':id/edit'),
//   ],
// )
// class SessionFlow extends SessionListRoute {
//   const SessionFlow();
// }

// @TypedGoRoute<ExerciseFlow>(
//   path: '/exercise',
//   routes: <TypedGoRoute<GoRouteData>>[
//     // TypedGoRoute<ExerciseDetailRoute>(path: ':id'),
//     // TypedGoRoute<ExerciseStartRoute>(path: ':id/start'),
//   ],
// )
// class ExerciseFlow extends ExerciseListRoute {
//   const ExerciseFlow();
// }

@TypedGoRoute<UnpackRoutes>(
  path: '/unpack',
  routes: <TypedGoRoute<GoRouteData>>[
    // TypedGoRoute<ExerciseDetailRoute>(path: ':id'),
    // TypedGoRoute<ExerciseStartRoute>(path: ':id/start'),
  ],
)
class UnpackRoutes extends UnpackAssistantRoute {
  const UnpackRoutes();
}

@TypedGoRoute<SettingsRoutes>(
  path: '/settings',
  routes: <TypedGoRoute<GoRouteData>>[
    TypedGoRoute<SettingsDataRoute>(path: 'data'),
    TypedGoRoute<SettingsAppearanceRoute>(path: 'appearance'),

    TypedGoRoute<LicenseListRoute>(
      path: 'license',
      routes: [
        TypedGoRoute<LicenseDetailRoute>(path: ':id'),
      ],
    ),
    // TypedGoRoute<PrivacyRoute>(path: 'privacy'),
    // TypedGoRoute<TermsRoute>(path: 'terms'),
    // TypedGoRoute<DeveloperRoute>(path: 'developer'),
  ],
)
class SettingsRoutes extends SettingsListRoute {
  const SettingsRoutes();
}
