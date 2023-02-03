"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2673],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(87462),o=n(67294),l=n(3905);function a(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">resetScroll</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">resetScroll</span>(<wbr>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void resetScroll() {\n  jumpTo(0.0);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n  <li class="self-crumb">resetScroll method</li>\n</ol>\n\n\n    <h5>PairingScrollControllerGroup class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollControllerGroup#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/offset">offset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#instance-methods">Methods</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/push">push</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollControllerGroup#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"resetScroll method",sidebar_label:"resetScroll",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollControllerGroup/resetScroll",id:"api/unself_component/PairingScrollControllerGroup/resetScroll",title:"resetScroll method",description:"",source:"@site/developer/api/unself_component/PairingScrollControllerGroup/resetScroll.mdx",sourceDirName:"api/unself_component/PairingScrollControllerGroup",slug:"/api/unself_component/PairingScrollControllerGroup/resetScroll",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/resetScroll",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollControllerGroup/resetScroll.mdx",tags:[],version:"current",lastUpdatedAt:1675431091,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"resetScroll method",sidebar_label:"resetScroll",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"removeOffsetChangedListener",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/removeOffsetChangedListener"},next:{title:"ResponsiveLayoutBuilder",permalink:"/developer/api/unself_component/ResponsiveLayoutBuilder/"}},p={},u=[],d={toc:u};function f(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)(a,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);