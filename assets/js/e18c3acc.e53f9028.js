"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14528],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var s=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,s,a=function(t,e){if(null==t)return{};var n,s,a={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=s.createContext({}),o=function(t){var e=s.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=o(t.components);return s.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},f=s.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=o(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return n?s.createElement(h,i(i({ref:e},p),{},{components:n})):s.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66281:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=n(87462),a=n(67294),r=n(3905);function i(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnpackAssistantEvent.selectArchive</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnpackAssistantEvent.selectArchive</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="selectArchive-param-xFile">{<span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>User selected the archive file to be imported</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory UnpackAssistantEvent.selectArchive({\n  required XFile xFile,\n}) = _SelectArchive;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></li>\n  <li class="self-crumb">UnpackAssistantEvent.selectArchive const constructor</li>\n</ol>\n\n\n    <h5>UnpackAssistantEvent class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>\n          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"UnpackAssistantEvent.selectArchive const constructor",sidebar_label:"UnpackAssistantEvent.selectArchive const constructor",hide_title:!0},l=void 0,o={unversionedId:"api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor",id:"api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor",title:"UnpackAssistantEvent.selectArchive const constructor",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantEvent",slug:"/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"UnpackAssistantEvent.selectArchive const constructor",sidebar_label:"UnpackAssistantEvent.selectArchive const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantEvent",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/"},next:{title:"map",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/map"}},p={},u=[],d={toc:u};function f(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);