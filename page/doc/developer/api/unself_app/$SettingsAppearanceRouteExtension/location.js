import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">location</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  <span class="name ">location</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">String get location =&gt; GoRouteData.\$location(
      '/settings/appearance',
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
  <li><a href="../../index">unself_app</a></li>
  <li><a href="../../unself_app/unself_app">unself_app</a></li>
  <li><a href="../../unself_app/\$SettingsAppearanceRouteExtension">\$SettingsAppearanceRouteExtension</a></li>
  <li class="self-crumb">location property</li>
</ol>


    <h5>\$SettingsAppearanceRouteExtension extension</h5>
    <ol>




        <li class="section-title"> <a href="../../unself_app/\$SettingsAppearanceRouteExtension#instance-properties">Properties</a></li>
          <li><a href="../../unself_app/\$SettingsAppearanceRouteExtension/location">location</a></li>

        <li class="section-title"><a href="../../unself_app/\$SettingsAppearanceRouteExtension#instance-methods">Methods</a></li>
          <li><a href="../../unself_app/\$SettingsAppearanceRouteExtension/go">go</a></li>
          <li><a href="../../unself_app/\$SettingsAppearanceRouteExtension/push">push</a></li>




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
