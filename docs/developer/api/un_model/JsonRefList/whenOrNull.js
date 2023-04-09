import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult?</span>
<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-ref">{<span class="type-annotation">TResult?</span> <span class="parameter-name">ref</span>(<ol class="parameter-list"><li><span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-union"><span class="type-annotation">TResult?</span> <span class="parameter-name">union</span>(<ol class="parameter-list"><li><span class="parameter" id="param-names"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">names</span>, </span></li>
<li><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span></span></li>
</ol>
)?}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult? whenOrNull&lt;TResult extends Object?&gt;({
  TResult? Function(String name)? ref,
  TResult? Function(List&lt;String&gt; names, String key)? union,
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
  <li><a href="../../index">un_model</a></li>
  <li><a href="../../un_model/un_model">un_model</a></li>
  <li><a href="../../un_model/JsonRefList">JsonRefList</a></li>
  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>JsonRefList class</h5>
    <ol>

        <li class="section-title"><a href="../../un_model/JsonRefList#constructors">Constructors</a></li>
          <li><a href="../../un_model/JsonRefList/JsonRefList.fromJson">fromJson</a></li>
          <li><a href="../../un_model/JsonRefList/JsonRefList.ref">ref</a></li>
          <li><a href="../../un_model/JsonRefList/JsonRefList.union">union</a></li>


        <li class="section-title">
          <a href="../../un_model/JsonRefList#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../un_model/JsonRefList/schema">schema</a></li>

        <li class="section-title"><a href="../../un_model/JsonRefList#instance-methods">Methods</a></li>
          <li><a href="../../un_model/JsonRefList/doCallback">doCallback</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/map">map</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/when">when</a></li>
          <li class="inherited"><a href="../../un_model/JsonRefList/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../un_model/JsonRefList#operators">Operators</a></li>
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
