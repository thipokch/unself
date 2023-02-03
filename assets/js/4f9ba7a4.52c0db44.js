"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27086],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>p});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(l),f=a,p=u["".concat(s,".").concat(f)]||u[f]||h[f]||o;return l?n.createElement(p,r(r({ref:t},c),{},{components:l})):n.createElement(p,r({ref:t},c))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,r=new Array(o);r[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<o;d++)r[d]=l[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},42553:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=l(87462),a=l(67294),o=l(3905);function r(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-method">defaultStyleOf</span> method \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n</h1></div>\n\n    <section class="multi-line-signature">\n      \n  <div>\n    <ol class="annotation-list">\n        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>\n    </ol>\n  </div>\n\n<span class="returntype"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a></span>\n<span class="name ">defaultStyleOf</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="defaultStyleOf-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>\n</ol>)\n\n      <div class="features"><span class="feature">override</span></div>\n\n    </section>\n    \n<section class="desc markdown">\n  <p>Defines the button\'s default appearance.</p>\n<p>The button <a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a>\'s <a href="https://api.flutter.dev/flutter/widgets/Text-class.html">Text</a> and <a href="https://api.flutter.dev/flutter/widgets/Icon-class.html">Icon</a> widgets are rendered with\nthe <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>\'s foreground color. The button\'s <a href="https://api.flutter.dev/flutter/material/InkWell-class.html">InkWell</a> adds\nthe style\'s overlay color when the button is focused, hovered\nor pressed. The button\'s background color becomes its <a href="https://api.flutter.dev/flutter/material/Material-class.html">Material</a>\ncolor and is transparent by default.</p>\n<p>All of the <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>\'s defaults appear below.</p>\n<p>In this list "Theme.foo" is shorthand for\n<code>Theme.of(context).foo</code>. Color scheme values like\n"onSurface(0.38)" are shorthand for\n<code>onSurface.withOpacity(0.38)</code>. <a href="https://api.flutter.dev/flutter/material/MaterialStateProperty-class.html">MaterialStateProperty</a> valued\nproperties that are not followed by a sublist have the same\nvalue for all states, otherwise the values are as specified for\neach state and "others" means all other states.</p>\n<p>The <code>textScaleFactor</code> is the value of\n<code>MediaQuery.of(context).textScaleFactor</code> and the names of the\nEdgeInsets constructors and <code>EdgeInsetsGeometry.lerp</code> have been\nabbreviated for readability.</p>\n<p>The color of the <a href="https://api.flutter.dev/flutter/material/ButtonStyle/textStyle.html">ButtonStyle.textStyle</a> is not used, the\n<a href="https://api.flutter.dev/flutter/material/ButtonStyle/foregroundColor.html">ButtonStyle.foregroundColor</a> color is used instead.</p>\n<h2 id="material-2-defaults">Material 2 defaults</h2>\n<ul>\n<li><code>textStyle</code> - Theme.textTheme.button</li>\n<li><code>backgroundColor</code> - transparent</li>\n<li><code>foregroundColor</code>\n<ul>\n<li>disabled - Theme.colorScheme.onSurface(0.38)</li>\n<li>others - Theme.colorScheme.primary</li>\n</ul>\n</li>\n<li><code>overlayColor</code>\n<ul>\n<li>hovered - Theme.colorScheme.primary(0.04)</li>\n<li>focused or pressed - Theme.colorScheme.primary(0.12)</li>\n</ul>\n</li>\n<li><code>shadowColor</code> - Theme.shadowColor</li>\n<li><code>elevation</code> - 0</li>\n<li><code>padding</code>\n<ul>\n<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>\n<li><code>1 &lt; textScaleFactor &lt;= 2</code> - lerp(all(8), horizontal(8))</li>\n<li><code>2 &lt; textScaleFactor &lt;= 3</code> - lerp(horizontal(8), horizontal(4))</li>\n<li><code>3 &lt; textScaleFactor</code> - horizontal(4)</li>\n</ul>\n</li>\n<li><code>minimumSize</code> - Size(64, 36)</li>\n<li><code>fixedSize</code> - null</li>\n<li><code>maximumSize</code> - Size.infinite</li>\n<li><code>side</code> - null</li>\n<li><code>shape</code> - RoundedRectangleBorder(borderRadius: BorderRadius.circular(4))</li>\n<li><code>mouseCursor</code>\n<ul>\n<li>disabled - SystemMouseCursors.basic</li>\n<li>others - SystemMouseCursors.click</li>\n</ul>\n</li>\n<li><code>visualDensity</code> - theme.visualDensity</li>\n<li><code>tapTargetSize</code> - theme.materialTapTargetSize</li>\n<li><code>animationDuration</code> - kThemeChangeDuration</li>\n<li><code>enableFeedback</code> - true</li>\n<li><code>alignment</code> - Alignment.center</li>\n<li><code>splashFactory</code> - InkRipple.splashFactory</li>\n</ul>\n<p>The default padding values for the <a href="https://api.flutter.dev/flutter/material/TextButton/TextButton.icon.html">TextButton.icon</a> factory are slightly different:</p>\n<ul>\n<li><code>padding</code>\n<ul>\n<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>\n<li><code>1 &lt; textScaleFactor &lt;= 2 </code>- lerp(all(8), horizontal(4))</li>\n<li><code>2 &lt; textScaleFactor</code> - horizontal(4)</li>\n</ul>\n</li>\n</ul>\n<p>The default value for <code>side</code>, which defines the appearance of the button\'s\noutline, is null. That means that the outline is defined by the button\nshape\'s <a href="https://api.flutter.dev/flutter/painting/OutlinedBorder/side.html">OutlinedBorder.side</a>. Typically the default value of an\n<a href="https://api.flutter.dev/flutter/painting/OutlinedBorder-class.html">OutlinedBorder</a>\'s side is <a href="https://api.flutter.dev/flutter/painting/BorderSide/none-constant.html">BorderSide.none</a>, so an outline is not drawn.</p>\n<h2 id="material-3-defaults">Material 3 defaults</h2>\n<p>If <a href="https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html">ThemeData.useMaterial3</a> is set to true the following defaults will\nbe used:</p>\n<ul>\n<li><code>textStyle</code> - Theme.textTheme.labelLarge</li>\n<li><code>backgroundColor</code> - transparent</li>\n<li><code>foregroundColor</code>\n<ul>\n<li>disabled - Theme.colorScheme.onSurface(0.38)</li>\n<li>others - Theme.colorScheme.primary</li>\n</ul>\n</li>\n<li><code>overlayColor</code>\n<ul>\n<li>hovered - Theme.colorScheme.primary(0.08)</li>\n<li>focused or pressed - Theme.colorScheme.primary(0.12)</li>\n<li>others - null</li>\n</ul>\n</li>\n<li><code>shadowColor</code> - null</li>\n<li><code>surfaceTintColor</code> - null</li>\n<li><code>elevation</code> - 0</li>\n<li><code>padding</code>\n<ul>\n<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>\n<li><code>1 &lt; textScaleFactor &lt;= 2</code> - lerp(all(8), horizontal(8))</li>\n<li><code>2 &lt; textScaleFactor &lt;= 3</code> - lerp(horizontal(8), horizontal(4))</li>\n<li><code>3 &lt; textScaleFactor</code> - horizontal(4)</li>\n</ul>\n</li>\n<li><code>minimumSize</code> - Size(64, 40)</li>\n<li><code>fixedSize</code> - null</li>\n<li><code>maximumSize</code> - Size.infinite</li>\n<li><code>side</code> - null</li>\n<li><code>shape</code> - StadiumBorder()</li>\n<li><code>mouseCursor</code>\n<ul>\n<li>disabled - SystemMouseCursors.basic</li>\n<li>others - SystemMouseCursors.click</li>\n</ul>\n</li>\n<li><code>visualDensity</code> - theme.visualDensity</li>\n<li><code>tapTargetSize</code> - theme.materialTapTargetSize</li>\n<li><code>animationDuration</code> - kThemeChangeDuration</li>\n<li><code>enableFeedback</code> - true</li>\n<li><code>alignment</code> - Alignment.center</li>\n<li><code>splashFactory</code> - Theme.splashFactory</li>\n</ul>\n</section>\n\n\n    \n<section class="summary source-code" id="source">\n  <h2><span>Implementation</span></h2>\n  <pre class="language-dart"><code class="language-dart">@override\nButtonStyle defaultStyleOf(BuildContext context) {\n  return super\n      .defaultStyleOf(\n        context,\n      )\n      .copyWith(\n        elevation: ButtonStyleButton.allOrNull(.0),\n        foregroundColor: ButtonForeground(\n          Theme.of(context).colorScheme.primary,\n          Theme.of(context).colorScheme.onSurface,\n        ),\n        overlayColor: ButtonOverlay(\n          Theme.of(context).colorScheme.primary,\n        ),\n        splashFactory: kIsWeb ? null : InkSparkle.splashFactory,\n      );\n}</code></pre>\n</section>\n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../../index">unself_component</a></li>\n  <li><a href="../../unself_component/unself_component">unself_component</a></li>\n  <li><a href="../../unself_component/ButtonText">ButtonText</a></li>\n  <li class="self-crumb">defaultStyleOf method</li>\n</ol>\n\n\n    <h5>ButtonText class</h5>\n    <ol>\n\n        <li class="section-title"><a href="../../unself_component/ButtonText#constructors">Constructors</a></li>\n          <li><a href="../../unself_component/ButtonText/ButtonText.constructor">ButtonText</a></li>\n          <li><a href="../../unself_component/ButtonText/ButtonText.icon">icon</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../../unself_component/ButtonText#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>\n\n        <li class="section-title"><a href="../../unself_component/ButtonText#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>\n          <li><a href="../../unself_component/ButtonText/defaultStyleOf">defaultStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/TextButton/themeStyleOf.html">themeStyleOf</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../../unself_component/ButtonText#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"defaultStyleOf method",sidebar_label:"defaultStyleOf",hide_title:!0},s=void 0,d={unversionedId:"api/unself_component/ButtonText/defaultStyleOf",id:"api/unself_component/ButtonText/defaultStyleOf",title:"defaultStyleOf method",description:"",source:"@site/developer/api/unself_component/ButtonText/defaultStyleOf.mdx",sourceDirName:"api/unself_component/ButtonText",slug:"/api/unself_component/ButtonText/defaultStyleOf",permalink:"/developer/api/unself_component/ButtonText/defaultStyleOf",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_component/ButtonText/defaultStyleOf.mdx",tags:[],version:"current",lastUpdatedAt:1675427508,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"defaultStyleOf method",sidebar_label:"defaultStyleOf",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ButtonText.icon factory constructor",permalink:"/developer/api/unself_component/ButtonText/ButtonText.constructor"},next:{title:"ButtonTonal",permalink:"/developer/api/unself_component/ButtonTonal/"}},c={},u=[],h={toc:u};function f(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);