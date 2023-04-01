"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),i=n(67294),a=n(3905);function c(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">AnalyticService</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">AnalyticService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-rudder">{<span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></span> <span class="parameter-name">rudder</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p><a href="../../unself_monitoring/AnalyticService">AnalyticService</a> description</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">AnalyticService({required RudderController rudder}) : _rudder = rudder {\n  if (Firebase.apps.isEmpty) {\n    throw Exception(\n      "Firebase Analytics must be initialized for RudderStacks\' Firebase Integration.",\n    );\n  }\n\n  getCurrentContext().then((value) =&gt; _context = value);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/AnalyticService">AnalyticService</a></li>\n  <li class="self-crumb">AnalyticService constructor</li>\n</ol>\n\n\n    <h5>AnalyticService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/AnalyticService.constructor">AnalyticService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/AnalyticService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/AnalyticService/context">context</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/getCurrentContext">getCurrentContext</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/trackEvent">trackEvent</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/trackScreen">trackScreen</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/AnalyticService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"AnalyticService constructor",sidebar_label:"AnalyticService constructor",hide_title:!0},o=void 0,s={unversionedId:"api/unself_monitoring/AnalyticService/AnalyticService.constructor",id:"api/unself_monitoring/AnalyticService/AnalyticService.constructor",title:"AnalyticService constructor",description:"",source:"@site/developer/api/unself_monitoring/AnalyticService/AnalyticService.constructor.mdx",sourceDirName:"api/unself_monitoring/AnalyticService",slug:"/api/unself_monitoring/AnalyticService/AnalyticService.constructor",permalink:"/developer/api/unself_monitoring/AnalyticService/AnalyticService.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/AnalyticService/AnalyticService.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"AnalyticService constructor",sidebar_label:"AnalyticService constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"AnalyticService",permalink:"/developer/api/unself_monitoring/AnalyticService/"},next:{title:"context",permalink:"/developer/api/unself_monitoring/AnalyticService/context"}},d={},u=[],p={toc:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);