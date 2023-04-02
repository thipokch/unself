"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77305],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var s=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,s,t=function(e,n){if(null==e)return{};var a,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=s.createContext({}),d=function(e){var n=s.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return s.createElement(o.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=t,h=p["".concat(o,".").concat(u)]||p[u]||f[u]||r;return a?s.createElement(h,l(l({ref:n},c),{},{components:a})):s.createElement(h,l({ref:n},c))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:t,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58719:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var s=a(87462),t=a(67294),r=a(3905);function l(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">JsonVersionConstraint</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="https://pub.dev/documentation/json_annotation/4.8.0/json_annotation/JsonConverter-class.html">JsonConverter</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></li>\n    </ul>\n  </dd>\n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="JsonVersionConstraint" class="callable">\n          <span class="name"><a href="../unself_model/JsonVersionConstraint/JsonVersionConstraint.constructor">JsonVersionConstraint</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="fromJson" class="callable">\n  <span class="name"><a href="../unself_model/JsonVersionConstraint/fromJson">fromJson</a></span><span class="signature">(<wbr><span class="parameter" id="fromJson-param-_"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">_</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable">\n  <span class="name"><a href="../unself_model/JsonVersionConstraint/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-_"><span class="type-annotation"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span> <span class="parameter-name">_</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">JsonVersionConstraint class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>\n        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Entity">Entity</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/Flat">Flat</a></li>\n        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>\n        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonPart">JsonPart</a></li>\n        <li><a href="../unself_model/JsonRef">JsonRef</a></li>\n        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>\n        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>\n        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Ref">Ref</a></li>\n        <li><a href="../unself_model/RefList">RefList</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>\n        <li><a href="../unself_model/Struct">Struct</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="../unself_model/Union">Union</a></li>\n        <li><a href="../unself_model/UnionList">UnionList</a></li>\n        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>\n        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>\n        <li><a href="../unself_model/DoCallback">DoCallback</a></li>\n        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/JsonVersionConstraint#constructors">Constructors</a></li>\n          <li><a href="../unself_model/JsonVersionConstraint/JsonVersionConstraint.constructor">JsonVersionConstraint</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_model/JsonVersionConstraint#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_model/JsonVersionConstraint#instance-methods">Methods</a></li>\n          <li><a href="../unself_model/JsonVersionConstraint/fromJson">fromJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_model/JsonVersionConstraint/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/JsonVersionConstraint#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"JsonVersionConstraint class",sidebar_label:"JsonVersionConstraint",hide_title:!0},o=void 0,d={unversionedId:"api/unself_model/JsonVersionConstraint/JsonVersionConstraint",id:"api/unself_model/JsonVersionConstraint/JsonVersionConstraint",title:"JsonVersionConstraint class",description:"",source:"@site/developer/api/unself_model/JsonVersionConstraint/JsonVersionConstraint.mdx",sourceDirName:"api/unself_model/JsonVersionConstraint",slug:"/api/unself_model/JsonVersionConstraint/",permalink:"/developer/api/unself_model/JsonVersionConstraint/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonVersionConstraint/JsonVersionConstraint.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"JsonVersionConstraint class",sidebar_label:"JsonVersionConstraint",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/developer/api/unself_model/JsonVersion/toJson"},next:{title:"JsonVersionConstraint const constructor",permalink:"/developer/api/unself_model/JsonVersionConstraint/JsonVersionConstraint.constructor"}},c={},p=[],f={toc:p};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);