"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1391],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>h});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,h=p["".concat(s,".").concat(u)]||p[u]||f[u]||a;return r?t.createElement(h,l(l({ref:n},d),{},{components:r})):t.createElement(h,l({ref:n},d))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33981:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=r(87462),o=r(67294),a=r(3905);function l(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">addOffsetChangedListener</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">addOffsetChangedListener</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="addOffsetChangedListener-param-onChanged"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onChanged</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void addOffsetChangedListener(VoidCallback onChanged) =&gt;\n    _offsetNotifier.addListener(onChanged);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n  <li class="self-crumb">addOffsetChangedListener method</li>\n</ol>\n\n\n    <h5>PairingScrollControllerGroup class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollControllerGroup#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/offset">offset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#instance-methods">Methods</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/push">push</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollControllerGroup#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"addOffsetChangedListener method",sidebar_label:"addOffsetChangedListener",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener",id:"api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener",title:"addOffsetChangedListener method",description:"",source:"@site/developer/api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener.mdx",sourceDirName:"api/unself_component/PairingScrollControllerGroup",slug:"/api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"addOffsetChangedListener method",sidebar_label:"addOffsetChangedListener",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"PairingScrollControllerGroup constructor",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor"},next:{title:"animateTo",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/animateTo"}},d={},p=[],f={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);