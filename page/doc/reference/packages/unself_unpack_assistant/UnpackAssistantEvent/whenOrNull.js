import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult?</span>
<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<ol class="parameter-list"><li><span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<ol class="parameter-list"><li><span class="parameter" id="param-file"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-io/File-class.html">File</a></span> <span class="parameter-name">file</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<ol class="parameter-list"><li><span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>(<ol class="parameter-list"></ol>
)?}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult? whenOrNull&lt;TResult extends Object?&gt;({
  TResult? Function(String app)? selectApp,
  TResult? Function(File file)? selectArchive,
  TResult? Function(List&lt;String&gt; data)? selectData,
  TResult? Function()? start,
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
  <li><a href="../../index">unself_unpack_assistant</a></li>
  <li><a href="../../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>
  <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent">UnpackAssistantEvent</a></li>
  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>UnpackAssistantEvent class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#operators">Operators</a></li>
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
