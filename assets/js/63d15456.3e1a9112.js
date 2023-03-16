"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[37980],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=l,m=p["".concat(o,".").concat(f)]||p[f]||u[f]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=f;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[p]="string"==typeof e?e:l,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35295:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=t(87462),l=t(67294),r=t(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toColumns</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Converts this object into a map of column names to expressions to insert\nor update.</p>\n<p>Note that the keys in the map are the raw column names, they\'re not\nescaped.</p>\n<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a>es to control whether null\nfields should be set to a null constant in sql or absent from the map.\nOther implementations ignore that <code>nullToAbsent</code>, it mainly exists for\nlegacy reasons.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nMap&lt;String, Expression&gt; toColumns(bool nullToAbsent) {\n  final map = &lt;String, Expression&gt;{};\n  map[\'id\'] = Variable&lt;String&gt;(id);\n  map[\'created\'] = Variable&lt;DateTime&gt;(created);\n  map[\'updated\'] = Variable&lt;DateTime&gt;(updated);\n  {\n    final converter = $FieldTable.$convertertype;\n    map[\'type\'] = Variable&lt;String&gt;(converter.toSql(type));\n  }\n  map[\'name\'] = Variable&lt;String&gt;(name);\n  map[\'system\'] = Variable&lt;bool&gt;(system);\n  map[\'required\'] = Variable&lt;bool&gt;(required);\n  map[\'unique\'] = Variable&lt;bool&gt;(unique);\n  map[\'collection_id\'] = Variable&lt;String&gt;(collectionId);\n  map[\'extra\'] = Variable&lt;String&gt;(extra);\n  return map;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">toColumns method</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldData/extra">extra</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldData/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},o=void 0,d={unversionedId:"api/unself_local_database/FieldData/toColumns",id:"api/unself_local_database/FieldData/toColumns",title:"toColumns method",description:"",source:"@site/developer/api/unself_local_database/FieldData/toColumns.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/toColumns",permalink:"/developer/api/unself_local_database/FieldData/toColumns",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldData/toColumns.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"system",permalink:"/developer/api/unself_local_database/FieldData/system"},next:{title:"toCompanion",permalink:"/developer/api/unself_local_database/FieldData/toCompanion"}},c={},p=[],u={toc:p};function f(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);