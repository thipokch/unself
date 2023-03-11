"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11109],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>h});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),o=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(r),f=s,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?t.createElement(h,i(i({ref:n},d),{},{components:r})):t.createElement(h,i({ref:n},d))}));function h(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:s,i[1]=l;for(var o=2;o<a;o++)i[o]=r[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58427:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(87462),s=r(67294),a=r(3905);function i(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">IUserService</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>An interface for UserService</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_user/UserService">UserService</a></li>\n        </ul></dd>\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="IUserService" class="callable">\n          <span class="name"><a href="../unself_user/IUserService/IUserService.constructor">IUserService</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="setThemeMode" class="callable">\n  <span class="name"><a href="../unself_user/IUserService/setThemeMode">setThemeMode</a></span><span class="signature">(<wbr><span class="parameter" id="setThemeMode-param-themeMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeMode.html">ThemeMode</a></span> <span class="parameter-name">themeMode</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  A description for setThemeMode\n  \n\n</dd>\n\n        <dt id="streamUser" class="callable">\n  <span class="name"><a href="../unself_user/IUserService/streamUser">streamUser</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter">Settings</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  A description for streamUser\n  \n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_user</a></li>\n  <li><a href="../unself_user/unself_user">unself_user</a></li>\n  <li class="self-crumb">IUserService abstract class</li>\n</ol>\n\n\n    <h5>unself_user library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_user/unself_user#classes">Classes</a></li>\n        <li><a href="../unself_user/IUserService">IUserService</a></li>\n        <li><a href="../unself_user/UserService">UserService</a></li>\n\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_user/IUserService#constructors">Constructors</a></li>\n          <li><a href="../unself_user/IUserService/IUserService.constructor">IUserService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_user/IUserService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_user/IUserService#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_user/IUserService/setThemeMode">setThemeMode</a></li>\n          <li><a href="../unself_user/IUserService/streamUser">streamUser</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_user/IUserService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"IUserService abstract class",sidebar_label:"IUserService",hide_title:!0},c=void 0,o={unversionedId:"api/unself_user/IUserService/IUserService",id:"api/unself_user/IUserService/IUserService",title:"IUserService abstract class",description:"",source:"@site/developer/api/unself_user/IUserService/IUserService.mdx",sourceDirName:"api/unself_user/IUserService",slug:"/api/unself_user/IUserService/",permalink:"/developer/api/unself_user/IUserService/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_user/IUserService/IUserService.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"IUserService abstract class",sidebar_label:"IUserService",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"unself_user",permalink:"/developer/api/unself_user/"},next:{title:"IUserService constructor",permalink:"/developer/api/unself_user/IUserService/IUserService.constructor"}},d={},p=[],u={toc:p};function f(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);