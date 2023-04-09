import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unpack_repository</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="IUnpackRepository">
  <span class="name "><a href="unpack_repository/IUnpackRepository">IUnpackRepository</a></span> 

</dt>
<dd>
  An interface for UnpackRepository
</dd>

        <dt id="UnpackRepository">
  <span class="name "><a href="unpack_repository/UnpackRepository">UnpackRepository</a></span> 

</dt>
<dd>
  UnpackRepository description
</dd>

        <dt id="UnpackSpecMapper">
  <span class="name "><a href="unpack_repository/UnpackSpecMapper">UnpackSpecMapper</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="UnpackStateMapper">
  <span class="name "><a href="unpack_repository/UnpackStateMapper">UnpackStateMapper</a></span> 

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
  <li><a href="index">unpack_repository</a></li>
  <li class="self-crumb">unpack_repository library</li>
</ol>


    <h5><span class="package-name">unpack_repository</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unpack_repository/unpack_repository">unpack_repository</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unpack_repository library</h5>
    <ol>
      <li class="section-title"><a href="unpack_repository/unpack_repository#classes">Classes</a></li>
        <li><a href="unpack_repository/IUnpackRepository">IUnpackRepository</a></li>
        <li><a href="unpack_repository/UnpackRepository">UnpackRepository</a></li>
        <li><a href="unpack_repository/UnpackSpecMapper">UnpackSpecMapper</a></li>
        <li><a href="unpack_repository/UnpackStateMapper">UnpackStateMapper</a></li>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
