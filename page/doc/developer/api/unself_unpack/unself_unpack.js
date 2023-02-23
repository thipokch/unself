import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_unpack</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="ArchiveExport">
  <span class="name "><a href="unself_unpack/ArchiveExport">ArchiveExport</a></span> 

</dt>
<dd>
  <a href="unself_unpack/ArchiveExport">ArchiveExport</a> unpacks archive files and collect metadata.
</dd>

        <dt id="Export">
  <span class="name "><a href="unself_unpack/Export">Export</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  An interface for <a href="unself_unpack/Export">Export</a>
</dd>

        <dt id="Import">
  <span class="name "><a href="unself_unpack/Import">Import</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>, <span class="type-parameter">O</span>&gt;</span></span> 

</dt>
<dd>
  An interface for Input
</dd>

        <dt id="IUnpackService">
  <span class="name "><a href="unself_unpack/IUnpackService">IUnpackService</a></span> 

</dt>
<dd>
  An interface for Unpack
</dd>

        <dt id="UnpackService">
  <span class="name "><a href="unself_unpack/UnpackService">UnpackService</a></span> 

</dt>
<dd>
  <a href="unself_unpack/UnpackService">UnpackService</a> is a service that unpacks data from a file.
</dd>

        <dt id="ZipImport">
  <span class="name "><a href="unself_unpack/ZipImport">ZipImport</a></span> 

</dt>
<dd>
  <a href="unself_unpack/ZipImport">ZipImport</a> unpacks archive files and collect metadata.
</dd>

      </dl>
    </section>




    <section class="summary offset-anchor" id="properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="facebookMapping" class="property">
  <span class="name"><a href="unself_unpack/facebookMapping">facebookMapping</a></span>
  <span class="signature">→ ArchiveFormat</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

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
  <li><a href="index">unself_unpack</a></li>
  <li class="self-crumb">unself_unpack library</li>
</ol>


    <h5><span class="package-name">unself_unpack</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unself_unpack/unself_unpack">unself_unpack</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="unself_unpack/ArchiveExport">ArchiveExport</a></li>
        <li><a href="unself_unpack/Export">Export</a></li>
        <li><a href="unself_unpack/Import">Import</a></li>
        <li><a href="unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="unself_unpack/UnpackService">UnpackService</a></li>
        <li><a href="unself_unpack/ZipImport">ZipImport</a></li>




      <li class="section-title"><a href="unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="unself_unpack/facebookMapping">facebookMapping</a></li>




</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
