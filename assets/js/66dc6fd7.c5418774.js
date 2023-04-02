"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[62110],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(o,".").concat(u)]||d[u]||f[u]||l;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76824:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(87462),r=t(67294),l=t(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Flat</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">Flat</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-definition">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="../../unself_model/IJsonSchema">IJsonSchema</a></span>&gt;</span></span> <span class="parameter-name">definition</span>, </span></li>\n<li><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-entityPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">entityPath</span>, </span></li>\n<li><span class="parameter" id="-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span>, </span></li>\n<li><span class="parameter" id="-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span>, </span></li>\n<li><span class="parameter" id="-param-fieldMap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">fieldMap</span>, </span></li>\n<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory Flat(final String name,\n    {final Map&lt;String, IJsonSchema&gt; definition,\n    final String key,\n    final List&lt;String&gt; entityPath,\n    final List&lt;List&lt;String&gt;&gt; includePath,\n    final bool addMissingKeys,\n    final Map&lt;String, String&gt; fieldMap,\n    @JsonExtra() final Map&lt;String, dynamic&gt; extra}) = _$Flat;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Flat">Flat</a></li>\n  <li class="self-crumb">Flat const constructor</li>\n</ol>\n\n\n    <h5>Flat class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Flat#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Flat/Flat.constructor">Flat</a></li>\n          <li><a href="../../unself_model/Flat/Flat.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/Flat#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_model/Flat/addMissingKeys">addMissingKeys</a></li>\n          <li><a href="../../unself_model/Flat/copyWith">copyWith</a></li>\n          <li><a href="../../unself_model/Flat/definition">definition</a></li>\n          <li><a href="../../unself_model/Flat/entityPath">entityPath</a></li>\n          <li><a href="../../unself_model/Flat/extra">extra</a></li>\n          <li><a href="../../unself_model/Flat/fieldMap">fieldMap</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_model/Flat/includePath">includePath</a></li>\n          <li><a href="../../unself_model/Flat/key">key</a></li>\n          <li><a href="../../unself_model/Flat/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Flat#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonSchema/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Flat#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Flat const constructor",sidebar_label:"Flat const constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_model/Flat/Flat.constructor",id:"api/unself_model/Flat/Flat.constructor",title:"Flat const constructor",description:"",source:"@site/developer/api/unself_model/Flat/Flat.constructor.mdx",sourceDirName:"api/unself_model/Flat",slug:"/api/unself_model/Flat/Flat.constructor",permalink:"/developer/api/unself_model/Flat/Flat.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Flat/Flat.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Flat const constructor",sidebar_label:"Flat const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Flat",permalink:"/developer/api/unself_model/Flat/"},next:{title:"addMissingKeys",permalink:"/developer/api/unself_model/Flat/addMissingKeys"}},c={},d=[],f={toc:d};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);