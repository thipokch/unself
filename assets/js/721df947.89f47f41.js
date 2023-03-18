"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[90071],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(f,i(i({ref:a},p),{},{components:t})):n.createElement(f,i({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10832:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),r=t(67294),l=t(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">normalize</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a></span>&gt;</span></span>\n<span class="name ">normalize</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="normalize-param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">schema</span>, </span></li>\n<li><span class="parameter" id="normalize-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p>Normalizes the given JSON object using the specified schema name.</p>\n<p>Returns a map of normalized JSON objects, where each key corresponds to\nthe name of an entity and the value is a list of normalized JSON objects\nfor that entity.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Map&lt;String, List&gt; normalize(String schema, Map&lt;String, dynamic&gt; json) =&gt;\n    normalizeWith(_find(schema), json);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/Normalize">Normalize</a></li>\n  <li class="self-crumb">normalize method</li>\n</ol>\n\n\n    <h5>Normalize class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/Normalize#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/Normalize/Normalize.constructor">Normalize</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/Normalize#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/Normalize#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/Normalize/accumulate">accumulate</a></li>\n          <li><a href="../../unself_unpack/Normalize/add">add</a></li>\n          <li><a href="../../unself_unpack/Normalize/addAll">addAll</a></li>\n          <li><a href="../../unself_unpack/Normalize/clear">clear</a></li>\n          <li><a href="../../unself_unpack/Normalize/normalize">normalize</a></li>\n          <li><a href="../../unself_unpack/Normalize/normalizeWith">normalizeWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/Normalize#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"normalize method",sidebar_label:"normalize",hide_title:!0},o=void 0,c={unversionedId:"api/unself_unpack/Normalize/Normalize",id:"api/unself_unpack/Normalize/Normalize",title:"normalize method",description:"",source:"@site/developer/api/unself_unpack/Normalize/Normalize.mdx",sourceDirName:"api/unself_unpack/Normalize",slug:"/api/unself_unpack/Normalize/",permalink:"/developer/api/unself_unpack/Normalize/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/Normalize/Normalize.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"normalize method",sidebar_label:"normalize",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"unpack",permalink:"/developer/api/unself_unpack/Import/unpack"},next:{title:"accumulate",permalink:"/developer/api/unself_unpack/Normalize/accumulate"}},p={},u=[],d={toc:u};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);