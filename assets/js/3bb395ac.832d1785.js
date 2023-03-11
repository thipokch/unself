"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42296],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=t.createContext({}),o=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=o(e.components);return t.createElement(d.Provider,{value:a},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(n),u=s,h=p["".concat(d,".").concat(u)]||p[u]||f[u]||r;return n?t.createElement(h,l(l({ref:a},c),{},{components:n})):t.createElement(h,l({ref:a},c))}));function h(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var o=2;o<r;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11102:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(87462),s=n(67294),r=n(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">Edge</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../unself_model/Base">Base</a> is a base class for all unself models.</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="../unself_model/Base">Base</a></li>\n    </ul>\n  </dd>\n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_model/Activity">Activity</a></li>\n        </ul></dd>\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="archiveId" class="property">\n  <span class="name"><a href="../unself_model/Edge/archiveId">archiveId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/archiveId">archiveId</a> is unself unique identifier for the archive the model belongs to.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="created" class="property">\n  <span class="name"><a href="../unself_model/Edge/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/created">created</a> is the date and time when the inheriting model was created inside unself app.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="extra" class="property">\n  <span class="name"><a href="../unself_model/Edge/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span>?</span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/extra">extra</a> is a map of additional properties.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property">\n  <span class="name"><a href="../unself_model/Edge/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/id">id</a> is unself unique identifier for each inheriting model.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="labels" class="property">\n  <span class="name"><a href="../unself_model/Edge/labels">labels</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/labels">labels</a> is a list of labels assigned to the model.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="sourceId" class="property">\n  <span class="name"><a href="../unself_model/Edge/sourceId">sourceId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/sourceId">sourceId</a> is unself unique identifier for the source node.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="targetId" class="property">\n  <span class="name"><a href="../unself_model/Edge/targetId">targetId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/targetId">targetId</a> is unself unique identifier for the target node.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="updated" class="property">\n  <span class="name"><a href="../unself_model/Edge/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_model/Edge/updated">updated</a> is the date and time when the inheriting model was last updated inside unself app.\n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_model</a></li>\n  <li><a href="../unself_model/unself_model">unself_model</a></li>\n  <li class="self-crumb">Edge abstract class</li>\n</ol>\n\n\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="../unself_model/Account">Account</a></li>\n        <li><a href="../unself_model/Activity">Activity</a></li>\n        <li><a href="../unself_model/App">App</a></li>\n        <li><a href="../unself_model/Archive">Archive</a></li>\n        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="../unself_model/ArchiveFormat">ArchiveFormat</a></li>\n        <li><a href="../unself_model/Base">Base</a></li>\n        <li><a href="../unself_model/Collection">Collection</a></li>\n        <li><a href="../unself_model/Edge">Edge</a></li>\n        <li><a href="../unself_model/Field">Field</a></li>\n        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="../unself_model/JsonString">JsonString</a></li>\n        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="../unself_model/Mapping">Mapping</a></li>\n        <li><a href="../unself_model/Node">Node</a></li>\n        <li><a href="../unself_model/Settings">Settings</a></li>\n        <li><a href="../unself_model/Topic">Topic</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></li>\n        <li><a href="../unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="../unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n\n\n        <li class="section-title">\n          <a href="../unself_model/Edge#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_model/Edge/archiveId">archiveId</a></li>\n          <li><a href="../unself_model/Edge/created">created</a></li>\n          <li><a href="../unself_model/Edge/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_model/Edge/id">id</a></li>\n          <li><a href="../unself_model/Edge/labels">labels</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_model/Edge/sourceId">sourceId</a></li>\n          <li><a href="../unself_model/Edge/targetId">targetId</a></li>\n          <li><a href="../unself_model/Edge/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Edge#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_model/Edge#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Edge abstract class",sidebar_label:"Edge",hide_title:!0},d=void 0,o={unversionedId:"api/unself_model/Edge/Edge",id:"api/unself_model/Edge/Edge",title:"Edge abstract class",description:"",source:"@site/developer/api/unself_model/Edge/Edge.mdx",sourceDirName:"api/unself_model/Edge",slug:"/api/unself_model/Edge/",permalink:"/developer/api/unself_model/Edge/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Edge/Edge.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Edge abstract class",sidebar_label:"Edge",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updated",permalink:"/developer/api/unself_model/Document/updated"},next:{title:"archiveId",permalink:"/developer/api/unself_model/Edge/archiveId"}},c={},p=[],f={toc:p};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);