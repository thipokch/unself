import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-valueFrom">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">valueFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/ValueFrom">ValueFrom</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-slugFrom"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">slugFrom</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/SlugFrom">SlugFrom</a></span> <span class="parameter-name">value</span></span></li>
</ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult map&lt;TResult extends Object?&gt;({
  required TResult Function(ValueFrom value) valueFrom,
  required TResult Function(SlugFrom value) slugFrom,
}) =&gt;
    throw _privateConstructorUsedError;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/JsonRefValue">JsonRefValue</a></li>
  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>JsonRefValue class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/JsonRefValue#constructors">Constructors</a></li>
          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.fromJson">fromJson</a></li>
          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.slugFrom">slugFrom</a></li>
          <li><a href="../../unself_model/JsonRefValue/JsonRefValue.valueFrom">valueFrom</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/JsonRefValue#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/map">map</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/when">when</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRefValue/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_model/JsonRefValue#operators">Operators</a></li>
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
