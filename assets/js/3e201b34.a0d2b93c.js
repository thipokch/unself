"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[57477],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>k});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),o=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=o(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(r),f=t,k=u["".concat(l,".").concat(f)]||u[f]||d[f]||c;return r?a.createElement(k,s(s({ref:n},p),{},{components:r})):a.createElement(k,s({ref:n},p))}));function k(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,s=new Array(c);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var o=2;o<c;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69794:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),t=r(67294),c=r(3905);function s(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnpackService</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnpackService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-localDb">{<span>required</span> <span class="type-annotation">LocalDatabase</span> <span class="parameter-name">localDb</span>, </span></li>\n<li><span class="parameter" id="-param-collector"><span>required</span> <span class="type-annotation">ICollector</span> <span class="parameter-name">collector</span>, </span></li>\n<li><span class="parameter" id="-param-processor"><span>required</span> <span class="type-annotation">IProcessor</span> <span class="parameter-name">processor</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/UnpackService/UnpackService">UnpackService</a> description</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnpackService({\n  required LocalDatabase localDb,\n  required ICollector collector,\n  required IProcessor processor,\n})  : _localDb = localDb,\n      _collector = collector,\n      _processor = processor;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/UnpackService/UnpackService">UnpackService</a></li>\n  <li class="self-crumb">UnpackService const constructor</li>\n</ol>\n\n\n    <h5>UnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService/UnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/UnpackService/UnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService/UnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/UnpackService/collect">collect</a></li>\n          <li><a href="../../unself_unpack/UnpackService/getDocuments">getDocuments</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/UnpackService/process">process</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService/UnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"UnpackService const constructor",sidebar_label:"UnpackService const constructor",hide_title:!0},l=void 0,o={unversionedId:"packages/unself_unpack/UnpackService/UnpackService.constructor",id:"packages/unself_unpack/UnpackService/UnpackService.constructor",title:"UnpackService const constructor",description:"",source:"@site/reference/packages/unself_unpack/UnpackService/UnpackService.constructor.mdx",sourceDirName:"packages/unself_unpack/UnpackService",slug:"/packages/unself_unpack/UnpackService/UnpackService.constructor",permalink:"/reference/packages/unself_unpack/UnpackService/UnpackService.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_unpack/UnpackService/UnpackService.constructor.mdx",tags:[],version:"current",frontMatter:{title:"UnpackService const constructor",sidebar_label:"UnpackService const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackService",permalink:"/reference/packages/unself_unpack/UnpackService/"},next:{title:"collect",permalink:"/reference/packages/unself_unpack/UnpackService/collect"}},p={},u=[],d={toc:u};function f(e){let{components:n,...r}=e;return(0,c.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);