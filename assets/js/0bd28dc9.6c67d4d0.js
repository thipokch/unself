"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[23680],{3905:(e,n,a)=>{a.d(n,{Zo:()=>f,kt:()=>m});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},f=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return a?t.createElement(m,r(r({ref:n},f),{},{components:a})):t.createElement(m,r({ref:n},f))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84877:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=a(87462),o=a(67294),l=a(3905);function r(){return o.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-function">loadImageShader</span> function \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-ui/ImageShader-class.html">ImageShader</a></span>&gt;</span></span>\n<span class="name ">loadImageShader</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="loadImageShader-param-assetString"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">assetString</span></span></li>\n</ol>)\n\n        \n\n    </section>\n    \n<section class="desc markdown">\n  <p>Loads JPEG image and the <a href="https://api.flutter.dev/flutter/dart-ui/FragmentProgram-class.html">FragmentProgram</a></p>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">Future&lt;ImageShader&gt; loadImageShader(String assetString) async {\n  final asset = await rootBundle.load(assetString);\n  final image = await decodeImageFromList(asset.buffer.asUint8List());\n\n  return ImageShader(\n    image,\n    // Specify how image repetition is handled for x and y dimension\n    TileMode.repeated,\n    TileMode.repeated,\n    // Transformation matrix (identity matrix = no transformation)\n    Matrix4.identity().storage,\n  );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_component</a></li>\n  <li><a href="../unself_component/unself_component">unself_component</a></li>\n  <li class="self-crumb">loadImageShader function</li>\n</ol>\n\n\n    <h5>unself_component library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>\n        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>\n        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>\n        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>\n        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>\n        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>\n        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>\n        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>\n        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>\n        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>\n        <li><a href="../unself_component/ButtonText">ButtonText</a></li>\n        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>\n        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>\n        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>\n        <li><a href="../unself_component/CardTile">CardTile</a></li>\n        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>\n        <li><a href="../unself_component/ChipText">ChipText</a></li>\n        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>\n        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>\n        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>\n        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>\n        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>\n        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>\n        <li><a href="../unself_component/HeroTag">HeroTag</a></li>\n        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>\n        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>\n        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>\n        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>\n        <li><a href="../unself_component/TextArea">TextArea</a></li>\n        <li><a href="../unself_component/TextBox">TextBox</a></li>\n        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>\n        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>\n        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>\n        <li><a href="../unself_component/UnCard">UnCard</a></li>\n        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>\n        <li><a href="../unself_component/Unmoji">Unmoji</a></li>\n        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>\n        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>\n        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>\n        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>\n        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>\n        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>\n        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>\n        <li><a href="../unself_component/UnSheet">UnSheet</a></li>\n        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>\n        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>\n\n\n\n      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>\n        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>\n        <li><a href="../unself_component/regex">regex</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>\n        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>\n        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>\n        <li><a href="../unself_component/show">show</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>\n        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>\n\n      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>\n        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>\n        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>\n        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"loadImageShader function",sidebar_label:"loadImageShader",hide_title:!0},s=void 0,c={unversionedId:"api/unself_component/loadImageShader",id:"api/unself_component/loadImageShader",title:"loadImageShader function",description:"",source:"@site/developer/api/unself_component/loadImageShader.mdx",sourceDirName:"api/unself_component",slug:"/api/unself_component/loadImageShader",permalink:"/developer/api/unself_component/loadImageShader",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/loadImageShader.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"loadImageShader function",sidebar_label:"loadImageShader",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"emojiToUnicode",permalink:"/developer/api/unself_component/emojiToUnicode"},next:{title:"regex",permalink:"/developer/api/unself_component/regex"}},f={},u=[],p={toc:u};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}d.isMDXComponent=!0}}]);