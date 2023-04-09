import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">darkColorStyle</span> constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a>
          const <span class="name ">darkColorStyle</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static const ColorScheme darkColorStyle = ColorScheme(
  brightness: Brightness.dark,
  primary: Color(0xFFC1C1FF),
  onPrimary: Color(0xFF242478),
  primaryContainer: Color(0xFF3B3D8F),
  onPrimaryContainer: Color(0xFFE1DFFF),
  secondary: Color(0xFFC6C4DD),
  onSecondary: Color(0xFF2F2F42),
  secondaryContainer: Color(0xFF454559),
  onSecondaryContainer: Color(0xFFE2E0F9),
  tertiary: Color(0xFFE9B9D3),
  onTertiary: Color(0xFF46263A),
  tertiaryContainer: Color(0xFF5F3C51),
  onTertiaryContainer: Color(0xFFFFD8EC),
  error: Color(0xFFFFB4AB),
  errorContainer: Color(0xFF93000A),
  onError: Color(0xFF690005),
  onErrorContainer: Color(0xFFFFDAD6),
  background: Color(0xFF1C1B1F),
  onBackground: Color(0xFFE5E1E6),
  surface: Color(0xFF1C1B1F),
  onSurface: Color(0xFFE5E1E6),
  surfaceVariant: Color(0xFF47464F),
  onSurfaceVariant: Color(0xFFC8C5D0),
  outline: Color(0xFF918F9A),
  onInverseSurface: Color(0xFF1C1B1F),
  inverseSurface: Color(0xFFE5E1E6),
  inversePrimary: Color(0xFF5455A9),
  shadow: Color(0xFF000000),
  surfaceTint: Color(0xFFC1C1FF),
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
  <li><a href="../../index">un_style</a></li>
  <li><a href="../../un_style/un_style">un_style</a></li>
  <li><a href="../../un_style/UnColorTheme">UnColorTheme</a></li>
  <li class="self-crumb">darkColorStyle constant</li>
</ol>


    <h5>UnColorTheme class</h5>
    <ol>

        <li class="section-title"><a href="../../un_style/UnColorTheme#constructors">Constructors</a></li>
          <li><a href="../../un_style/UnColorTheme/UnColorTheme.constructor">UnColorTheme</a></li>


        <li class="section-title inherited">
          <a href="../../un_style/UnColorTheme#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../un_style/UnColorTheme#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_style/UnColorTheme#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




        <li class="section-title"><a href="../../un_style/UnColorTheme#constants">Constants</a></li>
          <li><a href="../../un_style/UnColorTheme/darkColorStyle-constant">darkColorStyle</a></li>
          <li><a href="../../un_style/UnColorTheme/darkCustomColors-constant">darkCustomColors</a></li>
          <li><a href="../../un_style/UnColorTheme/lightColorStyle-constant">lightColorStyle</a></li>
          <li><a href="../../un_style/UnColorTheme/lightCustomColors-constant">lightCustomColors</a></li>
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
