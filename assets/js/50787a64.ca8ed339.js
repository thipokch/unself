"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(h,l(l({ref:t},f),{},{components:a})):n.createElement(h,l({ref:t},f))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),i=a(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">createState</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></span>&gt;</span></span>\n<span class="name ">createState</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the mutable state for this widget at a given location in the tree.</p>\n<p>Subclasses should override this method to return a newly created\ninstance of their associated <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> subclass:</p>\n<pre class="language-dart"><code class="language-dart">@override\nState&lt;SomeWidget&gt; createState() =&gt; _SomeWidgetState();\n</code></pre>\n<p>The framework can call this method multiple times over the lifetime of\na <code>StatefulWidget</code>. For example, if the widget is inserted into the tree\nin multiple locations, the framework will create a separate <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object\nfor each location. Similarly, if the widget is removed from the tree and\nlater inserted into the tree again, the framework will call <a href="../../unself_component/UnselfSliverNavigationBar/createState">createState</a>\nagain to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of\n<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nState&lt;UnselfSliverNavigationBar&gt; createState() =&gt;\n    _UnselfSliverNavigationBarState();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n  <li class="self-crumb">createState method</li>\n</ol>\n\n\n    <h5>UnselfSliverNavigationBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnselfSliverNavigationBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor">UnselfSliverNavigationBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnselfSliverNavigationBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/automaticallyImplyTitle">automaticallyImplyTitle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/border">border</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/brightness">brightness</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/heroTag">heroTag</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/largeTitle">largeTitle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/middle">middle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/opaque">opaque</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/padding">padding</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/previousPageTitle">previousPageTitle</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/stretch">stretch</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/trailing">trailing</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnselfSliverNavigationBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnselfSliverNavigationBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"createState method",sidebar_label:"createState",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/UnselfSliverNavigationBar/createState",id:"api/unself_component/UnselfSliverNavigationBar/createState",title:"createState method",description:"",source:"@site/developer/api/unself_component/UnselfSliverNavigationBar/createState.mdx",sourceDirName:"api/unself_component/UnselfSliverNavigationBar",slug:"/api/unself_component/UnselfSliverNavigationBar/createState",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/createState",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnselfSliverNavigationBar/createState.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"createState method",sidebar_label:"createState",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"brightness",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/brightness"},next:{title:"heroTag",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/heroTag"}},f={},d=[],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);