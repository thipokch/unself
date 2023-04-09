import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Unmoji</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">Unmoji</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-emoji"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">emoji</span>, </span></li>
<li><span class="parameter" id="-param-height"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">height</span>, </span></li>
<li><span class="parameter" id="-param-width"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">width</span>, </span></li>
<li><span class="parameter" id="-param-twemojiFormat"><span class="type-annotation"><a href="../../un_ui/UnmojiFormat">UnmojiFormat</a></span> <span class="parameter-name">twemojiFormat</span> = <span class="default-value">UnmojiFormat.webp</span>, </span></li>
<li><span class="parameter" id="-param-fit"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxFit.html">BoxFit</a>?</span> <span class="parameter-name">fit</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const Unmoji({
  Key? key,
  required this.emoji,
  this.height,
  this.width,
  this.twemojiFormat = UnmojiFormat.webp,
  this.fit,
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
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/Unmoji">Unmoji</a></li>
  <li class="self-crumb">Unmoji const constructor</li>
</ol>


    <h5>Unmoji class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/Unmoji#constructors">Constructors</a></li>
          <li><a href="../../un_ui/Unmoji/Unmoji.constructor">Unmoji</a></li>


        <li class="section-title">
          <a href="../../un_ui/Unmoji#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_ui/Unmoji/emoji">emoji</a></li>
          <li><a href="../../un_ui/Unmoji/fit">fit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../un_ui/Unmoji/height">height</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_ui/Unmoji/twemojiFormat">twemojiFormat</a></li>
          <li><a href="../../un_ui/Unmoji/unicode">unicode</a></li>
          <li><a href="../../un_ui/Unmoji/width">width</a></li>

        <li class="section-title"><a href="../../un_ui/Unmoji#instance-methods">Methods</a></li>
          <li><a href="../../un_ui/Unmoji/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_ui/Unmoji#operators">Operators</a></li>
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
