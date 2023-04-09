import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">modelToEntity</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">EdgeSpecCompanion</span>
<span class="name ">modelToEntity</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="modelToEntity-param-model"><span class="type-annotation">EdgeSpec</span> <span class="parameter-name">model</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static EdgeSpecCompanion modelToEntity(EdgeSpec model) =&gt;
    EdgeSpecCompanion.insert(
      id: model.id != null ? Value(model.id!) : const Value.absent(),
      slug: model.slug,
      name: model.name,
      type: model.type,
      sourceNodeSpecId: model.sourceNodeSpecId,
      targetNodeSpecId: model.targetNodeSpecId,
      propSpecs: jsonEncode(model.propSpecs),
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
  <li><a href="../../index">ungraph_repository</a></li>
  <li><a href="../../ungraph_repository/ungraph_repository">ungraph_repository</a></li>
  <li><a href="../../ungraph_repository/EdgeSpecMapper">EdgeSpecMapper</a></li>
  <li class="self-crumb">modelToEntity static method</li>
</ol>


    <h5>EdgeSpecMapper class</h5>
    <ol>



        <li class="section-title inherited">
          <a href="../../ungraph_repository/EdgeSpecMapper#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../ungraph_repository/EdgeSpecMapper#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_repository/EdgeSpecMapper#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_repository/EdgeSpecMapper#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_repository/EdgeSpecMapper/entityToModel">entityToModel</a></li>
          <li><a href="../../ungraph_repository/EdgeSpecMapper/modelToDao">modelToDao</a></li>
          <li><a href="../../ungraph_repository/EdgeSpecMapper/modelToEntity">modelToEntity</a></li>
          <li><a href="../../ungraph_repository/EdgeSpecMapper/modelToTable">modelToTable</a></li>

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
