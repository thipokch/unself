"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[85194],{3905:(a,s,t)=>{t.d(s,{Zo:()=>o,kt:()=>h});var e=t(67294);function n(a,s,t){return s in a?Object.defineProperty(a,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[s]=t,a}function l(a,s){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),t.push.apply(t,e)}return t}function r(a){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?l(Object(t),!0).forEach((function(s){n(a,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))}))}return a}function p(a,s){if(null==a)return{};var t,e,n=function(a,s){if(null==a)return{};var t,e,n={},l=Object.keys(a);for(e=0;e<l.length;e++)t=l[e],s.indexOf(t)>=0||(n[t]=a[t]);return n}(a,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(e=0;e<l.length;e++)t=l[e],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=e.createContext({}),c=function(a){var s=e.useContext(i),t=s;return a&&(t="function"==typeof a?a(s):r(r({},s),a)),t},o=function(a){var s=c(a.components);return e.createElement(i.Provider,{value:s},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var s=a.children;return e.createElement(e.Fragment,{},s)}},m=e.forwardRef((function(a,s){var t=a.components,n=a.mdxType,l=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),d=c(t),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?e.createElement(h,r(r({ref:s},o),{},{components:t})):e.createElement(h,r({ref:s},o))}));function h(a,s){var t=arguments,n=s&&s.mdxType;if("string"==typeof a||n){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var i in s)hasOwnProperty.call(s,i)&&(p[i]=s[i]);p.originalType=a,p[d]="string"==typeof a?a:n,r[1]=p;for(var c=2;c<l;c++)r[c]=t[c];return e.createElement.apply(null,r)}return e.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51759:(a,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var e=t(87462),n=t(67294),l=t(3905);function r(){return n.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">UnpackAssistantEvent</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a> are the events that the <a href="../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a> can\nrespond to.</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n\n        \n        \n\n\n\n        \n  <dt>Annotations</dt>\n  <dd>\n    <ul class="annotation-list clazz-relationships">\n        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>\n    </ul>\n  </dd>\n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="UnpackAssistantEvent.selectApp" class="callable">\n          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">UnpackAssistantEvent.selectApp</a></span><span class="signature">(<span class="parameter" id="selectApp-param-app">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span>}</span>)</span>\n        </dt>\n        <dd>\n          User selected the app or service to import data from.\n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="UnpackAssistantEvent.selectArchive" class="callable">\n          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">UnpackAssistantEvent.selectArchive</a></span><span class="signature">(<span class="parameter" id="selectArchive-param-xFile">{<span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span>}</span>)</span>\n        </dt>\n        <dd>\n          User selected the archive file to be imported\n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="UnpackAssistantEvent.selectData" class="callable">\n          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">UnpackAssistantEvent.selectData</a></span><span class="signature">(<span class="parameter" id="selectData-param-data">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span>}</span>)</span>\n        </dt>\n        <dd>\n          User selected the data to be imported from the archive.\n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n        <dt id="UnpackAssistantEvent.start" class="callable">\n          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">UnpackAssistantEvent.start</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          User starts the import process.\n            <div class="constructor-modifier features">const</div>\n            <div class="constructor-modifier features">factory</div>\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="map" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-selectApp">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-selectArchive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-selectData"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-start"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="mapOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeMap" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-selectApp">{<span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-selectArchive"><span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-selectData"><span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-start"><span class="type-annotation">TResult</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="maybeWhen" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-selectApp">{<span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>)?, </span><span class="parameter" id="maybeWhen-param-selectArchive"><span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-xFile"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span></span>)?, </span><span class="parameter" id="maybeWhen-param-selectData"><span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>)?, </span><span class="parameter" id="maybeWhen-param-start"><span class="type-annotation">TResult</span> <span class="parameter-name">start</span>()?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="when" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-selectApp">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>), </span><span class="parameter" id="when-param-selectArchive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-xFile"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span></span>), </span><span class="parameter" id="when-param-selectData"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>), </span><span class="parameter" id="when-param-start"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">start</span>()}</span>)\n    <span class="returntype parameter">\u2192 TResult</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="whenOrNull" class="callable inherited">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>)?, </span><span class="parameter" id="whenOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-xFile"><span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span></span>)?, </span><span class="parameter" id="whenOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>)?, </span><span class="parameter" id="whenOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>()?}</span>)\n    <span class="returntype parameter">\u2192 TResult?</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  \n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack_assistant</a></li>\n  <li><a href="../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li class="self-crumb">UnpackAssistantEvent class</li>\n</ol>\n\n\n    <h5>unself_unpack_assistant library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#classes">Classes</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantPage">UnpackAssistantPage</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantSliver">UnpackAssistantSliver</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantView">UnpackAssistantView</a></li>\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#extensions">Extensions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#typedefs">Typedefs</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantBuilder">UnpackAssistantBuilder</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantConsumer">UnpackAssistantConsumer</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantListener">UnpackAssistantListener</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantSelector">UnpackAssistantSelector</a></li>\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#exceptions">Exceptions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_unpack_assistant/UnpackAssistantEvent#constructors">Constructors</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_unpack_assistant/UnpackAssistantEvent#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>\n          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const p={title:"UnpackAssistantEvent class",sidebar_label:"UnpackAssistantEvent",hide_title:!0},i=void 0,c={unversionedId:"api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent",id:"api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent",title:"UnpackAssistantEvent class",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantEvent",slug:"/api/unself_unpack_assistant/UnpackAssistantEvent/",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.mdx",tags:[],version:"current",lastUpdatedAt:1680403332,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"UnpackAssistantEvent class",sidebar_label:"UnpackAssistantEvent",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"UnpackAssistantConsumer",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantConsumer"},next:{title:"UnpackAssistantEvent.selectArchive const constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.constructor"}},o={},d=[],u={toc:d};function m(a){let{components:s,...t}=a;return(0,l.kt)("wrapper",(0,e.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}m.isMDXComponent=!0}}]);