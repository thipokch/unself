import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnSheet&lt;<wbr><span class="type-parameter">T</span>&gt;</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnSheet&lt;<wbr><span class="type-parameter">T</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-child">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>, </span></li>
<li><span class="parameter" id="-param-topRadius"><span class="type-annotation"><a href="https://pub.dev/documentation/figma_squircle/0.5.3/figma_squircle/SmoothRadius-class.html">SmoothRadius</a>?</span> <span class="parameter-name">topRadius</span>, </span></li>
<li><span class="parameter" id="-param-transitionBackgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">transitionBackgroundColor</span> = <span class="default-value">Colors.black</span>, </span></li>
<li><span class="parameter" id="-param-overlayStyle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/SystemUiOverlayStyle-class.html">SystemUiOverlayStyle</a>?</span> <span class="parameter-name">overlayStyle</span>, </span></li>
<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>
<li><span class="parameter" id="-param-elevation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">elevation</span>, </span></li>
<li><span class="parameter" id="-param-closeProgressThreshold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">closeProgressThreshold</span>, </span></li>
<li><span class="parameter" id="-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/ShapeBorder-class.html">ShapeBorder</a>?</span> <span class="parameter-name">shape</span>, </span></li>
<li><span class="parameter" id="-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span></li>
<li><span class="parameter" id="-param-barrierColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">barrierColor</span>, </span></li>
<li><span class="parameter" id="-param-expand"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">expand</span> = <span class="default-value">false</span>, </span></li>
<li><span class="parameter" id="-param-secondAnimation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/AnimationController-class.html">AnimationController</a>?</span> <span class="parameter-name">secondAnimation</span>, </span></li>
<li><span class="parameter" id="-param-animationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">animationCurve</span>, </span></li>
<li><span class="parameter" id="-param-previousRouteAnimationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">previousRouteAnimationCurve</span>, </span></li>
<li><span class="parameter" id="-param-useRootNavigator"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">useRootNavigator</span> = <span class="default-value">false</span>, </span></li>
<li><span class="parameter" id="-param-bounce"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">bounce</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-isDismissible"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">isDismissible</span>, </span></li>
<li><span class="parameter" id="-param-enableDrag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">enableDrag</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-duration"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a>?</span> <span class="parameter-name">duration</span>, </span></li>
<li><span class="parameter" id="-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a>?</span> <span class="parameter-name">settings</span>, </span></li>
<li><span class="parameter" id="-param-shadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a>?</span> <span class="parameter-name">shadow</span>, </span></li>
<li><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LocalKey-class.html">LocalKey</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-arguments"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span> <span class="parameter-name">arguments</span>, </span></li>
<li><span class="parameter" id="-param-restorationId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">restorationId</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnSheet({
  required this.child,
  this.topRadius,
  this.transitionBackgroundColor = Colors.black,
  this.overlayStyle,
  this.backgroundColor,
  this.elevation,
  this.closeProgressThreshold,
  this.shape,
  this.clipBehavior,
  this.barrierColor,
  this.expand = false,
  this.secondAnimation,
  this.animationCurve,
  this.previousRouteAnimationCurve,
  this.useRootNavigator = false,
  this.bounce = true,
  this.isDismissible,
  this.enableDrag = true,
  this.duration,
  this.settings,
  this.shadow,
  super.key,
  super.name,
  super.arguments,
  super.restorationId,
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
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/UnSheet/UnSheet">UnSheet<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>
  <li class="self-crumb">UnSheet const constructor</li>
</ol>


    <h5>UnSheet class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnSheet/UnSheet#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnSheet/UnSheet.constructor">UnSheet</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnSheet/UnSheet#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnSheet/animationCurve">animationCurve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>
          <li><a href="../../unself_component/UnSheet/backgroundColor">backgroundColor</a></li>
          <li><a href="../../unself_component/UnSheet/barrierColor">barrierColor</a></li>
          <li><a href="../../unself_component/UnSheet/bounce">bounce</a></li>
          <li><a href="../../unself_component/UnSheet/child">child</a></li>
          <li><a href="../../unself_component/UnSheet/clipBehavior">clipBehavior</a></li>
          <li><a href="../../unself_component/UnSheet/closeProgressThreshold">closeProgressThreshold</a></li>
          <li><a href="../../unself_component/UnSheet/duration">duration</a></li>
          <li><a href="../../unself_component/UnSheet/elevation">elevation</a></li>
          <li><a href="../../unself_component/UnSheet/enableDrag">enableDrag</a></li>
          <li><a href="../../unself_component/UnSheet/expand">expand</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_component/UnSheet/isDismissible">isDismissible</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>
          <li><a href="../../unself_component/UnSheet/overlayStyle">overlayStyle</a></li>
          <li><a href="../../unself_component/UnSheet/previousRouteAnimationCurve">previousRouteAnimationCurve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/UnSheet/secondAnimation">secondAnimation</a></li>
          <li><a href="../../unself_component/UnSheet/settings">settings</a></li>
          <li><a href="../../unself_component/UnSheet/shadow">shadow</a></li>
          <li><a href="../../unself_component/UnSheet/shape">shape</a></li>
          <li><a href="../../unself_component/UnSheet/topRadius">topRadius</a></li>
          <li><a href="../../unself_component/UnSheet/transitionBackgroundColor">transitionBackgroundColor</a></li>
          <li><a href="../../unself_component/UnSheet/useRootNavigator">useRootNavigator</a></li>

        <li class="section-title"><a href="../../unself_component/UnSheet/UnSheet#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>
          <li><a href="../../unself_component/UnSheet/createRoute">createRoute</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnSheet/UnSheet#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
