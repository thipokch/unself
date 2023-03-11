"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58914],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),u=s,f=d["".concat(o,".").concat(u)]||d[u]||g[u]||i;return a?n.createElement(f,r(r({ref:e},p),{},{components:a})):n.createElement(f,r({ref:e},p))}));function f(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:s,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70981:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),s=a(67294),i=a(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">SettingsListPage</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">SettingsListPage</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectData"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectData</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectAppearance"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectAppearance</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectLicense"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectLicense</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectFeedback"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectFeedback</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectPrivacy"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectPrivacy</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectTerms"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectTerms</span>, </span></li>\n<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const SettingsListPage({\n  super.key,\n  required this.onSelectData,\n  required this.onSelectAppearance,\n  required this.onSelectLicense,\n  required this.onSelectFeedback,\n  required this.onSelectPrivacy,\n  required this.onSelectTerms,\n  this.trailing,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_list</a></li>\n  <li><a href="../../settings_list/settings_list">settings_list</a></li>\n  <li><a href="../../settings_list/SettingsListPage">SettingsListPage</a></li>\n  <li class="self-crumb">SettingsListPage const constructor</li>\n</ol>\n\n\n    <h5>SettingsListPage class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListPage#constructors">Constructors</a></li>\n          <li><a href="../../settings_list/SettingsListPage/SettingsListPage.constructor">SettingsListPage</a></li>\n\n\n        <li class="section-title">\n          <a href="../../settings_list/SettingsListPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectAppearance">onSelectAppearance</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectData">onSelectData</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectFeedback">onSelectFeedback</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectLicense">onSelectLicense</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectPrivacy">onSelectPrivacy</a></li>\n          <li><a href="../../settings_list/SettingsListPage/onSelectTerms">onSelectTerms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../settings_list/SettingsListPage/trailing">trailing</a></li>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListPage#instance-methods">Methods</a></li>\n          <li><a href="../../settings_list/SettingsListPage/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_list/SettingsListPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"SettingsListPage const constructor",sidebar_label:"SettingsListPage const constructor",hide_title:!0},o=void 0,c={unversionedId:"api/settings_list/SettingsListPage/SettingsListPage.constructor",id:"api/settings_list/SettingsListPage/SettingsListPage.constructor",title:"SettingsListPage const constructor",description:"",source:"@site/developer/api/settings_list/SettingsListPage/SettingsListPage.constructor.mdx",sourceDirName:"api/settings_list/SettingsListPage",slug:"/api/settings_list/SettingsListPage/SettingsListPage.constructor",permalink:"/developer/api/settings_list/SettingsListPage/SettingsListPage.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_list/SettingsListPage/SettingsListPage.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"SettingsListPage const constructor",sidebar_label:"SettingsListPage const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"SettingsListPage",permalink:"/developer/api/settings_list/SettingsListPage/"},next:{title:"build",permalink:"/developer/api/settings_list/SettingsListPage/build"}},p={},d=[],g={toc:d};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);