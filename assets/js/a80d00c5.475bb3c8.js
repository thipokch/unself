"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[823],{3905:(a,s,e)=>{e.d(s,{Zo:()=>o,kt:()=>f});var n=e(67294);function t(a,s,e){return s in a?Object.defineProperty(a,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[s]=e,a}function r(a,s){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),e.push.apply(e,n)}return e}function l(a){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(Object(e),!0).forEach((function(s){t(a,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(e,s))}))}return a}function p(a,s){if(null==a)return{};var e,n,t=function(a,s){if(null==a)return{};var e,n,t={},r=Object.keys(a);for(n=0;n<r.length;n++)e=r[n],s.indexOf(e)>=0||(t[e]=a[e]);return t}(a,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)e=r[n],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var i=n.createContext({}),c=function(a){var s=n.useContext(i),e=s;return a&&(e="function"==typeof a?a(s):l(l({},s),a)),e},o=function(a){var s=c(a.components);return n.createElement(i.Provider,{value:s},a.children)},d="mdxType",m={inlineCode:"code",wrapper:function(a){var s=a.children;return n.createElement(n.Fragment,{},s)}},h=n.forwardRef((function(a,s){var e=a.components,t=a.mdxType,r=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),d=c(e),h=t,f=d["".concat(i,".").concat(h)]||d[h]||m[h]||r;return e?n.createElement(f,l(l({ref:s},o),{},{components:e})):n.createElement(f,l({ref:s},o))}));function f(a,s){var e=arguments,t=s&&s.mdxType;if("string"==typeof a||t){var r=e.length,l=new Array(r);l[0]=h;var p={};for(var i in s)hasOwnProperty.call(s,i)&&(p[i]=s[i]);p.originalType=a,p[d]="string"==typeof a?a:t,l[1]=p;for(var c=2;c<r;c++)l[c]=e[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},35957:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=e(87462),t=e(67294),r=e(3905);function l(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">JsonPart</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n      <li>JsonPart</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="JsonPart" class="callable">\n          <span class="name"><a href="../unself_model/JsonPart/JsonPart.constructor">JsonPart</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-part"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="-param-schema"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="-param-extra"><span>@<a href="../unself_model/JsonExtra">JsonExtra</a>()</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="JsonPart.fromJson" class="callable">\n          <span class="name"><a href="../unself_model/JsonPart/JsonPart.fromJson">JsonPart.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="copyWith" class="property">\n  <span class="name"><a href="../unself_model/JsonPart/copyWith">copyWith</a></span>\n  <span class="signature">\u2192 _$$JsonPartCopyWith<span class="signature">&lt;<wbr><span class="type-parameter">_$JsonPart</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="extra" class="property">\n  <span class="name"><a href="../unself_model/JsonPart/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/JsonPart/extra">extra</a> is a map of additional properties.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property">\n  <span class="name"><a href="../unself_model/JsonPart/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/JsonPart/id">id</a> is unself unique identifier for the ArchiveSchemaPart.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="part" class="property">\n  <span class="name"><a href="../unself_model/JsonPart/part">part</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <code>file</code> is path of the ArchiveSchemaPart.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="schema" class="property">\n  <span class="name"><a href="../unself_model/JsonPart/schema">schema</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/JsonPart/schema">schema</a> is a list of <code>JsonSchema</code>s.\n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="map" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-json">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/JsonPart">JsonPart</a></span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-zipJson"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></span> <span class="parameter-name">value</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="mapOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-json">{<span class="type-annotation">TResult?</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/JsonPart">JsonPart</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-zipJson"><span class="type-annotation">TResult?</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></span> <span class="parameter-name">value</span></span>)?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeMap" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-json">{<span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/JsonPart">JsonPart</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-zipJson"><span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-value"><span class="type-annotation"><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeWhen" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-json">{<span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="maybeWhen-param-zipJson"><span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="read" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/read">read</a></span><span class="signature">(<wbr><span class="parameter" id="read-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_model/ArchiveData">ArchiveData</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toJson" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/toJson">toJson</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="when" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-json">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>), </span><span class="parameter" id="when-param-zipJson"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="whenOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-json">{<span class="type-annotation">TResult?</span> <span class="parameter-name">json</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?, </span><span class="parameter" id="whenOrNull-param-zipJson"><span class="type-annotation">TResult?</span> <span class="parameter-name">zipJson</span>(<span class="parameter" id="param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="param-part"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">part</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/JsonSchema">JsonSchema</a></span>&gt;</span></span> <span class="parameter-name">schema</span>, </span><span class="parameter" id="param-extra"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span></span>)?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">JsonPart abstract class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>\n        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Entity">Entity</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/Flat">Flat</a></li>\n        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>\n        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonPart">JsonPart</a></li>\n        <li><a href="../unself_model/JsonRef">JsonRef</a></li>\n        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>\n        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>\n        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Ref">Ref</a></li>\n        <li><a href="../unself_model/RefList">RefList</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>\n        <li><a href="../unself_model/Struct">Struct</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="../unself_model/Union">Union</a></li>\n        <li><a href="../unself_model/UnionList">UnionList</a></li>\n        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>\n        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>\n        <li><a href="../unself_model/DoCallback">DoCallback</a></li>\n        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/JsonPart#constructors">Constructors</a></li>\n          <li><a href="../unself_model/JsonPart/JsonPart.constructor">JsonPart</a></li>\n          <li><a href="../unself_model/JsonPart/JsonPart.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_model/JsonPart#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_model/JsonPart/copyWith">copyWith</a></li>\n          <li><a href="../unself_model/JsonPart/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_model/JsonPart/id">id</a></li>\n          <li><a href="../unself_model/JsonPart/part">part</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_model/JsonPart/schema">schema</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/JsonPart#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/map">map</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/read">read</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/when">when</a></li>\n          <li class="inherited"><a href="../unself_model/ArchiveSchemaPart/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/JsonPart#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const p={title:"JsonPart abstract class",sidebar_label:"JsonPart",hide_title:!0},i=void 0,c={unversionedId:"api/unself_model/JsonPart/JsonPart",id:"api/unself_model/JsonPart/JsonPart",title:"JsonPart abstract class",description:"",source:"@site/developer/api/unself_model/JsonPart/JsonPart.mdx",sourceDirName:"api/unself_model/JsonPart",slug:"/api/unself_model/JsonPart/",permalink:"/developer/api/unself_model/JsonPart/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonPart/JsonPart.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"JsonPart abstract class",sidebar_label:"JsonPart",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toJson",permalink:"/developer/api/unself_model/JsonExtra/toJson"},next:{title:"JsonPart const constructor",permalink:"/developer/api/unself_model/JsonPart/JsonPart.constructor"}},o={},d=[],m={toc:d};function h(a){let{components:s,...e}=a;return(0,r.kt)("wrapper",(0,n.Z)({},m,e,{components:s,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);