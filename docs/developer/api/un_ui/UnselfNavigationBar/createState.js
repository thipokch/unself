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

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../un_ui/UnselfNavigationBar">UnselfNavigationBar</a></span>&gt;</span></span>
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
later inserted into the tree again, the framework will call <a href="../../un_ui/UnselfNavigationBar/createState">createState</a>
again to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of
<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
State&lt;UnselfNavigationBar&gt; createState() =&gt; _UnselfNavigationBarState();</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/UnselfNavigationBar">UnselfNavigationBar</a></li>
  <li class="self-crumb">createState method</li>
</ol>


    <h5>UnselfNavigationBar class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/UnselfNavigationBar#constructors">Constructors</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/UnselfNavigationBar.constructor">UnselfNavigationBar</a></li>


        <li class="section-title">
          <a href="../../un_ui/UnselfNavigationBar#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_ui/UnselfNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/automaticallyImplyMiddle">automaticallyImplyMiddle</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/backgroundColor">backgroundColor</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/border">border</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/brightness">brightness</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/heroTag">heroTag</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/leading">leading</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/middle">middle</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/padding">padding</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/preferredSize">preferredSize</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/previousPageTitle">previousPageTitle</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/trailing">trailing</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>

        <li class="section-title"><a href="../../un_ui/UnselfNavigationBar#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../un_ui/UnselfNavigationBar/shouldFullyObstruct">shouldFullyObstruct</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_ui/UnselfNavigationBar#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>




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
