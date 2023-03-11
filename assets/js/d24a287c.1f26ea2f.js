"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63159],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return t?n.createElement(f,o(o({ref:a},p),{},{components:t})):n.createElement(f,o({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75341:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(87462),r=t(67294),l=t(3905);function o(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toOrm&lt;<wbr><span class="type-parameter">D</span>&gt;</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/CollectionOrm">CollectionOrm</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></span>\n<span class="name ">toOrm</span>&lt;<wbr><span class="type-parameter">D</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="toOrm-param-undb"><span class="type-annotation"><a href="../../unself_local_database/LocalDatabase">LocalDatabase</a></span> <span class="parameter-name">undb</span>, </span></li>\n<li><span class="parameter" id="toOrm-param-columns"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">columns</span></span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CollectionOrm&lt;D&gt; toOrm&lt;D&gt;(\n        LocalDatabase undb, List&lt;GeneratedColumn&gt; columns) =&gt;\n    CollectionOrm(\n      undb,\n      id,\n      columns,\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n  <li class="self-crumb">toOrm&lt;<wbr><span class="type-parameter">D</span>&gt; method</li>\n</ol>\n\n\n    <h5>CollectionToOrm extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionToOrm#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionToOrm/toDomain">toDomain</a></li>\n          <li><a href="../../unself_local_database/CollectionToOrm/toOrm">toOrm</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"toOrm<D> method",sidebar_label:"toOrm",hide_title:!0},i=void 0,c={unversionedId:"api/unself_local_database/CollectionToOrm/toOrm",id:"api/unself_local_database/CollectionToOrm/toOrm",title:"toOrm<D> method",description:"",source:"@site/developer/api/unself_local_database/CollectionToOrm/toOrm.mdx",sourceDirName:"api/unself_local_database/CollectionToOrm",slug:"/api/unself_local_database/CollectionToOrm/toOrm",permalink:"/developer/api/unself_local_database/CollectionToOrm/toOrm",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionToOrm/toOrm.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"toOrm<D> method",sidebar_label:"toOrm",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"toDomain",permalink:"/developer/api/unself_local_database/CollectionToOrm/toDomain"},next:{title:"CollectionToOrm",permalink:"/developer/api/unself_local_database/CollectionToOrm"}},p={},d=[],m={toc:d};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);