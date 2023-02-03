"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[89317],{3905:(a,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>f});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var p=n.createContext({}),c=function(a){var t=n.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},o=function(a){var t=c(a.components);return n.createElement(p.Provider,{value:t},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,o=l(a,["components","mdxType","originalType","parentName"]),u=c(e),h=s,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return e?n.createElement(f,i(i({ref:t},o),{},{components:e})):n.createElement(f,i({ref:t},o))}));function f(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var r=e.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=a,l[u]="string"==typeof a?a:s,i[1]=l;for(var c=2;c<r;c++)i[c]=e[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},16591:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=e(87462),s=e(67294),r=e(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">when</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="when-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>\n), </span></li>\n<li><span class="parameter" id="when-param-apps"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-apps"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">apps</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-archive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"></ol>\n), </span></li>\n<li><span class="parameter" id="when-param-data"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-processing"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-progress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">progress</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="when-param-completed"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"></ol>\n), </span></li>\n<li><span class="parameter" id="when-param-errored"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult when&lt;TResult extends Object?&gt;({\n  required TResult Function() initial,\n  required TResult Function(List&lt;String&gt; apps) apps,\n  required TResult Function() archive,\n  required TResult Function(List&lt;String&gt; data) data,\n  required TResult Function(int progress) processing,\n  required TResult Function() completed,\n  required TResult Function(Object error, StackTrace stackTrace) errored,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n  <li class="self-crumb">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>UnpackAssistantState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},p=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantState/when",id:"api/unself_unpack_assistant/UnpackAssistantState/when",title:"when<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantState/when.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantState",slug:"/api/unself_unpack_assistant/UnpackAssistantState/when",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/when",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantState/when.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"when<TResult extends Object?> method",sidebar_label:"when",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"maybeWhen",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/maybeWhen"},next:{title:"whenOrNull",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/whenOrNull"}},o={},u=[],d={toc:u};function h(a){let{components:t,...e}=a;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);