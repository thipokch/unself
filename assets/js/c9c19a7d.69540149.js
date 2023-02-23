"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[85447],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),o=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=o(i),u=a,f=h["".concat(d,".").concat(u)]||h[u]||p[u]||l;return i?n.createElement(f,r(r({ref:t},c),{},{components:i})):n.createElement(f,r({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var o=2;o<l;o++)r[o]=i[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},92531:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=i(87462),a=i(67294),l=i(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">build</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method when this widget is inserted into the tree\nin a given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change\n(e.g., an <a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor and\nfrom the given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>\n<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once.</p>\n<p>The implementation of this method must only depend on:</p>\n<ul>\n<li>the fields of the widget, which themselves must not change over time,\nand</li>\n<li>any ambient state obtained from the <code>context</code> using\n<a href="https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>\n</ul>\n<p>If a widget\'s <a href="../../license_detail/LicenseDetailSliver/build">build</a> method is to depend on anything else, use a\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nWidget build(BuildContext context) {\n  final flattenedDetail =\n      context.read&lt;LicenseService&gt;().getLicenseDetail(packageName).flatten();\n\n  return SliverList(\n    delegate: SliverChildBuilderDelegate(\n      childCount: flattenedDetail.length,\n      (context, index) =&gt; flattenedDetail[index] != null\n          ? _LicenseBody(flattenedDetail[index]!)\n          : const Padding(\n              padding: EdgeInsets.all(UnSpaces.M),\n              child: Divider(),\n            ),\n    ),\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_license_detail</a></li>\n  <li><a href="../../license_detail/license_detail">license_detail</a></li>\n  <li><a href="../../license_detail/LicenseDetailSliver">LicenseDetailSliver</a></li>\n  <li class="self-crumb">build method</li>\n</ol>\n\n\n    <h5>LicenseDetailSliver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../license_detail/LicenseDetailSliver#constructors">Constructors</a></li>\n          <li><a href="../../license_detail/LicenseDetailSliver/LicenseDetailSliver.constructor">LicenseDetailSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../license_detail/LicenseDetailSliver#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../license_detail/LicenseDetailSliver/packageName">packageName</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../license_detail/LicenseDetailSliver#instance-methods">Methods</a></li>\n          <li><a href="../../license_detail/LicenseDetailSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../license_detail/LicenseDetailSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"build method",sidebar_label:"build",hide_title:!0},d=void 0,o={unversionedId:"api/license_detail/LicenseDetailSliver/build",id:"api/license_detail/LicenseDetailSliver/build",title:"build method",description:"",source:"@site/developer/api/license_detail/LicenseDetailSliver/build.mdx",sourceDirName:"api/license_detail/LicenseDetailSliver",slug:"/api/license_detail/LicenseDetailSliver/build",permalink:"/developer/api/license_detail/LicenseDetailSliver/build",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/license_detail/LicenseDetailSliver/build.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"build method",sidebar_label:"build",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"LicenseDetailSliver const constructor",permalink:"/developer/api/license_detail/LicenseDetailSliver/LicenseDetailSliver.constructor"},next:{title:"packageName",permalink:"/developer/api/license_detail/LicenseDetailSliver/packageName"}},c={},h=[],p={toc:h};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);