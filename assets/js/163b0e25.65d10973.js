"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(o,".").concat(f)]||u[f]||c[f]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(67294),i=r(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">didPop</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">void</span>\n<span class="name ">didPop</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="didPop-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span></li>\n<li><span class="parameter" id="didPop-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> popped <code>route</code>.</p>\n<p>The route immediately below that one, and thus the newly active\nroute, is <code>previousRoute</code>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nvoid didPop(Route&lt;dynamic&gt; route, Route&lt;dynamic&gt;? previousRoute) {\n  super.didPop(route, previousRoute);\n  if (previousRoute != null &amp;&amp;\n      routeFilter(previousRoute) &amp;&amp;\n      routeFilter(route)) {\n    _sendScreenView(previousRoute);\n  }\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n  <li class="self-crumb">didPop method</li>\n</ol>\n\n\n    <h5>AnalyticRouteObserver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#constructors">Constructors</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_app/AnalyticRouteObserver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/analytic">analytic</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPop">didPop</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPush">didPush</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didReplace">didReplace</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/AnalyticRouteObserver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver#static-methods">Static methods</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"didPop method",sidebar_label:"didPop",hide_title:!0},o=void 0,p={unversionedId:"api/unself_app/AnalyticRouteObserver/didPop",id:"api/unself_app/AnalyticRouteObserver/didPop",title:"didPop method",description:"",source:"@site/developer/api/unself_app/AnalyticRouteObserver/didPop.mdx",sourceDirName:"api/unself_app/AnalyticRouteObserver",slug:"/api/unself_app/AnalyticRouteObserver/didPop",permalink:"/developer/api/unself_app/AnalyticRouteObserver/didPop",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/AnalyticRouteObserver/didPop.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"didPop method",sidebar_label:"didPop",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"defaultRouteFilter",permalink:"/developer/api/unself_app/AnalyticRouteObserver/defaultRouteFilter"},next:{title:"didPush",permalink:"/developer/api/unself_app/AnalyticRouteObserver/didPush"}},d={},u=[],c={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);