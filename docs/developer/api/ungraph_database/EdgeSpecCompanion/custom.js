import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">custom</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../ungraph_database/EdgeSpecData">EdgeSpecData</a></span>&gt;</span></span>
<span class="name ">custom</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="custom-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="custom-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">slug</span>, </span></li>
<li><span class="parameter" id="custom-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="custom-param-propSpecs"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">propSpecs</span>, </span></li>
<li><span class="parameter" id="custom-param-sourceNodeSpecId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">sourceNodeSpecId</span>, </span></li>
<li><span class="parameter" id="custom-param-targetNodeSpecId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">targetNodeSpecId</span>, </span></li>
<li><span class="parameter" id="custom-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Insertable&lt;EdgeSpecData&gt; custom({
  Expression&lt;String&gt;? id,
  Expression&lt;String&gt;? name,
  Expression&lt;String&gt;? slug,
  Expression&lt;String&gt;? type,
  Expression&lt;String&gt;? propSpecs,
  Expression&lt;String&gt;? sourceNodeSpecId,
  Expression&lt;String&gt;? targetNodeSpecId,
  Expression&lt;int&gt;? rowid,
}) {
  return RawValuesInsertable({
    if (id != null) 'id': id,
    if (name != null) 'name': name,
    if (slug != null) 'slug': slug,
    if (type != null) 'type': type,
    if (propSpecs != null) 'prop_specs': propSpecs,
    if (sourceNodeSpecId != null) 'source_node_spec_id': sourceNodeSpecId,
    if (targetNodeSpecId != null) 'target_node_spec_id': targetNodeSpecId,
    if (rowid != null) 'rowid': rowid,
  });
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
  <li><a href="../../index">ungraph_database</a></li>
  <li><a href="../../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li><a href="../../ungraph_database/EdgeSpecCompanion">EdgeSpecCompanion</a></li>
  <li class="self-crumb">custom static method</li>
</ol>


    <h5>EdgeSpecCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/EdgeSpecCompanion#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/EdgeSpecCompanion.constructor">EdgeSpecCompanion</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/EdgeSpecCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/EdgeSpecCompanion#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/id">id</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/name">name</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/propSpecs">propSpecs</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/rowid">rowid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/slug">slug</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/sourceNodeSpecId">sourceNodeSpecId</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/targetNodeSpecId">targetNodeSpecId</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/type">type</a></li>

        <li class="section-title"><a href="../../ungraph_database/EdgeSpecCompanion#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/EdgeSpecCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_database/EdgeSpecCompanion#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_database/EdgeSpecCompanion/custom">custom</a></li>

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
