import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">recordError</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
<span class="name ">recordError</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="recordError-param-exception"><span class="type-annotation">dynamic</span> <span class="parameter-name">exception</span>, </span></li>
<li><span class="parameter" id="recordError-param-stack"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a>?</span> <span class="parameter-name">stack</span>, </span></li>
<li><span class="parameter" id="recordError-param-fatal">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">fatal</span> = <span class="default-value">false</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Future&lt;void&gt; recordError(
  dynamic exception,
  StackTrace? stack, {
  bool fatal = false,
}) async {
  await Sentry.captureException(
    exception,
    stackTrace: stack,
    // TODO: Report non fatal errors to Sentry via \`Sentry.captureEvent\`
  );

  // Pass all uncaught errors from the framework to Crashlytics.
  // https://firebase.google.com/docs/crashlytics/customize-crash-reports?platform=flutter
  await FirebaseCrashlytics.instance.recordError(
    exception,
    stack,
    fatal: fatal,
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
  <li><a href="../../index">un_monitoring</a></li>
  <li><a href="../../un_monitoring/un_monitoring">un_monitoring</a></li>
  <li><a href="../../un_monitoring/ErrorService">ErrorService</a></li>
  <li class="self-crumb">recordError static method</li>
</ol>


    <h5>ErrorService class</h5>
    <ol>

        <li class="section-title"><a href="../../un_monitoring/ErrorService#constructors">Constructors</a></li>
          <li><a href="../../un_monitoring/ErrorService/ErrorService.constructor">ErrorService</a></li>


        <li class="section-title inherited">
          <a href="../../un_monitoring/ErrorService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_monitoring/ErrorService#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_monitoring/ErrorService#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../un_monitoring/ErrorService#static-methods">Static methods</a></li>
          <li><a href="../../un_monitoring/ErrorService/recordError">recordError</a></li>
          <li><a href="../../un_monitoring/ErrorService/recordFlutterError">recordFlutterError</a></li>
          <li><a href="../../un_monitoring/ErrorService/recordIsolateError">recordIsolateError</a></li>
          <li><a href="../../un_monitoring/ErrorService/runAppGuarded">runAppGuarded</a></li>

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
