"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97880],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,p=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),d=o(t),f=s,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,r(r({ref:e},c),{},{components:t})):n.createElement(m,r({ref:e},c))}));function m(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,r=new Array(l);r[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[d]="string"==typeof a?a:s,r[1]=i;for(var o=2;o<l;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63101:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">CollectionData</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a></li>\n      <li>CollectionData</li>\n    </ul>\n  </dd>\n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_local_database/CollectionData">CollectionData</a></span>&gt;</span></li>\n    </ul>\n  </dd>\n        \n\n\n        <dt>Available Extensions</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        </ul></dd>\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="CollectionData" class="callable">\n          <span class="name"><a href="../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation">CollectionType</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span><span class="parameter" id="-param-listRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">listRule</span>, </span><span class="parameter" id="-param-viewRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">viewRule</span>, </span><span class="parameter" id="-param-createRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">createRule</span>, </span><span class="parameter" id="-param-updateRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">updateRule</span>, </span><span class="parameter" id="-param-deleteRule"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">deleteRule</span>, </span><span class="parameter" id="-param-extra"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">extra</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n        <dt id="CollectionData.fromJson" class="callable">\n          <span class="name"><a href="../unself_local_database/CollectionData/CollectionData.fromJson">CollectionData.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span><span class="parameter" id="fromJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="created" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="createRule" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/createRule">createRule</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="deleteRule" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/deleteRule">deleteRule</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="extra" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/hashCode">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd>\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="id" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="listRule" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/listRule">listRule</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="name" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/name">name</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="system" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/system">system</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="type" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/type">type</a></span>\n  <span class="signature">\u2192 CollectionType</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="updated" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="updateRule" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/updateRule">updateRule</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="viewRule" class="property">\n  <span class="name"><a href="../unself_local_database/CollectionData/viewRule">viewRule</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="copyWith" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-created"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a>?</span> <span class="parameter-name">created</span>, </span><span class="parameter" id="copyWith-param-updated"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a>?</span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="copyWith-param-type"><span class="type-annotation">CollectionType?</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">system</span>, </span><span class="parameter" id="copyWith-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">listRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">viewRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">createRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">updateRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">deleteRule</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="copyWith-param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">extra</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_local_database/CollectionData">CollectionData</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toColumns" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Converts this object into a map of column names to expressions to insert\nor update.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="toCompanion" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/toCompanion">toCompanion</a></span><span class="signature">(<wbr><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="toJson" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/toJson">toJson</a></span><span class="signature">(<wbr><span class="parameter" id="toJson-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Converts this object into a representation that can be encoded with\n<code>json</code>. The <code>serializer</code> can be used to configure how individual values\nwill be encoded. By default, <a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will\nbe used. See <a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="toJsonString" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></span><span class="signature">(<wbr><span class="parameter" id="toJsonString-param-serializer">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer-class.html">ValueSerializer</a>?</span> <span class="parameter-name">serializer</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Converts this object into a json representation. The <code>serializer</code> can be\nused to configure how individual values will be encoded. By default,\n<a href="https://pub.dev/documentation/drift/2.4.2/drift/DriftRuntimeOptions/defaultSerializer.html">DriftRuntimeOptions.defaultSerializer</a> will be used. See\n<a href="https://pub.dev/documentation/drift/2.4.2/drift/ValueSerializer/ValueSerializer.defaults.html">ValueSerializer.defaults</a> for details.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/toString">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  A string representation of this object.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable">\n  <span class="name"><a href="../unself_local_database/CollectionData/operator_equals">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  The equality operator.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_local_database</a></li>\n  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li class="self-crumb">CollectionData class</li>\n</ol>\n\n\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="../unself_local_database/$FieldTable">$FieldTable</a></li>\n        <li><a href="../unself_local_database/Collection">Collection</a></li>\n        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>\n        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>\n        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>\n        <li><a href="../unself_local_database/Field">Field</a></li>\n        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="../unself_local_database/FieldData">FieldData</a></li>\n        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>\n        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>\n        <li><a href="../unself_local_database/connect">connect</a></li>\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_local_database/CollectionData#constructors">Constructors</a></li>\n          <li><a href="../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>\n          <li><a href="../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_local_database/CollectionData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_local_database/CollectionData/created">created</a></li>\n          <li><a href="../unself_local_database/CollectionData/createRule">createRule</a></li>\n          <li><a href="../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>\n          <li><a href="../unself_local_database/CollectionData/extra">extra</a></li>\n          <li><a href="../unself_local_database/CollectionData/hashCode">hashCode</a></li>\n          <li><a href="../unself_local_database/CollectionData/id">id</a></li>\n          <li><a href="../unself_local_database/CollectionData/listRule">listRule</a></li>\n          <li><a href="../unself_local_database/CollectionData/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_local_database/CollectionData/system">system</a></li>\n          <li><a href="../unself_local_database/CollectionData/type">type</a></li>\n          <li><a href="../unself_local_database/CollectionData/updated">updated</a></li>\n          <li><a href="../unself_local_database/CollectionData/updateRule">updateRule</a></li>\n          <li><a href="../unself_local_database/CollectionData/viewRule">viewRule</a></li>\n\n        <li class="section-title"><a href="../unself_local_database/CollectionData#instance-methods">Methods</a></li>\n          <li><a href="../unself_local_database/CollectionData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_local_database/CollectionData/toColumns">toColumns</a></li>\n          <li><a href="../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>\n          <li><a href="../unself_local_database/CollectionData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../unself_local_database/CollectionData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../unself_local_database/CollectionData#operators">Operators</a></li>\n          <li><a href="../unself_local_database/CollectionData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"CollectionData class",sidebar_label:"CollectionData",hide_title:!0},p=void 0,o={unversionedId:"api/unself_local_database/CollectionData/CollectionData",id:"api/unself_local_database/CollectionData/CollectionData",title:"CollectionData class",description:"",source:"@site/developer/api/unself_local_database/CollectionData/CollectionData.mdx",sourceDirName:"api/unself_local_database/CollectionData",slug:"/api/unself_local_database/CollectionData/",permalink:"/developer/api/unself_local_database/CollectionData/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionData/CollectionData.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"CollectionData class",sidebar_label:"CollectionData",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"saveCollection",permalink:"/developer/api/unself_local_database/CollectionDao/saveCollection"},next:{title:"CollectionData.fromJson factory constructor",permalink:"/developer/api/unself_local_database/CollectionData/CollectionData.constructor"}},c={},d=[],u={toc:d};function f(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);