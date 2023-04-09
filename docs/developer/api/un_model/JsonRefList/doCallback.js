import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">doCallback</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">dynamic</span>
<span class="name ">doCallback</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="doCallback-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span></li>
<li><span class="parameter" id="doCallback-param-callback"><span class="type-annotation"><a href="../../un_model/DoCallback">DoCallback</a></span> <span class="parameter-name">callback</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">dynamic doCallback(dynamic json, DoCallback callback) =&gt;
    (json as List).map((item) =&gt; callback(item, schema)).toList();</code></pre>
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
  <li class="self-crumb">doCallback method</li>
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
