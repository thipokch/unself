"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(a),m=n,u=f["".concat(o,".").concat(m)]||f[m]||d[m]||l;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=a(87462),n=a(67294),l=a(3905);function i(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">XPlatformFile</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">XPlatformFile</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-path">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">path</span>, </span></li>\n<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>\n<li><span class="parameter" id="-param-size"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">size</span>, </span></li>\n<li><span class="parameter" id="-param-bytes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a>?</span> <span class="parameter-name">bytes</span>, </span></li>\n<li><span class="parameter" id="-param-readStream"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">readStream</span>, </span></li>\n<li><span class="parameter" id="-param-identifier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">identifier</span>, </span></li>\n<li><span class="parameter" id="-param-objectUrl"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">objectUrl</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">XPlatformFile({\n  super.path,\n  required super.name,\n  required super.size,\n  super.bytes,\n  super.readStream,\n  super.identifier,\n  required String objectUrl,\n}) : _unsafePath = objectUrl;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_file</a></li>\n  <li><a href="../../unself_file/unself_file">unself_file</a></li>\n  <li><a href="../../unself_file/XPlatformFile">XPlatformFile</a></li>\n  <li class="self-crumb">XPlatformFile constructor</li>\n</ol>\n\n\n    <h5>XPlatformFile class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_file/XPlatformFile#constructors">Constructors</a></li>\n          <li><a href="../../unself_file/XPlatformFile/XPlatformFile.constructor">XPlatformFile</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_file/XPlatformFile#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/bytes.html">bytes</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/extension.html">extension</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/identifier.html">identifier</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/name.html">name</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/path.html">path</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/readStream.html">readStream</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/size.html">size</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_file/XPlatformFile#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_file/XPlatformFile#operators">Operators</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"XPlatformFile constructor",sidebar_label:"XPlatformFile constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_file/XPlatformFile/XPlatformFile.constructor",id:"api/unself_file/XPlatformFile/XPlatformFile.constructor",title:"XPlatformFile constructor",description:"",source:"@site/developer/api/unself_file/XPlatformFile/XPlatformFile.constructor.mdx",sourceDirName:"api/unself_file/XPlatformFile",slug:"/api/unself_file/XPlatformFile/XPlatformFile.constructor",permalink:"/developer/api/unself_file/XPlatformFile/XPlatformFile.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_file/XPlatformFile/XPlatformFile.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1677137924,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{title:"XPlatformFile constructor",sidebar_label:"XPlatformFile constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"XPlatformFile",permalink:"/developer/api/unself_file/XPlatformFile/"},next:{title:"xFile",permalink:"/developer/api/unself_file/XPlatformFileExtension/xFile"}},c={},f=[],d={toc:f};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);