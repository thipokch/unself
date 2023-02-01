import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnmojiText</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnmojiText</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-text"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">text</span>, </span></li>
<li><span class="parameter" id="-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>
<li><span class="parameter" id="-param-maxLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span> <span class="parameter-name">maxLines</span>, </span></li>
<li><span class="parameter" id="-param-emojiFontMultiplier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">emojiFontMultiplier</span> = <span class="default-value">1.0</span>, </span></li>
<li><span class="parameter" id="-param-twemojiFormat"><span class="type-annotation"><a href="../../unself_component/UnmojiFormat">UnmojiFormat</a></span> <span class="parameter-name">twemojiFormat</span> = <span class="default-value">UnmojiFormat.svg</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnmojiText({
  Key? key,
  required this.text,
  this.style,
  this.maxLines,
  this.emojiFontMultiplier = 1.0,
  this.twemojiFormat = UnmojiFormat.svg,
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
  <li><a href="../../unself_component/UnmojiText">UnmojiText</a></li>
  <li class="self-crumb">UnmojiText const constructor</li>
</ol>


    <h5>UnmojiText class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnmojiText#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnmojiText/UnmojiText.constructor">UnmojiText</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnmojiText#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnmojiText/emojiFontMultiplier">emojiFontMultiplier</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/UnmojiText/maxLines">maxLines</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/UnmojiText/style">style</a></li>
          <li><a href="../../unself_component/UnmojiText/text">text</a></li>
          <li><a href="../../unself_component/UnmojiText/twemojiFormat">twemojiFormat</a></li>

        <li class="section-title"><a href="../../unself_component/UnmojiText#instance-methods">Methods</a></li>
          <li><a href="../../unself_component/UnmojiText/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnmojiText#operators">Operators</a></li>
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
