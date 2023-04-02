"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[86023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=c(a),p=l,u=f["".concat(s,".").concat(p)]||f[p]||h[p]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[f]="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var n=a(87462),l=a(67294),i=a(3905);function o(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">deleteCollection</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a></span>\n<span class="name ">deleteCollection</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="deleteCollection-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_local_database/CollectionDao/deleteCollection">deleteCollection</a> deletes the provided <a href="../../unself_local_database/Collection">Collection</a> model.\nThis method automatically deletes the related collection records table.</p>\n<p>The collection cannot be deleted, if:</p>\n<ul>\n<li>is system collection (aka. collection.System is true)</li>\n<li>is referenced as part of a relation field in another collection</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Future deleteCollection(String name) =&gt; transaction(() async {\n      // TODO: implement edge cases\n\n      // if (collection.system) {\n      //   throw Exception(\'Cannot delete system collection\');\n      // }\n\n      // final referenced = await (select(field)\n      //       ..where((_) =&gt; _.collectionId.equals(collection.id)))\n      //     .get();\n\n      // if (referenced.isNotEmpty) {\n      //   throw Exception(\n      //       \'Cannot delete collection, because it is referenced in other collections\');\n      // }\n\n      // await (delete(attachedDatabase.collection)\n      //       ..where((_) =&gt; _.id.equals(collection.id)))\n      //     .go();\n\n      // await (delete(attachedDatabase.field)\n      //       ..where((_) =&gt; _.collectionId.equals(collection.id)))\n      //     .go();\n\n      await _migrator.deleteTable(name);\n    });</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionDao">CollectionDao</a></li>\n  <li class="self-crumb">deleteCollection method</li>\n</ol>\n\n\n    <h5>CollectionDao class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionDao#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/CollectionDao.constructor">CollectionDao</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionDao#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseAccessor/attachedDatabase.html">attachedDatabase</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/collection">collection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/connection.html">connection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/executor.html">executor</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/field">field</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/options.html">options</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/resolvedEngine.html">resolvedEngine</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/streamQueries.html">streamQueries</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/typeMapping.html">typeMapping</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionDao#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$expandVar.html">$expandVar</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$write.html">$write</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/$writeInsertable.html">$writeInsertable</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/alias.html">alias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/batch.html">batch</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/createStream.html">createStream</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customInsert.html">customInsert</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelect.html">customSelect</a></li>\n          <li class="inherited"><a class="deprecated" href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customSelectQuery.html">customSelectQuery</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customStatement.html">customStatement</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customUpdate.html">customUpdate</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/customWriteReturning.html">customWriteReturning</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/delete.html">delete</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/deleteCollection">deleteCollection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/doWhenOpened.html">doWhenOpened</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/getCollectionById">getCollectionById</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/into.html">into</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/markTablesUpdated.html">markTablesUpdated</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/notifyUpdates.html">notifyUpdates</a></li>\n          <li><a href="../../unself_local_database/CollectionDao/saveCollection">saveCollection</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/select.html">select</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/selectOnly.html">selectOnly</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/tableUpdates.html">tableUpdates</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/transaction.html">transaction</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnectionUser/update.html">update</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionDao#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"deleteCollection method",sidebar_label:"deleteCollection",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionDao/deleteCollection",id:"api/unself_local_database/CollectionDao/deleteCollection",title:"deleteCollection method",description:"",source:"@site/developer/api/unself_local_database/CollectionDao/deleteCollection.mdx",sourceDirName:"api/unself_local_database/CollectionDao",slug:"/api/unself_local_database/CollectionDao/deleteCollection",permalink:"/developer/api/unself_local_database/CollectionDao/deleteCollection",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionDao/deleteCollection.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"deleteCollection method",sidebar_label:"deleteCollection",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"collection",permalink:"/developer/api/unself_local_database/CollectionDao/collection"},next:{title:"field",permalink:"/developer/api/unself_local_database/CollectionDao/field"}},d={},f=[],h={toc:f};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);