"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[34771],{3905:(a,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>u});var l=e(67294);function t(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function o(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,l)}return e}function s(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){t(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function i(a,n){if(null==a)return{};var e,l,t=function(a,n){if(null==a)return{};var e,l,t={},o=Object.keys(a);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(l=0;l<o.length;l++)e=o[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var r=l.createContext({}),d=function(a){var n=l.useContext(r),e=n;return a&&(e="function"==typeof a?a(n):s(s({},n),a)),e},c=function(a){var n=d(a.components);return l.createElement(r.Provider,{value:n},a.children)},f="mdxType",p={inlineCode:"code",wrapper:function(a){var n=a.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(a,n){var e=a.components,t=a.mdxType,o=a.originalType,r=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),f=d(e),m=t,u=f["".concat(r,".").concat(m)]||f[m]||p[m]||o;return e?l.createElement(u,s(s({ref:n},c),{},{components:e})):l.createElement(u,s({ref:n},c))}));function u(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var o=e.length,s=new Array(o);s[0]=m;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=a,i[f]="string"==typeof a?a:t,s[1]=i;for(var d=2;d<o;d++)s[d]=e[d];return l.createElement.apply(null,s)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},43271:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>f});var l=e(87462),t=e(67294),o=e(3905);function s(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n    \n      <div>\n<h1><span class="kind-library">unself_local_database</span> library \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section class="summary offset-anchor" id="classes">\n      <h2>Classes</h2>\n\n      <dl>\n        <dt id="$CollectionTable">\n  <span class="name "><a href="../unself_local_database/$CollectionTable/$CollectionTable">$CollectionTable</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="$FieldTable">\n  <span class="name "><a href="../unself_local_database/$FieldTable/$FieldTable">$FieldTable</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Collection">\n  <span class="name "><a href="../unself_local_database/Collection/Collection">Collection</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionCompanion">\n  <span class="name "><a href="../unself_local_database/CollectionCompanion/CollectionCompanion">CollectionCompanion</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionDao">\n  <span class="name "><a href="../unself_local_database/CollectionDao/CollectionDao">CollectionDao</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionData">\n  <span class="name "><a href="../unself_local_database/CollectionData/CollectionData">CollectionData</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionOrm">\n  <span class="name "><a href="../unself_local_database/CollectionOrm/CollectionOrm">CollectionOrm</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="DocumentDao">\n  <span class="name "><a href="../unself_local_database/DocumentDao/DocumentDao">DocumentDao</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Field">\n  <span class="name "><a href="../unself_local_database/Field/Field">Field</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FieldCompanion">\n  <span class="name "><a href="../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FieldData">\n  <span class="name "><a href="../unself_local_database/FieldData/FieldData">FieldData</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="ListConverter">\n  <span class="name "><a href="../unself_local_database/ListConverter/ListConverter">ListConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="LocalDatabase">\n  <span class="name "><a href="../unself_local_database/LocalDatabase/LocalDatabase">LocalDatabase</a></span> \n\n</dt>\n<dd>\n  <a href="../unself_local_database/LocalDatabase/LocalDatabase">LocalDatabase</a> description\n</dd>\n\n        <dt id="MapConverter">\n  <span class="name "><a href="../unself_local_database/MapConverter/MapConverter">MapConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n    <section class="summary offset-anchor" id="extensions">\n      <h2>Extensions</h2>\n\n      <dl>\n        <dt id="CollectionFromDomain">\n    <span class="name "><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="CollectionFromOrm">\n    <span class="name "><a href="../unself_local_database/CollectionFromOrm">CollectionFromOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="CollectionToOrm">\n    <span class="name "><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="FieldFromDomain">\n    <span class="name "><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="FieldFromOrm">\n    <span class="name "><a href="../unself_local_database/FieldFromOrm">FieldFromOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="FieldToOrm">\n    <span class="name "><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n      </dl>\n    </section>\n\n\n\n\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_local_database</a></li>\n  <li class="self-crumb">unself_local_database library</li>\n</ol>\n\n\n    <h5><span class="package-name">unself_local_database</span> <span class="package-kind">package</span></h5>\n    <ol>\n      <li class="section-title">Libraries</li>\n      <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="../unself_local_database/$CollectionTable/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="../unself_local_database/$FieldTable/$FieldTable">$FieldTable</a></li>\n        <li><a href="../unself_local_database/Collection/Collection">Collection</a></li>\n        <li><a href="../unself_local_database/CollectionCompanion/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="../unself_local_database/CollectionDao/CollectionDao">CollectionDao</a></li>\n        <li><a href="../unself_local_database/CollectionData/CollectionData">CollectionData</a></li>\n        <li><a href="../unself_local_database/CollectionOrm/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="../unself_local_database/DocumentDao/DocumentDao">DocumentDao</a></li>\n        <li><a href="../unself_local_database/Field/Field">Field</a></li>\n        <li><a href="../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="../unself_local_database/FieldData/FieldData">FieldData</a></li>\n        <li><a href="../unself_local_database/ListConverter/ListConverter">ListConverter</a></li>\n        <li><a href="../unself_local_database/LocalDatabase/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="../unself_local_database/MapConverter/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="../unself_local_database/CollectionFromOrm">CollectionFromOrm</a></li>\n        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="../unself_local_database/FieldFromOrm">FieldFromOrm</a></li>\n        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n\n\n\n</ol>\n\n  </div>\x3c!--/sidebar-offcanvas-right--\x3e\n\n</main>'}})}const i={title:"unself_local_database library",sidebar_label:"unself_local_database",hide_title:!0},r=void 0,d={unversionedId:"packages/unself_local_database/unself_local_database",id:"packages/unself_local_database/unself_local_database",title:"unself_local_database library",description:"",source:"@site/reference/packages/unself_local_database/unself_local_database.mdx",sourceDirName:"packages/unself_local_database",slug:"/packages/unself_local_database/",permalink:"/reference/packages/unself_local_database/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/unself_local_database/unself_local_database.mdx",tags:[],version:"current",frontMatter:{title:"unself_local_database library",sidebar_label:"unself_local_database",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"licenses",permalink:"/reference/packages/unself_license/LicenseService/licenses"},next:{title:"$CollectionTable",permalink:"/reference/packages/unself_local_database/$CollectionTable/"}},c={},f=[],p={toc:f};function m(a){let{components:n,...e}=a;return(0,o.kt)("wrapper",(0,l.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);