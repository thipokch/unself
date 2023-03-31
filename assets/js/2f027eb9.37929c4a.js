"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||c[f]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(67294),l=n(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">defaultRoute</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/ShellRoute-class.html">ShellRoute</a>\n          <span class="name ">defaultRoute</span>\n          <div class="features"><span class="feature">final</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static final defaultRoute = ShellRoute(\n  navigatorKey: navigator,\n  pageBuilder: (context, state, child) =&gt; UnRootSheetPage(\n    child: MultiProvider(\n      // create: (_) =&gt; navigator,\n      providers: [\n        Provider(create: (_) =&gt; navigator),\n        // Provider(create: (_) =&gt; HomeBloc(navigator: _.read())),\n      ],\n      child: AppShell._(destinations: [\n        _AppShellDestination(\n          path: const UnpackRoutes().location,\n          icon: const Icon(UnSymbols.list),\n          selectedIcon: const Icon(UnSymbols.listFilled),\n          label: \'Unpack\',\n        ),\n        _AppShellDestination(\n          path: const SettingsRoutes().location,\n          icon: const Icon(UnSymbols.list),\n          selectedIcon: const Icon(UnSymbols.listFilled),\n          label: \'Timeline\',\n        ),\n      ], child: child),\n    ),\n  ),\n  // observers:  [\n  // AppRoute.defaultObserver,\n  // ],\n  routes: [\n    // $sessionFlow,\n    // Workaround for go_router_builder #2672\n    // ..routes.insertAll(0, &lt;GoRoute&gt;[\n    //   GoRoute(\n    //     path: ":id/edit",\n    //     parentNavigatorKey: AppRoute.defaultNavigator,\n    //     pageBuilder: (_, state) =&gt; SessionEditRoute(state.params["id"]!)\n    //         .buildPage(_, state),\n    //   ),\n    // ]),\n    // $exerciseFlow,\n    // ..routes.insertAll(0, &lt;GoRoute&gt;[\n    //   GoRoute(\n    //     path: ":id/start",\n    //     parentNavigatorKey: AppRoute.defaultNavigator,\n    //     pageBuilder: (_, state) =&gt; ExerciseStartRoute(state.params["id"]!)\n    //         .buildPage(_, state),\n    //   ),\n    // ]),\n    $unpackRoutes,\n    $settingsRoutes,\n  ],\n);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/AppShell">AppShell</a></li>\n  <li class="self-crumb">defaultRoute property</li>\n</ol>\n\n\n    <h5>AppShell class</h5>\n    <ol>\n\n\n\n        <li class="section-title">\n          <a href="../../unself_app/AppShell#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_app/AppShell/child">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/AppShell#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_app/AppShell/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/AppShell#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_app/AppShell#static-properties">Static properties</a></li>\n          <li><a href="../../unself_app/AppShell/defaultRoute">defaultRoute</a></li>\n          <li><a href="../../unself_app/AppShell/navigator">navigator</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"defaultRoute property",sidebar_label:"defaultRoute",hide_title:!0},s=void 0,p={unversionedId:"api/unself_app/AppShell/defaultRoute",id:"api/unself_app/AppShell/defaultRoute",title:"defaultRoute property",description:"",source:"@site/developer/api/unself_app/AppShell/defaultRoute.mdx",sourceDirName:"api/unself_app/AppShell",slug:"/api/unself_app/AppShell/defaultRoute",permalink:"/developer/api/unself_app/AppShell/defaultRoute",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/AppShell/defaultRoute.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"defaultRoute property",sidebar_label:"defaultRoute",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"createState",permalink:"/developer/api/unself_app/AppShell/createState"},next:{title:"navigator",permalink:"/developer/api/unself_app/AppShell/navigator"}},d={},u=[],c={toc:u};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);