import 'dart:async';
import 'dart:convert';

import 'package:archive/archive.dart';
import 'package:archive/archive_io.dart' show InputFileStream;
import 'package:unself_model/src/collection.dart';
import 'package:unself_unpack/src/collector/collector.dart'; // TODO: remove to support web

/// {@template archive_collector}
/// [ArchiveCollector] unpacks archive files and collect metadata.
/// {@endtemplate}
class ArchiveCollector implements ICollector {
  /// {@macro archive_collector}
  const ArchiveCollector({
    required Archive archive,
  }) : _archive = archive;

  factory ArchiveCollector.fromZipBytes({
    required List<int> bytes,
  }) =>
      ArchiveCollector(
        archive: ZipDecoder().decodeBytes(bytes),
      );

  factory ArchiveCollector.fromZipPath({
    required String path,
  }) =>
      ArchiveCollector(
        archive: ZipDecoder().decodeBuffer(InputFileStream(path)),
      );

  // Delegate
  final Archive _archive;

  static String _dotPath(String name) {
    final splitted = name.split(RegExp(r'[\\|\/|.]'));
    return splitted.sublist(1, splitted.length - 1).join('.');
  }

  @override
  FutureOr<List<Collection>> collect() {
    final archiveFiles = _archive.files
        .where((_) => !_.name.startsWith('__MACOSX'))
        .where((_) => _.name.endsWith("json"))
        .toList();

    // archiveFiles.map((e) => null);

    final collectionFileMap = <String, ArchiveFile>{
      for (final rawFile in archiveFiles) _dotPath(rawFile.name): rawFile
    };

    // final collectionJson = <String, Object>{
    //   for (final rawFile in archiveFiles)
    //     _dotPath(rawFile.name):
    //         jsonDecode(String.fromCharCodes(rawFile.content))
    // };

    print(jsonEncode(collectionFileMap.keys.toList()));

    return [];
  }

  @override
  FutureOr<List<String>> retrieve({required Collection collection}) {
    // TODO: implement retrieve
    throw UnimplementedError();
  }
}

final List<Pattern> facebookKeys = [
  "friends_and_followers.friend_requests_sent",
  "friends_and_followers.friends",
  "friends_and_followers.who_you_follow",
  "friends_and_followers.friend_requests_received",
  "friends_and_followers.removed_friends",
  "voting_location_and_reminders.location",
  "voting_location_and_reminders.voting_reminders",
  "preferences.live_video_subscriptions",
  "preferences.language_and_locale",
  "messages.messenger_contacts_you've_blocked",
  "messages.autofill_information",
  "messages.secret_conversations",
  "apps_and_websites_off_of_facebook.apps_and_websites",
  "apps_and_websites_off_of_facebook.your_off-facebook_activity",
  "posts.your_uncategorized_photos",
  RegExp(r'^posts\.your_posts_(\d+)$'), // "posts.your_posts_1",
  "comments_and_reactions.comments",
  "comments_and_reactions.posts_and_comments",
  "location.primary_public_location",
  "location.timezone",
  "location.primary_location",
  "location.device_location",
  "your_topics.your_topics",
  "other_logged_information.ads_interests",
  "other_logged_information.friend_peer_group",
  "groups.your_group_membership_activity",
  "your_interactions_on_facebook.recently_viewed",
  "your_interactions_on_facebook.recently_visited",
  "saved_items_and_collections.collections",
  "saved_items_and_collections.your_saved_items",
  "search.your_search_history",
  "facebook_accounts_center.accounts_center",
  "meta_spark.meta_spark_checklist",
  "security_and_login_information.ip_address_activity",
  "security_and_login_information.your_facebook_activity_history",
  "security_and_login_information.record_details",
  "security_and_login_information.account_status_changes",
  "security_and_login_information.browser_cookies",
  "security_and_login_information.mobile_devices",
  "security_and_login_information.account_activity",
  "security_and_login_information.email_address_verifications",
  "security_and_login_information.logins_and_logouts",
  "security_and_login_information.where_you're_logged_in",
  "security_and_login_information.login_protection_data",
  "feed.controls",
  "feed.reduce",
  "profile_information.profile_information",
  "profile_information.profile_update_history",
  "ads_information.advertisers_you've_interacted_with",
  "facebook_payments.payment_history",
  "activity_messages.group_interactions",
  "activity_messages.people_and_friends",
  "events.event_invitations",
  "events.your_event_responses",
  "pages_and_profiles.pages_you've_liked",
  "pages_and_profiles.your_pages_and_profiles",
  "pages_and_profiles.pages_and_profiles_you've_recommended",
  "pages_and_profiles.pages_and_profiles_you've_unfollowed",
  "pages_and_profiles.pages_and_profiles_you_follow",
  "notifications.notification_of_meta_privacy_policy_update",
  "notifications.notifications",
  "your_places.places_you've_created",
  RegExp(r'^posts\.album\.(\d+)$'), // "posts.album.0",
  RegExp(
      r'^messages\.filtered_threads\.(.+)_(\d+).message_(\d+)'), // "messages.filtered_threads.username_012345.message_1",
  RegExp(
      r'^messages\.message_requests\.(.+)_(\d+).message_(\d+)'), // "messages.message_requests.username_012345.message_1",
  RegExp(
      r'^messages\.inbox\.(.+)_(\d+).message_(\d+)'), // "messages.inbox.username_012345.message_1",
  RegExp(
      r'^messages\.archived_threads\.(.+)_(\d+).message_(\d+)'), // "messages.archived_threads.username_012345.message_1",
];
