"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10909],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=l,h=u["".concat(s,".").concat(p)]||u[p]||f[p]||r;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80520:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),l=t(67294),r=t(3905);function o(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toString</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">toString</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A string representation of this object.</p>\n<p>Some classes have a default textual representation,\noften paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).\nThese classes will provide the textual representation as\ntheir string representation.</p>\n<p>Other classes have no meaningful textual representation\nthat a program will care about.\nSuch classes will typically override <code>toString</code> to provide\nuseful information when inspecting the object,\nmainly for debugging or logging.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString toString() {\n  return (StringBuffer(\'CollectionData(\')\n        ..write(\'id: $id, \')\n        ..write(\'created: $created, \')\n        ..write(\'updated: $updated, \')\n        ..write(\'type: $type, \')\n        ..write(\'name: $name, \')\n        ..write(\'system: $system, \')\n        ..write(\'listRule: $listRule, \')\n        ..write(\'viewRule: $viewRule, \')\n        ..write(\'createRule: $createRule, \')\n        ..write(\'updateRule: $updateRule, \')\n        ..write(\'deleteRule: $deleteRule, \')\n        ..write(\'extra: $extra\')\n        ..write(\')\'))\n      .toString();\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionData">CollectionData</a></li>\n  <li class="self-crumb">toString method</li>\n</ol>\n\n\n    <h5>CollectionData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>\n          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionData/created">created</a></li>\n          <li><a href="../../unself_local_database/CollectionData/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/extra">extra</a></li>\n          <li><a href="../../unself_local_database/CollectionData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionData/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionData/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionData/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionData/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updated">updated</a></li>\n          <li><a href="../../unself_local_database/CollectionData/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionData/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toString method",sidebar_label:"toString",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionData/toString",id:"api/unself_local_database/CollectionData/toString",title:"toString method",description:"",source:"@site/developer/api/unself_local_database/CollectionData/toString.mdx",sourceDirName:"api/unself_local_database/CollectionData",slug:"/api/unself_local_database/CollectionData/toString",permalink:"/developer/api/unself_local_database/CollectionData/toString",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionData/toString.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"toString method",sidebar_label:"toString",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/developer/api/unself_local_database/CollectionData/toJson"},next:{title:"type",permalink:"/developer/api/unself_local_database/CollectionData/type"}},d={},u=[],f={toc:u};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);