"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[75258],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),o=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||l;return t?n.createElement(u,s(s({ref:a},p),{},{components:t})):n.createElement(u,s({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21119:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(87462),r=t(67294),l=t(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-json">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/JsonPart">JsonPart</a></span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-zipJson"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/ZipJsonPart">ZipJsonPart</a></span> <span class="parameter-name">value</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult map&lt;TResult extends Object?&gt;({\n  required TResult Function(JsonPart value) json,\n  required TResult Function(ZipJsonPart value) zipJson,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>ArchiveSchemaPart class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.json">json</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/ArchiveSchemaPart.zipJson">zipJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/ArchiveSchemaPart#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/part">part</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/schema">schema</a></li>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveSchemaPart#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_model/ArchiveSchemaPart/read">read</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveSchemaPart#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},c=void 0,o={unversionedId:"api/unself_model/ArchiveSchemaPart/map",id:"api/unself_model/ArchiveSchemaPart/map",title:"map<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/ArchiveSchemaPart/map.mdx",sourceDirName:"api/unself_model/ArchiveSchemaPart",slug:"/api/unself_model/ArchiveSchemaPart/map",permalink:"/developer/api/unself_model/ArchiveSchemaPart/map",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/ArchiveSchemaPart/map.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"id",permalink:"/developer/api/unself_model/ArchiveSchemaPart/id"},next:{title:"mapOrNull",permalink:"/developer/api/unself_model/ArchiveSchemaPart/mapOrNull"}},p={},d=[],h={toc:d};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);