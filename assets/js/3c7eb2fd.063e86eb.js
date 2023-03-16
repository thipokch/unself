"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[20732],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>v});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),o=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(a),f=t,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||c;return a?r.createElement(v,i(i({ref:n},p),{},{components:a})):r.createElement(v,i({ref:n},p))}));function v(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,i=new Array(c);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},16102:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),t=a(67294),c=a(3905);function i(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnpackService</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">UnpackService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-localDb">{<span>required</span> <span class="type-annotation">LocalDatabase</span> <span class="parameter-name">localDb</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">UnpackService({\n  required LocalDatabase localDb,\n}) : _localDb = localDb;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/UnpackService">UnpackService</a></li>\n  <li class="self-crumb">UnpackService constructor</li>\n</ol>\n\n\n    <h5>UnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_unpack/UnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_unpack/UnpackService/unpacked">unpacked</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/UnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/UnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/UnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"UnpackService constructor",sidebar_label:"UnpackService constructor",hide_title:!0},s=void 0,o={unversionedId:"api/unself_unpack/UnpackService/UnpackService.constructor",id:"api/unself_unpack/UnpackService/UnpackService.constructor",title:"UnpackService constructor",description:"",source:"@site/developer/api/unself_unpack/UnpackService/UnpackService.constructor.mdx",sourceDirName:"api/unself_unpack/UnpackService",slug:"/api/unself_unpack/UnpackService/UnpackService.constructor",permalink:"/developer/api/unself_unpack/UnpackService/UnpackService.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/UnpackService/UnpackService.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"UnpackService constructor",sidebar_label:"UnpackService constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackService",permalink:"/developer/api/unself_unpack/UnpackService/"},next:{title:"collect",permalink:"/developer/api/unself_unpack/UnpackService/collect"}},p={},u=[],d={toc:u};function f(e){let{components:n,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);