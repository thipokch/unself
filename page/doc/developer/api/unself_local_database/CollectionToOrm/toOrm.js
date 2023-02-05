import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toOrm&lt;<wbr><span class="type-parameter">D</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_local_database/CollectionOrm">CollectionOrm</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></span>
<span class="name ">toOrm</span>&lt;<wbr><span class="type-parameter">D</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="toOrm-param-undb"><span class="type-annotation"><a href="../../unself_local_database/LocalDatabase">LocalDatabase</a></span> <span class="parameter-name">undb</span>, </span></li>
<li><span class="parameter" id="toOrm-param-columns"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">columns</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">CollectionOrm&lt;D&gt; toOrm&lt;D&gt;(
        LocalDatabase undb, List&lt;GeneratedColumn&gt; columns) =&gt;
    CollectionOrm(
      undb,
      id,
      columns,
    );</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>
  <li class="self-crumb">toOrm&lt;<wbr><span class="type-parameter">D</span>&gt; method</li>
</ol>


    <h5>CollectionToOrm extension</h5>
    <ol>





        <li class="section-title"><a href="../../unself_local_database/CollectionToOrm#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/CollectionToOrm/toDomain">toDomain</a></li>
          <li><a href="../../unself_local_database/CollectionToOrm/toOrm">toOrm</a></li>




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
