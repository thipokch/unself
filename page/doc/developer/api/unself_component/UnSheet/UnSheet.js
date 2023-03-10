import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnSheet&lt;<wbr><span class="type-parameter">T</span>&gt;</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></li>
      <li>UnSheet</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnSheet" class="callable">
          <span class="name"><a href="../unself_component/UnSheet/UnSheet.constructor">UnSheet</a></span><span class="signature">(<span class="parameter" id="-param-child">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>, </span><span class="parameter" id="-param-topRadius"><span class="type-annotation"><a href="https://pub.dev/documentation/figma_squircle/0.5.3/figma_squircle/SmoothRadius-class.html">SmoothRadius</a>?</span> <span class="parameter-name">topRadius</span>, </span><span class="parameter" id="-param-transitionBackgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">transitionBackgroundColor</span> = <span class="default-value">Colors.black</span>, </span><span class="parameter" id="-param-overlayStyle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/SystemUiOverlayStyle-class.html">SystemUiOverlayStyle</a>?</span> <span class="parameter-name">overlayStyle</span>, </span><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span><span class="parameter" id="-param-elevation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">elevation</span>, </span><span class="parameter" id="-param-closeProgressThreshold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> <span class="parameter-name">closeProgressThreshold</span>, </span><span class="parameter" id="-param-shape"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/ShapeBorder-class.html">ShapeBorder</a>?</span> <span class="parameter-name">shape</span>, </span><span class="parameter" id="-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span><span class="parameter" id="-param-barrierColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">barrierColor</span>, </span><span class="parameter" id="-param-expand"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">expand</span> = <span class="default-value">false</span>, </span><span class="parameter" id="-param-secondAnimation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/AnimationController-class.html">AnimationController</a>?</span> <span class="parameter-name">secondAnimation</span>, </span><span class="parameter" id="-param-animationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">animationCurve</span>, </span><span class="parameter" id="-param-previousRouteAnimationCurve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> <span class="parameter-name">previousRouteAnimationCurve</span>, </span><span class="parameter" id="-param-useRootNavigator"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">useRootNavigator</span> = <span class="default-value">false</span>, </span><span class="parameter" id="-param-bounce"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">bounce</span> = <span class="default-value">true</span>, </span><span class="parameter" id="-param-isDismissible"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">isDismissible</span>, </span><span class="parameter" id="-param-enableDrag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">enableDrag</span> = <span class="default-value">true</span>, </span><span class="parameter" id="-param-duration"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a>?</span> <span class="parameter-name">duration</span>, </span><span class="parameter" id="-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a>?</span> <span class="parameter-name">settings</span>, </span><span class="parameter" id="-param-shadow"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a>?</span> <span class="parameter-name">shadow</span>, </span><span class="parameter" id="-param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LocalKey-class.html">LocalKey</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-arguments"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span> <span class="parameter-name">arguments</span>, </span><span class="parameter" id="-param-restorationId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">restorationId</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="animationCurve" class="property">
  <span class="name"><a href="../unself_component/UnSheet/animationCurve">animationCurve</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="arguments" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span> 

</dt>
<dd class="inherited">
  The arguments passed to this route.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="backgroundColor" class="property">
  <span class="name"><a href="../unself_component/UnSheet/backgroundColor">backgroundColor</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="barrierColor" class="property">
  <span class="name"><a href="../unself_component/UnSheet/barrierColor">barrierColor</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="bounce" class="property">
  <span class="name"><a href="../unself_component/UnSheet/bounce">bounce</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="child" class="property">
  <span class="name"><a href="../unself_component/UnSheet/child">child</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="clipBehavior" class="property">
  <span class="name"><a href="../unself_component/UnSheet/clipBehavior">clipBehavior</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="closeProgressThreshold" class="property">
  <span class="name"><a href="../unself_component/UnSheet/closeProgressThreshold">closeProgressThreshold</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="duration" class="property">
  <span class="name"><a href="../unself_component/UnSheet/duration">duration</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/Duration-class.html">Duration</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="elevation" class="property">
  <span class="name"><a href="../unself_component/UnSheet/elevation">elevation</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="enableDrag" class="property">
  <span class="name"><a href="../unself_component/UnSheet/enableDrag">enableDrag</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="expand" class="property">
  <span class="name"><a href="../unself_component/UnSheet/expand">expand</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isDismissible" class="property">
  <span class="name"><a href="../unself_component/UnSheet/isDismissible">isDismissible</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="key" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/foundation/LocalKey-class.html">LocalKey</a>?</span> 

</dt>
<dd class="inherited">
  The key associated with this page.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="name" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  The name of the route (e.g., "/settings").
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="overlayStyle" class="property">
  <span class="name"><a href="../unself_component/UnSheet/overlayStyle">overlayStyle</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/services/SystemUiOverlayStyle-class.html">SystemUiOverlayStyle</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="previousRouteAnimationCurve" class="property">
  <span class="name"><a href="../unself_component/UnSheet/previousRouteAnimationCurve">previousRouteAnimationCurve</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/animation/Curve-class.html">Curve</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="restorationId" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  Restoration ID to save and restore the state of the <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> configured by
this page.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="secondAnimation" class="property">
  <span class="name"><a href="../unself_component/UnSheet/secondAnimation">secondAnimation</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/animation/AnimationController-class.html">AnimationController</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="settings" class="property">
  <span class="name"><a href="../unself_component/UnSheet/settings">settings</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="shadow" class="property">
  <span class="name"><a href="../unself_component/UnSheet/shadow">shadow</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/painting/BoxShadow-class.html">BoxShadow</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="shape" class="property">
  <span class="name"><a href="../unself_component/UnSheet/shape">shape</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/painting/ShapeBorder-class.html">ShapeBorder</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="topRadius" class="property">
  <span class="name"><a href="../unself_component/UnSheet/topRadius">topRadius</a></span>
  <span class="signature">??? <a href="https://pub.dev/documentation/figma_squircle/0.5.3/figma_squircle/SmoothRadius-class.html">SmoothRadius</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="transitionBackgroundColor" class="property">
  <span class="name"><a href="../unself_component/UnSheet/transitionBackgroundColor">transitionBackgroundColor</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="useRootNavigator" class="property">
  <span class="name"><a href="../unself_component/UnSheet/useRootNavigator">useRootNavigator</a></span>
  <span class="signature">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="canUpdate" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></span><span class="signature">(<wbr><span class="parameter" id="canUpdate-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Whether this page can be updated with the <code>other</code> page.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createRoute" class="callable">
  <span class="name"><a href="../unself_component/UnSheet/createRoute">createRoute</a></span><span class="signature">(<wbr><span class="parameter" id="createRoute-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  Creates the <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> that corresponds to this page.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">??? dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">??? <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
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
  <li class="self-crumb">UnSheet<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span> class</li>
</ol>


    <h5>unself_component library</h5>
    <ol>
      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>
        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>
        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>
        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>
        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>
        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>
        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>
        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>
        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>
        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>
        <li><a href="../unself_component/ButtonText">ButtonText</a></li>
        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>
        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>
        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>
        <li><a href="../unself_component/CardTile">CardTile</a></li>
        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>
        <li><a href="../unself_component/ChipText">ChipText</a></li>
        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>
        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>
        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>
        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>
        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>
        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>
        <li><a href="../unself_component/HeroTag">HeroTag</a></li>
        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>
        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>
        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>
        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
        <li><a href="../unself_component/TextArea">TextArea</a></li>
        <li><a href="../unself_component/TextBox">TextBox</a></li>
        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>
        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>
        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>
        <li><a href="../unself_component/UnCard">UnCard</a></li>
        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>
        <li><a href="../unself_component/Unmoji">Unmoji</a></li>
        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>
        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>
        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>
        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>
        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnSheet">UnSheet</a></li>
        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>
        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>



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

        <li class="section-title"><a href="../unself_component/UnSheet#constructors">Constructors</a></li>
          <li><a href="../unself_component/UnSheet/UnSheet.constructor">UnSheet</a></li>


        <li class="section-title">
          <a href="../unself_component/UnSheet#instance-properties">Properties</a>
        </li>
          <li><a href="../unself_component/UnSheet/animationCurve">animationCurve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>
          <li><a href="../unself_component/UnSheet/backgroundColor">backgroundColor</a></li>
          <li><a href="../unself_component/UnSheet/barrierColor">barrierColor</a></li>
          <li><a href="../unself_component/UnSheet/bounce">bounce</a></li>
          <li><a href="../unself_component/UnSheet/child">child</a></li>
          <li><a href="../unself_component/UnSheet/clipBehavior">clipBehavior</a></li>
          <li><a href="../unself_component/UnSheet/closeProgressThreshold">closeProgressThreshold</a></li>
          <li><a href="../unself_component/UnSheet/duration">duration</a></li>
          <li><a href="../unself_component/UnSheet/elevation">elevation</a></li>
          <li><a href="../unself_component/UnSheet/enableDrag">enableDrag</a></li>
          <li><a href="../unself_component/UnSheet/expand">expand</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../unself_component/UnSheet/isDismissible">isDismissible</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>
          <li><a href="../unself_component/UnSheet/overlayStyle">overlayStyle</a></li>
          <li><a href="../unself_component/UnSheet/previousRouteAnimationCurve">previousRouteAnimationCurve</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../unself_component/UnSheet/secondAnimation">secondAnimation</a></li>
          <li><a href="../unself_component/UnSheet/settings">settings</a></li>
          <li><a href="../unself_component/UnSheet/shadow">shadow</a></li>
          <li><a href="../unself_component/UnSheet/shape">shape</a></li>
          <li><a href="../unself_component/UnSheet/topRadius">topRadius</a></li>
          <li><a href="../unself_component/UnSheet/transitionBackgroundColor">transitionBackgroundColor</a></li>
          <li><a href="../unself_component/UnSheet/useRootNavigator">useRootNavigator</a></li>

        <li class="section-title"><a href="../unself_component/UnSheet#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>
          <li><a href="../unself_component/UnSheet/createRoute">createRoute</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_component/UnSheet#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
