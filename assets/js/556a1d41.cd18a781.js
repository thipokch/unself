"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return t?a.createElement(h,i(i({ref:n},o),{},{components:t})):a.createElement(h,i({ref:n},o))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var a=t(87462),r=t(67294),s=t(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">open</span> abstract method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span></span>&gt;</span></span>\n<span class="name ">open</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="open-param-file"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">file</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n<section class="desc markdown">\n  <p><a href="../../unself_unpack/IUnpackService/open">open</a> returns the supported list of <code>Mapping</code> for the\ngiven <a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a> file.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">FutureOr&lt;List&lt;Mapping&gt;&gt; open(XFile file);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>\n  <li><a href="../../unself_unpack/IUnpackService">IUnpackService</a></li>\n  <li class="self-crumb">open abstract method</li>\n</ol>\n\n\n    <h5>IUnpackService class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_unpack/IUnpackService#constructors">Constructors</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/IUnpackService.constructor">IUnpackService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_unpack/IUnpackService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_unpack/IUnpackService#instance-methods">Methods</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/load">load</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/open">open</a></li>\n          <li><a href="../../unself_unpack/IUnpackService/start">start</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_unpack/IUnpackService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"open abstract method",sidebar_label:"open",hide_title:!0},l=void 0,p={unversionedId:"api/unself_unpack/IUnpackService/open",id:"api/unself_unpack/IUnpackService/open",title:"open abstract method",description:"",source:"@site/developer/api/unself_unpack/IUnpackService/open.mdx",sourceDirName:"api/unself_unpack/IUnpackService",slug:"/api/unself_unpack/IUnpackService/open",permalink:"/developer/api/unself_unpack/IUnpackService/open",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack/IUnpackService/open.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"open abstract method",sidebar_label:"open",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/developer/api/unself_unpack/IUnpackService/load"},next:{title:"process",permalink:"/developer/api/unself_unpack/IUnpackService/process"}},o={},u=[],d={toc:u};function f(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);