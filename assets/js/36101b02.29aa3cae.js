"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(n),u=r,h=f["".concat(s,".").concat(u)]||f[u]||p[u]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>f});var a=n(87462),r=n(67294),i=n(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">createState</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></span>&gt;</span></span>\n<span class="name ">createState</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the mutable state for this widget at a given location in the tree.</p>\n<p>Subclasses should override this method to return a newly created\ninstance of their associated <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> subclass:</p>\n<pre class="language-dart"><code class="language-dart">@override\nState&lt;SomeWidget&gt; createState() =&gt; _SomeWidgetState();\n</code></pre>\n<p>The framework can call this method multiple times over the lifetime of\na <code>StatefulWidget</code>. For example, if the widget is inserted into the tree\nin multiple locations, the framework will create a separate <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object\nfor each location. Similarly, if the widget is removed from the tree and\nlater inserted into the tree again, the framework will call <a href="../../unself_component/UnselfExtendedSliverNavigationBar/createState">createState</a>\nagain to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of\n<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nState&lt;UnselfExtendedSliverNavigationBar&gt; createState() =&gt;\n    _UnselfExtendedSliverNavigationBarState();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n  <li class="self-crumb">createState method</li>\n</ol>\n\n\n    <h5>UnselfExtendedSliverNavigationBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar.constructor">UnselfExtendedSliverNavigationBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnselfExtendedSliverNavigationBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyTitle">automaticallyImplyTitle</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/border">border</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/brightness">brightness</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/heroTag">heroTag</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/largeTitle">largeTitle</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/middle">middle</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/opaque">opaque</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/padding">padding</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/previousPageTitle">previousPageTitle</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/stretch">stretch</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/trailing">trailing</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"createState method",sidebar_label:"createState",hide_title:!0},s=void 0,d={unversionedId:"api/unself_component/UnselfExtendedSliverNavigationBar/createState",id:"api/unself_component/UnselfExtendedSliverNavigationBar/createState",title:"createState method",description:"",source:"@site/developer/api/unself_component/UnselfExtendedSliverNavigationBar/createState.mdx",sourceDirName:"api/unself_component/UnselfExtendedSliverNavigationBar",slug:"/api/unself_component/UnselfExtendedSliverNavigationBar/createState",permalink:"/developer/api/unself_component/UnselfExtendedSliverNavigationBar/createState",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnselfExtendedSliverNavigationBar/createState.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"createState method",sidebar_label:"createState",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"brightness",permalink:"/developer/api/unself_component/UnselfExtendedSliverNavigationBar/brightness"},next:{title:"heroTag",permalink:"/developer/api/unself_component/UnselfExtendedSliverNavigationBar/heroTag"}},c={},f=[],p={toc:f};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);