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
<span class="name ">onEvent</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="onEvent-param-event"><span class="type-annotation"><a href="../../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></span> <span class="parameter-name">event</span></span></li>
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
void onEvent(event) {
  // TODO: implement analytics here
  log("\$runtimeType - event : \$event");
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
  <li><a href="../../index">unself_unpack_assistant</a></li>
  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>
  <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc">UnpackAssistantBloc</a></li>
  <li class="self-crumb">onEvent method</li>
</ol>


    <h5>UnpackAssistantBloc class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc.constructor">UnpackAssistantBloc</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack_assistant/UnpackAssistantBloc#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/isClosed.html">isClosed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/state.html">state</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/stream.html">stream</a></li>

        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/add.html">add</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/addError.html">addError</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/close.html">close</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/emit.html">emit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/on.html">on</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase/onChange.html">onChange</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/onError">onError</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantBloc/onEvent">onEvent</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc/onTransition.html">onTransition</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantBloc#operators">Operators</a></li>
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
