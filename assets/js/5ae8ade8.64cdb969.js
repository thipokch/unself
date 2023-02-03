"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[82176],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=l,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=f;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37481:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=t(87462),l=t(67294),o=t(3905);function r(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">operator ==</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n<span class="name ">operator ==</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>The equality operator.</p>\n<p>The default behavior for all <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>s is to return true if and\nonly if this object and <code>other</code> are the same object.</p>\n<p>Override this method to specify a different equality relation on\na class. The overriding method must still be an equivalence relation.\nThat is, it must be:</p>\n<ul>\n<li>\n<p>Total: It must return a boolean for all arguments. It should never throw.</p>\n</li>\n<li>\n<p>Reflexive: For all objects <code>o</code>, <code>o == o</code> must be true.</p>\n</li>\n<li>\n<p>Symmetric: For all objects <code>o1</code> and <code>o2</code>, <code>o1 == o2</code> and <code>o2 == o1</code> must\neither both be true, or both be false.</p>\n</li>\n<li>\n<p>Transitive: For all objects <code>o1</code>, <code>o2</code>, and <code>o3</code>, if <code>o1 == o2</code> and\n<code>o2 == o3</code> are true, then <code>o1 == o3</code> must be true.</p>\n</li>\n</ul>\n<p>The method should also be consistent over time,\nso whether two objects are equal should only change\nif at least one of the objects was modified.</p>\n<p>If a subclass overrides the equality operator, it should override\nthe <a href="../../unself_local_database/FieldData/hashCode">hashCode</a> method as well to maintain consistency.</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nbool operator ==(Object other) =&gt;\n    identical(this, other) ||\n    (other is FieldData &amp;&amp;\n        other.id == this.id &amp;&amp;\n        other.name == this.name &amp;&amp;\n        other.type == this.type &amp;&amp;\n        other.system == this.system &amp;&amp;\n        other.required == this.required &amp;&amp;\n        other.unique == this.unique &amp;&amp;\n        other.options == this.options &amp;&amp;\n        other.collectionId == this.collectionId);</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>\n  <li class="self-crumb">operator == method</li>\n</ol>\n\n\n    <h5>FieldData class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>\n          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>\n        </li>\n          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>\n          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>\n          <li><a href="../../unself_local_database/FieldData/id">id</a></li>\n          <li><a href="../../unself_local_database/FieldData/name">name</a></li>\n          <li><a href="../../unself_local_database/FieldData/options">options</a></li>\n          <li><a href="../../unself_local_database/FieldData/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../../unself_local_database/FieldData/system">system</a></li>\n          <li><a href="../../unself_local_database/FieldData/type">type</a></li>\n          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>\n          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>\n          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>\n          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>\n\n        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>\n          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"operator == method",sidebar_label:"operator ==",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldData/operator_equals",id:"api/unself_local_database/FieldData/operator_equals",title:"operator == method",description:"",source:"@site/developer/api/unself_local_database/FieldData/operator_equals.mdx",sourceDirName:"api/unself_local_database/FieldData",slug:"/api/unself_local_database/FieldData/operator_equals",permalink:"/developer/api/unself_local_database/FieldData/operator_equals",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldData/operator_equals.mdx",tags:[],version:"current",lastUpdatedAt:1675428710,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"operator == method",sidebar_label:"operator ==",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"name",permalink:"/developer/api/unself_local_database/FieldData/name"},next:{title:"options",permalink:"/developer/api/unself_local_database/FieldData/options"}},c={},p=[],u={toc:p};function f(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);