"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var a=n(87462),r=n(67294),i=n(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">unpack</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span>\n<span class="name ">unpack</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="unpack-param-options"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span>?</span> <span class="parameter-name">options</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/ZipImport/unpack">unpack</a> unpacks the opened <a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a> object the given <code>mappings</code> and\nreturns a <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a> of <code>Map&lt;String, Object?&gt;</code>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nFutureOr&lt;Map&lt;String, Object?&gt;&gt; unpack(List&lt;Mapping&gt;? options) {\n  assert(options != null);\n  // 1. Group mappings by file to read from.\n  final fromGroup = options!.groupListsBy((_) =&gt; _.from.split(\'/\').first);\n\n  // 2. Read file and decode JSON into group key.\n  final jsonFiles = &lt;String, Map&lt;String, dynamic&gt;&gt;{\n    for (final key in fromGroup.keys)\n      key: jsonDecode(String.fromCharCodes(_dotDirectory![key]!.content))\n  };\n\n  // 3. Group mappings by key to write to.\n  final toGroup = options.groupListsBy((_) =&gt; _.to.split(\'/\').first);\n\n  // 4. Create result map with keys from toGroup to write to.\n  final instant = clock.now();\n  final archiveId = Slugid.nice().toString();\n  final result = {\n    \'id\': Slugid.nice().toString(),\n    \'created\': instant,\n    \'updated\': instant,\n    \'archiveId\': archiveId,\n    for (final String key in toGroup.keys) key: &lt;Map&lt;String, Object?&gt;&gt;[]\n  };\n\n  for (final mapping in options) {\n    // Assert that mapping can only be a single level deep.\n    assert(mapping.fields.every((e) =&gt; e.fields.isEmpty &amp;&amp; e.extra.isEmpty));\n\n    if (mapping.to.startsWith("\\$") || mapping.from.startsWith("\\$")) {\n      throw ArgumentError(\'Mapping cannot be a JSON Pointer\');\n    }\n\n    final fromKey = mapping.from.split(\'/\').first;\n    final toKey = mapping.to.split(\'/\').first;\n    final entryPath = mapping.from.split(\'/\').sublist(1).join(\'/\');\n\n    final norm = normalize(\n      jsonFiles[fromKey],\n      entryPath: entryPath,\n      includePath: mapping.options[\'includePath\'] ?? const [],\n    ) as List&lt;Map&lt;String, Object?&gt;&gt;;\n\n    final mapped = norm\n        .map((e) =&gt; {\n              \'created\': instant,\n              \'updated\': instant,\n              \'archiveId\': archiveId,\n              for (final entry in mapping.fields) entry.to: e[entry.from],\n              ...mapping.extra,\n            })\n        .toList();\n\n    if (mapping.options.containsKey(\'idFrom\')) {\n      for (var element in mapped) {\n        element.putIfAbsent(\n            \'id\', () =&gt; slugify(element[mapping.options[\'idFrom\']!]));\n      }\n    }\n\n    result[toKey] = mapped;\n  }\n  return result;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/ZipImport">ZipImport</a></li>\n  <li class="self-crumb">unpack method</li>\n</ol>\n\n\n    <h5>ZipImport class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/ZipImport#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/ZipImport/ZipImport.constructor">ZipImport</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/ZipImport#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/ZipImport#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/ZipImport/open">open</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_unpack/ZipImport/unpack">unpack</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/ZipImport#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const p={title:"unpack method",sidebar_label:"unpack",hide_title:!0},l=void 0,o={unversionedId:"api/unself_unpack/ZipImport/unpack",id:"api/unself_unpack/ZipImport/unpack",title:"unpack method",description:"",source:"@site/developer/api/unself_unpack/ZipImport/unpack.mdx",sourceDirName:"api/unself_unpack/ZipImport",slug:"/api/unself_unpack/ZipImport/unpack",permalink:"/developer/api/unself_unpack/ZipImport/unpack",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/ZipImport/unpack.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"unpack method",sidebar_label:"unpack",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"open",permalink:"/developer/api/unself_unpack/ZipImport/open"},next:{title:"facebookKeys",permalink:"/developer/api/unself_unpack/facebookKeys"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);