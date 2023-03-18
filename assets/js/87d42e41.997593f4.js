"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17685],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),h=p(t),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||s;return t?n.createElement(u,l(l({ref:a},o),{},{components:t})):n.createElement(u,l({ref:a},o))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25178:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=t(87462),r=t(67294),s=t(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">when</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="when-param-json">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<ol class="parameter-list"><li><span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span></li>\n<li><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span></li>\n<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-zipJson"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<ol class="parameter-list"><li><span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span></li>\n<li><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span></li>\n<li><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult when&lt;TResult extends Object?&gt;({\n  required TResult Function(String id, String part, List&lt;JsonSchema&gt; schema,\n          @JsonExtra() Map&lt;String, dynamic&gt; extra)\n      json,\n  required TResult Function(String id, String part, List&lt;JsonSchema&gt; schema,\n          @JsonExtra() Map&lt;String, dynamic&gt; extra)\n      zipJson,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n  <li class="self-crumb">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>ArchiveSchemaPart class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.json">json</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.zipJson">zipJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/ArchiveSchemaPart#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/part">part</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/schema">schema</a></li>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/read">read</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveSchemaPart#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},c=void 0,p={unversionedId:"api/unself_model/ArchiveSchemaPart/when",id:"api/unself_model/ArchiveSchemaPart/when",title:"when<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/ArchiveSchemaPart/when.mdx",sourceDirName:"api/unself_model/ArchiveSchemaPart",slug:"/api/unself_model/ArchiveSchemaPart/when",permalink:"/developer/api/unself_model/ArchiveSchemaPart/when",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/ArchiveSchemaPart/when.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/developer/api/unself_model/ArchiveSchemaPart/toJson"},next:{title:"whenOrNull",permalink:"/developer/api/unself_model/ArchiveSchemaPart/whenOrNull"}},o={},h=[],d={toc:h};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(l,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);