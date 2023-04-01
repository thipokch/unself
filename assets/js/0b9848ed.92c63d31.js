"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60819],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),o=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),f=r,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||c;return a?t.createElement(h,l(l({ref:n},p),{},{components:a})):t.createElement(h,l({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},41181:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(87462),r=a(67294),c=a(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">load</span> abstract method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">ArchiveSchema</span>&gt;</span></span>\n<span class="name ">load</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="load-param-app"><span class="type-annotation">App</span> <span class="parameter-name">app</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/IUnpackService/load">load</a> returns the <code>Mapping</code> with file format requirements for the\ngiven app.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">FutureOr&lt;ArchiveSchema&gt; load(App app);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/IUnpackService">IUnpackService</a></li>\n  <li class="self-crumb">load abstract method</li>\n</ol>\n\n\n    <h5>IUnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/IUnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/IUnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/IUnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/IUnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"load abstract method",sidebar_label:"load",hide_title:!0},s=void 0,o={unversionedId:"api/unself_unpack/IUnpackService/load",id:"api/unself_unpack/IUnpackService/load",title:"load abstract method",description:"",source:"@site/developer/api/unself_unpack/IUnpackService/load.mdx",sourceDirName:"api/unself_unpack/IUnpackService",slug:"/api/unself_unpack/IUnpackService/load",permalink:"/developer/api/unself_unpack/IUnpackService/load",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/IUnpackService/load.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"load abstract method",sidebar_label:"load",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"getDocuments",permalink:"/developer/api/unself_unpack/IUnpackService/getDocuments"},next:{title:"open",permalink:"/developer/api/unself_unpack/IUnpackService/open"}},p={},d=[],u={toc:d};function f(e){let{components:n,...a}=e;return(0,c.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);