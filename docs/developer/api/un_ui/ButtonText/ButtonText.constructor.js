import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">ButtonText.icon</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">ButtonText.icon</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="icon-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="icon-param-onPressed"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onPressed</span>, </span></li>
<li><span class="parameter" id="icon-param-onLongPress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onLongPress</span>, </span></li>
<li><span class="parameter" id="icon-param-onHover"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onHover</span>, </span></li>
<li><span class="parameter" id="icon-param-onFocusChange"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onFocusChange</span>, </span></li>
<li><span class="parameter" id="icon-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> <span class="parameter-name">style</span>, </span></li>
<li><span class="parameter" id="icon-param-focusNode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> <span class="parameter-name">focusNode</span>, </span></li>
<li><span class="parameter" id="icon-param-autofocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">autofocus</span>, </span></li>
<li><span class="parameter" id="icon-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span></li>
<li><span class="parameter" id="icon-param-icon"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">icon</span>, </span></li>
<li><span class="parameter" id="icon-param-label"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">label</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory ButtonText.icon({
  Key? key,
  VoidCallback? onPressed,
  VoidCallback? onLongPress,
  ValueChanged&lt;bool&gt;? onHover,
  ValueChanged&lt;bool&gt;? onFocusChange,
  ButtonStyle? style,
  FocusNode? focusNode,
  bool? autofocus,
  Clip? clipBehavior,
  required Widget icon,
  required Widget label,
}) {
  return ButtonText(
    key: key,
    onPressed: onPressed,
    onLongPress: onLongPress,
    onHover: onHover,
    onFocusChange: onFocusChange,
    style: style,
    focusNode: focusNode,
    autofocus: autofocus ?? false,
    clipBehavior: clipBehavior ?? Clip.none,
    child: ButtonIcon(
      icon: icon,
      label: label,
    ),
  );
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
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/ButtonText">ButtonText</a></li>
  <li class="self-crumb">ButtonText.icon factory constructor</li>
</ol>


    <h5>ButtonText class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/ButtonText#constructors">Constructors</a></li>
          <li><a href="../../un_ui/ButtonText/ButtonText.constructor">ButtonText</a></li>
          <li><a href="../../un_ui/ButtonText/ButtonText.icon">icon</a></li>


        <li class="section-title inherited">
          <a href="../../un_ui/ButtonText#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>

        <li class="section-title"><a href="../../un_ui/ButtonText#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>
          <li><a href="../../un_ui/ButtonText/defaultStyleOf">defaultStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/TextButton/themeStyleOf.html">themeStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_ui/ButtonText#operators">Operators</a></li>
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
