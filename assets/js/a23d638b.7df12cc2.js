"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66082],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,l(l({ref:a},c),{},{components:t})):n.createElement(f,l({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59587:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=t(87462),r=t(67294),o=t(3905);function l(){return r.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">toData</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="../../unself_local_database/FieldData">FieldData</a></span>\n<span class="name ">toData</span>(<wbr>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">FieldData toData() =&gt; FieldData(\n      id: id,\n      created: created,\n      updated: updated,\n      collectionId: id,\n      name: name,\n      type: type,\n      system: system,\n      required: required,\n      unique: unique,\n      extra: jsonEncode(extra),\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li><a href="../../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n  <li class="self-crumb">toData method</li>\n</ol>\n\n\n    <h5>FieldFromDomain extension</h5>\n    <ol>\n\n\n\n\n\n        <li class="section-title"><a href="../../unself_local_database/FieldFromDomain#instance-methods">Methods</a></li>\n          <li><a href="../../unself_local_database/FieldFromDomain/toData">toData</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"toData method",sidebar_label:"toData",hide_title:!0},s=void 0,d={unversionedId:"api/unself_local_database/FieldFromDomain/toData",id:"api/unself_local_database/FieldFromDomain/toData",title:"toData method",description:"",source:"@site/developer/api/unself_local_database/FieldFromDomain/toData.mdx",sourceDirName:"api/unself_local_database/FieldFromDomain",slug:"/api/unself_local_database/FieldFromDomain/toData",permalink:"/developer/api/unself_local_database/FieldFromDomain/toData",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/FieldFromDomain/toData.mdx",tags:[],version:"current",lastUpdatedAt:1677076591,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"toData method",sidebar_label:"toData",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"updated",permalink:"/developer/api/unself_local_database/FieldData/updated"},next:{title:"FieldFromDomain",permalink:"/developer/api/unself_local_database/FieldFromDomain"}},c={},u=[],p={toc:u};function m(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);