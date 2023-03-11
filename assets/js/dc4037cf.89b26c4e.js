"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33772],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var l=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=l.createContext({}),c=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return l.createElement(s.Provider,{value:a},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=c(n),p=t,b=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?l.createElement(b,r(r({ref:a},d),{},{components:n})):l.createElement(b,r({ref:a},d))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[f]="string"==typeof e?e:t,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65844:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var l=n(87462),t=n(67294),o=n(3905);function r(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">connect</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DatabaseConnection-class.html">DatabaseConnection</a></span>\n<span class="name ">connect</span>(<wbr>)\n\n        \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">DatabaseConnection connect() {\n  throw UnsupportedError(\n      \'No suitable database implementation was found on this platform.\');\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_local_database</a></li>\n  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li class="self-crumb">connect function</li>\n</ol>\n\n\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="../unself_local_database/$FieldTable">$FieldTable</a></li>\n        <li><a href="../unself_local_database/Collection">Collection</a></li>\n        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>\n        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>\n        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>\n        <li><a href="../unself_local_database/Field">Field</a></li>\n        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="../unself_local_database/FieldData">FieldData</a></li>\n        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>\n        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>\n        <li><a href="../unself_local_database/connect">connect</a></li>\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"connect function",sidebar_label:"connect",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/connect",id:"api/unself_local_database/connect",title:"connect function",description:"",source:"@site/developer/api/unself_local_database/connect.mdx",sourceDirName:"api/unself_local_database",slug:"/api/unself_local_database/connect",permalink:"/developer/api/unself_local_database/connect",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/connect.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"connect function",sidebar_label:"connect",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toSql",permalink:"/developer/api/unself_local_database/MapConverter/toSql"},next:{title:"unself_model",permalink:"/developer/api/unself_model/"}},d={},f=[],u={toc:f};function p(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}p.isMDXComponent=!0}}]);