"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44360],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},o=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,h=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return a?t.createElement(h,c(c({ref:n},o),{},{components:a})):t.createElement(h,c({ref:n},o))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<s;p++)c[p]=a[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},14091:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var t=a(87462),r=a(67294),s=a(3905);function c(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">IUnpackService</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>An interface for Unpack</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n        </ul></dd>\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="IUnpackService" class="callable">\n          <span class="name"><a href="../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="collect" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/collect">collect</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Returns a list of supported <code>Collection</code> that can be imported from given collector.\n  \n\n</dd>\n\n        <dt id="getDocuments" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/getDocuments">getDocuments</a></span><span class="signature">(<wbr><span class="parameter" id="getDocuments-param-collection">{<span>required</span> <span class="type-annotation">Collection</span> <span class="parameter-name">collection</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Document</span>&gt;</span></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Get <code>Document</code> from local <code>Collection</code> database.\n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="process" class="callable">\n  <span class="name"><a href="../unself_unpack/IUnpackService/process">process</a></span><span class="signature">(<wbr><span class="parameter" id="process-param-collection">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">collection</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Given selection of <code>Collection</code> to be imported from previously selected archive.\nBegins importing data, format and store it as <code>Collection</code>.\n  \n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack</a></li>\n  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li class="self-crumb">IUnpackService abstract class</li>\n</ol>\n\n\n    <h5>unself_unpack library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>\n        <li><a href="../unself_unpack/ArchiveCollector">ArchiveCollector</a></li>\n        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>\n        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>\n        <li><a href="../unself_unpack/facebookKeys">facebookKeys</a></li>\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_unpack/IUnpackService#constructors">Constructors</a></li>\n          <li><a href="../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_unpack/IUnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_unpack/IUnpackService#instance-methods">Methods</a></li>\n          <li><a href="../unself_unpack/IUnpackService/collect">collect</a></li>\n          <li><a href="../unself_unpack/IUnpackService/getDocuments">getDocuments</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_unpack/IUnpackService/process">process</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack/IUnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"IUnpackService abstract class",sidebar_label:"IUnpackService",hide_title:!0},i=void 0,p={unversionedId:"api/unself_unpack/IUnpackService/IUnpackService",id:"api/unself_unpack/IUnpackService/IUnpackService",title:"IUnpackService abstract class",description:"",source:"@site/developer/api/unself_unpack/IUnpackService/IUnpackService.mdx",sourceDirName:"api/unself_unpack/IUnpackService",slug:"/api/unself_unpack/IUnpackService/",permalink:"/developer/api/unself_unpack/IUnpackService/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/IUnpackService/IUnpackService.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"IUnpackService abstract class",sidebar_label:"IUnpackService",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"retrieve",permalink:"/developer/api/unself_unpack/ArchiveCollector/retrieve"},next:{title:"IUnpackService constructor",permalink:"/developer/api/unself_unpack/IUnpackService/IUnpackService.constructor"}},o={},d=[],u={toc:d};function f(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);