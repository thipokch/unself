import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Activity.fromJson</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">Activity.fromJson</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>Creates a <a href="../../unself_model/Activity">Activity</a> from Json map</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory Activity.fromJson(Map&lt;String, dynamic&gt; data) =&gt;
    _\$ActivityFromJson(data);</code></pre>
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
  <li><a href="../../unself_model/Activity">Activity</a></li>
  <li class="self-crumb">Activity.fromJson factory constructor</li>
</ol>


    <h5>Activity class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/Activity#constructors">Constructors</a></li>
          <li><a href="../../unself_model/Activity/Activity.constructor">Activity</a></li>
          <li><a href="../../unself_model/Activity/Activity.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_model/Activity#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/Activity/accountId">accountId</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/appId">appId</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/archiveId">archiveId</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/id">id</a></li>
          <li><a href="../../unself_model/Activity/labels">labels</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/source">source</a></li>
          <li><a href="../../unself_model/Activity/sourceId">sourceId</a></li>
          <li><a href="../../unself_model/Activity/targetId">targetId</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/timestamp">timestamp</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/type">type</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/updated">updated</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Activity#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/Activity/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Activity#operators">Operators</a></li>
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
