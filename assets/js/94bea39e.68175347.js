"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91624],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(t),u=s,f=h["".concat(o,".").concat(u)]||h[u]||p[u]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[h]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=t(87462),s=t(67294),r=t(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n\n        <h1>\n          <span class="kind-enum">ArchiveFileFormat</span>\n          enum \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n\n        </h1>\n      </div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark eNum-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></li>\n      <li>ArchiveFileFormat</li>\n    </ul>\n  </dd>\n\n        \n        \n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list eNum-relationships">\n        <li>@<a href="https://pub.dev/documentation/json_annotation/4.8.0/json_annotation/JsonEnum-class.html">JsonEnum</a>()</li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="ArchiveFileFormat" class="callable">\n          <span class="name"><a href="../unself_model/ArchiveFileFormat/ArchiveFileFormat.constructor">ArchiveFileFormat</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="values">\n      <h2>Values</h2>\n\n      <dl class="properties">\n          <dt id="zipJson" class="constant">\n    <span class="name ">zipJson</span>\n  <span class="signature">\u2192 const <a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span>\n  \n\n</dt>\n<dd>\n  <p><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat.zipJson</a> is a zip file containing a json file.</p>\n  \n\n</dd>\n\n          <dt id="json" class="constant">\n    <span class="name ">json</span>\n  <span class="signature">\u2192 const <a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span>\n  \n\n</dt>\n<dd>\n  <p><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat.json</a> is a single json file.</p>\n  \n\n</dd>\n\n          <dt id="html" class="constant">\n    <span class="name ">html</span>\n  <span class="signature">\u2192 const <a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span>\n  \n\n</dt>\n<dd>\n  <p><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat.html</a> is a single html file.</p>\n  \n\n</dd>\n\n      </dl>\n    </section>\n\n    <section class="\n          summary\n          offset-anchorinherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="index" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  A numeric identifier for the enumerated value.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n  <section class="summary offset-anchor" id="constants">\n    <h2>Constants</h2>\n\n    <dl class="properties">\n        <dt id="values" class="constant">\n    <span class="name "><a href="../unself_model/ArchiveFileFormat/values-constant">values</a></span>\n  <span class="signature">\u2192 const <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span>&gt;</span></span>\n  \n\n</dt>\n<dd>\n  A constant List of the values in this enum, in order of their declaration.\n  \n\n    <div>\n      <span class="signature"><code>[zipJson, json, html]</code></span>\n    </div>\n</dd>\n\n    </dl>\n  </section>\n  </div>\x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">ArchiveFileFormat enum</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveFormat">ArchiveFormat</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_model/ArchiveFileFormat#constructors">Constructors</a></li>\n          <li><a href="../unself_model/ArchiveFileFormat/ArchiveFileFormat.constructor">ArchiveFileFormat</a></li>\n\n        <li class="section-title"><a href="../unself_model/ArchiveFileFormat#values">Values</a></li>\n          <li><a href="../unself_model/ArchiveFileFormat#zipJson">zipJson</a></li>\n          <li><a href="../unself_model/ArchiveFileFormat#json">json</a></li>\n          <li><a href="../unself_model/ArchiveFileFormat#html">html</a></li>\n\n        <li class="section-title inherited">\n          <a href="../unself_model/ArchiveFileFormat#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Enum/index.html">index</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/ArchiveFileFormat#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/ArchiveFileFormat#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../unself_model/ArchiveFileFormat#constants">Constants</a></li>\n          <li><a href="../unself_model/ArchiveFileFormat/values-constant">values</a></li>\n</ol>\n\n  </div>\x3c!-- /.sidebar-offcanvas --\x3e\n\n</main>'}})}const i={title:"ArchiveFileFormat enum",sidebar_label:"ArchiveFileFormat",hide_title:!0},o=void 0,c={unversionedId:"api/unself_model/ArchiveFileFormat",id:"api/unself_model/ArchiveFileFormat",title:"ArchiveFileFormat enum",description:"",source:"@site/developer/api/unself_model/ArchiveFileFormat.mdx",sourceDirName:"api/unself_model",slug:"/api/unself_model/ArchiveFileFormat",permalink:"/developer/api/unself_model/ArchiveFileFormat",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/ArchiveFileFormat.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ArchiveFileFormat enum",sidebar_label:"ArchiveFileFormat",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"values",permalink:"/developer/api/unself_model/ArchiveFileFormat/values"},next:{title:"ArchiveFormat",permalink:"/developer/api/unself_model/ArchiveFormat/"}},d={},h=[],p={toc:h};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);