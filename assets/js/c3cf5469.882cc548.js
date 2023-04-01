"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1709],{3905:(a,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>f});var n=e(67294);function s(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){s(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function c(a,t){if(null==a)return{};var e,n,s=function(a,t){if(null==a)return{};var e,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)e=l[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(s[e]=a[e])}return s}var i=n.createContext({}),o=function(a){var t=n.useContext(i),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},p=function(a){var t=o(a.components);return n.createElement(i.Provider,{value:t},a.children)},d="mdxType",h={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(a,t){var e=a.components,s=a.mdxType,l=a.originalType,i=a.parentName,p=c(a,["components","mdxType","originalType","parentName"]),d=o(e),u=s,f=d["".concat(i,".").concat(u)]||d[u]||h[u]||l;return e?n.createElement(f,r(r({ref:t},p),{},{components:e})):n.createElement(f,r({ref:t},p))}));function f(a,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var l=e.length,r=new Array(l);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=a,c[d]="string"==typeof a?a:s,r[1]=c;for(var o=2;o<l;o++)r[o]=e[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},5846:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=e(87462),s=e(67294),l=e(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">UnpackAssistantBloc</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a> is responsible for helping the user importing or\nunpacking their exported archive from other apps. The assistant takes\nthe user through the following steps to help them import their data:</p>\n<ol>\n<li>Select the app or services.</li>\n<li>Select the archive file.</li>\n<li>Select data from archive to import.</li>\n<li>Process the archive.</li>\n<li>Complete the import.</li>\n</ol>\n<p>Constraints:</p>\n<ol>\n<li>Run one at a time.</li>\n<li>The app must be in the foreground.</li>\n</ol>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></span>, <span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></li>\n      <li>UnpackAssistantBloc</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="UnpackAssistantBloc" class="callable">\n          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor">UnpackAssistantBloc</a></span><span class="signature">(<span class="parameter" id="-param-unpackService">{<span>required</span> <span class="type-annotation">UnpackService</span> <span class="parameter-name">unpackService</span>}</span>)</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="isClosed" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Whether the bloc is closed.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="state" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></span>\n  <span class="signature">\u2192 <a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span> \n\n</dt>\n<dd class="inherited">\n  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="stream" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a> of states.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="add" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></span><span class="signature">(<wbr><span class="parameter" id="add-param-event"><span class="type-annotation"><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></span> <span class="parameter-name">event</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Notifies the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> of a new <code>event</code> which triggers\nall corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a> instances.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="addError" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></span><span class="signature">(<wbr><span class="parameter" id="addError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="addError-param-stackTrace">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>?</span> <span class="parameter-name">stackTrace</span>]</span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Reports an <code>error</code> which triggers <a href="../unself_unpack_assistant/UnpackAssistantBloc/onError">onError</a> with an optional <a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="close" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Closes the <code>event</code> and <code>state</code> <code>Streams</code>.\nThis method should be called when a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> is no longer needed.\nOnce <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a> is called, <code>events</code> that are <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed will not be\nprocessed.\nIn addition, if <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a> is called while <code>events</code> are still being\nprocessed, the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> will finish processing the pending <code>events</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="emit" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></span><span class="signature">(<wbr><span class="parameter" id="emit-param-state"><span class="type-annotation"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span> <span class="parameter-name">state</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  <strong><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a> is only for internal use and should never be called directly\noutside of tests. The <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a> instance provided to each <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>\nshould be used instead.</strong>\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="on" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></span><span class="signature">&lt;<wbr><span class="type-parameter">E extends Event</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="on-param-handler"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>, <span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></span> <span class="parameter-name">handler</span>, </span><span class="parameter" id="on-param-transformer">{<span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>&gt;</span>?</span> <span class="parameter-name">transformer</span>}</span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Register event handler for an event of type <code>E</code>.\nThere should only ever be one event handler per event type <code>E</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onChange" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></span><span class="signature">(<wbr><span class="parameter" id="onChange-param-change"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></span> <span class="parameter-name">change</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever a <code>change</code> occurs with the given <code>change</code>.\nA <code>change</code> occurs when a new <code>state</code> is emitted.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is called before the <code>state</code> of the <code>cubit</code> is updated.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is a great spot to add logging/analytics for a specific <code>cubit</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onError" class="callable">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantBloc/onError">onError</a></span><span class="signature">(<wbr><span class="parameter" id="onError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="onError-param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  Called whenever an <code>error</code> occurs and notifies <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver/onError.html">BlocObserver.onError</a>.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="onEvent" class="callable">\n  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantBloc/onEvent">onEvent</a></span><span class="signature">(<wbr><span class="parameter" id="onEvent-param-event"><span class="type-annotation"><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></span> <span class="parameter-name">event</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  Called whenever an <code>event</code> is <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed to the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>.\nA great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="onTransition" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></span><span class="signature">(<wbr><span class="parameter" id="onTransition-param-transition"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></span>, <span class="type-parameter"><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></span>&gt;</span></span> <span class="parameter-name">transition</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever a <code>transition</code> occurs with the given <code>transition</code>.\nA <code>transition</code> occurs when a new <code>event</code> is added\nand a new state is <code>emitted</code> from a corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>.\nexecuted.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a> is called before a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>\'s <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a> has been updated.\nA great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_unpack_assistant</a></li>\n  <li><a href="../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>\n  <li class="self-crumb">UnpackAssistantBloc class</li>\n</ol>\n\n\n    <h5>unself_unpack_assistant library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#classes">Classes</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantPage">UnpackAssistantPage</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantSliver">UnpackAssistantSliver</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantView">UnpackAssistantView</a></li>\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#extensions">Extensions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#typedefs">Typedefs</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantBuilder">UnpackAssistantBuilder</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantConsumer">UnpackAssistantConsumer</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantListener">UnpackAssistantListener</a></li>\n        <li><a href="../unself_unpack_assistant/UnpackAssistantSelector">UnpackAssistantSelector</a></li>\n\n      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#exceptions">Exceptions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_unpack_assistant/UnpackAssistantBloc#constructors">Constructors</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor">UnpackAssistantBloc</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../unself_unpack_assistant/UnpackAssistantBloc#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>\n\n        <li class="section-title"><a href="../unself_unpack_assistant/UnpackAssistantBloc#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantBloc/onError">onError</a></li>\n          <li><a href="../unself_unpack_assistant/UnpackAssistantBloc/onEvent">onEvent</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_unpack_assistant/UnpackAssistantBloc#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"UnpackAssistantBloc class",sidebar_label:"UnpackAssistantBloc",hide_title:!0},i=void 0,o={unversionedId:"api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc",id:"api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc",title:"UnpackAssistantBloc class",description:"",source:"@site/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.mdx",sourceDirName:"api/unself_unpack_assistant/UnpackAssistantBloc",slug:"/api/unself_unpack_assistant/UnpackAssistantBloc/",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantBloc/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.mdx",tags:[],version:"current",lastUpdatedAt:1680339935,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"UnpackAssistantBloc class",sidebar_label:"UnpackAssistantBloc",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"unself_unpack_assistant",permalink:"/developer/api/unself_unpack_assistant/"},next:{title:"UnpackAssistantBloc constructor",permalink:"/developer/api/unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor"}},p={},d=[],h={toc:d};function u(a){let{components:t,...e}=a;return(0,l.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);