"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[34704],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),c=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(a),f=l,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(h,s(s({ref:e},p),{},{components:a})):n.createElement(h,s({ref:e},p))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=f;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[u]="string"==typeof t?t:l,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},86443:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(87462),l=a(67294),r=a(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ButtonElevated.icon</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">ButtonElevated.icon</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="icon-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="icon-param-onPressed"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onPressed</span>, </span></li>\n<li><span class="parameter" id="icon-param-onLongPress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onLongPress</span>, </span></li>\n<li><span class="parameter" id="icon-param-onHover"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onHover</span>, </span></li>\n<li><span class="parameter" id="icon-param-onFocusChange"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onFocusChange</span>, </span></li>\n<li><span class="parameter" id="icon-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>\n<li><span class="parameter" id="icon-param-focusNode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> <span class="parameter-name">focusNode</span>, </span></li>\n<li><span class="parameter" id="icon-param-autofocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">autofocus</span>, </span></li>\n<li><span class="parameter" id="icon-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span></li>\n<li><span class="parameter" id="icon-param-icon"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">icon</span>, </span></li>\n<li><span class="parameter" id="icon-param-label"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">label</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory ButtonElevated.icon({\n  Key? key,\n  VoidCallback? onPressed,\n  VoidCallback? onLongPress,\n  ValueChanged&lt;bool&gt;? onHover,\n  ValueChanged&lt;bool&gt;? onFocusChange,\n  ButtonStyle? style,\n  FocusNode? focusNode,\n  bool? autofocus,\n  Clip? clipBehavior,\n  required Widget icon,\n  required Widget label,\n}) {\n  return ButtonElevated(\n    key: key,\n    onPressed: onPressed,\n    onLongPress: onLongPress,\n    onHover: onHover,\n    onFocusChange: onFocusChange,\n    style: style,\n    focusNode: focusNode,\n    autofocus: autofocus ?? false,\n    clipBehavior: clipBehavior ?? Clip.none,\n    child: ButtonIcon(\n      icon: icon,\n      label: label,\n    ),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/ButtonElevated">ButtonElevated</a></li>\n  <li class="self-crumb">ButtonElevated.icon factory constructor</li>\n</ol>\n\n\n    <h5>ButtonElevated class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/ButtonElevated#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/ButtonElevated/ButtonElevated.constructor">ButtonElevated</a></li>\n          <li><a href="../../unself_component/ButtonElevated/ButtonElevated.icon">icon</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_component/ButtonElevated#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>\n\n        <li class="section-title"><a href="../../unself_component/ButtonElevated#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>\n          <li><a href="../../unself_component/ButtonElevated/defaultStyleOf">defaultStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ElevatedButton/themeStyleOf.html">themeStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/ButtonElevated#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"ButtonElevated.icon factory constructor",sidebar_label:"ButtonElevated.icon factory constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/ButtonElevated/ButtonElevated.constructor",id:"api/unself_component/ButtonElevated/ButtonElevated.constructor",title:"ButtonElevated.icon factory constructor",description:"",source:"@site/developer/api/unself_component/ButtonElevated/ButtonElevated.constructor.mdx",sourceDirName:"api/unself_component/ButtonElevated",slug:"/api/unself_component/ButtonElevated/ButtonElevated.constructor",permalink:"/developer/api/unself_component/ButtonElevated/ButtonElevated.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/ButtonElevated/ButtonElevated.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"ButtonElevated.icon factory constructor",sidebar_label:"ButtonElevated.icon factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ButtonElevated",permalink:"/developer/api/unself_component/ButtonElevated/"},next:{title:"defaultStyleOf",permalink:"/developer/api/unself_component/ButtonElevated/defaultStyleOf"}},p={},u=[],d={toc:u};function f(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);