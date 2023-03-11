"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36774],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var l=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,i=function(e,a){if(null==e)return{};var t,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=l.createContext({}),o=function(e){var a=l.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=o(e.components);return l.createElement(d.Provider,{value:a},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=o(t),p=i,h=f["".concat(d,".").concat(p)]||f[p]||u[p]||n;return t?l.createElement(h,r(r({ref:a},c),{},{components:t})):l.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,r=new Array(n);r[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[f]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<n;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5539:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var l=t(87462),i=t(67294),n=t(3905);function r(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">aliasedName</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  <span class="name ">aliasedName</span>\n  <div class="features"><span class="feature">override</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p>The (potentially aliased) name of this table or view.</p>\n<p>If no alias is active, this is the same as <a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a>.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString get aliasedName =&gt; _alias ?? \'field\';</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/$FieldTable">$FieldTable</a></li>\n  <li class="self-crumb">aliasedName property</li>\n</ol>\n\n\n    <h5>$FieldTable class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$FieldTable.constructor">$FieldTable</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/$FieldTable#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/$FieldTable/$columns">$columns</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$primaryKey">$primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/actualTableName">actualTableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/aliasedName">aliasedName</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/asDslTable.html">asDslTable</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/attachedDatabase">attachedDatabase</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/columnsByName.html">columnsByName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/created">created</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/entityName.html">entityName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/name">name</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/primaryKey.html">primaryKey</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/type">type</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/unique">unique</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/updated">updated</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/createAlias">createAlias</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/map">map</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/mapFromCompanion.html">mapFromCompanion</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/validateIntegrity">validateIntegrity</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/$FieldTable#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/TableInfo/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_local_database/$FieldTable#static-properties">Static properties</a></li>\n          <li><a href="../../unself_local_database/$FieldTable/$convertertype">$convertertype</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"aliasedName property",sidebar_label:"aliasedName",hide_title:!0},d=void 0,o={unversionedId:"api/unself_local_database/$FieldTable/aliasedName",id:"api/unself_local_database/$FieldTable/aliasedName",title:"aliasedName property",description:"",source:"@site/developer/api/unself_local_database/$FieldTable/aliasedName.mdx",sourceDirName:"api/unself_local_database/$FieldTable",slug:"/api/unself_local_database/$FieldTable/aliasedName",permalink:"/developer/api/unself_local_database/$FieldTable/aliasedName",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/$FieldTable/aliasedName.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"aliasedName property",sidebar_label:"aliasedName",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"actualTableName",permalink:"/developer/api/unself_local_database/$FieldTable/actualTableName"},next:{title:"attachedDatabase",permalink:"/developer/api/unself_local_database/$FieldTable/attachedDatabase"}},c={},f=[],u={toc:f};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);