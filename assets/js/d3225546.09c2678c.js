"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[54502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return t?r.createElement(m,o(o({ref:n},f),{},{components:t})):r.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(87462),a=t(67294),i=t(3905);function o(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">package</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/internal-constant.html">internal</a></li>\n    </ol>\n  </div>\n          <a href="https://pub.dev/documentation/package_info_plus/3.0.2/package_info_plus/PackageInfo-class.html">PackageInfo</a>?\n          <span class="name ">package</span>\n          <div class="features"><span class="feature">read / write</span></div>\n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@internal\nstatic PackageInfo? package;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/InfoService">InfoService</a></li>\n  <li class="self-crumb">package property</li>\n</ol>\n\n\n    <h5>InfoService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/InfoService/InfoService.constructor">InfoService</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_monitoring/InfoService#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_monitoring/InfoService/analyticId">analyticId</a></li>\n          <li><a href="../../unself_monitoring/InfoService/appName">appName</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildNumber">buildNumber</a></li>\n          <li><a href="../../unself_monitoring/InfoService/buildSignature">buildSignature</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_monitoring/InfoService/installerStore">installerStore</a></li>\n          <li><a href="../../unself_monitoring/InfoService/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_monitoring/InfoService/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/InfoService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_monitoring/InfoService#static-properties">Static properties</a></li>\n          <li><a href="../../unself_monitoring/InfoService/package">package</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"package property",sidebar_label:"package",hide_title:!0},s=void 0,c={unversionedId:"api/unself_monitoring/InfoService/package",id:"api/unself_monitoring/InfoService/package",title:"package property",description:"",source:"@site/developer/api/unself_monitoring/InfoService/package.mdx",sourceDirName:"api/unself_monitoring/InfoService",slug:"/api/unself_monitoring/InfoService/package",permalink:"/developer/api/unself_monitoring/InfoService/package",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/InfoService/package.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"package property",sidebar_label:"package",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"installerStore",permalink:"/developer/api/unself_monitoring/InfoService/installerStore"},next:{title:"packageName",permalink:"/developer/api/unself_monitoring/InfoService/packageName"}},f={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);