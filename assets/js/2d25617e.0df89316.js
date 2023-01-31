"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,i(i({ref:t},o),{},{components:a})):n.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),s=a(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult?</span>\n<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-$default"><span class="type-annotation">TResult?</span> <span class="parameter-name">$default</span>(<ol class="parameter-list"><li><span class="parameter" id="param-themeMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeMode.html">ThemeMode</a></span> <span class="parameter-name">themeMode</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-initial">{<span class="type-annotation">TResult?</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-errored"><span class="type-annotation">TResult?</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>\n</ol>\n)?}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult? whenOrNull&lt;TResult extends Object?&gt;(\n  TResult? Function(ThemeMode themeMode)? $default, {\n  TResult? Function()? initial,\n  TResult? Function(Object error, StackTrace stackTrace)? errored,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_appearance</a></li>\n  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState">SettingsAppearanceState</a></li>\n  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>SettingsAppearanceState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#constructors">Constructors</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor">SettingsAppearanceState</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.errored">errored</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.initial">initial</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/map">map</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/when">when</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull<TResult",hide_title:!0},p=void 0,c={unversionedId:"packages/settings_appearance/SettingsAppearanceState/whenOrNull",id:"packages/settings_appearance/SettingsAppearanceState/whenOrNull",title:"whenOrNull<TResult extends Object?> method",description:"",source:"@site/reference/packages/settings_appearance/SettingsAppearanceState/whenOrNull.mdx",sourceDirName:"packages/settings_appearance/SettingsAppearanceState",slug:"/packages/settings_appearance/SettingsAppearanceState/whenOrNull",permalink:"/reference/packages/settings_appearance/SettingsAppearanceState/whenOrNull",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/settings_appearance/SettingsAppearanceState/whenOrNull.mdx",tags:[],version:"current",frontMatter:{title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull<TResult",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"when<TResult",permalink:"/reference/packages/settings_appearance/SettingsAppearanceState/when"},next:{title:"SettingsAppearanceView",permalink:"/reference/packages/settings_appearance/SettingsAppearanceView/"}},o={},d=[],u={toc:d};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);