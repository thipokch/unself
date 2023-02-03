"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[28631],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),p=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},c=function(a){var e=p(a.components);return n.createElement(o.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,s=a.originalType,o=a.parentName,c=r(a,["components","mdxType","originalType","parentName"]),d=p(t),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(f,i(i({ref:e},c),{},{components:t})):n.createElement(f,i({ref:e},c))}));function f(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var s=t.length,i=new Array(s);i[0]=m;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=a,r[d]="string"==typeof a?a:l,i[1]=r;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60986:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=t(87462),l=t(67294),s=t(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">copyWith</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></span>\n<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">listRule</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">viewRule</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">createRule</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">updateRule</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">deleteRule</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span>?</span> <span class="parameter-name">options</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CollectionCompanion copyWith(\n    {Value&lt;String&gt;? id,\n    Value&lt;String&gt;? type,\n    Value&lt;String&gt;? name,\n    Value&lt;bool&gt;? system,\n    Value&lt;String?&gt;? listRule,\n    Value&lt;String?&gt;? viewRule,\n    Value&lt;String?&gt;? createRule,\n    Value&lt;String?&gt;? updateRule,\n    Value&lt;String?&gt;? deleteRule,\n    Value&lt;String?&gt;? options}) {\n  return CollectionCompanion(\n    id: id ?? this.id,\n    type: type ?? this.type,\n    name: name ?? this.name,\n    system: system ?? this.system,\n    listRule: listRule ?? this.listRule,\n    viewRule: viewRule ?? this.viewRule,\n    createRule: createRule ?? this.createRule,\n    updateRule: updateRule ?? this.updateRule,\n    deleteRule: deleteRule ?? this.deleteRule,\n    options: options ?? this.options,\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n  <li class="self-crumb">copyWith method</li>\n</ol>\n\n\n    <h5>CollectionCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/options">options</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/updateRule">updateRule</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/CollectionCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/CollectionCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},o=void 0,p={unversionedId:"api/unself_local_database/CollectionCompanion/copyWith",id:"api/unself_local_database/CollectionCompanion/copyWith",title:"copyWith method",description:"",source:"@site/developer/api/unself_local_database/CollectionCompanion/copyWith.mdx",sourceDirName:"api/unself_local_database/CollectionCompanion",slug:"/api/unself_local_database/CollectionCompanion/copyWith",permalink:"/developer/api/unself_local_database/CollectionCompanion/copyWith",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionCompanion/copyWith.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CollectionCompanion.insert constructor",permalink:"/developer/api/unself_local_database/CollectionCompanion/CollectionCompanion.constructor"},next:{title:"createRule",permalink:"/developer/api/unself_local_database/CollectionCompanion/createRule"}},c={},d=[],u={toc:d};function m(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);