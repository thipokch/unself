"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36738],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return n?t.createElement(m,r(r({ref:a},c),{},{components:n})):t.createElement(m,r({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69831:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=n(87462),i=n(67294),l=n(3905);function r(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toString</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">toString</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A string representation of this object.</p>\n<p>Some classes have a default textual representation,\noften paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).\nThese classes will provide the textual representation as\ntheir string representation.</p>\n<p>Other classes have no meaningful textual representation\nthat a program will care about.\nSuch classes will typically override <code>toString</code> to provide\nuseful information when inspecting the object,\nmainly for debugging or logging.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString toString() {\n  return (StringBuffer(\'FieldCompanion(\')\n        ..write(\'id: $id, \')\n        ..write(\'created: $created, \')\n        ..write(\'updated: $updated, \')\n        ..write(\'type: $type, \')\n        ..write(\'name: $name, \')\n        ..write(\'system: $system, \')\n        ..write(\'required: $required, \')\n        ..write(\'unique: $unique, \')\n        ..write(\'collectionId: $collectionId, \')\n        ..write(\'extra: $extra\')\n        ..write(\')\'))\n      .toString();\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n  <li class="self-crumb">toString method</li>\n</ol>\n\n\n    <h5>FieldCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/updated">updated</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"toString method",sidebar_label:"toString",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldCompanion/toString",id:"api/unself_local_database/FieldCompanion/toString",title:"toString method",description:"",source:"@site/developer/api/unself_local_database/FieldCompanion/toString.mdx",sourceDirName:"api/unself_local_database/FieldCompanion",slug:"/api/unself_local_database/FieldCompanion/toString",permalink:"/developer/api/unself_local_database/FieldCompanion/toString",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldCompanion/toString.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"toString method",sidebar_label:"toString",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toColumns",permalink:"/developer/api/unself_local_database/FieldCompanion/toColumns"},next:{title:"type",permalink:"/developer/api/unself_local_database/FieldCompanion/type"}},c={},p=[],u={toc:p};function f(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);