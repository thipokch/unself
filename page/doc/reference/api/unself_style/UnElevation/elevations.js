import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">elevations</span> constant 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_style/ElevationInfo">ElevationInfo</a></span>&gt;</span>
          const <span class="name ">elevations</span>
          

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static const List&lt;ElevationInfo&gt; elevations = &lt;ElevationInfo&gt;[
  ElevationInfo(0, 0.0, 0, []),
  ElevationInfo(1, 1.0, 5, &lt;BoxShadow&gt;[
    // BoxShadow(
    //   blurRadius: 2,
    //   spreadRadius: 0,
    //   offset: Offset(0, 1),
    //   color: ElementColor.mdRefPaletteBlackA30,
    // ),
    // BoxShadow(
    //   blurRadius: 3,
    //   spreadRadius: 1,
    //   offset: Offset(0, 1),
    //   color: ElementColor.mdRefPaletteBlackA15,
    // ),
  ]),
  ElevationInfo(2, 3.0, 8, &lt;BoxShadow&gt;[
    // BoxShadow(
    //   blurRadius: 2,
    //   spreadRadius: 0,
    //   offset: Offset(0, 1),
    //   color: ElementColor.mdRefPaletteBlackA30,
    // ),
    // BoxShadow(
    //   blurRadius: 6,
    //   spreadRadius: 2,
    //   offset: Offset(0, 2),
    //   color: ElementColor.mdRefPaletteBlackA15,
    // ),
  ]),
  ElevationInfo(3, 6.0, 11, &lt;BoxShadow&gt;[
    // BoxShadow(
    //   blurRadius: 3,
    //   spreadRadius: 0,
    //   offset: Offset(0, 1),
    //   color: ElementColor.mdRefPaletteBlackA30,
    // ),
    // BoxShadow(
    //   blurRadius: 8,
    //   spreadRadius: 3,
    //   offset: Offset(0, 4),
    //   color: ElementColor.mdRefPaletteBlackA15,
    // ),
  ]),
  ElevationInfo(4, 8.0, 12, &lt;BoxShadow&gt;[
    // BoxShadow(
    //   blurRadius: 3,
    //   spreadRadius: 0,
    //   offset: Offset(0, 2),
    //   color: ElementColor.mdRefPaletteBlackA30,
    // ),
    // BoxShadow(
    //   blurRadius: 10,
    //   spreadRadius: 4,
    //   offset: Offset(0, 6),
    //   color: ElementColor.mdRefPaletteBlackA15,
    // ),
  ]),
  ElevationInfo(5, 12.0, 14, &lt;BoxShadow&gt;[
    // BoxShadow(
    //   blurRadius: 4,
    //   spreadRadius: 0,
    //   offset: Offset(0, 4),
    //   color: ElementColor.mdRefPaletteBlackA30,
    // ),
    // BoxShadow(
    //   blurRadius: 12,
    //   spreadRadius: 6,
    //   offset: Offset(0, 8),
    //   color: ElementColor.mdRefPaletteBlackA15,
    // ),
  ]),
];</code></pre>
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
  <li><a href="../../unself_style/UnElevation">UnElevation</a></li>
  <li class="self-crumb">elevations constant</li>
</ol>


    <h5>UnElevation class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_style/UnElevation#constructors">Constructors</a></li>
          <li><a href="../../unself_style/UnElevation/UnElevation.constructor">UnElevation</a></li>


        <li class="section-title inherited">
          <a href="../../unself_style/UnElevation#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnElevation#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_style/UnElevation#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




        <li class="section-title"><a href="../../unself_style/UnElevation#constants">Constants</a></li>
          <li><a href="../../unself_style/UnElevation/elevations-constant">elevations</a></li>
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
