"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5224],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var s=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),o=function(e){var a=s.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=o(e.components);return s.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},f=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=o(t),f=n,h=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return t?s.createElement(h,l(l({ref:a},d),{},{components:t})):s.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=f;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(87462),n=t(67294),r=t(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">AnalyticRouteObserver</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver-class.html">NavigatorObserver</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/RouteObserver-class.html">RouteObserver</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span>&gt;</span></li>\n      <li>AnalyticRouteObserver</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="AnalyticRouteObserver" class="callable">\n          <span class="name"><a href="../unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></span><span class="signature">(<span class="parameter" id="-param-analytic">{<span>required</span> <span class="type-annotation">AnalyticService</span> <span class="parameter-name">analytic</span>, </span><span class="parameter" id="-param-nameExtractor"><span class="type-annotation"><a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></span> <span class="parameter-name">nameExtractor</span> = <span class="default-value">defaultNameExtractor</span>, </span><span class="parameter" id="-param-routeFilter"><span class="type-annotation"><a href="../unself_app/RouteFilter">RouteFilter</a></span> <span class="parameter-name">routeFilter</span> = <span class="default-value">defaultRouteFilter</span>, </span><span class="parameter" id="-param-onError"><span class="type-annotation">dynamic</span> <span class="parameter-name">onError</span>(<span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/PlatformException-class.html">PlatformException</a></span> <span class="parameter-name">error</span></span>)?}</span>)</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="analytic" class="property">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/analytic">analytic</a></span>\n  <span class="signature">\u2192 AnalyticService</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="nameExtractor" class="property">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></span>\n  <span class="signature">\u2192 <a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="navigator" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/NavigatorState-class.html">NavigatorState</a>?</span> \n\n</dt>\n<dd class="inherited">\n  The navigator that the observer is observing, if any.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="routeFilter" class="property">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/routeFilter">routeFilter</a></span>\n  <span class="signature">\u2192 <a href="../unself_app/RouteFilter">RouteFilter</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="debugObservingRoute" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></span><span class="signature">(<wbr><span class="parameter" id="debugObservingRoute-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span> <span class="parameter-name">route</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Whether this observer is managing changes for the specified route.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="didPop" class="callable">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/didPop">didPop</a></span><span class="signature">(<wbr><span class="parameter" id="didPop-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didPop-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> popped <code>route</code>.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="didPush" class="callable">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/didPush">didPush</a></span><span class="signature">(<wbr><span class="parameter" id="didPush-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didPush-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> pushed <code>route</code>.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="didRemove" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></span><span class="signature">(<wbr><span class="parameter" id="didRemove-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didRemove-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> removed <code>route</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="didReplace" class="callable">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/didReplace">didReplace</a></span><span class="signature">(<wbr><span class="parameter" id="didReplace-param-newRoute">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">newRoute</span>, </span><span class="parameter" id="didReplace-param-oldRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">oldRoute</span>}</span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> replaced <code>oldRoute</code> with <code>newRoute</code>.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="didStartUserGesture" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></span><span class="signature">(<wbr><span class="parameter" id="didStartUserGesture-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didStartUserGesture-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a>\'s routes are being moved by a user gesture.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="didStopUserGesture" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  User gesture is no longer controlling the <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="subscribe" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></span><span class="signature">(<wbr><span class="parameter" id="subscribe-param-routeAware"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteAware-class.html">RouteAware</a></span> <span class="parameter-name">routeAware</span>, </span><span class="parameter" id="subscribe-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span> <span class="parameter-name">route</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Subscribe <code>routeAware</code> to be informed about changes to <code>route</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="unsubscribe" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></span><span class="signature">(<wbr><span class="parameter" id="unsubscribe-param-routeAware"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteAware-class.html">RouteAware</a></span> <span class="parameter-name">routeAware</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Unsubscribe <code>routeAware</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n  <section class="summary offset-anchor" id="static-methods">\n    <h2>Static Methods</h2>\n    <dl class="callables">\n        <dt id="defaultNameExtractor" class="callable">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></span><span class="signature">(<wbr><span class="parameter" id="defaultNameExtractor-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a></span> <span class="parameter-name">settings</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="defaultRouteFilter" class="callable">\n  <span class="name"><a href="../unself_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></span><span class="signature">(<wbr><span class="parameter" id="defaultRouteFilter-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">route</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n    </dl>\n  </section>\n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_app</a></li>\n  <li><a href="../unself_app/unself_app">unself_app</a></li>\n  <li class="self-crumb">AnalyticRouteObserver class</li>\n</ol>\n\n\n    <h5>unself_app library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_app/unself_app#classes">Classes</a></li>\n        <li><a href="../unself_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n        <li><a href="../unself_app/App">App</a></li>\n        <li><a href="../unself_app/AppRouter">AppRouter</a></li>\n        <li><a href="../unself_app/AppShell">AppShell</a></li>\n        <li><a href="../unself_app/LicenseDetailRoute">LicenseDetailRoute</a></li>\n        <li><a href="../unself_app/LicenseListRoute">LicenseListRoute</a></li>\n        <li><a href="../unself_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>\n        <li><a href="../unself_app/SettingsDataRoute">SettingsDataRoute</a></li>\n        <li><a href="../unself_app/SettingsListRoute">SettingsListRoute</a></li>\n        <li><a href="../unself_app/SettingsRoutes">SettingsRoutes</a></li>\n        <li><a href="../unself_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>\n        <li><a href="../unself_app/UnpackRoutes">UnpackRoutes</a></li>\n\n      <li class="section-title"><a href="../unself_app/unself_app#extensions">Extensions</a></li>\n        <li><a href="../unself_app/$LicenseDetailRouteExtension">$LicenseDetailRouteExtension</a></li>\n        <li><a href="../unself_app/$LicenseListRouteExtension">$LicenseListRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsAppearanceRouteExtension">$SettingsAppearanceRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsDataRouteExtension">$SettingsDataRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsRoutesExtension">$SettingsRoutesExtension</a></li>\n        <li><a href="../unself_app/$UnpackRoutesExtension">$UnpackRoutesExtension</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#properties">Properties</a></li>\n        <li><a href="../unself_app/$appRoutes">$appRoutes</a></li>\n        <li><a href="../unself_app/$settingsRoutes">$settingsRoutes</a></li>\n        <li><a href="../unself_app/$unpackRoutes">$unpackRoutes</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#typedefs">Typedefs</a></li>\n        <li><a href="../unself_app/RouteFilter">RouteFilter</a></li>\n        <li><a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_app/AnalyticRouteObserver#constructors">Constructors</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_app/AnalyticRouteObserver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_app/AnalyticRouteObserver/analytic">analytic</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_app/AnalyticRouteObserver#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/didPop">didPop</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/didPush">didPush</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/didReplace">didReplace</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>\n\n        <li class="section-title inherited"><a href="../unself_app/AnalyticRouteObserver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../unself_app/AnalyticRouteObserver#static-methods">Static methods</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>\n          <li><a href="../unself_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"AnalyticRouteObserver class",sidebar_label:"AnalyticRouteObserver",hide_title:!0},p=void 0,o={unversionedId:"api/unself_app/AnalyticRouteObserver/AnalyticRouteObserver",id:"api/unself_app/AnalyticRouteObserver/AnalyticRouteObserver",title:"AnalyticRouteObserver class",description:"",source:"@site/developer/api/unself_app/AnalyticRouteObserver/AnalyticRouteObserver.mdx",sourceDirName:"api/unself_app/AnalyticRouteObserver",slug:"/api/unself_app/AnalyticRouteObserver/",permalink:"/developer/api/unself_app/AnalyticRouteObserver/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/AnalyticRouteObserver/AnalyticRouteObserver.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"AnalyticRouteObserver class",sidebar_label:"AnalyticRouteObserver",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"$unpackRoutes",permalink:"/developer/api/unself_app/$unpackRoutes"},next:{title:"AnalyticRouteObserver constructor",permalink:"/developer/api/unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor"}},d={},c=[],u={toc:c};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);