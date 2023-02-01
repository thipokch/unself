import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">license_detail</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="LicenseDetailPage">
  <span class="name "><a href="license_detail/LicenseDetailPage">LicenseDetailPage</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="LicenseDetailSliver">
  <span class="name "><a href="license_detail/LicenseDetailSliver">LicenseDetailSliver</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>


    <section class="summary offset-anchor" id="extensions">
      <h2>Extensions</h2>

      <dl>
        <dt id="Flatten">
    <span class="name "><a href="license_detail/Flatten">Flatten</a></span> 

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
  <li><a href="index">unself_license_detail</a></li>
  <li class="self-crumb">license_detail library</li>
</ol>


    <h5><span class="package-name">unself_license_detail</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="license_detail/license_detail">license_detail</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>license_detail library</h5>
    <ol>
      <li class="section-title"><a href="license_detail/license_detail#classes">Classes</a></li>
        <li><a href="license_detail/LicenseDetailPage">LicenseDetailPage</a></li>
        <li><a href="license_detail/LicenseDetailSliver">LicenseDetailSliver</a></li>

      <li class="section-title"><a href="license_detail/license_detail#extensions">Extensions</a></li>
        <li><a href="license_detail/Flatten">Flatten</a></li>







</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
