import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Initial</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-apps"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Apps</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-archive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Archive</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-data"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Data</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-processing"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Processing</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-completed"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Completed</span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-errored"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation">_Errored</span> <span class="parameter-name">value</span></span></li>
</ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult map&lt;TResult extends Object?&gt;({
  required TResult Function(_Initial value) initial,
  required TResult Function(_Apps value) apps,
  required TResult Function(_Archive value) archive,
  required TResult Function(_Data value) data,
  required TResult Function(_Processing value) processing,
  required TResult Function(_Completed value) completed,
  required TResult Function(_Errored value) errored,
}) =&gt;
    throw _privateConstructorUsedError;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unpack_assistant</a></li>
  <li><a href="../../unpack_assistant/unpack_assistant">unpack_assistant</a></li>
  <li><a href="../../unpack_assistant/UnpackAssistantState">UnpackAssistantState</a></li>
  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>UnpackAssistantState class</h5>
    <ol>

        <li class="section-title"><a href="../../unpack_assistant/UnpackAssistantState#constructors">Constructors</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.apps">apps</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.archive">archive</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.completed">completed</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.data">data</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.errored">errored</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.initial">initial</a></li>
          <li><a href="../../unpack_assistant/UnpackAssistantState/UnpackAssistantState.processing">processing</a></li>


        <li class="section-title inherited">
          <a href="../../unpack_assistant/UnpackAssistantState#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unpack_assistant/UnpackAssistantState#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/map">map</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/when">when</a></li>
          <li class="inherited"><a href="../../unpack_assistant/UnpackAssistantState/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unpack_assistant/UnpackAssistantState#operators">Operators</a></li>
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
