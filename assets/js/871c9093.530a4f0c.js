"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[62849],{3905:(e,n,s)=>{s.d(n,{Zo:()=>o,kt:()=>h});var r=s(67294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,r,t=function(e,n){if(null==e)return{};var s,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var c=r.createContext({}),d=function(e){var n=r.useContext(c),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},o=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var s=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(s),f=t,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return s?r.createElement(h,i(i({ref:n},o),{},{components:s})):r.createElement(h,i({ref:n},o))}));function h(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=s.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:t,i[1]=l;for(var d=2;d<a;d++)i[d]=s[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}f.displayName="MDXCreateElement"},61835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=s(87462),t=s(67294),a=s(3905);function i(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">UserService</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>UserService description</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n  <dt>Implemented types</dt>\n  <dd>\n    <ul class="comma-separated clazz-relationships">\n        <li><a href="../unself_user/IUserService">IUserService</a></li>\n    </ul>\n  </dd>\n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="UserService" class="callable">\n          <span class="name"><a href="../unself_user/UserService/UserService.constructor">UserService</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          UserService description\n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="dispose" class="callable">\n  <span class="name"><a href="../unself_user/UserService/dispose">dispose</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="setThemeMode" class="callable">\n  <span class="name"><a href="../unself_user/UserService/setThemeMode">setThemeMode</a></span><span class="signature">(<wbr><span class="parameter" id="setThemeMode-param-themeMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeMode.html">ThemeMode</a></span> <span class="parameter-name">themeMode</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  A description for setThemeMode\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="streamUser" class="callable">\n  <span class="name"><a href="../unself_user/UserService/streamUser">streamUser</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter">User</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  A description for streamUser\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_user</a></li>\n  <li><a href="../unself_user/unself_user">unself_user</a></li>\n  <li class="self-crumb">UserService class</li>\n</ol>\n\n\n    <h5>unself_user library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_user/unself_user#classes">Classes</a></li>\n        <li><a href="../unself_user/IUserService">IUserService</a></li>\n        <li><a href="../unself_user/UserService">UserService</a></li>\n\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_user/UserService#constructors">Constructors</a></li>\n          <li><a href="../unself_user/UserService/UserService.constructor">UserService</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_user/UserService#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../unself_user/UserService#instance-methods">Methods</a></li>\n          <li><a href="../unself_user/UserService/dispose">dispose</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../unself_user/UserService/setThemeMode">setThemeMode</a></li>\n          <li><a href="../unself_user/UserService/streamUser">streamUser</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_user/UserService#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"UserService class",sidebar_label:"UserService",hide_title:!0},c=void 0,d={unversionedId:"api/unself_user/UserService/UserService",id:"api/unself_user/UserService/UserService",title:"UserService class",description:"",source:"@site/developer/api/unself_user/UserService/UserService.mdx",sourceDirName:"api/unself_user/UserService",slug:"/api/unself_user/UserService/",permalink:"/developer/api/unself_user/UserService/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_user/UserService/UserService.mdx",tags:[],version:"current",lastUpdatedAt:1675413494,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"UserService class",sidebar_label:"UserService",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"streamUser",permalink:"/developer/api/unself_user/IUserService/streamUser"},next:{title:"UserService const constructor",permalink:"/developer/api/unself_user/UserService/UserService.constructor"}},o={},p=[],u={toc:p};function f(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);