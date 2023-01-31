"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93914:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),o=(0,n.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});function i(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var l=(0,n.forwardRef)((function(e,t){var r=e.alt,l=e.color,a=e.size,c=e.weight,u=e.mirrored,s=e.children,d=e.renderPath,p=i(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=(0,n.useContext)(o),f=m.color,y=void 0===f?"currentColor":f,h=m.size,k=m.weight,g=void 0===k?"regular":k,v=m.mirrored,b=void 0!==v&&v,E=i(m,["color","size","weight","mirrored"]);return n.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:null!=a?a:h,height:null!=a?a:h,fill:null!=l?l:y,viewBox:"0 0 256 256",transform:u||b?"scale(-1, 1)":void 0},E,p),!!r&&n.createElement("title",null,r),s,n.createElement("rect",{width:"256",height:"256",fill:"none"}),d(null!=c?c:g,null!=l?l:y))}));l.displayName="IconBase";const a=l;var c=new Map;c.set("bold",(function(e){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),c.set("duotone",(function(e){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),c.set("fill",(function(){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,64V168a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L140,127.3,69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L128.7,116,82.3,69.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"}))})),c.set("light",(function(e){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),c.set("thin",(function(e){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),c.set("regular",(function(e){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var u=function(e,t){return function(e,t,r){var n=r.get(e);return n?n(t):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)}(e,t,c)},s=(0,n.forwardRef)((function(e,t){return n.createElement(a,Object.assign({ref:t},e,{renderPath:u}))}));s.displayName="ArrowUpRight";const d=s;function p(e){let{name:t="link",url:r="app.webp",alt:o="App Icon",size:i=18}=e;return n.createElement("div",{style:{fontWeight:"bold"}},n.createElement("a",{href:r},t),n.createElement("a",{href:r},n.createElement(d,{size:i,weight:"bold"})))}},3409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),i=r(93914);const l={sidebar_position:3,title:"Protect"},a=void 0,c={unversionedId:"your_data/protect",id:"your_data/protect",title:"Protect",description:"",source:"@site/resource/your_data/protect.mdx",sourceDirName:"your_data",slug:"/your_data/protect",permalink:"/your_data/protect",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/resource/your_data/protect.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Protect"},sidebar:"tutorialSidebar",previous:{title:"Content",permalink:"/your_data/content"},next:{title:"Contribute",permalink:"/contribute"}},u={},s=[],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{name:"Privacy Evaluations by CommonSense Org.",url:"//privacy.commonsense.org/evaluations",mdxType:"ExternalLink"}),(0,o.kt)(i.Z,{name:"Data Breach Lookup by HaveIBeenPwned.",url:"//haveibeenpwned.com",mdxType:"ExternalLink"}))}p.isMDXComponent=!0}}]);