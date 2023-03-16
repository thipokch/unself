"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21279],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),p=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=p(a.components);return n.createElement(o.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,o=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),d=p(t),m=s,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(f,r(r({ref:e},c),{},{components:t})):n.createElement(f,r({ref:e},c))}));function f(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=a,i[d]="string"==typeof a?a:s,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48358:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">custom</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_local_database/FieldData">FieldData</a></span>&gt;</span></span>\n<span class="name ">custom</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="custom-param-created"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">created</span>, </span></li>\n<li><span class="parameter" id="custom-param-updated"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">updated</span>, </span></li>\n<li><span class="parameter" id="custom-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span></li>\n<li><span class="parameter" id="custom-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="custom-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span></li>\n<li><span class="parameter" id="custom-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">required</span>, </span></li>\n<li><span class="parameter" id="custom-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">unique</span>, </span></li>\n<li><span class="parameter" id="custom-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">collectionId</span>, </span></li>\n<li><span class="parameter" id="custom-param-extra"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static Insertable&lt;FieldData&gt; custom({\n  Expression&lt;String&gt;? id,\n  Expression&lt;DateTime&gt;? created,\n  Expression&lt;DateTime&gt;? updated,\n  Expression&lt;String&gt;? type,\n  Expression&lt;String&gt;? name,\n  Expression&lt;bool&gt;? system,\n  Expression&lt;bool&gt;? required,\n  Expression&lt;bool&gt;? unique,\n  Expression&lt;String&gt;? collectionId,\n  Expression&lt;String&gt;? extra,\n}) {\n  return RawValuesInsertable({\n    if (id != null) \'id\': id,\n    if (created != null) \'created\': created,\n    if (updated != null) \'updated\': updated,\n    if (type != null) \'type\': type,\n    if (name != null) \'name\': name,\n    if (system != null) \'system\': system,\n    if (required != null) \'required\': required,\n    if (unique != null) \'unique\': unique,\n    if (collectionId != null) \'collection_id\': collectionId,\n    if (extra != null) \'extra\': extra,\n  });\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n  <li class="self-crumb">custom static method</li>\n</ol>\n\n\n    <h5>FieldCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"custom static method",sidebar_label:"custom",hide_title:!0},o=void 0,p={unversionedId:"api/unself_local_database/FieldCompanion/custom",id:"api/unself_local_database/FieldCompanion/custom",title:"custom static method",description:"",source:"@site/developer/api/unself_local_database/FieldCompanion/custom.mdx",sourceDirName:"api/unself_local_database/FieldCompanion",slug:"/api/unself_local_database/FieldCompanion/custom",permalink:"/developer/api/unself_local_database/FieldCompanion/custom",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldCompanion/custom.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"custom static method",sidebar_label:"custom",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"created",permalink:"/developer/api/unself_local_database/FieldCompanion/created"},next:{title:"extra",permalink:"/developer/api/unself_local_database/FieldCompanion/extra"}},c={},d=[],u={toc:d};function m(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);