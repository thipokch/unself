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
String toString() {
  return (StringBuffer('FieldCompanion(')
        ..write('id: \$id, ')
        ..write('name: \$name, ')
        ..write('type: \$type, ')
        ..write('system: \$system, ')
        ..write('required: \$required, ')
        ..write('unique: \$unique, ')
        ..write('options: \$options, ')
        ..write('collectionId: \$collectionId')
        ..write(')'))
      .toString();
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
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion">FieldCompanion</a></li>
  <li class="self-crumb">toString method</li>
</ol>


    <h5>FieldCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/FieldCompanion/FieldCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/options">options</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unself_local_database/FieldCompanion/FieldCompanion#static-methods">Static methods</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/custom">custom</a></li>

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
