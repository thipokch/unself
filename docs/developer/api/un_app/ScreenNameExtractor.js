import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-typedef">ScreenNameExtractor</span> typedef 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        <span class="name ">ScreenNameExtractor</span> =
     <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>? Function<span class="signature">(<span class="parameter" id="param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a></span> <span class="parameter-name">settings</span></span>)</span></span>

    </section>

    

    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">typedef ScreenNameExtractor = String? Function(RouteSettings settings);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">un_app</a></li>
  <li><a href="../un_app/un_app">un_app</a></li>
  <li class="self-crumb">ScreenNameExtractor typedef</li>
</ol>


    <h5>un_app library</h5>
    <ol>
      <li class="section-title"><a href="../un_app/un_app#classes">Classes</a></li>
        <li><a href="../un_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>
        <li><a href="../un_app/App">App</a></li>
        <li><a href="../un_app/AppRouter">AppRouter</a></li>
        <li><a href="../un_app/AppShell">AppShell</a></li>
        <li><a href="../un_app/LicenseDetailRoute">LicenseDetailRoute</a></li>
        <li><a href="../un_app/LicenseListRoute">LicenseListRoute</a></li>
        <li><a href="../un_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>
        <li><a href="../un_app/SettingsDataRoute">SettingsDataRoute</a></li>
        <li><a href="../un_app/SettingsListRoute">SettingsListRoute</a></li>
        <li><a href="../un_app/SettingsRoutes">SettingsRoutes</a></li>
        <li><a href="../un_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>
        <li><a href="../un_app/UnpackRoutes">UnpackRoutes</a></li>

      <li class="section-title"><a href="../un_app/un_app#extensions">Extensions</a></li>
        <li><a href="../un_app/\$LicenseDetailRouteExtension">\$LicenseDetailRouteExtension</a></li>
        <li><a href="../un_app/\$LicenseListRouteExtension">\$LicenseListRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsAppearanceRouteExtension">\$SettingsAppearanceRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsDataRouteExtension">\$SettingsDataRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsRoutesExtension">\$SettingsRoutesExtension</a></li>
        <li><a href="../un_app/\$UnpackRoutesExtension">\$UnpackRoutesExtension</a></li>



      <li class="section-title"><a href="../un_app/un_app#properties">Properties</a></li>
        <li><a href="../un_app/\$appRoutes">\$appRoutes</a></li>
        <li><a href="../un_app/\$settingsRoutes">\$settingsRoutes</a></li>
        <li><a href="../un_app/\$unpackRoutes">\$unpackRoutes</a></li>



      <li class="section-title"><a href="../un_app/un_app#typedefs">Typedefs</a></li>
        <li><a href="../un_app/RouteFilter">RouteFilter</a></li>
        <li><a href="../un_app/ScreenNameExtractor">ScreenNameExtractor</a></li>

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
