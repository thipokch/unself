"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6479],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=s,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(f,l(l({ref:a},u),{},{components:t})):n.createElement(f,l({ref:a},u))}));function f(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[c]="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93417:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),s=t(67294),r=t(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">CustomColors</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">CustomColors</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-sourceGold">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceGold</span>, </span></li>\n<li><span class="parameter" id="-param-gold"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">gold</span>, </span></li>\n<li><span class="parameter" id="-param-onGold"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGold</span>, </span></li>\n<li><span class="parameter" id="-param-goldContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">goldContainer</span>, </span></li>\n<li><span class="parameter" id="-param-onGoldContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGoldContainer</span>, </span></li>\n<li><span class="parameter" id="-param-sourceVanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceVanilla</span>, </span></li>\n<li><span class="parameter" id="-param-vanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanilla</span>, </span></li>\n<li><span class="parameter" id="-param-onVanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanilla</span>, </span></li>\n<li><span class="parameter" id="-param-vanillaContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanillaContainer</span>, </span></li>\n<li><span class="parameter" id="-param-onVanillaContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanillaContainer</span>, </span></li>\n<li><span class="parameter" id="-param-sourceMauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceMauve</span>, </span></li>\n<li><span class="parameter" id="-param-mauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauve</span>, </span></li>\n<li><span class="parameter" id="-param-onMauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauve</span>, </span></li>\n<li><span class="parameter" id="-param-mauveContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauveContainer</span>, </span></li>\n<li><span class="parameter" id="-param-onMauveContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauveContainer</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const CustomColors({\n  required this.sourceGold,\n  required this.gold,\n  required this.onGold,\n  required this.goldContainer,\n  required this.onGoldContainer,\n  required this.sourceVanilla,\n  required this.vanilla,\n  required this.onVanilla,\n  required this.vanillaContainer,\n  required this.onVanillaContainer,\n  required this.sourceMauve,\n  required this.mauve,\n  required this.onMauve,\n  required this.mauveContainer,\n  required this.onMauveContainer,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/CustomColors">CustomColors</a></li>\n  <li class="self-crumb">CustomColors const constructor</li>\n</ol>\n\n\n    <h5>CustomColors class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_style/CustomColors#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_style/CustomColors/gold">gold</a></li>\n          <li><a href="../../unself_style/CustomColors/goldContainer">goldContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_style/CustomColors/mauve">mauve</a></li>\n          <li><a href="../../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onGold">onGold</a></li>\n          <li><a href="../../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauve">onMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanilla">onVanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceGold">sourceGold</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>\n          <li><a href="../../unself_style/CustomColors/vanilla">vanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#instance-methods">Methods</a></li>\n          <li><a href="../../unself_style/CustomColors/copyWith">copyWith</a></li>\n          <li><a href="../../unself_style/CustomColors/harmonized">harmonized</a></li>\n          <li><a href="../../unself_style/CustomColors/lerp">lerp</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/CustomColors#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"CustomColors const constructor",sidebar_label:"CustomColors const constructor",hide_title:!0},i=void 0,p={unversionedId:"api/unself_style/CustomColors/CustomColors.constructor",id:"api/unself_style/CustomColors/CustomColors.constructor",title:"CustomColors const constructor",description:"",source:"@site/developer/api/unself_style/CustomColors/CustomColors.constructor.mdx",sourceDirName:"api/unself_style/CustomColors",slug:"/api/unself_style/CustomColors/CustomColors.constructor",permalink:"/developer/api/unself_style/CustomColors/CustomColors.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/CustomColors/CustomColors.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"CustomColors const constructor",sidebar_label:"CustomColors const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CustomColors",permalink:"/developer/api/unself_style/CustomColors/"},next:{title:"copyWith",permalink:"/developer/api/unself_style/CustomColors/copyWith"}},u={},c=[],d={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);