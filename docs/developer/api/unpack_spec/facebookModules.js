import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-top-level-property">facebookModules</span> top-level constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">ModuleSpec</span>&gt;</span>
          const <span class="name ">facebookModules</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const facebookModules = &lt;ModuleSpec&gt;[
  adsTopics,
  advertiserDataUse,
  advertiserContactUpload,
  advertiserInteraction,
  externalActivities,
  externalInstalls,
  account,
  inferredTopics,
];</code></pre>
</section>



  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unpack_spec</a></li>
  <li><a href="../unpack_spec/unpack_spec">unpack_spec</a></li>
  <li class="self-crumb">facebookModules constant</li>
</ol>


    <h5>unpack_spec library</h5>
    <ol>



      <li class="section-title"><a href="../unpack_spec/unpack_spec#constants">Constants</a></li>
        <li><a href="../unpack_spec/facebookModules-constant">facebookModules</a></li>
        <li><a href="../unpack_spec/facebookSpec-constant">facebookSpec</a></li>
        <li><a href="../unpack_spec/unpackSpecs-constant">unpackSpecs</a></li>





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
