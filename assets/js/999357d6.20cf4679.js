"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51499],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(r),u=t,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||i;return r?a.createElement(m,s(s({ref:n},d),{},{components:r})):a.createElement(m,s({ref:n},d))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[f]="string"==typeof e?e:t,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90305:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=r(87462),t=r(67294),i=r(3905);function s(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n    \n      <div>\n<h1><span class="kind-library">unself_monitoring</span> library \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section class="summary offset-anchor" id="classes">\n      <h2>Classes</h2>\n\n      <dl>\n        <dt id="AnalyticService">\n  <span class="name "><a href="../unself_monitoring/AnalyticService/AnalyticService">AnalyticService</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_monitoring/AnalyticService/AnalyticService">AnalyticService</a> description\n</dd>\n\n        <dt id="ErrorService">\n  <span class="name "><a href="../unself_monitoring/ErrorService/ErrorService">ErrorService</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_monitoring/ErrorService/ErrorService">ErrorService</a> description\n</dd>\n\n        <dt id="Firebase">\n  <span class="name "><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></span> \n\n</dt>\n<dd>\n  The entry point for accessing Firebase.\n</dd>\n\n        <dt id="FirebaseOptions">\n  <span class="name "><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></span> \n\n</dt>\n<dd>\n  The options used to configure a Firebase app.\n</dd>\n\n        <dt id="FirebasePerformance">\n  <span class="name "><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></span> \n\n</dt>\n<dd>\n  The Firebase Performance API.\n</dd>\n\n        <dt id="InfoService">\n  <span class="name "><a href="../unself_monitoring/InfoService/InfoService">InfoService</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_monitoring/InfoService/InfoService">InfoService</a> description\n</dd>\n\n        <dt id="MobileConfig">\n  <span class="name "><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></span> \n\n</dt>\n<dd>\n  Configurations to be used for mobile and mobile only. Any values set here\nwill have no effect on web whatsoever.\n</dd>\n\n        <dt id="PerformanceService">\n  <span class="name "><a href="../unself_monitoring/PerformanceService/PerformanceService">PerformanceService</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_monitoring/PerformanceService/PerformanceService">PerformanceService</a> description\n</dd>\n\n        <dt id="RudderConfigBuilder">\n  <span class="name "><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></span> \n\n</dt>\n<dd>\n  RudderConfigBuilder class for RudderConfig\n</dd>\n\n        <dt id="RudderController">\n  <span class="name "><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="WebConfig">\n  <span class="name "><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n\n\n\n    <section class="summary offset-anchor" id="functions">\n      <h2>Functions</h2>\n\n      <dl class="callables">\n        <dt id="initializeMonitoringServices" class="callable">\n  <span class="name"><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></span><span class="signature">(<wbr><span class="parameter" id="initializeMonitoringServices-param-sentryDsn">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">sentryDsn</span>, </span><span class="parameter" id="initializeMonitoringServices-param-firebaseOptions"><span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></span> <span class="parameter-name">firebaseOptions</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n      </dl>\n    </section>\n\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_monitoring</a></li>\n  <li class="self-crumb">unself_monitoring library</li>\n</ol>\n\n\n    <h5><span class="package-name">unself_monitoring</span> <span class="package-kind">package</span></h5>\n    <ol>\n      <li class="section-title">Libraries</li>\n      <li><a href="../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <h5>unself_monitoring library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#classes">Classes</a></li>\n        <li><a href="../unself_monitoring/AnalyticService/AnalyticService">AnalyticService</a></li>\n        <li><a href="../unself_monitoring/ErrorService/ErrorService">ErrorService</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>\n        <li><a href="../unself_monitoring/InfoService/InfoService">InfoService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>\n        <li><a href="../unself_monitoring/PerformanceService/PerformanceService">PerformanceService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>\n\n\n\n\n\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#functions">Functions</a></li>\n        <li><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>\n\n\n\n</ol>\n\n  </div>\x3c!--/sidebar-offcanvas-right--\x3e\n\n</main>'}})}const o={title:"unself_monitoring library",sidebar_label:"unself_monitoring",hide_title:!0},l=void 0,c={unversionedId:"packages/unself_monitoring/unself_monitoring",id:"packages/unself_monitoring/unself_monitoring",title:"unself_monitoring library",description:"",source:"@site/reference/packages/unself_monitoring/unself_monitoring.mdx",sourceDirName:"packages/unself_monitoring",slug:"/packages/unself_monitoring/",permalink:"/reference/packages/unself_monitoring/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_monitoring/unself_monitoring.mdx",tags:[],version:"current",frontMatter:{title:"unself_monitoring library",sidebar_label:"unself_monitoring",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/reference/packages/unself_model/User/toJson"},next:{title:"AnalyticService",permalink:"/reference/packages/unself_monitoring/AnalyticService/"}},d={},f=[],p={toc:f};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);