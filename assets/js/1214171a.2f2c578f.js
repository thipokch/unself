"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30819],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(f,r(r({ref:a},d),{},{components:t})):n.createElement(f,r({ref:a},d))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98665:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),o=t(67294),l=t(3905);function r(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toData</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/CollectionData">CollectionData</a></span>\n<span class="name ">toData</span>(<wbr>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">CollectionData toData() =&gt; CollectionData(\n      id: id,\n      created: created,\n      updated: updated,\n      type: type,\n      name: name,\n      system: system,\n      listRule: listRule,\n      viewRule: viewRule,\n      createRule: createRule,\n      updateRule: updateRule,\n      deleteRule: deleteRule,\n      extra: jsonEncode(extra),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n  <li class="self-crumb">toData method</li>\n</ol>\n\n\n    <h5>CollectionFromDomain extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/CollectionFromDomain#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/CollectionFromDomain/toData">toData</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toData method",sidebar_label:"toData",hide_title:!0},s=void 0,c={unversionedId:"api/unself_local_database/CollectionFromDomain/toData",id:"api/unself_local_database/CollectionFromDomain/toData",title:"toData method",description:"",source:"@site/developer/api/unself_local_database/CollectionFromDomain/toData.mdx",sourceDirName:"api/unself_local_database/CollectionFromDomain",slug:"/api/unself_local_database/CollectionFromDomain/toData",permalink:"/developer/api/unself_local_database/CollectionFromDomain/toData",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/CollectionFromDomain/toData.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"toData method",sidebar_label:"toData",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"viewRule",permalink:"/developer/api/unself_local_database/CollectionData/viewRule"},next:{title:"CollectionFromDomain",permalink:"/developer/api/unself_local_database/CollectionFromDomain"}},d={},u=[],p={toc:u};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);