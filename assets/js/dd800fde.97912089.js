"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return t?r.createElement(m,o(o({ref:n},f),{},{components:t})):r.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=t(87462),i=t(67294),a=t(3905);function o(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">InfoService</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">InfoService</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-analytic">{<span class="type-annotation"><a href="../../unself_monitoring/AnalyticService">AnalyticService</a>?</span> <span class="parameter-name">analytic</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p><a href="../../unself_monitoring/InfoService">InfoService</a> description</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const InfoService({\n  AnalyticService? analytic,\n}) : _analytic = analytic;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/InfoService">InfoService</a></li>\n  <li class="self-crumb">InfoService const constructor</li>\n</ol>\n\n\n    <h5>InfoService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/InfoService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/InfoService/analyticId">analyticId</a></li>\n          <li><a href="../../unself_monitoring/InfoService/appName">appName</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildNumber">buildNumber</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildSignature">buildSignature</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_monitoring/InfoService/installerStore">installerStore</a></li>\n          <li><a href="../../unself_monitoring/InfoService/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_monitoring/InfoService/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_monitoring/InfoService/package">package</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"InfoService const constructor",sidebar_label:"InfoService const constructor",hide_title:!0},l=void 0,s={unversionedId:"api/unself_monitoring/InfoService/InfoService.constructor",id:"api/unself_monitoring/InfoService/InfoService.constructor",title:"InfoService const constructor",description:"",source:"@site/developer/api/unself_monitoring/InfoService/InfoService.constructor.mdx",sourceDirName:"api/unself_monitoring/InfoService",slug:"/api/unself_monitoring/InfoService/InfoService.constructor",permalink:"/developer/api/unself_monitoring/InfoService/InfoService.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/InfoService/InfoService.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"InfoService const constructor",sidebar_label:"InfoService const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"InfoService",permalink:"/developer/api/unself_monitoring/InfoService/"},next:{title:"analyticId",permalink:"/developer/api/unself_monitoring/InfoService/analyticId"}},f={},u=[],d={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);