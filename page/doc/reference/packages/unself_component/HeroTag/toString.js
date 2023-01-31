import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toString</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
<span class="name ">toString</span>(<wbr>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>A string representation of this object.</p>
<p>Some classes have a default textual representation,
often paired with a static <code>parse</code> function (like <a href="https://api.flutter.dev/flutter/dart-core/int/parse.html">int.parse</a>).
These classes will provide the textual representation as
their string representation.</p>
<p>Other classes have no meaningful textual representation
that a program will care about.
Such classes will typically override <code>toString</code> to provide
useful information when inspecting the object,
mainly for debugging or logging.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
String toString() =&gt;
    'Default Hero tag for Cupertino navigation bars with navigator \$navigator';</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/HeroTag/HeroTag">HeroTag</a></li>
  <li class="self-crumb">toString method</li>
</ol>


    <h5>HeroTag class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#constructors">Constructors</a></li>
          <li><a href="../../unself_component/HeroTag/HeroTag.constructor">HeroTag</a></li>


        <li class="section-title">
          <a href="../../unself_component/HeroTag/HeroTag#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/HeroTag/hashCode">hashCode</a></li>
          <li><a href="../../unself_component/HeroTag/navigator">navigator</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_component/HeroTag/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#operators">Operators</a></li>
          <li><a href="../../unself_component/HeroTag/operator_equals">operator ==</a></li>




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
