"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83630],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?t.createElement(f,l(l({ref:n},c),{},{components:a})):t.createElement(f,l({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7655:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var t=a(87462),r=a(67294),o=a(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toDomain</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype">Field</span>\n<span class="name ">toDomain</span>(<wbr>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Field toDomain() =&gt; Field(\n      id: id,\n      name: name,\n      type: type,\n      system: system,\n      required: required,\n      unique: unique,\n      options: jsonDecode(options ?? "{}"),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n  <li class="self-crumb">toDomain method</li>\n</ol>\n\n\n    <h5>FieldToOrm extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldToOrm#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldToOrm/toDomain">toDomain</a></li>\n          <li><a href="../../unself_local_database/FieldToOrm/toOrm">toOrm</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toDomain method",sidebar_label:"toDomain",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldToOrm/toDomain",id:"api/unself_local_database/FieldToOrm/toDomain",title:"toDomain method",description:"",source:"@site/developer/api/unself_local_database/FieldToOrm/toDomain.mdx",sourceDirName:"api/unself_local_database/FieldToOrm",slug:"/api/unself_local_database/FieldToOrm/toDomain",permalink:"/developer/api/unself_local_database/FieldToOrm/toDomain",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldToOrm/toDomain.mdx",tags:[],version:"current",lastUpdatedAt:1675229020,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"toDomain method",sidebar_label:"toDomain",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"FieldFromOrm",permalink:"/developer/api/unself_local_database/FieldFromOrm"},next:{title:"toOrm",permalink:"/developer/api/unself_local_database/FieldToOrm/toOrm"}},c={},m=[],p={toc:m};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);