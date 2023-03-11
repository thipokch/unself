"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87512],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,h=p["".concat(l,".").concat(u)]||p[u]||f[u]||s;return a?t.createElement(h,i(i({ref:n},d),{},{components:a})):t.createElement(h,i({ref:n},d))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57057:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=a(87462),r=a(67294),s=a(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">InfoService</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../unself_monitoring/InfoService">InfoService</a> description</p>\n</section>\n\n\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="InfoService" class="callable">\n          <span class="name"><a href="../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></span><span class="signature">(<span class="parameter" id="-param-analytic">{<span class="type-annotation"><a href="../unself_monitoring/AnalyticService">AnalyticService</a>?</span> <span class="parameter-name">analytic</span>}</span>)</span>\n        </dt>\n        <dd>\n          <a href="../unself_monitoring/InfoService">InfoService</a> description\n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="analyticId" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/analyticId">analyticId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="appName" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/appName">appName</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  Load app information from the platform.\nThe app name. <code>CFBundleDisplayName</code> on iOS, <code>application/label</code> on Android.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="buildNumber" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/buildNumber">buildNumber</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  The build number. <code>CFBundleVersion</code> on iOS, <code>versionCode</code> on Android.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="buildSignature" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/buildSignature">buildSignature</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  The build signature. Empty string on iOS, signing key signature (hex) on Android.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="installerStore" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/installerStore">installerStore</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  The installer store. Indicates through which store this application was installed.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="packageName" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/packageName">packageName</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  The package name. <code>bundleIdentifier</code> on iOS, <code>getPackageName</code> on Android.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="version" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/version">version</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  The package version. <code>CFBundleShortVersionString</code> on iOS, <code>versionName</code> on Android.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor" id="static-properties">\n    <h2>Static Properties</h2>\n\n    <dl class="properties">\n        <dt id="package" class="property">\n  <span class="name"><a href="../unself_monitoring/InfoService/package">package</a></span>\n  <span class="signature">\u2194 <a href="https://pub.dev/documentation/package_info_plus/3.0.2/package_info_plus/PackageInfo-class.html">PackageInfo</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read / write</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_monitoring</a></li>\n  <li><a href="../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li class="self-crumb">InfoService class</li>\n</ol>\n\n\n    <h5>unself_monitoring library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#classes">Classes</a></li>\n        <li><a href="../unself_monitoring/AnalyticService">AnalyticService</a></li>\n        <li><a href="../unself_monitoring/ErrorService">ErrorService</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>\n        <li><a href="../unself_monitoring/InfoService">InfoService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>\n        <li><a href="../unself_monitoring/PerformanceService">PerformanceService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>\n\n\n\n\n\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#functions">Functions</a></li>\n        <li><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_monitoring/InfoService#constructors">Constructors</a></li>\n          <li><a href="../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_monitoring/InfoService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_monitoring/InfoService/analyticId">analyticId</a></li>\n          <li><a href="../unself_monitoring/InfoService/appName">appName</a></li>\n          <li><a href="../unself_monitoring/InfoService/buildNumber">buildNumber</a></li>\n          <li><a href="../unself_monitoring/InfoService/buildSignature">buildSignature</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_monitoring/InfoService/installerStore">installerStore</a></li>\n          <li><a href="../unself_monitoring/InfoService/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_monitoring/InfoService/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../unself_monitoring/InfoService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_monitoring/InfoService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../unself_monitoring/InfoService#static-properties">Static properties</a></li>\n          <li><a href="../unself_monitoring/InfoService/package">package</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"InfoService class",sidebar_label:"InfoService",hide_title:!0},l=void 0,c={unversionedId:"api/unself_monitoring/InfoService/InfoService",id:"api/unself_monitoring/InfoService/InfoService",title:"InfoService class",description:"",source:"@site/developer/api/unself_monitoring/InfoService/InfoService.mdx",sourceDirName:"api/unself_monitoring/InfoService",slug:"/api/unself_monitoring/InfoService/",permalink:"/developer/api/unself_monitoring/InfoService/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/InfoService/InfoService.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"InfoService class",sidebar_label:"InfoService",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"runAppGuarded",permalink:"/developer/api/unself_monitoring/ErrorService/runAppGuarded"},next:{title:"InfoService const constructor",permalink:"/developer/api/unself_monitoring/InfoService/InfoService.constructor"}},d={},p=[],f={toc:p};function u(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);