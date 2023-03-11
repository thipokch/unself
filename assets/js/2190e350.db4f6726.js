"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),f=l,h=p["".concat(o,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),l=n(67294),r=n(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ButtonOutlined.icon</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">ButtonOutlined.icon</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="icon-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="icon-param-onPressed"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onPressed</span>, </span></li>\n<li><span class="parameter" id="icon-param-onLongPress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onLongPress</span>, </span></li>\n<li><span class="parameter" id="icon-param-onHover"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onHover</span>, </span></li>\n<li><span class="parameter" id="icon-param-onFocusChange"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onFocusChange</span>, </span></li>\n<li><span class="parameter" id="icon-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>\n<li><span class="parameter" id="icon-param-focusNode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> <span class="parameter-name">focusNode</span>, </span></li>\n<li><span class="parameter" id="icon-param-autofocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">autofocus</span>, </span></li>\n<li><span class="parameter" id="icon-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span></li>\n<li><span class="parameter" id="icon-param-icon"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">icon</span>, </span></li>\n<li><span class="parameter" id="icon-param-label"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">label</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory ButtonOutlined.icon({\n  Key? key,\n  VoidCallback? onPressed,\n  VoidCallback? onLongPress,\n  ValueChanged&lt;bool&gt;? onHover,\n  ValueChanged&lt;bool&gt;? onFocusChange,\n  ButtonStyle? style,\n  FocusNode? focusNode,\n  bool? autofocus,\n  Clip? clipBehavior,\n  required Widget icon,\n  required Widget label,\n}) {\n  return ButtonOutlined(\n    key: key,\n    onPressed: onPressed,\n    onLongPress: onLongPress,\n    onHover: onHover,\n    onFocusChange: onFocusChange,\n    style: style,\n    focusNode: focusNode,\n    autofocus: autofocus ?? false,\n    clipBehavior: clipBehavior ?? Clip.none,\n    child: ButtonIcon(\n      icon: icon,\n      label: label,\n    ),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/ButtonOutlined">ButtonOutlined</a></li>\n  <li class="self-crumb">ButtonOutlined.icon factory constructor</li>\n</ol>\n\n\n    <h5>ButtonOutlined class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/ButtonOutlined#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/ButtonOutlined/ButtonOutlined.constructor">ButtonOutlined</a></li>\n          <li><a href="../../unself_component/ButtonOutlined/ButtonOutlined.icon">icon</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/ButtonOutlined#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/ButtonOutlined/isEnabled">isEnabled</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>\n\n        <li class="section-title"><a href="../../unself_component/ButtonOutlined#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>\n          <li><a href="../../unself_component/ButtonOutlined/defaultStyleOf">defaultStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/OutlinedButton/themeStyleOf.html">themeStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/ButtonOutlined#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"ButtonOutlined.icon factory constructor",sidebar_label:"ButtonOutlined.icon factory constructor",hide_title:!0},o=void 0,u={unversionedId:"api/unself_component/ButtonOutlined/ButtonOutlined.constructor",id:"api/unself_component/ButtonOutlined/ButtonOutlined.constructor",title:"ButtonOutlined.icon factory constructor",description:"",source:"@site/developer/api/unself_component/ButtonOutlined/ButtonOutlined.constructor.mdx",sourceDirName:"api/unself_component/ButtonOutlined",slug:"/api/unself_component/ButtonOutlined/ButtonOutlined.constructor",permalink:"/developer/api/unself_component/ButtonOutlined/ButtonOutlined.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/ButtonOutlined/ButtonOutlined.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ButtonOutlined.icon factory constructor",sidebar_label:"ButtonOutlined.icon factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ButtonOutlined",permalink:"/developer/api/unself_component/ButtonOutlined/"},next:{title:"defaultStyleOf",permalink:"/developer/api/unself_component/ButtonOutlined/defaultStyleOf"}},c={},p=[],d={toc:p};function f(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);