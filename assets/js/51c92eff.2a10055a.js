"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[46640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=d(a),f=s,h=c["".concat(p,".").concat(f)]||c[f]||u[f]||l;return a?n.createElement(h,r(r({ref:t},o),{},{components:a})):n.createElement(h,r({ref:t},o))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},63804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),s=a(67294),l=a(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">AppShell</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a></li>\n      <li>AppShell</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="child" class="property">\n  <span class="name"><a href="../unself_app/AppShell/child">child</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="key" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> \n\n</dt>\n<dd class="inherited">\n  Controls how one widget replaces another widget in the tree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="createElement" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/StatefulElement-class.html">StatefulElement</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Creates a <a href="https://api.flutter.dev/flutter/widgets/StatefulElement-class.html">StatefulElement</a> to manage this widget\'s location in the tree.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="createState" class="callable">\n  <span class="name"><a href="../unself_app/AppShell/createState">createState</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_app/AppShell">AppShell</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Creates the mutable state for this widget at a given location in the tree.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="debugDescribeChildren" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a list of <code>DiagnosticsNode</code> objects describing this node\'s\nchildren.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugFillProperties" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Add additional properties associated with the node.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toDiagnosticsNode" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a debug representation of the object that is used by debugging\ntools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringDeep" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></span><span class="signature">(<wbr><span class="parameter" id="toStringDeep-param-prefixLineOne">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">prefixLineOne</span> = <span class="default-value">\'\'</span>, </span><span class="parameter" id="toStringDeep-param-prefixOtherLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">prefixOtherLines</span>, </span><span class="parameter" id="toStringDeep-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a string representation of this node and its descendants.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShallow" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></span><span class="signature">(<wbr><span class="parameter" id="toStringShallow-param-joiner">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">joiner</span> = <span class="default-value">\', \'</span>, </span><span class="parameter" id="toStringShallow-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a one-line detailed description of the object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShort" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A short, textual description of this widget.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor" id="static-properties">\n    <h2>Static Properties</h2>\n\n    <dl class="properties">\n        <dt id="defaultRoute" class="property">\n  <span class="name"><a href="../unself_app/AppShell/defaultRoute">defaultRoute</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/ShellRoute-class.html">ShellRoute</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="navigator" class="property">\n  <span class="name"><a href="../unself_app/AppShell/navigator">navigator</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/GlobalKey-class.html">GlobalKey</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/NavigatorState-class.html">NavigatorState</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_app</a></li>\n  <li><a href="../unself_app/unself_app">unself_app</a></li>\n  <li class="self-crumb">AppShell class</li>\n</ol>\n\n\n    <h5>unself_app library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_app/unself_app#classes">Classes</a></li>\n        <li><a href="../unself_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n        <li><a href="../unself_app/App">App</a></li>\n        <li><a href="../unself_app/AppRouter">AppRouter</a></li>\n        <li><a href="../unself_app/AppShell">AppShell</a></li>\n        <li><a href="../unself_app/LicenseDetailRoute">LicenseDetailRoute</a></li>\n        <li><a href="../unself_app/LicenseListRoute">LicenseListRoute</a></li>\n        <li><a href="../unself_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>\n        <li><a href="../unself_app/SettingsDataRoute">SettingsDataRoute</a></li>\n        <li><a href="../unself_app/SettingsListRoute">SettingsListRoute</a></li>\n        <li><a href="../unself_app/SettingsRoutes">SettingsRoutes</a></li>\n        <li><a href="../unself_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>\n        <li><a href="../unself_app/UnpackRoutes">UnpackRoutes</a></li>\n\n      <li class="section-title"><a href="../unself_app/unself_app#extensions">Extensions</a></li>\n        <li><a href="../unself_app/$LicenseDetailRouteExtension">$LicenseDetailRouteExtension</a></li>\n        <li><a href="../unself_app/$LicenseListRouteExtension">$LicenseListRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsAppearanceRouteExtension">$SettingsAppearanceRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsDataRouteExtension">$SettingsDataRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsRoutesExtension">$SettingsRoutesExtension</a></li>\n        <li><a href="../unself_app/$UnpackRoutesExtension">$UnpackRoutesExtension</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#properties">Properties</a></li>\n        <li><a href="../unself_app/$appRoutes">$appRoutes</a></li>\n        <li><a href="../unself_app/$settingsRoutes">$settingsRoutes</a></li>\n        <li><a href="../unself_app/$unpackRoutes">$unpackRoutes</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#typedefs">Typedefs</a></li>\n        <li><a href="../unself_app/RouteFilter">RouteFilter</a></li>\n        <li><a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n\n\n        <li class="section-title">\n          <a href="../unself_app/AppShell#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_app/AppShell/child">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_app/AppShell#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../unself_app/AppShell/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../unself_app/AppShell#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../unself_app/AppShell#static-properties">Static properties</a></li>\n          <li><a href="../unself_app/AppShell/defaultRoute">defaultRoute</a></li>\n          <li><a href="../unself_app/AppShell/navigator">navigator</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"AppShell class",sidebar_label:"AppShell",hide_title:!0},p=void 0,d={unversionedId:"api/unself_app/AppShell/AppShell",id:"api/unself_app/AppShell/AppShell",title:"AppShell class",description:"",source:"@site/reference/api/unself_app/AppShell/AppShell.mdx",sourceDirName:"api/unself_app/AppShell",slug:"/api/unself_app/AppShell/",permalink:"/reference/api/unself_app/AppShell/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_app/AppShell/AppShell.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"AppShell class",sidebar_label:"AppShell",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"defaultRoutes",permalink:"/reference/api/unself_app/AppRouter/defaultRoutes"},next:{title:"child",permalink:"/reference/api/unself_app/AppShell/child"}},o={},c=[],u={toc:c};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);