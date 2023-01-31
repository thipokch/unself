"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60750],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),c=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return l.createElement(i.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},f=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?l.createElement(m,s(s({ref:a},u),{},{components:t})):l.createElement(m,s({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11553:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=t(87462),n=t(67294),o=t(3905);function s(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toColumns</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Converts this object into a map of column names to expressions to insert\nor update.</p>\n<p>Note that the keys in the map are the raw column names, they\'re not\nescaped.</p>\n<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a>es to control whether null\nfields should be set to a null constant in sql or absent from the map.\nOther implementations ignore that <code>nullToAbsent</code>, it mainly exists for\nlegacy reasons.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nMap&lt;String, Expression&gt; toColumns(bool nullToAbsent) {\n  final map = &lt;String, Expression&gt;{};\n  map[\'id\'] = Variable&lt;String&gt;(id);\n  map[\'type\'] = Variable&lt;String&gt;(type);\n  map[\'name\'] = Variable&lt;String&gt;(name);\n  map[\'system\'] = Variable&lt;bool&gt;(system);\n  if (!nullToAbsent || listRule != null) {\n    map[\'list_rule\'] = Variable&lt;String&gt;(listRule);\n  }\n  if (!nullToAbsent || viewRule != null) {\n    map[\'view_rule\'] = Variable&lt;String&gt;(viewRule);\n  }\n  if (!nullToAbsent || createRule != null) {\n    map[\'create_rule\'] = Variable&lt;String&gt;(createRule);\n  }\n  if (!nullToAbsent || updateRule != null) {\n    map[\'update_rule\'] = Variable&lt;String&gt;(updateRule);\n  }\n  if (!nullToAbsent || deleteRule != null) {\n    map[\'delete_rule\'] = Variable&lt;String&gt;(deleteRule);\n  }\n  if (!nullToAbsent || options != null) {\n    map[\'options\'] = Variable&lt;String&gt;(options);\n  }\n  return map;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionData/CollectionData">CollectionData</a></li>\n  <li class="self-crumb">toColumns method</li>\n</ol>\n\n\n    <h5>CollectionData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionData/CollectionData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionData/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionData/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionData/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/name">name</a></li>\n          <li><a href="../../unself_local_database/CollectionData/options">options</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionData/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionData/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},i=void 0,c={unversionedId:"packages/unself_local_database/CollectionData/toColumns",id:"packages/unself_local_database/CollectionData/toColumns",title:"toColumns method",description:"",source:"@site/reference/packages/unself_local_database/CollectionData/toColumns.mdx",sourceDirName:"packages/unself_local_database/CollectionData",slug:"/packages/unself_local_database/CollectionData/toColumns",permalink:"/reference/packages/unself_local_database/CollectionData/toColumns",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_local_database/CollectionData/toColumns.mdx",tags:[],version:"current",frontMatter:{title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"system",permalink:"/reference/packages/unself_local_database/CollectionData/system"},next:{title:"toCompanion",permalink:"/reference/packages/unself_local_database/CollectionData/toCompanion"}},u={},d=[],p={toc:d};function f(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);