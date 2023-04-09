import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">lightCustomColors</span> constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="../../un_style/CustomColors">CustomColors</a>
          const <span class="name ">lightCustomColors</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static const CustomColors lightCustomColors = CustomColors(
  sourceGold: Color(0xFFE2C197),
  gold: Color(0xFF825500),
  onGold: Color(0xFFFFFFFF),
  goldContainer: Color(0xFFFFDDB3),
  onGoldContainer: Color(0xFF291800),
  sourceVanilla: Color(0xFFC1CBA2),
  vanilla: Color(0xFF4F6703),
  onVanilla: Color(0xFFFFFFFF),
  vanillaContainer: Color(0xFFD0EE82),
  onVanillaContainer: Color(0xFF151F00),
  sourceMauve: Color(0xFFE9BAC7),
  mauve: Color(0xFF984062),
  onMauve: Color(0xFFFFFFFF),
  mauveContainer: Color(0xFFFFD9E3),
  onMauveContainer: Color(0xFF3E001E),
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
  <li class="self-crumb">lightCustomColors constant</li>
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
