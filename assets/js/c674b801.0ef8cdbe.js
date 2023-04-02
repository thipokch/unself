"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),f=l,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),l=n(67294),o=n(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toString</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">toString</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A string representation of this object.</p>\n<p>Some classes have a default textual representation,\noften paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).\nThese classes will provide the textual representation as\ntheir string representation.</p>\n<p>Other classes have no meaningful textual representation\nthat a program will care about.\nSuch classes will typically override <code>toString</code> to provide\nuseful information when inspecting the object,\nmainly for debugging or logging.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString toString() {\n  return (StringBuffer(\'CollectionCompanion(\')\n        ..write(\'id: $id, \')\n        ..write(\'created: $created, \')\n        ..write(\'updated: $updated, \')\n        ..write(\'type: $type, \')\n        ..write(\'name: $name, \')\n        ..write(\'system: $system, \')\n        ..write(\'listRule: $listRule, \')\n        ..write(\'viewRule: $viewRule, \')\n        ..write(\'createRule: $createRule, \')\n        ..write(\'updateRule: $updateRule, \')\n        ..write(\'deleteRule: $deleteRule, \')\n        ..write(\'extra: $extra\')\n        ..write(\')\'))\n      .toString();\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n  <li class="self-crumb">toString method</li>\n</ol>\n\n\n    <h5>CollectionCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updated">updated</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"toString method",sidebar_label:"toString",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionCompanion/toString",id:"api/unself_local_database/CollectionCompanion/toString",title:"toString method",description:"",source:"@site/developer/api/unself_local_database/CollectionCompanion/toString.mdx",sourceDirName:"api/unself_local_database/CollectionCompanion",slug:"/api/unself_local_database/CollectionCompanion/toString",permalink:"/developer/api/unself_local_database/CollectionCompanion/toString",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionCompanion/toString.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"toString method",sidebar_label:"toString",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toColumns",permalink:"/developer/api/unself_local_database/CollectionCompanion/toColumns"},next:{title:"type",permalink:"/developer/api/unself_local_database/CollectionCompanion/type"}},d={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);