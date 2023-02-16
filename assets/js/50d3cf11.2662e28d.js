"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42552],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),f=r,m=c["".concat(o,".").concat(f)]||c[f]||u[f]||l;return t?n.createElement(m,s(s({ref:a},p),{},{components:t})):n.createElement(m,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=f;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24916:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(87462),r=t(67294),l=t(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Field</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">Field</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>\n<li><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>\n<li><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation"><a href="../../unself_model/FieldType">FieldType</a></span> <span class="parameter-name">type</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span></li>\n<li><span class="parameter" id="-param-required"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">required</span>, </span></li>\n<li><span class="parameter" id="-param-unique"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">unique</span>, </span></li>\n<li><span class="parameter" id="-param-collection"><span>required</span> <span class="type-annotation"><a href="../../unself_model/Collection">Collection</a></span> <span class="parameter-name">collection</span>, </span></li>\n<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory Field({\n  /// [id] is unself unique identifier for the [Field].\n  required String id,\n\n  /// [created] is the date and time when the [Field] was created inside unself app.\n  required DateTime created,\n\n  /// [updated] is the date and time when the [Field] was last updated inside unself app.\n  required DateTime updated,\n\n  /// [type] is the data type of the [Field].\n  required FieldType type,\n\n  /// [name] is the name of the [Field].\n  required String name,\n\n  /// [system] is a flag that indicates if the [Field] is a system field.\n  required bool system,\n\n  /// [required] is a flag that indicates if the [Field] is required.\n  required bool required,\n\n  /// [unique] is a flag that indicates if the [Field] must be unique.\n  required bool unique,\n\n  /// [collection] is the [Collection] that the [Field] belongs to.\n  required Collection collection,\n\n  /// [extra] is a map of additional properties.\n  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,\n}) = _Field;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Field">Field</a></li>\n  <li class="self-crumb">Field const constructor</li>\n</ol>\n\n\n    <h5>Field class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Field#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Field/Field.constructor">Field</a></li>\n          <li><a href="../../unself_model/Field/Field.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/Field#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Field/collection">collection</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/name">name</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/system">system</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/type">type</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/unique">unique</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Field#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Field/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Field#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Field const constructor",sidebar_label:"Field const constructor",hide_title:!0},o=void 0,d={unversionedId:"api/unself_model/Field/Field.constructor",id:"api/unself_model/Field/Field.constructor",title:"Field const constructor",description:"",source:"@site/developer/api/unself_model/Field/Field.constructor.mdx",sourceDirName:"api/unself_model/Field",slug:"/api/unself_model/Field/Field.constructor",permalink:"/developer/api/unself_model/Field/Field.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Field/Field.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"Field const constructor",sidebar_label:"Field const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/developer/api/unself_model/Field/"},next:{title:"collection",permalink:"/developer/api/unself_model/Field/collection"}},p={},c=[],u={toc:c};function f(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);