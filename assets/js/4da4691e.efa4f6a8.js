"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,h=p["".concat(o,".").concat(u)]||p[u]||f[u]||l;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),l=r(3905);function s(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">extra</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n        <li>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  <span class="name ">extra</span>\n  \n\n</section>\n\n\n<section class="desc markdown">\n  <p><a href="../../unself_model/JsonPart/extra">extra</a> is a map of additional properties.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\n\n/// [extra] is a map of additional properties.\n@JsonExtra()\nMap&lt;String, dynamic&gt; get extra;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonPart">JsonPart</a></li>\n  <li class="self-crumb">extra property</li>\n</ol>\n\n\n    <h5>JsonPart class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonPart#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonPart/JsonPart.constructor">JsonPart</a></li>\n          <li><a href="../../unself_model/JsonPart/JsonPart.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/JsonPart#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_model/JsonPart/copyWith">copyWith</a></li>\n          <li><a href="../../unself_model/JsonPart/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_model/JsonPart/id">id</a></li>\n          <li><a href="../../unself_model/JsonPart/part">part</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_model/JsonPart/schema">schema</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonPart#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/read">read</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonPart#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"extra property",sidebar_label:"extra",hide_title:!0},o=void 0,c={unversionedId:"api/unself_model/JsonPart/extra",id:"api/unself_model/JsonPart/extra",title:"extra property",description:"",source:"@site/developer/api/unself_model/JsonPart/extra.mdx",sourceDirName:"api/unself_model/JsonPart",slug:"/api/unself_model/JsonPart/extra",permalink:"/developer/api/unself_model/JsonPart/extra",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonPart/extra.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"extra property",sidebar_label:"extra",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"copyWith",permalink:"/developer/api/unself_model/JsonPart/copyWith"},next:{title:"id",permalink:"/developer/api/unself_model/JsonPart/id"}},d={},p=[],f={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);