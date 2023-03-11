"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[32682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(o,".").concat(c)]||u[c]||f[c]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},60309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(67294),i=r(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">defaultSettings</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowserSettings-class.html">ChromeSafariBrowserSettings</a>\n          <span class="name ">defaultSettings</span>\n          <div class="features"><span class="feature">read / write</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static ChromeSafariBrowserSettings defaultSettings =\n    ChromeSafariBrowserSettings(\n  shareState: CustomTabsShareState.SHARE_STATE_OFF,\n  barCollapsingEnabled: true,\n  entersReaderIfAvailable: false,\n);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_browser</a></li>\n  <li><a href="../../unself_browser/unself_browser">unself_browser</a></li>\n  <li><a href="../../unself_browser/Browser">Browser</a></li>\n  <li class="self-crumb">defaultSettings property</li>\n</ol>\n\n\n    <h5>Browser class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_browser/Browser#constructors">Constructors</a></li>\n          <li><a href="../../unself_browser/Browser/Browser.constructor">Browser</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_browser/Browser#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_browser/Browser/analytics">analytics</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/id.html">id</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_browser/Browser/settings">settings</a></li>\n\n        <li class="section-title"><a href="../../unself_browser/Browser#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/addMenuItem.html">addMenuItem</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/addMenuItems.html">addMenuItems</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/close.html">close</a></li>\n          <li><a href="../../unself_browser/Browser/go">go</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/isOpened.html">isOpened</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/launchUrl.html">launchUrl</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/mayLaunchUrl.html">mayLaunchUrl</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onClosed.html">onClosed</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onCompletedInitialLoad.html">onCompletedInitialLoad</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onInitialLoadDidRedirect.html">onInitialLoadDidRedirect</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onNavigationEvent.html">onNavigationEvent</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onOpened.html">onOpened</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onRelationshipValidationResult.html">onRelationshipValidationResult</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onServiceConnected.html">onServiceConnected</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/onWillOpenInBrowser.html">onWillOpenInBrowser</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/open.html">open</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/setActionButton.html">setActionButton</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/setSecondaryToolbar.html">setSecondaryToolbar</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/throwIsAlreadyOpened.html">throwIsAlreadyOpened</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/throwIsNotOpened.html">throwIsNotOpened</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/updateActionButton.html">updateActionButton</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/updateSecondaryToolbar.html">updateSecondaryToolbar</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/flutter_inappwebview/6.0.0-beta.22/flutter_inappwebview/ChromeSafariBrowser/validateRelationship.html">validateRelationship</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_browser/Browser#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_browser/Browser#static-properties">Static properties</a></li>\n          <li><a href="../../unself_browser/Browser/defaultSettings">defaultSettings</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"defaultSettings property",sidebar_label:"defaultSettings",hide_title:!0},o=void 0,p={unversionedId:"api/unself_browser/Browser/defaultSettings",id:"api/unself_browser/Browser/defaultSettings",title:"defaultSettings property",description:"",source:"@site/developer/api/unself_browser/Browser/defaultSettings.mdx",sourceDirName:"api/unself_browser/Browser",slug:"/api/unself_browser/Browser/defaultSettings",permalink:"/developer/api/unself_browser/Browser/defaultSettings",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_browser/Browser/defaultSettings.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"defaultSettings property",sidebar_label:"defaultSettings",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"analytics",permalink:"/developer/api/unself_browser/Browser/analytics"},next:{title:"go",permalink:"/developer/api/unself_browser/Browser/go"}},d={},u=[],f={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}c.isMDXComponent=!0}}]);