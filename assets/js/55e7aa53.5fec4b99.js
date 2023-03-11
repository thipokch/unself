"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11191],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>f});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),c=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=c(a.components);return n.createElement(p.Provider,{value:e},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,p=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),u=c(t),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(f,r(r({ref:e},o),{},{components:t})):n.createElement(f,r({ref:e},o))}));function f(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[u]="string"==typeof a?a:s,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75149:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">mapOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult?</span>\n<span class="name ">mapOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="mapOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="mapOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="mapOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="mapOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span></li>\n</ol>\n)?}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult? mapOrNull&lt;TResult extends Object?&gt;({\n  TResult? Function(_SelectApp value)? selectApp,\n  TResult? Function(_SelectArchive value)? selectArchive,\n  TResult? Function(_SelectData value)? selectData,\n  TResult? Function(_Start value)? start,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></li>\n  <li class="self-crumb">mapOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>UnpackAssistantEvent class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"mapOrNull<TResult extends Object?> method",sidebar_label:"mapOrNull",hide_title:!0},p=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull",id:"api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull",title:"mapOrNull<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantEvent",slug:"/api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantEvent/mapOrNull.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"mapOrNull<TResult extends Object?> method",sidebar_label:"mapOrNull",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/map"},next:{title:"maybeMap",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/maybeMap"}},o={},u=[],d={toc:u};function m(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);