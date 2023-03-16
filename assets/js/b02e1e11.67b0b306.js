"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56549],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(87462),i=t(67294),l=t(3905);function a(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">xFile</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span>\n  <span class="name ">xFile</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">XFile get xFile =&gt;\n    kIsWeb ? XFile((this as XPlatformFile)._unsafePath) : XFile(path!);</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_file</a></li>\n  <li><a href="../../unself_file/unself_file">unself_file</a></li>\n  <li><a href="../../unself_file/XPlatformFileExtension">XPlatformFileExtension</a></li>\n  <li class="self-crumb">xFile property</li>\n</ol>\n\n\n    <h5>XPlatformFileExtension extension</h5>\n    <ol>\n\n\n\n\n        <li class="section-title"> <a href="../../unself_file/XPlatformFileExtension#instance-properties">Properties</a></li>\n          <li><a href="../../unself_file/XPlatformFileExtension/xFile">xFile</a></li>\n\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"xFile property",sidebar_label:"xFile",hide_title:!0},s=void 0,c={unversionedId:"api/unself_file/XPlatformFileExtension/xFile",id:"api/unself_file/XPlatformFileExtension/xFile",title:"xFile property",description:"",source:"@site/developer/api/unself_file/XPlatformFileExtension/xFile.mdx",sourceDirName:"api/unself_file/XPlatformFileExtension",slug:"/api/unself_file/XPlatformFileExtension/xFile",permalink:"/developer/api/unself_file/XPlatformFileExtension/xFile",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_file/XPlatformFileExtension/xFile.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"xFile property",sidebar_label:"xFile",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"XPlatformFile constructor",permalink:"/developer/api/unself_file/XPlatformFile/XPlatformFile.constructor"},next:{title:"XPlatformFileExtension",permalink:"/developer/api/unself_file/XPlatformFileExtension"}},f={},p=[],d={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(a,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);