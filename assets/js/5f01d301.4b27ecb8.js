"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),p=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},o="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),o=p(a),f=n,u=o["".concat(c,".").concat(f)]||o[f]||h[f]||i;return a?s.createElement(u,r(r({ref:t},d),{},{components:a})):s.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var s=a(87462),n=a(67294),i=a(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">LicenseListSliver</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></li>\n        <li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a></li>\n      <li>LicenseListSliver</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="LicenseListSliver" class="callable">\n          <span class="name"><a href="../license_list/LicenseListSliver/LicenseListSliver.constructor">LicenseListSliver</a></span><span class="signature">(<span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-onSelectPackage"><span>required</span> <span class="type-annotation">dynamic</span> <span class="parameter-name">onSelectPackage</span>(<span class="parameter" id="param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span>)}</span>)</span>\n        </dt>\n        <dd>\n          \n            <div class="constructor-modifier features">const</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="key" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> \n\n</dt>\n<dd class="inherited">\n  Controls how one widget replaces another widget in the tree.\n  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onSelectPackage" class="property">\n  <span class="name"><a href="../license_list/LicenseListSliver/onSelectPackage">onSelectPackage</a></span>\n  <span class="signature">\u2192 dynamic Function<span class="signature">(<span class="parameter" id="param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span>)</span></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">final</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="build" class="callable">\n  <span class="name"><a href="../license_list/LicenseListSliver/build">build</a></span><span class="signature">(<wbr><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Describes the part of the user interface represented by this widget.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="createElement" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/StatelessElement-class.html">StatelessElement</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Creates a <a href="https://api.flutter.dev/flutter/widgets/StatelessElement-class.html">StatelessElement</a> to manage this widget\'s location in the tree.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugDescribeChildren" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a list of <code>DiagnosticsNode</code> objects describing this node\'s\nchildren.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="debugFillProperties" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Add additional properties associated with the node.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toDiagnosticsNode" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a debug representation of the object that is used by debugging\ntools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringDeep" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></span><span class="signature">(<wbr><span class="parameter" id="toStringDeep-param-prefixLineOne">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">prefixLineOne</span> = <span class="default-value">\'\'</span>, </span><span class="parameter" id="toStringDeep-param-prefixOtherLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">prefixOtherLines</span>, </span><span class="parameter" id="toStringDeep-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a string representation of this node and its descendants.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShallow" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></span><span class="signature">(<wbr><span class="parameter" id="toStringShallow-param-joiner">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">joiner</span> = <span class="default-value">\', \'</span>, </span><span class="parameter" id="toStringShallow-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Returns a one-line detailed description of the object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toStringShort" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A short, textual description of this widget.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n  <section class="summary offset-anchor" id="static-methods">\n    <h2>Static Methods</h2>\n    <dl class="callables">\n        <dt id="item" class="callable">\n  <span class="name"><a href="../license_list/LicenseListSliver/item">item</a></span><span class="signature">(<wbr><span class="parameter" id="item-param-packageName">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span>, </span><span class="parameter" id="item-param-licenseCount"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">licenseCount</span>, </span><span class="parameter" id="item-param-onSelectPackage"><span>required</span> <span class="type-annotation">dynamic</span> <span class="parameter-name">onSelectPackage</span>(<span class="parameter" id="param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n    </dl>\n  </section>\n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_license_list</a></li>\n  <li><a href="../license_list/license_list">license_list</a></li>\n  <li class="self-crumb">LicenseListSliver class</li>\n</ol>\n\n\n    <h5>license_list library</h5>\n    <ol>\n      <li class="section-title"><a href="../license_list/license_list#classes">Classes</a></li>\n        <li><a href="../license_list/LicenseListPage/LicenseListPage">LicenseListPage</a></li>\n        <li><a href="../license_list/LicenseListSliver/LicenseListSliver">LicenseListSliver</a></li>\n\n\n\n\n\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../license_list/LicenseListSliver/LicenseListSliver#constructors">Constructors</a></li>\n          <li><a href="../license_list/LicenseListSliver/LicenseListSliver.constructor">LicenseListSliver</a></li>\n\n\n        <li class="section-title">\n          <a href="../license_list/LicenseListSliver/LicenseListSliver#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>\n          <li><a href="../license_list/LicenseListSliver/onSelectPackage">onSelectPackage</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title"><a href="../license_list/LicenseListSliver/LicenseListSliver#instance-methods">Methods</a></li>\n          <li><a href="../license_list/LicenseListSliver/build">build</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>\n\n        <li class="section-title inherited"><a href="../license_list/LicenseListSliver/LicenseListSliver#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>\n\n\n\n        <li class="section-title"><a href="../license_list/LicenseListSliver/LicenseListSliver#static-methods">Static methods</a></li>\n          <li><a href="../license_list/LicenseListSliver/item">item</a></li>\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const l={title:"LicenseListSliver class",sidebar_label:"LicenseListSliver",hide_title:!0},c=void 0,p={unversionedId:"packages/license_list/LicenseListSliver/LicenseListSliver",id:"packages/license_list/LicenseListSliver/LicenseListSliver",title:"LicenseListSliver class",description:"",source:"@site/reference/packages/license_list/LicenseListSliver/LicenseListSliver.mdx",sourceDirName:"packages/license_list/LicenseListSliver",slug:"/packages/license_list/LicenseListSliver/",permalink:"/reference/packages/license_list/LicenseListSliver/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/packages/license_list/LicenseListSliver/LicenseListSliver.mdx",tags:[],version:"current",frontMatter:{title:"LicenseListSliver class",sidebar_label:"LicenseListSliver",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"onSelectPackage",permalink:"/reference/packages/license_list/LicenseListPage/onSelectPackage"},next:{title:"LicenseListSliver const constructor",permalink:"/reference/packages/license_list/LicenseListSliver/LicenseListSliver.constructor"}},d={},o=[],h={toc:o};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);