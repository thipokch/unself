import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:unself_app/routing/routing.dart';
import 'package:unself_app_info/unself_app_info.dart';
import 'package:unself_component/unself_component.dart';
import 'package:unself_settings_list/settings_list.dart';

class SettingsListRoute extends GoRouteData {
  const SettingsListRoute();

  static String name = "SettingsList";

  @override
  Widget build(BuildContext context, GoRouterState state) => SettingsListPage(
        onSelectData: () => SettingsDataRoute().go(context),
        onSelectAppearance: () => SettingsAppearanceRoute().go(context),
        onSelectLicense: () => LicenseListRoute().go(context),
        onSelectFeedback: () {},
        onSelectPrivacy: () {},
        onSelectTerms: () {},
        // onSelectFeedback: () => Browser(analytics: context.read())
        //     .go(url: "https://unself.app/feedback"),
        // onSelectPrivacy: () => Browser(analytics: context.read())
        //     .go(url: "https://unself.app/privacy"),
        // onSelectTerms: () => Browser(analytics: context.read())
        //     .go(url: "https://unself.app/terms"),
        trailing: AppInfoView(),
      );

  @override
  Page<void> buildPage(BuildContext context, GoRouterState state) =>
      UnTransitionPage(child: build(context, state), name: name);
}
