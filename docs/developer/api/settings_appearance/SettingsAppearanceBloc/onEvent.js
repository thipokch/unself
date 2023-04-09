import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">onEvent</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype">void</span>
<span class="name ">onEvent</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="onEvent-param-event"><span class="type-annotation"><a href="../../settings_appearance/SettingsAppearanceEvent">SettingsAppearanceEvent</a></span> <span class="parameter-name">event</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Called whenever an <code>event</code> is <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a>ed to the <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a>.
A great spot to add logging/analytics at the individual <a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a> level.</p>
<p><strong>Note: <code>super.onEvent</code> should always be called first.</strong></p>
<pre class="language-dart"><code class="language-dart">@override
void onEvent(Event event) {
  // Always call super.onEvent with the current event
  super.onEvent(event);

  // Custom onEvent logic goes here
}
</code></pre>
<p>See also:</p>
<ul>
<li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver/onEvent.html">BlocObserver.onEvent</a> for observing events globally.</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
void onEvent(SettingsAppearanceEvent event) {
  event.mapOrNull(
      setThemeMode: (_) =&gt; _analyticService?.trackEvent("set_theme_mode"));
  super.onEvent(event);
}</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_settings_appearance</a></li>
  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>
  <li><a href="../../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></li>
  <li class="self-crumb">onEvent method</li>
</ol>


    <h5>SettingsAppearanceBloc class</h5>
    <ol>

        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceBloc#constructors">Constructors</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceBloc/SettingsAppearanceBloc.constructor">SettingsAppearanceBloc</a></li>


        <li class="section-title inherited">
          <a href="../../settings_appearance/SettingsAppearanceBloc#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>

        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceBloc#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceBloc/close">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onError.html">onError</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceBloc/onEvent">onEvent</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceBloc/onSubscriptionData">onSubscriptionData</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceBloc#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
