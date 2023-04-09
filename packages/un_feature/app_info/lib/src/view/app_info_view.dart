import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:un_monitoring/un_monitoring.dart';
import 'package:un_style/un_style.dart';

/// {@template app_info_view}
/// View of the AppInfoPage.
///
/// Add what it does
/// {@endtemplate}
class AppInfoView extends StatelessWidget {
  /// {@macro app_info_view}
  const AppInfoView({super.key});

  @override
  Widget build(BuildContext context) {
    final info = context.read<InfoService>();
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 16.0,
        vertical: 72.0,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text(
            info.appName,
            style: Theme.of(context).textTheme.headlineSmall,
            textAlign: TextAlign.start,
          ),
          if (info.version != '')
            Padding(
              padding: const EdgeInsets.only(bottom: UnSpaces.M),
              child: Text(
                info.version,
                style: Theme.of(context).textTheme.bodyMedium,
                textAlign: TextAlign.start,
              ),
            ),
          if (info.buildNumber != '')
            Text(
              info.buildNumber,
              style: Theme.of(context).textTheme.bodySmall,
              textAlign: TextAlign.start,
            ),
          const SizedBox(height: 16),
        ],
      ),
    );
  }
}
