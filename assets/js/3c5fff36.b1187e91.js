"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(h,i(i({ref:t},o),{},{components:n})):a.createElement(h,i({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(67294),s=n(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">start</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>\n<span class="name ">start</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="start-param-mappings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span> <span class="parameter-name">mappings</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/UnpackService/start">start</a> let the service begins unpacking with the given <code>Mapping</code>\n, and returns a progress stream.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nStream&lt;int&gt; start(List&lt;Mapping&gt; mappings) {\n  throw UnimplementedError();\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/UnpackService">UnpackService</a></li>\n  <li class="self-crumb">start method</li>\n</ol>\n\n\n    <h5>UnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_unpack/UnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_unpack/UnpackService/unpacked">unpacked</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/UnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/UnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/UnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_unpack/UnpackService/supportedApps">supportedApps</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"start method",sidebar_label:"start",hide_title:!0},l=void 0,p={unversionedId:"api/unself_unpack/UnpackService/start",id:"api/unself_unpack/UnpackService/start",title:"start method",description:"",source:"@site/developer/api/unself_unpack/UnpackService/start.mdx",sourceDirName:"api/unself_unpack/UnpackService",slug:"/api/unself_unpack/UnpackService/start",permalink:"/developer/api/unself_unpack/UnpackService/start",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/UnpackService/start.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"start method",sidebar_label:"start",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"process",permalink:"/developer/api/unself_unpack/UnpackService/process"},next:{title:"supportedApps",permalink:"/developer/api/unself_unpack/UnpackService/supportedApps"}},o={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);