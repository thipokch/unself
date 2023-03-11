"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50231],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),h=i,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33762:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),i=n(67294),r=n(3905);function l(){return i.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-constructor">UnmojiTextSpan</span> constructor \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n      <span class="name ">UnmojiTextSpan</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-style">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>\n<li><span class="parameter" id="-param-text"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">text</span>, </span></li>\n<li><span class="parameter" id="-param-children"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a></span>&gt;</span>?</span> <span class="parameter-name">children</span>, </span></li>\n<li><span class="parameter" id="-param-emojiFontMultiplier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">emojiFontMultiplier</span> = <span class="default-value">1</span>, </span></li>\n<li><span class="parameter" id="-param-twemojiFormat"><span class="type-annotation"><a href="../../unself_component/UnmojiFormat">UnmojiFormat</a></span> <span class="parameter-name">twemojiFormat</span> = <span class="default-value">UnmojiFormat.svg</span>}</span></li>\n</ol>)\n    </section>\n\n    \n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">UnmojiTextSpan({\n  TextStyle? style,\n  required String text,\n  List&lt;TextSpan&gt;? children,\n  double emojiFontMultiplier = 1,\n  this.twemojiFormat = UnmojiFormat.svg,\n}) : super(\n        style: style,\n        children: _parse(style, text, twemojiFormat, emojiFontMultiplier)\n          ..addAll(children ?? []),\n      );</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>\n  <li class="self-crumb">UnmojiTextSpan constructor</li>\n</ol>\n\n\n    <h5>UnmojiTextSpan class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/UnmojiTextSpan#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor">UnmojiTextSpan</a></li>\n\n\n        <li class="section-title">\n          <a href="../../unself_component/UnmojiTextSpan#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/children.html">children</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/cursor.html">cursor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/locale.html">locale</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/mouseCursor.html">mouseCursor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onEnter.html">onEnter</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onExit.html">onExit</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/recognizer.html">recognizer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/semanticsLabel.html">semanticsLabel</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/spellOut.html">spellOut</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/style.html">style</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/text.html">text</a></li>\n          <li><a href="../../unself_component/UnmojiTextSpan/twemojiFormat">twemojiFormat</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnmojiTextSpan#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/build.html">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/codeUnitAt.html">codeUnitAt</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/codeUnitAtVisitor.html">codeUnitAtVisitor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/compareTo.html">compareTo</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeSemanticsInformation.html">computeSemanticsInformation</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeToPlainText.html">computeToPlainText</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugAssertIsValid.html">debugAssertIsValid</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/describeSemantics.html">describeSemantics</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSemanticsInformation.html">getSemanticsInformation</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSpanForPosition.html">getSpanForPosition</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/getSpanForPositionVisitor.html">getSpanForPositionVisitor</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/handleEvent.html">handleEvent</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/toPlainText.html">toPlainText</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/toStringShort.html">toStringShort</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/visitChildren.html">visitChildren</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/UnmojiTextSpan#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas-left--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const s={title:"UnmojiTextSpan constructor",sidebar_label:"UnmojiTextSpan constructor",hide_title:!0},o=void 0,p={unversionedId:"api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor",id:"api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor",title:"UnmojiTextSpan constructor",description:"",source:"@site/developer/api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor.mdx",sourceDirName:"api/unself_component/UnmojiTextSpan",slug:"/api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor",permalink:"/developer/api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"UnmojiTextSpan constructor",sidebar_label:"UnmojiTextSpan constructor",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnmojiTextSpan",permalink:"/developer/api/unself_component/UnmojiTextSpan/"},next:{title:"twemojiFormat",permalink:"/developer/api/unself_component/UnmojiTextSpan/twemojiFormat"}},c={},d=[],u={toc:d};function h(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}h.isMDXComponent=!0}}]);