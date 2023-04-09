import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">resolve</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span>
<span class="name ">resolve</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="resolve-param-states"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState</a></span>&gt;</span></span> <span class="parameter-name">states</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Returns a value of type <code>T</code> that depends on <code>states</code>.</p>
<p>Widgets like <a href="https://api.flutter.dev/flutter/material/TextButton-class.html">TextButton</a> and <a href="https://api.flutter.dev/flutter/material/ElevatedButton-class.html">ElevatedButton</a> apply this method to their
current <a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState</a>s to compute colors and other visual parameters
at build time.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Color? resolve(Set&lt;MaterialState&gt; states) {
  if (states.contains(MaterialState.disabled)) {
    return onSurface?.withOpacity(0.38);
  }

  return onPrimary;
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
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/ButtonForeground">ButtonForeground</a></li>
  <li class="self-crumb">resolve method</li>
</ol>


    <h5>ButtonForeground class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/ButtonForeground#constructors">Constructors</a></li>
          <li><a href="../../unself_component/ButtonForeground/ButtonForeground.constructor">ButtonForeground</a></li>


        <li class="section-title">
          <a href="../../unself_component/ButtonForeground#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_component/ButtonForeground/onPrimary">onPrimary</a></li>
          <li><a href="../../unself_component/ButtonForeground/onSurface">onSurface</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_component/ButtonForeground#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_component/ButtonForeground/resolve">resolve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/ButtonForeground#operators">Operators</a></li>
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
