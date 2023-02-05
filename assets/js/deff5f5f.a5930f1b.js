"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55912],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(i),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(f,s(s({ref:t},d),{},{components:i})):n.createElement(f,s({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<r;o++)s[o]=i[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},44963:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=i(87462),a=i(67294),r=i(3905);function s(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">item</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n<span class="name ">item</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="item-param-packageName">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span>, </span></li>\n<li><span class="parameter" id="item-param-licenseCount"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">licenseCount</span>, </span></li>\n<li><span class="parameter" id="item-param-onSelectPackage"><span>required</span> <span class="type-annotation">dynamic</span> <span class="parameter-name">onSelectPackage</span>(<ol class="parameter-list"><li><span class="parameter" id="param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span></li>\n</ol>\n)}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static Widget item({\n  required String packageName,\n  required int licenseCount,\n  required Function(String packageName) onSelectPackage,\n}) =&gt;\n    ListTile(\n      // key: ValueKey(index),\n      title: Text(packageName),\n      trailing: const Icon(UnSymbols.chevronForward),\n      subtitle: Text(\'$licenseCount license${licenseCount == 1 ? \'\' : \'s\'}\'),\n      onTap: () =&gt; onSelectPackage(packageName),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_license_list</a></li>\n  <li><a href="../../license_list/license_list">license_list</a></li>\n  <li><a href="../../license_list/LicenseListSliver">LicenseListSliver</a></li>\n  <li class="self-crumb">item static method</li>\n</ol>\n\n\n    <h5>LicenseListSliver class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../license_list/LicenseListSliver#constructors">Constructors</a></li>\n          <li><a href="../../license_list/LicenseListSliver/LicenseListSliver.constructor">LicenseListSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../../license_list/LicenseListSliver#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../../license_list/LicenseListSliver/onSelectPackage">onSelectPackage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../license_list/LicenseListSliver#instance-methods">Methods</a></li>\n          <li><a href="../../license_list/LicenseListSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../license_list/LicenseListSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../license_list/LicenseListSliver#static-methods">Static methods</a></li>\n          <li><a href="../../license_list/LicenseListSliver/item">item</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"item static method",sidebar_label:"item",hide_title:!0},c=void 0,o={unversionedId:"api/license_list/LicenseListSliver/item",id:"api/license_list/LicenseListSliver/item",title:"item static method",description:"",source:"@site/developer/api/license_list/LicenseListSliver/item.mdx",sourceDirName:"api/license_list/LicenseListSliver",slug:"/api/license_list/LicenseListSliver/item",permalink:"/developer/api/license_list/LicenseListSliver/item",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/license_list/LicenseListSliver/item.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"item static method",sidebar_label:"item",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/developer/api/license_list/LicenseListSliver/build"},next:{title:"onSelectPackage",permalink:"/developer/api/license_list/LicenseListSliver/onSelectPackage"}},d={},p=[],u={toc:p};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);