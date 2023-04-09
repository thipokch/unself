import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unpack_spec</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    





    <section class="summary offset-anchor" id="constants">
      <h2>Constants</h2>

      <dl class="properties">
        <dt id="facebookModules" class="constant">
    <span class="name "><a href="unpack_spec/facebookModules-constant">facebookModules</a></span>
  <span class="signature">→ const <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">ModuleSpec</span>&gt;</span></span>
  

</dt>
<dd>
  
  

    <div>
      <span class="signature"><code>&lt;ModuleSpec&gt;[adsTopics, advertiserDataUse, advertiserContactUpload, advertiserInteraction, externalActivities, externalInstalls, account, inferredTopics]</code></span>
    </div>
</dd>

        <dt id="facebookSpec" class="constant">
    <span class="name "><a href="unpack_spec/facebookSpec-constant">facebookSpec</a></span>
  <span class="signature">→ const UnpackSpec</span>
  

</dt>
<dd>
  
  

    <div>
      <span class="signature"><code>UnpackSpec(name: 'name', fileSpec: FileSpec.zip(), retrieveSpec: RetrieveSpec.localFile(), modules: facebookModules)</code></span>
    </div>
</dd>

        <dt id="unpackSpecs" class="constant">
    <span class="name "><a href="unpack_spec/unpackSpecs-constant">unpackSpecs</a></span>
  <span class="signature">→ const <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>
  

</dt>
<dd>
  
  

    <div>
      <span class="signature"><code>&lt;UnpackSpec&gt;[facebookSpec]</code></span>
    </div>
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
  <li><a href="index">unpack_spec</a></li>
  <li class="self-crumb">unpack_spec library</li>
</ol>


    <h5><span class="package-name">unpack_spec</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unpack_spec/unpack_spec">unpack_spec</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unpack_spec library</h5>
    <ol>



      <li class="section-title"><a href="unpack_spec/unpack_spec#constants">Constants</a></li>
        <li><a href="unpack_spec/facebookModules-constant">facebookModules</a></li>
        <li><a href="unpack_spec/facebookSpec-constant">facebookSpec</a></li>
        <li><a href="unpack_spec/unpackSpecs-constant">unpackSpecs</a></li>





</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
