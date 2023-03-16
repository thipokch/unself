"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33829],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),u=r,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||l;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[f]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20808:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var n=t(87462),r=t(67294),l=t(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnselfSliverNavigationBar</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">UnselfSliverNavigationBar</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-largeTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">largeTitle</span>, </span></li>\n<li><span class="parameter" id="-param-leading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">leading</span>, </span></li>\n<li><span class="parameter" id="-param-automaticallyImplyLeading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyLeading</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-automaticallyImplyTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyTitle</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-previousPageTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">previousPageTitle</span>, </span></li>\n<li><span class="parameter" id="-param-middle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">middle</span>, </span></li>\n<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>, </span></li>\n<li><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Border-class.html">Border</a>?</span> <span class="parameter-name">border</span> = <span class="default-value">_kDefaultNavBarBorder</span>, </span></li>\n<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>\n<li><span class="parameter" id="-param-brightness"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Brightness.html">Brightness</a>?</span> <span class="parameter-name">brightness</span>, </span></li>\n<li><span class="parameter" id="-param-padding"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/EdgeInsetsDirectional-class.html">EdgeInsetsDirectional</a>?</span> <span class="parameter-name">padding</span>, </span></li>\n<li><span class="parameter" id="-param-transitionBetweenRoutes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">transitionBetweenRoutes</span> = <span class="default-value">true</span>, </span></li>\n<li><span class="parameter" id="-param-heroTag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">heroTag</span> = <span class="default-value">defaultHeroTag</span>, </span></li>\n<li><span class="parameter" id="-param-stretch"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">stretch</span> = <span class="default-value">false</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const UnselfSliverNavigationBar({\n  Key? key,\n  this.largeTitle,\n  this.leading,\n  this.automaticallyImplyLeading = true,\n  this.automaticallyImplyTitle = true,\n  this.previousPageTitle,\n  this.middle,\n  this.trailing,\n  this.border = _kDefaultNavBarBorder,\n  this.backgroundColor,\n  this.brightness,\n  this.padding,\n  this.transitionBetweenRoutes = true,\n  this.heroTag = defaultHeroTag,\n  this.stretch = false,\n})  : assert(\n        automaticallyImplyTitle || largeTitle != null,\n        \'No largeTitle has been provided but automaticallyImplyTitle is also \'\n        \'false. Either provide a largeTitle or set automaticallyImplyTitle to \'\n        \'true.\',\n      ),\n      super(key: key);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n  <li class="self-crumb">UnselfSliverNavigationBar const constructor</li>\n</ol>\n\n\n    <h5>UnselfSliverNavigationBar class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnselfSliverNavigationBar#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor">UnselfSliverNavigationBar</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnselfSliverNavigationBar#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/automaticallyImplyTitle">automaticallyImplyTitle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/backgroundColor">backgroundColor</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/border">border</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/brightness">brightness</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/heroTag">heroTag</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/largeTitle">largeTitle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/leading">leading</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/middle">middle</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/opaque">opaque</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/padding">padding</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/previousPageTitle">previousPageTitle</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/stretch">stretch</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/trailing">trailing</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnselfSliverNavigationBar#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li><a href="../../unself_component/UnselfSliverNavigationBar/createState">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnselfSliverNavigationBar#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"UnselfSliverNavigationBar const constructor",sidebar_label:"UnselfSliverNavigationBar const constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor",id:"api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor",title:"UnselfSliverNavigationBar const constructor",description:"",source:"@site/developer/api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor.mdx",sourceDirName:"api/unself_component/UnselfSliverNavigationBar",slug:"/api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"UnselfSliverNavigationBar const constructor",sidebar_label:"UnselfSliverNavigationBar const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnselfSliverNavigationBar",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/"},next:{title:"automaticallyImplyLeading",permalink:"/developer/api/unself_component/UnselfSliverNavigationBar/automaticallyImplyLeading"}},c={},f=[],d={toc:f};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);