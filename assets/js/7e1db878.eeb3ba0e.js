"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=c(a),h=i,u=f["".concat(s,".").concat(h)]||f[h]||p[h]||l;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[f]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var n=a(87462),i=a(67294),l=a(3905);function o(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">collection</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="../../unself_local_database/$CollectionTable">$CollectionTable</a></span>\n  <span class="name ">collection</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">$CollectionTable get collection =&gt; attachedDatabase.collection;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionDao">CollectionDao</a></li>\n  <li class="self-crumb">collection property</li>\n</ol>\n\n\n    <h5>CollectionDao class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionDao#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/CollectionDao.constructor">CollectionDao</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionDao#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/collection">collection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/field">field</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/options.html">options</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionDao#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$expandVar.html">$expandVar</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$write.html">$write</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$writeInsertable.html">$writeInsertable</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>\n          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/deleteCollection">deleteCollection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/getCollectionById">getCollectionById</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/saveCollection">saveCollection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionDao#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"collection property",sidebar_label:"collection",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionDao/collection",id:"api/unself_local_database/CollectionDao/collection",title:"collection property",description:"",source:"@site/developer/api/unself_local_database/CollectionDao/collection.mdx",sourceDirName:"api/unself_local_database/CollectionDao",slug:"/api/unself_local_database/CollectionDao/collection",permalink:"/developer/api/unself_local_database/CollectionDao/collection",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionDao/collection.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"collection property",sidebar_label:"collection",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CollectionDao constructor",permalink:"/developer/api/unself_local_database/CollectionDao/CollectionDao.constructor"},next:{title:"deleteCollection",permalink:"/developer/api/unself_local_database/CollectionDao/deleteCollection"}},d={},f=[],p={toc:f};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);