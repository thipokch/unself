import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">custom</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../ungraph_database/UnpackStateData">UnpackStateData</a></span>&gt;</span></span>
<span class="name ">custom</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="custom-param-specId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">specId</span>, </span></li>
<li><span class="parameter" id="custom-param-step"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">step</span>, </span></li>
<li><span class="parameter" id="custom-param-selectedModules"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">selectedModules</span>, </span></li>
<li><span class="parameter" id="custom-param-filePath"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">filePath</span>, </span></li>
<li><span class="parameter" id="custom-param-rowid"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span>?</span> <span class="parameter-name">rowid</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Insertable&lt;UnpackStateData&gt; custom({
  Expression&lt;String&gt;? id,
  Expression&lt;String&gt;? specId,
  Expression&lt;String&gt;? step,
  Expression&lt;String&gt;? selectedModules,
  Expression&lt;String&gt;? filePath,
  Expression&lt;int&gt;? rowid,
}) {
  return RawValuesInsertable({
    if (id != null) 'id': id,
    if (specId != null) 'spec_id': specId,
    if (step != null) 'step': step,
    if (selectedModules != null) 'selected_modules': selectedModules,
    if (filePath != null) 'file_path': filePath,
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
  <li><a href="../../ungraph_database/UnpackStateCompanion">UnpackStateCompanion</a></li>
  <li class="self-crumb">custom static method</li>
</ol>


    <h5>UnpackStateCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateCompanion#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/UnpackStateCompanion.constructor">UnpackStateCompanion</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/UnpackStateCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../ungraph_database/UnpackStateCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/filePath">filePath</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/id">id</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/rowid">rowid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/selectedModules">selectedModules</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/specId">specId</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/step">step</a></li>

        <li class="section-title"><a href="../../ungraph_database/UnpackStateCompanion#instance-methods">Methods</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/toColumns">toColumns</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/UnpackStateCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_database/UnpackStateCompanion#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_database/UnpackStateCompanion/custom">custom</a></li>

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
