import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">un_license</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="ILicenseService">
  <span class="name "><a href="un_license/ILicenseService">ILicenseService</a></span> 

</dt>
<dd>
  An interface for <a href="un_license/LicenseService">LicenseService</a>
</dd>

        <dt id="LicenseData">
  <span class="name "><a href="un_license/LicenseData">LicenseData</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="LicenseService">
  <span class="name "><a href="un_license/LicenseService">LicenseService</a></span> 

</dt>
<dd>
  <a href="un_license/LicenseService">LicenseService</a> description
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
  <li><a href="index">un_license</a></li>
  <li class="self-crumb">un_license library</li>
</ol>


    <h5><span class="package-name">un_license</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="un_license/un_license">un_license</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>un_license library</h5>
    <ol>
      <li class="section-title"><a href="un_license/un_license#classes">Classes</a></li>
        <li><a href="un_license/ILicenseService">ILicenseService</a></li>
        <li><a href="un_license/LicenseData">LicenseData</a></li>
        <li><a href="un_license/LicenseService">LicenseService</a></li>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
