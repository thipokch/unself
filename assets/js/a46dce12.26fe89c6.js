"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58391],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(t),p=a,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},32927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=t(87462),a=t(67294),o=t(3905);function l(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Union.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">Union.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span></span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory Union.fromJson(Map&lt;String, dynamic&gt; json) = _$Union.fromJson;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Union">Union</a></li>\n  <li class="self-crumb">Union.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>Union class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Union#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Union/Union.constructor">Union</a></li>\n          <li><a href="../../unself_model/Union/Union.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/Union#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_model/Union/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_model/Union/key">key</a></li>\n          <li><a href="../../unself_model/Union/names">names</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Union#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/getScheme">getScheme</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/useId">useId</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Union#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Union.fromJson factory constructor",sidebar_label:"Union.fromJson factory constructor",hide_title:!0},s=void 0,c={unversionedId:"api/unself_model/Union/Union.constructor",id:"api/unself_model/Union/Union.constructor",title:"Union.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/Union/Union.constructor.mdx",sourceDirName:"api/unself_model/Union",slug:"/api/unself_model/Union/Union.constructor",permalink:"/developer/api/unself_model/Union/Union.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Union/Union.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"Union.fromJson factory constructor",sidebar_label:"Union.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Union",permalink:"/developer/api/unself_model/Union/"},next:{title:"copyWith",permalink:"/developer/api/unself_model/Union/copyWith"}},d={},f=[],u={toc:f};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);