"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69586],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),f=s,m=p["".concat(o,".").concat(f)]||p[f]||u[f]||r;return a?t.createElement(m,l(l({ref:n},d),{},{components:a})):t.createElement(m,l({ref:n},d))}));function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},92493:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=a(87462),s=a(67294),r=a(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">Document</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n        \n\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="Document" class="callable">\n          <span class="name"><a href="../unself_model/Document/Document.constructor">Document</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-collectionId"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionId</span>, </span><span class="parameter" id="-param-collectionName"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionName</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="Document.fromJson" class="callable">\n          <span class="name"><a href="../unself_model/Document/Document.fromJson">Document.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="collectionId" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/collectionId">collectionId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="collectionName" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/collectionName">collectionName</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="copyWith" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/copyWith">copyWith</a></span>\n  <span class="signature">\u2192 $DocumentCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/Document">Document</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="created" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="updated" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable inherited">\n  <span class="name"><a href="../unself_model/Document/toJson">toJson</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">Document class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Document">Document</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/User">User</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/Document#constructors">Constructors</a></li>\n          <li><a href="../unself_model/Document/Document.constructor">Document</a></li>\n          <li><a href="../unself_model/Document/Document.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_model/Document#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../unself_model/Document/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="../unself_model/Document/collectionName">collectionName</a></li>\n          <li class="inherited"><a href="../unself_model/Document/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../unself_model/Document/created">created</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../unself_model/Document/id">id</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../unself_model/Document/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Document#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../unself_model/Document/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Document#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Document class",sidebar_label:"Document",hide_title:!0},o=void 0,c={unversionedId:"api/unself_model/Document/Document",id:"api/unself_model/Document/Document",title:"Document class",description:"",source:"@site/developer/api/unself_model/Document/Document.mdx",sourceDirName:"api/unself_model/Document",slug:"/api/unself_model/Document/",permalink:"/developer/api/unself_model/Document/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Document/Document.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Document class",sidebar_label:"Document",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"viewRule",permalink:"/developer/api/unself_model/Collection/viewRule"},next:{title:"Document const constructor",permalink:"/developer/api/unself_model/Document/Document.constructor"}},d={},p=[],u={toc:p};function f(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);