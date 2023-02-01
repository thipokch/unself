"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36436],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>m});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=s,m=d["".concat(i,".").concat(u)]||d[u]||h[u]||r;return t?n.createElement(m,l(l({ref:a},o),{},{components:t})):n.createElement(m,l({ref:a},o))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[d]="string"==typeof e?e:s,l[1]=c;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97054:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=t(87462),s=t(67294),r=t(3905);function l(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">SettingsAppearanceBloc</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n<section class="desc markdown">\n  <p><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a> description</p>\n</section>\n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></li>\n      <li>SettingsAppearanceBloc</li>\n    </ul>\n  </dd>\n\n        \n        \n\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="SettingsAppearanceBloc" class="callable">\n          <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></span><span class="signature">(<span class="parameter" id="-param-analyticService">{<span>required</span> <span class="type-annotation">AnalyticService?</span> <span class="parameter-name">analyticService</span>, </span><span class="parameter" id="-param-userService"><span>required</span> <span class="type-annotation">UserService</span> <span class="parameter-name">userService</span>}</span>)</span>\n        </dt>\n        <dd>\n          <a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a> description\n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor inherited" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="isClosed" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Whether the bloc is closed.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="state" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></span>\n  <span class="signature">\u2192 <a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> \n\n</dt>\n<dd class="inherited">\n  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="stream" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a> of states.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="add" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></span><span class="signature">(<wbr><span class="parameter" id="add-param-event"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> <span class="parameter-name">event</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Notifies the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> of a new <code>event</code> which triggers\nall corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a> instances.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="addError" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></span><span class="signature">(<wbr><span class="parameter" id="addError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="addError-param-stackTrace">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>?</span> <span class="parameter-name">stackTrace</span>]</span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Reports an <code>error</code> which triggers <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a> with an optional <a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="close" class="callable">\n  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/close">close</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd>\n  Closes the <code>event</code> and <code>state</code> <code>Streams</code>.\nThis method should be called when a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> is no longer needed.\nOnce <a href="../settings_appearance/SettingsAppearanceBloc/close">close</a> is called, <code>events</code> that are <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed will not be\nprocessed.\nIn addition, if <a href="../settings_appearance/SettingsAppearanceBloc/close">close</a> is called while <code>events</code> are still being\nprocessed, the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> will finish processing the pending <code>events</code>.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="emit" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></span><span class="signature">(<wbr><span class="parameter" id="emit-param-state"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> <span class="parameter-name">state</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  <strong><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a> is only for internal use and should never be called directly\noutside of tests. The <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a> instance provided to each <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>\nshould be used instead.</strong>\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="on" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></span><span class="signature">&lt;<wbr><span class="type-parameter">E extends Event</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="on-param-handler"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">handler</span>, </span><span class="parameter" id="on-param-transformer">{<span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>&gt;</span>?</span> <span class="parameter-name">transformer</span>}</span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Register event handler for an event of type <code>E</code>.\nThere should only ever be one event handler per event type <code>E</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onChange" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></span><span class="signature">(<wbr><span class="parameter" id="onChange-param-change"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">change</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever a <code>change</code> occurs with the given <code>change</code>.\nA <code>change</code> occurs when a new <code>state</code> is emitted.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is called before the <code>state</code> of the <code>cubit</code> is updated.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is a great spot to add logging/analytics for a specific <code>cubit</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onError" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></span><span class="signature">(<wbr><span class="parameter" id="onError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="onError-param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever an <code>error</code> occurs and notifies <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver/onError.html">BlocObserver.onError</a>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="onEvent" class="callable">\n  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></span><span class="signature">(<wbr><span class="parameter" id="onEvent-param-event"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> <span class="parameter-name">event</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  Called whenever an <code>event</code> is <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed to the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>.\nA great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.\n  <div class="features"><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="onSubscriptionData" class="callable">\n  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></span><span class="signature">(<wbr><span class="parameter" id="onSubscriptionData-param-user"><span class="type-annotation">User</span> <span class="parameter-name">user</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd>\n  \n  \n\n</dd>\n\n        <dt id="onTransition" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></span><span class="signature">(<wbr><span class="parameter" id="onTransition-param-transition"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">transition</span></span>)\n    <span class="returntype parameter">\u2192 void</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Called whenever a <code>transition</code> occurs with the given <code>transition</code>.\nA <code>transition</code> occurs when a new <code>event</code> is added\nand a new state is <code>emitted</code> from a corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>.\nexecuted.\n<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a> is called before a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>\'s <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a> has been updated.\nA great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_settings_appearance</a></li>\n  <li><a href="../settings_appearance/settings_appearance">settings_appearance</a></li>\n  <li class="self-crumb">SettingsAppearanceBloc class</li>\n</ol>\n\n\n    <h5>settings_appearance library</h5>\n    <ol>\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#classes">Classes</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></li>\n        <li><a href="../settings_appearance/SettingsAppearancePage">SettingsAppearancePage</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceSliver">SettingsAppearanceSliver</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#extensions">Extensions</a></li>\n        <li><a href="../settings_appearance/Properties">Properties</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>\n\n\n\n\n\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#typedefs">Typedefs</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>\n        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>\n        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceBuilder">SettingsAppearanceBuilder</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceConsumer">SettingsAppearanceConsumer</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceListener">SettingsAppearanceListener</a></li>\n        <li><a href="../settings_appearance/SettingsAppearanceSelector">SettingsAppearanceSelector</a></li>\n\n      <li class="section-title"><a href="../settings_appearance/settings_appearance#exceptions">Exceptions</a></li>\n        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../settings_appearance/SettingsAppearanceBloc#constructors">Constructors</a></li>\n          <li><a href="../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></li>\n\n\n        <li class="section-title inherited">\n          <a href="../settings_appearance/SettingsAppearanceBloc#instance-properties">Properties</a>\n        </li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>\n\n        <li class="section-title"><a href="../settings_appearance/SettingsAppearanceBloc#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>\n          <li><a href="../settings_appearance/SettingsAppearanceBloc/close">close</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></li>\n          <li><a href="../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></li>\n          <li><a href="../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../settings_appearance/SettingsAppearanceBloc#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const c={title:"SettingsAppearanceBloc class",sidebar_label:"SettingsAppearanceBloc",hide_title:!0},i=void 0,p={unversionedId:"api/settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc",id:"api/settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc",title:"SettingsAppearanceBloc class",description:"",source:"@site/reference/api/settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.mdx",sourceDirName:"api/settings_appearance/SettingsAppearanceBloc",slug:"/api/settings_appearance/SettingsAppearanceBloc/",permalink:"/reference/api/settings_appearance/SettingsAppearanceBloc/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/reference/api/settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.mdx",tags:[],version:"current",lastUpdatedAt:1675216125,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"SettingsAppearanceBloc class",sidebar_label:"SettingsAppearanceBloc",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"themeMode",permalink:"/reference/api/settings_appearance/Properties/themeMode"},next:{title:"SettingsAppearanceBloc constructor",permalink:"/reference/api/settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor"}},o={},d=[],h={toc:d};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"RawHtml"}))}u.isMDXComponent=!0}}]);