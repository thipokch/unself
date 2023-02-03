"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||f[d]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=n(67294),s=n(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-typedef">RouteFilter</span> typedef \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        <span class="name ">RouteFilter</span> =\n     <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> Function<span class="signature">(<span class="parameter" id="param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">route</span></span>)</span></span>\n\n    </section>\n\n    \n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">typedef RouteFilter = bool Function(Route&lt;dynamic&gt;? route);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_app</a></li>\n  <li><a href="../unself_app/unself_app">unself_app</a></li>\n  <li class="self-crumb">RouteFilter typedef</li>\n</ol>\n\n\n    <h5>unself_app library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_app/unself_app#classes">Classes</a></li>\n        <li><a href="../unself_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>\n        <li><a href="../unself_app/App">App</a></li>\n        <li><a href="../unself_app/AppRouter">AppRouter</a></li>\n        <li><a href="../unself_app/AppShell">AppShell</a></li>\n        <li><a href="../unself_app/LicenseDetailRoute">LicenseDetailRoute</a></li>\n        <li><a href="../unself_app/LicenseListRoute">LicenseListRoute</a></li>\n        <li><a href="../unself_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>\n        <li><a href="../unself_app/SettingsDataRoute">SettingsDataRoute</a></li>\n        <li><a href="../unself_app/SettingsListRoute">SettingsListRoute</a></li>\n        <li><a href="../unself_app/SettingsRoutes">SettingsRoutes</a></li>\n        <li><a href="../unself_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>\n        <li><a href="../unself_app/UnpackRoutes">UnpackRoutes</a></li>\n\n      <li class="section-title"><a href="../unself_app/unself_app#extensions">Extensions</a></li>\n        <li><a href="../unself_app/$LicenseDetailRouteExtension">$LicenseDetailRouteExtension</a></li>\n        <li><a href="../unself_app/$LicenseListRouteExtension">$LicenseListRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsAppearanceRouteExtension">$SettingsAppearanceRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsDataRouteExtension">$SettingsDataRouteExtension</a></li>\n        <li><a href="../unself_app/$SettingsRoutesExtension">$SettingsRoutesExtension</a></li>\n        <li><a href="../unself_app/$UnpackRoutesExtension">$UnpackRoutesExtension</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#properties">Properties</a></li>\n        <li><a href="../unself_app/$appRoutes">$appRoutes</a></li>\n        <li><a href="../unself_app/$settingsRoutes">$settingsRoutes</a></li>\n        <li><a href="../unself_app/$unpackRoutes">$unpackRoutes</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_app/unself_app#typedefs">Typedefs</a></li>\n        <li><a href="../unself_app/RouteFilter">RouteFilter</a></li>\n        <li><a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"RouteFilter typedef",sidebar_label:"RouteFilter",hide_title:!0},p=void 0,o={unversionedId:"api/unself_app/RouteFilter",id:"api/unself_app/RouteFilter",title:"RouteFilter typedef",description:"",source:"@site/developer/api/unself_app/RouteFilter.mdx",sourceDirName:"api/unself_app",slug:"/api/unself_app/RouteFilter",permalink:"/developer/api/unself_app/RouteFilter",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/RouteFilter.mdx",tags:[],version:"current",lastUpdatedAt:1675413494,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"RouteFilter typedef",sidebar_label:"RouteFilter",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"name",permalink:"/developer/api/unself_app/LicenseListRoute/name"},next:{title:"ScreenNameExtractor",permalink:"/developer/api/unself_app/ScreenNameExtractor"}},u={},c=[],f={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);