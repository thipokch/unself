"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88721],{3905:(e,n,i)=>{i.d(n,{Zo:()=>f,kt:()=>m});var r=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=r.createContext({}),c=function(e){var n=r.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},f=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(i),u=t,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return i?r.createElement(m,o(o({ref:n},f),{},{components:i})):r.createElement(m,o({ref:n},f))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:t,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},60008:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=i(87462),t=i(67294),a=i(3905);function o(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">initializeMonitoringServices</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n<span class="name ">initializeMonitoringServices</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="initializeMonitoringServices-param-sentryDsn">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">sentryDsn</span>, </span></li>\n<li><span class="parameter" id="initializeMonitoringServices-param-firebaseOptions"><span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></span> <span class="parameter-name">firebaseOptions</span>}</span></li>\n</ol>)\n\n        \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Future&lt;void&gt; initializeMonitoringServices({\n  required String sentryDsn,\n  required FirebaseOptions firebaseOptions,\n}) async {\n  await Firebase.initializeApp(\n    options: firebaseOptions,\n  );\n  await Sentry.init((options) {\n    options.dsn = sentryDsn;\n    options.tracesSampleRate = 1.0;\n  });\n  await PackageInfo.fromPlatform().then(\n    (value) =&gt; InfoService.package = value,\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_monitoring</a></li>\n  <li><a href="../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li class="self-crumb">initializeMonitoringServices function</li>\n</ol>\n\n\n    <h5>unself_monitoring library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#classes">Classes</a></li>\n        <li><a href="../unself_monitoring/AnalyticService">AnalyticService</a></li>\n        <li><a href="../unself_monitoring/ErrorService">ErrorService</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>\n        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>\n        <li><a href="../unself_monitoring/InfoService">InfoService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>\n        <li><a href="../unself_monitoring/PerformanceService">PerformanceService</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>\n        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>\n\n\n\n\n\n      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#functions">Functions</a></li>\n        <li><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"initializeMonitoringServices function",sidebar_label:"initializeMonitoringServices",hide_title:!0},l=void 0,c={unversionedId:"api/unself_monitoring/initializeMonitoringServices",id:"api/unself_monitoring/initializeMonitoringServices",title:"initializeMonitoringServices function",description:"",source:"@site/developer/api/unself_monitoring/initializeMonitoringServices.mdx",sourceDirName:"api/unself_monitoring",slug:"/api/unself_monitoring/initializeMonitoringServices",permalink:"/developer/api/unself_monitoring/initializeMonitoringServices",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/initializeMonitoringServices.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"initializeMonitoringServices function",sidebar_label:"initializeMonitoringServices",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"PerformanceService const constructor",permalink:"/developer/api/unself_monitoring/PerformanceService/PerformanceService.constructor"},next:{title:"unself_style",permalink:"/developer/api/unself_style/"}},f={},p=[],d={toc:p};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);