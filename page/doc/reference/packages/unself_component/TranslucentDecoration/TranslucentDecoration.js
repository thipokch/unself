import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">TranslucentDecoration</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a></li>
        <li><a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">BoxDecoration</a></li>
      <li>TranslucentDecoration</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="TranslucentDecoration" class="callable">
          <span class="name"><a href="../unself_component/TranslucentDecoration/TranslucentDecoration.constructor">TranslucentDecoration</a></span><span class="signature">(<span class="parameter" id="-param-color">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">color</span>, </span><span class="parameter" id="-param-image"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/DecorationImage-class.html">DecorationImage</a>?</span> <span class="parameter-name">image</span>, </span><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxBorder-class.html">BoxBorder</a>?</span> <span class="parameter-name">border</span>, </span><span class="parameter" id="-param-borderRadius"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BorderRadiusGeometry-class.html">BorderRadiusGeometry</a>?</span> <span class="parameter-name">borderRadius</span>, </span><span class="parameter" id="-param-boxShadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span>?</span> <span class="parameter-name">boxShadow</span>, </span><span class="parameter" id="-param-gradient"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Gradient-class.html">Gradient</a>?</span> <span class="parameter-name">gradient</span>, </span><span class="parameter" id="-param-backgroundBlendMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/BlendMode.html">BlendMode</a>?</span> <span class="parameter-name">backgroundBlendMode</span>, </span><span class="parameter" id="-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShape.html">BoxShape</a></span> <span class="parameter-name">shape</span> = <span class="default-value">BoxShape.rectangle</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="backgroundBlendMode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/backgroundBlendMode.html">backgroundBlendMode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/BlendMode.html">BlendMode</a>?</span> 

</dt>
<dd class="inherited">
  The blend mode applied to the <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a> or <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a> background of the box.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="border" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/border.html">border</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/BoxBorder-class.html">BoxBorder</a>?</span> 

</dt>
<dd class="inherited">
  A border to draw above the background <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a>, <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a>, or <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="borderRadius" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/borderRadius.html">borderRadius</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/BorderRadiusGeometry-class.html">BorderRadiusGeometry</a>?</span> 

</dt>
<dd class="inherited">
  If non-null, the corners of this box are rounded by this <a href="https://api.flutter.dev/flutter/painting/BorderRadius-class.html">BorderRadius</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="boxShadow" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/boxShadow.html">boxShadow</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  A list of shadows cast by this box behind the box.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="color" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> 

</dt>
<dd class="inherited">
  The color to fill in the background of the box.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="gradient" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/Gradient-class.html">Gradient</a>?</span> 

</dt>
<dd class="inherited">
  A gradient to use when filling the box.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="image" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/DecorationImage-class.html">DecorationImage</a>?</span> 

</dt>
<dd class="inherited">
  An image to paint above the background <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a> or <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isComplex" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/isComplex.html">isComplex</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether this decoration is complex enough to benefit from caching its painting.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="padding" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/padding.html">padding</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/EdgeInsetsGeometry-class.html">EdgeInsetsGeometry</a>?</span> 

</dt>
<dd class="inherited">
  Returns the insets to apply when using this decoration on a box
that has contents, so that the contents do not overlap the edges
of the decoration. For example, if the decoration draws a frame
around its edge, the padding would return the distance by which
to inset the children so as to not overlap the frame.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="shape" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/shape.html">shape</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/BoxShape.html">BoxShape</a></span> 

</dt>
<dd class="inherited">
  The shape to fill the background <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/color.html">color</a>, <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/gradient.html">gradient</a>, and <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/image.html">image</a> into and
to cast as the <a href="https://api.flutter.dev/flutter/painting/BoxDecoration/boxShadow.html">boxShadow</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="copyWith" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/copyWith.html">copyWith</a></span><span class="signature">(<wbr><span class="parameter" id="copyWith-param-color">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">color</span>, </span><span class="parameter" id="copyWith-param-image"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/DecorationImage-class.html">DecorationImage</a>?</span> <span class="parameter-name">image</span>, </span><span class="parameter" id="copyWith-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxBorder-class.html">BoxBorder</a>?</span> <span class="parameter-name">border</span>, </span><span class="parameter" id="copyWith-param-borderRadius"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BorderRadiusGeometry-class.html">BorderRadiusGeometry</a>?</span> <span class="parameter-name">borderRadius</span>, </span><span class="parameter" id="copyWith-param-boxShadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a></span>&gt;</span>?</span> <span class="parameter-name">boxShadow</span>, </span><span class="parameter" id="copyWith-param-gradient"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Gradient-class.html">Gradient</a>?</span> <span class="parameter-name">gradient</span>, </span><span class="parameter" id="copyWith-param-backgroundBlendMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/BlendMode.html">BlendMode</a>?</span> <span class="parameter-name">backgroundBlendMode</span>, </span><span class="parameter" id="copyWith-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShape.html">BoxShape</a>?</span> <span class="parameter-name">shape</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">BoxDecoration</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a copy of this object but with the given fields replaced with the
new values.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createBoxPainter" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/createBoxPainter.html">createBoxPainter</a></span><span class="signature">(<wbr><span class="parameter" id="createBoxPainter-param-onChanged">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onChanged</span>]</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/BoxPainter-class.html">BoxPainter</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a <a href="https://api.flutter.dev/flutter/painting/BoxPainter-class.html">BoxPainter</a> that will paint this decoration.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugAssertIsValid" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugAssertIsValid.html">debugAssertIsValid</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  In debug mode, throws an exception if the object is not in a
valid configuration. Otherwise, returns true.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugFillProperties" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Add additional properties associated with the node.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="getClipPath" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/getClipPath.html">getClipPath</a></span><span class="signature">(<wbr><span class="parameter" id="getClipPath-param-rect"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Rect-class.html">Rect</a></span> <span class="parameter-name">rect</span>, </span><span class="parameter" id="getClipPath-param-textDirection"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a></span> <span class="parameter-name">textDirection</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-ui/Path-class.html">Path</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a closed <a href="https://api.flutter.dev/flutter/dart-ui/Path-class.html">Path</a> that describes the outer edge of this decoration.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="hitTest" class="callable">
  <span class="name"><a href="../unself_component/TranslucentDecoration/hitTest">hitTest</a></span><span class="signature">(<wbr><span class="parameter" id="hitTest-param-size"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Size-class.html">Size</a></span> <span class="parameter-name">size</span>, </span><span class="parameter" id="hitTest-param-position"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Offset-class.html">Offset</a></span> <span class="parameter-name">position</span>, </span><span class="parameter" id="hitTest-param-textDirection">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextDirection.html">TextDirection</a>?</span> <span class="parameter-name">textDirection</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd>
  Tests whether the given point, on a rectangle of a given size,
would be considered to hit the decoration or not. For example,
if the decoration only draws a circle, this function might
return true if the point was inside the circle and false
otherwise.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="lerpFrom" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpFrom.html">lerpFrom</a></span><span class="signature">(<wbr><span class="parameter" id="lerpFrom-param-a"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a>?</span> <span class="parameter-name">a</span>, </span><span class="parameter" id="lerpFrom-param-t"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">t</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">BoxDecoration</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Linearly interpolates from another <a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a> (which may be of a
different class) to <code>this</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="lerpTo" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpTo.html">lerpTo</a></span><span class="signature">(<wbr><span class="parameter" id="lerpTo-param-b"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a>?</span> <span class="parameter-name">b</span>, </span><span class="parameter" id="lerpTo-param-t"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">t</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">BoxDecoration</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Linearly interpolates from <code>this</code> to another <a href="https://api.flutter.dev/flutter/painting/Decoration-class.html">Decoration</a> (which may be of
a different class).
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="scale" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/scale.html">scale</a></span><span class="signature">(<wbr><span class="parameter" id="scale-param-factor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">factor</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/BoxDecoration-class.html">BoxDecoration</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a new box decoration that is scaled by the given factor.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toDiagnosticsNode" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a debug representation of the object that is used by debugging
tools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toStringShort" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/Decoration/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A brief description of this object, usually just the <a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a> and the
<a href="https://api.flutter.dev/flutter/painting/BoxDecoration/hashCode.html">hashCode</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
    


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_component</a></li>
  <li><a href="../unself_component/unself_component">unself_component</a></li>
  <li class="self-crumb">TranslucentDecoration class</li>
</ol>


    <h5>unself_component library</h5>
    <ol>
      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>
        <li><a href="../unself_component/ButtonAction/ButtonAction">ButtonAction</a></li>
        <li><a href="../unself_component/ButtonBackground/ButtonBackground">ButtonBackground</a></li>
        <li><a href="../unself_component/ButtonElevated/ButtonElevated">ButtonElevated</a></li>
        <li><a href="../unself_component/ButtonElevation/ButtonElevation">ButtonElevation</a></li>
        <li><a href="../unself_component/ButtonFilled/ButtonFilled">ButtonFilled</a></li>
        <li><a href="../unself_component/ButtonForeground/ButtonForeground">ButtonForeground</a></li>
        <li><a href="../unself_component/ButtonIcon/ButtonIcon">ButtonIcon</a></li>
        <li><a href="../unself_component/ButtonOutlined/ButtonOutlined">ButtonOutlined</a></li>
        <li><a href="../unself_component/ButtonOverlay/ButtonOverlay">ButtonOverlay</a></li>
        <li><a href="../unself_component/ButtonText/ButtonText">ButtonText</a></li>
        <li><a href="../unself_component/ButtonTonal/ButtonTonal">ButtonTonal</a></li>
        <li><a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></li>
        <li><a href="../unself_component/CardTextEditState/CardTextEditState">CardTextEditState</a></li>
        <li><a href="../unself_component/CardTile/CardTile">CardTile</a></li>
        <li><a href="../unself_component/ChipEmoji/ChipEmoji">ChipEmoji</a></li>
        <li><a href="../unself_component/ChipText/ChipText">ChipText</a></li>
        <li><a href="../unself_component/ConditionalParentWidget/ConditionalParentWidget">ConditionalParentWidget</a></li>
        <li><a href="../unself_component/FloatContainer/FloatContainer">FloatContainer</a></li>
        <li><a href="../unself_component/FloatScaffold/FloatScaffold">FloatScaffold</a></li>
        <li><a href="../unself_component/HeadingHeadline/HeadingHeadline">HeadingHeadline</a></li>
        <li><a href="../unself_component/HeadingSection/HeadingSection">HeadingSection</a></li>
        <li><a href="../unself_component/HeadingTitle/HeadingTitle">HeadingTitle</a></li>
        <li><a href="../unself_component/HeroTag/HeroTag">HeroTag</a></li>
        <li><a href="../unself_component/ListItemBuilder/ListItemBuilder">ListItemBuilder</a></li>
        <li><a href="../unself_component/NavigationContext/NavigationContext">NavigationContext</a></li>
        <li><a href="../unself_component/PairingScrollController/PairingScrollController">PairingScrollController</a></li>
        <li><a href="../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
        <li><a href="../unself_component/ResponsiveLayoutBuilder/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
        <li><a href="../unself_component/TextArea/TextArea">TextArea</a></li>
        <li><a href="../unself_component/TextBox/TextBox">TextBox</a></li>
        <li><a href="../unself_component/TranslucentDecoration/TranslucentDecoration">TranslucentDecoration</a></li>
        <li><a href="../unself_component/UnAppPage/UnAppPage">UnAppPage</a></li>
        <li><a href="../unself_component/UnArtPage/UnArtPage">UnArtPage</a></li>
        <li><a href="../unself_component/UnCard/UnCard">UnCard</a></li>
        <li><a href="../unself_component/UnCupertinoContextMenu/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>
        <li><a href="../unself_component/Unmoji/Unmoji">Unmoji</a></li>
        <li><a href="../unself_component/UnmojiText/UnmojiText">UnmojiText</a></li>
        <li><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan">UnmojiTextSpan</a></li>
        <li><a href="../unself_component/UnRootSheetPage/UnRootSheetPage">UnRootSheetPage</a></li>
        <li><a href="../unself_component/UnScaffold/UnScaffold">UnScaffold</a></li>
        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBar/UnselfNavigationBar">UnselfNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
        <li><a href="../unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnSheet/UnSheet">UnSheet</a></li>
        <li><a href="../unself_component/UnSliverAppBar/UnSliverAppBar">UnSliverAppBar</a></li>
        <li><a href="../unself_component/UnSliverArtBar/UnSliverArtBar">UnSliverArtBar</a></li>



      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>
        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>
        <li><a href="../unself_component/regex">regex</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>
        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>
        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>
        <li><a href="../unself_component/show">show</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>
        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>
        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>
        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>
        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_component/TranslucentDecoration/TranslucentDecoration#constructors">Constructors</a></li>
          <li><a href="../unself_component/TranslucentDecoration/TranslucentDecoration.constructor">TranslucentDecoration</a></li>


        <li class="section-title inherited">
          <a href="../unself_component/TranslucentDecoration/TranslucentDecoration#instance-properties">Properties</a>
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

        <li class="section-title"><a href="../unself_component/TranslucentDecoration/TranslucentDecoration#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/copyWith.html">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/createBoxPainter.html">createBoxPainter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugAssertIsValid.html">debugAssertIsValid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/getClipPath.html">getClipPath</a></li>
          <li><a href="../unself_component/TranslucentDecoration/hitTest">hitTest</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpFrom.html">lerpFrom</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/lerpTo.html">lerpTo</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/scale.html">scale</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/Decoration/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../unself_component/TranslucentDecoration/TranslucentDecoration#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/BoxDecoration/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
