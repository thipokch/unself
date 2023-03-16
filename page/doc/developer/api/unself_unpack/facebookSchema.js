import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-top-level-property">facebookSchema</span> top-level property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

        <section class="multi-line-signature">
          
          ArchiveSchema
          <span class="name ">facebookSchema</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">final facebookSchema = ArchiveSchema(
  id: 'facebook@0.0.1',
  created: DateTime(0),
  updated: DateTime(0),
  appId: 'facebook',
  version: Version(0, 0, 1),
  constraint: VersionConstraint.compatibleWith(Version(0, 0, 1)),
  // format: ArchiveFileFormat.zipJson,
  part: const [
    _adsTopics,
    _advertiserDataUse,
    _advertiserContactUpload,
    _advertiserInteraction,
    _externalActivities,
    _externalInstalls,
    _account,
    _inferredTopics,
  ],
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
  <li><a href="../index">unself_unpack</a></li>
  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li class="self-crumb">facebookSchema property</li>
</ol>


    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>
        <li><a href="../unself_unpack/Export">Export</a></li>
        <li><a href="../unself_unpack/Import">Import</a></li>
        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="../unself_unpack/Normalize">Normalize</a></li>
        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>




      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="../unself_unpack/facebookSchema">facebookSchema</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#functions">Functions</a></li>
        <li><a href="../unself_unpack/flatten">flatten</a></li>
        <li><a href="../unself_unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="../unself_unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="../unself_unpack/mapAccumulator">mapAccumulator</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#enums">Enums</a></li>
        <li><a href="../unself_unpack/Position">Position</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#typedefs">Typedefs</a></li>
        <li><a href="../unself_unpack/Accumulator">Accumulator</a></li>

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
