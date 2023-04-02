"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36799],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,d=u["".concat(o,".").concat(m)]||u[m]||h[m]||r;return t?n.createElement(d,l(l({ref:a},c),{},{components:t})):n.createElement(d,l({ref:a},c))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69972:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(87462),s=t(67294),r=t(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnSheet&lt;<wbr><span class="type-parameter">T</span>&gt;</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnSheet&lt;<wbr><span class="type-parameter">T</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-child">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>, </span></li>\n<li><span class="parameter" id="-param-topRadius"><span class="type-annotation"><a href="https://pub.dev/documentation/figma_squircle/0.5.3/figma_squircle/SmoothRadius-class.html">SmoothRadius</a>?</span> <span class="parameter-name">topRadius</span>, </span></li>\n<li><span class="parameter" id="-param-transitionBackgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">transitionBackgroundColor</span> = <span class="default-value">Colors.black</span>, </span></li>\n<li><span class="parameter" id="-param-overlayStyle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/SystemUiOverlayStyle-class.html">SystemUiOverlayStyle</a>?</span> <span class="parameter-name">overlayStyle</span>, </span></li>\n<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>\n<li><span class="parameter" id="-param-elevation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">elevation</span>, </span></li>\n<li><span class="parameter" id="-param-closeProgressThreshold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">closeProgressThreshold</span>, </span></li>\n<li><span class="parameter" id="-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/ShapeBorder-class.html">ShapeBorder</a>?</span> <span class="parameter-name">shape</span>, </span></li>\n<li><span class="parameter" id="-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span></li>\n<li><span class="parameter" id="-param-barrierColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">barrierColor</span>, </span></li>\n<li><span class="parameter" id="-param-expand"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">expand</span> = <span class="default-value">false</span>, </span></li>\n<li><span class="parameter" id="-param-secondAnimation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/AnimationController-class.html">AnimationController</a>?</span> <span class="parameter-name">secondAnimation</span>, </span></li>\n<li><span class="parameter" id="-param-animationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">animationCurve</span>, </span></li>\n<li><span class="parameter" id="-param-previousRouteAnimationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">previousRouteAnimationCurve</span>, </span></li>\n<li><span class="parameter" id="-param-useRootNavigator"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">useRootNavigator</span> = <span class="default-value">false</span>, </span></li>\n<li><span class="parameter" id="-param-bounce"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">bounce</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-isDismissible"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">isDismissible</span>, </span></li>\n<li><span class="parameter" id="-param-enableDrag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">enableDrag</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-duration"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a>?</span> <span class="parameter-name">duration</span>, </span></li>\n<li><span class="parameter" id="-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a>?</span> <span class="parameter-name">settings</span>, </span></li>\n<li><span class="parameter" id="-param-shadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a>?</span> <span class="parameter-name">shadow</span>, </span></li>\n<li><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LocalKey-class.html">LocalKey</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-arguments"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span> <span class="parameter-name">arguments</span>, </span></li>\n<li><span class="parameter" id="-param-restorationId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">restorationId</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnSheet({\n  required this.child,\n  this.topRadius,\n  this.transitionBackgroundColor = Colors.black,\n  this.overlayStyle,\n  this.backgroundColor,\n  this.elevation,\n  this.closeProgressThreshold,\n  this.shape,\n  this.clipBehavior,\n  this.barrierColor,\n  this.expand = false,\n  this.secondAnimation,\n  this.animationCurve,\n  this.previousRouteAnimationCurve,\n  this.useRootNavigator = false,\n  this.bounce = true,\n  this.isDismissible,\n  this.enableDrag = true,\n  this.duration,\n  this.settings,\n  this.shadow,\n  super.key,\n  super.name,\n  super.arguments,\n  super.restorationId,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnSheet">UnSheet<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>\n  <li class="self-crumb">UnSheet const constructor</li>\n</ol>\n\n\n    <h5>UnSheet class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnSheet#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnSheet/UnSheet.constructor">UnSheet</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnSheet#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnSheet/animationCurve">animationCurve</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>\n          <li><a href="../../unself_component/UnSheet/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnSheet/barrierColor">barrierColor</a></li>\n          <li><a href="../../unself_component/UnSheet/bounce">bounce</a></li>\n          <li><a href="../../unself_component/UnSheet/child">child</a></li>\n          <li><a href="../../unself_component/UnSheet/clipBehavior">clipBehavior</a></li>\n          <li><a href="../../unself_component/UnSheet/closeProgressThreshold">closeProgressThreshold</a></li>\n          <li><a href="../../unself_component/UnSheet/duration">duration</a></li>\n          <li><a href="../../unself_component/UnSheet/elevation">elevation</a></li>\n          <li><a href="../../unself_component/UnSheet/enableDrag">enableDrag</a></li>\n          <li><a href="../../unself_component/UnSheet/expand">expand</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnSheet/isDismissible">isDismissible</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>\n          <li><a href="../../unself_component/UnSheet/overlayStyle">overlayStyle</a></li>\n          <li><a href="../../unself_component/UnSheet/previousRouteAnimationCurve">previousRouteAnimationCurve</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnSheet/secondAnimation">secondAnimation</a></li>\n          <li><a href="../../unself_component/UnSheet/settings">settings</a></li>\n          <li><a href="../../unself_component/UnSheet/shadow">shadow</a></li>\n          <li><a href="../../unself_component/UnSheet/shape">shape</a></li>\n          <li><a href="../../unself_component/UnSheet/topRadius">topRadius</a></li>\n          <li><a href="../../unself_component/UnSheet/transitionBackgroundColor">transitionBackgroundColor</a></li>\n          <li><a href="../../unself_component/UnSheet/useRootNavigator">useRootNavigator</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnSheet#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>\n          <li><a href="../../unself_component/UnSheet/createRoute">createRoute</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnSheet#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"UnSheet const constructor",sidebar_label:"UnSheet const constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_component/UnSheet/UnSheet.constructor",id:"api/unself_component/UnSheet/UnSheet.constructor",title:"UnSheet const constructor",description:"",source:"@site/developer/api/unself_component/UnSheet/UnSheet.constructor.mdx",sourceDirName:"api/unself_component/UnSheet",slug:"/api/unself_component/UnSheet/UnSheet.constructor",permalink:"/developer/api/unself_component/UnSheet/UnSheet.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnSheet/UnSheet.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"UnSheet const constructor",sidebar_label:"UnSheet const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnSheet",permalink:"/developer/api/unself_component/UnSheet/"},next:{title:"animationCurve",permalink:"/developer/api/unself_component/UnSheet/animationCurve"}},c={},u=[],h={toc:u};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);