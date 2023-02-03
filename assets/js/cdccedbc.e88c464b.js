"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21384],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>h});var a=e(67294);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,s=function(t,n){if(null==t)return{};var e,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(s[e]=t[e]);return s}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var i=a.createContext({}),o=function(t){var n=a.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):c(c({},n),t)),e},p=function(t){var n=o(t.components);return a.createElement(i.Provider,{value:n},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(t,n){var e=t.components,s=t.mdxType,r=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=o(e),f=s,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return e?a.createElement(h,c(c({ref:n},p),{},{components:e})):a.createElement(h,c({ref:n},p))}));function h(t,n){var e=arguments,s=n&&n.mdxType;if("string"==typeof t||s){var r=e.length,c=new Array(r);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=t,l[u]="string"==typeof t?t:s,c[1]=l;for(var o=2;o<r;o++)c[o]=e[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,e)}f.displayName="MDXCreateElement"},73940:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=e(87462),s=e(67294),r=e(3905);function c(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnpackAssistantBloc</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">UnpackAssistantBloc</span>(<wbr>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">UnpackAssistantBloc() : super(const _Initial()) {\n  on&lt;_SelectApp&gt;(_onSelectApp);\n  on&lt;_SelectArchive&gt;(_onSelectArchive);\n  on&lt;_SelectData&gt;(_onSelectData);\n  on&lt;_Start&gt;(_onStart);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a></li>\n  <li class="self-crumb">UnpackAssistantBloc constructor</li>\n</ol>\n\n\n    <h5>UnpackAssistantBloc class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor">UnpackAssistantBloc</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantBloc#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/onError">onError</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/onEvent">onEvent</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"UnpackAssistantBloc constructor",sidebar_label:"UnpackAssistantBloc constructor",hide_title:!0},i=void 0,o={unversionedId:"api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor",id:"api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor",title:"UnpackAssistantBloc constructor",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantBloc",slug:"/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"UnpackAssistantBloc constructor",sidebar_label:"UnpackAssistantBloc constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantBloc",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantBloc/"},next:{title:"onError",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantBloc/onError"}},p={},u=[],d={toc:u};function f(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);