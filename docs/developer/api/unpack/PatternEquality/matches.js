import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">matches</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
<span class="name ">matches</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="matches-param-value"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">value</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">bool matches(String value) {
  if (this is RegExp) {
    return (this as RegExp).hasMatch(value);
  } else if (this is String) {
    return this == value;
  }
  return false;
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
  <li><a href="../../index">unpack</a></li>
  <li><a href="../../unpack/unpack">unpack</a></li>
  <li><a href="../../unpack/PatternEquality">PatternEquality</a></li>
  <li class="self-crumb">matches method</li>
</ol>


    <h5>PatternEquality extension</h5>
    <ol>





        <li class="section-title"><a href="../../unpack/PatternEquality#instance-methods">Methods</a></li>
          <li><a href="../../unpack/PatternEquality/equals">equals</a></li>
          <li><a href="../../unpack/PatternEquality/matches">matches</a></li>




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
