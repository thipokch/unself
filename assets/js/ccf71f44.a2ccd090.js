"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60273],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var s=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,s,t=function(e,a){if(null==e)return{};var n,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=s.createContext({}),o=function(e){var a=s.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=o(e.components);return s.createElement(d.Provider,{value:a},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(n),u=t,h=c["".concat(d,".").concat(u)]||c[u]||f[u]||l;return n?s.createElement(h,r(r({ref:a},p),{},{components:n})):s.createElement(h,r({ref:a},p))}));function h(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[c]="string"==typeof e?e:t,r[1]=i;for(var o=2;o<l;o++)r[o]=n[o];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72422:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(87462),t=n(67294),l=n(3905);function r(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">Field</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>{@template field}\n<a href="../unself_model/Field">Field</a> is a field inside of a <a href="../unself_model/Collection">Collection</a>\'s schema.</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="../unself_model/Base">Base</a></li>\n    </ul>\n  </dd>\n        \n\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="Field" class="callable">\n          <span class="name"><a href="../unself_model/Field/Field.constructor">Field</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation"><a href="../unself_model/FieldType">FieldType</a></span> <span class="parameter-name">type</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span><span class="parameter" id="-param-required"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">required</span>, </span><span class="parameter" id="-param-unique"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="-param-collection"><span>required</span> <span class="type-annotation"><a href="../unself_model/Collection">Collection</a></span> <span class="parameter-name">collection</span>, </span><span class="parameter" id="-param-extra"><span>@<a href="../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="Field.fromJson" class="callable">\n          <span class="name"><a href="../unself_model/Field/Field.fromJson">Field.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>\n        </dt>\n        <dd>\n          Creates a <a href="../unself_model/Field">Field</a> from Json map\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="collection" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/collection">collection</a></span>\n  <span class="signature">\u2192 <a href="../unself_model/Collection">Collection</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/collection">collection</a> is the <a href="../unself_model/Collection">Collection</a> that the <a href="../unself_model/Field">Field</a> belongs to.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="copyWith" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/copyWith">copyWith</a></span>\n  <span class="signature">\u2192 $FieldCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/Field">Field</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="created" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/created">created</a> is the date and time when the <a href="../unself_model/Field">Field</a> was created inside unself app.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="extra" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/extra">extra</a> is a map of additional properties.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/id">id</a> is unself unique identifier for the <a href="../unself_model/Field">Field</a>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="name" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/name">name</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/name">name</a> is the name of the <a href="../unself_model/Field">Field</a>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="required" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/required">required</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/required">required</a> is a flag that indicates if the <a href="../unself_model/Field">Field</a> is required.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="system" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/system">system</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/system">system</a> is a flag that indicates if the <a href="../unself_model/Field">Field</a> is a system field.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="type" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/type">type</a></span>\n  <span class="signature">\u2192 <a href="../unself_model/FieldType">FieldType</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/type">type</a> is the data type of the <a href="../unself_model/Field">Field</a>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="unique" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/unique">unique</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/unique">unique</a> is a flag that indicates if the <a href="../unself_model/Field">Field</a> must be unique.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="updated" class="property inherited">\n  <span class="name"><a href="../unself_model/Field/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd class="inherited">\n  <a href="../unself_model/Field/updated">updated</a> is the date and time when the <a href="../unself_model/Field">Field</a> was last updated inside unself app.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable inherited">\n  <span class="name"><a href="../unself_model/Field/toJson">toJson</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">Field class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>\n        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Entity">Entity</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/Flat">Flat</a></li>\n        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>\n        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonPart">JsonPart</a></li>\n        <li><a href="../unself_model/JsonRef">JsonRef</a></li>\n        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>\n        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>\n        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Ref">Ref</a></li>\n        <li><a href="../unself_model/RefList">RefList</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>\n        <li><a href="../unself_model/Struct">Struct</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="../unself_model/Union">Union</a></li>\n        <li><a href="../unself_model/UnionList">UnionList</a></li>\n        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>\n        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>\n        <li><a href="../unself_model/DoCallback">DoCallback</a></li>\n        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/Field#constructors">Constructors</a></li>\n          <li><a href="../unself_model/Field/Field.constructor">Field</a></li>\n          <li><a href="../unself_model/Field/Field.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_model/Field#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../unself_model/Field/collection">collection</a></li>\n          <li class="inherited"><a href="../unself_model/Field/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../unself_model/Field/created">created</a></li>\n          <li class="inherited"><a href="../unself_model/Field/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../unself_model/Field/id">id</a></li>\n          <li class="inherited"><a href="../unself_model/Field/name">name</a></li>\n          <li class="inherited"><a href="../unself_model/Field/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../unself_model/Field/system">system</a></li>\n          <li class="inherited"><a href="../unself_model/Field/type">type</a></li>\n          <li class="inherited"><a href="../unself_model/Field/unique">unique</a></li>\n          <li class="inherited"><a href="../unself_model/Field/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Field#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../unself_model/Field/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Field#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Field class",sidebar_label:"Field",hide_title:!0},d=void 0,o={unversionedId:"api/unself_model/Field/Field",id:"api/unself_model/Field/Field",title:"Field class",description:"",source:"@site/developer/api/unself_model/Field/Field.mdx",sourceDirName:"api/unself_model/Field",slug:"/api/unself_model/Field/",permalink:"/developer/api/unself_model/Field/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Field/Field.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Field class",sidebar_label:"Field",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"name",permalink:"/developer/api/unself_model/Entity/name"},next:{title:"Field const constructor",permalink:"/developer/api/unself_model/Field/Field.constructor"}},p={},c=[],f={toc:c};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);