import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">SettingsAppearanceBloc</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a> description</p>
</section>


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></li>
      <li>SettingsAppearanceBloc</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="SettingsAppearanceBloc" class="callable">
          <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></span><span class="signature">(<span class="parameter" id="-param-analyticService">{<span>required</span> <span class="type-annotation">AnalyticService?</span> <span class="parameter-name">analyticService</span>, </span><span class="parameter" id="-param-userService"><span>required</span> <span class="type-annotation">UserService</span> <span class="parameter-name">userService</span>}</span>)</span>
        </dt>
        <dd>
          <a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a> description
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isClosed" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether the bloc is closed.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="state" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></span>
  <span class="signature">→ <a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> 

</dt>
<dd class="inherited">
  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a>.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="stream" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  The current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a> of states.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="add" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></span><span class="signature">(<wbr><span class="parameter" id="add-param-event"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> <span class="parameter-name">event</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Notifies the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> of a new <code>event</code> which triggers
all corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a> instances.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="addError" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></span><span class="signature">(<wbr><span class="parameter" id="addError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="addError-param-stackTrace">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>?</span> <span class="parameter-name">stackTrace</span>]</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Reports an <code>error</code> which triggers <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a> with an optional <a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="close" class="callable">
  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/close">close</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Closes the <code>event</code> and <code>state</code> <code>Streams</code>.
This method should be called when a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> is no longer needed.
Once <a href="../settings_appearance/SettingsAppearanceBloc/close">close</a> is called, <code>events</code> that are <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed will not be
processed.
In addition, if <a href="../settings_appearance/SettingsAppearanceBloc/close">close</a> is called while <code>events</code> are still being
processed, the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> will finish processing the pending <code>events</code>.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="emit" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></span><span class="signature">(<wbr><span class="parameter" id="emit-param-state"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> <span class="parameter-name">state</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  <strong><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a> is only for internal use and should never be called directly
outside of tests. The <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a> instance provided to each <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>
should be used instead.</strong>
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="on" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></span><span class="signature">&lt;<wbr><span class="type-parameter">E extends Event</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="on-param-handler"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">handler</span>, </span><span class="parameter" id="on-param-transformer">{<span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a><span class="signature">&lt;<wbr><span class="type-parameter">E</span>&gt;</span>?</span> <span class="parameter-name">transformer</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Register event handler for an event of type <code>E</code>.
There should only ever be one event handler per event type <code>E</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="onChange" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></span><span class="signature">(<wbr><span class="parameter" id="onChange-param-change"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">change</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Called whenever a <code>change</code> occurs with the given <code>change</code>.
A <code>change</code> occurs when a new <code>state</code> is emitted.
<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is called before the <code>state</code> of the <code>cubit</code> is updated.
<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a> is a great spot to add logging/analytics for a specific <code>cubit</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="onError" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></span><span class="signature">(<wbr><span class="parameter" id="onError-param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span><span class="parameter" id="onError-param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Called whenever an <code>error</code> occurs and notifies <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver/onError.html">BlocObserver.onError</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="onEvent" class="callable">
  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></span><span class="signature">(<wbr><span class="parameter" id="onEvent-param-event"><span class="type-annotation"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> <span class="parameter-name">event</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  Called whenever an <code>event</code> is <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed to the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>.
A great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="onSubscriptionData" class="callable">
  <span class="name"><a href="../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></span><span class="signature">(<wbr><span class="parameter" id="onSubscriptionData-param-user"><span class="type-annotation">User</span> <span class="parameter-name">user</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="onTransition" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></span><span class="signature">(<wbr><span class="parameter" id="onTransition-param-transition"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span>, <span class="type-parameter"><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span></span> <span class="parameter-name">transition</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Called whenever a <code>transition</code> occurs with the given <code>transition</code>.
A <code>transition</code> occurs when a new <code>event</code> is added
and a new state is <code>emitted</code> from a corresponding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a>.
executed.
<a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a> is called before a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>'s <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a> has been updated.
A great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
    


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_settings_appearance</a></li>
  <li><a href="../settings_appearance/settings_appearance">settings_appearance</a></li>
  <li class="self-crumb">SettingsAppearanceBloc class</li>
</ol>


    <h5>settings_appearance library</h5>
    <ol>
      <li class="section-title"><a href="../settings_appearance/settings_appearance#classes">Classes</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></li>
        <li><a href="../settings_appearance/SettingsAppearancePage">SettingsAppearancePage</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceSliver">SettingsAppearanceSliver</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>

      <li class="section-title"><a href="../settings_appearance/settings_appearance#extensions">Extensions</a></li>
        <li><a href="../settings_appearance/Properties">Properties</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>






      <li class="section-title"><a href="../settings_appearance/settings_appearance#typedefs">Typedefs</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceBuilder">SettingsAppearanceBuilder</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceConsumer">SettingsAppearanceConsumer</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceListener">SettingsAppearanceListener</a></li>
        <li><a href="../settings_appearance/SettingsAppearanceSelector">SettingsAppearanceSelector</a></li>

      <li class="section-title"><a href="../settings_appearance/settings_appearance#exceptions">Exceptions</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../settings_appearance/SettingsAppearanceBloc#constructors">Constructors</a></li>
          <li><a href="../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></li>


        <li class="section-title inherited">
          <a href="../settings_appearance/SettingsAppearanceBloc#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>

        <li class="section-title"><a href="../settings_appearance/SettingsAppearanceBloc#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>
          <li><a href="../settings_appearance/SettingsAppearanceBloc/close">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></li>
          <li><a href="../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></li>
          <li><a href="../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../settings_appearance/SettingsAppearanceBloc#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
