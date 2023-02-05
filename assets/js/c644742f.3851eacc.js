"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),i=n(67294),a=n(3905);function o(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">context</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype">AnalyticContext?</span>\n  <span class="name ">context</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">AnalyticContext? get context =&gt; _context;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/AnalyticService">AnalyticService</a></li>\n  <li class="self-crumb">context property</li>\n</ol>\n\n\n    <h5>AnalyticService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/AnalyticService.constructor">AnalyticService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/AnalyticService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/AnalyticService/context">context</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_monitoring/AnalyticService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/getCurrentContext">getCurrentContext</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/trackEvent">trackEvent</a></li>\n          <li><a href="../../unself_monitoring/AnalyticService/trackScreen">trackScreen</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/AnalyticService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"context property",sidebar_label:"context",hide_title:!0},c=void 0,s={unversionedId:"api/unself_monitoring/AnalyticService/context",id:"api/unself_monitoring/AnalyticService/context",title:"context property",description:"",source:"@site/developer/api/unself_monitoring/AnalyticService/context.mdx",sourceDirName:"api/unself_monitoring/AnalyticService",slug:"/api/unself_monitoring/AnalyticService/context",permalink:"/developer/api/unself_monitoring/AnalyticService/context",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/AnalyticService/context.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"context property",sidebar_label:"context",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"AnalyticService constructor",permalink:"/developer/api/unself_monitoring/AnalyticService/AnalyticService.constructor"},next:{title:"getCurrentContext",permalink:"/developer/api/unself_monitoring/AnalyticService/getCurrentContext"}},d={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);