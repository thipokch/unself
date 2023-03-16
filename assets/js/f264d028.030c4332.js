"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);function c(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">Account.fromJson</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">Account.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>\n</ol>)\n    </section>\n\n    \n<section class="desc markdown">\n  <p>Creates a <a href="../../unself_model/Account">Account</a> from Json map</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">factory Account.fromJson(Map&lt;String, dynamic&gt; data) =&gt;\n    _$AccountFromJson(data);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_model</a></li>\n  <li><a href="../../unself_model/unself_model">unself_model</a></li>\n  <li><a href="../../unself_model/Account">Account</a></li>\n  <li class="self-crumb">Account.fromJson factory constructor</li>\n</ol>\n\n\n    <h5>Account class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_model/Account#constructors">Constructors</a></li>\n          <li><a href="../../unself_model/Account/Account.constructor">Account</a></li>\n          <li><a href="../../unself_model/Account/Account.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_model/Account#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="../../unself_model/Account/appId">appId</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/archiveId">archiveId</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/created">created</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/emails">emails</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/id">id</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/isOwner">isOwner</a></li>\n          <li><a href="../../unself_model/Account/labels">labels</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/name">name</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/updated">updated</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Account#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="../../unself_model/Account/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_model/Account#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"Account.fromJson factory constructor",sidebar_label:"Account.fromJson factory constructor",hide_title:!0},s=void 0,i={unversionedId:"api/unself_model/Account/Account.constructor",id:"api/unself_model/Account/Account.constructor",title:"Account.fromJson factory constructor",description:"",source:"@site/developer/api/unself_model/Account/Account.constructor.mdx",sourceDirName:"api/unself_model/Account",slug:"/api/unself_model/Account/Account.constructor",permalink:"/developer/api/unself_model/Account/Account.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_model/Account/Account.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678948164,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"Account.fromJson factory constructor",sidebar_label:"Account.fromJson factory constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Account",permalink:"/developer/api/unself_model/Account/"},next:{title:"app",permalink:"/developer/api/unself_model/Account/app"}},u={},d=[],f={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);