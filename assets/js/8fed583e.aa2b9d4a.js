"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),o=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),h=a,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||s;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var o=2;o<s;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),a=n(67294),s=n(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">build</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../unself_unpack_assistant/UnpackAssistantView/build">build</a> method is to depend on anything else, use a\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nWidget build(BuildContext context) =&gt; UnpackAssistantBuilder(\n      builder: (context, state) =&gt; Center(\n        child: Column(\n          children: [\n            Text(state.toString()),\n            ButtonText(\n              onPressed: () =&gt; XFilePicker.instance\n                  .pickFiles(\n                    type: FileType.custom,\n                    allowedExtensions: [\'zip\'],\n                    withData: false,\n                    withReadStream: false,\n                  )\n                  .then(\n                    (_) =&gt; context\n                        .read&lt;UnpackAssistantBloc&gt;()\n                        .add(UnpackAssistantEvent.selectArchive(\n                          xFile: _!.files.single.xFile,\n                        )),\n                  ),\n              child: const Text(\'Select Archive\'),\n            ),\n          ],\n        ),\n      ),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li><a href="../../unself_unpack_assistant/UnpackAssistantView">UnpackAssistantView</a></li>\n  <li class="self-crumb">build method</li>\n</ol>\n\n\n    <h5>UnpackAssistantView class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantView#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantView/UnpackAssistantView.constructor">UnpackAssistantView</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack_assistant/UnpackAssistantView#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantView#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack_assistant/UnpackAssistantView/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantView#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"build method",sidebar_label:"build",hide_title:!0},d=void 0,o={unversionedId:"api/unself_unpack_assistant/UnpackAssistantView/build",id:"api/unself_unpack_assistant/UnpackAssistantView/build",title:"build method",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantView/build.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantView",slug:"/api/unself_unpack_assistant/UnpackAssistantView/build",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantView/build",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantView/build.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"build method",sidebar_label:"build",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantView const constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantView/UnpackAssistantView.constructor"},next:{title:"unself_user",permalink:"/developer/api/unself_user/"}},c={},u=[],p={toc:u};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);