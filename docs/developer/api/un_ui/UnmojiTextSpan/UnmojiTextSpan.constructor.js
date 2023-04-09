import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnmojiTextSpan</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">UnmojiTextSpan</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-style">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>
<li><span class="parameter" id="-param-text"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">text</span>, </span></li>
<li><span class="parameter" id="-param-children"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a></span>&gt;</span>?</span> <span class="parameter-name">children</span>, </span></li>
<li><span class="parameter" id="-param-emojiFontMultiplier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">emojiFontMultiplier</span> = <span class="default-value">1</span>, </span></li>
<li><span class="parameter" id="-param-twemojiFormat"><span class="type-annotation"><a href="../../un_ui/UnmojiFormat">UnmojiFormat</a></span> <span class="parameter-name">twemojiFormat</span> = <span class="default-value">UnmojiFormat.svg</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">UnmojiTextSpan({
  TextStyle? style,
  required String text,
  List&lt;TextSpan&gt;? children,
  double emojiFontMultiplier = 1,
  this.twemojiFormat = UnmojiFormat.svg,
}) : super(
        style: style,
        children: _parse(style, text, twemojiFormat, emojiFontMultiplier)
          ..addAll(children ?? []),
      );</code></pre>
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
  <li><a href="../../un_ui/UnmojiTextSpan">UnmojiTextSpan</a></li>
  <li class="self-crumb">UnmojiTextSpan constructor</li>
</ol>


    <h5>UnmojiTextSpan class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/UnmojiTextSpan#constructors">Constructors</a></li>
          <li><a href="../../un_ui/UnmojiTextSpan/UnmojiTextSpan.constructor">UnmojiTextSpan</a></li>


        <li class="section-title">
          <a href="../../un_ui/UnmojiTextSpan#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/children.html">children</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/cursor.html">cursor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/locale.html">locale</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/mouseCursor.html">mouseCursor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onEnter.html">onEnter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onExit.html">onExit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/recognizer.html">recognizer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/semanticsLabel.html">semanticsLabel</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/spellOut.html">spellOut</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/style.html">style</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/text.html">text</a></li>
          <li><a href="../../un_ui/UnmojiTextSpan/twemojiFormat">twemojiFormat</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a></li>

        <li class="section-title inherited"><a href="../../un_ui/UnmojiTextSpan#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/build.html">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/codeUnitAt.html">codeUnitAt</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/codeUnitAtVisitor.html">codeUnitAtVisitor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/compareTo.html">compareTo</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeSemanticsInformation.html">computeSemanticsInformation</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeToPlainText.html">computeToPlainText</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugAssertIsValid.html">debugAssertIsValid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/describeSemantics.html">describeSemantics</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSemanticsInformation.html">getSemanticsInformation</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSpanForPosition.html">getSpanForPosition</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/getSpanForPositionVisitor.html">getSpanForPositionVisitor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/handleEvent.html">handleEvent</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/toPlainText.html">toPlainText</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/toStringShort.html">toStringShort</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/visitChildren.html">visitChildren</a></li>

        <li class="section-title inherited"><a href="../../un_ui/UnmojiTextSpan#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/operator_equals.html">operator ==</a></li>




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
