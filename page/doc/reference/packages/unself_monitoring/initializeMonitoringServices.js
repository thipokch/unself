import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">initializeMonitoringServices</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
<span class="name ">initializeMonitoringServices</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="initializeMonitoringServices-param-sentryDsn">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">sentryDsn</span>, </span></li>
<li><span class="parameter" id="initializeMonitoringServices-param-firebaseOptions"><span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></span> <span class="parameter-name">firebaseOptions</span>}</span></li>
</ol>)

        

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;void&gt; initializeMonitoringServices({
  required String sentryDsn,
  required FirebaseOptions firebaseOptions,
}) async {
  await Firebase.initializeApp(
    options: firebaseOptions,
  );
  await Sentry.init((options) {
    options.dsn = sentryDsn;
    options.tracesSampleRate = 1.0;
  });
  await PackageInfo.fromPlatform().then(
    (value) =&gt; InfoService.package = value,
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
  <li><a href="../index">unself_monitoring</a></li>
  <li><a href="../unself_monitoring/unself_monitoring">unself_monitoring</a></li>
  <li class="self-crumb">initializeMonitoringServices function</li>
</ol>


    <h5>unself_monitoring library</h5>
    <ol>
      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#classes">Classes</a></li>
        <li><a href="../unself_monitoring/AnalyticService/AnalyticService">AnalyticService</a></li>
        <li><a href="../unself_monitoring/ErrorService/ErrorService">ErrorService</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core/2.4.1/firebase_core/Firebase-class.html">Firebase</a></li>
        <li><a href="https://pub.dev/documentation/firebase_core_platform_interface/4.5.2/firebase_core_platform_interface/FirebaseOptions-class.html">FirebaseOptions</a></li>
        <li><a href="https://pub.dev/documentation/firebase_performance/0.9.0+10/firebase_performance/FirebasePerformance-class.html">FirebasePerformance</a></li>
        <li><a href="../unself_monitoring/InfoService/InfoService">InfoService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/MobileConfig-class.html">MobileConfig</a></li>
        <li><a href="../unself_monitoring/PerformanceService/PerformanceService">PerformanceService</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/RudderConfigBuilder-class.html">RudderConfigBuilder</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter/2.3.0/RudderController/RudderController-class.html">RudderController</a></li>
        <li><a href="https://pub.dev/documentation/rudder_sdk_flutter_platform_interface/2.3.0/rudder_sdk_flutter_platform_interface/WebConfig-class.html">WebConfig</a></li>





      <li class="section-title"><a href="../unself_monitoring/unself_monitoring#functions">Functions</a></li>
        <li><a href="../unself_monitoring/initializeMonitoringServices">initializeMonitoringServices</a></li>



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
