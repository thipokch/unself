"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||s;return t?r.createElement(m,o(o({ref:n},f),{},{components:t})):r.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(87462),a=t(67294),s=t(3905);function o(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">JsonRef.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">JsonRef.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Creates a <a href="../../unself_model/JsonRef">JsonRef</a> from Json map</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory JsonRef.fromJson(Map&lt;String, dynamic&gt; data) =&gt;\n    _$JsonRefFromJson(data);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRef">JsonRef</a></li>\n  <li class="self-crumb">JsonRef.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>JsonRef class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRef#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.ref">ref</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.union">union</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonRef#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_model/JsonRef#instance-methods">Methods</a></li>\n          <li><a href="../../unself_model/JsonRef/getScheme">getScheme</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_model/JsonRef/useId">useId</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRef#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"JsonRef.fromJson factory constructor",sidebar_label:"JsonRef.fromJson factory constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_model/JsonRef/JsonRef.constructor",id:"api/unself_model/JsonRef/JsonRef.constructor",title:"JsonRef.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/JsonRef/JsonRef.constructor.mdx",sourceDirName:"api/unself_model/JsonRef",slug:"/api/unself_model/JsonRef/JsonRef.constructor",permalink:"/developer/api/unself_model/JsonRef/JsonRef.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRef/JsonRef.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"JsonRef.fromJson factory constructor",sidebar_label:"JsonRef.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"JsonRef",permalink:"/developer/api/unself_model/JsonRef/"},next:{title:"getScheme",permalink:"/developer/api/unself_model/JsonRef/getScheme"}},f={},d=[],u={toc:d};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);