"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73858],{3905:(r,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var s=n.createContext({}),c=function(r){var e=n.useContext(s),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},d=function(r){var e=c(r.components);return n.createElement(s.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,s=r.parentName,d=l(r,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(m,i(i({ref:e},d),{},{components:t})):n.createElement(m,i({ref:e},d))}));function m(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=r,l[u]="string"==typeof r?r:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83445:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(87462),a=t(67294),o=t(3905);function i(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">recordFlutterError</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n<span class="name ">recordFlutterError</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="recordFlutterError-param-flutterErrorDetails"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/FlutterErrorDetails-class.html">FlutterErrorDetails</a></span> <span class="parameter-name">flutterErrorDetails</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static Future&lt;void&gt; recordFlutterError(\n  FlutterErrorDetails flutterErrorDetails,\n) async {\n  await FirebaseCrashlytics.instance.recordFlutterError(\n    flutterErrorDetails,\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/ErrorService">ErrorService</a></li>\n  <li class="self-crumb">recordFlutterError static method</li>\n</ol>\n\n\n    <h5>ErrorService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_monitoring/ErrorService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#static-methods">Static methods</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordError">recordError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"recordFlutterError static method",sidebar_label:"recordFlutterError",hide_title:!0},s=void 0,c={unversionedId:"api/unself_monitoring/ErrorService/recordFlutterError",id:"api/unself_monitoring/ErrorService/recordFlutterError",title:"recordFlutterError static method",description:"",source:"@site/developer/api/unself_monitoring/ErrorService/recordFlutterError.mdx",sourceDirName:"api/unself_monitoring/ErrorService",slug:"/api/unself_monitoring/ErrorService/recordFlutterError",permalink:"/developer/api/unself_monitoring/ErrorService/recordFlutterError",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/ErrorService/recordFlutterError.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"recordFlutterError static method",sidebar_label:"recordFlutterError",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"recordError",permalink:"/developer/api/unself_monitoring/ErrorService/recordError"},next:{title:"recordIsolateError",permalink:"/developer/api/unself_monitoring/ErrorService/recordIsolateError"}},d={},u=[],p={toc:u};function f(r){let{components:e,...t}=r;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);