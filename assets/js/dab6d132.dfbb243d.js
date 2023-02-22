"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70186],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52434:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(87462),o=r(67294),l=r(3905);function a(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">jumpTo</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">jumpTo</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="jumpTo-param-value"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">value</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void jumpTo(double value) {\n  for (final controller in _attachedControllers) {\n    controller.jumpTo(value);\n  }\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n  <li class="self-crumb">jumpTo method</li>\n</ol>\n\n\n    <h5>PairingScrollControllerGroup class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollControllerGroup#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/offset">offset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#instance-methods">Methods</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/push">push</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollControllerGroup#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"jumpTo method",sidebar_label:"jumpTo",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollControllerGroup/jumpTo",id:"api/unself_component/PairingScrollControllerGroup/jumpTo",title:"jumpTo method",description:"",source:"@site/developer/api/unself_component/PairingScrollControllerGroup/jumpTo.mdx",sourceDirName:"api/unself_component/PairingScrollControllerGroup",slug:"/api/unself_component/PairingScrollControllerGroup/jumpTo",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/jumpTo",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollControllerGroup/jumpTo.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"jumpTo method",sidebar_label:"jumpTo",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"animateTo",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/animateTo"},next:{title:"offset",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/offset"}},p={},u=[],d={toc:u};function f(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(a,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);