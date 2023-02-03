"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[78245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,f=d["".concat(p,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(f,s(s({ref:t},o),{},{components:a})):n.createElement(f,s({ref:t},o))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),i=a(67294),r=a(3905);function s(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">children</span> static method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>&gt;</span></span>\n<span class="name ">children</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="children-param-bloc">{<span>required</span> <span class="type-annotation"><a href="../../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span> <span class="parameter-name">bloc</span>, </span></li>\n<li><span class="parameter" id="children-param-state"><span>required</span> <span class="type-annotation"><a href="../../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> <span class="parameter-name">state</span>}</span></li>\n</ol>)\n\n      \n\n    </section>\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">static List&lt;Widget&gt; children({\n  required SettingsAppearanceBloc bloc,\n  required SettingsAppearanceState state,\n}) =&gt;\n    [\n      ...{\n        "Automatic": ThemeMode.system,\n        "Light": ThemeMode.light,\n        "Dark": ThemeMode.dark,\n      }.entries.map&lt;ListTile&gt;((_) =&gt; ListTile(\n            title: Text(_.key),\n            trailing: Visibility(\n              visible: state.themeMode == _.value,\n              child: const Icon(UnSymbols.checkmark),\n            ),\n            onTap: () =&gt; bloc.add(\n              SettingsAppearanceEvent.setThemeMode(themeMode: _.value),\n            ),\n          )),\n    ];</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_settings_appearance</a></li>\n  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li><a href="../../settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>\n  <li class="self-crumb">children static method</li>\n</ol>\n\n\n    <h5>SettingsAppearanceView class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#constructors">Constructors</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceView/SettingsAppearanceView.constructor">SettingsAppearanceView</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../settings_appearance/SettingsAppearanceView#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#instance-methods">Methods</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceView/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceView#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#static-methods">Static methods</a></li>\n          <li><a href="../../settings_appearance/SettingsAppearanceView/children">children</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"children static method",sidebar_label:"children",hide_title:!0},p=void 0,c={unversionedId:"api/settings_appearance/SettingsAppearanceView/children",id:"api/settings_appearance/SettingsAppearanceView/children",title:"children static method",description:"",source:"@site/developer/api/settings_appearance/SettingsAppearanceView/children.mdx",sourceDirName:"api/settings_appearance/SettingsAppearanceView",slug:"/api/settings_appearance/SettingsAppearanceView/children",permalink:"/developer/api/settings_appearance/SettingsAppearanceView/children",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_appearance/SettingsAppearanceView/children.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"children static method",sidebar_label:"children",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"build",permalink:"/developer/api/settings_appearance/SettingsAppearanceView/build"},next:{title:"settings_data",permalink:"/developer/api/settings_data/"}},o={},d=[],h={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);