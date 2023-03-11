"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=o(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||a;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var i=n(87462),r=n(67294),a=n(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Activity.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">Activity.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Creates a <a href="../../unself_model/Activity">Activity</a> from Json map</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory Activity.fromJson(Map&lt;String, dynamic&gt; data) =&gt;\n    _$ActivityFromJson(data);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Activity">Activity</a></li>\n  <li class="self-crumb">Activity.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>Activity class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Activity#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Activity/Activity.constructor">Activity</a></li>\n          <li><a href="../../unself_model/Activity/Activity.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/Activity#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Activity/accountId">accountId</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/appId">appId</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/archiveId">archiveId</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/id">id</a></li>\n          <li><a href="../../unself_model/Activity/labels">labels</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/source">source</a></li>\n          <li><a href="../../unself_model/Activity/sourceId">sourceId</a></li>\n          <li><a href="../../unself_model/Activity/targetId">targetId</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/timestamp">timestamp</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/type">type</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Activity#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Activity/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Activity#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"Activity.fromJson factory constructor",sidebar_label:"Activity.fromJson factory constructor",hide_title:!0},c=void 0,o={unversionedId:"api/unself_model/Activity/Activity.constructor",id:"api/unself_model/Activity/Activity.constructor",title:"Activity.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/Activity/Activity.constructor.mdx",sourceDirName:"api/unself_model/Activity",slug:"/api/unself_model/Activity/Activity.constructor",permalink:"/developer/api/unself_model/Activity/Activity.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Activity/Activity.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Activity.fromJson factory constructor",sidebar_label:"Activity.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Activity",permalink:"/developer/api/unself_model/Activity/"},next:{title:"accountId",permalink:"/developer/api/unself_model/Activity/accountId"}},d={},f=[],u={toc:f};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);