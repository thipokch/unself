"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">createRoute</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>\n<span class="name ">createRoute</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="createRoute-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Creates the <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> that corresponds to this page.</p>\n<p>The created <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> must have its <a href="https://api.flutter.dev/flutter/widgets/Route/settings.html">Route.settings</a> property set to this <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a>.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nRoute&lt;T&gt; createRoute(BuildContext context) =&gt;\n    _PageBasedMaterialWithModalsPageRoute&lt;T&gt;(page: this);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnRootSheetPage">UnRootSheetPage<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>\n  <li class="self-crumb">createRoute method</li>\n</ol>\n\n\n    <h5>UnRootSheetPage class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/UnRootSheetPage.constructor">UnRootSheetPage</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnRootSheetPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/child">child</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/fullscreenDialog">fullscreenDialog</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/maintainState">maintainState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>\n          <li><a href="../../unself_component/UnRootSheetPage/createRoute">createRoute</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnRootSheetPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"createRoute method",sidebar_label:"createRoute",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/UnRootSheetPage/createRoute",id:"api/unself_component/UnRootSheetPage/createRoute",title:"createRoute method",description:"",source:"@site/developer/api/unself_component/UnRootSheetPage/createRoute.mdx",sourceDirName:"api/unself_component/UnRootSheetPage",slug:"/api/unself_component/UnRootSheetPage/createRoute",permalink:"/developer/api/unself_component/UnRootSheetPage/createRoute",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnRootSheetPage/createRoute.mdx",tags:[],version:"current",lastUpdatedAt:1676538204,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"createRoute method",sidebar_label:"createRoute",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"child",permalink:"/developer/api/unself_component/UnRootSheetPage/child"},next:{title:"fullscreenDialog",permalink:"/developer/api/unself_component/UnRootSheetPage/fullscreenDialog"}},p={},d=[],u={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);