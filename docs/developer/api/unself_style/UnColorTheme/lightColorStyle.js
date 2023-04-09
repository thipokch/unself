import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">lightColorStyle</span> constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a>
          const <span class="name ">lightColorStyle</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static const ColorScheme lightColorStyle = ColorScheme(
  brightness: Brightness.light,
  primary: Color(0xFF5455A9),
  onPrimary: Color(0xFFFFFFFF),
  primaryContainer: Color(0xFFE1DFFF),
  onPrimaryContainer: Color(0xFF0B0664),
  secondary: Color(0xFF5D5C72),
  onSecondary: Color(0xFFFFFFFF),
  secondaryContainer: Color(0xFFE2E0F9),
  onSecondaryContainer: Color(0xFF1A1A2C),
  tertiary: Color(0xFF795369),
  onTertiary: Color(0xFFFFFFFF),
  tertiaryContainer: Color(0xFFFFD8EC),
  onTertiaryContainer: Color(0xFF2E1125),
  error: Color(0xFFBA1A1A),
  errorContainer: Color(0xFFFFDAD6),
  onError: Color(0xFFFFFFFF),
  onErrorContainer: Color(0xFF410002),
  background: Color(0xFFFFFBFF),
  onBackground: Color(0xFF1C1B1F),
  surface: Color(0xFFFFFBFF),
  onSurface: Color(0xFF1C1B1F),
  surfaceVariant: Color(0xFFE4E1EC),
  onSurfaceVariant: Color(0xFF47464F),
  outline: Color(0xFF777680),
  onInverseSurface: Color(0xFFF3EFF4),
  inverseSurface: Color(0xFF313034),
  inversePrimary: Color(0xFFC1C1FF),
  shadow: Color(0xFF000000),
  surfaceTint: Color(0xFF5455A9),
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
  <li><a href="../../unself_style/UnColorTheme">UnColorTheme</a></li>
  <li class="self-crumb">lightColorStyle constant</li>
</ol>


    <h5>UnColorTheme class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/UnColorTheme#constructors">Constructors</a></li>
          <li><a href="../../unself_style/UnColorTheme/UnColorTheme.constructor">UnColorTheme</a></li>


        <li class="section-title inherited">
          <a href="../../unself_style/UnColorTheme#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnColorTheme#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




        <li class="section-title"><a href="../../unself_style/UnColorTheme#constants">Constants</a></li>
          <li><a href="../../unself_style/UnColorTheme/darkColorStyle-constant">darkColorStyle</a></li>
          <li><a href="../../unself_style/UnColorTheme/darkCustomColors-constant">darkCustomColors</a></li>
          <li><a href="../../unself_style/UnColorTheme/lightColorStyle-constant">lightColorStyle</a></li>
          <li><a href="../../unself_style/UnColorTheme/lightCustomColors-constant">lightCustomColors</a></li>
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
