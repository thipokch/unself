"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[62298],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),o=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(d.Provider,{value:a},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=o(t),p=i,h=f["".concat(d,".").concat(p)]||f[p]||u[p]||l;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[f]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},19739:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var n=t(87462),i=t(67294),l=t(3905);function r(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">validateIntegrity</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/VerificationContext-class.html">VerificationContext</a></span>\n<span class="name ">validateIntegrity</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="validateIntegrity-param-instance"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_local_database/FieldData">FieldData</a></span>&gt;</span></span> <span class="parameter-name">instance</span>, </span></li>\n<li><span class="parameter" id="validateIntegrity-param-isInserting">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isInserting</span> = <span class="default-value">false</span>}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Validates that the given entity can be inserted into this table, meaning\nthat it respects all constraints (nullability, text length, etc.).</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nVerificationContext validateIntegrity(Insertable&lt;FieldData&gt; instance,\n    {bool isInserting = false}) {\n  final context = VerificationContext();\n  final data = instance.toColumns(true);\n  if (data.containsKey(\'id\')) {\n    context.handle(_idMeta, id.isAcceptableOrUnknown(data[\'id\']!, _idMeta));\n  } else if (isInserting) {\n    context.missing(_idMeta);\n  }\n  if (data.containsKey(\'name\')) {\n    context.handle(\n        _nameMeta, name.isAcceptableOrUnknown(data[\'name\']!, _nameMeta));\n  } else if (isInserting) {\n    context.missing(_nameMeta);\n  }\n  context.handle(_typeMeta, const VerificationResult.success());\n  if (data.containsKey(\'system\')) {\n    context.handle(_systemMeta,\n        system.isAcceptableOrUnknown(data[\'system\']!, _systemMeta));\n  } else if (isInserting) {\n    context.missing(_systemMeta);\n  }\n  if (data.containsKey(\'required\')) {\n    context.handle(_requiredMeta,\n        required.isAcceptableOrUnknown(data[\'required\']!, _requiredMeta));\n  } else if (isInserting) {\n    context.missing(_requiredMeta);\n  }\n  if (data.containsKey(\'unique\')) {\n    context.handle(_uniqueMeta,\n        unique.isAcceptableOrUnknown(data[\'unique\']!, _uniqueMeta));\n  } else if (isInserting) {\n    context.missing(_uniqueMeta);\n  }\n  if (data.containsKey(\'options\')) {\n    context.handle(_optionsMeta,\n        options.isAcceptableOrUnknown(data[\'options\']!, _optionsMeta));\n  }\n  if (data.containsKey(\'collection_id\')) {\n    context.handle(\n        _collectionIdMeta,\n        collectionId.isAcceptableOrUnknown(\n            data[\'collection_id\']!, _collectionIdMeta));\n  } else if (isInserting) {\n    context.missing(_collectionIdMeta);\n  }\n  return context;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/$FieldTable">$FieldTable</a></li>\n  <li class="self-crumb">validateIntegrity method</li>\n</ol>\n\n\n    <h5>$FieldTable class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$FieldTable.constructor">$FieldTable</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/$FieldTable#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/$FieldTable/$columns">$columns</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$primaryKey">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/attachedDatabase">attachedDatabase</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/name">name</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/options">options</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/type">type</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/unique">unique</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/validateIntegrity">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/$FieldTable#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#static-properties">Static properties</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$convertertype">$convertertype</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"validateIntegrity method",sidebar_label:"validateIntegrity",hide_title:!0},d=void 0,o={unversionedId:"api/unself_local_database/$FieldTable/validateIntegrity",id:"api/unself_local_database/$FieldTable/validateIntegrity",title:"validateIntegrity method",description:"",source:"@site/developer/api/unself_local_database/$FieldTable/validateIntegrity.mdx",sourceDirName:"api/unself_local_database/$FieldTable",slug:"/api/unself_local_database/$FieldTable/validateIntegrity",permalink:"/developer/api/unself_local_database/$FieldTable/validateIntegrity",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/$FieldTable/validateIntegrity.mdx",tags:[],version:"current",lastUpdatedAt:1675431091,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"validateIntegrity method",sidebar_label:"validateIntegrity",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"unique",permalink:"/developer/api/unself_local_database/$FieldTable/unique"},next:{title:"Collection",permalink:"/developer/api/unself_local_database/Collection/"}},c={},f=[],u={toc:f};function p(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);