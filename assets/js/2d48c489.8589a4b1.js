"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,h=p["".concat(o,".").concat(u)]||p[u]||f[u]||i;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),i=r(3905);function l(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">createState</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_component/UnSliverArtBar">UnSliverArtBar</a></span>&gt;</span></span>\n<span class="name ">createState</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the mutable state for this widget at a given location in the tree.</p>\n<p>Subclasses should override this method to return a newly created\ninstance of their associated <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> subclass:</p>\n<pre class="language-dart"><code class="language-dart">@override\nState&lt;SomeWidget&gt; createState() =&gt; _SomeWidgetState();\n</code></pre>\n<p>The framework can call this method multiple times over the lifetime of\na <code>StatefulWidget</code>. For example, if the widget is inserted into the tree\nin multiple locations, the framework will create a separate <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object\nfor each location. Similarly, if the widget is removed from the tree and\nlater inserted into the tree again, the framework will call <a href="../../unself_component/UnSliverArtBar/createState">createState</a>\nagain to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of\n<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nState&lt;UnSliverArtBar&gt; createState() =&gt; _UnSliverArtBarState();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>\n  <li class="self-crumb">createState method</li>\n</ol>\n\n\n    <h5>UnSliverArtBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnSliverArtBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/UnSliverArtBar.constructor">UnSliverArtBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnSliverArtBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnSliverArtBar/action">action</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/background">background</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/description">description</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/emoji">emoji</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/isImmersive">isImmersive</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/trailing">trailing</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnSliverArtBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnSliverArtBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnSliverArtBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"createState method",sidebar_label:"createState",hide_title:!0},o=void 0,c={unversionedId:"api/unself_component/UnSliverArtBar/createState",id:"api/unself_component/UnSliverArtBar/createState",title:"createState method",description:"",source:"@site/developer/api/unself_component/UnSliverArtBar/createState.mdx",sourceDirName:"api/unself_component/UnSliverArtBar",slug:"/api/unself_component/UnSliverArtBar/createState",permalink:"/developer/api/unself_component/UnSliverArtBar/createState",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnSliverArtBar/createState.mdx",tags:[],version:"current",lastUpdatedAt:1675229020,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"createState method",sidebar_label:"createState",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"background",permalink:"/developer/api/unself_component/UnSliverArtBar/background"},next:{title:"description",permalink:"/developer/api/unself_component/UnSliverArtBar/description"}},d={},p=[],f={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);