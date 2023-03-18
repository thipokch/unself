"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[72233],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=o(n),p=i,g=h["".concat(d,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(g,s(s({ref:e},c),{},{components:n})):a.createElement(g,s({ref:e},c))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[h]="string"==typeof t?t:i,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98305:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var a=n(87462),i=n(67294),r=n(3905);function s(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">build</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../settings_data/SettingsDataPage/build">build</a> method is to depend on anything else, use a\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nWidget build(BuildContext context) =&gt; UnAppPage(\n      name: const Text("Data &amp; Privacy"),\n      slivers: [\n        SettingsDataSliver(\n          onReset: () {\n            // FlutterPlatformAlert.showCustomAlert(\n            //   windowTitle: "Erase Your Data",\n            //   text:\n            //       "Erasing will restore this app to initial state. This action cannot be undone.",\n            //   positiveButtonTitle: "Not Now",\n            //   negativeButtonTitle: "Erase",\n            // ).then((selection) {\n            //   if (selection == CustomButton.negativeButton) {\n            //     // repository.reset().then((value) =&gt; const ExerciseFlow().go(context));\n            //   }\n            // });\n          },\n        )\n      ],\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_data</a></li>\n  <li><a href="../../settings_data/settings_data">settings_data</a></li>\n  <li><a href="../../settings_data/SettingsDataPage">SettingsDataPage</a></li>\n  <li class="self-crumb">build method</li>\n</ol>\n\n\n    <h5>SettingsDataPage class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_data/SettingsDataPage#constructors">Constructors</a></li>\n          <li><a href="../../settings_data/SettingsDataPage/SettingsDataPage.constructor">SettingsDataPage</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_data/SettingsDataPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../settings_data/SettingsDataPage#instance-methods">Methods</a></li>\n          <li><a href="../../settings_data/SettingsDataPage/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_data/SettingsDataPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"build method",sidebar_label:"build",hide_title:!0},d=void 0,o={unversionedId:"api/settings_data/SettingsDataPage/build",id:"api/settings_data/SettingsDataPage/build",title:"build method",description:"",source:"@site/developer/api/settings_data/SettingsDataPage/build.mdx",sourceDirName:"api/settings_data/SettingsDataPage",slug:"/api/settings_data/SettingsDataPage/build",permalink:"/developer/api/settings_data/SettingsDataPage/build",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_data/SettingsDataPage/build.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"build method",sidebar_label:"build",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"SettingsDataPage const constructor",permalink:"/developer/api/settings_data/SettingsDataPage/SettingsDataPage.constructor"},next:{title:"SettingsDataSliver",permalink:"/developer/api/settings_data/SettingsDataSliver/"}},c={},h=[],u={toc:h};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);