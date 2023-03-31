"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43820],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var t=a(67294);function s(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){s(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,s=function(n,e){if(null==n)return{};var a,t,s={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(s[a]=n[a]);return s}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}var o=t.createContext({}),c=function(n){var e=t.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},p=function(n){var e=c(n.components);return t.createElement(o.Provider,{value:e},n.children)},u="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,s=n.mdxType,l=n.originalType,o=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),u=c(a),d=s,m=u["".concat(o,".").concat(d)]||u[d]||f[d]||l;return a?t.createElement(m,r(r({ref:e},p),{},{components:a})):t.createElement(m,r({ref:e},p))}));function m(n,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=n,i[u]="string"==typeof n?n:s,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92225:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=a(87462),s=a(67294),l=a(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">flatten</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span>\n<span class="name ">flatten</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="flatten-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span></li>\n<li><span class="parameter" id="flatten-param-separator">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">separator</span> = <span class="default-value">\'.\'</span>, </span></li>\n<li><span class="parameter" id="flatten-param-recordPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">recordPath</span> = <span class="default-value">const []</span>, </span></li>\n<li><span class="parameter" id="flatten-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span> = <span class="default-value">const []</span>, </span></li>\n<li><span class="parameter" id="flatten-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="flatten-param-maxLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">maxLevel</span> = <span class="default-value">-1</span>}</span></li>\n</ol>)\n\n        \n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../unself_unpack/flatten">flatten</a> is similar to pandas\' json_normalize function, this function\nrecursively flattens the nested JSON objects into a flat tabular list.\nIt returns <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List&lt;Map&lt;String, dynamic&gt;&gt;</a> of the flattened records.</p>\n<p>Simple example:</p>\n<pre class="language-json"><code class="language-json">[\n  {"id": 1, "name": {"first": "Coleen", "last": "Volk"}},\n  {"name": {"given": "Mark", "family": "Regner"}},\n  {"id": 2, "name": "Faye Raker"},\n]\n</code></pre>\n<pre class="language-dart"><code class="language-dart">flatten(input);\n</code></pre>\n<p>Results in:</p>\n<pre class="language-json"><code class="language-json">[\n  {"id": 1, "name.first": "Coleen", "name.last": "Volk", "name.given": null, "name.family": null},\n  {"id": null, "name.first": null, "name.last": null, "name.given": "Mark", "name.family": "Regner"},\n  {"id": 2, "name": "Faye Raker", "name.first": null, "name.last": null, "name.given": null, "name.family": null},\n]\n</code></pre>\n<p>Advanced example:</p>\n<pre class="language-json"><code class="language-json">[\n   {\n       "state": "Florida",\n       "shortname": "FL",\n       "info": {"governor": "Rick Scott"},\n       "counties": [\n           {"name": "Dade", "population": 12345},\n           {"name": "Broward", "population": 40000},\n           {"name": "Palm Beach", "population": 60000},\n       ],\n   },\n   {\n       "state": "Ohio",\n       "shortname": "OH",\n       "info": {"governor": "John Kasich"},\n       "counties": [\n           {"name": "Summit", "population": 1234},\n           {"name": "Cuyahoga", "population": 1337},\n       ],\n   },\n]\n</code></pre>\n<pre class="language-dart"><code class="language-dart">flatten(input, recordPath: ["counties"], includePath: [["state"], ["shortname"], ["info", "governor"]]);\n</code></pre>\n<p>Results in:</p>\n<pre class="language-json"><code class="language-json">[\n  {\n    "state": "Florida",\n    "shortname": "FL",\n    "info.governor": "Rick Scott",\n    "name": "Dade",\n    "population": 12345\n  },\n  {\n    "state": "Florida",\n    "shortname": "FL",\n    "info.governor": "Rick Scott",\n    "name": "Broward",\n    "population": 40000\n  },\n  {\n    "state": "Florida",\n    "shortname": "FL",\n    "info.governor": "Rick Scott",\n    "name": "Palm Beach",\n    "population": 60000\n  },\n  {\n    "state": "Ohio",\n    "shortname": "OH",\n    "info.governor": "John Kasich",\n    "name": "Summit",\n    "population": 1234\n  },\n  {\n    "state": "Ohio",\n    "shortname": "OH",\n    "info.governor": "John Kasich",\n    "name": "Cuyahoga",\n    "population": 1337\n  },\n]\n</code></pre>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">List&lt;Map&lt;String, dynamic&gt;&gt; flatten(\n  /// Json to flatten\n  dynamic json, {\n  /// Separator used to join the path of the nested keys\n  String separator = \'.\',\n\n  /// Json path of records in the given json. This will be the entry point for the flattening.\n  List&lt;String&gt; recordPath = const [],\n\n  /// Json path from the root of data to extract from the nested records.\n  /// Each path will become a column in the resulting table.\n  List&lt;List&lt;String&gt;&gt; includePath = const [],\n\n  /// Add missing fields or column to the records.\n  bool addMissingKeys = true,\n\n  // TODO: Implement maxLevel\n  /// Level of nesting to flatten\n  int maxLevel = -1,\n}) {\n  final result = &lt;Map&lt;String, dynamic&gt;&gt;[];\n  final seenKeys = addMissingKeys ? &lt;String&gt;{} : null;\n\n  final includeResult = &lt;String, dynamic&gt;{};\n  final includeKeys = includePath.map((i) =&gt; i.join(separator)).toSet();\n\n  final commonPath = includePath.isNotEmpty\n      ? (includePath\n          .map((i) =&gt; i\n              .headIntersect(recordPath)\n              // .whereNot((e) =&gt; e == \'*\')\n              .join(separator))\n          .toSet())\n      : const &lt;String&gt;{};\n\n  // if (kDebugMode) print(includeKeys);\n  // if (kDebugMode) print(commonPath);\n\n  _flatten(\n    json,\n    separator,\n    const [],\n    recordPath,\n    includeKeys,\n    commonPath,\n    maxLevel,\n    listAccumulator(result, seenKeys),\n    includeAccumulator(includeResult, includeKeys),\n  );\n\n  // if (kDebugMode) print(includeResult);\n\n  if (seenKeys != null) {\n    for (final e in result) {\n      for (final k in seenKeys) {\n        e.putIfAbsent(k, () =&gt; null);\n      }\n    }\n  }\n\n  return result;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">flatten function</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>\n        <li><a href="../unself_unpack/Export">Export</a></li>\n        <li><a href="../unself_unpack/Import">Import</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/Normalize">Normalize</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookSchema">facebookSchema</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#functions">Functions</a></li>\n        <li><a href="../unself_unpack/flatten">flatten</a></li>\n        <li><a href="../unself_unpack/includeAccumulator">includeAccumulator</a></li>\n        <li><a href="../unself_unpack/listAccumulator">listAccumulator</a></li>\n        <li><a href="../unself_unpack/mapAccumulator">mapAccumulator</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#enums">Enums</a></li>\n        <li><a href="../unself_unpack/Position">Position</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#typedefs">Typedefs</a></li>\n        <li><a href="../unself_unpack/Accumulator">Accumulator</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"flatten function",sidebar_label:"flatten",hide_title:!0},o=void 0,c={unversionedId:"api/unself_unpack/flatten",id:"api/unself_unpack/flatten",title:"flatten function",description:"",source:"@site/developer/api/unself_unpack/flatten.mdx",sourceDirName:"api/unself_unpack",slug:"/api/unself_unpack/flatten",permalink:"/developer/api/unself_unpack/flatten",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/flatten.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"flatten function",sidebar_label:"flatten",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"facebookSchema",permalink:"/developer/api/unself_unpack/facebookSchema"},next:{title:"includeAccumulator",permalink:"/developer/api/unself_unpack/includeAccumulator"}},p={},u=[],f={toc:u};function d(n){let{components:e,...a}=n;return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);