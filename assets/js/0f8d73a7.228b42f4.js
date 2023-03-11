"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);function i(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toString</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">toString</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A string representation of this object.</p>\n<p>Some classes have a default textual representation,\noften paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).\nThese classes will provide the textual representation as\ntheir string representation.</p>\n<p>Other classes have no meaningful textual representation\nthat a program will care about.\nSuch classes will typically override <code>toString</code> to provide\nuseful information when inspecting the object,\nmainly for debugging or logging.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString toString() =&gt;\n    \'Default Hero tag for Cupertino navigation bars with navigator $navigator\';</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/HeroTag">HeroTag</a></li>\n  <li class="self-crumb">toString method</li>\n</ol>\n\n\n    <h5>HeroTag class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/HeroTag/HeroTag.constructor">HeroTag</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/HeroTag#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/HeroTag/hashCode">hashCode</a></li>\n          <li><a href="../../unself_component/HeroTag/navigator">navigator</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/HeroTag/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#operators">Operators</a></li>\n          <li><a href="../../unself_component/HeroTag/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"toString method",sidebar_label:"toString",hide_title:!0},l=void 0,c={unversionedId:"api/unself_component/HeroTag/toString",id:"api/unself_component/HeroTag/toString",title:"toString method",description:"",source:"@site/developer/api/unself_component/HeroTag/toString.mdx",sourceDirName:"api/unself_component/HeroTag",slug:"/api/unself_component/HeroTag/toString",permalink:"/developer/api/unself_component/HeroTag/toString",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/HeroTag/toString.mdx",tags:[],version:"current",lastUpdatedAt:1678543958,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"toString method",sidebar_label:"toString",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"operator ==",permalink:"/developer/api/unself_component/HeroTag/operator_equals"},next:{title:"ListItemBuilder",permalink:"/developer/api/unself_component/ListItemBuilder/"}},p={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);