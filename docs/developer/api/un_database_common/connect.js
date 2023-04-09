import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">connect</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnection-class.html">DatabaseConnection</a></span>
<span class="name ">connect</span>(<wbr>)

        

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">DatabaseConnection connect() {
  throw UnsupportedError(
      'No suitable database implementation was found on this platform.');
}</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">un_database</a></li>
  <li><a href="../un_database_common/un_database_common">un_database_common</a></li>
  <li class="self-crumb">connect function</li>
</ol>


    <h5>un_database_common library</h5>
    <ol>
      <li class="section-title"><a href="../un_database_common/un_database_common#classes">Classes</a></li>
        <li><a href="../un_database_common/ListConverter">ListConverter</a></li>
        <li><a href="../un_database_common/MapConverter">MapConverter</a></li>





      <li class="section-title"><a href="../un_database_common/un_database_common#functions">Functions</a></li>
        <li><a href="../un_database_common/connect">connect</a></li>



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
