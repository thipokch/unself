"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79693],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=l,f=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),l=a(67294),r=a(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">CollectionOrm&lt;<wbr><span class="type-parameter">D</span>&gt;</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">CollectionOrm&lt;<wbr><span class="type-parameter">D</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-attachedDatabase"><span class="type-annotation"><a href="../../unself_local_database/LocalDatabase">LocalDatabase</a></span> <span class="parameter-name">attachedDatabase</span>, </span></li>\n<li><span class="parameter" id="-param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="-param-actualTableName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">actualTableName</span>, </span></li>\n<li><span class="parameter" id="-param-$columns"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">$columns</span>, </span></li>\n<li><span class="parameter" id="-param-_alias">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">_alias</span>]</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CollectionOrm(\n  this.attachedDatabase,\n  this.id,\n  this.actualTableName,\n  this.$columns, [\n  this._alias,\n]);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionOrm">CollectionOrm<span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></a></li>\n  <li class="self-crumb">CollectionOrm constructor</li>\n</ol>\n\n\n    <h5>CollectionOrm class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionOrm#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/CollectionOrm.constructor">CollectionOrm</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionOrm#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionOrm/$columns">$columns</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/$primaryKey.html">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/attachedDatabase">attachedDatabase</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionOrm#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/CollectionOrm/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/validateIntegrity.html">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionOrm#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"CollectionOrm constructor",sidebar_label:"CollectionOrm constructor",hide_title:!0},o=void 0,c={unversionedId:"api/unself_local_database/CollectionOrm/CollectionOrm.constructor",id:"api/unself_local_database/CollectionOrm/CollectionOrm.constructor",title:"CollectionOrm constructor",description:"",source:"@site/developer/api/unself_local_database/CollectionOrm/CollectionOrm.constructor.mdx",sourceDirName:"api/unself_local_database/CollectionOrm",slug:"/api/unself_local_database/CollectionOrm/CollectionOrm.constructor",permalink:"/developer/api/unself_local_database/CollectionOrm/CollectionOrm.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionOrm/CollectionOrm.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"CollectionOrm constructor",sidebar_label:"CollectionOrm constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"$columns",permalink:"/developer/api/unself_local_database/CollectionOrm/$columns"},next:{title:"actualTableName",permalink:"/developer/api/unself_local_database/CollectionOrm/actualTableName"}},d={},p=[],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);