"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[71608],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(a),f=i,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(h,s(s({ref:e},d),{},{components:a})):n.createElement(h,s({ref:e},d))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,s=new Array(r);s[0]=f;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[p]="string"==typeof t?t:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},16957:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),i=a(67294),r=a(3905);function s(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">SettingsDataSliver</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">SettingsDataSliver</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-onReset"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onReset</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Sliver of the SettingsDataPage.</p>\n<p>Add what it does</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const SettingsDataSliver({super.key, required this.onReset});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_data</a></li>\n  <li><a href="../../settings_data/settings_data">settings_data</a></li>\n  <li><a href="../../settings_data/SettingsDataSliver">SettingsDataSliver</a></li>\n  <li class="self-crumb">SettingsDataSliver const constructor</li>\n</ol>\n\n\n    <h5>SettingsDataSliver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_data/SettingsDataSliver#constructors">Constructors</a></li>\n          <li><a href="../../settings_data/SettingsDataSliver/SettingsDataSliver.constructor">SettingsDataSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../settings_data/SettingsDataSliver#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../settings_data/SettingsDataSliver/onReset">onReset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../settings_data/SettingsDataSliver#instance-methods">Methods</a></li>\n          <li><a href="../../settings_data/SettingsDataSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_data/SettingsDataSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../settings_data/SettingsDataSliver#static-methods">Static methods</a></li>\n          <li><a href="../../settings_data/SettingsDataSliver/children">children</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"SettingsDataSliver const constructor",sidebar_label:"SettingsDataSliver const constructor",hide_title:!0},o=void 0,c={unversionedId:"api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor",id:"api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor",title:"SettingsDataSliver const constructor",description:"",source:"@site/developer/api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor.mdx",sourceDirName:"api/settings_data/SettingsDataSliver",slug:"/api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor",permalink:"/developer/api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_data/SettingsDataSliver/SettingsDataSliver.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"SettingsDataSliver const constructor",sidebar_label:"SettingsDataSliver const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"SettingsDataSliver",permalink:"/developer/api/settings_data/SettingsDataSliver/"},next:{title:"build",permalink:"/developer/api/settings_data/SettingsDataSliver/build"}},d={},p=[],u={toc:p};function f(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);