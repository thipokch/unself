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
<span class="name ">map</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="map-param-ref">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">ref</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/Ref">Ref</a></span> <span class="parameter-name">value</span></span></li>
</ol>
), </span></li>
<li><span class="parameter" id="map-param-union"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">union</span>(<ol class="parameter-list"><li><span class="parameter" id="param-value"><span class="type-annotation"><a href="../../unself_model/Union">Union</a></span> <span class="parameter-name">value</span></span></li>
</ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult map&lt;TResult extends Object?&gt;({
  required TResult Function(Ref value) ref,
  required TResult Function(Union value) union,
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
  <li><a href="../../unself_model/JsonRef">JsonRef</a></li>
  <li class="self-crumb">map&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>JsonRef class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/JsonRef#constructors">Constructors</a></li>
          <li><a href="../../unself_model/JsonRef/JsonRef.fromJson">fromJson</a></li>
          <li><a href="../../unself_model/JsonRef/JsonRef.ref">ref</a></li>
          <li><a href="../../unself_model/JsonRef/JsonRef.union">union</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/JsonRef#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_model/JsonRef#instance-methods">Methods</a></li>
          <li><a href="../../unself_model/JsonRef/getScheme">getScheme</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/map">map</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_model/JsonRef/useId">useId</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/when">when</a></li>
          <li class="inherited"><a href="../../unself_model/JsonRef/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../unself_model/JsonRef#operators">Operators</a></li>
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
