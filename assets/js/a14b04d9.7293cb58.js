"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[72910],{3905:(a,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),c=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},d=function(a){var e=c(a.components);return n.createElement(o.Provider,{value:e},a.children)},f="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,r=a.originalType,o=a.parentName,d=s(a,["components","mdxType","originalType","parentName"]),f=c(t),p=l,m=f["".concat(o,".").concat(p)]||f[p]||u[p]||r;return t?n.createElement(m,i(i({ref:e},d),{},{components:t})):n.createElement(m,i({ref:e},d))}));function m(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s[f]="string"==typeof a?a:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8852:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var n=t(87462),l=t(67294),r=t(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">FieldData.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">FieldData.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span></li>\n<li><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory FieldData.fromJson(Map&lt;String, dynamic&gt; json,\n    {ValueSerializer? serializer}) {\n  serializer ??= driftRuntimeOptions.defaultSerializer;\n  return FieldData(\n    id: serializer.fromJson&lt;String&gt;(json[\'id\']),\n    created: serializer.fromJson&lt;DateTime&gt;(json[\'created\']),\n    updated: serializer.fromJson&lt;DateTime&gt;(json[\'updated\']),\n    type: $FieldTable.$convertertype\n        .fromJson(serializer.fromJson&lt;String&gt;(json[\'type\'])),\n    name: serializer.fromJson&lt;String&gt;(json[\'name\']),\n    system: serializer.fromJson&lt;bool&gt;(json[\'system\']),\n    required: serializer.fromJson&lt;bool&gt;(json[\'required\']),\n    unique: serializer.fromJson&lt;bool&gt;(json[\'unique\']),\n    collectionId: serializer.fromJson&lt;String&gt;(json[\'collectionId\']),\n    extra: serializer.fromJson&lt;String&gt;(json[\'extra\']),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">FieldData.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldData/extra">extra</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldData/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"FieldData.fromJson factory constructor",sidebar_label:"FieldData.fromJson factory constructor",hide_title:!0},o=void 0,c={unversionedId:"api/unself_local_database/FieldData/FieldData.constructor",id:"api/unself_local_database/FieldData/FieldData.constructor",title:"FieldData.fromJson factory constructor",description:"",source:"@site/developer/api/unself_local_database/FieldData/FieldData.constructor.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/FieldData.constructor",permalink:"/developer/api/unself_local_database/FieldData/FieldData.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldData/FieldData.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678784170,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"FieldData.fromJson factory constructor",sidebar_label:"FieldData.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"FieldData",permalink:"/developer/api/unself_local_database/FieldData/"},next:{title:"collectionId",permalink:"/developer/api/unself_local_database/FieldData/collectionId"}},d={},f=[],u={toc:f};function p(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);