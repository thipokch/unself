import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-typedef">AccumulatorCallback</span> typedef 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        <span class="name ">AccumulatorCallback</span> =
     <span class="returntype">void Function<span class="signature">(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-entity"><span class="type-annotation">dynamic</span> <span class="parameter-name">entity</span></span>)</span></span>

    </section>

    

    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">typedef AccumulatorCallback = void Function(
  String name,
  String key,
  dynamic entity,
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
  <li><a href="../index">un_model</a></li>
  <li><a href="../un_model/un_model">un_model</a></li>
  <li class="self-crumb">AccumulatorCallback typedef</li>
</ol>


    <h5>un_model library</h5>
    <ol>
      <li class="section-title"><a href="../un_model/un_model#classes">Classes</a></li>
        <li><a href="../un_model/CustomModule">CustomModule</a></li>
        <li><a href="../un_model/Edge">Edge</a></li>
        <li><a href="../un_model/EdgeSpec">EdgeSpec</a></li>
        <li><a href="../un_model/Entity">Entity</a></li>
        <li><a href="../un_model/ExtractSpec">ExtractSpec</a></li>
        <li><a href="../un_model/FileSpec">FileSpec</a></li>
        <li><a href="../un_model/Flat">Flat</a></li>
        <li><a href="../un_model/IEdge">IEdge</a></li>
        <li><a href="../un_model/IEdgeSpec">IEdgeSpec</a></li>
        <li><a href="../un_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="../un_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="../un_model/INode">INode</a></li>
        <li><a href="../un_model/INodeSpec">INodeSpec</a></li>
        <li><a href="../un_model/JsonExtractSpec">JsonExtractSpec</a></li>
        <li><a href="../un_model/JsonModule">JsonModule</a></li>
        <li><a href="../un_model/JsonRef">JsonRef</a></li>
        <li><a href="../un_model/JsonRefList">JsonRefList</a></li>
        <li><a href="../un_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="../un_model/JsonSchema">JsonSchema</a></li>
        <li><a href="../un_model/JsonTransformSpec">JsonTransformSpec</a></li>
        <li><a href="../un_model/LoadSpec">LoadSpec</a></li>
        <li><a href="../un_model/LocalFileSpec">LocalFileSpec</a></li>
        <li><a href="../un_model/ModuleSpec">ModuleSpec</a></li>
        <li><a href="../un_model/Node">Node</a></li>
        <li><a href="../un_model/NodeSpec">NodeSpec</a></li>
        <li><a href="../un_model/PropSpec">PropSpec</a></li>
        <li><a href="../un_model/Ref">Ref</a></li>
        <li><a href="../un_model/RefList">RefList</a></li>
        <li><a href="../un_model/RetrieveSpec">RetrieveSpec</a></li>
        <li><a href="../un_model/Settings">Settings</a></li>
        <li><a href="../un_model/SlugFrom">SlugFrom</a></li>
        <li><a href="../un_model/Struct">Struct</a></li>
        <li><a href="../un_model/TransformSpec">TransformSpec</a></li>
        <li><a href="../un_model/UngraphLoadSpec">UngraphLoadSpec</a></li>
        <li><a href="../un_model/Union">Union</a></li>
        <li><a href="../un_model/UnionList">UnionList</a></li>
        <li><a href="../un_model/UnpackSpec">UnpackSpec</a></li>
        <li><a href="../un_model/UnpackState">UnpackState</a></li>
        <li><a href="../un_model/ValueFrom">ValueFrom</a></li>
        <li><a href="../un_model/ZipFileSpec">ZipFileSpec</a></li>






      <li class="section-title"><a href="../un_model/un_model#enums">Enums</a></li>
        <li><a href="../un_model/UnpackStep">UnpackStep</a></li>

      <li class="section-title"><a href="../un_model/un_model#typedefs">Typedefs</a></li>
        <li><a href="../un_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="../un_model/DoCallback">DoCallback</a></li>
        <li><a href="../un_model/SchemaFinder">SchemaFinder</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
