"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">resolve</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span>\n<span class="name ">resolve</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="resolve-param-states"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState</a></span>&gt;</span></span> <span class="parameter-name">states</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Returns a value of type <code>T</code> that depends on <code>states</code>.</p>\n<p>Widgets like <a href="https://api.flutter.dev/flutter/material/TextButton-class.html">TextButton</a> and <a href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html">ElevatedButton</a> apply this method to their\ncurrent <a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState</a>s to compute colors and other visual parameters\nat build time.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nColor? resolve(Set&lt;MaterialState&gt; states) {\n  if (states.contains(MaterialState.disabled)) {\n    return onSurface?.withOpacity(0.12);\n  }\n\n  return primary;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/ButtonBackground">ButtonBackground</a></li>\n  <li class="self-crumb">resolve method</li>\n</ol>\n\n\n    <h5>ButtonBackground class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/ButtonBackground#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/ButtonBackground/ButtonBackground.constructor">ButtonBackground</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/ButtonBackground#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/ButtonBackground/onSurface">onSurface</a></li>\n          <li><a href="../../unself_component/ButtonBackground/primary">primary</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/ButtonBackground#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/ButtonBackground/resolve">resolve</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/ButtonBackground#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"resolve method",sidebar_label:"resolve",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/ButtonBackground/resolve",id:"api/unself_component/ButtonBackground/resolve",title:"resolve method",description:"",source:"@site/developer/api/unself_component/ButtonBackground/resolve.mdx",sourceDirName:"api/unself_component/ButtonBackground",slug:"/api/unself_component/ButtonBackground/resolve",permalink:"/developer/api/unself_component/ButtonBackground/resolve",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/ButtonBackground/resolve.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"resolve method",sidebar_label:"resolve",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"primary",permalink:"/developer/api/unself_component/ButtonBackground/primary"},next:{title:"ButtonElevated",permalink:"/developer/api/unself_component/ButtonElevated/"}},u={},d=[],p={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);