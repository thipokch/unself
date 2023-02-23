"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91054],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},o=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return a?t.createElement(h,l(l({ref:n},o),{},{components:a})):t.createElement(h,l({ref:n},o))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},14010:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var t=a(87462),r=a(67294),i=a(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">load</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">ArchiveFormat</span>&gt;</span></span>\n<span class="name ">load</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="load-param-app"><span class="type-annotation">App</span> <span class="parameter-name">app</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/UnpackService/load">load</a> returns the <code>Mapping</code> with file format requirements for the\ngiven app.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nFutureOr&lt;ArchiveFormat&gt; load(App app) {\n  _app = app;\n  return _formats.firstWhere((e) =&gt; e.app == app);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/UnpackService">UnpackService</a></li>\n  <li class="self-crumb">load method</li>\n</ol>\n\n\n    <h5>UnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_unpack/UnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_unpack/UnpackService/unpacked">unpacked</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/UnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/UnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/UnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_unpack/UnpackService/supportedApps">supportedApps</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"load method",sidebar_label:"load",hide_title:!0},c=void 0,p={unversionedId:"api/unself_unpack/UnpackService/load",id:"api/unself_unpack/UnpackService/load",title:"load method",description:"",source:"@site/developer/api/unself_unpack/UnpackService/load.mdx",sourceDirName:"api/unself_unpack/UnpackService",slug:"/api/unself_unpack/UnpackService/load",permalink:"/developer/api/unself_unpack/UnpackService/load",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/UnpackService/load.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"load method",sidebar_label:"load",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"getDocuments",permalink:"/developer/api/unself_unpack/UnpackService/getDocuments"},next:{title:"open",permalink:"/developer/api/unself_unpack/UnpackService/open"}},o={},d=[],u={toc:d};function f(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);