"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96042],{3905:(n,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var s=a(67294);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function t(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,s)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,s,l=function(n,e){if(null==n)return{};var a,s,l={},t=Object.keys(n);for(s=0;s<t.length;s++)a=t[s],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(s=0;s<t.length;s++)a=t[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var d=s.createContext({}),o=function(n){var e=s.useContext(d),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},c=function(n){var e=o(n.components);return s.createElement(d.Provider,{value:e},n.children)},f="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(n,e){var a=n.components,l=n.mdxType,t=n.originalType,d=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),f=o(a),m=l,u=f["".concat(d,".").concat(m)]||f[m]||p[m]||t;return a?s.createElement(u,i(i({ref:e},c),{},{components:a})):s.createElement(u,i({ref:e},c))}));function u(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var t=a.length,i=new Array(t);i[0]=m;var r={};for(var d in e)hasOwnProperty.call(e,d)&&(r[d]=e[d]);r.originalType=n,r[f]="string"==typeof n?n:l,i[1]=r;for(var o=2;o<t;o++)i[o]=a[o];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26213:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>f});var s=a(87462),l=a(67294),t=a(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n    \n      <div>\n<h1><span class="kind-library">unself_model</span> library \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section class="summary offset-anchor" id="classes">\n      <h2>Classes</h2>\n\n      <dl>\n        <dt id="Account">\n  <span class="name "><a href="unself_model/Account">Account</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Account">Account</a> is a user\'s and their acquaintances\' identity on a <a href="unself_model/App">App</a>.\nEach person can have multiple <a href="unself_model/Account">Account</a>s and on multiple <a href="unself_model/App">App</a>s.\n</dd>\n\n        <dt id="Activity">\n  <span class="name "><a href="unself_model/Activity">Activity</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="App">\n  <span class="name "><a href="unself_model/App">App</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/App">App</a> is a software application or services that the user uses.\n</dd>\n\n        <dt id="Archive">\n  <span class="name "><a href="unself_model/Archive">Archive</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Archive">Archive</a> is a set of data user imported from other apps.\n</dd>\n\n        <dt id="ArchiveData">\n  <span class="name "><a href="unself_model/ArchiveData">ArchiveData</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/ArchiveData">ArchiveData</a> is used to\n</dd>\n\n        <dt id="ArchiveFormat">\n  <span class="name "><a href="unself_model/ArchiveFormat">ArchiveFormat</a></span> \n\n</dt>\n<dd>\n  ArchiveFormat description\n</dd>\n\n        <dt id="Base">\n  <span class="name "><a href="unself_model/Base">Base</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Base">Base</a> is a base class for all unself models.\n</dd>\n\n        <dt id="Collection">\n  <span class="name "><a href="unself_model/Collection">Collection</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Collection">Collection</a> is a dynamic data structure that can be used to store any kind of data.\nIt is used to store a generalized data structure of user\'s <a href="unself_model/Archive">Archive</a>s.\n</dd>\n\n        <dt id="Edge">\n  <span class="name "><a href="unself_model/Edge">Edge</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Base">Base</a> is a base class for all unself models.\n</dd>\n\n        <dt id="Field">\n  <span class="name "><a href="unself_model/Field">Field</a></span> \n\n</dt>\n<dd>\n  {@template field}\n<a href="unself_model/Field">Field</a> is a field inside of a <a href="unself_model/Collection">Collection</a>\'s schema.\n</dd>\n\n        <dt id="JsonDateTime">\n  <span class="name "><a href="unself_model/JsonDateTime">JsonDateTime</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="JsonExtra">\n  <span class="name "><a href="unself_model/JsonExtra">JsonExtra</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="JsonString">\n  <span class="name "><a href="unself_model/JsonString">JsonString</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="JsonVersion">\n  <span class="name "><a href="unself_model/JsonVersion">JsonVersion</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="JsonVersionConstraint">\n  <span class="name "><a href="unself_model/JsonVersionConstraint">JsonVersionConstraint</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Mapping">\n  <span class="name "><a href="unself_model/Mapping">Mapping</a></span> \n\n</dt>\n<dd>\n  Mapping description@freezed\n</dd>\n\n        <dt id="Node">\n  <span class="name "><a href="unself_model/Node">Node</a></span> \n\n</dt>\n<dd>\n  <a href="unself_model/Base">Base</a> is a base class for all unself models.\n</dd>\n\n        <dt id="Settings">\n  <span class="name "><a href="unself_model/Settings">Settings</a></span> \n\n</dt>\n<dd>\n  Settings description\n</dd>\n\n        <dt id="Topic">\n  <span class="name "><a href="unself_model/Topic">Topic</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Version">\n  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span> \n\n</dt>\n<dd>\n  A parsed semantic version number.\n</dd>\n\n        <dt id="VersionConstraint">\n  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span> \n\n</dt>\n<dd>\n  A <a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a> is a predicate that can determine whether a given\nversion is valid or not.\n</dd>\n\n        <dt id="VersionRange">\n  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></span> \n\n</dt>\n<dd>\n  Constrains versions to a fall within a given range.\n</dd>\n\n        <dt id="VersionUnion">\n  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></span> \n\n</dt>\n<dd>\n  A version constraint representing a union of multiple disjoint version\nranges.\n</dd>\n\n      </dl>\n    </section>\n\n\n\n\n\n\n    <section class="summary offset-anchor" id="enums">\n      <h2>Enums</h2>\n\n      <dl>\n        <dt id="ArchiveFileFormat">\n  <span class="name "><a href="unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionType">\n  <span class="name "><a href="unself_model/CollectionType">CollectionType</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FieldType">\n  <span class="name "><a href="unself_model/FieldType">FieldType</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="index">unself_model</a></li>\n  <li class="self-crumb">unself_model library</li>\n</ol>\n\n\n    <h5><span class="package-name">unself_model</span> <span class="package-kind">package</span></h5>\n    <ol>\n      <li class="section-title">Libraries</li>\n      <li><a href="unself_model/unself_model">unself_model</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <h5>unself_model library</h5>\n    <ol>\n      <li class="section-title"><a href="unself_model/unself_model#classes">Classes</a></li>\n        <li><a href="unself_model/Account">Account</a></li>\n        <li><a href="unself_model/Activity">Activity</a></li>\n        <li><a href="unself_model/App">App</a></li>\n        <li><a href="unself_model/Archive">Archive</a></li>\n        <li><a href="unself_model/ArchiveData">ArchiveData</a></li>\n        <li><a href="unself_model/ArchiveFormat">ArchiveFormat</a></li>\n        <li><a href="unself_model/Base">Base</a></li>\n        <li><a href="unself_model/Collection">Collection</a></li>\n        <li><a href="unself_model/Edge">Edge</a></li>\n        <li><a href="unself_model/Field">Field</a></li>\n        <li><a href="unself_model/JsonDateTime">JsonDateTime</a></li>\n        <li><a href="unself_model/JsonExtra">JsonExtra</a></li>\n        <li><a href="unself_model/JsonString">JsonString</a></li>\n        <li><a href="unself_model/JsonVersion">JsonVersion</a></li>\n        <li><a href="unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>\n        <li><a href="unself_model/Mapping">Mapping</a></li>\n        <li><a href="unself_model/Node">Node</a></li>\n        <li><a href="unself_model/Settings">Settings</a></li>\n        <li><a href="unself_model/Topic">Topic</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>\n        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="unself_model/unself_model#enums">Enums</a></li>\n        <li><a href="unself_model/ArchiveFileFormat">ArchiveFileFormat</a></li>\n        <li><a href="unself_model/CollectionType">CollectionType</a></li>\n        <li><a href="unself_model/FieldType">FieldType</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/sidebar-offcanvas-right--\x3e\n\n</main>'}})}const r={title:"unself_model library",sidebar_label:"unself_model",hide_title:!0},d=void 0,o={unversionedId:"api/unself_model/unself_model",id:"api/unself_model/unself_model",title:"unself_model library",description:"",source:"@site/developer/api/unself_model/unself_model.mdx",sourceDirName:"api/unself_model",slug:"/api/unself_model/",permalink:"/developer/api/unself_model/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/unself_model.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"unself_model library",sidebar_label:"unself_model",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"connect",permalink:"/developer/api/unself_local_database/connect"},next:{title:"Account",permalink:"/developer/api/unself_model/Account/"}},c={},f=[],p={toc:f};function m(n){let{components:e,...a}=n;return(0,t.kt)("wrapper",(0,s.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)(i,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);