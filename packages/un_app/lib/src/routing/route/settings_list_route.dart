import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:un_app/un_app.dart';
import 'package:un_app_info/un_app_info.dart';
import 'package:un_browser/un_browser.dart';
import 'package:un_ui/un_ui.dart';
import 'package:un_settings_list/settings_list.dart';

class SettingsListRoute extends GoRouteData {
  const SettingsListRoute();

  static String name = "SettingsList";

  @override
  Widget build(BuildContext context, GoRouterState state) => SettingsListPage(
        onSelectData: () => const SettingsDataRoute().go(context),
        onSelectAppearance: () => const SettingsAppearanceRoute().go(context),
        onSelectLicense: () => const LicenseListRoute().go(context),
        onSelectFeedback: () => Browser(analytics: context.read())
            .go(url: "https://unself.app/feedback"),
        onSelectPrivacy: () => Browser(analytics: context.read())
            .go(url: "https://unself.app/privacy"),
        onSelectTerms: () => Browser(analytics: context.read())
            .go(url: "https://unself.app/terms"),
        trailing: const AppInfoView(),
      );

  @override
  Page<void> buildPage(BuildContext context, GoRouterState state) =>
      UnTransitionPage(child: build(context, state), name: name);
}
