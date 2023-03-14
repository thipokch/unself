"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30036],{3905:(a,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var t=n(67294);function l(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function r(a,e){if(null==a)return{};var n,t,l=function(a,e){if(null==a)return{};var n,t,l={},o=Object.keys(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(l[n]=a[n]);return l}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(l[n]=a[n])}return l}var i=t.createContext({}),p=function(a){var e=t.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},u=function(a){var e=p(a.components);return t.createElement(i.Provider,{value:e},a.children)},c="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,l=a.mdxType,o=a.originalType,i=a.parentName,u=r(a,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?t.createElement(h,s(s({ref:e},u),{},{components:n})):t.createElement(h,s({ref:e},u))}));function h(a,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r[c]="string"==typeof a?a:l,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8668:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var t=n(87462),l=n(67294),o=n(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">copyWith</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="../../unself_style/CustomColors">CustomColors</a></span>\n<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-sourceGold">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceGold</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-gold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">gold</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onGold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGold</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-goldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">goldContainer</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onGoldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGoldContainer</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-sourceVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceVanilla</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-vanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanilla</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanilla</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-vanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanillaContainer</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onVanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanillaContainer</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-sourceMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceMauve</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-mauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauve</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauve</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-mauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauveContainer</span>, </span></li>\n<li><span class="parameter" id="copyWith-param-onMauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauveContainer</span>}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates a copy of this theme extension with the given fields\nreplaced by the non-null parameter values.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nCustomColors copyWith({\n  Color? sourceGold,\n  Color? gold,\n  Color? onGold,\n  Color? goldContainer,\n  Color? onGoldContainer,\n  Color? sourceVanilla,\n  Color? vanilla,\n  Color? onVanilla,\n  Color? vanillaContainer,\n  Color? onVanillaContainer,\n  Color? sourceMauve,\n  Color? mauve,\n  Color? onMauve,\n  Color? mauveContainer,\n  Color? onMauveContainer,\n}) {\n  return CustomColors(\n    sourceGold: sourceGold ?? this.sourceGold,\n    gold: gold ?? this.gold,\n    onGold: onGold ?? this.onGold,\n    goldContainer: goldContainer ?? this.goldContainer,\n    onGoldContainer: onGoldContainer ?? this.onGoldContainer,\n    sourceVanilla: sourceVanilla ?? this.sourceVanilla,\n    vanilla: vanilla ?? this.vanilla,\n    onVanilla: onVanilla ?? this.onVanilla,\n    vanillaContainer: vanillaContainer ?? this.vanillaContainer,\n    onVanillaContainer: onVanillaContainer ?? this.onVanillaContainer,\n    sourceMauve: sourceMauve ?? this.sourceMauve,\n    mauve: mauve ?? this.mauve,\n    onMauve: onMauve ?? this.onMauve,\n    mauveContainer: mauveContainer ?? this.mauveContainer,\n    onMauveContainer: onMauveContainer ?? this.onMauveContainer,\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/CustomColors">CustomColors</a></li>\n  <li class="self-crumb">copyWith method</li>\n</ol>\n\n\n    <h5>CustomColors class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_style/CustomColors#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_style/CustomColors/gold">gold</a></li>\n          <li><a href="../../unself_style/CustomColors/goldContainer">goldContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_style/CustomColors/mauve">mauve</a></li>\n          <li><a href="../../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onGold">onGold</a></li>\n          <li><a href="../../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauve">onMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanilla">onVanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceGold">sourceGold</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>\n          <li><a href="../../unself_style/CustomColors/vanilla">vanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#instance-methods">Methods</a></li>\n          <li><a href="../../unself_style/CustomColors/copyWith">copyWith</a></li>\n          <li><a href="../../unself_style/CustomColors/harmonized">harmonized</a></li>\n          <li><a href="../../unself_style/CustomColors/lerp">lerp</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/CustomColors#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},i=void 0,p={unversionedId:"api/unself_style/CustomColors/copyWith",id:"api/unself_style/CustomColors/copyWith",title:"copyWith method",description:"",source:"@site/developer/api/unself_style/CustomColors/copyWith.mdx",sourceDirName:"api/unself_style/CustomColors",slug:"/api/unself_style/CustomColors/copyWith",permalink:"/developer/api/unself_style/CustomColors/copyWith",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/CustomColors/copyWith.mdx",tags:[],version:"current",lastUpdatedAt:1678784170,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"copyWith method",sidebar_label:"copyWith",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CustomColors const constructor",permalink:"/developer/api/unself_style/CustomColors/CustomColors.constructor"},next:{title:"gold",permalink:"/developer/api/unself_style/CustomColors/gold"}},u={},c=[],d={toc:c};function m(a){let{components:e,...n}=a;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);