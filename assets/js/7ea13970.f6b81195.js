"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4363],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>f});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?t.createElement(f,s(s({ref:a},u),{},{components:n})):t.createElement(f,s({ref:a},u))}));function f(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27722:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(87462),l=n(67294),r=n(3905);function s(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-valueFrom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/ValueFrom">ValueFrom</a></span> <span class="parameter-name">value</span></span></li>\n</ol>\n), </span></li>\n<li><span class="parameter" id="map-param-slugFrom"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/SlugFrom">SlugFrom</a></span> <span class="parameter-name">value</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult map&lt;TResult extends Object?&gt;({\n  required TResult Function(ValueFrom value) valueFrom,\n  required TResult Function(SlugFrom value) slugFrom,\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRefValue">JsonRefValue</a></li>\n  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>JsonRefValue class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRefValue#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.slugFrom">slugFrom</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.valueFrom">valueFrom</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonRefValue#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},i=void 0,p={unversionedId:"api/unself_model/JsonRefValue/map",id:"api/unself_model/JsonRefValue/map",title:"map<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/JsonRefValue/map.mdx",sourceDirName:"api/unself_model/JsonRefValue",slug:"/api/unself_model/JsonRefValue/map",permalink:"/developer/api/unself_model/JsonRefValue/map",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRefValue/map.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"map<TResult extends Object?> method",sidebar_label:"map",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"copyWith",permalink:"/developer/api/unself_model/JsonRefValue/copyWith"},next:{title:"mapOrNull",permalink:"/developer/api/unself_model/JsonRefValue/mapOrNull"}},u={},c=[],d={toc:c};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);