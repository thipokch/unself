"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[54763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(67294),l=n(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toOrm</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>\n<span class="name ">toOrm</span>(<wbr>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">GeneratedColumn toOrm() =&gt; GeneratedColumn(\n      name,\n      collectionId,\n      !required,\n      type: &lt;FieldType, DriftSqlType&gt;{\n        FieldType.text: DriftSqlType.string,\n        FieldType.number: DriftSqlType.int,\n        FieldType.bool: DriftSqlType.bool,\n        FieldType.email: DriftSqlType.string,\n        FieldType.url: DriftSqlType.string,\n        FieldType.date: DriftSqlType.dateTime,\n        FieldType.select: DriftSqlType.string,\n        FieldType.file: DriftSqlType.string,\n        FieldType.relation: DriftSqlType.string,\n      }[type]!,\n      // defaultConstraints: GeneratedColumn, // TODO: Implement unique constraint\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n  <li class="self-crumb">toOrm method</li>\n</ol>\n\n\n    <h5>FieldToOrm extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldToOrm#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldToOrm/toDomain">toDomain</a></li>\n          <li><a href="../../unself_local_database/FieldToOrm/toOrm">toOrm</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toOrm method",sidebar_label:"toOrm",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldToOrm/toOrm",id:"api/unself_local_database/FieldToOrm/toOrm",title:"toOrm method",description:"",source:"@site/developer/api/unself_local_database/FieldToOrm/toOrm.mdx",sourceDirName:"api/unself_local_database/FieldToOrm",slug:"/api/unself_local_database/FieldToOrm/toOrm",permalink:"/developer/api/unself_local_database/FieldToOrm/toOrm",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldToOrm/toOrm.mdx",tags:[],version:"current",lastUpdatedAt:1678784170,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"toOrm method",sidebar_label:"toOrm",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toDomain",permalink:"/developer/api/unself_local_database/FieldToOrm/toDomain"},next:{title:"FieldToOrm",permalink:"/developer/api/unself_local_database/FieldToOrm"}},c={},p=[],m={toc:p};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);