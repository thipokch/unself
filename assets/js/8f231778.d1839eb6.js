"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?o.createElement(m,l(l({ref:n},f),{},{components:t})):o.createElement(m,l({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(87462),a=t(67294),i=t(3905);function l(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">emojiToUnicode</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n<span class="name ">emojiToUnicode</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="emojiToUnicode-param-rawText"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">rawText</span></span></li>\n</ol>)\n\n        \n\n    </section>\n    \n<section class="desc markdown">\n  <p>Converts emoji to unicode \ud83d\ude00 =&gt; "1F600"</p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">String emojiToUnicode(String rawText) =&gt; _toCodePoint(\n      !rawText.contains(_u200D) ? rawText.replaceAll(_uFE0Fg, \'\') : rawText,\n    );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_component</a></li>\n  <li><a href="../unself_component/unself_component">unself_component</a></li>\n  <li class="self-crumb">emojiToUnicode function</li>\n</ol>\n\n\n    <h5>unself_component library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>\n        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>\n        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>\n        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>\n        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>\n        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>\n        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>\n        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>\n        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>\n        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>\n        <li><a href="../unself_component/ButtonText">ButtonText</a></li>\n        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>\n        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>\n        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>\n        <li><a href="../unself_component/CardTile">CardTile</a></li>\n        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>\n        <li><a href="../unself_component/ChipText">ChipText</a></li>\n        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>\n        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>\n        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>\n        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>\n        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>\n        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>\n        <li><a href="../unself_component/HeroTag">HeroTag</a></li>\n        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>\n        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>\n        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>\n        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>\n        <li><a href="../unself_component/TextArea">TextArea</a></li>\n        <li><a href="../unself_component/TextBox">TextBox</a></li>\n        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>\n        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>\n        <li><a href="../unself_component/UnCard">UnCard</a></li>\n        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>\n        <li><a href="../unself_component/Unmoji">Unmoji</a></li>\n        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>\n        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>\n        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>\n        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>\n        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>\n        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnSheet">UnSheet</a></li>\n        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>\n        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>\n        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>\n        <li><a href="../unself_component/regex">regex</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>\n        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>\n        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>\n        <li><a href="../unself_component/show">show</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>\n        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>\n        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>\n        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const r={title:"emojiToUnicode function",sidebar_label:"emojiToUnicode",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/emojiToUnicode",id:"api/unself_component/emojiToUnicode",title:"emojiToUnicode function",description:"",source:"@site/developer/api/unself_component/emojiToUnicode.mdx",sourceDirName:"api/unself_component",slug:"/api/unself_component/emojiToUnicode",permalink:"/developer/api/unself_component/emojiToUnicode",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/emojiToUnicode.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"emojiToUnicode function",sidebar_label:"emojiToUnicode",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"defaultHeroTag",permalink:"/developer/api/unself_component/defaultHeroTag"},next:{title:"loadImageShader",permalink:"/developer/api/unself_component/loadImageShader"}},f={},u=[],p={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);