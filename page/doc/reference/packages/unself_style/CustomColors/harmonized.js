import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">harmonized</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_style/CustomColors/CustomColors">CustomColors</a></span>
<span class="name ">harmonized</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="harmonized-param-dynamic"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ColorScheme-class.html">ColorScheme</a></span> <span class="parameter-name">dynamic</span></span></li>
</ol>)

      

    </section>
    
<section class="desc markdown">
  <p>Returns an instance of <a href="../../unself_style/CustomColors/CustomColors">CustomColors</a> in which the following custom
colors are harmonized with <code>dynamic</code>'s <a href="https://api.flutter.dev/flutter/material/ColorScheme/primary.html">ColorScheme.primary</a>.</p>
<ul>
<li><a href="../../unself_style/CustomColors/sourceGold">CustomColors.sourceGold</a></li>
<li><a href="../../unself_style/CustomColors/gold">CustomColors.gold</a></li>
<li><a href="../../unself_style/CustomColors/onGold">CustomColors.onGold</a></li>
<li><a href="../../unself_style/CustomColors/goldContainer">CustomColors.goldContainer</a></li>
<li><a href="../../unself_style/CustomColors/onGoldContainer">CustomColors.onGoldContainer</a></li>
<li><a href="../../unself_style/CustomColors/sourceVanilla">CustomColors.sourceVanilla</a></li>
<li><a href="../../unself_style/CustomColors/vanilla">CustomColors.vanilla</a></li>
<li><a href="../../unself_style/CustomColors/onVanilla">CustomColors.onVanilla</a></li>
<li><a href="../../unself_style/CustomColors/vanillaContainer">CustomColors.vanillaContainer</a></li>
<li><a href="../../unself_style/CustomColors/onVanillaContainer">CustomColors.onVanillaContainer</a></li>
<li><a href="../../unself_style/CustomColors/sourceMauve">CustomColors.sourceMauve</a></li>
<li><a href="../../unself_style/CustomColors/mauve">CustomColors.mauve</a></li>
<li><a href="../../unself_style/CustomColors/onMauve">CustomColors.onMauve</a></li>
<li><a href="../../unself_style/CustomColors/mauveContainer">CustomColors.mauveContainer</a></li>
<li><a href="../../unself_style/CustomColors/onMauveContainer">CustomColors.onMauveContainer</a></li>
</ul>
<p>See also:</p>
<ul>
<li><a href="https://m3.material.io/styles/color/the-color-system/custom-colors#harmonization">m3.material.io/styles/color/the-color-system/custom-colors#harmonization</a></li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">CustomColors harmonized(ColorScheme dynamic) {
  return copyWith(
    sourceGold: sourceGold!.harmonizeWith(dynamic.primary),
    gold: gold!.harmonizeWith(dynamic.primary),
    onGold: onGold!.harmonizeWith(dynamic.primary),
    goldContainer: goldContainer!.harmonizeWith(dynamic.primary),
    onGoldContainer: onGoldContainer!.harmonizeWith(dynamic.primary),
    sourceVanilla: sourceVanilla!.harmonizeWith(dynamic.primary),
    vanilla: vanilla!.harmonizeWith(dynamic.primary),
    onVanilla: onVanilla!.harmonizeWith(dynamic.primary),
    vanillaContainer: vanillaContainer!.harmonizeWith(dynamic.primary),
    onVanillaContainer: onVanillaContainer!.harmonizeWith(dynamic.primary),
    sourceMauve: sourceMauve!.harmonizeWith(dynamic.primary),
    mauve: mauve!.harmonizeWith(dynamic.primary),
    onMauve: onMauve!.harmonizeWith(dynamic.primary),
    mauveContainer: mauveContainer!.harmonizeWith(dynamic.primary),
    onMauveContainer: onMauveContainer!.harmonizeWith(dynamic.primary),
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
  <li><a href="../../index">unself_style</a></li>
  <li><a href="../../unself_style/unself_style">unself_style</a></li>
  <li><a href="../../unself_style/CustomColors/CustomColors">CustomColors</a></li>
  <li class="self-crumb">harmonized method</li>
</ol>


    <h5>CustomColors class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/CustomColors/CustomColors#constructors">Constructors</a></li>
          <li><a href="../../unself_style/CustomColors/CustomColors.constructor">CustomColors</a></li>


        <li class="section-title">
          <a href="../../unself_style/CustomColors/CustomColors#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_style/CustomColors/gold">gold</a></li>
          <li><a href="../../unself_style/CustomColors/goldContainer">goldContainer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_style/CustomColors/mauve">mauve</a></li>
          <li><a href="../../unself_style/CustomColors/mauveContainer">mauveContainer</a></li>
          <li><a href="../../unself_style/CustomColors/onGold">onGold</a></li>
          <li><a href="../../unself_style/CustomColors/onGoldContainer">onGoldContainer</a></li>
          <li><a href="../../unself_style/CustomColors/onMauve">onMauve</a></li>
          <li><a href="../../unself_style/CustomColors/onMauveContainer">onMauveContainer</a></li>
          <li><a href="../../unself_style/CustomColors/onVanilla">onVanilla</a></li>
          <li><a href="../../unself_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_style/CustomColors/sourceGold">sourceGold</a></li>
          <li><a href="../../unself_style/CustomColors/sourceMauve">sourceMauve</a></li>
          <li><a href="../../unself_style/CustomColors/sourceVanilla">sourceVanilla</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>
          <li><a href="../../unself_style/CustomColors/vanilla">vanilla</a></li>
          <li><a href="../../unself_style/CustomColors/vanillaContainer">vanillaContainer</a></li>

        <li class="section-title"><a href="../../unself_style/CustomColors/CustomColors#instance-methods">Methods</a></li>
          <li><a href="../../unself_style/CustomColors/copyWith">copyWith</a></li>
          <li><a href="../../unself_style/CustomColors/harmonized">harmonized</a></li>
          <li><a href="../../unself_style/CustomColors/lerp">lerp</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/CustomColors/CustomColors#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
