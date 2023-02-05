"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87175],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var s=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},i=Object.keys(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=s.createContext({}),d=function(t){var e=s.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=d(t.components);return s.createElement(p.Provider,{value:e},t.children)},o="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},f=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),o=d(a),f=n,u=o["".concat(p,".").concat(f)]||o[f]||h[f]||i;return a?s.createElement(u,r(r({ref:e},c),{},{components:a})):s.createElement(u,r({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[o]="string"==typeof t?t:n,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}f.displayName="MDXCreateElement"},62089:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=a(87462),n=a(67294),i=a(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">SettingsListPage</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a></li>\n      <li>SettingsListPage</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="SettingsListPage" class="callable">\n          <span class="name"><a href="../settings_list/SettingsListPage/SettingsListPage.constructor">SettingsListPage</a></span><span class="signature">(<span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-onSelectData"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectData</span>, </span><span class="parameter" id="-param-onSelectAppearance"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectAppearance</span>, </span><span class="parameter" id="-param-onSelectLicense"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectLicense</span>, </span><span class="parameter" id="-param-onSelectFeedback"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectFeedback</span>, </span><span class="parameter" id="-param-onSelectPrivacy"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectPrivacy</span>, </span><span class="parameter" id="-param-onSelectTerms"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> <span class="parameter-name">onSelectTerms</span>, </span><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="key" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> \n\n</dt>\n<dd class="inherited">\n  Controls how one widget replaces another widget in the tree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onSelectAppearance" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectAppearance">onSelectAppearance</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onSelectData" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectData">onSelectData</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onSelectFeedback" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectFeedback">onSelectFeedback</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onSelectLicense" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectLicense">onSelectLicense</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onSelectPrivacy" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectPrivacy">onSelectPrivacy</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="onSelectTerms" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/onSelectTerms">onSelectTerms</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="trailing" class="property">\n  <span class="name"><a href="../settings_list/SettingsListPage/trailing">trailing</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="build" class="callable">\n  <span class="name"><a href="../settings_list/SettingsListPage/build">build</a></span><span class="signature">(<wbr><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Describes the part of the user interface represented by this widget.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="createElement" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/StatelessElement-class.html">StatelessElement</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Creates a <a href="https://api.flutter.dev/flutter/widgets/StatelessElement-class.html">StatelessElement</a> to manage this widget\'s location in the tree.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugDescribeChildren" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a list of <code>DiagnosticsNode</code> objects describing this node\'s\nchildren.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugFillProperties" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Add additional properties associated with the node.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toDiagnosticsNode" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a debug representation of the object that is used by debugging\ntools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringDeep" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></span><span class="signature">(<wbr><span class="parameter" id="toStringDeep-param-prefixLineOne">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">prefixLineOne</span> = <span class="default-value">\'\'</span>, </span><span class="parameter" id="toStringDeep-param-prefixOtherLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">prefixOtherLines</span>, </span><span class="parameter" id="toStringDeep-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a string representation of this node and its descendants.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShallow" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></span><span class="signature">(<wbr><span class="parameter" id="toStringShallow-param-joiner">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">joiner</span> = <span class="default-value">\', \'</span>, </span><span class="parameter" id="toStringShallow-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a one-line detailed description of the object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShort" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A short, textual description of this widget.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_settings_list</a></li>\n  <li><a href="../settings_list/settings_list">settings_list</a></li>\n  <li class="self-crumb">SettingsListPage class</li>\n</ol>\n\n\n    <h5>settings_list library</h5>\n    <ol>\n      <li class="section-title"><a href="../settings_list/settings_list#classes">Classes</a></li>\n        <li><a href="../settings_list/SettingsListPage">SettingsListPage</a></li>\n        <li><a href="../settings_list/SettingsListSliver">SettingsListSliver</a></li>\n\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../settings_list/SettingsListPage#constructors">Constructors</a></li>\n          <li><a href="../settings_list/SettingsListPage/SettingsListPage.constructor">SettingsListPage</a></li>\n\n\n        <li class="section-title">\n          <a href="../settings_list/SettingsListPage#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectAppearance">onSelectAppearance</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectData">onSelectData</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectFeedback">onSelectFeedback</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectLicense">onSelectLicense</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectPrivacy">onSelectPrivacy</a></li>\n          <li><a href="../settings_list/SettingsListPage/onSelectTerms">onSelectTerms</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../settings_list/SettingsListPage/trailing">trailing</a></li>\n\n        <li class="section-title"><a href="../settings_list/SettingsListPage#instance-methods">Methods</a></li>\n          <li><a href="../settings_list/SettingsListPage/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../settings_list/SettingsListPage#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"SettingsListPage class",sidebar_label:"SettingsListPage",hide_title:!0},p=void 0,d={unversionedId:"api/settings_list/SettingsListPage/SettingsListPage",id:"api/settings_list/SettingsListPage/SettingsListPage",title:"SettingsListPage class",description:"",source:"@site/developer/api/settings_list/SettingsListPage/SettingsListPage.mdx",sourceDirName:"api/settings_list/SettingsListPage",slug:"/api/settings_list/SettingsListPage/",permalink:"/developer/api/settings_list/SettingsListPage/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/settings_list/SettingsListPage/SettingsListPage.mdx",tags:[],version:"current",lastUpdatedAt:1675602528,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{title:"SettingsListPage class",sidebar_label:"SettingsListPage",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"settings_list",permalink:"/developer/api/settings_list/"},next:{title:"SettingsListPage const constructor",permalink:"/developer/api/settings_list/SettingsListPage/SettingsListPage.constructor"}},c={},o=[],h={toc:o};function f(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);