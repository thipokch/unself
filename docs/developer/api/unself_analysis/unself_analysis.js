import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_analysis</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    











  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="index">unself_analysis</a></li>
  <li class="self-crumb">unself_analysis library</li>
</ol>


    <h5><span class="package-name">unself_analysis</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unself_analysis/unself_analysis">unself_analysis</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_analysis library</h5>
    <ol>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
