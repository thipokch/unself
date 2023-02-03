"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50985],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(o,".").concat(u)]||d[u]||f[u]||l;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=t(87462),r=t(67294),l=t(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">PairingScrollController</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget-class.html">ProxyWidget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController-class.html">PrimaryScrollController</a></li>\n      <li>PairingScrollController</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="PairingScrollController" class="callable">\n          <span class="name"><a href="../unself_component/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></span><span class="signature">(<span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-group"><span>required</span> <span class="type-annotation"><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></span> <span class="parameter-name">group</span>, </span><span class="parameter" id="-param-child"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="automaticallyInheritForPlatforms" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/TargetPlatform.html">TargetPlatform</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  The <code>TargetPlatform</code>s this controller is configured for <a href="https://api.flutter.dev/flutter/widgets/ScrollView-class.html">ScrollView</a>s to\nautomatically inherit.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="child" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> \n\n</dt>\n<dd class="inherited">\n  The widget below this widget in the tree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="controller" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a>?</span> \n\n</dt>\n<dd class="inherited">\n  The <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a> associated with the subtree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="group" class="property">\n  <span class="name"><a href="../unself_component/PairingScrollController/group">group</a></span>\n  <span class="signature">\u2192 <a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="key" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> \n\n</dt>\n<dd class="inherited">\n  Controls how one widget replaces another widget in the tree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="scrollDirection" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/painting/Axis.html">Axis</a>?</span> \n\n</dt>\n<dd class="inherited">\n  The <a href="https://api.flutter.dev/flutter/painting/Axis.html">Axis</a> this controller is configured for <a href="https://api.flutter.dev/flutter/widgets/ScrollView-class.html">ScrollView</a>s to\nautomatically inherit.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="createElement" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/InheritedElement-class.html">InheritedElement</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Inflates this configuration to a concrete instance.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugDescribeChildren" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a list of <code>DiagnosticsNode</code> objects describing this node\'s\nchildren.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugFillProperties" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  Add additional properties associated with the node.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toDiagnosticsNode" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a debug representation of the object that is used by debugging\ntools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringDeep" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></span><span class="signature">(<wbr><span class="parameter" id="toStringDeep-param-prefixLineOne">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">prefixLineOne</span> = <span class="default-value">\'\'</span>, </span><span class="parameter" id="toStringDeep-param-prefixOtherLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">prefixOtherLines</span>, </span><span class="parameter" id="toStringDeep-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a string representation of this node and its descendants.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShallow" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></span><span class="signature">(<wbr><span class="parameter" id="toStringShallow-param-joiner">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">joiner</span> = <span class="default-value">\', \'</span>, </span><span class="parameter" id="toStringShallow-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a one-line detailed description of the object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShort" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A short, textual description of this widget.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="updateShouldNotify" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollController/updateShouldNotify">updateShouldNotify</a></span><span class="signature">(<wbr><span class="parameter" id="updateShouldNotify-param-oldWidget"><span>covariant</span> <span class="type-annotation"><a href="../unself_component/PairingScrollController">PairingScrollController</a></span> <span class="parameter-name">oldWidget</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Whether the framework should notify widgets that inherit from this widget.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n  <section class="summary offset-anchor" id="static-methods">\n    <h2>Static Methods</h2>\n    <dl class="callables">\n        <dt id="of" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollController/of">of</a></span><span class="signature">(<wbr><span class="parameter" id="of-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a>?</span>\n  </span>\n  \n\n</dt>\n<dd>\n  Returns the <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a> most closely associated with the given\ncontext.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_component</a></li>\n  <li><a href="../unself_component/unself_component">unself_component</a></li>\n  <li class="self-crumb">PairingScrollController class</li>\n</ol>\n\n\n    <h5>unself_component library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>\n        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>\n        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>\n        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>\n        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>\n        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>\n        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>\n        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>\n        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>\n        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>\n        <li><a href="../unself_component/ButtonText">ButtonText</a></li>\n        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>\n        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>\n        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>\n        <li><a href="../unself_component/CardTile">CardTile</a></li>\n        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>\n        <li><a href="../unself_component/ChipText">ChipText</a></li>\n        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>\n        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>\n        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>\n        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>\n        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>\n        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>\n        <li><a href="../unself_component/HeroTag">HeroTag</a></li>\n        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>\n        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>\n        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>\n        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>\n        <li><a href="../unself_component/TextArea">TextArea</a></li>\n        <li><a href="../unself_component/TextBox">TextBox</a></li>\n        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>\n        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>\n        <li><a href="../unself_component/UnCard">UnCard</a></li>\n        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>\n        <li><a href="../unself_component/Unmoji">Unmoji</a></li>\n        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>\n        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>\n        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>\n        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>\n        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>\n        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnSheet">UnSheet</a></li>\n        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>\n        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>\n        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>\n        <li><a href="../unself_component/regex">regex</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>\n        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>\n        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>\n        <li><a href="../unself_component/show">show</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>\n        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>\n        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>\n        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_component/PairingScrollController#constructors">Constructors</a></li>\n          <li><a href="../unself_component/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_component/PairingScrollController#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>\n          <li><a href="../unself_component/PairingScrollController/group">group</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>\n\n        <li class="section-title"><a href="../unself_component/PairingScrollController#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li><a href="../unself_component/PairingScrollController/debugFillProperties">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n          <li><a href="../unself_component/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>\n\n        <li class="section-title inherited"><a href="../unself_component/PairingScrollController#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../unself_component/PairingScrollController#static-methods">Static methods</a></li>\n          <li><a href="../unself_component/PairingScrollController/of">of</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"PairingScrollController class",sidebar_label:"PairingScrollController",hide_title:!0},o=void 0,p={unversionedId:"api/unself_component/PairingScrollController/PairingScrollController",id:"api/unself_component/PairingScrollController/PairingScrollController",title:"PairingScrollController class",description:"",source:"@site/developer/api/unself_component/PairingScrollController/PairingScrollController.mdx",sourceDirName:"api/unself_component/PairingScrollController",slug:"/api/unself_component/PairingScrollController/",permalink:"/developer/api/unself_component/PairingScrollController/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollController/PairingScrollController.mdx",tags:[],version:"current",lastUpdatedAt:1675413494,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"PairingScrollController class",sidebar_label:"PairingScrollController",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updateShouldNotify",permalink:"/developer/api/unself_component/NavigationContext/updateShouldNotify"},next:{title:"PairingScrollController constructor",permalink:"/developer/api/unself_component/PairingScrollController/PairingScrollController.constructor"}},c={},d=[],f={toc:d};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);