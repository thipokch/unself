"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44360],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),i=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},o=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=i(n),f=r,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return n?t.createElement(h,c(c({ref:a},o),{},{components:n})):t.createElement(h,c({ref:a},o))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=f;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<s;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14091:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(87462),r=n(67294),s=n(3905);function c(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">IUnpackService</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>An interface for Unpack</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        </ul></dd>\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="IUnpackService" class="callable">\n          <span class="name"><a href="../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="load" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/load">load</a></span><span class="signature">(<wbr><span class="parameter" id="load-param-app"><span class="type-annotation">App</span> <span class="parameter-name">app</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">ArchiveFormat</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  <a href="../unself_unpack/IUnpackService/load">load</a> returns the <code>Mapping</code> with file format requirements for the\ngiven app.\n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="open" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/open">open</a></span><span class="signature">(<wbr><span class="parameter" id="open-param-file"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">file</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  <a href="../unself_unpack/IUnpackService/open">open</a> returns the supported list of <code>Mapping</code> for the\ngiven <a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a> file.\n  \n\n</dd>\n\n        <dt id="start" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/start">start</a></span><span class="signature">(<wbr><span class="parameter" id="start-param-mappings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span> <span class="parameter-name">mappings</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  <a href="../unself_unpack/IUnpackService/start">start</a> let the service begins unpacking with the given <code>Mapping</code>\n, and returns a progress stream.\n  \n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">IUnpackService abstract class</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>\n        <li><a href="../unself_unpack/Export">Export</a></li>\n        <li><a href="../unself_unpack/Import">Import</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookMapping">facebookMapping</a></li>\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_unpack/IUnpackService#constructors">Constructors</a></li>\n          <li><a href="../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_unpack/IUnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_unpack/IUnpackService#instance-methods">Methods</a></li>\n          <li><a href="../unself_unpack/IUnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_unpack/IUnpackService/open">open</a></li>\n          <li><a href="../unself_unpack/IUnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack/IUnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"IUnpackService abstract class",sidebar_label:"IUnpackService",hide_title:!0},p=void 0,i={unversionedId:"api/unself_unpack/IUnpackService/IUnpackService",id:"api/unself_unpack/IUnpackService/IUnpackService",title:"IUnpackService abstract class",description:"",source:"@site/developer/api/unself_unpack/IUnpackService/IUnpackService.mdx",sourceDirName:"api/unself_unpack/IUnpackService",slug:"/api/unself_unpack/IUnpackService/",permalink:"/developer/api/unself_unpack/IUnpackService/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/IUnpackService/IUnpackService.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"IUnpackService abstract class",sidebar_label:"IUnpackService",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"pack",permalink:"/developer/api/unself_unpack/Export/pack"},next:{title:"IUnpackService constructor",permalink:"/developer/api/unself_unpack/IUnpackService/IUnpackService.constructor"}},o={},d=[],u={toc:d};function f(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);