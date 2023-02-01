import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">license_list</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="LicenseListPage">
  <span class="name "><a href="license_list/LicenseListPage">LicenseListPage</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="LicenseListSliver">
  <span class="name "><a href="license_list/LicenseListSliver">LicenseListSliver</a></span> 

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
  <li><a href="index">unself_license_list</a></li>
  <li class="self-crumb">license_list library</li>
</ol>


    <h5><span class="package-name">unself_license_list</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="license_list/license_list">license_list</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>license_list library</h5>
    <ol>
      <li class="section-title"><a href="license_list/license_list#classes">Classes</a></li>
        <li><a href="license_list/LicenseListPage">LicenseListPage</a></li>
        <li><a href="license_list/LicenseListSliver">LicenseListSliver</a></li>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
