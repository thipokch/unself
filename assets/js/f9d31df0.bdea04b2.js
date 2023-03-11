"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[75914],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29986:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(87462),a=t(67294),i=t(3905);function o(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">runAppGuarded</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">dynamic</span>\n<span class="name ">runAppGuarded</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="runAppGuarded-param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">app</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static runAppGuarded(Widget app) =&gt; runZonedGuarded(\n      () {\n        FlutterError.onError = recordFlutterError;\n        if (!kIsWeb) recordIsolateError();\n\n        return runApp(app);\n      },\n      (error, stackTrace) =&gt; recordError(error, stackTrace, fatal: true),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/ErrorService">ErrorService</a></li>\n  <li class="self-crumb">runAppGuarded static method</li>\n</ol>\n\n\n    <h5>ErrorService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_monitoring/ErrorService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService#static-methods">Static methods</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordError">recordError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"runAppGuarded static method",sidebar_label:"runAppGuarded",hide_title:!0},s=void 0,c={unversionedId:"api/unself_monitoring/ErrorService/runAppGuarded",id:"api/unself_monitoring/ErrorService/runAppGuarded",title:"runAppGuarded static method",description:"",source:"@site/developer/api/unself_monitoring/ErrorService/runAppGuarded.mdx",sourceDirName:"api/unself_monitoring/ErrorService",slug:"/api/unself_monitoring/ErrorService/runAppGuarded",permalink:"/developer/api/unself_monitoring/ErrorService/runAppGuarded",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_monitoring/ErrorService/runAppGuarded.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"runAppGuarded static method",sidebar_label:"runAppGuarded",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"recordIsolateError",permalink:"/developer/api/unself_monitoring/ErrorService/recordIsolateError"},next:{title:"InfoService",permalink:"/developer/api/unself_monitoring/InfoService/"}},d={},p=[],u={toc:p};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);