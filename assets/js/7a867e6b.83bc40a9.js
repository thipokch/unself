"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[18863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),a=t(67294),o=t(3905);function l(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">animateTo</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n<span class="name ">animateTo</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="animateTo-param-offset"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">offset</span>, </span></li>\n<li><span class="parameter" id="animateTo-param-curve">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a></span> <span class="parameter-name">curve</span>, </span></li>\n<li><span class="parameter" id="animateTo-param-duration"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a></span> <span class="parameter-name">duration</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Future&lt;void&gt; animateTo(\n  double offset, {\n  required Curve curve,\n  required Duration duration,\n}) async {\n  final animations = &lt;Future&lt;void&gt;&gt;[];\n  for (final controller in _attachedControllers) {\n    animations\n        .add(controller.animateTo(offset, duration: duration, curve: curve));\n  }\n\n  return Future.wait&lt;void&gt;(animations).then&lt;void&gt;((List&lt;void&gt; _) =&gt; null);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n  <li class="self-crumb">animateTo method</li>\n</ol>\n\n\n    <h5>PairingScrollControllerGroup class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup.constructor">PairingScrollControllerGroup</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/PairingScrollControllerGroup#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/offset">offset</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/PairingScrollControllerGroup#instance-methods">Methods</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/addOffsetChangedListener">addOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/animateTo">animateTo</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/jumpTo">jumpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/push">push</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/removeOffsetChangedListener">removeOffsetChangedListener</a></li>\n          <li><a href="../../unself_component/PairingScrollControllerGroup/resetScroll">resetScroll</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/PairingScrollControllerGroup#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"animateTo method",sidebar_label:"animateTo",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/PairingScrollControllerGroup/animateTo",id:"api/unself_component/PairingScrollControllerGroup/animateTo",title:"animateTo method",description:"",source:"@site/developer/api/unself_component/PairingScrollControllerGroup/animateTo.mdx",sourceDirName:"api/unself_component/PairingScrollControllerGroup",slug:"/api/unself_component/PairingScrollControllerGroup/animateTo",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/animateTo",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/PairingScrollControllerGroup/animateTo.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"animateTo method",sidebar_label:"animateTo",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"addOffsetChangedListener",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/addOffsetChangedListener"},next:{title:"jumpTo",permalink:"/developer/api/unself_component/PairingScrollControllerGroup/jumpTo"}},p={},u=[],d={toc:u};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);