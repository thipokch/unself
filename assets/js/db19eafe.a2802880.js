"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39705],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>p});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,p=d["".concat(i,".").concat(f)]||d[f]||h[f]||s;return a?t.createElement(p,o(o({ref:n},m),{},{components:a})):t.createElement(p,o({ref:n},m))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},96155:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=a(87462),r=a(67294),s=a(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">JsonSchema.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">JsonSchema.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Creates a <a href="../../unself_model/JsonSchema">JsonSchema</a> from Json map</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory JsonSchema.fromJson(Map&lt;String, dynamic&gt; data) =&gt;\n    _$JsonSchemaFromJson(data);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonSchema">JsonSchema</a></li>\n  <li class="self-crumb">JsonSchema.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>JsonSchema class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonSchema#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.entity">entity</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.flat">flat</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonSchema/JsonSchema.struct">struct</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/JsonSchema#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/definition">definition</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonSchema#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonSchema#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"JsonSchema.fromJson factory constructor",sidebar_label:"JsonSchema.fromJson factory constructor",hide_title:!0},i=void 0,c={unversionedId:"api/unself_model/JsonSchema/JsonSchema.constructor",id:"api/unself_model/JsonSchema/JsonSchema.constructor",title:"JsonSchema.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/JsonSchema/JsonSchema.constructor.mdx",sourceDirName:"api/unself_model/JsonSchema",slug:"/api/unself_model/JsonSchema/JsonSchema.constructor",permalink:"/developer/api/unself_model/JsonSchema/JsonSchema.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonSchema/JsonSchema.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"JsonSchema.fromJson factory constructor",sidebar_label:"JsonSchema.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"JsonSchema",permalink:"/developer/api/unself_model/JsonSchema/"},next:{title:"copyWith",permalink:"/developer/api/unself_model/JsonSchema/copyWith"}},m={},d=[],h={toc:d};function f(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);