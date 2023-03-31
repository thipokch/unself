"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[92880],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return a?t.createElement(f,r(r({ref:n},c),{},{components:a})):t.createElement(f,r({ref:n},c))}));function f(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97493:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var t=a(87462),l=a(67294),s=a(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>\n    </ol>\n  </div>\n\n<span class="returntype">TResult</span>\n<span class="name ">maybeWhen</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="maybeWhen-param-valueFrom">{<span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-slugFrom"><span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>\n</ol>\n)?, </span></li>\n<li><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>(<ol class="parameter-list"></ol>\n)}</span></li>\n</ol>)\n\n      <div class="features"><span class="feature">inherited</span></div>\n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs\nTResult maybeWhen&lt;TResult extends Object?&gt;({\n  TResult Function(String name)? valueFrom,\n  TResult Function(String name)? slugFrom,\n  required TResult orElse(),\n}) =&gt;\n    throw _privateConstructorUsedError;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRefValue">JsonRefValue</a></li>\n  <li class="self-crumb">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>\n</ol>\n\n\n    <h5>JsonRefValue class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRefValue#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.slugFrom">slugFrom</a></li>\n          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.valueFrom">valueFrom</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonRefValue#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"maybeWhen<TResult extends Object?> method",sidebar_label:"maybeWhen",hide_title:!0},o=void 0,p={unversionedId:"api/unself_model/JsonRefValue/maybeWhen",id:"api/unself_model/JsonRefValue/maybeWhen",title:"maybeWhen<TResult extends Object?> method",description:"",source:"@site/developer/api/unself_model/JsonRefValue/maybeWhen.mdx",sourceDirName:"api/unself_model/JsonRefValue",slug:"/api/unself_model/JsonRefValue/maybeWhen",permalink:"/developer/api/unself_model/JsonRefValue/maybeWhen",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRefValue/maybeWhen.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"maybeWhen<TResult extends Object?> method",sidebar_label:"maybeWhen",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"maybeMap",permalink:"/developer/api/unself_model/JsonRefValue/maybeMap"},next:{title:"name",permalink:"/developer/api/unself_model/JsonRefValue/name"}},c={},d=[],u={toc:d};function m(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);