"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95782],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>f});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),c=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},o=function(a){var e=c(a.components);return n.createElement(p.Provider,{value:e},a.children)},d="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),d=c(t),h=s,f=d["".concat(p,".").concat(h)]||d[h]||m[h]||r;return t?n.createElement(f,l(l({ref:e},o),{},{components:t})):n.createElement(f,l({ref:e},o))}));function f(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[d]="string"==typeof a?a:s,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},20067:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),s=t(67294),r=t(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">when</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="when-param-entity">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">entity</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span></li>\n<li><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span></li>\n<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-flat"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">flat</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="param-definition"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span></li>\n<li><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span></li>\n<li><span class="parameter" id="param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span></li>\n<li><span class="parameter" id="param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span></li>\n<li><span class="parameter" id="param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span></li>\n<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-struct"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">struct</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="param-definition"><span class="type-annotation">dynamic</span> <span class="parameter-name">definition</span>, </span></li>\n<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult when&lt;TResult extends Object?&gt;({\n  required TResult Function(\n          String name,\n          Map&lt;String, IJsonSchema&gt; definition,\n          String key,\n          Map&lt;String, String&gt; fieldMap,\n          @JsonExtra() Map&lt;String, dynamic&gt; extra)\n      entity,\n  required TResult Function(\n          String name,\n          Map&lt;String, IJsonSchema&gt; definition,\n          String key,\n          List&lt;String&gt; entityPath,\n          List&lt;List&lt;String&gt;&gt; includePath,\n          bool addMissingKeys,\n          Map&lt;String, String&gt; fieldMap,\n          @JsonExtra() Map&lt;String, dynamic&gt; extra)\n      flat,\n  required TResult Function(String name, dynamic definition,\n          @JsonExtra() Map&lt;String, dynamic&gt; extra)\n      struct,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonSchema">JsonSchema</a></li>\n  <li class="self-crumb">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>JsonSchema class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonSchema#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.entity">entity</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.flat">flat</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.struct">struct</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonSchema#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/definition">definition</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonSchema#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonSchema#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},p=void 0,c={unversionedId:"api/unself_model/JsonSchema/when",id:"api/unself_model/JsonSchema/when",title:"when<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/JsonSchema/when.mdx",sourceDirName:"api/unself_model/JsonSchema",slug:"/api/unself_model/JsonSchema/when",permalink:"/developer/api/unself_model/JsonSchema/when",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonSchema/when.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/developer/api/unself_model/JsonSchema/toJson"},next:{title:"whenOrNull",permalink:"/developer/api/unself_model/JsonSchema/whenOrNull"}},o={},d=[],m={toc:d};function h(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);