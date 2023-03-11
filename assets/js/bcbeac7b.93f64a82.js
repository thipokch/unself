"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77443],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(a),g=r,f=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93914:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(67294),r=(0,n.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});function l(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}var i=(0,n.forwardRef)((function(t,e){var a=t.alt,i=t.color,p=t.size,o=t.weight,m=t.mirrored,d=t.children,k=t.renderPath,s=l(t,["alt","color","size","weight","mirrored","children","renderPath"]),g=(0,n.useContext)(r),f=g.color,u=void 0===f?"currentColor":f,c=g.size,N=g.weight,y=void 0===N?"regular":N,x=g.mirrored,h=void 0!==x&&x,b=l(g,["color","size","weight","mirrored"]);return n.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:null!=p?p:c,height:null!=p?p:c,fill:null!=i?i:u,viewBox:"0 0 256 256",transform:m||h?"scale(-1, 1)":void 0},b,s),!!a&&n.createElement("title",null,a),d,n.createElement("rect",{width:"256",height:"256",fill:"none"}),k(null!=o?o:y,null!=i?i:u))}));i.displayName="IconBase";const p=i;var o=new Map;o.set("bold",(function(t){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),o.set("duotone",(function(t){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),o.set("fill",(function(){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,64V168a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L140,127.3,69.7,197.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L128.7,116,82.3,69.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"}))})),o.set("light",(function(t){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),o.set("thin",(function(t){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),o.set("regular",(function(t){return n.createElement(n.Fragment,null,n.createElement("line",{x1:"64",y1:"192",x2:"192",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polyline",{points:"88 64 192 64 192 168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var m=function(t,e){return function(t,e,a){var n=a.get(t);return n?n(e):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)}(t,e,o)},d=(0,n.forwardRef)((function(t,e){return n.createElement(p,Object.assign({ref:e},t,{renderPath:m}))}));d.displayName="ArrowUpRight";const k=d;function s(t){let{name:e="link",url:a="app.webp",alt:r="App Icon",size:l=18}=t;return n.createElement("div",{style:{fontWeight:"bold"}},n.createElement("a",{href:a},e),n.createElement("a",{href:a},n.createElement(k,{size:l,weight:"bold"})))}},83665:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(87462),r=a(67294),l=a(3905),i=a(93914);function p(t){let{src:e="/img/app/app.svg",alt:a="App Icon",width:n=48,height:l=48,radius:i=10}=t;return r.createElement("img",{src:e,alt:a,width:n,style:{borderRadius:i+"px"}})}const o={sidebar_position:1,title:"Export"},m=void 0,d={unversionedId:"your_data/export",id:"your_data/export",title:"Export",description:"Exporting your personal data from online services can be a daunting task, but it doesn't have to be. We've put together this guide to make the process as simple as possible for you.",source:"@site/guide/your_data/export.mdx",sourceDirName:"your_data",slug:"/your_data/export",permalink:"/your_data/export",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/guide/your_data/export.mdx",tags:[],version:"current",lastUpdatedAt:1678540913,formattedLastUpdatedAt:"Mar 11, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Export"},sidebar:"tutorialSidebar",previous:{title:"Managing Your Data",permalink:"/your_data/"},next:{title:"Content",permalink:"/your_data/content"}},k={},s=[{value:"Directory",id:"directory",level:2},{value:"Social Media",id:"social-media",level:3},{value:"Services",id:"services",level:3},{value:"Platforms",id:"platforms",level:3}],g={toc:s};function f(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Exporting your personal data from online services can be a daunting task, but it doesn't have to be. We've put together this guide to make the process as simple as possible for you."),(0,l.kt)("p",null,"This directory is and will always be a work-in-progress. We want to make sure this guide stays up-to-date. If you come across any updates, mistakes, or would like to request a new service to be added, please let us know by contributing or opening an issue on GitHub. "),(0,l.kt)("h2",{id:"directory"},"Directory"),(0,l.kt)("p",null,"In this directory, you will find the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Direct links to the ",(0,l.kt)("strong",{parentName:"li"},"download page")),(0,l.kt)("li",{parentName:"ul"},"Link to ",(0,l.kt)("strong",{parentName:"li"},"support page article")," on downloading your data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"File format")," of the data exported"),(0,l.kt)("li",{parentName:"ul"},"What ",(0,l.kt)("strong",{parentName:"li"},"kind of data")," is included in the export (",(0,l.kt)("em",{parentName:"li"},"WIP"),")"),(0,l.kt)("li",{parentName:"ul"},"How your data export is ",(0,l.kt)("strong",{parentName:"li"},"delivered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Time estimates")," for the export to be ready"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Expiration")," of the export once the package is ready (if applicable) ")),(0,l.kt)("h3",{id:"social-media"},"Social Media"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("div",{style:{minWidth:"32px"}})),(0,l.kt)("th",{parentName:"tr",align:"left"},"App"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Export Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivery"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivers in"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Expires after"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Links"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/facebook.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Facebook")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: HTML ",(0,l.kt)("strong",{parentName:"td"},"or")," JSON"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 mins, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to few days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"4 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.facebook.com/dyi",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//www.facebook.com/help/212802592074644",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/instagram.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Instagram")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: HTML ",(0,l.kt)("strong",{parentName:"td"},"or")," JSON"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 mins, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to 14 days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"4 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.instagram.com/download/request/",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//help.instagram.com/181231772500920",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/twitter.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Twitter")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: HTML and ",(0,l.kt)("br",null)," JSON in JS \ud83e\udd2e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"24 hrs, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to few days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"7 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//mobile.twitter.com/settings/download_your_data",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//help.twitter.com/en/managing-your-account/accessing-your-twitter-data",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/whatsapp.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"WhatsApp")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: HTML and JSON"),(0,l.kt)("td",{parentName:"tr",align:"left"},"In-App ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"Notification")),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 mins, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to few days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"In-App Only")," ",(0,l.kt)(i.Z,{name:"Article",url:"//faq.whatsapp.com/526463418847093",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/youtube.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"YouTube")," ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"Google Takeout")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: HTML, JSON, and CSV"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link, ",(0,l.kt)("br",null)," Cloud Storage"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to few days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"7 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//takeout.google.com/takeout/custom/youtube",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//support.google.com/youtube/answer/9315727",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/snapchat.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Snapchat")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: ~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"24 hrs, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to few days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//accounts.snapchat.com/accounts/downloadmydata",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//support.snapchat.com/en-US/a/download-my-data",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/tiktok.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"TikTok")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: TXT or JSON"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"24 hrs, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to 3 days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"4 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.tiktok.com/web-inapp/download-your-data",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/linkedin.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"LinkedIn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: CSV"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1st: 10 mins, ",(0,l.kt)("br",null)," 2nd: 48 hrs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"72 hrs"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.tiktok.com/setting/download-your-data",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//www.linkedin.com/help/linkedin/answer/a1339364",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/reddit.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Reddit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: CSV"),(0,l.kt)("td",{parentName:"tr",align:"left"},"In-App Message ",(0,l.kt)("br",null)," or Email Link"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 mins, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to 30 days")),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.reddit.com/settings/data-request",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//reddit.zendesk.com/hc/en-us/articles/360043048352-How-do-I-request-a-copy-of-my-Reddit-data-and-information",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/pinterest.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Pinterest")),(0,l.kt)("td",{parentName:"tr",align:"left"},"HTML ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"Missing Media")," \ud83e\udd2e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Email Link ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"via SendSafely")),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 mins, ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"up to 48 hrs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"30 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//www.pinterest.com/settings/privacy",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//help.pinterest.com/en/article/download-your-pinterest-data",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/twitch.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Twitch")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Unknown")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Unknown")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Unknown")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"Unknown")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Form \ud83e\udd2e",url:"//app.onetrust.com/app/#/webform/ee57cd1d-b315-4b29-90cd-4def381b86c9",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"//www.twitch.tv/p/en/legal/privacy-choices/",mdxType:"ExternalLink"}))))),(0,l.kt)("h3",{id:"services"},"Services"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("div",{style:{minWidth:"32px"}})),(0,l.kt)("th",{parentName:"tr",align:"left"},"App"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Export Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivery"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivers in"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Expires after"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Links"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/tinder.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Tinder")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/spotify.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Spotify")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/airbnb.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Airbnb")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/uber.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Uber")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/netflix.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Netflix")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/amazon.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Amazon")),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))))),(0,l.kt)("h3",{id:"platforms"},"Platforms"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("div",{style:{minWidth:"32px"}})),(0,l.kt)("th",{parentName:"tr",align:"left"},"App"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Export Format"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivery"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Delivers in"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Expires after"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Links"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/icloud.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Apple Media Services",url:"//support.apple.com/en-us/HT204411",mdxType:"ExternalLink"})," ",(0,l.kt)("em",{parentName:"td"},"iCloud, App Store, etc.")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: ~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~\ud83e\udd2e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"#",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/apple.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"iOS Privacy Report")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: ~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"In Settings App")," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/google.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Google"),"  ",(0,l.kt)("br",null)," ",(0,l.kt)("em",{parentName:"td"},"Gmail, Search, etc.")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: ~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"7 days"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//takeout.google.com/settings/takeout",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(p,{src:"/img/app/microsoft.png",mdxType:"App"})),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Microsoft")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ZIP: ~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},"~"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.Z,{name:"Download",url:"//account.microsoft.com/privacy/download-data",mdxType:"ExternalLink"})," ",(0,l.kt)(i.Z,{name:"Article",url:"#",mdxType:"ExternalLink"}))))))}f.isMDXComponent=!0}}]);