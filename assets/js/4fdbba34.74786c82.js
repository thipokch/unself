"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10605],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?t.createElement(m,o(o({ref:r},d),{},{components:n})):t.createElement(m,o({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27101:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=n(87462),a=n(67294),i=n(3905);function o(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">runAppGuarded</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">dynamic</span>\n<span class="name ">runAppGuarded</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="runAppGuarded-param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">app</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static runAppGuarded(Widget app) =&gt; runZonedGuarded(\n      () {\n        FlutterError.onError = recordFlutterError;\n        if (!kIsWeb) recordIsolateError();\n\n        return runApp(app);\n      },\n      (error, stackTrace) =&gt; recordError(error, stackTrace, fatal: true),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/unself_monitoring">unself_monitoring</a></li>\n  <li><a href="../../unself_monitoring/ErrorService/ErrorService">ErrorService</a></li>\n  <li class="self-crumb">runAppGuarded static method</li>\n</ol>\n\n\n    <h5>ErrorService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService/ErrorService#constructors">Constructors</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_monitoring/ErrorService/ErrorService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService/ErrorService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_monitoring/ErrorService/ErrorService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_monitoring/ErrorService/ErrorService#static-methods">Static methods</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordError">recordError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>\n          <li><a href="../../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"runAppGuarded static method",sidebar_label:"runAppGuarded",hide_title:!0},l=void 0,c={unversionedId:"packages/unself_monitoring/ErrorService/runAppGuarded",id:"packages/unself_monitoring/ErrorService/runAppGuarded",title:"runAppGuarded static method",description:"",source:"@site/reference/packages/unself_monitoring/ErrorService/runAppGuarded.mdx",sourceDirName:"packages/unself_monitoring/ErrorService",slug:"/packages/unself_monitoring/ErrorService/runAppGuarded",permalink:"/reference/packages/unself_monitoring/ErrorService/runAppGuarded",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_monitoring/ErrorService/runAppGuarded.mdx",tags:[],version:"current",frontMatter:{title:"runAppGuarded static method",sidebar_label:"runAppGuarded",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"recordIsolateError",permalink:"/reference/packages/unself_monitoring/ErrorService/recordIsolateError"},next:{title:"InfoService",permalink:"/reference/packages/unself_monitoring/InfoService/"}},d={},p=[],u={toc:p};function f(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);