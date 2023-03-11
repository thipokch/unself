"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29519],{3905:(a,s,n)=>{n.d(s,{Zo:()=>d,kt:()=>m});var e=n(67294);function t(a,s,n){return s in a?Object.defineProperty(a,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[s]=n,a}function l(a,s){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),n.push.apply(n,e)}return n}function r(a){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?l(Object(n),!0).forEach((function(s){t(a,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(n,s))}))}return a}function o(a,s){if(null==a)return{};var n,e,t=function(a,s){if(null==a)return{};var n,e,t={},l=Object.keys(a);for(e=0;e<l.length;e++)n=l[e],s.indexOf(n)>=0||(t[n]=a[n]);return t}(a,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(e=0;e<l.length;e++)n=l[e],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var p=e.createContext({}),i=function(a){var s=e.useContext(p),n=s;return a&&(n="function"==typeof a?a(s):r(r({},s),a)),n},d=function(a){var s=i(a.components);return e.createElement(p.Provider,{value:s},a.children)},u="mdxType",c={inlineCode:"code",wrapper:function(a){var s=a.children;return e.createElement(e.Fragment,{},s)}},f=e.forwardRef((function(a,s){var n=a.components,t=a.mdxType,l=a.originalType,p=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),u=i(n),f=t,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||l;return n?e.createElement(m,r(r({ref:s},d),{},{components:n})):e.createElement(m,r({ref:s},d))}));function m(a,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof a||t){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var p in s)hasOwnProperty.call(s,p)&&(o[p]=s[p]);o.originalType=a,o[u]="string"==typeof a?a:t,r[1]=o;for(var i=2;i<l;i++)r[i]=n[i];return e.createElement.apply(null,r)}return e.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52032:(a,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var e=n(87462),t=n(67294),l=n(3905);function r(){return t.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">CustomColors</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p>Defines a set of custom colors, each comprised of 4 complementary tones.</p>\n<p>See also:</p>\n<ul>\n<li><a href="https://m3.material.io/styles/color/the-color-system/custom-colors">m3.material.io/styles/color/the-color-system/custom-colors</a></li>\n</ul>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/material/ThemeExtension-class.html">ThemeExtension</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_style/CustomColors">CustomColors</a></span>&gt;</span></li>\n      <li>CustomColors</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/immutable-constant.html">immutable</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="CustomColors" class="callable">\n          <span class="name"><a href="../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></span><span class="signature">(<span class="parameter" id="-param-sourceGold">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceGold</span>, </span><span class="parameter" id="-param-gold"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">gold</span>, </span><span class="parameter" id="-param-onGold"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGold</span>, </span><span class="parameter" id="-param-goldContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">goldContainer</span>, </span><span class="parameter" id="-param-onGoldContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGoldContainer</span>, </span><span class="parameter" id="-param-sourceVanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceVanilla</span>, </span><span class="parameter" id="-param-vanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanilla</span>, </span><span class="parameter" id="-param-onVanilla"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanilla</span>, </span><span class="parameter" id="-param-vanillaContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanillaContainer</span>, </span><span class="parameter" id="-param-onVanillaContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanillaContainer</span>, </span><span class="parameter" id="-param-sourceMauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceMauve</span>, </span><span class="parameter" id="-param-mauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauve</span>, </span><span class="parameter" id="-param-onMauve"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauve</span>, </span><span class="parameter" id="-param-mauveContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauveContainer</span>, </span><span class="parameter" id="-param-onMauveContainer"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauveContainer</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="gold" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/gold">gold</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="goldContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/goldContainer">goldContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="mauve" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/mauve">mauve</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="mauveContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/mauveContainer">mauveContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onGold" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onGold">onGold</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onGoldContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onMauve" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onMauve">onMauve</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onMauveContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onVanilla" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onVanilla">onVanilla</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onVanillaContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="sourceGold" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/sourceGold">sourceGold</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="sourceMauve" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/sourceMauve">sourceMauve</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="sourceVanilla" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="type" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> \n\n</dt>\n<dd class="inherited">\n  The extension\'s type.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="vanilla" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/vanilla">vanilla</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="vanillaContainer" class="property">\n  <span class="name"><a href="../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="copyWith" class="callable">\n  <span class="name"><a href="../unself_style/CustomColors/copyWith">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-sourceGold">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceGold</span>, </span><span class="parameter" id="copyWith-param-gold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">gold</span>, </span><span class="parameter" id="copyWith-param-onGold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGold</span>, </span><span class="parameter" id="copyWith-param-goldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">goldContainer</span>, </span><span class="parameter" id="copyWith-param-onGoldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGoldContainer</span>, </span><span class="parameter" id="copyWith-param-sourceVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceVanilla</span>, </span><span class="parameter" id="copyWith-param-vanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanilla</span>, </span><span class="parameter" id="copyWith-param-onVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanilla</span>, </span><span class="parameter" id="copyWith-param-vanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanillaContainer</span>, </span><span class="parameter" id="copyWith-param-onVanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanillaContainer</span>, </span><span class="parameter" id="copyWith-param-sourceMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceMauve</span>, </span><span class="parameter" id="copyWith-param-mauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauve</span>, </span><span class="parameter" id="copyWith-param-onMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauve</span>, </span><span class="parameter" id="copyWith-param-mauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauveContainer</span>, </span><span class="parameter" id="copyWith-param-onMauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauveContainer</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_style/CustomColors">CustomColors</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Creates a copy of this theme extension with the given fields\nreplaced by the non-null parameter values.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="harmonized" class="callable">\n  <span class="name"><a href="../unself_style/CustomColors/harmonized">harmonized</a></span><span class="signature">(<wbr><span class="parameter" id="harmonized-param-dynamic"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a></span> <span class="parameter-name">dynamic</span></span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_style/CustomColors">CustomColors</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Returns an instance of <a href="../unself_style/CustomColors">CustomColors</a> in which the following custom\ncolors are harmonized with <code>dynamic</code>\'s <a href="https://api.flutter.dev/flutter/material/ColorScheme/primary.html">ColorScheme.primary</a>.\n  \n\n</dd>\n\n        <dt id="lerp" class="callable">\n  <span class="name"><a href="../unself_style/CustomColors/lerp">lerp</a></span><span class="signature">(<wbr><span class="parameter" id="lerp-param-other"><span>covariant</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeExtension-class.html">ThemeExtension</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_style/CustomColors">CustomColors</a></span>&gt;</span>?</span> <span class="parameter-name">other</span>, </span><span class="parameter" id="lerp-param-t"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">t</span></span>)\n    <span class="returntype parameter">\u2192 <a href="../unself_style/CustomColors">CustomColors</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Linearly interpolate with another <a href="https://api.flutter.dev/flutter/material/ThemeExtension-class.html">ThemeExtension</a> object.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_style</a></li>\n  <li><a href="../unself_style/unself_style">unself_style</a></li>\n  <li class="self-crumb">CustomColors class</li>\n</ol>\n\n\n    <h5>unself_style library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_style/unself_style#classes">Classes</a></li>\n        <li><a href="../unself_style/CustomColors">CustomColors</a></li>\n        <li><a href="../unself_style/ElevationInfo">ElevationInfo</a></li>\n        <li><a href="../unself_style/FontFamily">FontFamily</a></li>\n        <li><a href="../unself_style/UnBreakpoints">UnBreakpoints</a></li>\n        <li><a href="../unself_style/UnColors">UnColors</a></li>\n        <li><a href="../unself_style/UnColorStates">UnColorStates</a></li>\n        <li><a href="../unself_style/UnColorTheme">UnColorTheme</a></li>\n        <li><a href="../unself_style/UnCorner">UnCorner</a></li>\n        <li><a href="../unself_style/UnDurations">UnDurations</a></li>\n        <li><a href="../unself_style/UnEasing">UnEasing</a></li>\n        <li><a href="../unself_style/UnElevation">UnElevation</a></li>\n        <li><a href="../unself_style/UnFontSizes">UnFontSizes</a></li>\n        <li><a href="../unself_style/UnFontWeight">UnFontWeight</a></li>\n        <li><a href="../unself_style/UnHaptics">UnHaptics</a></li>\n        <li><a href="../unself_style/UnSizes">UnSizes</a></li>\n        <li><a href="../unself_style/UnSpaces">UnSpaces</a></li>\n        <li><a href="../unself_style/UnStroke">UnStroke</a></li>\n        <li><a href="../unself_style/UnSymbols">UnSymbols</a></li>\n        <li><a href="../unself_style/UnSymbolSizes">UnSymbolSizes</a></li>\n        <li><a href="../unself_style/UnTextStyle">UnTextStyle</a></li>\n        <li><a href="../unself_style/UnTextTheme">UnTextTheme</a></li>\n        <li><a href="../unself_style/UnTheme">UnTheme</a></li>\n\n      <li class="section-title"><a href="../unself_style/unself_style#extensions">Extensions</a></li>\n        <li><a href="../unself_style/ColorStates">ColorStates</a></li>\n        <li><a href="../unself_style/Harmonize">Harmonize</a></li>\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_style/CustomColors#constructors">Constructors</a></li>\n          <li><a href="../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_style/CustomColors#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_style/CustomColors/gold">gold</a></li>\n          <li><a href="../unself_style/CustomColors/goldContainer">goldContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_style/CustomColors/mauve">mauve</a></li>\n          <li><a href="../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>\n          <li><a href="../unself_style/CustomColors/onGold">onGold</a></li>\n          <li><a href="../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>\n          <li><a href="../unself_style/CustomColors/onMauve">onMauve</a></li>\n          <li><a href="../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>\n          <li><a href="../unself_style/CustomColors/onVanilla">onVanilla</a></li>\n          <li><a href="../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_style/CustomColors/sourceGold">sourceGold</a></li>\n          <li><a href="../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>\n          <li><a href="../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>\n          <li><a href="../unself_style/CustomColors/vanilla">vanilla</a></li>\n          <li><a href="../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>\n\n        <li class="section-title"><a href="../unself_style/CustomColors#instance-methods">Methods</a></li>\n          <li><a href="../unself_style/CustomColors/copyWith">copyWith</a></li>\n          <li><a href="../unself_style/CustomColors/harmonized">harmonized</a></li>\n          <li><a href="../unself_style/CustomColors/lerp">lerp</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_style/CustomColors#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const o={title:"CustomColors class",sidebar_label:"CustomColors",hide_title:!0},p=void 0,i={unversionedId:"api/unself_style/CustomColors/CustomColors",id:"api/unself_style/CustomColors/CustomColors",title:"CustomColors class",description:"",source:"@site/developer/api/unself_style/CustomColors/CustomColors.mdx",sourceDirName:"api/unself_style/CustomColors",slug:"/api/unself_style/CustomColors/",permalink:"/developer/api/unself_style/CustomColors/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_style/CustomColors/CustomColors.mdx",tags:[],version:"current",lastUpdatedAt:1678541994,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"CustomColors class",sidebar_label:"CustomColors",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ColorStates",permalink:"/developer/api/unself_style/ColorStates"},next:{title:"CustomColors const constructor",permalink:"/developer/api/unself_style/CustomColors/CustomColors.constructor"}},d={},u=[],c={toc:u};function f(a){let{components:s,...n}=a;return(0,l.kt)("wrapper",(0,e.Z)({},c,n,{components:s,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);