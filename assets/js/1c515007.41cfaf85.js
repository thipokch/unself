"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[81770],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>f});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(f,r(r({ref:a},c),{},{components:n})):t.createElement(f,r({ref:a},c))}));function f(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25051:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=n(87462),l=n(67294),o=n(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toColumns</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Converts this object into a map of column names to expressions to insert\nor update.</p>\n<p>Note that the keys in the map are the raw column names, they\'re not\nescaped.</p>\n<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a>es to control whether null\nfields should be set to a null constant in sql or absent from the map.\nOther implementations ignore that <code>nullToAbsent</code>, it mainly exists for\nlegacy reasons.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nMap&lt;String, Expression&gt; toColumns(bool nullToAbsent) {\n  final map = &lt;String, Expression&gt;{};\n  if (id.present) {\n    map[\'id\'] = Variable&lt;String&gt;(id.value);\n  }\n  if (created.present) {\n    map[\'created\'] = Variable&lt;DateTime&gt;(created.value);\n  }\n  if (updated.present) {\n    map[\'updated\'] = Variable&lt;DateTime&gt;(updated.value);\n  }\n  if (type.present) {\n    final converter = $FieldTable.$convertertype;\n    map[\'type\'] = Variable&lt;String&gt;(converter.toSql(type.value));\n  }\n  if (name.present) {\n    map[\'name\'] = Variable&lt;String&gt;(name.value);\n  }\n  if (system.present) {\n    map[\'system\'] = Variable&lt;bool&gt;(system.value);\n  }\n  if (required.present) {\n    map[\'required\'] = Variable&lt;bool&gt;(required.value);\n  }\n  if (unique.present) {\n    map[\'unique\'] = Variable&lt;bool&gt;(unique.value);\n  }\n  if (collectionId.present) {\n    map[\'collection_id\'] = Variable&lt;String&gt;(collectionId.value);\n  }\n  if (extra.present) {\n    map[\'extra\'] = Variable&lt;String&gt;(extra.value);\n  }\n  return map;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n  <li class="self-crumb">toColumns method</li>\n</ol>\n\n\n    <h5>FieldCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldCompanion/toColumns",id:"api/unself_local_database/FieldCompanion/toColumns",title:"toColumns method",description:"",source:"@site/developer/api/unself_local_database/FieldCompanion/toColumns.mdx",sourceDirName:"api/unself_local_database/FieldCompanion",slug:"/api/unself_local_database/FieldCompanion/toColumns",permalink:"/developer/api/unself_local_database/FieldCompanion/toColumns",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldCompanion/toColumns.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"system",permalink:"/developer/api/unself_local_database/FieldCompanion/system"},next:{title:"toString",permalink:"/developer/api/unself_local_database/FieldCompanion/toString"}},c={},p=[],u={toc:p};function m(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);