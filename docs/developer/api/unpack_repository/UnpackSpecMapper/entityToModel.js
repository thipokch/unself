import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">entityToModel</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">UnpackSpec</span>
<span class="name ">entityToModel</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="entityToModel-param-data"><span class="type-annotation">UnpackSpecData</span> <span class="parameter-name">data</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static UnpackSpec entityToModel(UnpackSpecData data) =&gt; UnpackSpec(
      id: data.id,
      name: data.name,
      fileSpec: FileSpec.fromJson(
        jsonDecode(data.fileSpec),
      ),
      retrieveSpec: RetrieveSpec.fromJson(
        jsonDecode(data.retrieveSpec),
      ),
      modules: (jsonDecode(data.modules) as Iterable)
          .map((_) =&gt; ModuleSpec.fromJson(_)),
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
  <li><a href="../../index">unpack_repository</a></li>
  <li><a href="../../unpack_repository/unpack_repository">unpack_repository</a></li>
  <li><a href="../../unpack_repository/UnpackSpecMapper">UnpackSpecMapper</a></li>
  <li class="self-crumb">entityToModel static method</li>
</ol>


    <h5>UnpackSpecMapper class</h5>
    <ol>



        <li class="section-title inherited">
          <a href="../../unpack_repository/UnpackSpecMapper#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unpack_repository/UnpackSpecMapper#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unpack_repository/UnpackSpecMapper#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unpack_repository/UnpackSpecMapper#static-methods">Static methods</a></li>
          <li><a href="../../unpack_repository/UnpackSpecMapper/entityToModel">entityToModel</a></li>
          <li><a href="../../unpack_repository/UnpackSpecMapper/modelToEntity">modelToEntity</a></li>

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
