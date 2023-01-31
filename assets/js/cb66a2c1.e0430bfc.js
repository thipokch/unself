"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83112],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},83927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(87462),n=a(67294),i=a(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">didReplace</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">void</span>\n<span class="name ">didReplace</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="didReplace-param-newRoute">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">newRoute</span>, </span></li>\n<li><span class="parameter" id="didReplace-param-oldRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">oldRoute</span>}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> replaced <code>oldRoute</code> with <code>newRoute</code>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nvoid didReplace({Route&lt;dynamic&gt;? newRoute, Route&lt;dynamic&gt;? oldRoute}) {\n  super.didReplace(newRoute: newRoute, oldRoute: oldRoute);\n  if (newRoute != null &amp;&amp; routeFilter(newRoute)) {\n    _sendScreenView(newRoute);\n  }\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n  <li class="self-crumb">didReplace method</li>\n</ol>\n\n\n    <h5>AnalyticRouteObserver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver#constructors">Constructors</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/analytic">analytic</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPop">didPop</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didPush">didPush</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/didReplace">didReplace</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_app/AnalyticRouteObserver/AnalyticRouteObserver#static-methods">Static methods</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>\n          <li><a href="../../unself_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"didReplace method",sidebar_label:"didReplace",hide_title:!0},o=void 0,c={unversionedId:"packages/unself_app/AnalyticRouteObserver/didReplace",id:"packages/unself_app/AnalyticRouteObserver/didReplace",title:"didReplace method",description:"",source:"@site/reference/packages/unself_app/AnalyticRouteObserver/didReplace.mdx",sourceDirName:"packages/unself_app/AnalyticRouteObserver",slug:"/packages/unself_app/AnalyticRouteObserver/didReplace",permalink:"/reference/packages/unself_app/AnalyticRouteObserver/didReplace",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_app/AnalyticRouteObserver/didReplace.mdx",tags:[],version:"current",frontMatter:{title:"didReplace method",sidebar_label:"didReplace",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"didPush",permalink:"/reference/packages/unself_app/AnalyticRouteObserver/didPush"},next:{title:"nameExtractor",permalink:"/reference/packages/unself_app/AnalyticRouteObserver/nameExtractor"}},d={},p=[],u={toc:p};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);