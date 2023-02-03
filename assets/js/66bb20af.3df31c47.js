"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=l,h=u["".concat(o,".").concat(p)]||u[p]||f[p]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(87462),l=a(67294),i=a(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">validateIntegrity</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/VerificationContext-class.html">VerificationContext</a></span>\n<span class="name ">validateIntegrity</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="validateIntegrity-param-instance"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_local_database/CollectionData">CollectionData</a></span>&gt;</span></span> <span class="parameter-name">instance</span>, </span></li>\n<li><span class="parameter" id="validateIntegrity-param-isInserting">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isInserting</span> = <span class="default-value">false</span>}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Validates that the given entity can be inserted into this table, meaning\nthat it respects all constraints (nullability, text length, etc.).</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nVerificationContext validateIntegrity(Insertable&lt;CollectionData&gt; instance,\n    {bool isInserting = false}) {\n  final context = VerificationContext();\n  final data = instance.toColumns(true);\n  if (data.containsKey(\'id\')) {\n    context.handle(_idMeta, id.isAcceptableOrUnknown(data[\'id\']!, _idMeta));\n  } else if (isInserting) {\n    context.missing(_idMeta);\n  }\n  if (data.containsKey(\'type\')) {\n    context.handle(\n        _typeMeta, type.isAcceptableOrUnknown(data[\'type\']!, _typeMeta));\n  } else if (isInserting) {\n    context.missing(_typeMeta);\n  }\n  if (data.containsKey(\'name\')) {\n    context.handle(\n        _nameMeta, name.isAcceptableOrUnknown(data[\'name\']!, _nameMeta));\n  } else if (isInserting) {\n    context.missing(_nameMeta);\n  }\n  if (data.containsKey(\'system\')) {\n    context.handle(_systemMeta,\n        system.isAcceptableOrUnknown(data[\'system\']!, _systemMeta));\n  } else if (isInserting) {\n    context.missing(_systemMeta);\n  }\n  if (data.containsKey(\'list_rule\')) {\n    context.handle(_listRuleMeta,\n        listRule.isAcceptableOrUnknown(data[\'list_rule\']!, _listRuleMeta));\n  }\n  if (data.containsKey(\'view_rule\')) {\n    context.handle(_viewRuleMeta,\n        viewRule.isAcceptableOrUnknown(data[\'view_rule\']!, _viewRuleMeta));\n  }\n  if (data.containsKey(\'create_rule\')) {\n    context.handle(\n        _createRuleMeta,\n        createRule.isAcceptableOrUnknown(\n            data[\'create_rule\']!, _createRuleMeta));\n  }\n  if (data.containsKey(\'update_rule\')) {\n    context.handle(\n        _updateRuleMeta,\n        updateRule.isAcceptableOrUnknown(\n            data[\'update_rule\']!, _updateRuleMeta));\n  }\n  if (data.containsKey(\'delete_rule\')) {\n    context.handle(\n        _deleteRuleMeta,\n        deleteRule.isAcceptableOrUnknown(\n            data[\'delete_rule\']!, _deleteRuleMeta));\n  }\n  if (data.containsKey(\'options\')) {\n    context.handle(_optionsMeta,\n        options.isAcceptableOrUnknown(data[\'options\']!, _optionsMeta));\n  }\n  return context;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n  <li class="self-crumb">validateIntegrity method</li>\n</ol>\n\n\n    <h5>$CollectionTable class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/$CollectionTable#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/$CollectionTable.constructor">$CollectionTable</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/$CollectionTable#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/$CollectionTable/$columns">$columns</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/$primaryKey">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/attachedDatabase">attachedDatabase</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/createRule">createRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/name">name</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/options">options</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/type">type</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/viewRule">viewRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/$CollectionTable#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/validateIntegrity">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/$CollectionTable#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"validateIntegrity method",sidebar_label:"validateIntegrity",hide_title:!0},o=void 0,d={unversionedId:"api/unself_local_database/$CollectionTable/validateIntegrity",id:"api/unself_local_database/$CollectionTable/validateIntegrity",title:"validateIntegrity method",description:"",source:"@site/developer/api/unself_local_database/$CollectionTable/validateIntegrity.mdx",sourceDirName:"api/unself_local_database/$CollectionTable",slug:"/api/unself_local_database/$CollectionTable/validateIntegrity",permalink:"/developer/api/unself_local_database/$CollectionTable/validateIntegrity",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/$CollectionTable/validateIntegrity.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"validateIntegrity method",sidebar_label:"validateIntegrity",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updateRule",permalink:"/developer/api/unself_local_database/$CollectionTable/updateRule"},next:{title:"viewRule",permalink:"/developer/api/unself_local_database/$CollectionTable/viewRule"}},c={},u=[],f={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);