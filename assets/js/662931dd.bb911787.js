"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14995],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(67294),i=a(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">CardTextEdit</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">CardTextEdit</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-initialText"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">initialText</span>, </span></li>\n<li><span class="parameter" id="-param-onChanged"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">onChanged</span>, </span></li>\n<li><span class="parameter" id="-param-onTap"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onTap</span>, </span></li>\n<li><span class="parameter" id="-param-autoFocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">autoFocus</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const CardTextEdit({\n  super.key,\n  required this.initialText,\n  required this.onChanged,\n  required this.onTap,\n  this.autoFocus,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/CardTextEdit">CardTextEdit</a></li>\n  <li class="self-crumb">CardTextEdit const constructor</li>\n</ol>\n\n\n    <h5>CardTextEdit class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/CardTextEdit#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/CardTextEdit/CardTextEdit.constructor">CardTextEdit</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/CardTextEdit#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/CardTextEdit/autoFocus">autoFocus</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/CardTextEdit/initialText">initialText</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/CardTextEdit/onChanged">onChanged</a></li>\n          <li><a href="../../unself_component/CardTextEdit/onTap">onTap</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/CardTextEdit#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/CardTextEdit/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/CardTextEdit#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"CardTextEdit const constructor",sidebar_label:"CardTextEdit const constructor",hide_title:!0},o=void 0,d={unversionedId:"api/unself_component/CardTextEdit/CardTextEdit.constructor",id:"api/unself_component/CardTextEdit/CardTextEdit.constructor",title:"CardTextEdit const constructor",description:"",source:"@site/developer/api/unself_component/CardTextEdit/CardTextEdit.constructor.mdx",sourceDirName:"api/unself_component/CardTextEdit",slug:"/api/unself_component/CardTextEdit/CardTextEdit.constructor",permalink:"/developer/api/unself_component/CardTextEdit/CardTextEdit.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/CardTextEdit/CardTextEdit.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"CardTextEdit const constructor",sidebar_label:"CardTextEdit const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CardTextEdit",permalink:"/developer/api/unself_component/CardTextEdit/"},next:{title:"autoFocus",permalink:"/developer/api/unself_component/CardTextEdit/autoFocus"}},c={},p=[],u={toc:p};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);