import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackAssistantState.errored</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnpackAssistantState.errored</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="errored-param-error">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>
<li><span class="parameter" id="errored-param-stackTrace"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>Assistant has errored.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory UnpackAssistantState.errored({
  required final Object error,
  required final StackTrace stackTrace,
}) = _Errored;</code></pre>
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
  <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState">UnpackAssistantState</a></li>
  <li class="self-crumb">UnpackAssistantState.errored const constructor</li>
</ol>


    <h5>UnpackAssistantState class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/map">map</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/when">when</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
