"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[22485],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>h});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},r=Object.keys(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(s=0;s<r.length;s++)t=r[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var p=s.createContext({}),c=function(a){var e=s.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},o=function(a){var e=c(a.components);return s.createElement(p.Provider,{value:e},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,p=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),u=c(t),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?s.createElement(h,l(l({ref:e},o),{},{components:t})):s.createElement(h,l({ref:e},o))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[u]="string"==typeof a?a:n,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63782:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=t(87462),n=t(67294),r=t(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">maybeWhen</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="maybeWhen-param-initial">{<span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-apps"><span class="type-annotation">TResult</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-apps"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">apps</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-archive"><span class="type-annotation">TResult</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-data"><span class="type-annotation">TResult</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-processing"><span class="type-annotation">TResult</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-progress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">progress</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-completed"><span class="type-annotation">TResult</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-errored"><span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>(<ol class="parameter-list"></ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult maybeWhen&lt;TResult extends Object?&gt;({\n  TResult Function()? initial,\n  TResult Function(List&lt;String&gt; apps)? apps,\n  TResult Function()? archive,\n  TResult Function(List&lt;String&gt; data)? data,\n  TResult Function(int progress)? processing,\n  TResult Function()? completed,\n  TResult Function(Object error, StackTrace stackTrace)? errored,\n  required TResult orElse(),\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n  <li class="self-crumb">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>UnpackAssistantState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"maybeWhen<TResult extends Object?> method",sidebar_label:"maybeWhen",hide_title:!0},p=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantState/maybeWhen",id:"api/unself_unpack_assistant/UnpackAssistantState/maybeWhen",title:"maybeWhen<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantState/maybeWhen.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantState",slug:"/api/unself_unpack_assistant/UnpackAssistantState/maybeWhen",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/maybeWhen",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantState/maybeWhen.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"maybeWhen<TResult extends Object?> method",sidebar_label:"maybeWhen",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"maybeMap",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/maybeMap"},next:{title:"when",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/when"}},o={},u=[],d={toc:u};function m(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,s.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);