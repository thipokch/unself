"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[23010],{3905:(e,n,i)=>{i.d(n,{Zo:()=>f,kt:()=>m});var l=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var c=l.createContext({}),o=function(e){var n=l.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},f=function(e){var n=o(e.components);return l.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),d=o(i),u=t,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return i?l.createElement(m,s(s({ref:n},f),{},{components:i})):l.createElement(m,s({ref:n},f))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,s=new Array(a);s[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:t,s[1]=r;for(var o=2;o<a;o++)s[o]=i[o];return l.createElement.apply(null,s)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},47382:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=i(87462),t=i(67294),a=i(3905);function s(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n    \n      <div>\n<h1><span class="kind-library">unself_file</span> library \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section class="summary offset-anchor" id="classes">\n      <h2>Classes</h2>\n\n      <dl>\n        <dt id="CrossFileTestOverrides">\n  <span class="name "><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/CrossFileTestOverrides-class.html">CrossFileTestOverrides</a></span> \n\n</dt>\n<dd>\n  Overrides some functions of CrossFile for testing purposes\n</dd>\n\n        <dt id="FilePicker">\n  <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePicker-class.html">FilePicker</a></span> \n\n</dt>\n<dd>\n  The interface that implementations of file_picker must implement.\n</dd>\n\n        <dt id="FilePickerResult">\n  <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerResult-class.html">FilePickerResult</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="PlatformFile">\n  <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile-class.html">PlatformFile</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="XFile">\n  <span class="name "><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> \n\n</dt>\n<dd>\n  A CrossFile is a cross-platform, simplified File abstraction.\n</dd>\n\n        <dt id="XFilePicker">\n  <span class="name "><a href="unself_file/XFilePicker">XFilePicker</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="XPlatformFile">\n  <span class="name "><a href="unself_file/XPlatformFile">XPlatformFile</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="XZipDecoder">\n  <span class="name "><a href="unself_file/XZipDecoder">XZipDecoder</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n    <section class="summary offset-anchor" id="extensions">\n      <h2>Extensions</h2>\n\n      <dl>\n        <dt id="XPlatformFileExtension">\n    <span class="name "><a href="unself_file/XPlatformFileExtension">XPlatformFileExtension</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n      </dl>\n    </section>\n\n    <section class="summary offset-anchor" id="constants">\n      <h2>Constants</h2>\n\n      <dl class="properties">\n        <dt id="defaultDialogTitle" class="constant">\n    <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/defaultDialogTitle-constant.html">defaultDialogTitle</a></span>\n  <span class="signature">\u2192 const <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  \n\n</dt>\n<dd>\n  \n  \n\n    <div>\n      <span class="signature"><code>\'\'</code></span>\n    </div>\n</dd>\n\n      </dl>\n    </section>\n\n\n\n    <section class="summary offset-anchor" id="enums">\n      <h2>Enums</h2>\n\n      <dl>\n        <dt id="FilePickerStatus">\n  <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerStatus.html">FilePickerStatus</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FileType">\n  <span class="name "><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FileType.html">FileType</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="index">unself_file</a></li>\n  <li class="self-crumb">unself_file library</li>\n</ol>\n\n\n    <h5><span class="package-name">unself_file</span> <span class="package-kind">package</span></h5>\n    <ol>\n      <li class="section-title">Libraries</li>\n      <li><a href="unself_file/unself_file">unself_file</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <h5>unself_file library</h5>\n    <ol>\n      <li class="section-title"><a href="unself_file/unself_file#classes">Classes</a></li>\n        <li><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/CrossFileTestOverrides-class.html">CrossFileTestOverrides</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePicker-class.html">FilePicker</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerResult-class.html">FilePickerResult</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile-class.html">PlatformFile</a></li>\n        <li><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></li>\n        <li><a href="unself_file/XFilePicker">XFilePicker</a></li>\n        <li><a href="unself_file/XPlatformFile">XPlatformFile</a></li>\n        <li><a href="unself_file/XZipDecoder">XZipDecoder</a></li>\n\n      <li class="section-title"><a href="unself_file/unself_file#extensions">Extensions</a></li>\n        <li><a href="unself_file/XPlatformFileExtension">XPlatformFileExtension</a></li>\n\n\n      <li class="section-title"><a href="unself_file/unself_file#constants">Constants</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/defaultDialogTitle-constant.html">defaultDialogTitle</a></li>\n\n\n\n      <li class="section-title"><a href="unself_file/unself_file#enums">Enums</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerStatus.html">FilePickerStatus</a></li>\n        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FileType.html">FileType</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/sidebar-offcanvas-right--\x3e\n\n</main>'}})}const r={title:"unself_file library",sidebar_label:"unself_file",hide_title:!0},c=void 0,o={unversionedId:"api/unself_file/unself_file",id:"api/unself_file/unself_file",title:"unself_file library",description:"",source:"@site/developer/api/unself_file/unself_file.mdx",sourceDirName:"api/unself_file",slug:"/api/unself_file/",permalink:"/developer/api/unself_file/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_file/unself_file.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"unself_file library",sidebar_label:"unself_file",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"show",permalink:"/developer/api/unself_component/show"},next:{title:"XFilePicker",permalink:"/developer/api/unself_file/XFilePicker/"}},f={},d=[],p={toc:d};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);