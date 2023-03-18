"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return t?s.createElement(m,o(o({ref:n},f),{},{components:t})):s.createElement(m,o({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},97794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(87462),a=t(67294),r=t(3905);function o(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">JsonRefList.union</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/FreezedUnionValue-class.html">FreezedUnionValue</a>(\'JsonRefList.union\')</li>\n    </ol>\n  </div>const\n      <span class="name ">JsonRefList.union</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="union-param-names"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">names</span>, </span></li>\n<li><span class="parameter" id="union-param-key">{<span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>(\'type\')</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@FreezedUnionValue(\'JsonRefList.union\')\nconst factory JsonRefList.union(\n  List&lt;String&gt; names, {\n  @Default(\'type\') String key,\n}) = UnionList;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/JsonRefList">JsonRefList</a></li>\n  <li class="self-crumb">JsonRefList.union const constructor</li>\n</ol>\n\n\n    <h5>JsonRefList class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/JsonRefList#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/JsonRefList/JsonRefList.fromJson">fromJson</a></li>\n          <li><a href="../../unself_model/JsonRefList/JsonRefList.ref">ref</a></li>\n          <li><a href="../../unself_model/JsonRefList/JsonRefList.union">union</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/JsonRefList#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_model/JsonRefList/schema">schema</a></li>\n\n        <li class="section-title"><a href="../../unself_model/JsonRefList#instance-methods">Methods</a></li>\n          <li><a href="../../unself_model/JsonRefList/doCallback">doCallback</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/map">map</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/when">when</a></li>\n          <li class="inherited"><a href="../../unself_model/JsonRefList/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/JsonRefList#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"JsonRefList.union const constructor",sidebar_label:"JsonRefList.union const constructor",hide_title:!0},l=void 0,c={unversionedId:"api/unself_model/JsonRefList/JsonRefList.constructor",id:"api/unself_model/JsonRefList/JsonRefList.constructor",title:"JsonRefList.union const constructor",description:"",source:"@site/developer/api/unself_model/JsonRefList/JsonRefList.constructor.mdx",sourceDirName:"api/unself_model/JsonRefList",slug:"/api/unself_model/JsonRefList/JsonRefList.constructor",permalink:"/developer/api/unself_model/JsonRefList/JsonRefList.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/JsonRefList/JsonRefList.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1679129786,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"JsonRefList.union const constructor",sidebar_label:"JsonRefList.union const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"JsonRefList",permalink:"/developer/api/unself_model/JsonRefList/"},next:{title:"doCallback",permalink:"/developer/api/unself_model/JsonRefList/doCallback"}},f={},d=[],u={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);