"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11793],{3905:(a,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var t=n(67294);function l(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function s(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,l=function(a,e){if(null==a)return{};var n,t,l={},s=Object.keys(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||(l[n]=a[n]);return l}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(t=0;t<s.length;t++)n=s[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(l[n]=a[n])}return l}var i=t.createContext({}),p=function(a){var e=t.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=p(a.components);return t.createElement(i.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,l=a.mdxType,s=a.originalType,i=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?t.createElement(f,r(r({ref:e},c),{},{components:n})):t.createElement(f,r({ref:e},c))}));function f(a,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=a,o[d]="string"==typeof a?a:l,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98017:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var t=n(87462),l=n(67294),s=n(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">CollectionCompanion.insert</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">CollectionCompanion.insert</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="insert-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="insert-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>\n<li><span class="parameter" id="insert-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>\n<li><span class="parameter" id="insert-param-type"><span>required</span> <span class="type-annotation">CollectionType</span> <span class="parameter-name">type</span>, </span></li>\n<li><span class="parameter" id="insert-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="insert-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span></li>\n<li><span class="parameter" id="insert-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">listRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="insert-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">viewRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="insert-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">createRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="insert-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">updateRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="insert-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">deleteRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>\n<li><span class="parameter" id="insert-param-extra"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CollectionCompanion.insert({\n  required String id,\n  required DateTime created,\n  required DateTime updated,\n  required CollectionType type,\n  required String name,\n  required bool system,\n  this.listRule = const Value.absent(),\n  this.viewRule = const Value.absent(),\n  this.createRule = const Value.absent(),\n  this.updateRule = const Value.absent(),\n  this.deleteRule = const Value.absent(),\n  required String extra,\n})  : id = Value(id),\n      created = Value(created),\n      updated = Value(updated),\n      type = Value(type),\n      name = Value(name),\n      system = Value(system),\n      extra = Value(extra);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n  <li class="self-crumb">CollectionCompanion.insert constructor</li>\n</ol>\n\n\n    <h5>CollectionCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionCompanion/created">created</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updated">updated</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"CollectionCompanion.insert constructor",sidebar_label:"CollectionCompanion.insert constructor",hide_title:!0},i=void 0,p={unversionedId:"api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor",id:"api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor",title:"CollectionCompanion.insert constructor",description:"",source:"@site/developer/api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor.mdx",sourceDirName:"api/unself_local_database/CollectionCompanion",slug:"/api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor",permalink:"/developer/api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"CollectionCompanion.insert constructor",sidebar_label:"CollectionCompanion.insert constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CollectionCompanion",permalink:"/developer/api/unself_local_database/CollectionCompanion/"},next:{title:"copyWith",permalink:"/developer/api/unself_local_database/CollectionCompanion/copyWith"}},c={},d=[],u={toc:d};function m(a){let{components:e,...n}=a;return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);