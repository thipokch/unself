import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-top-level-property">\$settingsRoutes</span> top-level property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://pub.dev/documentation/go_router/6.0.1/go_router/GoRoute-class.html">GoRoute</a></span>
  <span class="name ">\$settingsRoutes</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">GoRoute get \$settingsRoutes =&gt; GoRouteData.\$route(
      path: '/settings',
      factory: \$SettingsRoutesExtension._fromState,
      routes: [
        GoRouteData.\$route(
          path: 'data',
          factory: \$SettingsDataRouteExtension._fromState,
        ),
        GoRouteData.\$route(
          path: 'appearance',
          factory: \$SettingsAppearanceRouteExtension._fromState,
        ),
        GoRouteData.\$route(
          path: 'license',
          factory: \$LicenseListRouteExtension._fromState,
          routes: [
            GoRouteData.\$route(
              path: ':id',
              factory: \$LicenseDetailRouteExtension._fromState,
            ),
          ],
        ),
      ],
    );</code></pre>
</section>

</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_app</a></li>
  <li><a href="../unself_app/unself_app">unself_app</a></li>
  <li class="self-crumb">\$settingsRoutes property</li>
</ol>


    <h5>unself_app library</h5>
    <ol>
      <li class="section-title"><a href="../unself_app/unself_app#classes">Classes</a></li>
        <li><a href="../unself_app/AnalyticRouteObserver/AnalyticRouteObserver">AnalyticRouteObserver</a></li>
        <li><a href="../unself_app/App/App">App</a></li>
        <li><a href="../unself_app/AppRouter/AppRouter">AppRouter</a></li>
        <li><a href="../unself_app/AppShell/AppShell">AppShell</a></li>
        <li><a href="../unself_app/LicenseDetailRoute/LicenseDetailRoute">LicenseDetailRoute</a></li>
        <li><a href="../unself_app/LicenseListRoute/LicenseListRoute">LicenseListRoute</a></li>
        <li><a href="../unself_app/SettingsAppearanceRoute/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>
        <li><a href="../unself_app/SettingsDataRoute/SettingsDataRoute">SettingsDataRoute</a></li>
        <li><a href="../unself_app/SettingsListRoute/SettingsListRoute">SettingsListRoute</a></li>
        <li><a href="../unself_app/SettingsRoutes/SettingsRoutes">SettingsRoutes</a></li>
        <li><a href="../unself_app/UnpackAssistantRoute/UnpackAssistantRoute">UnpackAssistantRoute</a></li>
        <li><a href="../unself_app/UnpackRoutes/UnpackRoutes">UnpackRoutes</a></li>

      <li class="section-title"><a href="../unself_app/unself_app#extensions">Extensions</a></li>
        <li><a href="../unself_app/\$LicenseDetailRouteExtension">\$LicenseDetailRouteExtension</a></li>
        <li><a href="../unself_app/\$LicenseListRouteExtension">\$LicenseListRouteExtension</a></li>
        <li><a href="../unself_app/\$SettingsAppearanceRouteExtension">\$SettingsAppearanceRouteExtension</a></li>
        <li><a href="../unself_app/\$SettingsDataRouteExtension">\$SettingsDataRouteExtension</a></li>
        <li><a href="../unself_app/\$SettingsRoutesExtension">\$SettingsRoutesExtension</a></li>
        <li><a href="../unself_app/\$UnpackRoutesExtension">\$UnpackRoutesExtension</a></li>



      <li class="section-title"><a href="../unself_app/unself_app#properties">Properties</a></li>
        <li><a href="../unself_app/\$appRoutes">\$appRoutes</a></li>
        <li><a href="../unself_app/\$settingsRoutes">\$settingsRoutes</a></li>
        <li><a href="../unself_app/\$unpackRoutes">\$unpackRoutes</a></li>



      <li class="section-title"><a href="../unself_app/unself_app#typedefs">Typedefs</a></li>
        <li><a href="../unself_app/RouteFilter">RouteFilter</a></li>
        <li><a href="../unself_app/ScreenNameExtractor">ScreenNameExtractor</a></li>

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
