"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35863],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(t),u=l,p=h["".concat(i,".").concat(u)]||h[u]||f[u]||r;return t?n.createElement(p,s(s({ref:a},c),{},{components:t})):n.createElement(p,s({ref:a},c))}));function p(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[h]="string"==typeof e?e:l,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90090:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(87462),l=t(67294),r=t(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">hashCode</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>\n  <span class="name ">hashCode</span>\n  <div class="features"><span class="feature">override</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p>The hash code for this object.</p>\n<p>A hash code is a single integer which represents the state of the object\nthat affects <a href="../../unself_local_database/FieldData/operator_equals">operator ==</a> comparisons.</p>\n<p>All objects have hash codes.\nThe default hash code implemented by <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>\nrepresents only the identity of the object,\nthe same way as the default <a href="../../unself_local_database/FieldData/operator_equals">operator ==</a> implementation only considers objects\nequal if they are identical (see <a href="https://api.flutter.dev/flutter/dart-core/identityHashCode.html">identityHashCode</a>).</p>\n<p>If <a href="../../unself_local_database/FieldData/operator_equals">operator ==</a> is overridden to use the object state instead,\nthe hash code must also be changed to represent that state,\notherwise the object cannot be used in hash based data structures\nlike the default <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a> and <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a> implementations.</p>\n<p>Hash codes must be the same for objects that are equal to each other\naccording to <a href="../../unself_local_database/FieldData/operator_equals">operator ==</a>.\nThe hash code of an object should only change if the object changes\nin a way that affects equality.\nThere are no further requirements for the hash codes.\nThey need not be consistent between executions of the same program\nand there are no distribution guarantees.</p>\n<p>Objects that are not equal are allowed to have the same hash code.\nIt is even technically allowed that all instances have the same hash code,\nbut if clashes happen too often,\nit may reduce the efficiency of hash-based data structures\nlike <a href="https://api.flutter.dev/flutter/dart-collection/HashSet-class.html">HashSet</a> or <a href="https://api.flutter.dev/flutter/dart-collection/HashMap-class.html">HashMap</a>.</p>\n<p>If a subclass overrides <a href="../../unself_local_database/FieldData/hashCode">hashCode</a>, it should override the\n<a href="../../unself_local_database/FieldData/operator_equals">operator ==</a> operator as well to maintain consistency.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nint get hashCode =&gt; Object.hash(id, created, updated, type, name, system,\n    required, unique, collectionId, extra);</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">hashCode property</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldData/extra">extra</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldData/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},i=void 0,d={unversionedId:"api/unself_local_database/FieldData/hashCode",id:"api/unself_local_database/FieldData/hashCode",title:"hashCode property",description:"",source:"@site/developer/api/unself_local_database/FieldData/hashCode.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/hashCode",permalink:"/developer/api/unself_local_database/FieldData/hashCode",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldData/hashCode.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"extra",permalink:"/developer/api/unself_local_database/FieldData/extra"},next:{title:"id",permalink:"/developer/api/unself_local_database/FieldData/id"}},c={},h=[],f={toc:h};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);