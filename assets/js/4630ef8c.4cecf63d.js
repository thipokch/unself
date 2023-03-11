"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},72191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(87462),n=a(67294),i=a(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">defaultNameExtractor</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>\n<span class="name ">defaultNameExtractor</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="defaultNameExtractor-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a></span> <span class="parameter-name">settings</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static String? defaultNameExtractor(RouteSettings settings) =&gt; settings.name;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n  <li class="self-crumb">defaultNameExtractor static method</li>\n</ol>\n\n\n    <h5>AnalyticRouteObserver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#constructors">Constructors</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_app/AnalyticRouteObserver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/analytic">analytic</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPop">didPop</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPush">didPush</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didReplace">didReplace</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/AnalyticRouteObserver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#static-methods">Static methods</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"defaultNameExtractor static method",sidebar_label:"defaultNameExtractor",hide_title:!0},o=void 0,c={unversionedId:"api/unself_app/AnalyticRouteObserver/defaultNameExtractor",id:"api/unself_app/AnalyticRouteObserver/defaultNameExtractor",title:"defaultNameExtractor static method",description:"",source:"@site/developer/api/unself_app/AnalyticRouteObserver/defaultNameExtractor.mdx",sourceDirName:"api/unself_app/AnalyticRouteObserver",slug:"/api/unself_app/AnalyticRouteObserver/defaultNameExtractor",permalink:"/developer/api/unself_app/AnalyticRouteObserver/defaultNameExtractor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/AnalyticRouteObserver/defaultNameExtractor.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"defaultNameExtractor static method",sidebar_label:"defaultNameExtractor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"analytic",permalink:"/developer/api/unself_app/AnalyticRouteObserver/analytic"},next:{title:"defaultRouteFilter",permalink:"/developer/api/unself_app/AnalyticRouteObserver/defaultRouteFilter"}},u={},d=[],p={toc:d};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);