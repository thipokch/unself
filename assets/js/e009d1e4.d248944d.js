"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),u=l,h=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),l=r(67294),o=r(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">of</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a>?</span>\n<span class="name ">of</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="of-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Returns the <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a> most closely associated with the given\ncontext.</p>\n<p>If no ancestor is found, this method will assert in debug mode, and throw\nan exception in release mode.</p>\n<p>Calling this method will create a dependency on the closest\n<a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController-class.html">PrimaryScrollController</a> in the <code>context</code>.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/maybeOf.html">PrimaryScrollController.maybeOf</a>, which is similar to this method, but\nreturns null if no <a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController-class.html">PrimaryScrollController</a> ancestor is found.</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static PairingScrollControllerGroup? of(BuildContext context) =&gt; context\n    .dependOnInheritedWidgetOfExactType&lt;PairingScrollController&gt;()\n    ?.group;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollController">PairingScrollController</a></li>\n  <li class="self-crumb">of static method</li>\n</ol>\n\n\n    <h5>PairingScrollController class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollController#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>\n          <li><a href="../../unself_component/PairingScrollController/group">group</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li><a href="../../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n          <li><a href="../../unself_component/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollController#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#static-methods">Static methods</a></li>\n          <li><a href="../../unself_component/PairingScrollController/of">of</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const a={title:"of static method",sidebar_label:"of",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollController/of",id:"api/unself_component/PairingScrollController/of",title:"of static method",description:"",source:"@site/developer/api/unself_component/PairingScrollController/of.mdx",sourceDirName:"api/unself_component/PairingScrollController",slug:"/api/unself_component/PairingScrollController/of",permalink:"/developer/api/unself_component/PairingScrollController/of",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollController/of.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"of static method",sidebar_label:"of",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"group",permalink:"/developer/api/unself_component/PairingScrollController/group"},next:{title:"updateShouldNotify",permalink:"/developer/api/unself_component/PairingScrollController/updateShouldNotify"}},d={},p=[],f={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);