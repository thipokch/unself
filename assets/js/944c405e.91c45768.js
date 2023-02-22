"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77468],{3905:(t,a,e)=>{e.d(a,{Zo:()=>o,kt:()=>h});var n=e(67294);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){s(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function c(t,a){if(null==t)return{};var e,n,s=function(t,a){if(null==t)return{};var e,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(s[e]=t[e]);return s}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var l=n.createContext({}),p=function(t){var a=n.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},o=function(t){var a=p(t.components);return n.createElement(l.Provider,{value:a},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(t,a){var e=t.components,s=t.mdxType,r=t.originalType,l=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),u=p(e),f=s,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return e?n.createElement(h,i(i({ref:a},o),{},{components:e})):n.createElement(h,i({ref:a},o))}));function h(t,a){var e=arguments,s=a&&a.mdxType;if("string"==typeof t||s){var r=e.length,i=new Array(r);i[0]=f;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=t,c[u]="string"==typeof t?t:s,i[1]=c;for(var p=2;p<r;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}f.displayName="MDXCreateElement"},74564:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=e(87462),s=e(67294),r=e(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnpackAssistantState.errored</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnpackAssistantState.errored</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="errored-param-error">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>\n<li><span class="parameter" id="errored-param-stackTrace"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Assistant has errored.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory UnpackAssistantState.errored({\n  required final Object error,\n  required final StackTrace stackTrace,\n}) = _Errored;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n  <li class="self-crumb">UnpackAssistantState.errored const constructor</li>\n</ol>\n\n\n    <h5>UnpackAssistantState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"UnpackAssistantState.errored const constructor",sidebar_label:"UnpackAssistantState.errored const constructor",hide_title:!0},l=void 0,p={unversionedId:"api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor",id:"api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor",title:"UnpackAssistantState.errored const constructor",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantState",slug:"/api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"UnpackAssistantState.errored const constructor",sidebar_label:"UnpackAssistantState.errored const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantState",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/"},next:{title:"map",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantState/map"}},o={},u=[],d={toc:u};function f(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);