"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91185],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),d=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return l.createElement(s.Provider,{value:a},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(t),p=n,h=f["".concat(s,".").concat(p)]||f[p]||u[p]||i;return t?l.createElement(h,r(r({ref:a},c),{},{components:t})):l.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[f]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12721:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>f});var l=t(87462),n=t(67294),i=t(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">name</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n          <a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>\n          <span class="name ">name</span>\n          <div class="features"><span class="feature">late</span><span class="feature">final</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nlate final GeneratedColumn&lt;String&gt; name = GeneratedColumn&lt;String&gt;(\n    \'name\', aliasedName, false,\n    type: DriftSqlType.string, requiredDuringInsert: true);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n  <li class="self-crumb">name property</li>\n</ol>\n\n\n    <h5>$CollectionTable class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/$CollectionTable#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/$CollectionTable.constructor">$CollectionTable</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/$CollectionTable#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/$CollectionTable/$columns">$columns</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/$primaryKey">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/attachedDatabase">attachedDatabase</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/created">created</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/createRule">createRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/name">name</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/type">type</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/updated">updated</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/viewRule">viewRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/$CollectionTable#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/validateIntegrity">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/$CollectionTable#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_local_database/$CollectionTable#static-properties">Static properties</a></li>\n          <li><a href="../../unself_local_database/$CollectionTable/$convertertype">$convertertype</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"name property",sidebar_label:"name",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/$CollectionTable/name",id:"api/unself_local_database/$CollectionTable/name",title:"name property",description:"",source:"@site/developer/api/unself_local_database/$CollectionTable/name.mdx",sourceDirName:"api/unself_local_database/$CollectionTable",slug:"/api/unself_local_database/$CollectionTable/name",permalink:"/developer/api/unself_local_database/$CollectionTable/name",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/$CollectionTable/name.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"name property",sidebar_label:"name",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/developer/api/unself_local_database/$CollectionTable/map"},next:{title:"options",permalink:"/developer/api/unself_local_database/$CollectionTable/options"}},c={},f=[],u={toc:f};function p(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);