import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">init</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/provider/6.0.5/provider/MultiProvider-class.html">MultiProvider</a></span>&gt;</span></span>
<span class="name ">init</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="init-param-builder">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">builder</span>(<ol class="parameter-list"><li><span class="parameter" id="param-"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span>, </span></li>
<li><span class="parameter" id="param-"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="init-param-isDebug"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isDebug</span>, </span></li>
<li><span class="parameter" id="init-param-rudderWriteKey"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">rudderWriteKey</span>, </span></li>
<li><span class="parameter" id="init-param-rudderDataPlaneUrl"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">rudderDataPlaneUrl</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Future&lt;MultiProvider&gt; init({
  Widget Function(BuildContext, Widget?)? builder,
  required bool isDebug,
  required String rudderWriteKey,
  required String rudderDataPlaneUrl,
}) async {
  return MultiProvider(
    builder: builder,
    providers: [
      // [Provider] create/update are lazy by default
      Provider&lt;UserService&gt;(
        create: (_) =&gt; const UserService(),
      ),
      Provider&lt;LicenseService&gt;(
        create: (_) =&gt; const LicenseService(),
      ),
      // Provider&lt;ExerciseRepository&gt;(
      //   create: (_) =&gt; ExerciseRepository(),
      // ),
      Provider&lt;AnalyticService&gt;(
        lazy: false, // Track lifecycle events
        create: (_) =&gt; AnalyticService(
            rudder: RudderController.instance
              ..initialize(
                rudderWriteKey,
                config: RudderConfigBuilder()
                    .withDataPlaneUrl(rudderDataPlaneUrl)
                    .withFactory(RudderIntegrationFirebaseFlutter())
                    .withDebug(isDebug)
                    .build(),
              )),
      ),
      Provider&lt;InfoService&gt;(
        create: (_) =&gt; InfoService(analytic: _.read()),
      ),
      // Provider&lt;MessageService&gt;(
      //   create: (_) =&gt; MessageService(),
      // ),
      Provider&lt;PerformanceService&gt;(
        create: (_) =&gt;
            PerformanceService(performance: FirebasePerformance.instance),
      ),

      // Provider&lt;FirebaseAppCheck&gt;(
      //   create: (_) =&gt; FirebaseAppCheck.instance,
      // ),
      // Provider&lt;FirebaseInAppMessaging&gt;(
      //   create: (_) =&gt; FirebaseInAppMessaging.instance,
      // ),
      // ListenableProvider&lt;FirebaseRemoteConfig&gt;(
      //   create: (_) {
      //     if (remoteConfig != null) {
      //       FirebaseRemoteConfig.instance.setConfigSettings(remoteConfig!);
      //     }

      //     return FirebaseRemoteConfig.instance;
      //   },
      // ),
      // Provider&lt;GlobalKey&lt;NavigatorState&gt;&gt;.value(
      //   value: AppRouter.defaultNavigator,
      // ),
      // if (!kIsWeb)
      //   Provider&lt;RisoShader&gt;.value(
      //     value: await RisoShader.load(),
      //   ),
      // Provider&lt;Browser&gt;(
      //   create: (context) =&gt; Browser(analytics: ),
      // ),
    ],
    child: const App._(),
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
  <li><a href="../../index">unself_app</a></li>
  <li><a href="../../unself_app/unself_app">unself_app</a></li>
  <li><a href="../../unself_app/App">App</a></li>
  <li class="self-crumb">init static method</li>
</ol>


    <h5>App class</h5>
    <ol>



        <li class="section-title inherited">
          <a href="../../unself_app/App#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_app/App#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../unself_app/App/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_app/App#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unself_app/App#static-methods">Static methods</a></li>
          <li><a href="../../unself_app/App/init">init</a></li>

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
