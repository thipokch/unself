import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">normalizeRef</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype">dynamic</span>
<span class="name ">normalizeRef</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="normalizeRef-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span></li>
<li><span class="parameter" id="normalizeRef-param-define"><span class="type-annotation">IJsonSchemaRef?</span> <span class="parameter-name">define</span>, </span></li>
<li><span class="parameter" id="normalizeRef-param-find"><span class="type-annotation">SchemaFinder</span> <span class="parameter-name">find</span>, </span></li>
<li><span class="parameter" id="normalizeRef-param-accumulator"><span class="type-annotation">AccumulatorCallback</span> <span class="parameter-name">accumulator</span></span></li>
</ol>)

        

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">dynamic /* List&lt;String&gt; / String */ normalizeRef(
  dynamic json,
  IJsonSchemaRef? define,
  SchemaFinder find,
  AccumulatorCallback accumulator,
) {
  if (define is JsonRefList &amp;&amp; json is List) {
    final ids = define.doCallback(
      json,
      (nextJson, nextScheme) {
        final entity = nextScheme.getScheme(nextJson, find);
        final id = normalize(
          nextJson is Map&lt;String, dynamic&gt; ? nextJson : {'@value': nextJson},
          entity,
          accumulator,
          find,
        );
        return nextScheme.useId(id, entity);
      },
    );
    return ids;
  } else if (define is JsonRef) {
    final nextScheme = define.getScheme(json, find);
    final id = normalize(json is Map&lt;String, dynamic&gt; ? json : {'@value': json},
        nextScheme, accumulator, find);

    return define.useId(id, nextScheme);
  }

  throw UnimplementedError();
}</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unpack</a></li>
  <li><a href="../unpack/unpack">unpack</a></li>
  <li class="self-crumb">normalizeRef function</li>
</ol>


    <h5>unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unpack/unpack#classes">Classes</a></li>
        <li><a href="../unpack/ExtractJson">ExtractJson</a></li>
        <li><a href="../unpack/IExtract">IExtract</a></li>
        <li><a href="../unpack/IFile">IFile</a></li>
        <li><a href="../unpack/ILoad">ILoad</a></li>
        <li><a href="../unpack/IRetrieve">IRetrieve</a></li>
        <li><a href="../unpack/ITransform">ITransform</a></li>
        <li><a href="../unpack/IUnpack">IUnpack</a></li>
        <li><a href="../unpack/JsonNormalizer">JsonNormalizer</a></li>
        <li><a href="../unpack/LoadUngraph">LoadUngraph</a></li>
        <li><a href="../unpack/ModuleComplete">ModuleComplete</a></li>
        <li><a href="../unpack/ModuleError">ModuleError</a></li>
        <li><a href="../unpack/ModuleExtract">ModuleExtract</a></li>
        <li><a href="../unpack/ModuleFile">ModuleFile</a></li>
        <li><a href="../unpack/ModuleInitial">ModuleInitial</a></li>
        <li><a href="../unpack/ModuleLoad">ModuleLoad</a></li>
        <li><a href="../unpack/Moduler">Moduler</a></li>
        <li><a href="../unpack/ModuleState">ModuleState</a></li>
        <li><a href="../unpack/ModuleTransform">ModuleTransform</a></li>
        <li><a href="../unpack/PatternConverter">PatternConverter</a></li>
        <li><a href="../unpack/RetrieveLocalFile">RetrieveLocalFile</a></li>
        <li><a href="../unpack/TransformJson">TransformJson</a></li>
        <li><a href="../unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unpack/XFileConverter">XFileConverter</a></li>
        <li><a href="../unpack/ZipFile">ZipFile</a></li>

      <li class="section-title"><a href="../unpack/unpack#extensions">Extensions</a></li>
        <li><a href="../unpack/PatternEquality">PatternEquality</a></li>


      <li class="section-title"><a href="../unpack/unpack#constants">Constants</a></li>
        <li><a href="../unpack/jsonTypeKey-constant">jsonTypeKey</a></li>


      <li class="section-title"><a href="../unpack/unpack#functions">Functions</a></li>
        <li><a href="../unpack/flatten">flatten</a></li>
        <li><a href="../unpack/iFromJson">iFromJson</a></li>
        <li><a href="../unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="../unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="../unpack/mapAccumulator">mapAccumulator</a></li>
        <li><a href="../unpack/normalize">normalize</a></li>
        <li><a href="../unpack/normalizeRef">normalizeRef</a></li>

      <li class="section-title"><a href="../unpack/unpack#enums">Enums</a></li>
        <li><a href="../unpack/ModuleStep">ModuleStep</a></li>
        <li><a href="../unpack/Position">Position</a></li>

      <li class="section-title"><a href="../unpack/unpack#typedefs">Typedefs</a></li>
        <li><a href="../unpack/Accumulator">Accumulator</a></li>
        <li><a href="../unpack/IFromJson">IFromJson</a></li>

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
