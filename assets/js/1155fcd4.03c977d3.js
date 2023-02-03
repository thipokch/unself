"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36738],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return a?t.createElement(m,r(r({ref:n},c),{},{components:a})):t.createElement(m,r({ref:n},c))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},69831:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var t=a(87462),i=a(67294),l=a(3905);function r(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toString</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">toString</span>(<wbr>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>A string representation of this object.</p>\n<p>Some classes have a default textual representation,\noften paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).\nThese classes will provide the textual representation as\ntheir string representation.</p>\n<p>Other classes have no meaningful textual representation\nthat a program will care about.\nSuch classes will typically override <code>toString</code> to provide\nuseful information when inspecting the object,\nmainly for debugging or logging.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nString toString() {\n  return (StringBuffer(\'FieldCompanion(\')\n        ..write(\'id: $id, \')\n        ..write(\'name: $name, \')\n        ..write(\'type: $type, \')\n        ..write(\'system: $system, \')\n        ..write(\'required: $required, \')\n        ..write(\'unique: $unique, \')\n        ..write(\'options: $options, \')\n        ..write(\'collectionId: $collectionId\')\n        ..write(\')\'))\n      .toString();\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n  <li class="self-crumb">toString method</li>\n</ol>\n\n\n    <h5>FieldCompanion class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldCompanion#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/options">options</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>\n          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"toString method",sidebar_label:"toString",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldCompanion/toString",id:"api/unself_local_database/FieldCompanion/toString",title:"toString method",description:"",source:"@site/developer/api/unself_local_database/FieldCompanion/toString.mdx",sourceDirName:"api/unself_local_database/FieldCompanion",slug:"/api/unself_local_database/FieldCompanion/toString",permalink:"/developer/api/unself_local_database/FieldCompanion/toString",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldCompanion/toString.mdx",tags:[],version:"current",lastUpdatedAt:1675431091,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"toString method",sidebar_label:"toString",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toColumns",permalink:"/developer/api/unself_local_database/FieldCompanion/toColumns"},next:{title:"type",permalink:"/developer/api/unself_local_database/FieldCompanion/type"}},c={},p=[],u={toc:p};function f(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);