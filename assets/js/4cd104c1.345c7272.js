"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=s,h=u["".concat(o,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},75412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),s=a(67294),r=a(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">build</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span></li>\n<li><span class="parameter" id="build-param-state"><span class="type-annotation"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouterState-class.html">GoRouterState</a></span> <span class="parameter-name">state</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a> for <code>this</code> route.</p>\n<p>Subclasses must override one of <a href="../../unself_app/UnpackAssistantRoute/build">build</a>, <a href="../../unself_app/UnpackAssistantRoute/buildPage">buildPage</a>, or\n<a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a>.</p>\n<p>Corresponds to <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRoute/builder.html">GoRoute.builder</a>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nWidget build(context, state) =&gt; const UnpackAssistantPage();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute">UnpackAssistantRoute</a></li>\n  <li class="self-crumb">build method</li>\n</ol>\n\n\n    <h5>UnpackAssistantRoute class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute#constructors">Constructors</a></li>\n          <li><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute.constructor">UnpackAssistantRoute</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute#instance-methods">Methods</a></li>\n          <li><a href="../../unself_app/UnpackAssistantRoute/build">build</a></li>\n          <li><a href="../../unself_app/UnpackAssistantRoute/buildPage">buildPage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRouteData/redirect.html">redirect</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_app/UnpackAssistantRoute/UnpackAssistantRoute#static-properties">Static properties</a></li>\n          <li><a href="../../unself_app/UnpackAssistantRoute/name">name</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"build method",sidebar_label:"build",hide_title:!0},o=void 0,c={unversionedId:"packages/unself_app/UnpackAssistantRoute/build",id:"packages/unself_app/UnpackAssistantRoute/build",title:"build method",description:"",source:"@site/reference/packages/unself_app/UnpackAssistantRoute/build.mdx",sourceDirName:"packages/unself_app/UnpackAssistantRoute",slug:"/packages/unself_app/UnpackAssistantRoute/build",permalink:"/reference/packages/unself_app/UnpackAssistantRoute/build",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_app/UnpackAssistantRoute/build.mdx",tags:[],version:"current",frontMatter:{title:"build method",sidebar_label:"build",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantRoute const constructor",permalink:"/reference/packages/unself_app/UnpackAssistantRoute/UnpackAssistantRoute.constructor"},next:{title:"buildPage",permalink:"/reference/packages/unself_app/UnpackAssistantRoute/buildPage"}},p={},u=[],d={toc:u};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);