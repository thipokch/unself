"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[37037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},50968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=a(87462),r=a(67294),s=a(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">SettingsAppearanceState.errored</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">SettingsAppearanceState.errored</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="errored-param-error">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="errored-param-stackTrace"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory SettingsAppearanceState.errored({\n  required final Object error,\n  required final StackTrace stackTrace,\n}) = _Errored;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_appearance</a></li>\n  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li><a href="../../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>\n  <li class="self-crumb">SettingsAppearanceState.errored const constructor</li>\n</ol>\n\n\n    <h5>SettingsAppearanceState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceState#constructors">Constructors</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor">SettingsAppearanceState</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.errored">errored</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.initial">initial</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_appearance/SettingsAppearanceState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/map">map</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/when">when</a></li>\n          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"SettingsAppearanceState.errored const constructor",sidebar_label:"SettingsAppearanceState.errored const constructor",hide_title:!0},p=void 0,l={unversionedId:"api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor",id:"api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor",title:"SettingsAppearanceState.errored const constructor",description:"",source:"@site/developer/api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor.mdx",sourceDirName:"api/settings_appearance/SettingsAppearanceState",slug:"/api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor",permalink:"/developer/api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"SettingsAppearanceState.errored const constructor",sidebar_label:"SettingsAppearanceState.errored const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"SettingsAppearanceState",permalink:"/developer/api/settings_appearance/SettingsAppearanceState/"},next:{title:"map",permalink:"/developer/api/settings_appearance/SettingsAppearanceState/map"}},o={},d=[],u={toc:d};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);