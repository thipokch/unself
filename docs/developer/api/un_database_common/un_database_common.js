import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">un_database_common</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="ListConverter">
  <span class="name "><a href="un_database_common/ListConverter">ListConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd>
  
</dd>

        <dt id="MapConverter">
  <span class="name "><a href="un_database_common/MapConverter">MapConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>





    <section class="summary offset-anchor" id="functions">
      <h2>Functions</h2>

      <dl class="callables">
        <dt id="connect" class="callable">
  <span class="name"><a href="un_database_common/connect">connect</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DatabaseConnection-class.html">DatabaseConnection</a></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

      </dl>
    </section>




  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="index">un_database</a></li>
  <li class="self-crumb">un_database_common library</li>
</ol>


    <h5><span class="package-name">un_database</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="un_database/un_database">un_database</a></li>
      <li><a href="un_database_common/un_database_common">un_database_common</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>un_database_common library</h5>
    <ol>
      <li class="section-title"><a href="un_database_common/un_database_common#classes">Classes</a></li>
        <li><a href="un_database_common/ListConverter">ListConverter</a></li>
        <li><a href="un_database_common/MapConverter">MapConverter</a></li>





      <li class="section-title"><a href="un_database_common/un_database_common#functions">Functions</a></li>
        <li><a href="un_database_common/connect">connect</a></li>



</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
