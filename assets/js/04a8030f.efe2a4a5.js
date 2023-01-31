"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[152],{3905:(a,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var t=n(67294);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function i(a,e){if(null==a)return{};var n,t,s=function(a,e){if(null==a)return{};var n,t,s={},l=Object.keys(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)n=l[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}var o=t.createContext({}),p=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=p(a.components);return t.createElement(o.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,s=a.mdxType,l=a.originalType,o=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),d=p(n),m=s,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(f,r(r({ref:e},c),{},{components:n})):t.createElement(f,r({ref:e},c))}));function f(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=a,i[d]="string"==typeof a?a:s,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11973:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=n(87462),s=n(67294),l=n(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">FieldCompanion</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">FieldCompanion</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">id</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">name</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter">FieldType</span>&gt;</span></span> <span class="parameter-name">type</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">system</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">required</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">unique</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">options</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">collectionId</span> = <span class="default-value">const Value.absent()</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const FieldCompanion({\n  this.id = const Value.absent(),\n  this.name = const Value.absent(),\n  this.type = const Value.absent(),\n  this.system = const Value.absent(),\n  this.required = const Value.absent(),\n  this.unique = const Value.absent(),\n  this.options = const Value.absent(),\n  this.collectionId = const Value.absent(),\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></li>\n  <li class="self-crumb">FieldCompanion const constructor</li>\n</ol>\n\n\n    <h5>FieldCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldCompanion/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/options">options</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"FieldCompanion const constructor",sidebar_label:"FieldCompanion const constructor",hide_title:!0},o=void 0,p={unversionedId:"packages/unself_local_database/FieldCompanion/FieldCompanion.constructor",id:"packages/unself_local_database/FieldCompanion/FieldCompanion.constructor",title:"FieldCompanion const constructor",description:"",source:"@site/reference/packages/unself_local_database/FieldCompanion/FieldCompanion.constructor.mdx",sourceDirName:"packages/unself_local_database/FieldCompanion",slug:"/packages/unself_local_database/FieldCompanion/FieldCompanion.constructor",permalink:"/reference/packages/unself_local_database/FieldCompanion/FieldCompanion.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_local_database/FieldCompanion/FieldCompanion.constructor.mdx",tags:[],version:"current",frontMatter:{title:"FieldCompanion const constructor",sidebar_label:"FieldCompanion const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"FieldCompanion",permalink:"/reference/packages/unself_local_database/FieldCompanion/"},next:{title:"collectionId",permalink:"/reference/packages/unself_local_database/FieldCompanion/collectionId"}},c={},d=[],u={toc:d};function m(a){let{components:e,...n}=a;return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);