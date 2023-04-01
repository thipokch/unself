"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51362],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(t),u=i,p=f["".concat(o,".").concat(u)]||f[u]||h[u]||l;return t?n.createElement(p,r(r({ref:a},d),{},{components:t})):n.createElement(p,r({ref:a},d))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[f]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74206:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var n=t(87462),i=t(67294),l=t(3905);function r(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">documentDao</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="../../unself_local_database/DocumentDao">DocumentDao</a>\n          <span class="name ">documentDao</span>\n          <div class="features"><span class="feature">late</span><span class="feature">final</span><span class="feature">inherited</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">late final DocumentDao documentDao = DocumentDao(this as LocalDatabase);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/LocalDatabase">LocalDatabase</a></li>\n  <li class="self-crumb">documentDao property</li>\n</ol>\n\n\n    <h5>LocalDatabase class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/LocalDatabase#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/LocalDatabase/LocalDatabase.constructor">LocalDatabase</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/LocalDatabase#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/allSchemaEntities">allSchemaEntities</a></li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/allTables">allTables</a></li>\n          <li><a href="../../unself_local_database/LocalDatabase/allTablesCollections">allTablesCollections</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/attachedDatabase.html">attachedDatabase</a></li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/collection">collection</a></li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/collectionDao">collectionDao</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/documentDao">documentDao</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>\n          <li class="inherited"><a href="../../unself_local_database/LocalDatabase/field">field</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/LocalDatabase/migration">migration</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/options.html">options</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/LocalDatabase/schemaVersion">schemaVersion</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/streamUpdateRules.html">streamUpdateRules</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/LocalDatabase#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$expandVar.html">$expandVar</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$write.html">$write</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$writeInsertable.html">$writeInsertable</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/beforeOpen.html">beforeOpen</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/close.html">close</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedDatabase/createMigrator.html">createMigrator</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>\n          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/LocalDatabase#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"documentDao property",sidebar_label:"documentDao",hide_title:!0},o=void 0,c={unversionedId:"api/unself_local_database/LocalDatabase/documentDao",id:"api/unself_local_database/LocalDatabase/documentDao",title:"documentDao property",description:"",source:"@site/developer/api/unself_local_database/LocalDatabase/documentDao.mdx",sourceDirName:"api/unself_local_database/LocalDatabase",slug:"/api/unself_local_database/LocalDatabase/documentDao",permalink:"/developer/api/unself_local_database/LocalDatabase/documentDao",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/LocalDatabase/documentDao.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"documentDao property",sidebar_label:"documentDao",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"collectionDao",permalink:"/developer/api/unself_local_database/LocalDatabase/collectionDao"},next:{title:"field",permalink:"/developer/api/unself_local_database/LocalDatabase/field"}},d={},f=[],h={toc:f};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);