"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(67294),l=r(3905);function c(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ArchiveCollector.fromZipBytes</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">ArchiveCollector.fromZipBytes</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromZipBytes-param-bytes">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> <span class="parameter-name">bytes</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory ArchiveCollector.fromZipBytes({\n  required List&lt;int&gt; bytes,\n}) =&gt;\n    ArchiveCollector(\n      archive: archive.ZipDecoder().decodeBytes(bytes),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>\n  <li class="self-crumb">ArchiveCollector.fromZipBytes factory constructor</li>\n</ol>\n\n\n    <h5>ArchiveCollector class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.constructor">ArchiveCollector</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.fromZipBytes">fromZipBytes</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/ArchiveCollector#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/collect">collect</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/retrieve">retrieve</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/ArchiveCollector#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"ArchiveCollector.fromZipBytes factory constructor",sidebar_label:"ArchiveCollector.fromZipBytes factory constructor",hide_title:!0},i=void 0,s={unversionedId:"api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor",id:"api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor",title:"ArchiveCollector.fromZipBytes factory constructor",description:"",source:"@site/developer/api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor.mdx",sourceDirName:"api/unself_unpack/ArchiveCollector",slug:"/api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor",permalink:"/developer/api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ArchiveCollector.fromZipBytes factory constructor",sidebar_label:"ArchiveCollector.fromZipBytes factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ArchiveCollector",permalink:"/developer/api/unself_unpack/ArchiveCollector/"},next:{title:"collect",permalink:"/developer/api/unself_unpack/ArchiveCollector/collect"}},p={},u=[],f={toc:u};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);