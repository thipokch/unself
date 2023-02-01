"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[76489],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},f=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return r?t.createElement(m,o(o({ref:n},f),{},{components:r})):t.createElement(m,o({ref:n},f))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72652:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=r(87462),i=r(67294),a=r(3905);function o(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">version</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  <span class="name ">version</span>\n  \n\n</section>\n\n\n<section class="desc markdown">\n  <p>The package version. <code>CFBundleShortVersionString</code> on iOS, <code>versionName</code> on Android.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">String get version =&gt; package!.version;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/InfoService">InfoService</a></li>\n  <li class="self-crumb">version property</li>\n</ol>\n\n\n    <h5>InfoService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/InfoService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/InfoService/analyticId">analyticId</a></li>\n          <li><a href="../../unself_monitoring/InfoService/appName">appName</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildNumber">buildNumber</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildSignature">buildSignature</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_monitoring/InfoService/installerStore">installerStore</a></li>\n          <li><a href="../../unself_monitoring/InfoService/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_monitoring/InfoService/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_monitoring/InfoService/package">package</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"version property",sidebar_label:"version",hide_title:!0},l=void 0,c={unversionedId:"api/unself_monitoring/InfoService/version",id:"api/unself_monitoring/InfoService/version",title:"version property",description:"",source:"@site/reference/api/unself_monitoring/InfoService/version.mdx",sourceDirName:"api/unself_monitoring/InfoService",slug:"/api/unself_monitoring/InfoService/version",permalink:"/reference/api/unself_monitoring/InfoService/version",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_monitoring/InfoService/version.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"version property",sidebar_label:"version",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"packageName",permalink:"/reference/api/unself_monitoring/InfoService/packageName"},next:{title:"PerformanceService",permalink:"/reference/api/unself_monitoring/PerformanceService/"}},f={},p=[],d={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);