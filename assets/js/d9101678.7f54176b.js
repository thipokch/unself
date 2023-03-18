"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[81058],{3905:(e,n,r)=>{r.d(n,{Zo:()=>h,kt:()=>p});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},h=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=t,p=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(p,i(i({ref:n},h),{},{components:r})):a.createElement(p,i({ref:n},h))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=r(87462),t=r(67294),o=r(3905);function i(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">harmonizeWith</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a></span>\n<span class="name ">harmonizeWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="harmonizeWith-param-color"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a></span> <span class="parameter-name">color</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">ColorScheme harmonizeWith(Color color) =&gt; ColorScheme(\n      brightness: brightness,\n      primary: primary.harmonizeWith(color),\n      onPrimary: onPrimary.harmonizeWith(color),\n      primaryContainer: primaryContainer.harmonizeWith(color),\n      onPrimaryContainer: onPrimaryContainer.harmonizeWith(color),\n      secondary: secondary.harmonizeWith(color),\n      onSecondary: onSecondary.harmonizeWith(color),\n      secondaryContainer: secondaryContainer.harmonizeWith(color),\n      onSecondaryContainer: onSecondaryContainer.harmonizeWith(color),\n      tertiary: tertiary.harmonizeWith(color),\n      onTertiary: onTertiary.harmonizeWith(color),\n      tertiaryContainer: tertiaryContainer.harmonizeWith(color),\n      onTertiaryContainer: onTertiaryContainer.harmonizeWith(color),\n      error: error.harmonizeWith(color),\n      onError: onError.harmonizeWith(color),\n      errorContainer: errorContainer.harmonizeWith(color),\n      onErrorContainer: onErrorContainer.harmonizeWith(color),\n      background: background.harmonizeWith(color),\n      onBackground: onBackground.harmonizeWith(color),\n      surface: surface.harmonizeWith(color),\n      onSurface: onSurface.harmonizeWith(color),\n      surfaceVariant: surfaceVariant.harmonizeWith(color),\n      onSurfaceVariant: onSurfaceVariant.harmonizeWith(color),\n      outline: outline.harmonizeWith(color),\n      shadow: shadow.harmonizeWith(color),\n      inverseSurface: inverseSurface.harmonizeWith(color),\n      onInverseSurface: onInverseSurface.harmonizeWith(color),\n      inversePrimary: inversePrimary.harmonizeWith(color),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/Harmonize">Harmonize</a></li>\n  <li class="self-crumb">harmonizeWith method</li>\n</ol>\n\n\n    <h5>Harmonize extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_style/Harmonize#instance-methods">Methods</a></li>\n          <li><a href="../../unself_style/Harmonize/harmonizeWith">harmonizeWith</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"harmonizeWith method",sidebar_label:"harmonizeWith",hide_title:!0},s=void 0,c={unversionedId:"api/unself_style/Harmonize/harmonizeWith",id:"api/unself_style/Harmonize/harmonizeWith",title:"harmonizeWith method",description:"",source:"@site/developer/api/unself_style/Harmonize/harmonizeWith.mdx",sourceDirName:"api/unself_style/Harmonize",slug:"/api/unself_style/Harmonize/harmonizeWith",permalink:"/developer/api/unself_style/Harmonize/harmonizeWith",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/Harmonize/harmonizeWith.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"harmonizeWith method",sidebar_label:"harmonizeWith",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"materialSymbolsRounded",permalink:"/developer/api/unself_style/FontFamily/materialSymbolsRounded"},next:{title:"Harmonize",permalink:"/developer/api/unself_style/Harmonize"}},h={},m=[],d={toc:m};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);