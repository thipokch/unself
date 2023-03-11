"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21471],{3905:(a,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>b});var l=e(67294);function t(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function s(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,l)}return e}function o(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){t(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function i(a,n){if(null==a)return{};var e,l,t=function(a,n){if(null==a)return{};var e,l,t={},s=Object.keys(a);for(l=0;l<s.length;l++)e=s[l],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(l=0;l<s.length;l++)e=s[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var d=l.createContext({}),r=function(a){var n=l.useContext(d),e=n;return a&&(e="function"==typeof a?a(n):o(o({},n),a)),e},c=function(a){var n=r(a.components);return l.createElement(d.Provider,{value:n},a.children)},f="mdxType",p={inlineCode:"code",wrapper:function(a){var n=a.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(a,n){var e=a.components,t=a.mdxType,s=a.originalType,d=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),f=r(e),u=t,b=f["".concat(d,".").concat(u)]||f[u]||p[u]||s;return e?l.createElement(b,o(o({ref:n},c),{},{components:e})):l.createElement(b,o({ref:n},c))}));function b(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var s=e.length,o=new Array(s);o[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=a,i[f]="string"==typeof a?a:t,o[1]=i;for(var r=2;r<s;r++)o[r]=e[r];return l.createElement.apply(null,o)}return l.createElement.apply(null,e)}u.displayName="MDXCreateElement"},42089:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>f});var l=e(87462),t=e(67294),s=e(3905);function o(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n    \n      <div>\n<h1><span class="kind-library">unself_local_database</span> library \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section class="summary offset-anchor" id="classes">\n      <h2>Classes</h2>\n\n      <dl>\n        <dt id="$CollectionTable">\n  <span class="name "><a href="unself_local_database/$CollectionTable">$CollectionTable</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="$FieldTable">\n  <span class="name "><a href="unself_local_database/$FieldTable">$FieldTable</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Collection">\n  <span class="name "><a href="unself_local_database/Collection">Collection</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionCompanion">\n  <span class="name "><a href="unself_local_database/CollectionCompanion">CollectionCompanion</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionDao">\n  <span class="name "><a href="unself_local_database/CollectionDao">CollectionDao</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionData">\n  <span class="name "><a href="unself_local_database/CollectionData">CollectionData</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="CollectionOrm">\n  <span class="name "><a href="unself_local_database/CollectionOrm">CollectionOrm</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="DocumentDao">\n  <span class="name "><a href="unself_local_database/DocumentDao">DocumentDao</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="Field">\n  <span class="name "><a href="unself_local_database/Field">Field</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FieldCompanion">\n  <span class="name "><a href="unself_local_database/FieldCompanion">FieldCompanion</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="FieldData">\n  <span class="name "><a href="unself_local_database/FieldData">FieldData</a></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="ListConverter">\n  <span class="name "><a href="unself_local_database/ListConverter">ListConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n        <dt id="LocalDatabase">\n  <span class="name "><a href="unself_local_database/LocalDatabase">LocalDatabase</a></span> \n\n</dt>\n<dd>\n  <a href="unself_local_database/LocalDatabase">LocalDatabase</a> description\n</dd>\n\n        <dt id="MapConverter">\n  <span class="name "><a href="unself_local_database/MapConverter">MapConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> \n\n</dt>\n<dd>\n  \n</dd>\n\n      </dl>\n    </section>\n\n\n    <section class="summary offset-anchor" id="extensions">\n      <h2>Extensions</h2>\n\n      <dl>\n        <dt id="CollectionFromDomain">\n    <span class="name "><a href="unself_local_database/CollectionFromDomain">CollectionFromDomain</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="CollectionToOrm">\n    <span class="name "><a href="unself_local_database/CollectionToOrm">CollectionToOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="FieldFromDomain">\n    <span class="name "><a href="unself_local_database/FieldFromDomain">FieldFromDomain</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n        <dt id="FieldToOrm">\n    <span class="name "><a href="unself_local_database/FieldToOrm">FieldToOrm</a></span> \n\n</dt>\n<dd>\n    \n</dd>\n\n\n      </dl>\n    </section>\n\n\n\n    <section class="summary offset-anchor" id="functions">\n      <h2>Functions</h2>\n\n      <dl class="callables">\n        <dt id="connect" class="callable">\n  <span class="name"><a href="unself_local_database/connect">connect</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnection-class.html">DatabaseConnection</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n      </dl>\n    </section>\n\n\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="index">unself_local_database</a></li>\n  <li class="self-crumb">unself_local_database library</li>\n</ol>\n\n\n    <h5><span class="package-name">unself_local_database</span> <span class="package-kind">package</span></h5>\n    <ol>\n      <li class="section-title">Libraries</li>\n      <li><a href="unself_local_database/unself_local_database">unself_local_database</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="unself_local_database/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="unself_local_database/$FieldTable">$FieldTable</a></li>\n        <li><a href="unself_local_database/Collection">Collection</a></li>\n        <li><a href="unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="unself_local_database/CollectionDao">CollectionDao</a></li>\n        <li><a href="unself_local_database/CollectionData">CollectionData</a></li>\n        <li><a href="unself_local_database/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="unself_local_database/DocumentDao">DocumentDao</a></li>\n        <li><a href="unself_local_database/Field">Field</a></li>\n        <li><a href="unself_local_database/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="unself_local_database/FieldData">FieldData</a></li>\n        <li><a href="unself_local_database/ListConverter">ListConverter</a></li>\n        <li><a href="unself_local_database/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="unself_local_database/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n      <li class="section-title"><a href="unself_local_database/unself_local_database#functions">Functions</a></li>\n        <li><a href="unself_local_database/connect">connect</a></li>\n\n\n\n</ol>\n\n  </div>\x3c!--/sidebar-offcanvas-right--\x3e\n\n</main>'}})}const i={title:"unself_local_database library",sidebar_label:"unself_local_database",hide_title:!0},d=void 0,r={unversionedId:"api/unself_local_database/unself_local_database",id:"api/unself_local_database/unself_local_database",title:"unself_local_database library",description:"",source:"@site/developer/api/unself_local_database/unself_local_database.mdx",sourceDirName:"api/unself_local_database",slug:"/api/unself_local_database/",permalink:"/developer/api/unself_local_database/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/unself_local_database.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"unself_local_database library",sidebar_label:"unself_local_database",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"licenses",permalink:"/developer/api/unself_license/LicenseService/licenses"},next:{title:"$CollectionTable",permalink:"/developer/api/unself_local_database/$CollectionTable/"}},c={},f=[],p={toc:f};function u(a){let{components:n,...e}=a;return(0,s.kt)("wrapper",(0,l.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);