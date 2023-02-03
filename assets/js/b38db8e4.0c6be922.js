"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60319],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,p=u["".concat(i,".").concat(h)]||u[h]||f[h]||l;return t?n.createElement(p,a(a({ref:r},d),{},{components:t})):n.createElement(p,a({ref:r},d))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=h;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},49606:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=t(87462),o=t(67294),l=t(3905);function a(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">darkColorStyle</span> constant \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n        <section class="multi-line-signature">\n          \n          <a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a>\n          const <span class="name ">darkColorStyle</span>\n          \n\n        </section>\n        \n\n        \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static const ColorScheme darkColorStyle = ColorScheme(\n  brightness: Brightness.dark,\n  primary: Color(0xFFC1C1FF),\n  onPrimary: Color(0xFF242478),\n  primaryContainer: Color(0xFF3B3D8F),\n  onPrimaryContainer: Color(0xFFE1DFFF),\n  secondary: Color(0xFFC6C4DD),\n  onSecondary: Color(0xFF2F2F42),\n  secondaryContainer: Color(0xFF454559),\n  onSecondaryContainer: Color(0xFFE2E0F9),\n  tertiary: Color(0xFFE9B9D3),\n  onTertiary: Color(0xFF46263A),\n  tertiaryContainer: Color(0xFF5F3C51),\n  onTertiaryContainer: Color(0xFFFFD8EC),\n  error: Color(0xFFFFB4AB),\n  errorContainer: Color(0xFF93000A),\n  onError: Color(0xFF690005),\n  onErrorContainer: Color(0xFFFFDAD6),\n  background: Color(0xFF1C1B1F),\n  onBackground: Color(0xFFE5E1E6),\n  surface: Color(0xFF1C1B1F),\n  onSurface: Color(0xFFE5E1E6),\n  surfaceVariant: Color(0xFF47464F),\n  onSurfaceVariant: Color(0xFFC8C5D0),\n  outline: Color(0xFF918F9A),\n  onInverseSurface: Color(0xFF1C1B1F),\n  inverseSurface: Color(0xFFE5E1E6),\n  inversePrimary: Color(0xFF5455A9),\n  shadow: Color(0xFF000000),\n  surfaceTint: Color(0xFFC1C1FF),\n);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/UnColorTheme">UnColorTheme</a></li>\n  <li class="self-crumb">darkColorStyle constant</li>\n</ol>\n\n\n    <h5>UnColorTheme class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/UnColorTheme#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/UnColorTheme/UnColorTheme.constructor">UnColorTheme</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_style/UnColorTheme#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n        <li class="section-title"><a href="../../unself_style/UnColorTheme#constants">Constants</a></li>\n          <li><a href="../../unself_style/UnColorTheme/darkColorStyle-constant">darkColorStyle</a></li>\n          <li><a href="../../unself_style/UnColorTheme/darkCustomColors-constant">darkCustomColors</a></li>\n          <li><a href="../../unself_style/UnColorTheme/lightColorStyle-constant">lightColorStyle</a></li>\n          <li><a href="../../unself_style/UnColorTheme/lightCustomColors-constant">lightCustomColors</a></li>\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"darkColorStyle constant",sidebar_label:"darkColorStyle",hide_title:!0},i=void 0,c={unversionedId:"api/unself_style/UnColorTheme/darkColorStyle",id:"api/unself_style/UnColorTheme/darkColorStyle",title:"darkColorStyle constant",description:"",source:"@site/developer/api/unself_style/UnColorTheme/darkColorStyle.mdx",sourceDirName:"api/unself_style/UnColorTheme",slug:"/api/unself_style/UnColorTheme/darkColorStyle",permalink:"/developer/api/unself_style/UnColorTheme/darkColorStyle",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/UnColorTheme/darkColorStyle.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"darkColorStyle constant",sidebar_label:"darkColorStyle",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnColorTheme constructor",permalink:"/developer/api/unself_style/UnColorTheme/UnColorTheme.constructor"},next:{title:"darkCustomColors",permalink:"/developer/api/unself_style/UnColorTheme/darkCustomColors"}},d={},u=[],f={toc:u};function h(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)(a,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);