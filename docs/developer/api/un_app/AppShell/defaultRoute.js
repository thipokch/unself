import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">defaultRoute</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://pub.dev/documentation/go_router/6.0.1/go_router/ShellRoute-class.html">ShellRoute</a>
          <span class="name ">defaultRoute</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static final defaultRoute = ShellRoute(
  navigatorKey: navigator,
  pageBuilder: (context, state, child) =&gt; UnRootSheetPage(
    child: MultiProvider(
      // create: (_) =&gt; navigator,
      providers: [
        Provider(create: (_) =&gt; navigator),
        // Provider(create: (_) =&gt; HomeBloc(navigator: _.read())),
      ],
      child: AppShell._(destinations: [
        _AppShellDestination(
          path: const UnpackRoutes().location,
          icon: const Icon(UnSymbols.list),
          selectedIcon: const Icon(UnSymbols.listFilled),
          label: 'Unpack',
        ),
        _AppShellDestination(
          path: const SettingsRoutes().location,
          icon: const Icon(UnSymbols.list),
          selectedIcon: const Icon(UnSymbols.listFilled),
          label: 'Timeline',
        ),
      ], child: child),
    ),
  ),
  // observers:  [
  // AppRoute.defaultObserver,
  // ],
  routes: [
    // \$sessionFlow,
    // Workaround for go_router_builder #2672
    // ..routes.insertAll(0, &lt;GoRoute&gt;[
    //   GoRoute(
    //     path: ":id/edit",
    //     parentNavigatorKey: AppRoute.defaultNavigator,
    //     pageBuilder: (_, state) =&gt; SessionEditRoute(state.params["id"]!)
    //         .buildPage(_, state),
    //   ),
    // ]),
    // \$exerciseFlow,
    // ..routes.insertAll(0, &lt;GoRoute&gt;[
    //   GoRoute(
    //     path: ":id/start",
    //     parentNavigatorKey: AppRoute.defaultNavigator,
    //     pageBuilder: (_, state) =&gt; ExerciseStartRoute(state.params["id"]!)
    //         .buildPage(_, state),
    //   ),
    // ]),
    \$unpackRoutes,
    \$settingsRoutes,
  ],
);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_app</a></li>
  <li><a href="../../un_app/un_app">un_app</a></li>
  <li><a href="../../un_app/AppShell">AppShell</a></li>
  <li class="self-crumb">defaultRoute property</li>
</ol>


    <h5>AppShell class</h5>
    <ol>



        <li class="section-title">
          <a href="../../un_app/AppShell#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_app/AppShell/child">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_app/AppShell#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../un_app/AppShell/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_app/AppShell#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../un_app/AppShell#static-properties">Static properties</a></li>
          <li><a href="../../un_app/AppShell/defaultRoute">defaultRoute</a></li>
          <li><a href="../../un_app/AppShell/navigator">navigator</a></li>


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
