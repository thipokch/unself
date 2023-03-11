"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=o,p=h["".concat(i,".").concat(f)]||h[f]||u[f]||l;return r?n.createElement(p,a(a({ref:t},d),{},{components:r})):n.createElement(p,a({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=r(87462),o=r(67294),l=r(3905);function a(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">lightColorStyle</span> constant \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a>\n          const <span class="name ">lightColorStyle</span>\n          \n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static const ColorScheme lightColorStyle = ColorScheme(\n  brightness: Brightness.light,\n  primary: Color(0xFF5455A9),\n  onPrimary: Color(0xFFFFFFFF),\n  primaryContainer: Color(0xFFE1DFFF),\n  onPrimaryContainer: Color(0xFF0B0664),\n  secondary: Color(0xFF5D5C72),\n  onSecondary: Color(0xFFFFFFFF),\n  secondaryContainer: Color(0xFFE2E0F9),\n  onSecondaryContainer: Color(0xFF1A1A2C),\n  tertiary: Color(0xFF795369),\n  onTertiary: Color(0xFFFFFFFF),\n  tertiaryContainer: Color(0xFFFFD8EC),\n  onTertiaryContainer: Color(0xFF2E1125),\n  error: Color(0xFFBA1A1A),\n  errorContainer: Color(0xFFFFDAD6),\n  onError: Color(0xFFFFFFFF),\n  onErrorContainer: Color(0xFF410002),\n  background: Color(0xFFFFFBFF),\n  onBackground: Color(0xFF1C1B1F),\n  surface: Color(0xFFFFFBFF),\n  onSurface: Color(0xFF1C1B1F),\n  surfaceVariant: Color(0xFFE4E1EC),\n  onSurfaceVariant: Color(0xFF47464F),\n  outline: Color(0xFF777680),\n  onInverseSurface: Color(0xFFF3EFF4),\n  inverseSurface: Color(0xFF313034),\n  inversePrimary: Color(0xFFC1C1FF),\n  shadow: Color(0xFF000000),\n  surfaceTint: Color(0xFF5455A9),\n);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/UnColorTheme">UnColorTheme</a></li>\n  <li class="self-crumb">lightColorStyle constant</li>\n</ol>\n\n\n    <h5>UnColorTheme class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/UnColorTheme#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/UnColorTheme/UnColorTheme.constructor">UnColorTheme</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_style/UnColorTheme#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../../unself_style/UnColorTheme#constants">Constants</a></li>\n          <li><a href="../../unself_style/UnColorTheme/darkColorStyle-constant">darkColorStyle</a></li>\n          <li><a href="../../unself_style/UnColorTheme/darkCustomColors-constant">darkCustomColors</a></li>\n          <li><a href="../../unself_style/UnColorTheme/lightColorStyle-constant">lightColorStyle</a></li>\n          <li><a href="../../unself_style/UnColorTheme/lightCustomColors-constant">lightCustomColors</a></li>\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"lightColorStyle constant",sidebar_label:"lightColorStyle",hide_title:!0},i=void 0,c={unversionedId:"api/unself_style/UnColorTheme/lightColorStyle",id:"api/unself_style/UnColorTheme/lightColorStyle",title:"lightColorStyle constant",description:"",source:"@site/developer/api/unself_style/UnColorTheme/lightColorStyle.mdx",sourceDirName:"api/unself_style/UnColorTheme",slug:"/api/unself_style/UnColorTheme/lightColorStyle",permalink:"/developer/api/unself_style/UnColorTheme/lightColorStyle",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/UnColorTheme/lightColorStyle.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"lightColorStyle constant",sidebar_label:"lightColorStyle",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"darkCustomColors",permalink:"/developer/api/unself_style/UnColorTheme/darkCustomColors"},next:{title:"lightCustomColors",permalink:"/developer/api/unself_style/UnColorTheme/lightCustomColors"}},d={},h=[],u={toc:h};function f(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);