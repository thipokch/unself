"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=l,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),l=n(67294),r=n(3905);function o(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">lerp</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="../../unself_style/CustomColors">CustomColors</a></span>\n<span class="name ">lerp</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="lerp-param-other"><span>covariant</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeExtension-class.html">ThemeExtension</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_style/CustomColors">CustomColors</a></span>&gt;</span>?</span> <span class="parameter-name">other</span>, </span></li>\n<li><span class="parameter" id="lerp-param-t"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">t</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Linearly interpolate with another <a href="https://api.flutter.dev/flutter/material/ThemeExtension-class.html">ThemeExtension</a> object.</p>\n<p>The <code>t</code> argument represents position on the timeline, with 0.0 meaning\nthat the interpolation has not started, returning <code>a</code> (or something\nequivalent to <code>a</code>), 1.0 meaning that the interpolation has finished,\nreturning <code>b</code> (or something equivalent to <code>b</code>), and values in between\nmeaning that the interpolation is at the relevant point on the timeline\nbetween <code>a</code> and <code>b</code>. The interpolation can be extrapolated beyond 0.0 and\n1.0, so negative values and values greater than 1.0 are valid (and can\neasily be generated by curves such as <a href="https://api.flutter.dev/flutter/animation/Curves/elasticInOut-constant.html">Curves.elasticInOut</a>).</p>\n<p>Values for <code>t</code> are usually obtained from an <a href="https://api.flutter.dev/flutter/animation/Animation-class.html">Animation&lt;double&gt;</a>, such as\nan <a href="https://api.flutter.dev/flutter/animation/AnimationController-class.html">AnimationController</a>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nCustomColors lerp(ThemeExtension&lt;CustomColors&gt;? other, double t) {\n  if (other is! CustomColors) {\n    return this;\n  }\n\n  return CustomColors(\n    sourceGold: Color.lerp(sourceGold, other.sourceGold, t),\n    gold: Color.lerp(gold, other.gold, t),\n    onGold: Color.lerp(onGold, other.onGold, t),\n    goldContainer: Color.lerp(goldContainer, other.goldContainer, t),\n    onGoldContainer: Color.lerp(onGoldContainer, other.onGoldContainer, t),\n    sourceVanilla: Color.lerp(sourceVanilla, other.sourceVanilla, t),\n    vanilla: Color.lerp(vanilla, other.vanilla, t),\n    onVanilla: Color.lerp(onVanilla, other.onVanilla, t),\n    vanillaContainer: Color.lerp(vanillaContainer, other.vanillaContainer, t),\n    onVanillaContainer:\n        Color.lerp(onVanillaContainer, other.onVanillaContainer, t),\n    sourceMauve: Color.lerp(sourceMauve, other.sourceMauve, t),\n    mauve: Color.lerp(mauve, other.mauve, t),\n    onMauve: Color.lerp(onMauve, other.onMauve, t),\n    mauveContainer: Color.lerp(mauveContainer, other.mauveContainer, t),\n    onMauveContainer: Color.lerp(onMauveContainer, other.onMauveContainer, t),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_style</a></li>\n  <li><a href="../../unself_style/unself_style">unself_style</a></li>\n  <li><a href="../../unself_style/CustomColors">CustomColors</a></li>\n  <li class="self-crumb">lerp method</li>\n</ol>\n\n\n    <h5>CustomColors class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#constructors">Constructors</a></li>\n          <li><a href="../../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_style/CustomColors#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_style/CustomColors/gold">gold</a></li>\n          <li><a href="../../unself_style/CustomColors/goldContainer">goldContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_style/CustomColors/mauve">mauve</a></li>\n          <li><a href="../../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onGold">onGold</a></li>\n          <li><a href="../../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauve">onMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanilla">onVanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceGold">sourceGold</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>\n          <li><a href="../../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>\n          <li><a href="../../unself_style/CustomColors/vanilla">vanilla</a></li>\n          <li><a href="../../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>\n\n        <li class="section-title"><a href="../../unself_style/CustomColors#instance-methods">Methods</a></li>\n          <li><a href="../../unself_style/CustomColors/copyWith">copyWith</a></li>\n          <li><a href="../../unself_style/CustomColors/harmonized">harmonized</a></li>\n          <li><a href="../../unself_style/CustomColors/lerp">lerp</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_style/CustomColors#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"lerp method",sidebar_label:"lerp",hide_title:!0},i=void 0,u={unversionedId:"api/unself_style/CustomColors/lerp",id:"api/unself_style/CustomColors/lerp",title:"lerp method",description:"",source:"@site/developer/api/unself_style/CustomColors/lerp.mdx",sourceDirName:"api/unself_style/CustomColors",slug:"/api/unself_style/CustomColors/lerp",permalink:"/developer/api/unself_style/CustomColors/lerp",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/CustomColors/lerp.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"lerp method",sidebar_label:"lerp",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"harmonized",permalink:"/developer/api/unself_style/CustomColors/harmonized"},next:{title:"mauve",permalink:"/developer/api/unself_style/CustomColors/mauve"}},c={},d=[],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);