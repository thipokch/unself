"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,u=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(u,s(s({ref:t},h),{},{components:n})):a.createElement(u,s({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905);function s(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-property">hashCode</span> property \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n\n        \n<section id="getter">\n\n<section class="multi-line-signature">\n  \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>\n  <span class="name ">hashCode</span>\n  <div class="features"><span class="feature">override</span></div>\n\n</section>\n\n\n<section class="desc markdown">\n  <p>The hash code for this object.</p>\n<p>A hash code is a single integer which represents the state of the object\nthat affects <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> comparisons.</p>\n<p>All objects have hash codes.\nThe default hash code implemented by <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>\nrepresents only the identity of the object,\nthe same way as the default <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> implementation only considers objects\nequal if they are identical (see <a href="https://api.flutter.dev/flutter/dart-core/identityHashCode.html">identityHashCode</a>).</p>\n<p>If <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> is overridden to use the object state instead,\nthe hash code must also be changed to represent that state,\notherwise the object cannot be used in hash based data structures\nlike the default <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a> and <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a> implementations.</p>\n<p>Hash codes must be the same for objects that are equal to each other\naccording to <a href="../../unself_component/HeroTag/operator_equals">operator ==</a>.\nThe hash code of an object should only change if the object changes\nin a way that affects equality.\nThere are no further requirements for the hash codes.\nThey need not be consistent between executions of the same program\nand there are no distribution guarantees.</p>\n<p>Objects that are not equal are allowed to have the same hash code.\nIt is even technically allowed that all instances have the same hash code,\nbut if clashes happen too often,\nit may reduce the efficiency of hash-based data structures\nlike <a href="https://api.flutter.dev/flutter/dart-collection/HashSet-class.html">HashSet</a> or <a href="https://api.flutter.dev/flutter/dart-collection/HashMap-class.html">HashMap</a>.</p>\n<p>If a subclass overrides <a href="../../unself_component/HeroTag/hashCode">hashCode</a>, it should override the\n<a href="../../unself_component/HeroTag/operator_equals">operator ==</a> operator as well to maintain consistency.</p>\n</section>\n\n\n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nint get hashCode =&gt; identityHashCode(navigator);</code></pre>\n</section>\n\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/HeroTag">HeroTag</a></li>\n  <li class="self-crumb">hashCode property</li>\n</ol>\n\n\n    <h5>HeroTag class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/HeroTag/HeroTag.constructor">HeroTag</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/HeroTag#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/HeroTag/hashCode">hashCode</a></li>\n          <li><a href="../../unself_component/HeroTag/navigator">navigator</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/HeroTag/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#operators">Operators</a></li>\n          <li><a href="../../unself_component/HeroTag/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/HeroTag/hashCode",id:"api/unself_component/HeroTag/hashCode",title:"hashCode property",description:"",source:"@site/developer/api/unself_component/HeroTag/hashCode.mdx",sourceDirName:"api/unself_component/HeroTag",slug:"/api/unself_component/HeroTag/hashCode",permalink:"/developer/api/unself_component/HeroTag/hashCode",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/HeroTag/hashCode.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"hashCode property",sidebar_label:"hashCode",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HeroTag const constructor",permalink:"/developer/api/unself_component/HeroTag/HeroTag.constructor"},next:{title:"navigator",permalink:"/developer/api/unself_component/HeroTag/navigator"}},h={},p=[],d={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);