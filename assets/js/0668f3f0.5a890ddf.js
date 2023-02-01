"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[90044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),h=n,u=d["".concat(p,".").concat(h)]||d[h]||f[h]||i;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(87462),n=a(67294),i=a(3905);function l(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">createState</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_app/App">App</a></span>&gt;</span></span>\n<span class="name ">createState</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the mutable state for this widget at a given location in the tree.</p>\n<p>Subclasses should override this method to return a newly created\ninstance of their associated <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> subclass:</p>\n<pre class="language-dart"><code class="language-dart">@override\nState&lt;SomeWidget&gt; createState() =&gt; _SomeWidgetState();\n</code></pre>\n<p>The framework can call this method multiple times over the lifetime of\na <code>StatefulWidget</code>. For example, if the widget is inserted into the tree\nin multiple locations, the framework will create a separate <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object\nfor each location. Similarly, if the widget is removed from the tree and\nlater inserted into the tree again, the framework will call <a href="../../unself_app/App/createState">createState</a>\nagain to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of\n<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nState&lt;App&gt; createState() =&gt; _AppState();</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_app</a></li>\n  <li><a href="../../unself_app/unself_app">unself_app</a></li>\n  <li><a href="../../unself_app/App">App</a></li>\n  <li class="self-crumb">createState method</li>\n</ol>\n\n\n    <h5>App class</h5>\n    <ol>\n\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_app/App#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_app/App#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_app/App/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_app/App#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_app/App#static-methods">Static methods</a></li>\n          <li><a href="../../unself_app/App/init">init</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"createState method",sidebar_label:"createState",hide_title:!0},p=void 0,o={unversionedId:"api/unself_app/App/createState",id:"api/unself_app/App/createState",title:"createState method",description:"",source:"@site/developer/api/unself_app/App/createState.mdx",sourceDirName:"api/unself_app/App",slug:"/api/unself_app/App/createState",permalink:"/developer/api/unself_app/App/createState",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_app/App/createState.mdx",tags:[],version:"current",lastUpdatedAt:1675229020,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"createState method",sidebar_label:"createState",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"App",permalink:"/developer/api/unself_app/App/"},next:{title:"init",permalink:"/developer/api/unself_app/App/init"}},c={},d=[],f={toc:d};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);