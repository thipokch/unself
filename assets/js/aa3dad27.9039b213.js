"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69586],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=s,m=p["".concat(o,".").concat(f)]||p[f]||u[f]||r;return n?t.createElement(m,l(l({ref:a},d),{},{components:n})):t.createElement(m,l({ref:a},d))}));function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92493:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(87462),s=n(67294),r=n(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">Document</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../unself_model/Document">Document</a> is a record inside of a <a href="../unself_model/Collection">Collection</a>.</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="../unself_model/Base">Base</a></li>\n    </ul>\n  </dd>\n        \n\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="Document" class="callable">\n          <span class="name"><a href="../unself_model/Document/Document.constructor">Document</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-collectionId"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionId</span>, </span><span class="parameter" id="-param-collectionName"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionName</span>, </span><span class="parameter" id="-param-archive"><span>required</span> <span class="type-annotation"><a href="../unself_model/Archive">Archive</a></span> <span class="parameter-name">archive</span>, </span><span class="parameter" id="-param-extra"><span>@<a href="../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span>)</span>\n        </dt>\n        <dd>\n          <a href="../unself_model/Document">Document</a> is a record inside of a <a href="../unself_model/Collection">Collection</a>.\n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="Document.fromJson" class="callable">\n          <span class="name"><a href="../unself_model/Document/Document.fromJson">Document.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>\n        </dt>\n        <dd>\n          Creates a <a href="../unself_model/Document">Document</a> from Json map\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="archive" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/archive">archive</a></span>\n  <span class="signature">\u2192 <a href="../unself_model/Archive">Archive</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="collectionId" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/collectionId">collectionId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="collectionName" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/collectionName">collectionName</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="copyWith" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/copyWith">copyWith</a></span>\n  <span class="signature">\u2192 $DocumentCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/Document">Document</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="created" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="extra" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="updated" class="property inherited">\n  <span class="name"><a href="../unself_model/Document/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable inherited">\n  <span class="name"><a href="../unself_model/Document/toJson">toJson</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">Document class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Document">Document</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/User">User</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/Document#constructors">Constructors</a></li>\n          <li><a href="../unself_model/Document/Document.constructor">Document</a></li>\n          <li><a href="../unself_model/Document/Document.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_model/Document#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../unself_model/Document/archive">archive</a></li>\n          <li class="inherited"><a href="../unself_model/Document/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="../unself_model/Document/collectionName">collectionName</a></li>\n          <li class="inherited"><a href="../unself_model/Document/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../unself_model/Document/created">created</a></li>\n          <li class="inherited"><a href="../unself_model/Document/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../unself_model/Document/id">id</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../unself_model/Document/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Document#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../unself_model/Document/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Document#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Document class",sidebar_label:"Document",hide_title:!0},o=void 0,c={unversionedId:"api/unself_model/Document/Document",id:"api/unself_model/Document/Document",title:"Document class",description:"",source:"@site/developer/api/unself_model/Document/Document.mdx",sourceDirName:"api/unself_model/Document",slug:"/api/unself_model/Document/",permalink:"/developer/api/unself_model/Document/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Document/Document.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"Document class",sidebar_label:"Document",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CollectionType",permalink:"/developer/api/unself_model/CollectionType"},next:{title:"Document const constructor",permalink:"/developer/api/unself_model/Document/Document.constructor"}},d={},p=[],u={toc:p};function f(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);