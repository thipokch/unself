"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[31218],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var s=n(67294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,s)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,s,t=function(a,e){if(null==a)return{};var n,s,t={},l=Object.keys(a);for(s=0;s<l.length;s++)n=l[s],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(s=0;s<l.length;s++)n=l[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var i=s.createContext({}),o=function(a){var e=s.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},d=function(a){var e=o(a.components);return s.createElement(i.Provider,{value:e},a.children)},c="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(a,e){var n=a.components,t=a.mdxType,l=a.originalType,i=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),c=o(n),m=t,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?s.createElement(f,r(r({ref:e},d),{},{components:n})):s.createElement(f,r({ref:e},d))}));function f(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var l=n.length,r=new Array(l);r[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[c]="string"==typeof a?a:t,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96072:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var s=n(87462),t=n(67294),l=n(3905);function r(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">JsonRefValue</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>\n    </ul>\n  </dd>\n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>\n          <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>\n        </ul></dd>\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="JsonRefValue.fromJson" class="callable">\n          <span class="name"><a href="../unself_model/JsonRefValue/JsonRefValue.fromJson">JsonRefValue.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span>)</span>\n        </dt>\n        <dd>\n          Creates a <a href="../unself_model/JsonRefValue">JsonRefValue</a> from Json map\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="JsonRefValue.slugFrom" class="callable">\n          <span class="name"><a href="../unself_model/JsonRefValue/JsonRefValue.slugFrom">JsonRefValue.slugFrom</a></span><span class="signature">(<span class="parameter" id="slugFrom-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="JsonRefValue.valueFrom" class="callable">\n          <span class="name"><a href="../unself_model/JsonRefValue/JsonRefValue.valueFrom">JsonRefValue.valueFrom</a></span><span class="signature">(<span class="parameter" id="valueFrom-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="copyWith" class="property inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/copyWith">copyWith</a></span>\n  <span class="signature">\u2192 $JsonRefValueCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonRefValue">JsonRefValue</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="name" class="property inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/name">name</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="map" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-valueFrom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ValueFrom">ValueFrom</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-slugFrom"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/SlugFrom">SlugFrom</a></span> <span class="parameter-name">value</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="mapOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-valueFrom">{<span class="type-annotation">TResult?</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ValueFrom">ValueFrom</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-slugFrom"><span class="type-annotation">TResult?</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/SlugFrom">SlugFrom</a></span> <span class="parameter-name">value</span></span>)?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeMap" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-valueFrom">{<span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ValueFrom">ValueFrom</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-slugFrom"><span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/SlugFrom">SlugFrom</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeWhen" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-valueFrom">{<span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)?, </span><span class="parameter" id="maybeWhen-param-slugFrom"><span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/toJson">toJson</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="when" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-valueFrom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>), </span><span class="parameter" id="when-param-slugFrom"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="whenOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-valueFrom">{<span class="type-annotation">TResult?</span> <span class="parameter-name">valueFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)?, </span><span class="parameter" id="whenOrNull-param-slugFrom"><span class="type-annotation">TResult?</span> <span class="parameter-name">slugFrom</span>(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">JsonRefValue class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>\n        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Entity">Entity</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/Flat">Flat</a></li>\n        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>\n        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonPart">JsonPart</a></li>\n        <li><a href="../unself_model/JsonRef">JsonRef</a></li>\n        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>\n        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>\n        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Ref">Ref</a></li>\n        <li><a href="../unself_model/RefList">RefList</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>\n        <li><a href="../unself_model/Struct">Struct</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="../unself_model/Union">Union</a></li>\n        <li><a href="../unself_model/UnionList">UnionList</a></li>\n        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>\n        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>\n        <li><a href="../unself_model/DoCallback">DoCallback</a></li>\n        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/JsonRefValue#constructors">Constructors</a></li>\n          <li><a href="../unself_model/JsonRefValue/JsonRefValue.fromJson">fromJson</a></li>\n          <li><a href="../unself_model/JsonRefValue/JsonRefValue.slugFrom">slugFrom</a></li>\n          <li><a href="../unself_model/JsonRefValue/JsonRefValue.valueFrom">valueFrom</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_model/JsonRefValue#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/JsonRefValue#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/map">map</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/when">when</a></li>\n          <li class="inherited"><a href="../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/JsonRefValue#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const p={title:"JsonRefValue class",sidebar_label:"JsonRefValue",hide_title:!0},i=void 0,o={unversionedId:"api/unself_model/JsonRefValue/JsonRefValue",id:"api/unself_model/JsonRefValue/JsonRefValue",title:"JsonRefValue class",description:"",source:"@site/developer/api/unself_model/JsonRefValue/JsonRefValue.mdx",sourceDirName:"api/unself_model/JsonRefValue",slug:"/api/unself_model/JsonRefValue/",permalink:"/developer/api/unself_model/JsonRefValue/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRefValue/JsonRefValue.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"JsonRefValue class",sidebar_label:"JsonRefValue",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"whenOrNull",permalink:"/developer/api/unself_model/JsonRefList/whenOrNull"},next:{title:"JsonRefValue.valueFrom const constructor",permalink:"/developer/api/unself_model/JsonRefValue/JsonRefValue.constructor"}},d={},c=[],u={toc:c};function m(a){let{components:e,...n}=a;return(0,l.kt)("wrapper",(0,s.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);