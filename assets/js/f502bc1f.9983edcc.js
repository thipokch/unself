"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(67294),s=n(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnRootSheetPage&lt;<wbr><span class="type-parameter">T</span>&gt;</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnRootSheetPage&lt;<wbr><span class="type-parameter">T</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-child">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>, </span></li>\n<li><span class="parameter" id="-param-maintainState"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">maintainState</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-fullscreenDialog"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">fullscreenDialog</span> = <span class="default-value">false</span>, </span></li>\n<li><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LocalKey-class.html">LocalKey</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-arguments"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span> <span class="parameter-name">arguments</span>, </span></li>\n<li><span class="parameter" id="-param-restorationId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">restorationId</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnRootSheetPage({\n  required this.child,\n  this.maintainState = true,\n  this.fullscreenDialog = false,\n  super.key,\n  super.name,\n  super.arguments,\n  super.restorationId,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnRootSheetPage">UnRootSheetPage<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>\n  <li class="self-crumb">UnRootSheetPage const constructor</li>\n</ol>\n\n\n    <h5>UnRootSheetPage class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/UnRootSheetPage.constructor">UnRootSheetPage</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnRootSheetPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/child">child</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/fullscreenDialog">fullscreenDialog</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/maintainState">maintainState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/createRoute">createRoute</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnRootSheetPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"UnRootSheetPage const constructor",sidebar_label:"UnRootSheetPage const constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor",id:"api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor",title:"UnRootSheetPage const constructor",description:"",source:"@site/developer/api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor.mdx",sourceDirName:"api/unself_component/UnRootSheetPage",slug:"/api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor",permalink:"/developer/api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnRootSheetPage/UnRootSheetPage.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"UnRootSheetPage const constructor",sidebar_label:"UnRootSheetPage const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnRootSheetPage",permalink:"/developer/api/unself_component/UnRootSheetPage/"},next:{title:"child",permalink:"/developer/api/unself_component/UnRootSheetPage/child"}},p={},u=[],d={toc:u};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);