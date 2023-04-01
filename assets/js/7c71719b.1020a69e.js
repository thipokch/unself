"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21359],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>u});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||s;return r?t.createElement(u,i(i({ref:a},p),{},{components:r})):t.createElement(u,i({ref:a},p))}));function u(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},99171:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(87462),n=r(67294),s=r(3905);function i(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">ArchiveFormat</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">ArchiveFormat</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>\n<li><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>\n<li><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>\n<li><span class="parameter" id="-param-app"><span>required</span> <span class="type-annotation"><a href="../../unself_model/App">App</a></span> <span class="parameter-name">app</span>, </span></li>\n<li><span class="parameter" id="-param-version"><span>@<a href="../../unself_model/JsonVersion">JsonVersion</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span> <span class="parameter-name">version</span>, </span></li>\n<li><span class="parameter" id="-param-constraint"><span>@<a href="../../unself_model/JsonVersionConstraint">JsonVersionConstraint</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span> <span class="parameter-name">constraint</span>, </span></li>\n<li><span class="parameter" id="-param-format"><span>required</span> <span class="type-annotation"><a href="../../unself_model/ArchiveFileFormat">ArchiveFileFormat</a></span> <span class="parameter-name">format</span>, </span></li>\n<li><span class="parameter" id="-param-mappings"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/Mapping">Mapping</a></span>&gt;</span></span> <span class="parameter-name">mappings</span>, </span></li>\n<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>ArchiveFormat description</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const factory ArchiveFormat({\n  /// [id] is unself unique identifier for the ArchiveFormat.\n  required String id,\n\n  /// [created] is the date and time when the [ArchiveFormat] was created inside unself app.\n  required DateTime created,\n\n  /// [updated] is the date and time when the [ArchiveFormat] was last updated inside unself app.\n  required DateTime updated,\n\n  /// [app] is the [App] the [ArchiveFormat] is for.\n  required App app,\n\n  /// [version] is the revision version of the [ArchiveFormat].\n  /// See [Version] from pub_semver for more information.\n  @JsonVersion() required Version version,\n\n  /// [constraint] is the constraint version of the [App].\n  /// See [VersionConstraint] from pub_semver for more information.\n  ///\n  /// [VersionConstraint.compatibleWith] is used to define the minimum version.\n  @JsonVersionConstraint() required VersionConstraint constraint,\n\n  /// [format] is the format of the [ArchiveFormat].\n  required ArchiveFileFormat format,\n\n  /// [entries] is a list of [ArchiveFormatEntry]s.\n  required List&lt;Mapping&gt; mappings,\n\n  /// [extra] is a map of additional properties.\n  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,\n}) = _ArchiveFormat;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/ArchiveFormat">ArchiveFormat</a></li>\n  <li class="self-crumb">ArchiveFormat const constructor</li>\n</ol>\n\n\n    <h5>ArchiveFormat class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/ArchiveFormat#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/ArchiveFormat/ArchiveFormat.constructor">ArchiveFormat</a></li>\n          <li><a href="../../unself_model/ArchiveFormat/ArchiveFormat.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/ArchiveFormat#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/app">app</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/constraint">constraint</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/extra">extra</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/format">format</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/mappings">mappings</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/updated">updated</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveFormat#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/ArchiveFormat/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/ArchiveFormat#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"ArchiveFormat const constructor",sidebar_label:"ArchiveFormat const constructor",hide_title:!0},l=void 0,c={unversionedId:"api/unself_model/ArchiveFormat/ArchiveFormat.constructor",id:"api/unself_model/ArchiveFormat/ArchiveFormat.constructor",title:"ArchiveFormat const constructor",description:"",source:"@site/developer/api/unself_model/ArchiveFormat/ArchiveFormat.constructor.mdx",sourceDirName:"api/unself_model/ArchiveFormat",slug:"/api/unself_model/ArchiveFormat/ArchiveFormat.constructor",permalink:"/developer/api/unself_model/ArchiveFormat/ArchiveFormat.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/ArchiveFormat/ArchiveFormat.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"ArchiveFormat const constructor",sidebar_label:"ArchiveFormat const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ArchiveFormat",permalink:"/developer/api/unself_model/ArchiveFormat/"},next:{title:"app",permalink:"/developer/api/unself_model/ArchiveFormat/app"}},p={},d=[],m={toc:d};function h(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);