"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[78773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=l,h=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:l,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),l=n(67294),a=n(3905);function c(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">collect</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Collection</span>&gt;</span></span>&gt;</span></span>\n<span class="name ">collect</span>(<wbr>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p>Returns supported <code>Collection</code> that can be collected by <code>ICollector</code></p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nFutureOr&lt;List&lt;Collection&gt;&gt; collect() {\n  final archiveFiles = _archive.files\n      .where((_) =&gt; !_.name.startsWith(\'__MACOSX\'))\n      .where((_) =&gt; _.name.endsWith("json"))\n      .toList();\n\n  // final collectionFileMap = &lt;String, ArchiveFile&gt;{\n  //   for (final rawFile in archiveFiles) _dotPath(rawFile.name): rawFile\n  // };\n\n  final collectionJson = &lt;String, Object&gt;{\n    for (final rawFile in archiveFiles)\n      _dotPath(rawFile.name): String.fromCharCodes(rawFile.content)\n    // jsonDecode(String.fromCharCodes(rawFile.content))\n  };\n\n  // ignore: avoid_print\n  print(jsonEncode(collectionJson));\n  // print(jsonEncode(collectionFileMap.keys.toList()));\n\n  return [];\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>\n  <li class="self-crumb">collect method</li>\n</ol>\n\n\n    <h5>ArchiveCollector class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.constructor">ArchiveCollector</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/ArchiveCollector.fromZipBytes">fromZipBytes</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/ArchiveCollector#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/ArchiveCollector#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/collect">collect</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/ArchiveCollector/retrieve">retrieve</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/ArchiveCollector#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"collect method",sidebar_label:"collect",hide_title:!0},i=void 0,s={unversionedId:"api/unself_unpack/ArchiveCollector/collect",id:"api/unself_unpack/ArchiveCollector/collect",title:"collect method",description:"",source:"@site/developer/api/unself_unpack/ArchiveCollector/collect.mdx",sourceDirName:"api/unself_unpack/ArchiveCollector",slug:"/api/unself_unpack/ArchiveCollector/collect",permalink:"/developer/api/unself_unpack/ArchiveCollector/collect",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/ArchiveCollector/collect.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"collect method",sidebar_label:"collect",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ArchiveCollector.fromZipBytes factory constructor",permalink:"/developer/api/unself_unpack/ArchiveCollector/ArchiveCollector.constructor"},next:{title:"retrieve",permalink:"/developer/api/unself_unpack/ArchiveCollector/retrieve"}},p={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);