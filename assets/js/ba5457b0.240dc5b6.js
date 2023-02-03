"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(o,".").concat(u)]||m[u]||p[u]||r;return n?l.createElement(f,s(s({ref:t},d),{},{components:n})):l.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var l=n(87462),a=n(67294),r=n(3905);function s(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">smallText</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://api.flutter.dev/flutter/material/TextTheme-class.html">TextTheme</a></span>\n  <span class="name ">smallText</span>\n  \n\n</section>\n\n\n<section class="desc markdown">\n  <p><code>TextTheme</code> for for small screens.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static TextTheme get smallText =&gt; TextTheme(\n      displayLarge: _.displayLarge._small,\n      displayMedium: _.displayMedium._small,\n      displaySmall: _.displaySmall._small,\n      headlineLarge: _.headlineLarge._small,\n      headlineMedium: _.headlineMedium._small,\n      headlineSmall: _.headlineSmall._small,\n      titleLarge: _.titleLarge._small,\n      titleMedium: _.titleMedium._small,\n      titleSmall: _.titleSmall._small,\n      bodyLarge: _.bodyLarge._small,\n      bodyMedium: _.bodyMedium._small,\n      bodySmall: _.bodySmall._small,\n      labelLarge: _.labelLarge._small,\n      labelMedium: _.labelMedium._small,\n      labelSmall: _.labelSmall._small,\n    );</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/UnTextTheme">UnTextTheme</a></li>\n  <li class="self-crumb">smallText property</li>\n</ol>\n\n\n    <h5>UnTextTheme class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/UnTextTheme#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/UnTextTheme/UnTextTheme.constructor">UnTextTheme</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_style/UnTextTheme#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnTextTheme#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/UnTextTheme#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n        <li class="section-title"><a href="../../unself_style/UnTextTheme#static-properties">Static properties</a></li>\n          <li><a href="../../unself_style/UnTextTheme/largeText">largeText</a></li>\n          <li><a href="../../unself_style/UnTextTheme/mediumText">mediumText</a></li>\n          <li><a href="../../unself_style/UnTextTheme/smallText">smallText</a></li>\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"smallText property",sidebar_label:"smallText",hide_title:!0},o=void 0,c={unversionedId:"api/unself_style/UnTextTheme/smallText",id:"api/unself_style/UnTextTheme/smallText",title:"smallText property",description:"",source:"@site/developer/api/unself_style/UnTextTheme/smallText.mdx",sourceDirName:"api/unself_style/UnTextTheme",slug:"/api/unself_style/UnTextTheme/smallText",permalink:"/developer/api/unself_style/UnTextTheme/smallText",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/UnTextTheme/smallText.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"smallText property",sidebar_label:"smallText",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"mediumText",permalink:"/developer/api/unself_style/UnTextTheme/mediumText"},next:{title:"UnTheme",permalink:"/developer/api/unself_style/UnTheme/"}},d={},m=[],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);