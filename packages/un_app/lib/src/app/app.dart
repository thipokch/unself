import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
// ignore: depend_on_referenced_packages
import 'package:rudder_integration_firebase_flutter/rudder_integration_firebase_flutter.dart';
import 'package:un_app/un_app.dart';
import 'package:un_license/un_license.dart';
import 'package:un_database/un_database.dart';
import 'package:un_monitoring/un_monitoring.dart';
import 'package:un_style/un_style.dart';
// import 'package:un_user/un_user.dart';

class App extends StatefulWidget {
  const App._();

  static Future<MultiProvider> init({
    Widget Function(BuildContext, Widget?)? builder,
    required bool isDebug,
    required String rudderWriteKey,
    required String rudderDataPlaneUrl,
  }) async {
    return MultiProvider(
      builder: builder,
      providers: [
        // [Provider] create/update are lazy by default
        // Provider<UserService>(
        //   create: (_) => const UserService(),
        // ),
        Provider<LicenseService>(
          create: (_) => const LicenseService(),
        ),
        // Provider<ExerciseRepository>(
        //   create: (_) => ExerciseRepository(),
        // ),
        Provider<AnalyticService>(
          lazy: false, // Track lifecycle events
          create: (_) => AnalyticService(
              rudder: RudderController.instance
                ..initialize(
                  rudderWriteKey,
                  config: RudderConfigBuilder()
                      .withDataPlaneUrl(rudderDataPlaneUrl)
                      .withFactory(RudderIntegrationFirebaseFlutter())
                      .withDebug(isDebug)
                      .build(),
                )),
        ),
        Provider<InfoService>(
          create: (_) => InfoService(analytic: _.read()),
        ),
        // Provider<MessageService>(
        //   create: (_) => MessageService(),
        // ),
        Provider<PerformanceService>(
          create: (_) =>
              PerformanceService(performance: FirebasePerformance.instance),
        ),

        // Provider<FirebaseAppCheck>(
        //   create: (_) => FirebaseAppCheck.instance,
        // ),
        // Provider<FirebaseInAppMessaging>(
        //   create: (_) => FirebaseInAppMessaging.instance,
        // ),
        // ListenableProvider<FirebaseRemoteConfig>(
        //   create: (_) {
        //     if (remoteConfig != null) {
        //       FirebaseRemoteConfig.instance.setConfigSettings(remoteConfig!);
        //     }

        //     return FirebaseRemoteConfig.instance;
        //   },
        // ),
        // Provider<GlobalKey<NavigatorState>>.value(
        //   value: AppRouter.defaultNavigator,
        // ),
        // if (!kIsWeb)
        //   Provider<RisoShader>.value(
        //     value: await RisoShader.load(),
        //   ),
        // Provider<Browser>(
        //   create: (context) => Browser(analytics: ),
        // ),

        Provider<UnDatabase>(
          create: (_) => UnDatabase(),
        ),
      ],
      child: const App._(),
    );
  }

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  late final GoRouter _router = AppRouter.build(
    observers: [
      AnalyticRouteObserver(analytic: context.read()),
    ],
  );

  static _unfocus(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: _unfocus(context),
        child: StreamBuilder<ThemeMode>(
          stream: context
              // .read<UserService>()
              .read()
              .streamUser()
              .map<ThemeMode>((_) => _.themeMode),
          builder: (context, snapshot) => MaterialApp.router(
            // debugShowCheckedModeBanner: false,
            themeMode: snapshot.data,
            theme: UnTheme.light,
            darkTheme: UnTheme.dark,
            routerConfig: _router,
          ),
        ),
      );
}
