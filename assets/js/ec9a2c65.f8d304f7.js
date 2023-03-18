"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),f=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=f(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=f(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var f=2;f<i;f++)l[f]=n[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>f,toc:()=>c});var a=n(87462),r=n(67294),i=n(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">preferredSize</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-ui/Size-class.html">Size</a></span>\n  <span class="name ">preferredSize</span>\n  <div class="features"><span class="feature">override</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p>The size this widget would prefer if it were otherwise unconstrained.</p>\n<p>In many cases it\'s only necessary to define one preferred dimension.\nFor example the <a href="https://api.flutter.dev/flutter/material/Scaffold-class.html">Scaffold</a> only depends on its app bar\'s preferred\nheight. In that case implementations of this method can just return\n<code>Size.fromHeight(myAppBarHeight)</code>.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nSize get preferredSize {\n  return const Size.fromHeight(_kNavBarPersistentHeight);\n}</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n  <li class="self-crumb">preferredSize property</li>\n</ol>\n\n\n    <h5>UnselfNavigationBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor">UnselfNavigationBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnselfNavigationBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyMiddle">automaticallyImplyMiddle</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/border">border</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/brightness">brightness</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/heroTag">heroTag</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/middle">middle</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/padding">padding</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/preferredSize">preferredSize</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/previousPageTitle">previousPageTitle</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/trailing">trailing</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/shouldFullyObstruct">shouldFullyObstruct</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnselfNavigationBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"preferredSize property",sidebar_label:"preferredSize",hide_title:!0},s=void 0,f={unversionedId:"api/unself_component/UnselfNavigationBar/preferredSize",id:"api/unself_component/UnselfNavigationBar/preferredSize",title:"preferredSize property",description:"",source:"@site/developer/api/unself_component/UnselfNavigationBar/preferredSize.mdx",sourceDirName:"api/unself_component/UnselfNavigationBar",slug:"/api/unself_component/UnselfNavigationBar/preferredSize",permalink:"/developer/api/unself_component/UnselfNavigationBar/preferredSize",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnselfNavigationBar/preferredSize.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"preferredSize property",sidebar_label:"preferredSize",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"padding",permalink:"/developer/api/unself_component/UnselfNavigationBar/padding"},next:{title:"previousPageTitle",permalink:"/developer/api/unself_component/UnselfNavigationBar/previousPageTitle"}},d={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);