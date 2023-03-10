import React from 'react';

export default function RawHtml() {
  const data = `<main>

<div id="dartdoc-main-content" class="main-content">
    <div>
<h1><span class="kind-class">CollectionToOrm</span> extension 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    

    <section>
      <dl class="dl-horizontal">
        <dt>on</dt>
        <dd>
          <ul class="comma-separated clazz-relationships">
              <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>
          </ul>
        </dd>
      </dl>
      


    </section>


    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="toDomain" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionToOrm/toDomain">toDomain</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ Collection</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toOrm" class="callable">
  <span class="name"><a href="../unself_local_database/CollectionToOrm/toOrm">toOrm</a></span><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="toOrm-param-undb"><span class="type-annotation"><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></span> <span class="parameter-name">undb</span>, </span><span class="parameter" id="toOrm-param-columns"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">columns</span></span>)
    <span class="returntype parameter">→ <a href="../unself_local_database/CollectionOrm">CollectionOrm</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span></span>
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
  <li><a href="../index">unself_local_database</a></li>
  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li class="self-crumb">CollectionToOrm extension</li>
</ol>


    <h5>unself_local_database library</h5>
    <ol>
      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>
        <li><a href="../unself_local_database/\$CollectionTable">\$CollectionTable</a></li>
        <li><a href="../unself_local_database/\$FieldTable">\$FieldTable</a></li>
        <li><a href="../unself_local_database/Collection">Collection</a></li>
        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>
        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>
        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>
        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>
        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>
        <li><a href="../unself_local_database/Field">Field</a></li>
        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>
        <li><a href="../unself_local_database/FieldData">FieldData</a></li>
        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>
        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>
        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>

      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>
        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>
        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>
        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>
        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>




      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>
        <li><a href="../unself_local_database/connect">connect</a></li>



</ol>

</div>

<div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>





        <li class="section-title"><a href="../unself_local_database/CollectionToOrm#instance-methods">Methods</a></li>
          <li><a href="../unself_local_database/CollectionToOrm/toDomain">toDomain</a></li>
          <li><a href="../unself_local_database/CollectionToOrm/toOrm">toOrm</a></li>




</ol>

</div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
