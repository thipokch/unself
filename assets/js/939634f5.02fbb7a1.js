"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96145],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),f=l,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[u]="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38519:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var t=n(87462),l=n(67294),o=n(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toCompanion</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></span>\n<span class="name ">toCompanion</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">FieldCompanion toCompanion(bool nullToAbsent) {\n  return FieldCompanion(\n    id: Value(id),\n    name: Value(name),\n    type: Value(type),\n    system: Value(system),\n    required: Value(required),\n    unique: Value(unique),\n    options: options == null &amp;&amp; nullToAbsent\n        ? const Value.absent()\n        : Value(options),\n    collectionId: Value(collectionId),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">toCompanion method</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/options">options</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"toCompanion method",sidebar_label:"toCompanion",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldData/toCompanion",id:"api/unself_local_database/FieldData/toCompanion",title:"toCompanion method",description:"",source:"@site/reference/api/unself_local_database/FieldData/toCompanion.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/toCompanion",permalink:"/reference/api/unself_local_database/FieldData/toCompanion",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_local_database/FieldData/toCompanion.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"toCompanion method",sidebar_label:"toCompanion",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toColumns",permalink:"/reference/api/unself_local_database/FieldData/toColumns"},next:{title:"toJson",permalink:"/reference/api/unself_local_database/FieldData/toJson"}},c={},u=[],p={toc:u};function f(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);