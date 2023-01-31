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

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></span>&gt;</span></span>
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
later inserted into the tree again, the framework will call <a href="../../unself_component/UnselfExtendedSliverNavigationBar/createState">createState</a>
again to create a fresh <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, simplifying the lifecycle of
<a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> objects.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
State&lt;UnselfExtendedSliverNavigationBar&gt; createState() =&gt;
    _UnselfExtendedSliverNavigationBarState();</code></pre>
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
  <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
  <li class="self-crumb">createState method</li>
</ol>


    <h5>UnselfExtendedSliverNavigationBar class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar.constructor">UnselfExtendedSliverNavigationBar</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyTitle">automaticallyImplyTitle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/backgroundColor">backgroundColor</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/border">border</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/brightness">brightness</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/heroTag">heroTag</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/largeTitle">largeTitle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/leading">leading</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/middle">middle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/opaque">opaque</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/padding">padding</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/previousPageTitle">previousPageTitle</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/stretch">stretch</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/trailing">trailing</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>

        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar#operators">Operators</a></li>
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
