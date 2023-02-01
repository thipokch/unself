"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8704],{3905:(n,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var t=a(67294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var i=t.createContext({}),p=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):o(o({},e),n)),a},c=function(n){var e=p(n.components);return t.createElement(i.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,l=n.originalType,i=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=p(a),f=r,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return a?t.createElement(h,o(o({ref:e},c),{},{components:a})):t.createElement(h,o({ref:e},c))}));function h(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=a.length,o=new Array(l);o[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[u]="string"==typeof n?n:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3451:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=a(87462),r=a(67294),l=a(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">PairingScrollControllerGroup</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="PairingScrollControllerGroup" class="callable">\n          <span class="name"><a href="../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="offset" class="property">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/offset">offset</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="addOffsetChangedListener" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></span><span class="signature">(<wbr><span class="parameter" id="addOffsetChangedListener-param-onChanged"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onChanged</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="animateTo" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></span><span class="signature">(<wbr><span class="parameter" id="animateTo-param-offset"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">offset</span>, </span><span class="parameter" id="animateTo-param-curve">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a></span> <span class="parameter-name">curve</span>, </span><span class="parameter" id="animateTo-param-duration"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a></span> <span class="parameter-name">duration</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="jumpTo" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></span><span class="signature">(<wbr><span class="parameter" id="jumpTo-param-value"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">value</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="push" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/push">push</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="removeOffsetChangedListener" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></span><span class="signature">(<wbr><span class="parameter" id="removeOffsetChangedListener-param-listener"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">listener</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="resetScroll" class="callable">\n  <span class="name"><a href="../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_component</a></li>\n  <li><a href="../unself_component/unself_component">unself_component</a></li>\n  <li class="self-crumb">PairingScrollControllerGroup class</li>\n</ol>\n\n\n    <h5>unself_component library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>\n        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>\n        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>\n        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>\n        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>\n        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>\n        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>\n        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>\n        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>\n        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>\n        <li><a href="../unself_component/ButtonText">ButtonText</a></li>\n        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>\n        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>\n        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>\n        <li><a href="../unself_component/CardTile">CardTile</a></li>\n        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>\n        <li><a href="../unself_component/ChipText">ChipText</a></li>\n        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>\n        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>\n        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>\n        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>\n        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>\n        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>\n        <li><a href="../unself_component/HeroTag">HeroTag</a></li>\n        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>\n        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>\n        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>\n        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>\n        <li><a href="../unself_component/TextArea">TextArea</a></li>\n        <li><a href="../unself_component/TextBox">TextBox</a></li>\n        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>\n        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>\n        <li><a href="../unself_component/UnCard">UnCard</a></li>\n        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>\n        <li><a href="../unself_component/Unmoji">Unmoji</a></li>\n        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>\n        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>\n        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>\n        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>\n        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>\n        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnSheet">UnSheet</a></li>\n        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>\n        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>\n        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>\n        <li><a href="../unself_component/regex">regex</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>\n        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>\n        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>\n        <li><a href="../unself_component/show">show</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>\n        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>\n        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>\n        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_component/PairingScrollControllerGroup#constructors">Constructors</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_component/PairingScrollControllerGroup#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/offset">offset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_component/PairingScrollControllerGroup#instance-methods">Methods</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/push">push</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>\n          <li><a href="../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_component/PairingScrollControllerGroup#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"PairingScrollControllerGroup class",sidebar_label:"PairingScrollControllerGroup",hide_title:!0},i=void 0,p={unversionedId:"api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup",id:"api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup",title:"PairingScrollControllerGroup class",description:"",source:"@site/developer/api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.mdx",sourceDirName:"api/unself_component/PairingScrollControllerGroup",slug:"/api/unself_component/PairingScrollControllerGroup/",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.mdx",tags:[],version:"current",lastUpdatedAt:1675229020,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"PairingScrollControllerGroup class",sidebar_label:"PairingScrollControllerGroup",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updateShouldNotify",permalink:"/developer/api/unself_component/PairingScrollController/updateShouldNotify"},next:{title:"PairingScrollControllerGroup constructor",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor"}},c={},u=[],d={toc:u};function f(n){let{components:e,...a}=n;return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);