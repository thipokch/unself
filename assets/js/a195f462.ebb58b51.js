"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50663],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=l,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[d]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29554:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=t(87462),l=t(67294),o=t(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">PairingScrollController</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">PairingScrollController</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-group"><span>required</span> <span class="type-annotation"><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></span> <span class="parameter-name">group</span>, </span></li>\n<li><span class="parameter" id="-param-child"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">PairingScrollController({\n  Key? key,\n  required this.group,\n  required super.child,\n}) : super(\n        key: key,\n        controller: group._mirror,\n      );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollController">PairingScrollController</a></li>\n  <li class="self-crumb">PairingScrollController constructor</li>\n</ol>\n\n\n    <h5>PairingScrollController class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollController#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>\n          <li><a href="../../unself_component/PairingScrollController/group">group</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li><a href="../../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n          <li><a href="../../unself_component/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollController#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#static-methods">Static methods</a></li>\n          <li><a href="../../unself_component/PairingScrollController/of">of</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const a={title:"PairingScrollController constructor",sidebar_label:"PairingScrollController constructor",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollController/PairingScrollController.constructor",id:"api/unself_component/PairingScrollController/PairingScrollController.constructor",title:"PairingScrollController constructor",description:"",source:"@site/developer/api/unself_component/PairingScrollController/PairingScrollController.constructor.mdx",sourceDirName:"api/unself_component/PairingScrollController",slug:"/api/unself_component/PairingScrollController/PairingScrollController.constructor",permalink:"/developer/api/unself_component/PairingScrollController/PairingScrollController.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollController/PairingScrollController.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"PairingScrollController constructor",sidebar_label:"PairingScrollController constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"PairingScrollController",permalink:"/developer/api/unself_component/PairingScrollController/"},next:{title:"debugFillProperties",permalink:"/developer/api/unself_component/PairingScrollController/debugFillProperties"}},p={},d=[],u={toc:d};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);