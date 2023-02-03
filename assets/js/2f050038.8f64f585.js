"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59122],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>p});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=o(a),f=i,p=h["".concat(d,".").concat(f)]||h[f]||c[f]||r;return a?n.createElement(p,l(l({ref:e},u),{},{components:a})):n.createElement(p,l({ref:e},u))}));function p(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=f;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[h]="string"==typeof t?t:i,l[1]=s;for(var o=2;o<r;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},63761:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=a(87462),i=a(67294),r=a(3905);function l(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">build</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Describes the part of the user interface represented by this widget.</p>\n<p>The framework calls this method in a number of different situations. For\nexample:</p>\n<ul>\n<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a>.</li>\n<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a>.</li>\n<li>After receiving a call to <a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a>.</li>\n<li>After a dependency of this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object changes (e.g., an\n<a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by the previous <a href="../../unself_component/CardTextEditState/build">build</a> changes).</li>\n<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a> and then reinserting the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object into\nthe tree at another location.</li>\n</ul>\n<p>This method can potentially be called in every frame and should not have\nany side effects beyond building a widget.</p>\n<p>The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>\n<p>Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget\'s constructor, the\ngiven <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>, and the internal state of this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object.</p>\n<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. The\n<a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> argument is always the same as the <code>context</code> property of\nthis <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object and will remain the same for the lifetime of this\nobject. The <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> argument is provided redundantly here so that\nthis method matches the signature for a <a href="https://api.flutter.dev/flutter/widgets/WidgetBuilder.html">WidgetBuilder</a>.</p>\n<h2 id="design-discussion">Design discussion</h2>\n<h3 id="why-is-the-build-method-on-state-and-not-statefulwidget">Why is the <a href="../../unself_component/CardTextEditState/build">build</a> method on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a>, and not <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>?</h3>\n<p>Putting a <code>Widget build(BuildContext context)</code> method on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> rather\nthan putting a <code>Widget build(BuildContext context, State state)</code> method\non <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> gives developers more flexibility when subclassing\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>.</p>\n<p>For example, <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a> is a subclass of <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> that\nintroduces an abstract <code>Widget build(BuildContext context)</code> method for its\nsubclasses to implement. If <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> already had a <a href="../../unself_component/CardTextEditState/build">build</a> method\nthat took a <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> argument, <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a> would be forced to provide\nits <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object to subclasses even though its <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object is an\ninternal implementation detail of <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a>.</p>\n<p>Conceptually, <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a> could also be implemented as a subclass of\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> in a similar manner. If the <a href="../../unself_component/CardTextEditState/build">build</a> method were on\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> rather than <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a>, that would not be possible anymore.</p>\n<p>Putting the <a href="../../unself_component/CardTextEditState/build">build</a> function on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> rather than <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> also\nhelps avoid a category of bugs related to closures implicitly capturing\n<code>this</code>. If you defined a closure in a <a href="../../unself_component/CardTextEditState/build">build</a> function on a\n<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>, that closure would implicitly capture <code>this</code>, which is\nthe current widget instance, and would have the (immutable) fields of that\ninstance in scope:</p>\n<pre class="language-dart"><code class="language-dart">// (this is not valid Flutter code)\nclass MyButton extends StatefulWidgetX {\n  MyButton({super.key, required this.color});\n\n  final Color color;\n\n  @override\n  Widget build(BuildContext context, State state) {\n    return SpecialWidget(\n      handler: () { print(\'color: $color\'); },\n    );\n  }\n}\n</code></pre>\n<p>For example, suppose the parent builds <code>MyButton</code> with <code>color</code> being blue,\nthe <code>$color</code> in the print function refers to blue, as expected. Now,\nsuppose the parent rebuilds <code>MyButton</code> with green. The closure created by\nthe first build still implicitly refers to the original widget and the\n<code>$color</code> still prints blue even through the widget has been updated to\ngreen; should that closure outlive its widget, it would print outdated\ninformation.</p>\n<p>In contrast, with the <a href="../../unself_component/CardTextEditState/build">build</a> function on the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, closures\ncreated during <a href="../../unself_component/CardTextEditState/build">build</a> implicitly capture the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> instance instead of\nthe widget instance:</p>\n<pre class="language-dart"><code class="language-dart">class MyButton extends StatefulWidget {\n  const MyButton({super.key, this.color = Colors.teal});\n\n  final Color color;\n  // ...\n}\n\nclass MyButtonState extends State&lt;MyButton&gt; {\n  // ...\n  @override\n  Widget build(BuildContext context) {\n    return SpecialWidget(\n      handler: () { print(\'color: ${widget.color}\'); },\n    );\n  }\n}\n</code></pre>\n<p>Now when the parent rebuilds <code>MyButton</code> with green, the closure created by\nthe first build still refers to <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, which is preserved across\nrebuilds, but the framework has updated that <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object\'s <a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a>\nproperty to refer to the new <code>MyButton</code> instance and <code>${widget.color}</code>\nprints green, as expected.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>, which contains the discussion on performance considerations.</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nWidget build(BuildContext context) =&gt; TextField(\n      controller: controller,\n      autofocus: widget.autoFocus ?? true,\n      onChanged: widget.onChanged,\n      textAlign: TextAlign.center,\n      textAlignVertical: TextAlignVertical.center,\n      style: Theme.of(context).textTheme.bodyLarge,\n      expands: true,\n      maxLines: null,\n      maxLength: 300,\n      onTap: widget.onTap,\n      decoration: const InputDecoration(\n        hintText: \'Start Writing...\',\n        border: InputBorder.none,\n        contentPadding: EdgeInsets.only(\n          top: 16.0,\n          left: 16.0,\n          right: 16.0,\n          bottom: 16.0,\n        ),\n      ),\n      buildCounter: (\n        _, {\n        required currentLength,\n        maxLength,\n        required isFocused,\n      }) =&gt;\n          Container(\n        height: 16,\n        alignment: Alignment.center,\n        child: Text(\n          isFocused ? "$currentLength / $maxLength" : "",\n          textAlign: TextAlign.center,\n          style: Theme.of(_).textTheme.labelMedium?.copyWith(\n                color: Theme.of(context).colorScheme.outline,\n              ),\n        ),\n      ),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/CardTextEditState">CardTextEditState</a></li>\n  <li class="self-crumb">build method</li>\n</ol>\n\n\n    <h5>CardTextEditState class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/CardTextEditState#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/CardTextEditState/CardTextEditState.constructor">CardTextEditState</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/CardTextEditState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/context.html">context</a></li>\n          <li><a href="../../unself_component/CardTextEditState/controller">controller</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/mounted.html">mounted</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a></li>\n\n        <li class="section-title"><a href="../../unself_component/CardTextEditState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/activate.html">activate</a></li>\n          <li><a href="../../unself_component/CardTextEditState/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didChangeDependencies.html">didChangeDependencies</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/dispose.html">dispose</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/reassemble.html">reassemble</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/CardTextEditState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"build method",sidebar_label:"build",hide_title:!0},d=void 0,o={unversionedId:"api/unself_component/CardTextEditState/build",id:"api/unself_component/CardTextEditState/build",title:"build method",description:"",source:"@site/developer/api/unself_component/CardTextEditState/build.mdx",sourceDirName:"api/unself_component/CardTextEditState",slug:"/api/unself_component/CardTextEditState/build",permalink:"/developer/api/unself_component/CardTextEditState/build",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/CardTextEditState/build.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"build method",sidebar_label:"build",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CardTextEditState constructor",permalink:"/developer/api/unself_component/CardTextEditState/CardTextEditState.constructor"},next:{title:"controller",permalink:"/developer/api/unself_component/CardTextEditState/controller"}},u={},h=[],c={toc:h};function f(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);