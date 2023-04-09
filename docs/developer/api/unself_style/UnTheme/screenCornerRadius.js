import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">screenCornerRadius</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://pub.dev/documentation/figma_squircle/0.5.3/figma_squircle/SmoothRadius-class.html">SmoothRadius</a></span>
<span class="name ">screenCornerRadius</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="screenCornerRadius-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static SmoothRadius screenCornerRadius(BuildContext context) =&gt; SmoothRadius(
      cornerRadius: MediaQuery.of(context).padding.top / 2,
      cornerSmoothing: UnCorner.smoothFactor,
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
  <li><a href="../../unself_style/UnTheme">UnTheme</a></li>
  <li class="self-crumb">screenCornerRadius static method</li>
</ol>


    <h5>UnTheme class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/UnTheme#constructors">Constructors</a></li>
          <li><a href="../../unself_style/UnTheme/UnTheme.constructor">UnTheme</a></li>


        <li class="section-title inherited">
          <a href="../../unself_style/UnTheme#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnTheme#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnTheme#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>


        <li class="section-title"><a href="../../unself_style/UnTheme#static-properties">Static properties</a></li>
          <li><a href="../../unself_style/UnTheme/dark">dark</a></li>
          <li><a href="../../unself_style/UnTheme/defaultTheme">defaultTheme</a></li>
          <li><a href="../../unself_style/UnTheme/light">light</a></li>

        <li class="section-title"><a href="../../unself_style/UnTheme#static-methods">Static methods</a></li>
          <li><a href="../../unself_style/UnTheme/screenCornerRadius">screenCornerRadius</a></li>

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
