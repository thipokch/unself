import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">version</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="../../unself_model/JsonVersion">JsonVersion</a>()</li>
    </ol>
  </div>
  <span class="returntype"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span>
  <span class="name ">version</span>
  <div class="features"><span class="feature">inherited</span></div>

</section>


<section class="desc markdown">
  <p><a href="../../unself_model/Mapping/version">version</a> is the revision version of the <a href="../../unself_model/Mapping">Mapping</a>.
See <a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a> from pub_semver for more information.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@JsonVersion()
Version get version =&gt; throw _privateConstructorUsedError;</code></pre>
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
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/Mapping">Mapping</a></li>
  <li class="self-crumb">version property</li>
</ol>


    <h5>Mapping class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/Mapping#constructors">Constructors</a></li>
          <li><a href="../../unself_model/Mapping/Mapping.constructor">Mapping</a></li>
          <li><a href="../../unself_model/Mapping/Mapping.fromJson">fromJson</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/Mapping#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/Mapping/app">app</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/constraint">constraint</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/id">id</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/updated">updated</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/version">version</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Mapping#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/Mapping/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Mapping#operators">Operators</a></li>
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
