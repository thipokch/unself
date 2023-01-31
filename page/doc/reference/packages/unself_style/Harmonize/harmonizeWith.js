import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">harmonizeWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a></span>
<span class="name ">harmonizeWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="harmonizeWith-param-color"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a></span> <span class="parameter-name">color</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">ColorScheme harmonizeWith(Color color) =&gt; ColorScheme(
      brightness: brightness,
      primary: primary.harmonizeWith(color),
      onPrimary: onPrimary.harmonizeWith(color),
      primaryContainer: primaryContainer.harmonizeWith(color),
      onPrimaryContainer: onPrimaryContainer.harmonizeWith(color),
      secondary: secondary.harmonizeWith(color),
      onSecondary: onSecondary.harmonizeWith(color),
      secondaryContainer: secondaryContainer.harmonizeWith(color),
      onSecondaryContainer: onSecondaryContainer.harmonizeWith(color),
      tertiary: tertiary.harmonizeWith(color),
      onTertiary: onTertiary.harmonizeWith(color),
      tertiaryContainer: tertiaryContainer.harmonizeWith(color),
      onTertiaryContainer: onTertiaryContainer.harmonizeWith(color),
      error: error.harmonizeWith(color),
      onError: onError.harmonizeWith(color),
      errorContainer: errorContainer.harmonizeWith(color),
      onErrorContainer: onErrorContainer.harmonizeWith(color),
      background: background.harmonizeWith(color),
      onBackground: onBackground.harmonizeWith(color),
      surface: surface.harmonizeWith(color),
      onSurface: onSurface.harmonizeWith(color),
      surfaceVariant: surfaceVariant.harmonizeWith(color),
      onSurfaceVariant: onSurfaceVariant.harmonizeWith(color),
      outline: outline.harmonizeWith(color),
      shadow: shadow.harmonizeWith(color),
      inverseSurface: inverseSurface.harmonizeWith(color),
      onInverseSurface: onInverseSurface.harmonizeWith(color),
      inversePrimary: inversePrimary.harmonizeWith(color),
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
  <li><a href="../../index">unself_style</a></li>
  <li><a href="../../unself_style/unself_style">unself_style</a></li>
  <li><a href="../../unself_style/Harmonize">Harmonize</a></li>
  <li class="self-crumb">harmonizeWith method</li>
</ol>


    <h5>Harmonize extension</h5>
    <ol>





        <li class="section-title"><a href="../../unself_style/Harmonize#instance-methods">Methods</a></li>
          <li><a href="../../unself_style/Harmonize/harmonizeWith">harmonizeWith</a></li>




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
