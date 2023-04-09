import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult</span>
<span class="name ">maybeWhen</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="maybeWhen-param-ref">{<span class="type-annotation">TResult</span> <span class="parameter-name">ref</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="maybeWhen-param-union"><span class="type-annotation">TResult</span> <span class="parameter-name">union</span>(<ol class="parameter-list"><li><span class="parameter" id="param-names"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">names</span>, </span></li>
<li><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>(<ol class="parameter-list"></ol>
)}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult maybeWhen&lt;TResult extends Object?&gt;({
  TResult Function(String name)? ref,
  TResult Function(List&lt;String&gt; names, String key)? union,
  required TResult orElse(),
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
  <li class="self-crumb">maybeWhen&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
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
