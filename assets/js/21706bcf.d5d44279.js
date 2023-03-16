"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95194],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},o="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(a),d=r,m=o["".concat(i,".").concat(d)]||o[d]||f[d]||l;return a?t.createElement(m,s(s({ref:n},p),{},{components:a})):t.createElement(m,s({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[o]="string"==typeof e?e:r,s[1]=c;for(var u=2;u<l;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85e3:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>o});var t=a(87462),r=a(67294),l=a(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">listAccumulator&lt;<wbr><span class="type-parameter">T</span>&gt;</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="../unself_unpack/Accumulator">Accumulator</a></span>\n<span class="name ">listAccumulator</span>&lt;<wbr><span class="type-parameter">T</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="listAccumulator-param-result"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">result</span>, </span></li>\n<li><span class="parameter" id="listAccumulator-param-seenKeys">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">seenKeys</span>]</span></li>\n</ol>)\n\n        \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Accumulator listAccumulator&lt;T&gt;(\n  List&lt;T&gt; result, [\n  Set&lt;String&gt;? seenKeys,\n]) =&gt;\n    (k, v) {\n      // if (kDebugMode) print(\'listAccumulator :: $k :: $v\');\n      if (v is T) {\n        result.add(v);\n      } else if (result is List&lt;Map&lt;String, dynamic&gt;&gt;) {\n        result.cast&lt;Map&lt;String, dynamic&gt;&gt;().add({\'value\': v});\n      }\n\n      if (v is Map&lt;String, dynamic&gt;) seenKeys?.addAll(v.keys);\n    };</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">listAccumulator&lt;<wbr><span class="type-parameter">T</span>&gt; function</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>\n        <li><a href="../unself_unpack/Export">Export</a></li>\n        <li><a href="../unself_unpack/Import">Import</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/Normalize">Normalize</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookSchema">facebookSchema</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#functions">Functions</a></li>\n        <li><a href="../unself_unpack/flatten">flatten</a></li>\n        <li><a href="../unself_unpack/includeAccumulator">includeAccumulator</a></li>\n        <li><a href="../unself_unpack/listAccumulator">listAccumulator</a></li>\n        <li><a href="../unself_unpack/mapAccumulator">mapAccumulator</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#enums">Enums</a></li>\n        <li><a href="../unself_unpack/Position">Position</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#typedefs">Typedefs</a></li>\n        <li><a href="../unself_unpack/Accumulator">Accumulator</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"listAccumulator<T> function",sidebar_label:"listAccumulator",hide_title:!0},i=void 0,u={unversionedId:"api/unself_unpack/listAccumulator",id:"api/unself_unpack/listAccumulator",title:"listAccumulator<T> function",description:"",source:"@site/developer/api/unself_unpack/listAccumulator.mdx",sourceDirName:"api/unself_unpack",slug:"/api/unself_unpack/listAccumulator",permalink:"/developer/api/unself_unpack/listAccumulator",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/listAccumulator.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"listAccumulator<T> function",sidebar_label:"listAccumulator",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"includeAccumulator",permalink:"/developer/api/unself_unpack/includeAccumulator"},next:{title:"mapAccumulator",permalink:"/developer/api/unself_unpack/mapAccumulator"}},p={},o=[],f={toc:o};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);