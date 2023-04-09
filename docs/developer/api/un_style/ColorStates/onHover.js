import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">onHover</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a></span>
  <span class="name ">onHover</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Color get onHover =&gt; withOpacity(UnColorStates.hover);</code></pre>
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
  <li><a href="../../index">un_style</a></li>
  <li><a href="../../un_style/un_style">un_style</a></li>
  <li><a href="../../un_style/ColorStates">ColorStates</a></li>
  <li class="self-crumb">onHover property</li>
</ol>


    <h5>ColorStates extension</h5>
    <ol>




        <li class="section-title"> <a href="../../un_style/ColorStates#instance-properties">Properties</a></li>
          <li><a href="../../un_style/ColorStates/onDisabled">onDisabled</a></li>
          <li><a href="../../un_style/ColorStates/onDisabledContent">onDisabledContent</a></li>
          <li><a href="../../un_style/ColorStates/onDragged">onDragged</a></li>
          <li><a href="../../un_style/ColorStates/onFocus">onFocus</a></li>
          <li><a href="../../un_style/ColorStates/onHover">onHover</a></li>
          <li><a href="../../un_style/ColorStates/onPressed">onPressed</a></li>





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
