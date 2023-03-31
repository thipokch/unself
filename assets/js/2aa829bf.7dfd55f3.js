"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56219],{3905:(e,n,a)=>{a.d(n,{Zo:()=>_,kt:()=>u});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},_=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,_=i(e,["components","mdxType","originalType","parentName"]),p=l(a),f=s,u=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return a?t.createElement(u,o(o({ref:n},_),{},{components:a})):t.createElement(u,o({ref:n},_))}));function u(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},19470:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>_,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(87462),s=a(67294),r=a(3905);function o(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-top-level-property">facebookKeys</span> top-level property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Pattern-class.html">Pattern</a></span>&gt;</span>\n          <span class="name ">facebookKeys</span>\n          <div class="features"><span class="feature">final</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">final List&lt;Pattern&gt; facebookKeys = [\n  "friends_and_followers.friend_requests_sent",\n  "friends_and_followers.friends",\n  "friends_and_followers.who_you_follow",\n  "friends_and_followers.friend_requests_received",\n  "friends_and_followers.removed_friends",\n  "voting_location_and_reminders.location",\n  "voting_location_and_reminders.voting_reminders",\n  "preferences.live_video_subscriptions",\n  "preferences.language_and_locale",\n  "messages.messenger_contacts_you\'ve_blocked",\n  "messages.autofill_information",\n  "messages.secret_conversations",\n  "apps_and_websites_off_of_facebook.apps_and_websites",\n  "apps_and_websites_off_of_facebook.your_off-facebook_activity",\n  "posts.your_uncategorized_photos",\n  RegExp(r\'^posts.your_posts_(d+)$\'), // "posts.your_posts_1",\n  "comments_and_reactions.comments",\n  "comments_and_reactions.posts_and_comments",\n  "location.primary_public_location",\n  "location.timezone",\n  "location.primary_location",\n  "location.device_location",\n  "your_topics.your_topics",\n  "other_logged_information.ads_interests",\n  "other_logged_information.friend_peer_group",\n  "groups.your_group_membership_activity",\n  "your_interactions_on_facebook.recently_viewed",\n  "your_interactions_on_facebook.recently_visited",\n  "saved_items_and_collections.collections",\n  "saved_items_and_collections.your_saved_items",\n  "search.your_search_history",\n  "facebook_accounts_center.accounts_center",\n  "meta_spark.meta_spark_checklist",\n  "security_and_login_information.ip_address_activity",\n  "security_and_login_information.your_facebook_activity_history",\n  "security_and_login_information.record_details",\n  "security_and_login_information.account_status_changes",\n  "security_and_login_information.browser_cookies",\n  "security_and_login_information.mobile_devices",\n  "security_and_login_information.account_activity",\n  "security_and_login_information.email_address_verifications",\n  "security_and_login_information.logins_and_logouts",\n  "security_and_login_information.where_you\'re_logged_in",\n  "security_and_login_information.login_protection_data",\n  "feed.controls",\n  "feed.reduce",\n  "profile_information.profile_information",\n  "profile_information.profile_update_history",\n  "ads_information.advertisers_you\'ve_interacted_with",\n  "facebook_payments.payment_history",\n  "activity_messages.group_interactions",\n  "activity_messages.people_and_friends",\n  "events.event_invitations",\n  "events.your_event_responses",\n  "pages_and_profiles.pages_you\'ve_liked",\n  "pages_and_profiles.your_pages_and_profiles",\n  "pages_and_profiles.pages_and_profiles_you\'ve_recommended",\n  "pages_and_profiles.pages_and_profiles_you\'ve_unfollowed",\n  "pages_and_profiles.pages_and_profiles_you_follow",\n  "notifications.notification_of_meta_privacy_policy_update",\n  "notifications.notifications",\n  "your_places.places_you\'ve_created",\n  RegExp(r\'^posts.album.(d+)$\'), // "posts.album.0",\n  RegExp(\n      r\'^messages.filtered_threads.(.+)_(d+).message_(d+)\'), // "messages.filtered_threads.username_012345.message_1",\n  RegExp(\n      r\'^messages.message_requests.(.+)_(d+).message_(d+)\'), // "messages.message_requests.username_012345.message_1",\n  RegExp(\n      r\'^messages.inbox.(.+)_(d+).message_(d+)\'), // "messages.inbox.username_012345.message_1",\n  RegExp(\n      r\'^messages.archived_threads.(.+)_(d+).message_(d+)\'), // "messages.archived_threads.username_012345.message_1",\n];</code></pre>\n</section>\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">facebookKeys property</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookKeys">facebookKeys</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"facebookKeys property",sidebar_label:"facebookKeys",hide_title:!0},c=void 0,l={unversionedId:"api/unself_unpack/facebookKeys",id:"api/unself_unpack/facebookKeys",title:"facebookKeys property",description:"",source:"@site/developer/api/unself_unpack/facebookKeys.mdx",sourceDirName:"api/unself_unpack",slug:"/api/unself_unpack/facebookKeys",permalink:"/developer/api/unself_unpack/facebookKeys",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/facebookKeys.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"facebookKeys property",sidebar_label:"facebookKeys",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"unpack",permalink:"/developer/api/unself_unpack/ZipImport/unpack"},next:{title:"facebookMapping",permalink:"/developer/api/unself_unpack/facebookMapping"}},_={},p=[],d={toc:p};function f(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);