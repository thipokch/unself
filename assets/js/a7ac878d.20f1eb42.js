"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3010],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(t),p=r,u=f["".concat(i,".").concat(p)]||f[p]||m[p]||s;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[f]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},15780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=t(87462),r=t(67294),s=t(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">getScheme</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_model/JsonSchema">JsonSchema</a></span>\n<span class="name ">getScheme</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="getScheme-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span></li>\n<li><span class="parameter" id="getScheme-param-find"><span class="type-annotation"><a href="../../unself_model/SchemaFinder">SchemaFinder</a></span> <span class="parameter-name">find</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">JsonSchema getScheme(dynamic json, SchemaFinder find) =&gt; map(\n      ref: (_) =&gt; find(_.name),\n      union: (_) =&gt; Ref(json[_.key]).getScheme(json, find),\n      // orElse: () =&gt; throw StateError("Can\'t getEntity on $runtimeType"),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRef">JsonRef</a></li>\n  <li class="self-crumb">getScheme method</li>\n</ol>\n\n\n    <h5>JsonRef class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRef#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.ref">ref</a></li>\n          <li><a href="../../unself_model/JsonRef/JsonRef.union">union</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonRef#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_model/JsonRef#instance-methods">Methods</a></li>\n          <li><a href="../../unself_model/JsonRef/getScheme">getScheme</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li><a href="../../unself_model/JsonRef/useId">useId</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRef/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRef#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"getScheme method",sidebar_label:"getScheme",hide_title:!0},i=void 0,c={unversionedId:"api/unself_model/JsonRef/getScheme",id:"api/unself_model/JsonRef/getScheme",title:"getScheme method",description:"",source:"@site/developer/api/unself_model/JsonRef/getScheme.mdx",sourceDirName:"api/unself_model/JsonRef",slug:"/api/unself_model/JsonRef/getScheme",permalink:"/developer/api/unself_model/JsonRef/getScheme",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRef/getScheme.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"getScheme method",sidebar_label:"getScheme",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"JsonRef.fromJson factory constructor",permalink:"/developer/api/unself_model/JsonRef/JsonRef.constructor"},next:{title:"map",permalink:"/developer/api/unself_model/JsonRef/map"}},d={},f=[],m={toc:f};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(l,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);