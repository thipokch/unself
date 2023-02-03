"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=a.createContext({}),o=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(t),f=s,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||l;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var o=2;o<l;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n\n        <h1>\n          <span class="kind-enum">FieldType</span>\n          enum \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n\n        </h1>\n      </div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark eNum-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></li>\n      <li>FieldType</li>\n    </ul>\n  </dd>\n\n        \n        \n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list eNum-relationships">\n        <li>@<a href="https://pub.dev/documentation/json_annotation/4.8.0/json_annotation/JsonEnum-class.html">JsonEnum</a>()</li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="FieldType" class="callable">\n          <span class="name"><a href="../unself_model/FieldType/FieldType.constructor">FieldType</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="values">\n      <h2>Values</h2>\n\n      <dl class="properties">\n          <dt id="text" class="constant">\n    <span class="name ">text</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="number" class="constant">\n    <span class="name ">number</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="bool" class="constant">\n    <span class="name ">bool</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="email" class="constant">\n    <span class="name ">email</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="url" class="constant">\n    <span class="name ">url</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="date" class="constant">\n    <span class="name ">date</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="select" class="constant">\n    <span class="name ">select</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="file" class="constant">\n    <span class="name ">file</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n          <dt id="relation" class="constant">\n    <span class="name ">relation</span>\n  <span class="signature">\u2192 const <a href="../unself_model/FieldType">FieldType</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n      </dl>\n    </section>\n\n    <section class="\n          summary\n          offset-anchorinherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="index" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  A numeric identifier for the enumerated value.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n  <section class="summary offset-anchor" id="constants">\n    <h2>Constants</h2>\n\n    <dl class="properties">\n        <dt id="values" class="constant">\n    <span class="name "><a href="../unself_model/FieldType/values-constant">values</a></span>\n  <span class="signature">\u2192 const <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/FieldType">FieldType</a></span>&gt;</span></span>\n  \n\n</dt>\n<dd>\n  A constant List of the values in this enum, in order of their declaration.\n  \n\n    <div>\n      <span class="signature"><code>[text, number, bool, email, url, date, select, file, relation]</code></span>\n    </div>\n</dd>\n\n    </dl>\n  </section>\n  </div>\x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">FieldType enum</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Document">Document</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/User">User</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/FieldType#constructors">Constructors</a></li>\n          <li><a href="../unself_model/FieldType/FieldType.constructor">FieldType</a></li>\n\n        <li class="section-title"><a href="../unself_model/FieldType#values">Values</a></li>\n          <li><a href="../unself_model/FieldType#text">text</a></li>\n          <li><a href="../unself_model/FieldType#number">number</a></li>\n          <li><a href="../unself_model/FieldType#bool">bool</a></li>\n          <li><a href="../unself_model/FieldType#email">email</a></li>\n          <li><a href="../unself_model/FieldType#url">url</a></li>\n          <li><a href="../unself_model/FieldType#date">date</a></li>\n          <li><a href="../unself_model/FieldType#select">select</a></li>\n          <li><a href="../unself_model/FieldType#file">file</a></li>\n          <li><a href="../unself_model/FieldType#relation">relation</a></li>\n\n        <li class="section-title inherited">\n          <a href="../unself_model/FieldType#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/FieldType#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/FieldType#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../unself_model/FieldType#constants">Constants</a></li>\n          <li><a href="../unself_model/FieldType/values-constant">values</a></li>\n</ol>\n\n  </div>\x3c!-- /.sidebar-offcanvas --\x3e\n\n</main>'}})}const i={title:"FieldType enum",sidebar_label:"FieldType",hide_title:!0},d=void 0,o={unversionedId:"api/unself_model/FieldType",id:"api/unself_model/FieldType",title:"FieldType enum",description:"",source:"@site/developer/api/unself_model/FieldType.mdx",sourceDirName:"api/unself_model",slug:"/api/unself_model/FieldType",permalink:"/developer/api/unself_model/FieldType",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/FieldType.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"FieldType enum",sidebar_label:"FieldType",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"values",permalink:"/developer/api/unself_model/FieldType/values"},next:{title:"User",permalink:"/developer/api/unself_model/User/"}},c={},p=[],u={toc:p};function f(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);