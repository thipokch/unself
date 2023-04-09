import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">xFile</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></span>
  <span class="name ">xFile</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">XFile get xFile =&gt;
    kIsWeb ? XFile((this as XPlatformFile)._unsafePath) : XFile(path!);</code></pre>
</section>

</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_file</a></li>
  <li><a href="../../un_file/un_file">un_file</a></li>
  <li><a href="../../un_file/XPlatformFileExtension">XPlatformFileExtension</a></li>
  <li class="self-crumb">xFile property</li>
</ol>


    <h5>XPlatformFileExtension extension</h5>
    <ol>




        <li class="section-title"> <a href="../../un_file/XPlatformFileExtension#instance-properties">Properties</a></li>
          <li><a href="../../un_file/XPlatformFileExtension/xFile">xFile</a></li>





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
