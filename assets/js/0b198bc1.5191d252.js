"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?l.createElement(h,i(i({ref:t},d),{},{components:n})):l.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var l=n(87462),r=n(67294),o=n(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">copyWith</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/json_annotation/4.8.0/json_annotation/JsonKey-class.html">JsonKey</a>(ignore: true)</li>\n    </ol>\n  </div>\n  <span class="returntype">$CollectionCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/Collection">Collection</a></span>&gt;</span></span>\n  <span class="name ">copyWith</span>\n  <div class="features"><span class="feature">inherited</span></div>\n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@JsonKey(ignore: true)\n$CollectionCopyWith&lt;Collection&gt; get copyWith =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Collection">Collection</a></li>\n  <li class="self-crumb">copyWith property</li>\n</ol>\n\n\n    <h5>Collection class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Collection#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Collection/Collection.constructor">Collection</a></li>\n          <li><a href="../../unself_model/Collection/Collection.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/Collection#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Collection/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/createRule">createRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/listRule">listRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/system">system</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/type">type</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/updated">updated</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/updateRule">updateRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/viewRule">viewRule</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Collection#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Collection#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const a={title:"copyWith property",sidebar_label:"copyWith",hide_title:!0},s=void 0,c={unversionedId:"api/unself_model/Collection/copyWith",id:"api/unself_model/Collection/copyWith",title:"copyWith property",description:"",source:"@site/developer/api/unself_model/Collection/copyWith.mdx",sourceDirName:"api/unself_model/Collection",slug:"/api/unself_model/Collection/copyWith",permalink:"/developer/api/unself_model/Collection/copyWith",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Collection/copyWith.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"copyWith property",sidebar_label:"copyWith",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Collection.fromJson factory constructor",permalink:"/developer/api/unself_model/Collection/Collection.constructor"},next:{title:"createRule",permalink:"/developer/api/unself_model/Collection/createRule"}},d={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);