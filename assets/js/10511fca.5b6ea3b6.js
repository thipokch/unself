"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10331],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(g,p(p({ref:a},o),{},{components:t})):n.createElement(g,p({ref:a},o))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<s;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29254:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),r=t(67294),s=t(3905);function p(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">maybeMap&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">maybeMap</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="maybeMap-param-$default"><span class="type-annotation">TResult</span> <span class="parameter-name">$default</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_SettingsAppearanceState</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeMap-param-initial">{<span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Initial</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeMap-param-errored"><span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Errored</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>(<ol class="parameter-list"></ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult maybeMap&lt;TResult extends Object?&gt;(\n  TResult Function(_SettingsAppearanceState value)? $default, {\n  TResult Function(_Initial value)? initial,\n  TResult Function(_Errored value)? errored,\n  required TResult orElse(),\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_appearance</a></li>\n  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState">SettingsAppearanceState</a></li>\n  <li class="self-crumb">maybeMap&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>SettingsAppearanceState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#constructors">Constructors</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor">SettingsAppearanceState</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.errored">errored</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.initial">initial</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/map">map</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/when">when</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"maybeMap<TResult extends Object?> method",sidebar_label:"maybeMap<TResult",hide_title:!0},l=void 0,c={unversionedId:"packages/settings_appearance/SettingsAppearanceState/maybeMap",id:"packages/settings_appearance/SettingsAppearanceState/maybeMap",title:"maybeMap<TResult extends Object?> method",description:"",source:"@site/reference/packages/settings_appearance/SettingsAppearanceState/maybeMap.mdx",sourceDirName:"packages/settings_appearance/SettingsAppearanceState",slug:"/packages/settings_appearance/SettingsAppearanceState/maybeMap",permalink:"/reference/packages/settings_appearance/SettingsAppearanceState/maybeMap",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/settings_appearance/SettingsAppearanceState/maybeMap.mdx",tags:[],version:"current",frontMatter:{title:"maybeMap<TResult extends Object?> method",sidebar_label:"maybeMap<TResult",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"mapOrNull<TResult",permalink:"/reference/packages/settings_appearance/SettingsAppearanceState/mapOrNull"},next:{title:"maybeWhen<TResult",permalink:"/reference/packages/settings_appearance/SettingsAppearanceState/maybeWhen"}},o={},d=[],u={toc:d};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(p,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);