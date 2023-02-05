"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(m,o(o({ref:n},f),{},{components:t})):r.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(87462),i=t(67294),a=t(3905);function o(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">analyticId</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>\n  <span class="name ">analyticId</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">String? get analyticId =&gt; _analytic!.context?.anonymousId;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/InfoService">InfoService</a></li>\n  <li class="self-crumb">analyticId property</li>\n</ol>\n\n\n    <h5>InfoService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/InfoService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/InfoService/analyticId">analyticId</a></li>\n          <li><a href="../../unself_monitoring/InfoService/appName">appName</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildNumber">buildNumber</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildSignature">buildSignature</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_monitoring/InfoService/installerStore">installerStore</a></li>\n          <li><a href="../../unself_monitoring/InfoService/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_monitoring/InfoService/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_monitoring/InfoService/package">package</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"analyticId property",sidebar_label:"analyticId",hide_title:!0},c=void 0,s={unversionedId:"api/unself_monitoring/InfoService/analyticId",id:"api/unself_monitoring/InfoService/analyticId",title:"analyticId property",description:"",source:"@site/developer/api/unself_monitoring/InfoService/analyticId.mdx",sourceDirName:"api/unself_monitoring/InfoService",slug:"/api/unself_monitoring/InfoService/analyticId",permalink:"/developer/api/unself_monitoring/InfoService/analyticId",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/InfoService/analyticId.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"analyticId property",sidebar_label:"analyticId",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"InfoService const constructor",permalink:"/developer/api/unself_monitoring/InfoService/InfoService.constructor"},next:{title:"appName",permalink:"/developer/api/unself_monitoring/InfoService/appName"}},f={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);