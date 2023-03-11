"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(a),f=r,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},40180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=a(67294),i=a(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">buildPage</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n<span class="name ">buildPage</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="buildPage-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span></li>\n<li><span class="parameter" id="buildPage-param-state"><span class="type-annotation"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouterState-class.html">GoRouterState</a></span> <span class="parameter-name">state</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A page builder for this route.</p>\n<p>Subclasses can override this function to provide a custom <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a>.</p>\n<p>Subclasses must override one of <a href="../../unself_app/SettingsAppearanceRoute/build">build</a>, <a href="../../unself_app/SettingsAppearanceRoute/buildPage">buildPage</a> or\n<a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a>.</p>\n<p>Corresponds to <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRoute/pageBuilder.html">GoRoute.pageBuilder</a>.</p>\n<p>By default, returns a <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a> instance that is ignored, causing a default\n<a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a> implementation to be used with the results of <a href="../../unself_app/SettingsAppearanceRoute/build">build</a>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nPage&lt;void&gt; buildPage(context, state) =&gt;\n    UnTransitionPage(child: build(context, state));</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>\n  <li class="self-crumb">buildPage method</li>\n</ol>\n\n\n    <h5>SettingsAppearanceRoute class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_app/SettingsAppearanceRoute#constructors">Constructors</a></li>\n          <li><a href="../../unself_app/SettingsAppearanceRoute/SettingsAppearanceRoute.constructor">SettingsAppearanceRoute</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_app/SettingsAppearanceRoute#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/SettingsAppearanceRoute#instance-methods">Methods</a></li>\n          <li><a href="../../unself_app/SettingsAppearanceRoute/build">build</a></li>\n          <li><a href="../../unself_app/SettingsAppearanceRoute/buildPage">buildPage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/SettingsAppearanceRoute#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_app/SettingsAppearanceRoute#static-properties">Static properties</a></li>\n          <li><a href="../../unself_app/SettingsAppearanceRoute/name">name</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"buildPage method",sidebar_label:"buildPage",hide_title:!0},p=void 0,o={unversionedId:"api/unself_app/SettingsAppearanceRoute/buildPage",id:"api/unself_app/SettingsAppearanceRoute/buildPage",title:"buildPage method",description:"",source:"@site/developer/api/unself_app/SettingsAppearanceRoute/buildPage.mdx",sourceDirName:"api/unself_app/SettingsAppearanceRoute",slug:"/api/unself_app/SettingsAppearanceRoute/buildPage",permalink:"/developer/api/unself_app/SettingsAppearanceRoute/buildPage",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/SettingsAppearanceRoute/buildPage.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"buildPage method",sidebar_label:"buildPage",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/developer/api/unself_app/SettingsAppearanceRoute/build"},next:{title:"name",permalink:"/developer/api/unself_app/SettingsAppearanceRoute/name"}},u={},c=[],d={toc:c};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);