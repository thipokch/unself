"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4223],{3905:(a,s,e)=>{e.d(s,{Zo:()=>d,kt:()=>f});var t=e(67294);function n(a,s,e){return s in a?Object.defineProperty(a,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[s]=e,a}function l(a,s){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),e.push.apply(e,t)}return e}function r(a){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?l(Object(e),!0).forEach((function(s){n(a,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(e,s))}))}return a}function p(a,s){if(null==a)return{};var e,t,n=function(a,s){if(null==a)return{};var e,t,n={},l=Object.keys(a);for(t=0;t<l.length;t++)e=l[t],s.indexOf(e)>=0||(n[e]=a[e]);return n}(a,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)e=l[t],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var i=t.createContext({}),o=function(a){var s=t.useContext(i),e=s;return a&&(e="function"==typeof a?a(s):r(r({},s),a)),e},d=function(a){var s=o(a.components);return t.createElement(i.Provider,{value:s},a.children)},c="mdxType",u={inlineCode:"code",wrapper:function(a){var s=a.children;return t.createElement(t.Fragment,{},s)}},m=t.forwardRef((function(a,s){var e=a.components,n=a.mdxType,l=a.originalType,i=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),c=o(e),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return e?t.createElement(f,r(r({ref:s},d),{},{components:e})):t.createElement(f,r({ref:s},d))}));function f(a,s){var e=arguments,n=s&&s.mdxType;if("string"==typeof a||n){var l=e.length,r=new Array(l);r[0]=m;var p={};for(var i in s)hasOwnProperty.call(s,i)&&(p[i]=s[i]);p.originalType=a,p[c]="string"==typeof a?a:n,r[1]=p;for(var o=2;o<l;o++)r[o]=e[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,e)}m.displayName="MDXCreateElement"},30802:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var t=e(87462),n=e(67294),l=e(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">FieldCompanion</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion-class.html">UpdateCompanion</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_local_database/FieldData">FieldData</a></span>&gt;</span></li>\n      <li>FieldCompanion</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="FieldCompanion" class="callable">\n          <span class="name"><a href="../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">id</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-created"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span> <span class="parameter-name">created</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-updated"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span> <span class="parameter-name">updated</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter">FieldType</span>&gt;</span></span> <span class="parameter-name">type</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">name</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">system</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">required</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">unique</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">collectionId</span> = <span class="default-value">const Value.absent()</span>, </span><span class="parameter" id="-param-extra"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">extra</span> = <span class="default-value">const Value.absent()</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n        <dt id="FieldCompanion.insert" class="callable">\n          <span class="name"><a href="../unself_local_database/FieldCompanion/FieldCompanion.insert">FieldCompanion.insert</a></span><span class="signature">(<span class="parameter" id="insert-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="insert-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="insert-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="insert-param-type"><span>required</span> <span class="type-annotation">FieldType</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="insert-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="insert-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span><span class="parameter" id="insert-param-required"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">required</span>, </span><span class="parameter" id="insert-param-unique"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="insert-param-collectionId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collectionId</span>, </span><span class="parameter" id="insert-param-extra"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">extra</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="collectionId" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/collectionId">collectionId</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="created" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="extra" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="name" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/name">name</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="required" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/required">required</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="system" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/system">system</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="type" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/type">type</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter">FieldType</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="unique" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/unique">unique</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="updated" class="property">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="copyWith" class="callable">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="copyWith-param-created"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">created</span>, </span><span class="parameter" id="copyWith-param-updated"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="copyWith-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter">FieldType</span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span><span class="parameter" id="copyWith-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">required</span>, </span><span class="parameter" id="copyWith-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="copyWith-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">collectionId</span>, </span><span class="parameter" id="copyWith-param-extra"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">extra</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_local_database/FieldCompanion">FieldCompanion</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toColumns" class="callable">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/toColumns">toColumns</a></span><span class="signature">(<wbr><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Converts this object into a map of column names to expressions to insert\nor update.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/toString">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  A string representation of this object.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n  <section class="summary offset-anchor" id="static-methods">\n    <h2>Static Methods</h2>\n    <dl class="callables">\n        <dt id="custom" class="callable">\n  <span class="name"><a href="../unself_local_database/FieldCompanion/custom">custom</a></span><span class="signature">(<wbr><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span><span class="parameter" id="custom-param-created"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">created</span>, </span><span class="parameter" id="custom-param-updated"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="custom-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span><span class="parameter" id="custom-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="custom-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span><span class="parameter" id="custom-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">required</span>, </span><span class="parameter" id="custom-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">unique</span>, </span><span class="parameter" id="custom-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">collectionId</span>, </span><span class="parameter" id="custom-param-extra"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">extra</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_local_database/FieldData">FieldData</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n    </dl>\n  </section>\n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_local_database</a></li>\n  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li class="self-crumb">FieldCompanion class</li>\n</ol>\n\n\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="../unself_local_database/$FieldTable">$FieldTable</a></li>\n        <li><a href="../unself_local_database/Collection">Collection</a></li>\n        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>\n        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>\n        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>\n        <li><a href="../unself_local_database/Field">Field</a></li>\n        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="../unself_local_database/FieldData">FieldData</a></li>\n        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>\n        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>\n        <li><a href="../unself_local_database/connect">connect</a></li>\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_local_database/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_local_database/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/created">created</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/extra">extra</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/unique">unique</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/updated">updated</a></li>\n\n        <li class="section-title"><a href="../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_local_database/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const p={title:"FieldCompanion class",sidebar_label:"FieldCompanion",hide_title:!0},i=void 0,o={unversionedId:"api/unself_local_database/FieldCompanion/FieldCompanion",id:"api/unself_local_database/FieldCompanion/FieldCompanion",title:"FieldCompanion class",description:"",source:"@site/developer/api/unself_local_database/FieldCompanion/FieldCompanion.mdx",sourceDirName:"api/unself_local_database/FieldCompanion",slug:"/api/unself_local_database/FieldCompanion/",permalink:"/developer/api/unself_local_database/FieldCompanion/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldCompanion/FieldCompanion.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"FieldCompanion class",sidebar_label:"FieldCompanion",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updated",permalink:"/developer/api/unself_local_database/Field/updated"},next:{title:"FieldCompanion const constructor",permalink:"/developer/api/unself_local_database/FieldCompanion/FieldCompanion.constructor"}},d={},c=[],u={toc:c};function m(a){let{components:s,...e}=a;return(0,l.kt)("wrapper",(0,t.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);