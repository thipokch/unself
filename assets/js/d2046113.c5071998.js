"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[34e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>j,frontMatter:()=>E,metadata:()=>D,toc:()=>x});var n=r(87462),i=r(67294),a=r(3905),o=r(86010),c=r(52802),l=r(39960),s=r(13919),p=r(95999);const u="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return i.createElement(l.Z,{href:t,className:(0,o.Z)("card padding--lg",u)},r)}function y(e){let{href:t,icon:r,title:n,description:a}=e;return i.createElement(f,{href:t},i.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:n},r," ",n),a&&i.createElement("p",{className:(0,o.Z)("text--truncate",m),title:a},a))}function b(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return i.createElement(y,{href:t.href,icon:r,title:t.label,description:n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return i.createElement(O,{items:r.items,className:t})}function O(e){const{items:t,className:r}=e;if(!t)return i.createElement(g,e);const n=(0,c.MN)(t);return i.createElement("section",{className:(0,o.Z)("row",r)},n.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(v,{item:e})))))}const E={sidebar_position:3,title:"Dart API"},k=void 0,D={unversionedId:"api/index",id:"api/index",title:"Dart API",description:"Dart API Documentation does not reflect the latest code in the repo.  It is generated by DartDoc locally, since it is very resource intensive.",source:"@site/developer/api/index.mdx",sourceDirName:"api",slug:"/api/",permalink:"/developer/api/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/index.mdx",tags:[],version:"current",lastUpdatedAt:1678528299,formattedLastUpdatedAt:"Mar 11, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Dart API"},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/developer/contribute"},next:{title:"license_detail",permalink:"/developer/api/license_detail/"}},w={},x=[{value:"Libraries",id:"libraries",level:2}],P={toc:x};function j(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},P,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Dart API Documentation does not reflect the latest code in the repo. ",(0,a.kt)("br",null)," It is generated by ",(0,a.kt)("a",{parentName:"em",href:"https://pub.dev/packages/dartdoc"},"DartDoc")," locally, since it is very resource intensive.")," "),(0,a.kt)("h2",{id:"libraries"},"Libraries"),(0,a.kt)(O,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);