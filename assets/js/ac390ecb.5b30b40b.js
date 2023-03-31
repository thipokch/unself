"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74694],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),h=l,b=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:l,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=a(87462),l=a(67294),r=a(3905);function i(){return l.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-typedef">SettingsAppearanceSelector&lt;<wbr><span class="type-parameter">T</span>&gt;</span> typedef \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    <section class="multi-line-signature">\n        \n  \n<span class="name ">SettingsAppearanceSelector</span>&lt;<wbr><span class="type-parameter">T</span>&gt; = <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>, <span class="type-parameter">T</span>&gt;</span>\n\n\n    </section>\n\n    \n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">typedef SettingsAppearanceSelector&lt;T&gt;\n    = BlocSelector&lt;SettingsAppearanceBloc, SettingsAppearanceState, T&gt;;</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_settings_appearance</a></li>\n  <li><a href="../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li class="self-crumb">SettingsAppearanceSelector&lt;<wbr><span class="type-parameter">T</span>&gt; typedef</li>\n</ol>\n\n\n    <h5>settings_appearance library</h5>\n    <ol>\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#classes">Classes</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></li>\n        <li><a href="../settings_appearance/SettingsAppearancePage">SettingsAppearancePage</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceSliver">SettingsAppearanceSliver</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#extensions">Extensions</a></li>\n        <li><a href="../settings_appearance/Properties">Properties</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#typedefs">Typedefs</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceBuilder">SettingsAppearanceBuilder</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceConsumer">SettingsAppearanceConsumer</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceListener">SettingsAppearanceListener</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceSelector">SettingsAppearanceSelector</a></li>\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#exceptions">Exceptions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"SettingsAppearanceSelector<T> typedef",sidebar_label:"SettingsAppearanceSelector",hide_title:!0},s=void 0,o={unversionedId:"api/settings_appearance/SettingsAppearanceSelector",id:"api/settings_appearance/SettingsAppearanceSelector",title:"SettingsAppearanceSelector<T> typedef",description:"",source:"@site/developer/api/settings_appearance/SettingsAppearanceSelector.mdx",sourceDirName:"api/settings_appearance",slug:"/api/settings_appearance/SettingsAppearanceSelector",permalink:"/developer/api/settings_appearance/SettingsAppearanceSelector",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_appearance/SettingsAppearanceSelector.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"SettingsAppearanceSelector<T> typedef",sidebar_label:"SettingsAppearanceSelector",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/developer/api/settings_appearance/SettingsAppearancePage/build"},next:{title:"SettingsAppearanceSliver",permalink:"/developer/api/settings_appearance/SettingsAppearanceSliver/"}},p={},d=[],u={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);