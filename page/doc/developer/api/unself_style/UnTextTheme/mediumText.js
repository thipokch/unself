import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">mediumText</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/material/TextTheme-class.html">TextTheme</a></span>
  <span class="name ">mediumText</span>
  

</section>


<section class="desc markdown">
  <p><code>TextTheme</code> for for medium screens.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static TextTheme get mediumText =&gt; TextTheme(
      displayLarge: _.displayLarge,
      displayMedium: _.displayMedium,
      displaySmall: _.displaySmall,
      headlineLarge: _.headlineLarge,
      headlineMedium: _.headlineMedium,
      headlineSmall: _.headlineSmall,
      titleLarge: _.titleLarge,
      titleMedium: _.titleMedium,
      titleSmall: _.titleSmall,
      bodyLarge: _.bodyLarge,
      bodyMedium: _.bodyMedium,
      bodySmall: _.bodySmall,
      labelLarge: _.labelLarge,
      labelMedium: _.labelMedium,
      labelSmall: _.labelSmall,
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
  <li><a href="../../index">unself_style</a></li>
  <li><a href="../../unself_style/unself_style">unself_style</a></li>
  <li><a href="../../unself_style/UnTextTheme">UnTextTheme</a></li>
  <li class="self-crumb">mediumText property</li>
</ol>


    <h5>UnTextTheme class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/UnTextTheme#constructors">Constructors</a></li>
          <li><a href="../../unself_style/UnTextTheme/UnTextTheme.constructor">UnTextTheme</a></li>


        <li class="section-title inherited">
          <a href="../../unself_style/UnTextTheme#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnTextTheme#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnTextTheme#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_style/UnTextTheme#static-properties">Static properties</a></li>
          <li><a href="../../unself_style/UnTextTheme/largeText">largeText</a></li>
          <li><a href="../../unself_style/UnTextTheme/mediumText">mediumText</a></li>
          <li><a href="../../unself_style/UnTextTheme/smallText">smallText</a></li>


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
