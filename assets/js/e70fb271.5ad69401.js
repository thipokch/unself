"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95603],{3905:(r,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var n=t(67294);function i(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function a(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r,e){if(null==r)return{};var t,n,i=function(r,e){if(null==r)return{};var t,n,i={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(i[t]=r[t])}return i}var l=n.createContext({}),s=function(r){var e=n.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):a(a({},e),r)),t},d=function(r){var e=s(r.components);return n.createElement(l.Provider,{value:e},r.children)},u="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(r,e){var t=r.components,i=r.mdxType,o=r.originalType,l=r.parentName,d=c(r,["components","mdxType","originalType","parentName"]),u=s(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||o;return t?n.createElement(m,a(a({ref:e},d),{},{components:t})):n.createElement(m,a({ref:e},d))}));function m(r,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof r||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=r,c[u]="string"==typeof r?r:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24769:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=t(87462),i=t(67294),o=t(3905);function a(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ErrorService</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">ErrorService</span>(<wbr>)\n    </section>\n\n    \n\n\n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/ErrorService">ErrorService</a></li>\n  <li class="self-crumb">ErrorService constructor</li>\n</ol>\n\n\n    <h5>ErrorService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_monitoring/ErrorService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#static-methods">Static methods</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordError">recordError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"ErrorService constructor",sidebar_label:"ErrorService constructor",hide_title:!0},l=void 0,s={unversionedId:"api/unself_monitoring/ErrorService/ErrorService.constructor",id:"api/unself_monitoring/ErrorService/ErrorService.constructor",title:"ErrorService constructor",description:"",source:"@site/developer/api/unself_monitoring/ErrorService/ErrorService.constructor.mdx",sourceDirName:"api/unself_monitoring/ErrorService",slug:"/api/unself_monitoring/ErrorService/ErrorService.constructor",permalink:"/developer/api/unself_monitoring/ErrorService/ErrorService.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/ErrorService/ErrorService.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ErrorService constructor",sidebar_label:"ErrorService constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ErrorService",permalink:"/developer/api/unself_monitoring/ErrorService/"},next:{title:"recordError",permalink:"/developer/api/unself_monitoring/ErrorService/recordError"}},d={},u=[],f={toc:u};function p(r){let{components:e,...t}=r;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(a,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);