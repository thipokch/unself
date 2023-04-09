import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">of</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../un_ui/PairingScrollControllerGroup">PairingScrollControllerGroup</a>?</span>
<span class="name ">of</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="of-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Returns the <a href="https://api.flutter.dev/flutter/widgets/ScrollController-class.html">ScrollController</a> most closely associated with the given
context.</p>
<p>If no ancestor is found, this method will assert in debug mode, and throw
an exception in release mode.</p>
<p>Calling this method will create a dependency on the closest
<a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController-class.html">PrimaryScrollController</a> in the <code>context</code>.</p>
<p>See also:</p>
<ul>
<li><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/maybeOf.html">PrimaryScrollController.maybeOf</a>, which is similar to this method, but
returns null if no <a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController-class.html">PrimaryScrollController</a> ancestor is found.</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static PairingScrollControllerGroup? of(BuildContext context) =&gt; context
    .dependOnInheritedWidgetOfExactType&lt;PairingScrollController&gt;()
    ?.group;</code></pre>
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
  <li><a href="../../un_ui/PairingScrollController">PairingScrollController</a></li>
  <li class="self-crumb">of static method</li>
</ol>


    <h5>PairingScrollController class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/PairingScrollController#constructors">Constructors</a></li>
          <li><a href="../../un_ui/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>


        <li class="section-title">
          <a href="../../un_ui/PairingScrollController#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>
          <li><a href="../../un_ui/PairingScrollController/group">group</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>

        <li class="section-title"><a href="../../un_ui/PairingScrollController#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li><a href="../../un_ui/PairingScrollController/debugFillProperties">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>
          <li><a href="../../un_ui/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>

        <li class="section-title inherited"><a href="../../un_ui/PairingScrollController#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../un_ui/PairingScrollController#static-methods">Static methods</a></li>
          <li><a href="../../un_ui/PairingScrollController/of">of</a></li>

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
