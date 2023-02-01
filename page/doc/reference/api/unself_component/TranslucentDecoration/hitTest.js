import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">hitTest</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
<span class="name ">hitTest</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="hitTest-param-size"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Size-class.html">Size</a></span> <span class="parameter-name">size</span>, </span></li>
<li><span class="parameter" id="hitTest-param-position"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Offset-class.html">Offset</a></span> <span class="parameter-name">position</span>, </span></li>
<li><span class="parameter" id="hitTest-param-textDirection">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a>?</span> <span class="parameter-name">textDirection</span>}</span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Tests whether the given point, on a rectangle of a given size,
would be considered to hit the decoration or not. For example,
if the decoration only draws a circle, this function might
return true if the point was inside the circle and false
otherwise.</p>
<p>The decoration may be sensitive to the <a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a>. The
<code>textDirection</code> argument should therefore be provided. If it is known that
the decoration is not affected by the text direction, then the argument
may be omitted or set to null.</p>
<p>When a <a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a> is painted in a <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">Container</a> or <a href="https://api.flutter.dev/flutter/widgets/DecoratedBox-class.html">DecoratedBox</a> (which
is what <a href="https://api.flutter.dev/flutter/widgets/Container-class.html">Container</a> uses), the <code>textDirection</code> parameter will be populated
based on the ambient <a href="https://api.flutter.dev/flutter/widgets/Directionality-class.html">Directionality</a> (by way of the <a href="https://api.flutter.dev/flutter/rendering/RenderDecoratedBox-class.html">RenderDecoratedBox</a>
renderer).</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
bool hitTest(Size size, Offset position, {TextDirection? textDirection}) =&gt;
    false;</code></pre>
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
  <li><a href="../../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>
  <li class="self-crumb">hitTest method</li>
</ol>


    <h5>TranslucentDecoration class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#constructors">Constructors</a></li>
          <li><a href="../../unself_component/TranslucentDecoration/TranslucentDecoration.constructor">TranslucentDecoration</a></li>


        <li class="section-title inherited">
          <a href="../../unself_component/TranslucentDecoration#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/backgroundBlendMode.html">backgroundBlendMode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/border.html">border</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/borderRadius.html">borderRadius</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/boxShadow.html">boxShadow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/isComplex.html">isComplex</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/padding.html">padding</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/shape.html">shape</a></li>

        <li class="section-title"><a href="../../unself_component/TranslucentDecoration#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/copyWith.html">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/createBoxPainter.html">createBoxPainter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugAssertIsValid.html">debugAssertIsValid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/getClipPath.html">getClipPath</a></li>
          <li><a href="../../unself_component/TranslucentDecoration/hitTest">hitTest</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpFrom.html">lerpFrom</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpTo.html">lerpTo</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/scale.html">scale</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/Decoration/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/TranslucentDecoration#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/operator_equals.html">operator ==</a></li>




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
