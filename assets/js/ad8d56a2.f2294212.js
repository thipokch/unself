"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1939],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),o=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=o(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||f[u]||s;return n?t.createElement(h,i(i({ref:a},p),{},{components:n})):t.createElement(h,i({ref:a},p))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52497:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(87462),r=n(67294),s=n(3905);function i(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">sortPackages</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">sortPackages</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="sortPackages-param-compare">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">compare</span>(<ol class="parameter-list"><li><span class="parameter" id="param-a"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">a</span>, </span></li>\n<li><span class="parameter" id="param-b"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">b</span></span></li>\n</ol>\n)?]</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void sortPackages([int Function(String a, String b)? compare]) {\n  packages.sort(compare ??\n      (String a, String b) {\n        if (a == firstPackage) {\n          return -1;\n        }\n        if (b == firstPackage) {\n          return 1;\n        }\n\n        return a.toLowerCase().compareTo(b.toLowerCase());\n      });\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_license</a></li>\n  <li><a href="../../unself_license/unself_license">unself_license</a></li>\n  <li><a href="../../unself_license/LicenseData">LicenseData</a></li>\n  <li class="self-crumb">sortPackages method</li>\n</ol>\n\n\n    <h5>LicenseData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_license/LicenseData#constructors">Constructors</a></li>\n          <li><a href="../../unself_license/LicenseData/LicenseData.constructor">LicenseData</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_license/LicenseData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_license/LicenseData/firstPackage">firstPackage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_license/LicenseData/licenses">licenses</a></li>\n          <li><a href="../../unself_license/LicenseData/packageLicenseBindings">packageLicenseBindings</a></li>\n          <li><a href="../../unself_license/LicenseData/packages">packages</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_license/LicenseData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_license/LicenseData/addLicense">addLicense</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_license/LicenseData/sortPackages">sortPackages</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_license/LicenseData#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"sortPackages method",sidebar_label:"sortPackages",hide_title:!0},c=void 0,o={unversionedId:"api/unself_license/LicenseData/sortPackages",id:"api/unself_license/LicenseData/sortPackages",title:"sortPackages method",description:"",source:"@site/developer/api/unself_license/LicenseData/sortPackages.mdx",sourceDirName:"api/unself_license/LicenseData",slug:"/api/unself_license/LicenseData/sortPackages",permalink:"/developer/api/unself_license/LicenseData/sortPackages",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_license/LicenseData/sortPackages.mdx",tags:[],version:"current",lastUpdatedAt:1675431091,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"sortPackages method",sidebar_label:"sortPackages",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"packages",permalink:"/developer/api/unself_license/LicenseData/packages"},next:{title:"LicenseService",permalink:"/developer/api/unself_license/LicenseService/"}},p={},d=[],f={toc:d};function u(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);