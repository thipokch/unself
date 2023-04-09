import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toDomain</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">Field</span>
<span class="name ">toDomain</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toDomain-param-collection">{<span>required</span> <span class="type-annotation">Collection</span> <span class="parameter-name">collection</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Field toDomain({
  required Collection collection,
}) =&gt;
    Field(
      id: id,
      created: created,
      updated: updated,
      name: name,
      type: type,
      system: system,
      required: required,
      unique: unique,
      collection: collection,
      extra: jsonDecode(extra),
    );</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/FieldToOrm">FieldToOrm</a></li>
  <li class="self-crumb">toDomain method</li>
</ol>


    <h5>FieldToOrm extension</h5>
    <ol>





        <li class="section-title"><a href="../../unself_local_database/FieldToOrm#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/FieldToOrm/toDomain">toDomain</a></li>
          <li><a href="../../unself_local_database/FieldToOrm/toOrm">toOrm</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
