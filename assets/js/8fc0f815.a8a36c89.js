"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99129],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=l.createContext({}),o=function(e){var a=l.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=o(e.components);return l.createElement(d.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(t),p=n,b=u["".concat(d,".").concat(p)]||u[p]||f[p]||i;return t?l.createElement(b,r(r({ref:a},c),{},{components:t})):l.createElement(b,r({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var o=2;o<i;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12345:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var l=t(87462),n=t(67294),i=t(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">unique</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n          <a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>\n          <span class="name ">unique</span>\n          <div class="features"><span class="feature">late</span><span class="feature">final</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nlate final GeneratedColumn&lt;bool&gt; unique =\n    GeneratedColumn&lt;bool&gt;(\'unique\', aliasedName, false,\n        type: DriftSqlType.bool,\n        requiredDuringInsert: true,\n        defaultConstraints: GeneratedColumn.constraintsDependsOnDialect({\n          SqlDialect.sqlite: \'CHECK ("unique" IN (0, 1))\',\n          SqlDialect.mysql: \'\',\n          SqlDialect.postgres: \'\',\n        }));</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/$FieldTable">$FieldTable</a></li>\n  <li class="self-crumb">unique property</li>\n</ol>\n\n\n    <h5>$FieldTable class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$FieldTable.constructor">$FieldTable</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/$FieldTable#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/$FieldTable/$columns">$columns</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$primaryKey">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/attachedDatabase">attachedDatabase</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/created">created</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/name">name</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/type">type</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/unique">unique</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/updated">updated</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/validateIntegrity">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/$FieldTable#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#static-properties">Static properties</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$convertertype">$convertertype</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"unique property",sidebar_label:"unique",hide_title:!0},d=void 0,o={unversionedId:"api/unself_local_database/$FieldTable/unique",id:"api/unself_local_database/$FieldTable/unique",title:"unique property",description:"",source:"@site/developer/api/unself_local_database/$FieldTable/unique.mdx",sourceDirName:"api/unself_local_database/$FieldTable",slug:"/api/unself_local_database/$FieldTable/unique",permalink:"/developer/api/unself_local_database/$FieldTable/unique",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/$FieldTable/unique.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"unique property",sidebar_label:"unique",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/developer/api/unself_local_database/$FieldTable/type"},next:{title:"updated",permalink:"/developer/api/unself_local_database/$FieldTable/updated"}},c={},u=[],f={toc:u};function p(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);