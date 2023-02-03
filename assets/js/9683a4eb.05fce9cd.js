"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64520],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),c=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},p=function(a){var e=c(a.components);return n.createElement(o.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,s=a.originalType,o=a.parentName,p=r(a,["components","mdxType","originalType","parentName"]),d=c(t),f=l,h=d["".concat(o,".").concat(f)]||d[f]||u[f]||s;return t?n.createElement(h,i(i({ref:e},p),{},{components:t})):n.createElement(h,i({ref:e},p))}));function h(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var s=t.length,i=new Array(s);i[0]=f;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=a,r[d]="string"==typeof a?a:l,i[1]=r;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83281:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(87462),l=t(67294),s=t(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">copyWith</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/FieldData">FieldData</a></span>\n<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-type"><span class="type-annotation">FieldType?</span> <span class="parameter-name">type</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">system</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-required"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">required</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-unique"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">unique</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">options</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-collectionId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">collectionId</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">FieldData copyWith(\n        {String? id,\n        String? name,\n        FieldType? type,\n        bool? system,\n        bool? required,\n        bool? unique,\n        Value&lt;String?&gt; options = const Value.absent(),\n        String? collectionId}) =&gt;\n    FieldData(\n      id: id ?? this.id,\n      name: name ?? this.name,\n      type: type ?? this.type,\n      system: system ?? this.system,\n      required: required ?? this.required,\n      unique: unique ?? this.unique,\n      options: options.present ? options.value : this.options,\n      collectionId: collectionId ?? this.collectionId,\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">copyWith method</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/options">options</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},o=void 0,c={unversionedId:"api/unself_local_database/FieldData/copyWith",id:"api/unself_local_database/FieldData/copyWith",title:"copyWith method",description:"",source:"@site/developer/api/unself_local_database/FieldData/copyWith.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/copyWith",permalink:"/developer/api/unself_local_database/FieldData/copyWith",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldData/copyWith.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"collectionId",permalink:"/developer/api/unself_local_database/FieldData/collectionId"},next:{title:"hashCode",permalink:"/developer/api/unself_local_database/FieldData/hashCode"}},p={},d=[],u={toc:d};function f(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);