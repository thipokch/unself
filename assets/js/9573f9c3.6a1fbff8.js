"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53092],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,r(r({ref:a},p),{},{components:t})):n.createElement(f,r({ref:a},p))}));function f(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25547:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),l=t(67294),o=t(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toColumns</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Converts this object into a map of column names to expressions to insert\nor update.</p>\n<p>Note that the keys in the map are the raw column names, they\'re not\nescaped.</p>\n<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a>es to control whether null\nfields should be set to a null constant in sql or absent from the map.\nOther implementations ignore that <code>nullToAbsent</code>, it mainly exists for\nlegacy reasons.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nMap&lt;String, Expression&gt; toColumns(bool nullToAbsent) {\n  final map = &lt;String, Expression&gt;{};\n  if (id.present) {\n    map[\'id\'] = Variable&lt;String&gt;(id.value);\n  }\n  if (created.present) {\n    map[\'created\'] = Variable&lt;DateTime&gt;(created.value);\n  }\n  if (updated.present) {\n    map[\'updated\'] = Variable&lt;DateTime&gt;(updated.value);\n  }\n  if (type.present) {\n    final converter = $CollectionTable.$convertertype;\n    map[\'type\'] = Variable&lt;String&gt;(converter.toSql(type.value));\n  }\n  if (name.present) {\n    map[\'name\'] = Variable&lt;String&gt;(name.value);\n  }\n  if (system.present) {\n    map[\'system\'] = Variable&lt;bool&gt;(system.value);\n  }\n  if (listRule.present) {\n    map[\'list_rule\'] = Variable&lt;String&gt;(listRule.value);\n  }\n  if (viewRule.present) {\n    map[\'view_rule\'] = Variable&lt;String&gt;(viewRule.value);\n  }\n  if (createRule.present) {\n    map[\'create_rule\'] = Variable&lt;String&gt;(createRule.value);\n  }\n  if (updateRule.present) {\n    map[\'update_rule\'] = Variable&lt;String&gt;(updateRule.value);\n  }\n  if (deleteRule.present) {\n    map[\'delete_rule\'] = Variable&lt;String&gt;(deleteRule.value);\n  }\n  if (extra.present) {\n    map[\'extra\'] = Variable&lt;String&gt;(extra.value);\n  }\n  return map;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n  <li class="self-crumb">toColumns method</li>\n</ol>\n\n\n    <h5>CollectionCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updated">updated</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionCompanion/toColumns",id:"api/unself_local_database/CollectionCompanion/toColumns",title:"toColumns method",description:"",source:"@site/developer/api/unself_local_database/CollectionCompanion/toColumns.mdx",sourceDirName:"api/unself_local_database/CollectionCompanion",slug:"/api/unself_local_database/CollectionCompanion/toColumns",permalink:"/developer/api/unself_local_database/CollectionCompanion/toColumns",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionCompanion/toColumns.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"toColumns method",sidebar_label:"toColumns",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"system",permalink:"/developer/api/unself_local_database/CollectionCompanion/system"},next:{title:"toString",permalink:"/developer/api/unself_local_database/CollectionCompanion/toString"}},p={},d=[],u={toc:d};function m(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);