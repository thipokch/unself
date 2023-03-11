"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[16035],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(o,".").concat(u)]||c[u]||f[u]||i;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(87462),a=t(67294),i=t(3905);function s(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">version</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="../../unself_model/JsonVersion">JsonVersion</a>()</li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span>\n  <span class="name ">version</span>\n  <div class="features"><span class="feature">inherited</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p><a href="../../unself_model/Mapping/version">version</a> is the revision version of the <a href="../../unself_model/Mapping">Mapping</a>.\nSee <a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a> from pub_semver for more information.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@JsonVersion()\nVersion get version =&gt; throw _privateConstructorUsedError;</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Mapping">Mapping</a></li>\n  <li class="self-crumb">version property</li>\n</ol>\n\n\n    <h5>Mapping class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Mapping#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Mapping/Mapping.constructor">Mapping</a></li>\n          <li><a href="../../unself_model/Mapping/Mapping.fromJson">fromJson</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_model/Mapping#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Mapping/app">app</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/constraint">constraint</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/id">id</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/updated">updated</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/version">version</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Mapping#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Mapping/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Mapping#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"version property",sidebar_label:"version",hide_title:!0},o=void 0,p={unversionedId:"api/unself_model/Mapping/version",id:"api/unself_model/Mapping/version",title:"version property",description:"",source:"@site/developer/api/unself_model/Mapping/version.mdx",sourceDirName:"api/unself_model/Mapping",slug:"/api/unself_model/Mapping/version",permalink:"/developer/api/unself_model/Mapping/version",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Mapping/version.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"version property",sidebar_label:"version",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updated",permalink:"/developer/api/unself_model/Mapping/updated"},next:{title:"Node",permalink:"/developer/api/unself_model/Node/"}},d={},c=[],f={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);