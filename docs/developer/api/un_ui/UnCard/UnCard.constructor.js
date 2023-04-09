import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnCard</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnCard</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-header"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">header</span>, </span></li>
<li><span class="parameter" id="-param-body"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">body</span>, </span></li>
<li><span class="parameter" id="-param-footer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">footer</span>, </span></li>
<li><span class="parameter" id="-param-isSelected"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isSelected</span> = <span class="default-value">false</span>, </span></li>
<li><span class="parameter" id="-param-isExpandable"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isExpandable</span> = <span class="default-value">false</span>, </span></li>
<li><span class="parameter" id="-param-onTap"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/gestures/GestureTapCallback.html">GestureTapCallback</a>?</span> <span class="parameter-name">onTap</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnCard({
  super.key,
  this.header,
  required this.body,
  this.footer,
  this.isSelected = false,
  this.isExpandable = false,
  this.onTap,
});</code></pre>
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
  <li><a href="../../un_ui/UnCard">UnCard</a></li>
  <li class="self-crumb">UnCard const constructor</li>
</ol>


    <h5>UnCard class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/UnCard#constructors">Constructors</a></li>
          <li><a href="../../un_ui/UnCard/UnCard.constructor">UnCard</a></li>


        <li class="section-title">
          <a href="../../un_ui/UnCard#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_ui/UnCard/body">body</a></li>
          <li><a href="../../un_ui/UnCard/footer">footer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../un_ui/UnCard/header">header</a></li>
          <li><a href="../../un_ui/UnCard/isExpandable">isExpandable</a></li>
          <li><a href="../../un_ui/UnCard/isSelected">isSelected</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../un_ui/UnCard/onTap">onTap</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_ui/UnCard#instance-methods">Methods</a></li>
          <li><a href="../../un_ui/UnCard/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_ui/UnCard#operators">Operators</a></li>
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
