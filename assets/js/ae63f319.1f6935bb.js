"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,u=d["".concat(s,".").concat(f)]||d[f]||h[f]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">hitTest</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n<span class="name ">hitTest</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="hitTest-param-size"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Size-class.html">Size</a></span> <span class="parameter-name">size</span>, </span></li>\n<li><span class="parameter" id="hitTest-param-position"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Offset-class.html">Offset</a></span> <span class="parameter-name">position</span>, </span></li>\n<li><span class="parameter" id="hitTest-param-textDirection">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a>?</span> <span class="parameter-name">textDirection</span>}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Tests whether the given point, on a rectangle of a given size,\nwould be considered to hit the decoration or not. For example,\nif the decoration only draws a circle, this function might\nreturn true if the point was inside the circle and false\notherwise.</p>\n<p>The decoration may be sensitive to the <a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a>. The\n<code>textDirection</code> argument should therefore be provided. If it is known that\nthe decoration is not affected by the text direction, then the argument\nmay be omitted or set to null.</p>\n<p>When a <a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a> is painted in a <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">Container</a> or <a href="https://api.flutter.dev/flutter/widgets/DecoratedBox-class.html">DecoratedBox</a> (which\nis what <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">Container</a> uses), the <code>textDirection</code> parameter will be populated\nbased on the ambient <a href="https://api.flutter.dev/flutter/widgets/Directionality-class.html">Directionality</a> (by way of the <a href="https://api.flutter.dev/flutter/rendering/RenderDecoratedBox-class.html">RenderDecoratedBox</a>\nrenderer).</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nbool hitTest(Size size, Offset position, {TextDirection? textDirection}) =&gt;\n    false;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n  <li class="self-crumb">hitTest method</li>\n</ol>\n\n\n    <h5>TranslucentDecoration class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/TranslucentDecoration/TranslucentDecoration.constructor">TranslucentDecoration</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_component/TranslucentDecoration#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/backgroundBlendMode.html">backgroundBlendMode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/border.html">border</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/borderRadius.html">borderRadius</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/boxShadow.html">boxShadow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/isComplex.html">isComplex</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/padding.html">padding</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/shape.html">shape</a></li>\n\n        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/copyWith.html">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/createBoxPainter.html">createBoxPainter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugAssertIsValid.html">debugAssertIsValid</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/getClipPath.html">getClipPath</a></li>\n          <li><a href="../../unself_component/TranslucentDecoration/hitTest">hitTest</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpFrom.html">lerpFrom</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpTo.html">lerpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/scale.html">scale</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/Decoration/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/TranslucentDecoration#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"hitTest method",sidebar_label:"hitTest",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/TranslucentDecoration/hitTest",id:"api/unself_component/TranslucentDecoration/hitTest",title:"hitTest method",description:"",source:"@site/developer/api/unself_component/TranslucentDecoration/hitTest.mdx",sourceDirName:"api/unself_component/TranslucentDecoration",slug:"/api/unself_component/TranslucentDecoration/hitTest",permalink:"/developer/api/unself_component/TranslucentDecoration/hitTest",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/TranslucentDecoration/hitTest.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"hitTest method",sidebar_label:"hitTest",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"TranslucentDecoration const constructor",permalink:"/developer/api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor"},next:{title:"UnAppPage",permalink:"/developer/api/unself_component/UnAppPage/"}},p={},d=[],h={toc:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);