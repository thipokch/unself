"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16154],{3905:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>f});var s=e(67294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,s)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function i(a,t){if(null==a)return{};var e,s,n=function(a,t){if(null==a)return{};var e,s,n={},r=Object.keys(a);for(s=0;s<r.length;s++)e=r[s],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(s=0;s<r.length;s++)e=r[s],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var p=s.createContext({}),c=function(a){var t=s.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},o=function(a){var t=c(a.components);return s.createElement(p.Provider,{value:t},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var t=a.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(a,t){var e=a.components,n=a.mdxType,r=a.originalType,p=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),u=c(e),h=n,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return e?s.createElement(f,l(l({ref:t},o),{},{components:e})):s.createElement(f,l({ref:t},o))}));function f(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var r=e.length,l=new Array(r);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=a,i[u]="string"==typeof a?a:n,l[1]=i;for(var c=2;c<r;c++)l[c]=e[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,e)}h.displayName="MDXCreateElement"},38486:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=e(87462),n=e(67294),r=e(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult?</span>\n<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-initial">{<span class="type-annotation">TResult?</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-apps"><span class="type-annotation">TResult?</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-apps"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">apps</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-archive"><span class="type-annotation">TResult?</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-data"><span class="type-annotation">TResult?</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-processing"><span class="type-annotation">TResult?</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-progress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">progress</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-completed"><span class="type-annotation">TResult?</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"></ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-errored"><span class="type-annotation">TResult?</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>\n</ol>\n)?}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult? whenOrNull&lt;TResult extends Object?&gt;({\n  TResult? Function()? initial,\n  TResult? Function(List&lt;String&gt; apps)? apps,\n  TResult? Function()? archive,\n  TResult? Function(List&lt;String&gt; data)? data,\n  TResult? Function(int progress)? processing,\n  TResult? Function()? completed,\n  TResult? Function(Object error, StackTrace stackTrace)? errored,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>UnpackAssistantState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull",hide_title:!0},p=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantState/whenOrNull",id:"api/unself_unpack_assistant/UnpackAssistantState/whenOrNull",title:"whenOrNull<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantState/whenOrNull.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantState",slug:"/api/unself_unpack_assistant/UnpackAssistantState/whenOrNull",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/whenOrNull",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantState/whenOrNull.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"when",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/when"},next:{title:"UnpackAssistantView",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantView/"}},o={},u=[],d={toc:u};function h(a){let{components:t,...e}=a;return(0,r.kt)("wrapper",(0,s.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);