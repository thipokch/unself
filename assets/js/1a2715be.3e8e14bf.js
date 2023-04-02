"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[46377],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>f});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),c=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},o=function(a){var e=c(a.components);return n.createElement(p.Provider,{value:e},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,o=l(a,["components","mdxType","originalType","parentName"]),u=c(t),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?n.createElement(f,i(i({ref:e},o),{},{components:t})):n.createElement(f,i({ref:e},o))}));function f(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l[u]="string"==typeof a?a:s,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45262:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(87462),s=t(67294),r=t(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Initial</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-apps"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Apps</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-archive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Archive</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-data"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Data</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-processing"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Processing</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-completed"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Completed</span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-errored"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Errored</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult map&lt;TResult extends Object?&gt;({\n  required TResult Function(_Initial value) initial,\n  required TResult Function(_Apps value) apps,\n  required TResult Function(_Archive value) archive,\n  required TResult Function(_Data value) data,\n  required TResult Function(_Processing value) processing,\n  required TResult Function(_Completed value) completed,\n  required TResult Function(_Errored value) errored,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>UnpackAssistantState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},p=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantState/map",id:"api/unself_unpack_assistant/UnpackAssistantState/map",title:"map<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantState/map.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantState",slug:"/api/unself_unpack_assistant/UnpackAssistantState/map",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/map",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantState/map.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantState.errored const constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor"},next:{title:"mapOrNull",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/mapOrNull"}},o={},u=[],d={toc:u};function m(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);