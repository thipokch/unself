"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(a),p=n,u=f["".concat(o,".").concat(p)]||f[p]||h[p]||i;return a?r.createElement(u,s(s({ref:t},d),{},{components:a})):r.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[f]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var r=a(87462),n=a(67294),i=a(3905);function s(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ArchiveData.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">ArchiveData.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Creates a <a href="../../unself_model/Archive">Archive</a> from Json map</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory ArchiveData.fromJson(Map&lt;String, dynamic&gt; json) =&gt;\n    _$ArchiveDataFromJson(json);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/ArchiveData">ArchiveData</a></li>\n  <li class="self-crumb">ArchiveData.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>ArchiveData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveData#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/ArchiveData/ArchiveData.constructor">ArchiveData</a></li>\n          <li><a href="../../unself_model/ArchiveData/ArchiveData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/ArchiveData#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/accounts">accounts</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/activities">activities</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/apps">apps</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/archiveId">archiveId</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/extra">extra</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/formatId">formatId</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/id">id</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/topics">topics</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveData#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveData#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../../unself_model/ArchiveData#constants">Constants</a></li>\n          <li><a href="../../unself_model/ArchiveData/fieldMap-constant">fieldMap</a></li>\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"ArchiveData.fromJson factory constructor",sidebar_label:"ArchiveData.fromJson factory constructor",hide_title:!0},o=void 0,c={unversionedId:"api/unself_model/ArchiveData/ArchiveData.constructor",id:"api/unself_model/ArchiveData/ArchiveData.constructor",title:"ArchiveData.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/ArchiveData/ArchiveData.constructor.mdx",sourceDirName:"api/unself_model/ArchiveData",slug:"/api/unself_model/ArchiveData/ArchiveData.constructor",permalink:"/developer/api/unself_model/ArchiveData/ArchiveData.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/ArchiveData/ArchiveData.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ArchiveData.fromJson factory constructor",sidebar_label:"ArchiveData.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ArchiveData",permalink:"/developer/api/unself_model/ArchiveData/"},next:{title:"accounts",permalink:"/developer/api/unself_model/ArchiveData/accounts"}},d={},f=[],h={toc:f};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);