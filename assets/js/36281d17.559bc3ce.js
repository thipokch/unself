"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||p;return n?r.createElement(h,s(s({ref:t},o),{},{components:n})):r.createElement(h,s({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,s=new Array(p);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<p;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=n(67294),p=n(3905);function s(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">supportedApps</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">App</span>&gt;</span>\n          <span class="name ">supportedApps</span>\n          <div class="features"><span class="feature">final</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static final List&lt;App&gt; supportedApps = _formats.map((e) =&gt; e.app).toList();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/UnpackService">UnpackService</a></li>\n  <li class="self-crumb">supportedApps property</li>\n</ol>\n\n\n    <h5>UnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/UnpackService/UnpackService.constructor">UnpackService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_unpack/UnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_unpack/UnpackService/unpacked">unpacked</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/UnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/UnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/UnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/UnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_unpack/UnpackService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_unpack/UnpackService/supportedApps">supportedApps</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"supportedApps property",sidebar_label:"supportedApps",hide_title:!0},c=void 0,l={unversionedId:"api/unself_unpack/UnpackService/supportedApps",id:"api/unself_unpack/UnpackService/supportedApps",title:"supportedApps property",description:"",source:"@site/developer/api/unself_unpack/UnpackService/supportedApps.mdx",sourceDirName:"api/unself_unpack/UnpackService",slug:"/api/unself_unpack/UnpackService/supportedApps",permalink:"/developer/api/unself_unpack/UnpackService/supportedApps",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/UnpackService/supportedApps.mdx",tags:[],version:"current",lastUpdatedAt:1678784170,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"supportedApps property",sidebar_label:"supportedApps",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"start",permalink:"/developer/api/unself_unpack/UnpackService/start"},next:{title:"unpacked",permalink:"/developer/api/unself_unpack/UnpackService/unpacked"}},o={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);