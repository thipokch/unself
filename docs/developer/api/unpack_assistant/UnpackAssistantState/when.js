import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">when</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="when-param-initial">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>
), </span></li>
<li><span class="parameter" id="when-param-apps"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">apps</span>(<ol class="parameter-list"><li><span class="parameter" id="param-apps"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">apps</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="when-param-archive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">archive</span>(<ol class="parameter-list"></ol>
), </span></li>
<li><span class="parameter" id="when-param-data"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">data</span>(<ol class="parameter-list"><li><span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="when-param-processing"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">processing</span>(<ol class="parameter-list"><li><span class="parameter" id="param-progress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">progress</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="when-param-completed"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">completed</span>(<ol class="parameter-list"></ol>
), </span></li>
<li><span class="parameter" id="when-param-errored"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>
<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>
</ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult when&lt;TResult extends Object?&gt;({
  required TResult Function() initial,
  required TResult Function(List&lt;String&gt; apps) apps,
  required TResult Function() archive,
  required TResult Function(List&lt;String&gt; data) data,
  required TResult Function(int progress) processing,
  required TResult Function() completed,
  required TResult Function(Object error, StackTrace stackTrace) errored,
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
  <li class="self-crumb">when&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
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
