"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),u=s,h=f["".concat(o,".").concat(u)]||f[u]||d[u]||l;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[f]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var a=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">ElevationInfo</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="ElevationInfo" class="callable">\n          <span class="name"><a href="../unself_style/ElevationInfo/ElevationInfo.constructor">ElevationInfo</a></span><span class="signature">(<span class="parameter" id="-param-level"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">level</span>, </span><span class="parameter" id="-param-elevation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">elevation</span>, </span><span class="parameter" id="-param-overlayPercent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">overlayPercent</span>, </span><span class="parameter" id="-param-layers"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span></span> <span class="parameter-name">layers</span></span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="elevation" class="property">\n  <span class="name"><a href="../unself_style/ElevationInfo/elevation">elevation</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="layers" class="property">\n  <span class="name"><a href="../unself_style/ElevationInfo/layers">layers</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="level" class="property">\n  <span class="name"><a href="../unself_style/ElevationInfo/level">level</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="overlayPercent" class="property">\n  <span class="name"><a href="../unself_style/ElevationInfo/overlayPercent">overlayPercent</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_style</a></li>\n  <li><a href="../unself_style/unself_style">unself_style</a></li>\n  <li class="self-crumb">ElevationInfo class</li>\n</ol>\n\n\n    <h5>unself_style library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_style/unself_style#classes">Classes</a></li>\n        <li><a href="../unself_style/CustomColors">CustomColors</a></li>\n        <li><a href="../unself_style/ElevationInfo">ElevationInfo</a></li>\n        <li><a href="../unself_style/FontFamily">FontFamily</a></li>\n        <li><a href="../unself_style/UnBreakpoints">UnBreakpoints</a></li>\n        <li><a href="../unself_style/UnColors">UnColors</a></li>\n        <li><a href="../unself_style/UnColorStates">UnColorStates</a></li>\n        <li><a href="../unself_style/UnColorTheme">UnColorTheme</a></li>\n        <li><a href="../unself_style/UnCorner">UnCorner</a></li>\n        <li><a href="../unself_style/UnDurations">UnDurations</a></li>\n        <li><a href="../unself_style/UnEasing">UnEasing</a></li>\n        <li><a href="../unself_style/UnElevation">UnElevation</a></li>\n        <li><a href="../unself_style/UnFontSizes">UnFontSizes</a></li>\n        <li><a href="../unself_style/UnFontWeight">UnFontWeight</a></li>\n        <li><a href="../unself_style/UnHaptics">UnHaptics</a></li>\n        <li><a href="../unself_style/UnSizes">UnSizes</a></li>\n        <li><a href="../unself_style/UnSpaces">UnSpaces</a></li>\n        <li><a href="../unself_style/UnStroke">UnStroke</a></li>\n        <li><a href="../unself_style/UnSymbols">UnSymbols</a></li>\n        <li><a href="../unself_style/UnSymbolSizes">UnSymbolSizes</a></li>\n        <li><a href="../unself_style/UnTextStyle">UnTextStyle</a></li>\n        <li><a href="../unself_style/UnTextTheme">UnTextTheme</a></li>\n        <li><a href="../unself_style/UnTheme">UnTheme</a></li>\n\n      <li class="section-title"><a href="../unself_style/unself_style#extensions">Extensions</a></li>\n        <li><a href="../unself_style/ColorStates">ColorStates</a></li>\n        <li><a href="../unself_style/Harmonize">Harmonize</a></li>\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_style/ElevationInfo#constructors">Constructors</a></li>\n          <li><a href="../unself_style/ElevationInfo/ElevationInfo.constructor">ElevationInfo</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_style/ElevationInfo#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_style/ElevationInfo/elevation">elevation</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_style/ElevationInfo/layers">layers</a></li>\n          <li><a href="../unself_style/ElevationInfo/level">level</a></li>\n          <li><a href="../unself_style/ElevationInfo/overlayPercent">overlayPercent</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_style/ElevationInfo#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_style/ElevationInfo#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"ElevationInfo class",sidebar_label:"ElevationInfo",hide_title:!0},o=void 0,c={unversionedId:"api/unself_style/ElevationInfo/ElevationInfo",id:"api/unself_style/ElevationInfo/ElevationInfo",title:"ElevationInfo class",description:"",source:"@site/developer/api/unself_style/ElevationInfo/ElevationInfo.mdx",sourceDirName:"api/unself_style/ElevationInfo",slug:"/api/unself_style/ElevationInfo/",permalink:"/developer/api/unself_style/ElevationInfo/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/ElevationInfo/ElevationInfo.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"ElevationInfo class",sidebar_label:"ElevationInfo",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"vanillaContainer",permalink:"/developer/api/unself_style/CustomColors/vanillaContainer"},next:{title:"ElevationInfo const constructor",permalink:"/developer/api/unself_style/ElevationInfo/ElevationInfo.constructor"}},p={},f=[],d={toc:f};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);