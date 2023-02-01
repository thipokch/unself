import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">settings_appearance</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="Bloc">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>, <span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  Takes a <code>Stream</code> of <code>Events</code> as input
and transforms them into a <code>Stream</code> of <code>States</code> as output.
</dd>

        <dt id="BlocBase">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  An interface for the core functionality implemented by
both <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> and <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a>.
</dd>

        <dt id="BlocBuilder">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>&gt;</span></span> 

</dt>
<dd>
  <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a> handles building a widget in response to new <code>states</code>.
<a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a> is analogous to <a href="https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html">StreamBuilder</a> but has simplified API to
reduce the amount of boilerplate code needed as well as <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase/bloc.html">bloc</a>-specific
performance improvements.
Please refer to <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a> if you want to "do" anything in response to
<code>state</code> changes such as navigation, showing a dialog, etc...
</dd>

        <dt id="BlocBuilderBase">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>&gt;</span></span> 

</dt>
<dd>
  Base class for widgets that build themselves based on interaction with
a specified <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase/bloc.html">bloc</a>.
</dd>

        <dt id="BlocConsumer">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>&gt;</span></span> 

</dt>
<dd>
  <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a> exposes a <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer/builder.html">builder</a> and <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer/listener.html">listener</a> in order react to new
states.
<a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a> is analogous to a nested <code>BlocListener</code>
and <code>BlocBuilder</code> but reduces the amount of boilerplate needed.
<a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a> should only be used when it is necessary to both rebuild UI
and execute other reactions to state changes in the <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer/bloc.html">bloc</a>.
</dd>

        <dt id="BlocEventSink">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a><span class="signature">&lt;<wbr><span class="type-parameter">Event extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span> 

</dt>
<dd>
  An <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a> that supports adding events.
</dd>

        <dt id="BlocListener">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>&gt;</span></span> 

</dt>
<dd>
  Takes a <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a> and an optional <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase/bloc.html">bloc</a> and invokes
the <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase/listener.html">listener</a> in response to <code>state</code> changes in the <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase/bloc.html">bloc</a>.
It should be used for functionality that needs to occur only in response to
a <code>state</code> change such as navigation, showing a <code>SnackBar</code>, showing
a <code>Dialog</code>, etc...
The <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase/listener.html">listener</a> is guaranteed to only be called once for each <code>state</code> change
unlike the <code>builder</code> in <code>BlocBuilder</code>.
</dd>

        <dt id="BlocListenerBase">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>&gt;</span></span> 

</dt>
<dd>
  Base class for widgets that listen to state changes in a specified <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase/bloc.html">bloc</a>.
</dd>

        <dt id="BlocObserver">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></span> 

</dt>
<dd>
  An interface for observing the behavior of <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> instances.
</dd>

        <dt id="BlocOverrides">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></span> 

</dt>
<dd>
  This class facilitates overriding <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a> and <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a>.
It should be extended by another class in client code with overrides
that construct a custom implementation. The implementation in this class
defaults to the base <a class="deprecated" href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides/blocObserver.html">blocObserver</a> and <a class="deprecated" href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides/eventTransformer.html">eventTransformer</a> implementation.
For example:
</dd>

        <dt id="BlocProvider">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span> 

</dt>
<dd>
  Takes a <a href="https://pub.dev/documentation/provider/6.0.5/provider/Create.html">Create</a> function that is responsible for
creating the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> or <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a> and a <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider/child.html">child</a> which will have access
to the instance via <code>BlocProvider.of(context)</code>.
It is used as a dependency injection (DI) widget so that a single instance
of a <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> or <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a> can be provided to multiple widgets within a subtree.
</dd>

        <dt id="BlocSelector">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a><span class="signature">&lt;<wbr><span class="type-parameter">B extends <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">S</span>&gt;</span></span>, <span class="type-parameter">S</span>, <span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd>
  <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a> is analogous to <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a> but allows developers to
filter updates by selecting a new value based on the bloc state.
Unnecessary builds are prevented if the selected value does not change.
</dd>

        <dt id="Change">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a> represents the change from one <code>State</code> to another.
A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a> consists of the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change/currentState.html">currentState</a> and <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change/nextState.html">nextState</a>.
</dd>

        <dt id="Closable">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></span> 

</dt>
<dd>
  An object that must be closed when no longer in use.
</dd>

        <dt id="Cubit">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a> is similar to <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> but has no notion of events
and relies on methods to <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/emit.html">emit</a> new states.
</dd>

        <dt id="Emittable">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a><span class="signature">&lt;<wbr><span class="type-parameter">State extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span> 

</dt>
<dd>
  An object that can emit new states.
</dd>

        <dt id="Emitter">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  An <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a> is a class which is capable of emitting new states.
</dd>

        <dt id="ErrorSink">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></span> 

</dt>
<dd>
  A generic destination for errors.
</dd>

        <dt id="MultiBlocListener">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></span> 

</dt>
<dd>
  Merges multiple <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a> widgets into one widget tree.
</dd>

        <dt id="MultiBlocProvider">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></span> 

</dt>
<dd>
  Merges multiple <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a> widgets into one widget tree.
</dd>

        <dt id="MultiRepositoryProvider">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></span> 

</dt>
<dd>
  Merges multiple <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a> widgets into one widget tree.
</dd>

        <dt id="RepositoryProvider">
  <span class="name "><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd>
  Takes a <a href="https://pub.dev/documentation/provider/6.0.5/provider/Create.html">Create</a> function that is responsible for creating the repository
and a <code>child</code> which will have access to the repository via
<code>RepositoryProvider.of(context)</code>.
It is used as a dependency injection (DI) widget so that a single instance
of a repository can be provided to multiple widgets within a subtree.
</dd>

        <dt id="SettingsAppearanceBloc">
  <span class="name "><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span> 

</dt>
<dd>
  <a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a> description
</dd>

        <dt id="SettingsAppearanceEvent">
  <span class="name "><a href="settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> 

</dt>
<dd>
  Event added when some custom logic happens
</dd>

        <dt id="SettingsAppearancePage">
  <span class="name "><a href="settings_appearance/SettingsAppearancePage">SettingsAppearancePage</a></span> 

</dt>
<dd>
  A description for SettingsAppearancePage
</dd>

        <dt id="SettingsAppearanceSliver">
  <span class="name "><a href="settings_appearance/SettingsAppearanceSliver">SettingsAppearanceSliver</a></span> 

</dt>
<dd>
  Sliver of the SettingsAppearancePage.
</dd>

        <dt id="SettingsAppearanceState">
  <span class="name "><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> 

</dt>
<dd>
  <a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a> description
</dd>

        <dt id="SettingsAppearanceView">
  <span class="name "><a href="settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></span> 

</dt>
<dd>
  View of the SettingsAppearancePage.
</dd>

        <dt id="StateStreamable">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a> that provides synchronous access to the current <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable/state.html">state</a>.
</dd>

        <dt id="StateStreamableSource">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a> that must be closed when no longer in use.
</dd>

        <dt id="Streamable">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a><span class="signature">&lt;<wbr><span class="type-parameter">State extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span> 

</dt>
<dd>
  An object that provides access to a stream of states over time.
</dd>

        <dt id="Transition">
  <span class="name "><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>, <span class="type-parameter">State</span>&gt;</span></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a> is the change from one state to another.
Consists of the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change/currentState.html">currentState</a>, an <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition/event.html">event</a>, and the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change/nextState.html">nextState</a>.
</dd>

      </dl>
    </section>


    <section class="summary offset-anchor" id="extensions">
      <h2>Extensions</h2>

      <dl>
        <dt id="Properties">
    <span class="name "><a href="settings_appearance/Properties">Properties</a></span> 

</dt>
<dd>
    
</dd>


        <dt id="ReadContext">
    <span class="name "><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></span> 

</dt>
<dd>
    Exposes the <code>read</code> method.
</dd>


        <dt id="SelectContext">
    <span class="name "><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></span> 

</dt>
<dd>
    Adds a <code>select</code> method on <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.
</dd>


        <dt id="WatchContext">
    <span class="name "><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></span> 

</dt>
<dd>
    Exposes the <code>watch</code> method.
</dd>


      </dl>
    </section>





    <section class="summary offset-anchor" id="typedefs">
      <h2>Typedefs</h2>

      <dl>
          
  <dt id="BlocBuilderCondition" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></span>&lt;<wbr><span class="type-parameter">S</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> Function<span class="signature">(<span class="parameter" id="param-previous"><span class="type-annotation">S</span> <span class="parameter-name">previous</span>, </span><span class="parameter" id="param-current"><span class="type-annotation">S</span> <span class="parameter-name">current</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for the <code>buildWhen</code> function which takes the previous <code>state</code> and
the current <code>state</code> and is responsible for returning a <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> which
determines whether to rebuild <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a> with the current <code>state</code>.
    

  </dd>

          
  <dt id="BlocListenerCondition" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></span>&lt;<wbr><span class="type-parameter">S</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> Function<span class="signature">(<span class="parameter" id="param-previous"><span class="type-annotation">S</span> <span class="parameter-name">previous</span>, </span><span class="parameter" id="param-current"><span class="type-annotation">S</span> <span class="parameter-name">current</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for the <code>listenWhen</code> function which takes the previous <code>state</code>
and the current <code>state</code> and is responsible for returning a <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> which
determines whether or not to call <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a> of <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a>
with the current <code>state</code>.
    

  </dd>

          
  <dt id="BlocWidgetBuilder" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></span>&lt;<wbr><span class="type-parameter">S</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a> Function<span class="signature">(<span class="parameter" id="param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span><span class="parameter" id="param-state"><span class="type-annotation">S</span> <span class="parameter-name">state</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for the <code>builder</code> function which takes the <code>BuildContext</code> and
<code>state</code> and is responsible for returning a widget which is to be rendered.
This is analogous to the <code>builder</code> function in <a href="https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html">StreamBuilder</a>.
    

  </dd>

          
  <dt id="BlocWidgetListener" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></span>&lt;<wbr><span class="type-parameter">S</span>&gt;<span class="signature">
      <span class="returntype parameter">= void Function<span class="signature">(<span class="parameter" id="param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span><span class="parameter" id="param-state"><span class="type-annotation">S</span> <span class="parameter-name">state</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for the <code>listener</code> function which takes the <code>BuildContext</code> along
with the <code>state</code> and is responsible for executing in response to
<code>state</code> changes.
    

  </dd>

          
  <dt id="BlocWidgetSelector" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></span>&lt;<wbr><span class="type-parameter">S</span>, <span class="type-parameter">T</span>&gt;<span class="signature">
      <span class="returntype parameter">= T Function<span class="signature">(<span class="parameter" id="param-state"><span class="type-annotation">S</span> <span class="parameter-name">state</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for the <code>selector</code> function which
is responsible for returning a selected value, <code>T</code>, based on <code>state</code>.
    

  </dd>

          
  <dt id="EventHandler" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></span>&lt;<wbr><span class="type-parameter">Event</span>, <span class="type-parameter">State</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span> Function<span class="signature">(<span class="parameter" id="param-event"><span class="type-annotation">Event</span> <span class="parameter-name">event</span>, </span><span class="parameter" id="param-emit"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a><span class="signature">&lt;<wbr><span class="type-parameter">State</span>&gt;</span></span> <span class="parameter-name">emit</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    An event handler is responsible for reacting to an incoming <code>Event</code>
and can emit zero or more states via the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a>.
    

  </dd>

          
  <dt id="EventMapper" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></span>&lt;<wbr><span class="type-parameter">Event</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>&gt;</span> Function<span class="signature">(<span class="parameter" id="param-event"><span class="type-annotation">Event</span> <span class="parameter-name">event</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Signature for a function which converts an incoming event
into an outbound stream of events.
Used when defining custom <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a>s.
    

  </dd>

          
  <dt id="EventTransformer" class="callable">
    <span class="name"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></span>&lt;<wbr><span class="type-parameter">Event</span>&gt;<span class="signature">
      <span class="returntype parameter">= <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>&gt;</span> Function<span class="signature">(<span class="parameter" id="param-events"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>&gt;</span></span> <span class="parameter-name">events</span>, </span><span class="parameter" id="param-mapper"><span class="type-annotation"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a><span class="signature">&lt;<wbr><span class="type-parameter">Event</span>&gt;</span></span> <span class="parameter-name">mapper</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    Used to change how events are processed.
By default events are processed concurrently.
    

  </dd>

          
  <dt id="SettingsAppearanceBuilder" class="">
  <span class="name"><a href="settings_appearance/SettingsAppearanceBuilder">SettingsAppearanceBuilder</a></span>
    = <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span>, <span class="type-parameter"><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span>
  
  

</dt>
<dd>
  
  

</dd>


          
  <dt id="SettingsAppearanceConsumer" class="">
  <span class="name"><a href="settings_appearance/SettingsAppearanceConsumer">SettingsAppearanceConsumer</a></span>
    = <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span>, <span class="type-parameter"><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span>
  
  

</dt>
<dd>
  
  

</dd>


          
  <dt id="SettingsAppearanceListener" class="">
  <span class="name"><a href="settings_appearance/SettingsAppearanceListener">SettingsAppearanceListener</a></span>
    = <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span>, <span class="type-parameter"><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>&gt;</span>
  
  

</dt>
<dd>
  
  

</dd>


          
  <dt id="SettingsAppearanceSelector" class="">
  <span class="name"><a href="settings_appearance/SettingsAppearanceSelector">SettingsAppearanceSelector</a></span>&lt;<wbr><span class="type-parameter">T</span>&gt;
    = <a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span>, <span class="type-parameter"><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span>, <span class="type-parameter">T</span>&gt;</span>
  
  

</dt>
<dd>
  
  

</dd>


      </dl>
    </section>

    <section class="summary offset-anchor" id="exceptions">
      <h2>Exceptions / Errors</h2>

      <dl>
        <dt id="ProviderNotFoundException">
  <span class="name "><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></span> 

</dt>
<dd>
  The error that will be thrown if <a href="https://pub.dev/documentation/provider/6.0.5/provider/Provider/of.html">Provider.of</a> fails to find a <a href="https://pub.dev/documentation/provider/6.0.5/provider/Provider-class.html">Provider</a>
as an ancestor of the <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> used.
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
  <li><a href="index">unself_settings_appearance</a></li>
  <li class="self-crumb">settings_appearance library</li>
</ol>


    <h5><span class="package-name">unself_settings_appearance</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="settings_appearance/settings_appearance">settings_appearance</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>settings_appearance library</h5>
    <ol>
      <li class="section-title"><a href="settings_appearance/settings_appearance#classes">Classes</a></li>
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
        <li><a href="settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>
        <li><a href="settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></li>
        <li><a href="settings_appearance/SettingsAppearancePage">SettingsAppearancePage</a></li>
        <li><a href="settings_appearance/SettingsAppearanceSliver">SettingsAppearanceSliver</a></li>
        <li><a href="settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>
        <li><a href="settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>

      <li class="section-title"><a href="settings_appearance/settings_appearance#extensions">Extensions</a></li>
        <li><a href="settings_appearance/Properties">Properties</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>






      <li class="section-title"><a href="settings_appearance/settings_appearance#typedefs">Typedefs</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>
        <li><a href="settings_appearance/SettingsAppearanceBuilder">SettingsAppearanceBuilder</a></li>
        <li><a href="settings_appearance/SettingsAppearanceConsumer">SettingsAppearanceConsumer</a></li>
        <li><a href="settings_appearance/SettingsAppearanceListener">SettingsAppearanceListener</a></li>
        <li><a href="settings_appearance/SettingsAppearanceSelector">SettingsAppearanceSelector</a></li>

      <li class="section-title"><a href="settings_appearance/settings_appearance#exceptions">Exceptions</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>
</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
