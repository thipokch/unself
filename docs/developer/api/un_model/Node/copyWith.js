import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">copyWith</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/json_annotation/4.8.0/json_annotation/JsonKey-class.html">JsonKey</a>(ignore: true)</li>
    </ol>
  </div>
  <span class="returntype">\$NodeCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../un_model/Node">Node</a></span>&gt;</span></span>
  <span class="name ">copyWith</span>
  <div class="features"><span class="feature">inherited</span></div>

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@JsonKey(ignore: true)
\$NodeCopyWith&lt;Node&gt; get copyWith =&gt; throw _privateConstructorUsedError;</code></pre>
</section>

</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_model</a></li>
  <li><a href="../../un_model/un_model">un_model</a></li>
  <li><a href="../../un_model/Node">Node</a></li>
  <li class="self-crumb">copyWith property</li>
</ol>


    <h5>Node class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/Node#constructors">Constructors</a></li>
          <li><a href="../../un_model/Node/Node.constructor">Node</a></li>
          <li><a href="../../un_model/Node/Node.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../un_model/Node#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../un_model/Node/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../un_model/Node/id">id</a></li>
          <li><a href="../../un_model/Node/labels">labels</a></li>
          <li class="inherited"><a href="../../un_model/Node/properties">properties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../un_model/Node/specSlug">specSlug</a></li>

        <li class="section-title inherited"><a href="../../un_model/Node#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/Node/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_model/Node#operators">Operators</a></li>
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
