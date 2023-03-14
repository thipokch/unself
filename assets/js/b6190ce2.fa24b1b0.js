"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[76991],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=t.createContext({}),o=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=o(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(a),u=s,h=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:s,r[1]=l;for(var o=2;o<i;o++)r[o]=a[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34091:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(87462),s=a(67294),i=a(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">addLicense</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">void</span>\n<span class="name ">addLicense</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="addLicense-param-entry"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LicenseEntry-class.html">LicenseEntry</a></span> <span class="parameter-name">entry</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">void addLicense(LicenseEntry entry) {\n  for (final String package in entry.packages) {\n    _addPackage(package);\n\n    packageLicenseBindings[package]!.add(licenses.length);\n  }\n  licenses.add(entry);\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_license</a></li>\n  <li><a href="../../unself_license/unself_license">unself_license</a></li>\n  <li><a href="../../unself_license/LicenseData">LicenseData</a></li>\n  <li class="self-crumb">addLicense method</li>\n</ol>\n\n\n    <h5>LicenseData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_license/LicenseData#constructors">Constructors</a></li>\n          <li><a href="../../unself_license/LicenseData/LicenseData.constructor">LicenseData</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_license/LicenseData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_license/LicenseData/firstPackage">firstPackage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_license/LicenseData/licenses">licenses</a></li>\n          <li><a href="../../unself_license/LicenseData/packageLicenseBindings">packageLicenseBindings</a></li>\n          <li><a href="../../unself_license/LicenseData/packages">packages</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../unself_license/LicenseData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_license/LicenseData/addLicense">addLicense</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_license/LicenseData/sortPackages">sortPackages</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_license/LicenseData#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"addLicense method",sidebar_label:"addLicense",hide_title:!0},c=void 0,o={unversionedId:"api/unself_license/LicenseData/addLicense",id:"api/unself_license/LicenseData/addLicense",title:"addLicense method",description:"",source:"@site/developer/api/unself_license/LicenseData/addLicense.mdx",sourceDirName:"api/unself_license/LicenseData",slug:"/api/unself_license/LicenseData/addLicense",permalink:"/developer/api/unself_license/LicenseData/addLicense",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_license/LicenseData/addLicense.mdx",tags:[],version:"current",lastUpdatedAt:1678784170,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"addLicense method",sidebar_label:"addLicense",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"LicenseData constructor",permalink:"/developer/api/unself_license/LicenseData/LicenseData.constructor"},next:{title:"firstPackage",permalink:"/developer/api/unself_license/LicenseData/firstPackage"}},d={},p=[],f={toc:p};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);