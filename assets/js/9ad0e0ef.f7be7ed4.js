"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[23575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(a),f=r,h=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),r=a(67294),i=a(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">init</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/provider/6.0.5/provider/MultiProvider-class.html">MultiProvider</a></span>&gt;</span></span>\n<span class="name ">init</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="init-param-builder">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">builder</span>(<ol class="parameter-list"><li><span class="parameter" id="param-"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span>, </span></li>\n<li><span class="parameter" id="param-"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="init-param-isDebug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isDebug</span>, </span></li>\n<li><span class="parameter" id="init-param-rudderWriteKey"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">rudderWriteKey</span>, </span></li>\n<li><span class="parameter" id="init-param-rudderDataPlaneUrl"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">rudderDataPlaneUrl</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static Future&lt;MultiProvider&gt; init({\n  Widget Function(BuildContext, Widget?)? builder,\n  required bool isDebug,\n  required String rudderWriteKey,\n  required String rudderDataPlaneUrl,\n}) async {\n  return MultiProvider(\n    builder: builder,\n    providers: [\n      // [Provider] create/update are lazy by default\n      Provider&lt;UserService&gt;(\n        create: (_) =&gt; const UserService(),\n      ),\n      Provider&lt;LicenseService&gt;(\n        create: (_) =&gt; const LicenseService(),\n      ),\n      // Provider&lt;ExerciseRepository&gt;(\n      //   create: (_) =&gt; ExerciseRepository(),\n      // ),\n      Provider&lt;AnalyticService&gt;(\n        lazy: false, // Track lifecycle events\n        create: (_) =&gt; AnalyticService(\n            rudder: RudderController.instance\n              ..initialize(\n                rudderWriteKey,\n                config: RudderConfigBuilder()\n                    .withDataPlaneUrl(rudderDataPlaneUrl)\n                    .withFactory(RudderIntegrationFirebaseFlutter())\n                    .withDebug(isDebug)\n                    .build(),\n              )),\n      ),\n      Provider&lt;InfoService&gt;(\n        create: (_) =&gt; InfoService(analytic: _.read()),\n      ),\n      // Provider&lt;MessageService&gt;(\n      //   create: (_) =&gt; MessageService(),\n      // ),\n      Provider&lt;PerformanceService&gt;(\n        create: (_) =&gt;\n            PerformanceService(performance: FirebasePerformance.instance),\n      ),\n\n      // Provider&lt;FirebaseAppCheck&gt;(\n      //   create: (_) =&gt; FirebaseAppCheck.instance,\n      // ),\n      // Provider&lt;FirebaseInAppMessaging&gt;(\n      //   create: (_) =&gt; FirebaseInAppMessaging.instance,\n      // ),\n      // ListenableProvider&lt;FirebaseRemoteConfig&gt;(\n      //   create: (_) {\n      //     if (remoteConfig != null) {\n      //       FirebaseRemoteConfig.instance.setConfigSettings(remoteConfig!);\n      //     }\n\n      //     return FirebaseRemoteConfig.instance;\n      //   },\n      // ),\n      // Provider&lt;GlobalKey&lt;NavigatorState&gt;&gt;.value(\n      //   value: AppRouter.defaultNavigator,\n      // ),\n      // if (!kIsWeb)\n      //   Provider&lt;RisoShader&gt;.value(\n      //     value: await RisoShader.load(),\n      //   ),\n      // Provider&lt;Browser&gt;(\n      //   create: (context) =&gt; Browser(analytics: ),\n      // ),\n\n      Provider&lt;LocalDatabase&gt;(\n        create: (_) =&gt; LocalDatabase(),\n      ),\n    ],\n    child: const App._(),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/App">App</a></li>\n  <li class="self-crumb">init static method</li>\n</ol>\n\n\n    <h5>App class</h5>\n    <ol>\n\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_app/App#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/App#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_app/App/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/App#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_app/App#static-methods">Static methods</a></li>\n          <li><a href="../../unself_app/App/init">init</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"init static method",sidebar_label:"init",hide_title:!0},p=void 0,o={unversionedId:"api/unself_app/App/init",id:"api/unself_app/App/init",title:"init static method",description:"",source:"@site/developer/api/unself_app/App/init.mdx",sourceDirName:"api/unself_app/App",slug:"/api/unself_app/App/init",permalink:"/developer/api/unself_app/App/init",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/App/init.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"init static method",sidebar_label:"init",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"createState",permalink:"/developer/api/unself_app/App/createState"},next:{title:"AppRouter",permalink:"/developer/api/unself_app/AppRouter/"}},d={},c=[],u={toc:c};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);