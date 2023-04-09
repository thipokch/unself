import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="../../un_style/CustomColors">CustomColors</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-sourceGold">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceGold</span>, </span></li>
<li><span class="parameter" id="copyWith-param-gold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">gold</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onGold"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGold</span>, </span></li>
<li><span class="parameter" id="copyWith-param-goldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">goldContainer</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onGoldContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onGoldContainer</span>, </span></li>
<li><span class="parameter" id="copyWith-param-sourceVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceVanilla</span>, </span></li>
<li><span class="parameter" id="copyWith-param-vanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanilla</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onVanilla"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanilla</span>, </span></li>
<li><span class="parameter" id="copyWith-param-vanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">vanillaContainer</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onVanillaContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onVanillaContainer</span>, </span></li>
<li><span class="parameter" id="copyWith-param-sourceMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">sourceMauve</span>, </span></li>
<li><span class="parameter" id="copyWith-param-mauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauve</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onMauve"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauve</span>, </span></li>
<li><span class="parameter" id="copyWith-param-mauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">mauveContainer</span>, </span></li>
<li><span class="parameter" id="copyWith-param-onMauveContainer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">onMauveContainer</span>}</span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Creates a copy of this theme extension with the given fields
replaced by the non-null parameter values.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
CustomColors copyWith({
  Color? sourceGold,
  Color? gold,
  Color? onGold,
  Color? goldContainer,
  Color? onGoldContainer,
  Color? sourceVanilla,
  Color? vanilla,
  Color? onVanilla,
  Color? vanillaContainer,
  Color? onVanillaContainer,
  Color? sourceMauve,
  Color? mauve,
  Color? onMauve,
  Color? mauveContainer,
  Color? onMauveContainer,
}) {
  return CustomColors(
    sourceGold: sourceGold ?? this.sourceGold,
    gold: gold ?? this.gold,
    onGold: onGold ?? this.onGold,
    goldContainer: goldContainer ?? this.goldContainer,
    onGoldContainer: onGoldContainer ?? this.onGoldContainer,
    sourceVanilla: sourceVanilla ?? this.sourceVanilla,
    vanilla: vanilla ?? this.vanilla,
    onVanilla: onVanilla ?? this.onVanilla,
    vanillaContainer: vanillaContainer ?? this.vanillaContainer,
    onVanillaContainer: onVanillaContainer ?? this.onVanillaContainer,
    sourceMauve: sourceMauve ?? this.sourceMauve,
    mauve: mauve ?? this.mauve,
    onMauve: onMauve ?? this.onMauve,
    mauveContainer: mauveContainer ?? this.mauveContainer,
    onMauveContainer: onMauveContainer ?? this.onMauveContainer,
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
  <li><a href="../../index">un_style</a></li>
  <li><a href="../../un_style/un_style">un_style</a></li>
  <li><a href="../../un_style/CustomColors">CustomColors</a></li>
  <li class="self-crumb">copyWith method</li>
</ol>


    <h5>CustomColors class</h5>
    <ol>

        <li class="section-title"><a href="../../un_style/CustomColors#constructors">Constructors</a></li>
          <li><a href="../../un_style/CustomColors/CustomColors.constructor">CustomColors</a></li>


        <li class="section-title">
          <a href="../../un_style/CustomColors#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_style/CustomColors/gold">gold</a></li>
          <li><a href="../../un_style/CustomColors/goldContainer">goldContainer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_style/CustomColors/mauve">mauve</a></li>
          <li><a href="../../un_style/CustomColors/mauveContainer">mauveContainer</a></li>
          <li><a href="../../un_style/CustomColors/onGold">onGold</a></li>
          <li><a href="../../un_style/CustomColors/onGoldContainer">onGoldContainer</a></li>
          <li><a href="../../un_style/CustomColors/onMauve">onMauve</a></li>
          <li><a href="../../un_style/CustomColors/onMauveContainer">onMauveContainer</a></li>
          <li><a href="../../un_style/CustomColors/onVanilla">onVanilla</a></li>
          <li><a href="../../un_style/CustomColors/onVanillaContainer">onVanillaContainer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_style/CustomColors/sourceGold">sourceGold</a></li>
          <li><a href="../../un_style/CustomColors/sourceMauve">sourceMauve</a></li>
          <li><a href="../../un_style/CustomColors/sourceVanilla">sourceVanilla</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ThemeExtension/type.html">type</a></li>
          <li><a href="../../un_style/CustomColors/vanilla">vanilla</a></li>
          <li><a href="../../un_style/CustomColors/vanillaContainer">vanillaContainer</a></li>

        <li class="section-title"><a href="../../un_style/CustomColors#instance-methods">Methods</a></li>
          <li><a href="../../un_style/CustomColors/copyWith">copyWith</a></li>
          <li><a href="../../un_style/CustomColors/harmonized">harmonized</a></li>
          <li><a href="../../un_style/CustomColors/lerp">lerp</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_style/CustomColors#operators">Operators</a></li>
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
