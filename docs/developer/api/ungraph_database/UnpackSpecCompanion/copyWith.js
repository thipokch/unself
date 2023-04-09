import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../ungraph_database/UnpackSpecCompanion">UnpackSpecCompanion</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="copyWith-param-slug"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">slug</span>, </span></li>
<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="copyWith-param-fileSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">fileSpec</span>, </span></li>
<li><span class="parameter" id="copyWith-param-retrieveSpec"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">retrieveSpec</span>, </span></li>
<li><span class="parameter" id="copyWith-param-modules"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">modules</span>, </span></li>
<li><span class="parameter" id="copyWith-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">UnpackSpecCompanion copyWith(
    {Value&lt;String&gt;? id,
    Value&lt;String&gt;? slug,
    Value&lt;String&gt;? name,
    Value&lt;String&gt;? fileSpec,
    Value&lt;String&gt;? retrieveSpec,
    Value&lt;String&gt;? modules,
    Value&lt;int&gt;? rowid}) {
  return UnpackSpecCompanion(
    id: id ?? this.id,
    slug: slug ?? this.slug,
    name: name ?? this.name,
    fileSpec: fileSpec ?? this.fileSpec,
    retrieveSpec: retrieveSpec ?? this.retrieveSpec,
    modules: modules ?? this.modules,
    rowid: rowid ?? this.rowid,
  );
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
  <li><a href="../../ungraph_database/UnpackSpecCompanion">UnpackSpecCompanion</a></li>
  <li class="self-crumb">copyWith method</li>
</ol>


    <h5>UnpackSpecCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/UnpackSpecCompanion#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.constructor">UnpackSpecCompanion</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/UnpackSpecCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/UnpackSpecCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/fileSpec">fileSpec</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/id">id</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/modules">modules</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/name">name</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/retrieveSpec">retrieveSpec</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/rowid">rowid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/slug">slug</a></li>

        <li class="section-title"><a href="../../ungraph_database/UnpackSpecCompanion#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/UnpackSpecCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_database/UnpackSpecCompanion#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_database/UnpackSpecCompanion/custom">custom</a></li>

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
