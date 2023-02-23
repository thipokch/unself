import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">created</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
          <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a>
          <span class="name ">created</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        
<section class="desc markdown">
  <p><a href="../../unself_model/Edge/created">created</a> is the date and time when the inheriting model was created inside unself app.</p>
</section>

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
final DateTime created;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/Edge">Edge</a></li>
  <li class="self-crumb">created property</li>
</ol>


    <h5>Edge class</h5>
    <ol>



        <li class="section-title">
          <a href="../../unself_model/Edge#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_model/Edge/archiveId">archiveId</a></li>
          <li><a href="../../unself_model/Edge/created">created</a></li>
          <li><a href="../../unself_model/Edge/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_model/Edge/id">id</a></li>
          <li><a href="../../unself_model/Edge/labels">labels</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_model/Edge/sourceId">sourceId</a></li>
          <li><a href="../../unself_model/Edge/targetId">targetId</a></li>
          <li><a href="../../unself_model/Edge/updated">updated</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Edge#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Edge#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
