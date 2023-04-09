import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toCompanion</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></span>
<span class="name ">toCompanion</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">FieldCompanion toCompanion(bool nullToAbsent) {
  return FieldCompanion(
    id: Value(id),
    created: Value(created),
    updated: Value(updated),
    type: Value(type),
    name: Value(name),
    system: Value(system),
    required: Value(required),
    unique: Value(unique),
    collectionId: Value(collectionId),
    extra: Value(extra),
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
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/FieldData">FieldData</a></li>
  <li class="self-crumb">toCompanion method</li>
</ol>


    <h5>FieldData class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/FieldData#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>
          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/FieldData#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>
          <li><a href="../../unself_local_database/FieldData/created">created</a></li>
          <li><a href="../../unself_local_database/FieldData/extra">extra</a></li>
          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>
          <li><a href="../../unself_local_database/FieldData/id">id</a></li>
          <li><a href="../../unself_local_database/FieldData/name">name</a></li>
          <li><a href="../../unself_local_database/FieldData/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/FieldData/system">system</a></li>
          <li><a href="../../unself_local_database/FieldData/type">type</a></li>
          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>
          <li><a href="../../unself_local_database/FieldData/updated">updated</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldData#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>
          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldData#operators">Operators</a></li>
          <li><a href="../../unself_local_database/FieldData/operator_equals">operator ==</a></li>




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
