"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnSliverAppBar</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnSliverAppBar</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-emoji"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">emoji</span>, </span></li>\n<li><span class="parameter" id="-param-title"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">title</span>, </span></li>\n<li><span class="parameter" id="-param-description"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">description</span>, </span></li>\n<li><span class="parameter" id="-param-implyLeading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">implyLeading</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-leading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">leading</span>, </span></li>\n<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>, </span></li>\n<li><span class="parameter" id="-param-isImmersive"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isImmersive</span> = <span class="default-value">false</span>, </span></li>\n<li><span class="parameter" id="-param-isCollapseCentered"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isCollapseCentered</span> = <span class="default-value">true</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnSliverAppBar({\n  super.key,\n  this.emoji,\n  required this.title,\n  this.description,\n  this.implyLeading = true,\n  this.leading,\n  this.trailing,\n  this.isImmersive = false,\n  this.isCollapseCentered = true,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>\n  <li class="self-crumb">UnSliverAppBar const constructor</li>\n</ol>\n\n\n    <h5>UnSliverAppBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnSliverAppBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/UnSliverAppBar.constructor">UnSliverAppBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnSliverAppBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnSliverAppBar/description">description</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/emoji">emoji</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/implyLeading">implyLeading</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/isCollapseCentered">isCollapseCentered</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/isImmersive">isImmersive</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/leading">leading</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/title">title</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/trailing">trailing</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnSliverAppBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnSliverAppBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnSliverAppBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"UnSliverAppBar const constructor",sidebar_label:"UnSliverAppBar const constructor",hide_title:!0},p=void 0,o={unversionedId:"api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor",id:"api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor",title:"UnSliverAppBar const constructor",description:"",source:"@site/developer/api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor.mdx",sourceDirName:"api/unself_component/UnSliverAppBar",slug:"/api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor",permalink:"/developer/api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnSliverAppBar/UnSliverAppBar.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"UnSliverAppBar const constructor",sidebar_label:"UnSliverAppBar const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnSliverAppBar",permalink:"/developer/api/unself_component/UnSliverAppBar/"},next:{title:"createState",permalink:"/developer/api/unself_component/UnSliverAppBar/createState"}},c={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);