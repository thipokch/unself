import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">fromSql</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">T</span>&gt;</span></span>
<span class="name ">fromSql</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="fromSql-param-fromDb"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">fromDb</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Maps a column from the database back to Dart.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Map&lt;String, T&gt; fromSql(String fromDb) =&gt;
    Map&lt;String, T&gt;.from(jsonDecode(fromDb) ?? {});</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">ungraph_database</a></li>
  <li><a href="../../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li><a href="../../ungraph_database/MapConverter">MapConverter<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>
  <li class="self-crumb">fromSql method</li>
</ol>


    <h5>MapConverter class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/MapConverter#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/MapConverter/MapConverter.constructor">MapConverter</a></li>


        <li class="section-title inherited">
          <a href="../../ungraph_database/MapConverter#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../ungraph_database/MapConverter#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/MapConverter/fromSql">fromSql</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/MapConverter/toSql">toSql</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/MapConverter#operators">Operators</a></li>
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
