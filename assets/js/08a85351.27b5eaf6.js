"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">TranslucentDecoration</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">TranslucentDecoration</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-color">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">color</span>, </span></li>\n<li><span class="parameter" id="-param-image"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/DecorationImage-class.html">DecorationImage</a>?</span> <span class="parameter-name">image</span>, </span></li>\n<li><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxBorder-class.html">BoxBorder</a>?</span> <span class="parameter-name">border</span>, </span></li>\n<li><span class="parameter" id="-param-borderRadius"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BorderRadiusGeometry-class.html">BorderRadiusGeometry</a>?</span> <span class="parameter-name">borderRadius</span>, </span></li>\n<li><span class="parameter" id="-param-boxShadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span>?</span> <span class="parameter-name">boxShadow</span>, </span></li>\n<li><span class="parameter" id="-param-gradient"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Gradient-class.html">Gradient</a>?</span> <span class="parameter-name">gradient</span>, </span></li>\n<li><span class="parameter" id="-param-backgroundBlendMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/BlendMode.html">BlendMode</a>?</span> <span class="parameter-name">backgroundBlendMode</span>, </span></li>\n<li><span class="parameter" id="-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShape.html">BoxShape</a></span> <span class="parameter-name">shape</span> = <span class="default-value">BoxShape.rectangle</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const TranslucentDecoration({\n  super.color,\n  super.image,\n  super.border,\n  super.borderRadius,\n  super.boxShadow,\n  super.gradient,\n  super.backgroundBlendMode,\n  super.shape = BoxShape.rectangle,\n});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n  <li class="self-crumb">TranslucentDecoration const constructor</li>\n</ol>\n\n\n    <h5>TranslucentDecoration class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/TranslucentDecoration/TranslucentDecoration.constructor">TranslucentDecoration</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_component/TranslucentDecoration#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/backgroundBlendMode.html">backgroundBlendMode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/border.html">border</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/borderRadius.html">borderRadius</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/boxShadow.html">boxShadow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/isComplex.html">isComplex</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/padding.html">padding</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/shape.html">shape</a></li>\n\n        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/copyWith.html">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/createBoxPainter.html">createBoxPainter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugAssertIsValid.html">debugAssertIsValid</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/getClipPath.html">getClipPath</a></li>\n          <li><a href="../../unself_component/TranslucentDecoration/hitTest">hitTest</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpFrom.html">lerpFrom</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpTo.html">lerpTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/scale.html">scale</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/Decoration/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/TranslucentDecoration#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"TranslucentDecoration const constructor",sidebar_label:"TranslucentDecoration const constructor",hide_title:!0},l=void 0,c={unversionedId:"api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor",id:"api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor",title:"TranslucentDecoration const constructor",description:"",source:"@site/developer/api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor.mdx",sourceDirName:"api/unself_component/TranslucentDecoration",slug:"/api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor",permalink:"/developer/api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/TranslucentDecoration/TranslucentDecoration.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675413494,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"TranslucentDecoration const constructor",sidebar_label:"TranslucentDecoration const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"TranslucentDecoration",permalink:"/developer/api/unself_component/TranslucentDecoration/"},next:{title:"hitTest",permalink:"/developer/api/unself_component/TranslucentDecoration/hitTest"}},p={},d=[],u={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);