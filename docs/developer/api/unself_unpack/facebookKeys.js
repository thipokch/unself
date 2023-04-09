import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-top-level-property">facebookKeys</span> top-level property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span>&gt;</span>
          <span class="name ">facebookKeys</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">final List&lt;Pattern&gt; facebookKeys = [
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
  RegExp(r'^posts\.your_posts_(\d+)\$'), // "posts.your_posts_1",
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
  RegExp(r'^posts\.album\.(\d+)\$'), // "posts.album.0",
  RegExp(
      r'^messages\.filtered_threads\.(.+)_(\d+).message_(\d+)'), // "messages.filtered_threads.username_012345.message_1",
  RegExp(
      r'^messages\.message_requests\.(.+)_(\d+).message_(\d+)'), // "messages.message_requests.username_012345.message_1",
  RegExp(
      r'^messages\.inbox\.(.+)_(\d+).message_(\d+)'), // "messages.inbox.username_012345.message_1",
  RegExp(
      r'^messages\.archived_threads\.(.+)_(\d+).message_(\d+)'), // "messages.archived_threads.username_012345.message_1",
];</code></pre>
</section>



  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_unpack</a></li>
  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li class="self-crumb">facebookKeys property</li>
</ol>


    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>
        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>




      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="../unself_unpack/facebookKeys">facebookKeys</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
