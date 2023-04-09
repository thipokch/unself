import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">ErrorService</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../unself_monitoring/ErrorService">ErrorService</a> description</p>
</section>



    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="ErrorService" class="callable">
          <span class="name"><a href="../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></span><span class="signature">()</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
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

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
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
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
  <section class="summary offset-anchor" id="static-methods">
    <h2>Static Methods</h2>
    <dl class="callables">
        <dt id="recordError" class="callable">
  <span class="name"><a href="../unself_monitoring/ErrorService/recordError">recordError</a></span><span class="signature">(<wbr><span class="parameter" id="recordError-param-exception"><span class="type-annotation">dynamic</span> <span class="parameter-name">exception</span>, </span><span class="parameter" id="recordError-param-stack"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>?</span> <span class="parameter-name">stack</span>, </span><span class="parameter" id="recordError-param-fatal">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">fatal</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="recordFlutterError" class="callable">
  <span class="name"><a href="../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></span><span class="signature">(<wbr><span class="parameter" id="recordFlutterError-param-flutterErrorDetails"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/FlutterErrorDetails-class.html">FlutterErrorDetails</a></span> <span class="parameter-name">flutterErrorDetails</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="recordIsolateError" class="callable">
  <span class="name"><a href="../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="runAppGuarded" class="callable">
  <span class="name"><a href="../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></span><span class="signature">(<wbr><span class="parameter" id="runAppGuarded-param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">app</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd>
  
  

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
  <li><a href="../index">unself_monitoring</a></li>
  <li><a href="../unself_monitoring/unself_monitoring">unself_monitoring</a></li>
  <li class="self-crumb">ErrorService abstract class</li>
</ol>


    <h5>unself_monitoring library</h5>
    <ol>
      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#classes">Classes</a></li>
        <li><a href="../unself_monitoring/AnalyticService">AnalyticService</a></li>
        <li><a href="../unself_monitoring/ErrorService">ErrorService</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>
        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>
        <li><a href="../unself_monitoring/InfoService">InfoService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>
        <li><a href="../unself_monitoring/PerformanceService">PerformanceService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>





      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#functions">Functions</a></li>
        <li><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_monitoring/ErrorService#constructors">Constructors</a></li>
          <li><a href="../unself_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>


        <li class="section-title inherited">
          <a href="../unself_monitoring/ErrorService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../unself_monitoring/ErrorService#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_monitoring/ErrorService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../unself_monitoring/ErrorService#static-methods">Static methods</a></li>
          <li><a href="../unself_monitoring/ErrorService/recordError">recordError</a></li>
          <li><a href="../unself_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>
          <li><a href="../unself_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>
          <li><a href="../unself_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
