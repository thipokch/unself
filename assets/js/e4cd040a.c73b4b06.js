"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[73094],{3905:(e,a,t)=>{t.d(a,{Zo:()=>f,kt:()=>m});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},f=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=l,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return t?n.createElement(m,r(r({ref:a},f),{},{components:t})):n.createElement(m,r({ref:a},f))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80012:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),l=t(67294),o=t(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">CollectionData.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">CollectionData.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span></li>\n<li><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory CollectionData.fromJson(Map&lt;String, dynamic&gt; json,\n    {ValueSerializer? serializer}) {\n  serializer ??= driftRuntimeOptions.defaultSerializer;\n  return CollectionData(\n    id: serializer.fromJson&lt;String&gt;(json[\'id\']),\n    type: serializer.fromJson&lt;String&gt;(json[\'type\']),\n    name: serializer.fromJson&lt;String&gt;(json[\'name\']),\n    system: serializer.fromJson&lt;bool&gt;(json[\'system\']),\n    listRule: serializer.fromJson&lt;String?&gt;(json[\'listRule\']),\n    viewRule: serializer.fromJson&lt;String?&gt;(json[\'viewRule\']),\n    createRule: serializer.fromJson&lt;String?&gt;(json[\'createRule\']),\n    updateRule: serializer.fromJson&lt;String?&gt;(json[\'updateRule\']),\n    deleteRule: serializer.fromJson&lt;String?&gt;(json[\'deleteRule\']),\n    options: serializer.fromJson&lt;String?&gt;(json[\'options\']),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionData">CollectionData</a></li>\n  <li class="self-crumb">CollectionData.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>CollectionData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionData/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionData/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionData/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/name">name</a></li>\n          <li><a href="../../unself_local_database/CollectionData/options">options</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionData/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionData/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"CollectionData.fromJson factory constructor",sidebar_label:"CollectionData.fromJson factory constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_local_database/CollectionData/CollectionData.constructor",id:"api/unself_local_database/CollectionData/CollectionData.constructor",title:"CollectionData.fromJson factory constructor",description:"",source:"@site/reference/api/unself_local_database/CollectionData/CollectionData.constructor.mdx",sourceDirName:"api/unself_local_database/CollectionData",slug:"/api/unself_local_database/CollectionData/CollectionData.constructor",permalink:"/reference/api/unself_local_database/CollectionData/CollectionData.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_local_database/CollectionData/CollectionData.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"CollectionData.fromJson factory constructor",sidebar_label:"CollectionData.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CollectionData",permalink:"/reference/api/unself_local_database/CollectionData/"},next:{title:"copyWith",permalink:"/reference/api/unself_local_database/CollectionData/copyWith"}},f={},u=[],d={toc:u};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);