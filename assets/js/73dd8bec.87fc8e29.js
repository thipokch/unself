"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6392],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),c=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return l.createElement(i.Provider,{value:a},e.children)},h="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(t),u=n,p=h["".concat(i,".").concat(u)]||h[u]||f[u]||o;return t?l.createElement(p,r(r({ref:a},d),{},{components:t})):l.createElement(p,r({ref:a},d))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13876:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var l=t(87462),n=t(67294),o=t(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">hashCode</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>\n  <span class="name ">hashCode</span>\n  <div class="features"><span class="feature">override</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p>The hash code for this object.</p>\n<p>A hash code is a single integer which represents the state of the object\nthat affects <a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a> comparisons.</p>\n<p>All objects have hash codes.\nThe default hash code implemented by <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>\nrepresents only the identity of the object,\nthe same way as the default <a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a> implementation only considers objects\nequal if they are identical (see <a href="https://api.flutter.dev/flutter/dart-core/identityHashCode.html">identityHashCode</a>).</p>\n<p>If <a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a> is overridden to use the object state instead,\nthe hash code must also be changed to represent that state,\notherwise the object cannot be used in hash based data structures\nlike the default <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a> and <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a> implementations.</p>\n<p>Hash codes must be the same for objects that are equal to each other\naccording to <a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a>.\nThe hash code of an object should only change if the object changes\nin a way that affects equality.\nThere are no further requirements for the hash codes.\nThey need not be consistent between executions of the same program\nand there are no distribution guarantees.</p>\n<p>Objects that are not equal are allowed to have the same hash code.\nIt is even technically allowed that all instances have the same hash code,\nbut if clashes happen too often,\nit may reduce the efficiency of hash-based data structures\nlike <a href="https://api.flutter.dev/flutter/dart-collection/HashSet-class.html">HashSet</a> or <a href="https://api.flutter.dev/flutter/dart-collection/HashMap-class.html">HashMap</a>.</p>\n<p>If a subclass overrides <a href="../../unself_local_database/CollectionData/hashCode">hashCode</a>, it should override the\n<a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a> operator as well to maintain consistency.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nint get hashCode =&gt; Object.hash(id, created, updated, type, name, system,\n    listRule, viewRule, createRule, updateRule, deleteRule, extra);</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionData">CollectionData</a></li>\n  <li class="self-crumb">hashCode property</li>\n</ol>\n\n\n    <h5>CollectionData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionData/created">created</a></li>\n          <li><a href="../../unself_local_database/CollectionData/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/extra">extra</a></li>\n          <li><a href="../../unself_local_database/CollectionData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionData/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionData/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionData/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionData/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updated">updated</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},i=void 0,c={unversionedId:"api/unself_local_database/CollectionData/hashCode",id:"api/unself_local_database/CollectionData/hashCode",title:"hashCode property",description:"",source:"@site/developer/api/unself_local_database/CollectionData/hashCode.mdx",sourceDirName:"api/unself_local_database/CollectionData",slug:"/api/unself_local_database/CollectionData/hashCode",permalink:"/developer/api/unself_local_database/CollectionData/hashCode",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionData/hashCode.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"extra",permalink:"/developer/api/unself_local_database/CollectionData/extra"},next:{title:"id",permalink:"/developer/api/unself_local_database/CollectionData/id"}},d={},h=[],f={toc:h};function u(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);