import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toColumns</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
<span class="name ">toColumns</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toColumns-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Converts this object into a map of column names to expressions to insert
or update.</p>
<p>Note that the keys in the map are the raw column names, they're not
escaped.</p>
<p>The <code>nullToAbsent</code> can be used on <a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass-class.html">DataClass</a>es to control whether null
fields should be set to a null constant in sql or absent from the map.
Other implementations ignore that <code>nullToAbsent</code>, it mainly exists for
legacy reasons.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Map&lt;String, Expression&gt; toColumns(bool nullToAbsent) {
  final map = &lt;String, Expression&gt;{};
  if (id.present) {
    map['id'] = Variable&lt;String&gt;(id.value);
  }
  if (created.present) {
    map['created'] = Variable&lt;DateTime&gt;(created.value);
  }
  if (updated.present) {
    map['updated'] = Variable&lt;DateTime&gt;(updated.value);
  }
  if (type.present) {
    final converter = \$FieldTable.\$convertertype;
    map['type'] = Variable&lt;String&gt;(converter.toSql(type.value));
  }
  if (name.present) {
    map['name'] = Variable&lt;String&gt;(name.value);
  }
  if (system.present) {
    map['system'] = Variable&lt;bool&gt;(system.value);
  }
  if (required.present) {
    map['required'] = Variable&lt;bool&gt;(required.value);
  }
  if (unique.present) {
    map['unique'] = Variable&lt;bool&gt;(unique.value);
  }
  if (collectionId.present) {
    map['collection_id'] = Variable&lt;String&gt;(collectionId.value);
  }
  if (extra.present) {
    map['extra'] = Variable&lt;String&gt;(extra.value);
  }
  return map;
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
  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>
  <li class="self-crumb">toColumns method</li>
</ol>


    <h5>FieldCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.constructor">FieldCompanion</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/FieldCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/FieldCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/FieldCompanion/collectionId">collectionId</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/created">created</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/extra">extra</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/id">id</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/name">name</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/system">system</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/type">type</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/unique">unique</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/updated">updated</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/FieldCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/FieldCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unself_local_database/FieldCompanion#static-methods">Static methods</a></li>
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
