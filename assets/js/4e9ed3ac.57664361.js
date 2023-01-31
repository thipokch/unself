"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[85188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=o(n),u=s,h=c["".concat(d,".").concat(u)]||c[u]||f[u]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:s,r[1]=l;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),s=n(67294),i=n(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">CardTextEditState</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></span>&gt;</span></li>\n      <li>CardTextEditState</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="CardTextEditState" class="callable">\n          <span class="name"><a href="../unself_component/CardTextEditState/CardTextEditState.constructor">CardTextEditState</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="context" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/context.html">context</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> \n\n</dt>\n<dd class="inherited">\n  The location in the tree where this widget builds.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="controller" class="property">\n  <span class="name"><a href="../unself_component/CardTextEditState/controller">controller</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/TextEditingController-class.html">TextEditingController</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">late</span><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="mounted" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/mounted.html">mounted</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Whether this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object is currently in a tree.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="widget" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a></span>\n  <span class="signature">\u2192 <a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></span> \n\n</dt>\n<dd class="inherited">\n  The current configuration.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="activate" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/activate.html">activate</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called when this object is reinserted into the tree after having been\nremoved via <a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="build" class="callable">\n  <span class="name"><a href="../unself_component/CardTextEditState/build">build</a></span><span class="signature">(<wbr><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Describes the part of the user interface represented by this widget.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="deactivate" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called when this object is removed from the tree.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugFillProperties" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Add additional properties associated with the node.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="didChangeDependencies" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/didChangeDependencies.html">didChangeDependencies</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called when a dependency of this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object changes.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="didUpdateWidget" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a></span><span class="signature">(<wbr><span class="parameter" id="didUpdateWidget-param-oldWidget"><span>covariant</span> <span class="type-annotation"><a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></span> <span class="parameter-name">oldWidget</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever the widget configuration changes.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="dispose" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/dispose.html">dispose</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called when this object is removed from the tree permanently.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="initState" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called when this object is inserted into the tree.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="reassemble" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/reassemble.html">reassemble</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever the application is reassembled during debugging, for\nexample during hot reload.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="setState" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a></span><span class="signature">(<wbr><span class="parameter" id="setState-param-fn"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">fn</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Notify the framework that the internal state of this object has changed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toDiagnosticsNode" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a debug representation of the object that is used by debugging\ntools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShort" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A brief description of this object, usually just the <a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a> and the\n<a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_component</a></li>\n  <li><a href="../unself_component/unself_component">unself_component</a></li>\n  <li class="self-crumb">CardTextEditState class</li>\n</ol>\n\n\n    <h5>unself_component library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>\n        <li><a href="../unself_component/ButtonAction/ButtonAction">ButtonAction</a></li>\n        <li><a href="../unself_component/ButtonBackground/ButtonBackground">ButtonBackground</a></li>\n        <li><a href="../unself_component/ButtonElevated/ButtonElevated">ButtonElevated</a></li>\n        <li><a href="../unself_component/ButtonElevation/ButtonElevation">ButtonElevation</a></li>\n        <li><a href="../unself_component/ButtonFilled/ButtonFilled">ButtonFilled</a></li>\n        <li><a href="../unself_component/ButtonForeground/ButtonForeground">ButtonForeground</a></li>\n        <li><a href="../unself_component/ButtonIcon/ButtonIcon">ButtonIcon</a></li>\n        <li><a href="../unself_component/ButtonOutlined/ButtonOutlined">ButtonOutlined</a></li>\n        <li><a href="../unself_component/ButtonOverlay/ButtonOverlay">ButtonOverlay</a></li>\n        <li><a href="../unself_component/ButtonText/ButtonText">ButtonText</a></li>\n        <li><a href="../unself_component/ButtonTonal/ButtonTonal">ButtonTonal</a></li>\n        <li><a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></li>\n        <li><a href="../unself_component/CardTextEditState/CardTextEditState">CardTextEditState</a></li>\n        <li><a href="../unself_component/CardTile/CardTile">CardTile</a></li>\n        <li><a href="../unself_component/ChipEmoji/ChipEmoji">ChipEmoji</a></li>\n        <li><a href="../unself_component/ChipText/ChipText">ChipText</a></li>\n        <li><a href="../unself_component/ConditionalParentWidget/ConditionalParentWidget">ConditionalParentWidget</a></li>\n        <li><a href="../unself_component/FloatContainer/FloatContainer">FloatContainer</a></li>\n        <li><a href="../unself_component/FloatScaffold/FloatScaffold">FloatScaffold</a></li>\n        <li><a href="../unself_component/HeadingHeadline/HeadingHeadline">HeadingHeadline</a></li>\n        <li><a href="../unself_component/HeadingSection/HeadingSection">HeadingSection</a></li>\n        <li><a href="../unself_component/HeadingTitle/HeadingTitle">HeadingTitle</a></li>\n        <li><a href="../unself_component/HeroTag/HeroTag">HeroTag</a></li>\n        <li><a href="../unself_component/ListItemBuilder/ListItemBuilder">ListItemBuilder</a></li>\n        <li><a href="../unself_component/NavigationContext/NavigationContext">NavigationContext</a></li>\n        <li><a href="../unself_component/PairingScrollController/PairingScrollController">PairingScrollController</a></li>\n        <li><a href="../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutBuilder/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>\n        <li><a href="../unself_component/TextArea/TextArea">TextArea</a></li>\n        <li><a href="../unself_component/TextBox/TextBox">TextBox</a></li>\n        <li><a href="../unself_component/TranslucentDecoration/TranslucentDecoration">TranslucentDecoration</a></li>\n        <li><a href="../unself_component/UnAppPage/UnAppPage">UnAppPage</a></li>\n        <li><a href="../unself_component/UnArtPage/UnArtPage">UnArtPage</a></li>\n        <li><a href="../unself_component/UnCard/UnCard">UnCard</a></li>\n        <li><a href="../unself_component/UnCupertinoContextMenu/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>\n        <li><a href="../unself_component/Unmoji/Unmoji">Unmoji</a></li>\n        <li><a href="../unself_component/UnmojiText/UnmojiText">UnmojiText</a></li>\n        <li><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan">UnmojiTextSpan</a></li>\n        <li><a href="../unself_component/UnRootSheetPage/UnRootSheetPage">UnRootSheetPage</a></li>\n        <li><a href="../unself_component/UnScaffold/UnScaffold">UnScaffold</a></li>\n        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBar/UnselfNavigationBar">UnselfNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>\n        <li><a href="../unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnSheet/UnSheet">UnSheet</a></li>\n        <li><a href="../unself_component/UnSliverAppBar/UnSliverAppBar">UnSliverAppBar</a></li>\n        <li><a href="../unself_component/UnSliverArtBar/UnSliverArtBar">UnSliverArtBar</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>\n        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>\n        <li><a href="../unself_component/regex">regex</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>\n        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>\n        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>\n        <li><a href="../unself_component/show">show</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>\n        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>\n        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>\n        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_component/CardTextEditState/CardTextEditState#constructors">Constructors</a></li>\n          <li><a href="../unself_component/CardTextEditState/CardTextEditState.constructor">CardTextEditState</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_component/CardTextEditState/CardTextEditState#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/context.html">context</a></li>\n          <li><a href="../unself_component/CardTextEditState/controller">controller</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/mounted.html">mounted</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a></li>\n\n        <li class="section-title"><a href="../unself_component/CardTextEditState/CardTextEditState#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/activate.html">activate</a></li>\n          <li><a href="../unself_component/CardTextEditState/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didChangeDependencies.html">didChangeDependencies</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/dispose.html">dispose</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/reassemble.html">reassemble</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../unself_component/CardTextEditState/CardTextEditState#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"CardTextEditState class",sidebar_label:"CardTextEditState",hide_title:!0},d=void 0,o={unversionedId:"packages/unself_component/CardTextEditState/CardTextEditState",id:"packages/unself_component/CardTextEditState/CardTextEditState",title:"CardTextEditState class",description:"",source:"@site/reference/packages/unself_component/CardTextEditState/CardTextEditState.mdx",sourceDirName:"packages/unself_component/CardTextEditState",slug:"/packages/unself_component/CardTextEditState/",permalink:"/reference/packages/unself_component/CardTextEditState/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_component/CardTextEditState/CardTextEditState.mdx",tags:[],version:"current",frontMatter:{title:"CardTextEditState class",sidebar_label:"CardTextEditState",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"onTap",permalink:"/reference/packages/unself_component/CardTextEdit/onTap"},next:{title:"CardTextEditState constructor",permalink:"/reference/packages/unself_component/CardTextEditState/CardTextEditState.constructor"}},p={},c=[],f={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);