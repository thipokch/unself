"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?l.createElement(m,a(a({ref:t},d),{},{components:n})):l.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var l=n(87462),r=n(67294),o=n(3905);function a(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Collection.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">Collection.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory Collection.fromJson(Map&lt;String, dynamic&gt; json) =&gt;\n    _$CollectionFromJson(json);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Collection">Collection</a></li>\n  <li class="self-crumb">Collection.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>Collection class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Collection#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Collection/Collection.constructor">Collection</a></li>\n          <li><a href="../../unself_model/Collection/Collection.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/Collection#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Collection/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/createRule">createRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/listRule">listRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/name">name</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/options">options</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/schema">schema</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/system">system</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/type">type</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/updateRule">updateRule</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/viewRule">viewRule</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Collection#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Collection/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Collection#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Collection.fromJson factory constructor",sidebar_label:"Collection.fromJson factory constructor",hide_title:!0},s=void 0,c={unversionedId:"api/unself_model/Collection/Collection.constructor",id:"api/unself_model/Collection/Collection.constructor",title:"Collection.fromJson factory constructor",description:"",source:"@site/reference/api/unself_model/Collection/Collection.constructor.mdx",sourceDirName:"api/unself_model/Collection",slug:"/api/unself_model/Collection/Collection.constructor",permalink:"/reference/api/unself_model/Collection/Collection.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_model/Collection/Collection.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Collection.fromJson factory constructor",sidebar_label:"Collection.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Collection",permalink:"/reference/api/unself_model/Collection/"},next:{title:"copyWith",permalink:"/reference/api/unself_model/Collection/copyWith"}},d={},f=[],u={toc:f};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);