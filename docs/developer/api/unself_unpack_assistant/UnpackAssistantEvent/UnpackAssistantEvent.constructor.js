import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnpackAssistantEvent.selectArchive</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnpackAssistantEvent.selectArchive</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="selectArchive-param-xFile">{<span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span> <span class="parameter-name">xFile</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>User selected the archive file to be imported</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory UnpackAssistantEvent.selectArchive({
  required XFile xFile,
}) = _SelectArchive;</code></pre>
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
  <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent">UnpackAssistantEvent</a></li>
  <li class="self-crumb">UnpackAssistantEvent.selectArchive const constructor</li>
</ol>


    <h5>UnpackAssistantEvent class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>
          <li><a href="../../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>
          <li class="inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack_assistant/UnpackAssistantEvent#operators">Operators</a></li>
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
