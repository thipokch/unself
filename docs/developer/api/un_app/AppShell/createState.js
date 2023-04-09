import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">createState</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../un_app/AppShell">AppShell</a></span>&gt;</span></span>
<span class="name ">createState</span>(<wbr>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Creates the mutable state for this widget at a given location in the tree.</p>
<p>Subclasses should override this method to return a newly created
instance of their associated <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> subclass:</p>
<pre class="language-dart"><code class="language-dart">@override
State&lt;SomeWidget&gt; createState() =&gt; _SomeWidgetState();
</code></pre>
<p>The framework can call this method multiple times over the lifetime of
a <code>StatefulWidget</code>. For example, if the widget is inserted into the tree
in multiple locations, the framework will create a separate <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object
for each location. Similarly, if the widget is removed from the tree and
later inserted into the tree again, the framework will call <a href="../../un_app/AppShell/createState">createState</a>
again to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of
<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
State&lt;AppShell&gt; createState() =&gt; _AppShellState();</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_app</a></li>
  <li><a href="../../un_app/un_app">un_app</a></li>
  <li><a href="../../un_app/AppShell">AppShell</a></li>
  <li class="self-crumb">createState method</li>
</ol>


    <h5>AppShell class</h5>
    <ol>



        <li class="section-title">
          <a href="../../un_app/AppShell#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_app/AppShell/child">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_app/AppShell#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../un_app/AppShell/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_app/AppShell#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../un_app/AppShell#static-properties">Static properties</a></li>
          <li><a href="../../un_app/AppShell/defaultRoute">defaultRoute</a></li>
          <li><a href="../../un_app/AppShell/navigator">navigator</a></li>


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
