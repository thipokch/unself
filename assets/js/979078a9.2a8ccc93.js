"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[22065],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var t=a(67294);function s(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,s=function(n,e){if(null==n)return{};var a,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(s[a]=n[a]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}var c=t.createContext({}),o=function(n){var e=t.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},p=function(n){var e=o(n.components);return t.createElement(c.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var a=n.components,s=n.mdxType,r=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=o(a),f=s,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return a?t.createElement(h,i(i({ref:e},p),{},{components:a})):t.createElement(h,i({ref:e},p))}));function h(n,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=a.length,i=new Array(r);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[d]="string"==typeof n?n:s,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},95276:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(87462),s=a(67294),r=a(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n\n        <h1>\n          <span class="kind-enum">Position</span>\n          enum \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n\n        </h1>\n      </div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark eNum-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></li>\n      <li>Position</li>\n    </ul>\n  </dd>\n\n        \n        \n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="Position" class="callable">\n          <span class="name"><a href="../unself_unpack/Position/Position.constructor">Position</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="values">\n      <h2>Values</h2>\n\n      <dl class="properties">\n          <dt id="UNDEFINED" class="constant">\n    <span class="name ">UNDEFINED</span>\n  <span class="signature">\u2192 const <a href="../unself_unpack/Position">Position</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="BEFORE" class="constant">\n    <span class="name ">BEFORE</span>\n  <span class="signature">\u2192 const <a href="../unself_unpack/Position">Position</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="AT" class="constant">\n    <span class="name ">AT</span>\n  <span class="signature">\u2192 const <a href="../unself_unpack/Position">Position</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="AFTER" class="constant">\n    <span class="name ">AFTER</span>\n  <span class="signature">\u2192 const <a href="../unself_unpack/Position">Position</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="NOT" class="constant">\n    <span class="name ">NOT</span>\n  <span class="signature">\u2192 const <a href="../unself_unpack/Position">Position</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n      </dl>\n    </section>\n\n    <section class="\n          summary\n          offset-anchorinherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="index" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  A numeric identifier for the enumerated value.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n  <section class="summary offset-anchor" id="constants">\n    <h2>Constants</h2>\n\n    <dl class="properties">\n        <dt id="values" class="constant">\n    <span class="name "><a href="../unself_unpack/Position/values-constant">values</a></span>\n  <span class="signature">\u2192 const <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack/Position">Position</a></span>&gt;</span></span>\n  \n\n</dt>\n<dd>\n  A constant List of the values in this enum, in order of their declaration.\n  \n\n    <div>\n      <span class="signature"><code>[UNDEFINED, BEFORE, AT, AFTER, NOT]</code></span>\n    </div>\n</dd>\n\n    </dl>\n  </section>\n  </div>\x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">Position enum</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>\n        <li><a href="../unself_unpack/Export">Export</a></li>\n        <li><a href="../unself_unpack/Import">Import</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/Normalize">Normalize</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookSchema">facebookSchema</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#functions">Functions</a></li>\n        <li><a href="../unself_unpack/flatten">flatten</a></li>\n        <li><a href="../unself_unpack/includeAccumulator">includeAccumulator</a></li>\n        <li><a href="../unself_unpack/listAccumulator">listAccumulator</a></li>\n        <li><a href="../unself_unpack/mapAccumulator">mapAccumulator</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#enums">Enums</a></li>\n        <li><a href="../unself_unpack/Position">Position</a></li>\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#typedefs">Typedefs</a></li>\n        <li><a href="../unself_unpack/Accumulator">Accumulator</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_unpack/Position#constructors">Constructors</a></li>\n          <li><a href="../unself_unpack/Position/Position.constructor">Position</a></li>\n\n        <li class="section-title"><a href="../unself_unpack/Position#values">Values</a></li>\n          <li><a href="../unself_unpack/Position#UNDEFINED">UNDEFINED</a></li>\n          <li><a href="../unself_unpack/Position#BEFORE">BEFORE</a></li>\n          <li><a href="../unself_unpack/Position#AT">AT</a></li>\n          <li><a href="../unself_unpack/Position#AFTER">AFTER</a></li>\n          <li><a href="../unself_unpack/Position#NOT">NOT</a></li>\n\n        <li class="section-title inherited">\n          <a href="../unself_unpack/Position#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack/Position#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack/Position#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../unself_unpack/Position#constants">Constants</a></li>\n          <li><a href="../unself_unpack/Position/values-constant">values</a></li>\n</ol>\n\n  </div>\x3c!-- /.sidebar-offcanvas --\x3e\n\n</main>'}})}const l={title:"Position enum",sidebar_label:"Position",hide_title:!0},c=void 0,o={unversionedId:"api/unself_unpack/Position",id:"api/unself_unpack/Position",title:"Position enum",description:"",source:"@site/developer/api/unself_unpack/Position.mdx",sourceDirName:"api/unself_unpack",slug:"/api/unself_unpack/Position",permalink:"/developer/api/unself_unpack/Position",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/Position.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Position enum",sidebar_label:"Position",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"values",permalink:"/developer/api/unself_unpack/Position/values"},next:{title:"UnpackService",permalink:"/developer/api/unself_unpack/UnpackService/"}},p={},d=[],u={toc:d};function f(n){let{components:e,...a}=n;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);