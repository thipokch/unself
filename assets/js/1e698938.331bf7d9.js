"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[84874],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),f=l,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||r;return a?t.createElement(m,s(s({ref:n},c),{},{components:a})):t.createElement(m,s({ref:n},c))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},66614:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=a(87462),l=a(67294),r=a(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult?</span>\n<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-valueFrom">{<span class="type-annotation">TResult?</span> <span class="parameter-name">valueFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="whenOrNull-param-slugFrom"><span class="type-annotation">TResult?</span> <span class="parameter-name">slugFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>\n</ol>\n)?}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult? whenOrNull&lt;TResult extends Object?&gt;({\n  TResult? Function(String name)? valueFrom,\n  TResult? Function(String name)? slugFrom,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRefValue">JsonRefValue</a></li>\n  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>JsonRefValue class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRefValue#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.slugFrom">slugFrom</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.valueFrom">valueFrom</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonRefValue#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull",hide_title:!0},i=void 0,u={unversionedId:"api/unself_model/JsonRefValue/whenOrNull",id:"api/unself_model/JsonRefValue/whenOrNull",title:"whenOrNull<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/JsonRefValue/whenOrNull.mdx",sourceDirName:"api/unself_model/JsonRefValue",slug:"/api/unself_model/JsonRefValue/whenOrNull",permalink:"/developer/api/unself_model/JsonRefValue/whenOrNull",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRefValue/whenOrNull.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"whenOrNull<TResult extends Object?> method",sidebar_label:"whenOrNull",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"when",permalink:"/developer/api/unself_model/JsonRefValue/when"},next:{title:"JsonSchema",permalink:"/developer/api/unself_model/JsonSchema/"}},c={},d=[],p={toc:d};function f(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);