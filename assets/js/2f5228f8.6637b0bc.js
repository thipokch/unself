"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,h=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return a?l.createElement(h,r(r({ref:t},c),{},{components:a})):l.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},73333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var l=a(87462),n=a(67294),i=a(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">viewRule</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span>\n  <span class="name ">viewRule</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">TextColumn get viewRule =&gt; text().nullable()();</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/Collection">Collection</a></li>\n  <li class="self-crumb">viewRule property</li>\n</ol>\n\n\n    <h5>Collection class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/Collection#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/Collection/Collection.constructor">Collection</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/Collection#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/Collection/created">created</a></li>\n          <li><a href="../../unself_local_database/Collection/createRule">createRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li><a href="../../unself_local_database/Collection/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li><a href="../../unself_local_database/Collection/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/Collection/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/Collection/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/Collection/name">name</a></li>\n          <li><a href="../../unself_local_database/Collection/primaryKey">primaryKey</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/Collection/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/Collection/type">type</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../../unself_local_database/Collection/updated">updated</a></li>\n          <li><a href="../../unself_local_database/Collection/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/Collection/viewRule">viewRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/Collection#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/Collection#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"viewRule property",sidebar_label:"viewRule",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/Collection/viewRule",id:"api/unself_local_database/Collection/viewRule",title:"viewRule property",description:"",source:"@site/developer/api/unself_local_database/Collection/viewRule.mdx",sourceDirName:"api/unself_local_database/Collection",slug:"/api/unself_local_database/Collection/viewRule",permalink:"/developer/api/unself_local_database/Collection/viewRule",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/Collection/viewRule.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"viewRule property",sidebar_label:"viewRule",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updated",permalink:"/developer/api/unself_local_database/Collection/updated"},next:{title:"CollectionCompanion",permalink:"/developer/api/unself_local_database/CollectionCompanion/"}},c={},u=[],f={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);