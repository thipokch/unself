"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[72063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),o=n(67294),a=n(3905);function l(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">operator ==</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n<span class="name ">operator ==</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>The equality operator.</p>\n<p>The default behavior for all <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>s is to return true if and\nonly if this object and <code>other</code> are the same object.</p>\n<p>Override this method to specify a different equality relation on\na class. The overriding method must still be an equivalence relation.\nThat is, it must be:</p>\n<ul>\n<li>\n<p>Total: It must return a boolean for all arguments. It should never throw.</p>\n</li>\n<li>\n<p>Reflexive: For all objects <code>o</code>, <code>o == o</code> must be true.</p>\n</li>\n<li>\n<p>Symmetric: For all objects <code>o1</code> and <code>o2</code>, <code>o1 == o2</code> and <code>o2 == o1</code> must\neither both be true, or both be false.</p>\n</li>\n<li>\n<p>Transitive: For all objects <code>o1</code>, <code>o2</code>, and <code>o3</code>, if <code>o1 == o2</code> and\n<code>o2 == o3</code> are true, then <code>o1 == o3</code> must be true.</p>\n</li>\n</ul>\n<p>The method should also be consistent over time,\nso whether two objects are equal should only change\nif at least one of the objects was modified.</p>\n<p>If a subclass overrides the equality operator, it should override\nthe <a href="../../unself_component/HeroTag/hashCode">hashCode</a> method as well to maintain consistency.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nbool operator ==(Object other) {\n  if (identical(this, other)) {\n    return true;\n  }\n  if (other.runtimeType != runtimeType) {\n    return false;\n  }\n\n  return other is HeroTag &amp;&amp; other.navigator == navigator;\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/HeroTag">HeroTag</a></li>\n  <li class="self-crumb">operator == method</li>\n</ol>\n\n\n    <h5>HeroTag class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/HeroTag/HeroTag.constructor">HeroTag</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/HeroTag#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_component/HeroTag/hashCode">hashCode</a></li>\n          <li><a href="../../unself_component/HeroTag/navigator">navigator</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_component/HeroTag/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_component/HeroTag#operators">Operators</a></li>\n          <li><a href="../../unself_component/HeroTag/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"operator == method",sidebar_label:"operator ==",hide_title:!0},i=void 0,c={unversionedId:"api/unself_component/HeroTag/operator_equals",id:"api/unself_component/HeroTag/operator_equals",title:"operator == method",description:"",source:"@site/developer/api/unself_component/HeroTag/operator_equals.mdx",sourceDirName:"api/unself_component/HeroTag",slug:"/api/unself_component/HeroTag/operator_equals",permalink:"/developer/api/unself_component/HeroTag/operator_equals",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/HeroTag/operator_equals.mdx",tags:[],version:"current",lastUpdatedAt:1675413494,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"operator == method",sidebar_label:"operator ==",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"navigator",permalink:"/developer/api/unself_component/HeroTag/navigator"},next:{title:"toString",permalink:"/developer/api/unself_component/HeroTag/toString"}},p={},d=[],u={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);