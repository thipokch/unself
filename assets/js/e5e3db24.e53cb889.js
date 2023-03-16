"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[49074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var o=2;o<s;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=n(67294),s=n(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">LicenseListPage</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      const\n      <span class="name ">LicenseListPage</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>\n<li><span class="parameter" id="-param-onSelectPackage"><span>required</span> <span class="type-annotation">dynamic</span> <span class="parameter-name">onSelectPackage</span>(<ol class="parameter-list"><li><span class="parameter" id="param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">const LicenseListPage({super.key, required this.onSelectPackage});</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_license_list</a></li>\n  <li><a href="../../license_list/license_list">license_list</a></li>\n  <li><a href="../../license_list/LicenseListPage">LicenseListPage</a></li>\n  <li class="self-crumb">LicenseListPage const constructor</li>\n</ol>\n\n\n    <h5>LicenseListPage class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../license_list/LicenseListPage#constructors">Constructors</a></li>\n          <li><a href="../../license_list/LicenseListPage/LicenseListPage.constructor">LicenseListPage</a></li>\n\n\n        <li class="section-title">\n          <a href="../../license_list/LicenseListPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../license_list/LicenseListPage/onSelectPackage">onSelectPackage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../license_list/LicenseListPage#instance-methods">Methods</a></li>\n          <li><a href="../../license_list/LicenseListPage/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../license_list/LicenseListPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"LicenseListPage const constructor",sidebar_label:"LicenseListPage const constructor",hide_title:!0},c=void 0,o={unversionedId:"api/license_list/LicenseListPage/LicenseListPage.constructor",id:"api/license_list/LicenseListPage/LicenseListPage.constructor",title:"LicenseListPage const constructor",description:"",source:"@site/developer/api/license_list/LicenseListPage/LicenseListPage.constructor.mdx",sourceDirName:"api/license_list/LicenseListPage",slug:"/api/license_list/LicenseListPage/LicenseListPage.constructor",permalink:"/developer/api/license_list/LicenseListPage/LicenseListPage.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/license_list/LicenseListPage/LicenseListPage.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678956944,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{title:"LicenseListPage const constructor",sidebar_label:"LicenseListPage const constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"LicenseListPage",permalink:"/developer/api/license_list/LicenseListPage/"},next:{title:"build",permalink:"/developer/api/license_list/LicenseListPage/build"}},d={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);