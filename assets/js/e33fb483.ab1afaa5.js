"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29376],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>f});var l=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,l,a=function(e,n){if(null==e)return{};var o,l,a={},t=Object.keys(e);for(l=0;l<t.length;l++)o=t[l],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)o=t[l],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=l.createContext({}),u=function(e){var n=l.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},m=function(e){var n=u(e.components);return l.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},h=l.forwardRef((function(e,n){var o=e.components,a=e.mdxType,t=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=a,f=c["".concat(i,".").concat(h)]||c[h]||d[h]||t;return o?l.createElement(f,r(r({ref:n},m),{},{components:o})):l.createElement(f,r({ref:n},m))}));function f(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=o.length,r=new Array(t);r[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<t;u++)r[u]=o[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4462:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var l=o(87462),a=o(67294),t=o(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">harmonized</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_style/CustomColors">CustomColors</a></span>\n<span class="name ">harmonized</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="harmonized-param-dynamic"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a></span> <span class="parameter-name">dynamic</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p>Returns an instance of <a href="../../unself_style/CustomColors">CustomColors</a> in which the following custom\ncolors are harmonized with <code>dynamic</code>\'s <a href="https://api.flutter.dev/flutter/material/ColorScheme/primary.html">ColorScheme.primary</a>.</p>\n<ul>\n<li><a href="../../unself_style/CustomColors/sourceGold">CustomColors.sourceGold</a></li>\n<li><a href="../../unself_style/CustomColors/gold">CustomColors.gold</a></li>\n<li><a href="../../unself_style/CustomColors/onGold">CustomColors.onGold</a></li>\n<li><a href="../../unself_style/CustomColors/goldContainer">CustomColors.goldContainer</a></li>\n<li><a href="../../unself_style/CustomColors/onGoldContainer">CustomColors.onGoldContainer</a></li>\n<li><a href="../../unself_style/CustomColors/sourceVanilla">CustomColors.sourceVanilla</a></li>\n<li><a href="../../unself_style/CustomColors/vanilla">CustomColors.vanilla</a></li>\n<li><a href="../../unself_style/CustomColors/onVanilla">CustomColors.onVanilla</a></li>\n<li><a href="../../unself_style/CustomColors/vanillaContainer">CustomColors.vanillaContainer</a></li>\n<li><a href="../../unself_style/CustomColors/onVanillaContainer">CustomColors.onVanillaContainer</a></li>\n<li><a href="../../unself_style/CustomColors/sourceMauve">CustomColors.sourceMauve</a></li>\n<li><a href="../../unself_style/CustomColors/mauve">CustomColors.mauve</a></li>\n<li><a href="../../unself_style/CustomColors/onMauve">CustomColors.onMauve</a></li>\n<li><a href="../../unself_style/CustomColors/mauveContainer">CustomColors.mauveContainer</a></li>\n<li><a href="../../unself_style/CustomColors/onMauveContainer">CustomColors.onMauveContainer</a></li>\n</ul>\n<p>See also:</p>\n<ul>\n<li><a href="https://m3.material.io/styles/color/the-color-system/custom-colors#harmonization">m3.material.io/styles/color/the-color-system/custom-colors#harmonization</a></li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CustomColors harmonized(ColorScheme dynamic) {\n  return copyWith(\n    sourceGold: sourceGold!.harmonizeWith(dynamic.primary),\n    gold: gold!.harmonizeWith(dynamic.primary),\n    onGold: onGold!.harmonizeWith(dynamic.primary),\n    goldContainer: goldContainer!.harmonizeWith(dynamic.primary),\n    onGoldContainer: onGoldContainer!.harmonizeWith(dynamic.primary),\n    sourceVanilla: sourceVanilla!.harmonizeWith(dynamic.primary),\n    vanilla: vanilla!.harmonizeWith(dynamic.primary),\n    onVanilla: onVanilla!.harmonizeWith(dynamic.primary),\n    vanillaContainer: vanillaContainer!.harmonizeWith(dynamic.primary),\n    onVanillaContainer: onVanillaContainer!.harmonizeWith(dynamic.primary),\n    sourceMauve: sourceMauve!.harmonizeWith(dynamic.primary),\n    mauve: mauve!.harmonizeWith(dynamic.primary),\n    onMauve: onMauve!.harmonizeWith(dynamic.primary),\n    mauveContainer: mauveContainer!.harmonizeWith(dynamic.primary),\n    onMauveContainer: onMauveContainer!.harmonizeWith(dynamic.primary),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/CustomColors">CustomColors</a></li>\n  <li class="self-crumb">harmonized method</li>\n</ol>\n\n\n    <h5>CustomColors class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_style/CustomColors#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_style/CustomColors/gold">gold</a></li>\n          <li><a href="../../unself_style/CustomColors/goldContainer">goldContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_style/CustomColors/mauve">mauve</a></li>\n          <li><a href="../../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onGold">onGold</a></li>\n          <li><a href="../../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauve">onMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanilla">onVanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceGold">sourceGold</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>\n          <li><a href="../../unself_style/CustomColors/vanilla">vanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#instance-methods">Methods</a></li>\n          <li><a href="../../unself_style/CustomColors/copyWith">copyWith</a></li>\n          <li><a href="../../unself_style/CustomColors/harmonized">harmonized</a></li>\n          <li><a href="../../unself_style/CustomColors/lerp">lerp</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/CustomColors#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"harmonized method",sidebar_label:"harmonized",hide_title:!0},i=void 0,u={unversionedId:"api/unself_style/CustomColors/harmonized",id:"api/unself_style/CustomColors/harmonized",title:"harmonized method",description:"",source:"@site/developer/api/unself_style/CustomColors/harmonized.mdx",sourceDirName:"api/unself_style/CustomColors",slug:"/api/unself_style/CustomColors/harmonized",permalink:"/developer/api/unself_style/CustomColors/harmonized",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/CustomColors/harmonized.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"harmonized method",sidebar_label:"harmonized",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"goldContainer",permalink:"/developer/api/unself_style/CustomColors/goldContainer"},next:{title:"lerp",permalink:"/developer/api/unself_style/CustomColors/lerp"}},m={},c=[],d={toc:c};function h(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,l.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)(r,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);