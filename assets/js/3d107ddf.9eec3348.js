"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[28457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(h,s(s({ref:t},f),{},{components:n})):a.createElement(h,s({ref:t},f))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(67294),l=n(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnScaffold</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnScaffold</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-slivers"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>&gt;</span></span> <span class="parameter-name">slivers</span>, </span></li>\n<li><span class="parameter" id="-param-controller"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a>?</span> <span class="parameter-name">controller</span>, </span></li>\n<li><span class="parameter" id="-param-physics"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ScrollPhysics-class.html">ScrollPhysics</a>?</span> <span class="parameter-name">physics</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnScaffold({\n  super.key,\n  required this.slivers,\n  this.controller,\n  this.physics,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnScaffold">UnScaffold</a></li>\n  <li class="self-crumb">UnScaffold const constructor</li>\n</ol>\n\n\n    <h5>UnScaffold class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnScaffold#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnScaffold/UnScaffold.constructor">UnScaffold</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnScaffold#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnScaffold/controller">controller</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnScaffold/physics">physics</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnScaffold/slivers">slivers</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnScaffold#instance-methods">Methods</a></li>\n          <li><a href="../../unself_component/UnScaffold/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnScaffold#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"UnScaffold const constructor",sidebar_label:"UnScaffold const constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/UnScaffold/UnScaffold.constructor",id:"api/unself_component/UnScaffold/UnScaffold.constructor",title:"UnScaffold const constructor",description:"",source:"@site/developer/api/unself_component/UnScaffold/UnScaffold.constructor.mdx",sourceDirName:"api/unself_component/UnScaffold",slug:"/api/unself_component/UnScaffold/UnScaffold.constructor",permalink:"/developer/api/unself_component/UnScaffold/UnScaffold.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnScaffold/UnScaffold.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"UnScaffold const constructor",sidebar_label:"UnScaffold const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnScaffold",permalink:"/developer/api/unself_component/UnScaffold/"},next:{title:"build",permalink:"/developer/api/unself_component/UnScaffold/build"}},f={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);