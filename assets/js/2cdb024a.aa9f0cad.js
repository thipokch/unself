"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19395],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(i),f=a,h=d["".concat(o,".").concat(f)]||d[f]||u[f]||s;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},99212:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(87462),a=i(67294),s=i(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">SettingsListSliver</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">SettingsListSliver</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectData"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectData</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectAppearance"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectAppearance</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectLicense"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectLicense</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectFeedback"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectFeedback</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectPrivacy"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectPrivacy</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectTerms"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectTerms</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const SettingsListSliver({\n  super.key,\n  required this.onSelectData,\n  required this.onSelectAppearance,\n  required this.onSelectLicense,\n  required this.onSelectFeedback,\n  required this.onSelectPrivacy,\n  required this.onSelectTerms,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_list</a></li>\n  <li><a href="../../settings_list/settings_list">settings_list</a></li>\n  <li><a href="../../settings_list/SettingsListSliver">SettingsListSliver</a></li>\n  <li class="self-crumb">SettingsListSliver const constructor</li>\n</ol>\n\n\n    <h5>SettingsListSliver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListSliver#constructors">Constructors</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/SettingsListSliver.constructor">SettingsListSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../settings_list/SettingsListSliver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../settings_list/SettingsListSliver/children">children</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectAppearance">onSelectAppearance</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectData">onSelectData</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectFeedback">onSelectFeedback</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectLicense">onSelectLicense</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectPrivacy">onSelectPrivacy</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectTerms">onSelectTerms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListSliver#instance-methods">Methods</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_list/SettingsListSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"SettingsListSliver const constructor",sidebar_label:"SettingsListSliver const constructor",hide_title:!0},o=void 0,c={unversionedId:"api/settings_list/SettingsListSliver/SettingsListSliver.constructor",id:"api/settings_list/SettingsListSliver/SettingsListSliver.constructor",title:"SettingsListSliver const constructor",description:"",source:"@site/developer/api/settings_list/SettingsListSliver/SettingsListSliver.constructor.mdx",sourceDirName:"api/settings_list/SettingsListSliver",slug:"/api/settings_list/SettingsListSliver/SettingsListSliver.constructor",permalink:"/developer/api/settings_list/SettingsListSliver/SettingsListSliver.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_list/SettingsListSliver/SettingsListSliver.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"SettingsListSliver const constructor",sidebar_label:"SettingsListSliver const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"SettingsListSliver",permalink:"/developer/api/settings_list/SettingsListSliver/"},next:{title:"build",permalink:"/developer/api/settings_list/SettingsListSliver/build"}},p={},d=[],u={toc:d};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);