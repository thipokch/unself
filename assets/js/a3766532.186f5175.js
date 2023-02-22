"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17236],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=o(i),f=r,u=p["".concat(c,".").concat(f)]||p[f]||h[f]||s;return i?n.createElement(u,l(l({ref:t},d),{},{components:i})):n.createElement(u,l({ref:t},d))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,l=new Array(s);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var o=2;o<s;o++)l[o]=i[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},834:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=i(87462),r=i(67294),s=i(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">children</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>&gt;</span></span>\n  <span class="name ">children</span>\n  \n\n</section>\n\n\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">List&lt;Widget&gt; get children =&gt; [\n      ...{\n        "Data &amp; Privacy": onSelectData,\n      }.entries.map(ListItemBuilder.tile),\n      ListItemBuilder.section("GENERAL"),\n      ...{\n        "Appearance": onSelectAppearance,\n      }.entries.map(ListItemBuilder.tile),\n      ListItemBuilder.section("ABOUT"),\n      ...{\n        "Feedback": onSelectFeedback,\n        "Privacy Policy": onSelectPrivacy,\n        "Terms of Service": onSelectTerms,\n        "Acknowledgments": onSelectLicense,\n      }.entries.map(ListItemBuilder.tile),\n      // const AppInfoView(),\n    ];</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_list</a></li>\n  <li><a href="../../settings_list/settings_list">settings_list</a></li>\n  <li><a href="../../settings_list/SettingsListSliver">SettingsListSliver</a></li>\n  <li class="self-crumb">children property</li>\n</ol>\n\n\n    <h5>SettingsListSliver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListSliver#constructors">Constructors</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/SettingsListSliver.constructor">SettingsListSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../settings_list/SettingsListSliver#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../settings_list/SettingsListSliver/children">children</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectAppearance">onSelectAppearance</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectData">onSelectData</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectFeedback">onSelectFeedback</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectLicense">onSelectLicense</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectPrivacy">onSelectPrivacy</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/onSelectTerms">onSelectTerms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../settings_list/SettingsListSliver#instance-methods">Methods</a></li>\n          <li><a href="../../settings_list/SettingsListSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_list/SettingsListSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const a={title:"children property",sidebar_label:"children",hide_title:!0},c=void 0,o={unversionedId:"api/settings_list/SettingsListSliver/children",id:"api/settings_list/SettingsListSliver/children",title:"children property",description:"",source:"@site/developer/api/settings_list/SettingsListSliver/children.mdx",sourceDirName:"api/settings_list/SettingsListSliver",slug:"/api/settings_list/SettingsListSliver/children",permalink:"/developer/api/settings_list/SettingsListSliver/children",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_list/SettingsListSliver/children.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"children property",sidebar_label:"children",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/developer/api/settings_list/SettingsListSliver/build"},next:{title:"onSelectAppearance",permalink:"/developer/api/settings_list/SettingsListSliver/onSelectAppearance"}},d={},p=[],h={toc:p};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);