import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">InfoService</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../un_monitoring/InfoService">InfoService</a> description</p>
</section>



    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="InfoService" class="callable">
          <span class="name"><a href="../un_monitoring/InfoService/InfoService.constructor">InfoService</a></span><span class="signature">(<span class="parameter" id="-param-analytic">{<span class="type-annotation"><a href="../un_monitoring/AnalyticService">AnalyticService</a>?</span> <span class="parameter-name">analytic</span>}</span>)</span>
        </dt>
        <dd>
          <a href="../un_monitoring/InfoService">InfoService</a> description
            <div class="constructor-modifier features">const</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="analyticId" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/analyticId">analyticId</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="appName" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/appName">appName</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  Load app information from the platform.
The app name. <code>CFBundleDisplayName</code> on iOS, <code>application/label</code> on Android.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="buildNumber" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/buildNumber">buildNumber</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  The build number. <code>CFBundleVersion</code> on iOS, <code>versionCode</code> on Android.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="buildSignature" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/buildSignature">buildSignature</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  The build signature. Empty string on iOS, signing key signature (hex) on Android.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="installerStore" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/installerStore">installerStore</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd>
  The installer store. Indicates through which store this application was installed.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="packageName" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/packageName">packageName</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  The package name. <code>bundleIdentifier</code> on iOS, <code>getPackageName</code> on Android.
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="version" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/version">version</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd>
  The package version. <code>CFBundleShortVersionString</code> on iOS, <code>versionName</code> on Android.
  <div class="features"><span class="feature">read-only</span></div>

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
    
  <section class="summary offset-anchor" id="static-properties">
    <h2>Static Properties</h2>

    <dl class="properties">
        <dt id="package" class="property">
  <span class="name"><a href="../un_monitoring/InfoService/package">package</a></span>
  <span class="signature">↔ <a href="https://pub.dev/documentation/package_info_plus/3.0.2/package_info_plus/PackageInfo-class.html">PackageInfo</a>?</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read / write</span></div>

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
  <li><a href="../index">un_monitoring</a></li>
  <li><a href="../un_monitoring/un_monitoring">un_monitoring</a></li>
  <li class="self-crumb">InfoService class</li>
</ol>


    <h5>un_monitoring library</h5>
    <ol>
      <li class="section-title"><a href="../un_monitoring/un_monitoring#classes">Classes</a></li>
        <li><a href="../un_monitoring/AnalyticService">AnalyticService</a></li>
        <li><a href="../un_monitoring/ErrorService">ErrorService</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>
        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>
        <li><a href="../un_monitoring/InfoService">InfoService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>
        <li><a href="../un_monitoring/PerformanceService">PerformanceService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>





      <li class="section-title"><a href="../un_monitoring/un_monitoring#functions">Functions</a></li>
        <li><a href="../un_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../un_monitoring/InfoService#constructors">Constructors</a></li>
          <li><a href="../un_monitoring/InfoService/InfoService.constructor">InfoService</a></li>


        <li class="section-title">
          <a href="../un_monitoring/InfoService#instance-properties">Properties</a>
        </li>
          <li><a href="../un_monitoring/InfoService/analyticId">analyticId</a></li>
          <li><a href="../un_monitoring/InfoService/appName">appName</a></li>
          <li><a href="../un_monitoring/InfoService/buildNumber">buildNumber</a></li>
          <li><a href="../un_monitoring/InfoService/buildSignature">buildSignature</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../un_monitoring/InfoService/installerStore">installerStore</a></li>
          <li><a href="../un_monitoring/InfoService/packageName">packageName</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../un_monitoring/InfoService/version">version</a></li>

        <li class="section-title inherited"><a href="../un_monitoring/InfoService#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../un_monitoring/InfoService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../un_monitoring/InfoService#static-properties">Static properties</a></li>
          <li><a href="../un_monitoring/InfoService/package">package</a></li>


</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
