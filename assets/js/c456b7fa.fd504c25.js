"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(67294),o=r(3905);function i(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">debugFillProperties</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">void</span>\n<span class="name ">debugFillProperties</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Add additional properties associated with the node.</p>\n<p>Use the most specific <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> existing subclass to describe\neach property instead of the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> base class. There are\nonly a small number of <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> subclasses each covering a\ncommon use case. Consider what values a property is relevant for users\ndebugging as users debugging large trees are overloaded with information.\nCommon named parameters in <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a> subclasses help filter when\nand how properties are displayed.</p>\n<p><code>defaultValue</code>, <code>showName</code>, <code>showSeparator</code>, and <code>level</code> keep string\nrepresentations of diagnostics terse and hide properties when they are not\nvery useful.</p>\n<ul>\n<li>Use <code>defaultValue</code> any time the default value of a property is\nuninteresting. For example, specify a default value of null any time\na property being null does not indicate an error.</li>\n<li>Avoid specifying the <code>level</code> parameter unless the result you want\ncannot be achieved by using the <code>defaultValue</code> parameter or using\nthe <a href="https://api.flutter.dev/flutter/foundation/ObjectFlagProperty-class.html">ObjectFlagProperty</a> class to conditionally display the property\nas a flag.</li>\n<li>Specify <code>showName</code> and <code>showSeparator</code> in rare cases where the string\noutput would look clumsy if they were not set.\n<pre class="language-dart"><code class="language-dart">DiagnosticsProperty&lt;Object&gt;(\'child(3, 4)\', null, ifNull: \'is null\', showSeparator: false).toString()\n</code></pre>Shows using <code>showSeparator</code> to get output <code>child(3, 4) is null</code> which\nis more polished than <code>child(3, 4): is null</code>.\n<pre class="language-dart"><code class="language-dart">DiagnosticsProperty&lt;IconData&gt;(\'icon\', icon, ifNull: \'&lt;empty&gt;\', showName: false).toString()\n</code></pre>Shows using <code>showName</code> to omit the property name as in this context the\nproperty name does not add useful information.</li>\n</ul>\n<p><code>ifNull</code>, <code>ifEmpty</code>, <code>unit</code>, and <code>tooltip</code> make property\ndescriptions clearer. The examples in the code sample below illustrate\ngood uses of all of these parameters.</p>\n<h2 id="diagnosticsproperty-subclasses-for-primitive-types">DiagnosticsProperty subclasses for primitive types</h2>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/foundation/StringProperty-class.html">StringProperty</a>, which supports automatically enclosing a <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>\nvalue in quotes.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/DoubleProperty-class.html">DoubleProperty</a>, which supports specifying a unit of measurement for\na <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a> value.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/PercentProperty-class.html">PercentProperty</a>, which clamps a <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a> to between 0 and 1 and\nformats it as a percentage.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/IntProperty-class.html">IntProperty</a>, which supports specifying a unit of measurement for an\n<a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a> value.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/FlagProperty-class.html">FlagProperty</a>, which formats a <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> value as one or more flags.\nDepending on the use case it is better to format a bool as\n<code>DiagnosticsProperty&lt;bool&gt;</code> instead of using <a href="https://api.flutter.dev/flutter/foundation/FlagProperty-class.html">FlagProperty</a> as the\noutput is more verbose but unambiguous.</li>\n</ul>\n<h2 id="other-important-diagnosticsproperty-variants">Other important <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> variants</h2>\n<ul>\n<li><a href="https://api.flutter.dev/flutter/foundation/EnumProperty-class.html">EnumProperty</a>, which provides terse descriptions of enum values\nworking around limitations of the <code>toString</code> implementation for Dart\nenum types.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/IterableProperty-class.html">IterableProperty</a>, which handles iterable values with display\ncustomizable depending on the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a> used.</li>\n<li><a href="https://api.flutter.dev/flutter/foundation/ObjectFlagProperty-class.html">ObjectFlagProperty</a>, which provides terse descriptions of whether a\nproperty value is present or not. For example, whether an <code>onClick</code>\ncallback is specified or an animation is in progress.</li>\n<li><a href="https://api.flutter.dev/flutter/painting/ColorProperty-class.html">ColorProperty</a>, which must be used if the property value is\na <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a> or one of its subclasses.</li>\n<li><a href="https://api.flutter.dev/flutter/widgets/IconDataProperty-class.html">IconDataProperty</a>, which must be used if the property value\nis of type <a href="https://api.flutter.dev/flutter/widgets/IconData-class.html">IconData</a>.</li>\n</ul>\n<p>If none of these subclasses apply, use the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>\nconstructor or in rare cases create your own <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>\nsubclass as in the case for <a href="https://api.flutter.dev/flutter/painting/TransformProperty-class.html">TransformProperty</a> which handles <a href="https://pub.dev/documentation/vector_math/2.1.4/vector_math_64/Matrix4-class.html">Matrix4</a>\nthat represent transforms. Generally any property value with a good\n<code>toString</code> method implementation works fine using <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>\ndirectly.</p>\n<p>{@tool snippet}</p>\n<p>This example shows best practices for implementing <a href="../../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a>\nillustrating use of all common <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> subclasses and all\ncommon <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> parameters.</p>\n<pre class="language-dart"><code class="language-dart">class ExampleObject extends ExampleSuperclass {\n\n  // ...various members and properties...\n\n  @override\n  void debugFillProperties(DiagnosticPropertiesBuilder properties) {\n    // Always add properties from the base class first.\n    super.debugFillProperties(properties);\n\n    // Omit the property name \'message\' when displaying this String property\n    // as it would just add visual noise.\n    properties.add(StringProperty(\'message\', message, showName: false));\n\n    properties.add(DoubleProperty(\'stepWidth\', stepWidth));\n\n    // A scale of 1.0 does nothing so should be hidden.\n    properties.add(DoubleProperty(\'scale\', scale, defaultValue: 1.0));\n\n    // If the hitTestExtent matches the paintExtent, it is just set to its\n    // default value so is not relevant.\n    properties.add(DoubleProperty(\'hitTestExtent\', hitTestExtent, defaultValue: paintExtent));\n\n    // maxWidth of double.infinity indicates the width is unconstrained and\n    // so maxWidth has no impact.\n    properties.add(DoubleProperty(\'maxWidth\', maxWidth, defaultValue: double.infinity));\n\n    // Progress is a value between 0 and 1 or null. Showing it as a\n    // percentage makes the meaning clear enough that the name can be\n    // hidden.\n    properties.add(PercentProperty(\n      \'progress\',\n      progress,\n      showName: false,\n      ifNull: \'&lt;indeterminate&gt;\',\n    ));\n\n    // Most text fields have maxLines set to 1.\n    properties.add(IntProperty(\'maxLines\', maxLines, defaultValue: 1));\n\n    // Specify the unit as otherwise it would be unclear that time is in\n    // milliseconds.\n    properties.add(IntProperty(\'duration\', duration.inMilliseconds, unit: \'ms\'));\n\n    // Tooltip is used instead of unit for this case as a unit should be a\n    // terse description appropriate to display directly after a number\n    // without a space.\n    properties.add(DoubleProperty(\n      \'device pixel ratio\',\n      ui.window.devicePixelRatio,\n      tooltip: \'physical pixels per logical pixel\',\n    ));\n\n    // Displaying the depth value would be distracting. Instead only display\n    // if the depth value is missing.\n    properties.add(ObjectFlagProperty&lt;int&gt;(\'depth\', depth, ifNull: \'no depth\'));\n\n    // bool flag that is only shown when the value is true.\n    properties.add(FlagProperty(\'using primary controller\', value: primary));\n\n    properties.add(FlagProperty(\n      \'isCurrent\',\n      value: isCurrent,\n      ifTrue: \'active\',\n      ifFalse: \'inactive\',\n    ));\n\n    properties.add(DiagnosticsProperty&lt;bool&gt;(\'keepAlive\', keepAlive));\n\n    // FlagProperty could have also been used in this case.\n    // This option results in the text "obscureText: true" instead\n    // of "obscureText" which is a bit more verbose but a bit clearer.\n    properties.add(DiagnosticsProperty&lt;bool&gt;(\'obscureText\', obscureText, defaultValue: false));\n\n    properties.add(EnumProperty&lt;TextAlign&gt;(\'textAlign\', textAlign, defaultValue: null));\n    properties.add(EnumProperty&lt;ImageRepeat&gt;(\'repeat\', repeat, defaultValue: ImageRepeat.noRepeat));\n\n    // Warn users when the widget is missing but do not show the value.\n    properties.add(ObjectFlagProperty&lt;Widget&gt;(\'widget\', widget, ifNull: \'no widget\'));\n\n    properties.add(IterableProperty&lt;BoxShadow&gt;(\n      \'boxShadow\',\n      boxShadow,\n      defaultValue: null,\n      style: style,\n    ));\n\n    // Getting the value of size throws an exception unless hasSize is true.\n    properties.add(DiagnosticsProperty&lt;Size&gt;.lazy(\n      \'size\',\n      () =&gt; size,\n      description: \'${ hasSize ? size : "MISSING" }\',\n    ));\n\n    // If the `toString` method for the property value does not provide a\n    // good terse description, write a DiagnosticsProperty subclass as in\n    // the case of TransformProperty which displays a nice debugging view\n    // of a Matrix4 that represents a transform.\n    properties.add(TransformProperty(\'transform\', transform));\n\n    // If the value class has a good `toString` method, use\n    // DiagnosticsProperty&lt;YourValueType&gt;. Specifying the value type ensures\n    // that debugging tools always know the type of the field and so can\n    // provide the right UI affordances. For example, in this case even\n    // if color is null, a debugging tool still knows the value is a Color\n    // and can display relevant color related UI.\n    properties.add(DiagnosticsProperty&lt;Color&gt;(\'color\', color));\n\n    // Use a custom description to generate a more terse summary than the\n    // `toString` method on the map class.\n    properties.add(DiagnosticsProperty&lt;Map&lt;Listenable, VoidCallback&gt;&gt;(\n      \'handles\',\n      handles,\n      description: handles != null\n        ? \'${handles!.length} active client${ handles!.length == 1 ? "" : "s" }\'\n        : null,\n      ifNull: \'no notifications ever received\',\n      showName: false,\n    ));\n  }\n}\n</code></pre>\n<p>{@end-tool}</p>\n<p>Used by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a> and <a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nvoid debugFillProperties(DiagnosticPropertiesBuilder properties) {\n  super.debugFillProperties(properties);\n  properties.add(DiagnosticsProperty&lt;PairingScrollControllerGroup&gt;(\n    \'group\',\n    group,\n    ifNull: \'no controller\',\n    showName: false,\n  ));\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollController">PairingScrollController</a></li>\n  <li class="self-crumb">debugFillProperties method</li>\n</ol>\n\n\n    <h5>PairingScrollController class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollController#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>\n          <li><a href="../../unself_component/PairingScrollController/group">group</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li><a href="../../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n          <li><a href="../../unself_component/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollController#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollController#static-methods">Static methods</a></li>\n          <li><a href="../../unself_component/PairingScrollController/of">of</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"debugFillProperties method",sidebar_label:"debugFillProperties",hide_title:!0},s=void 0,p={unversionedId:"api/unself_component/PairingScrollController/debugFillProperties",id:"api/unself_component/PairingScrollController/debugFillProperties",title:"debugFillProperties method",description:"",source:"@site/developer/api/unself_component/PairingScrollController/debugFillProperties.mdx",sourceDirName:"api/unself_component/PairingScrollController",slug:"/api/unself_component/PairingScrollController/debugFillProperties",permalink:"/developer/api/unself_component/PairingScrollController/debugFillProperties",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollController/debugFillProperties.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"debugFillProperties method",sidebar_label:"debugFillProperties",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"PairingScrollController constructor",permalink:"/developer/api/unself_component/PairingScrollController/PairingScrollController.constructor"},next:{title:"group",permalink:"/developer/api/unself_component/PairingScrollController/group"}},d={},c=[],u={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);