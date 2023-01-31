import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_model</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="Collection">
  <span class="name "><a href="../unself_model/Collection/Collection">Collection</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Document">
  <span class="name "><a href="../unself_model/Document/Document">Document</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Field">
  <span class="name "><a href="../unself_model/Field/Field">Field</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="User">
  <span class="name "><a href="../unself_model/User/User">User</a></span> 

</dt>
<dd>
  User description
</dd>

      </dl>
    </section>






    <section class="summary offset-anchor" id="enums">
      <h2>Enums</h2>

      <dl>
        <dt id="FieldType">
  <span class="name "><a href="../unself_model/FieldType">FieldType</a></span> 

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
  <li><a href="../index">unself_model</a></li>
  <li class="self-crumb">unself_model library</li>
</ol>


    <h5><span class="package-name">unself_model</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="../unself_model/unself_model">unself_model</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_model library</h5>
    <ol>
      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>
        <li><a href="../unself_model/Collection/Collection">Collection</a></li>
        <li><a href="../unself_model/Document/Document">Document</a></li>
        <li><a href="../unself_model/Field/Field">Field</a></li>
        <li><a href="../unself_model/User/User">User</a></li>






      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>
        <li><a href="../unself_model/FieldType">FieldType</a></li>


</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
