import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">App</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">App</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>@<a href="../../unself_model/JsonString">JsonString</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-created"><span>@<a href="../../unself_model/JsonDateTime">JsonDateTime</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>
<li><span class="parameter" id="-param-updated"><span>@<a href="../../unself_model/JsonDateTime">JsonDateTime</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>
<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p><a href="../../unself_model/App">App</a> is a software application or services that the user uses.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory App({
  @JsonString() required String id,
  @JsonDateTime() required DateTime created,
  @JsonDateTime() required DateTime updated,

  /// [name] is the name of the [App].
  required String name,

  /// [extra] is a map of additional properties.
  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,
}) = _App;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/App">App</a></li>
  <li class="self-crumb">App const constructor</li>
</ol>


    <h5>App class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/App#constructors">Constructors</a></li>
          <li><a href="../../unself_model/App/App.constructor">App</a></li>
          <li><a href="../../unself_model/App/App.fromJson">fromJson</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/App#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/App/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/App/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/App/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/App/id">id</a></li>
          <li class="inherited"><a href="../../unself_model/App/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/App/updated">updated</a></li>

        <li class="section-title inherited"><a href="../../unself_model/App#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/App/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/App#operators">Operators</a></li>
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
