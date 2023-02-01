"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[32790],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),u=r,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[f]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11938:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var n=t(87462),r=t(67294),i=t(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnselfNavigationBar</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnselfNavigationBar</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-leading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">leading</span>, </span></li>\n<li><span class="parameter" id="-param-automaticallyImplyLeading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyLeading</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-automaticallyImplyMiddle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyMiddle</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-previousPageTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">previousPageTitle</span>, </span></li>\n<li><span class="parameter" id="-param-middle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">middle</span>, </span></li>\n<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>, </span></li>\n<li><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Border-class.html">Border</a>?</span> <span class="parameter-name">border</span> = <span class="default-value">_kDefaultNavBarBorder</span>, </span></li>\n<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>\n<li><span class="parameter" id="-param-brightness"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Brightness.html">Brightness</a>?</span> <span class="parameter-name">brightness</span>, </span></li>\n<li><span class="parameter" id="-param-padding"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/EdgeInsetsDirectional-class.html">EdgeInsetsDirectional</a>?</span> <span class="parameter-name">padding</span>, </span></li>\n<li><span class="parameter" id="-param-transitionBetweenRoutes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">transitionBetweenRoutes</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-heroTag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">heroTag</span> = <span class="default-value">defaultHeroTag</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnselfNavigationBar({\n  Key? key,\n  this.leading,\n  this.automaticallyImplyLeading = true,\n  this.automaticallyImplyMiddle = true,\n  this.previousPageTitle,\n  this.middle,\n  this.trailing,\n  this.border = _kDefaultNavBarBorder,\n  this.backgroundColor,\n  this.brightness,\n  this.padding,\n  this.transitionBetweenRoutes = true,\n  this.heroTag = defaultHeroTag,\n})  : assert(\n        !transitionBetweenRoutes || identical(heroTag, defaultHeroTag),\n        \'Cannot specify a heroTag override if this navigation bar does not \'\n        \'transition due to transitionBetweenRoutes = false.\',\n      ),\n      super(key: key);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n  <li class="self-crumb">UnselfNavigationBar const constructor</li>\n</ol>\n\n\n    <h5>UnselfNavigationBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor">UnselfNavigationBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnselfNavigationBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyMiddle">automaticallyImplyMiddle</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/border">border</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/brightness">brightness</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/heroTag">heroTag</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/middle">middle</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/padding">padding</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/preferredSize">preferredSize</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/previousPageTitle">previousPageTitle</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/trailing">trailing</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/UnselfNavigationBar/shouldFullyObstruct">shouldFullyObstruct</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnselfNavigationBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"UnselfNavigationBar const constructor",sidebar_label:"UnselfNavigationBar const constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor",id:"api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor",title:"UnselfNavigationBar const constructor",description:"",source:"@site/reference/api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor.mdx",sourceDirName:"api/unself_component/UnselfNavigationBar",slug:"/api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor",permalink:"/reference/api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"UnselfNavigationBar const constructor",sidebar_label:"UnselfNavigationBar const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnselfNavigationBar",permalink:"/reference/api/unself_component/UnselfNavigationBar/"},next:{title:"automaticallyImplyLeading",permalink:"/reference/api/unself_component/UnselfNavigationBar/automaticallyImplyLeading"}},c={},f=[],d={toc:f};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);