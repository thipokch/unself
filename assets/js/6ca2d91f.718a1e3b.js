"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33945],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(a),h=n,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=a(67294),s=a(3905);function i(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Archive</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">Archive</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>\n<li><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-account"><span>required</span> <span class="type-annotation"><a href="../../unself_model/Account">Account</a></span> <span class="parameter-name">account</span>, </span></li>\n<li><span class="parameter" id="-param-formatId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">formatId</span>, </span></li>\n<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p><a href="../../unself_model/Archive">Archive</a> is a set of data user imported from other apps.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory Archive({\n  /// [id] is unself unique identifier for the [Archive].\n  required String id,\n\n  /// [created] is the date and time when the [Archive] was created inside unself app.\n  required DateTime created,\n\n  /// [updated] is the date and time when the [Archive] was last updated inside unself app.\n  required DateTime updated,\n\n  /// [name] is the name of the [Archive].\n  required String name,\n\n  /// [account] is the owner of the [Archive] imported.\n  required Account account,\n  required String formatId,\n\n  /// [extra] is a map of additional properties.\n  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,\n}) = _Archive;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Archive">Archive</a></li>\n  <li class="self-crumb">Archive const constructor</li>\n</ol>\n\n\n    <h5>Archive class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Archive#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Archive/Archive.constructor">Archive</a></li>\n          <li><a href="../../unself_model/Archive/Archive.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/Archive#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Archive/account">account</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/extra">extra</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/formatId">formatId</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Archive#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Archive/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Archive#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"Archive const constructor",sidebar_label:"Archive const constructor",hide_title:!0},c=void 0,o={unversionedId:"api/unself_model/Archive/Archive.constructor",id:"api/unself_model/Archive/Archive.constructor",title:"Archive const constructor",description:"",source:"@site/developer/api/unself_model/Archive/Archive.constructor.mdx",sourceDirName:"api/unself_model/Archive",slug:"/api/unself_model/Archive/Archive.constructor",permalink:"/developer/api/unself_model/Archive/Archive.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Archive/Archive.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Archive const constructor",sidebar_label:"Archive const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Archive",permalink:"/developer/api/unself_model/Archive/"},next:{title:"account",permalink:"/developer/api/unself_model/Archive/account"}},d={},p=[],u={toc:p};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);