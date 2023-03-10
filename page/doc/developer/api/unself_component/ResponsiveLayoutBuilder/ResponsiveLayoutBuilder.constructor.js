import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">ResponsiveLayoutBuilder</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">ResponsiveLayoutBuilder</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-small"><span>required</span> <span class="type-annotation"><a href="../../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></span> <span class="parameter-name">small</span>, </span></li>
<li><span class="parameter" id="-param-large"><span>required</span> <span class="type-annotation"><a href="../../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></span> <span class="parameter-name">large</span>, </span></li>
<li><span class="parameter" id="-param-medium"><span class="type-annotation"><a href="../../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a>?</span> <span class="parameter-name">medium</span>, </span></li>
<li><span class="parameter" id="-param-xLarge"><span class="type-annotation"><a href="../../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a>?</span> <span class="parameter-name">xLarge</span>, </span></li>
<li><span class="parameter" id="-param-child"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">child</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>A wrapper around <a href="https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html">LayoutBuilder</a> which exposes builders for
various responsive breakpoints.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const ResponsiveLayoutBuilder({
  Key? key,
  required this.small,
  required this.large,
  this.medium,
  this.xLarge,
  this.child,
}) : super(key: key);</code></pre>
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
  <li><a href="../../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
  <li class="self-crumb">ResponsiveLayoutBuilder const constructor</li>
</ol>


    <h5>ResponsiveLayoutBuilder class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/ResponsiveLayoutBuilder#constructors">Constructors</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/ResponsiveLayoutBuilder.constructor">ResponsiveLayoutBuilder</a></li>


        <li class="section-title">
          <a href="../../unself_component/ResponsiveLayoutBuilder#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/child">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/large">large</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/medium">medium</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/small">small</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/xLarge">xLarge</a></li>

        <li class="section-title"><a href="../../unself_component/ResponsiveLayoutBuilder#instance-methods">Methods</a></li>
          <li><a href="../../unself_component/ResponsiveLayoutBuilder/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/ResponsiveLayoutBuilder#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>




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
