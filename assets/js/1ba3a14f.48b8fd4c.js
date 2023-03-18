"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[41694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">onSubscriptionData</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">onSubscriptionData</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="onSubscriptionData-param-user"><span class="type-annotation">Settings</span> <span class="parameter-name">user</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void onSubscriptionData(Settings user) =&gt;\n    // TODO: Reimplement logic\n    // ignore: invalid_use_of_visible_for_testing_member\n    emit(SettingsAppearanceState(themeMode: user.themeMode));</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_appearance</a></li>\n  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li><a href="../../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>\n  <li class="self-crumb">onSubscriptionData method</li>\n</ol>\n\n\n    <h5>SettingsAppearanceBloc class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceBloc#constructors">Constructors</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_appearance/SettingsAppearanceBloc#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceBloc#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceBloc/close">close</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceBloc#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"onSubscriptionData method",sidebar_label:"onSubscriptionData",hide_title:!0},c=void 0,l={unversionedId:"api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData",id:"api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData",title:"onSubscriptionData method",description:"",source:"@site/developer/api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData.mdx",sourceDirName:"api/settings_appearance/SettingsAppearanceBloc",slug:"/api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData",permalink:"/developer/api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_appearance/SettingsAppearanceBloc/onSubscriptionData.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"onSubscriptionData method",sidebar_label:"onSubscriptionData",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"onEvent",permalink:"/developer/api/settings_appearance/SettingsAppearanceBloc/onEvent"},next:{title:"SettingsAppearanceBuilder",permalink:"/developer/api/settings_appearance/SettingsAppearanceBuilder"}},p={},d=[],u={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);