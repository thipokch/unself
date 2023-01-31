import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_local_database/FieldData/FieldData">FieldData</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="copyWith-param-type"><span class="type-annotation">FieldType?</span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">system</span>, </span></li>
<li><span class="parameter" id="copyWith-param-required"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">required</span>, </span></li>
<li><span class="parameter" id="copyWith-param-unique"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">unique</span>, </span></li>
<li><span class="parameter" id="copyWith-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">options</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="copyWith-param-collectionId"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">collectionId</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">FieldData copyWith(
        {String? id,
        String? name,
        FieldType? type,
        bool? system,
        bool? required,
        bool? unique,
        Value&lt;String?&gt; options = const Value.absent(),
        String? collectionId}) =&gt;
    FieldData(
      id: id ?? this.id,
      name: name ?? this.name,
      type: type ?? this.type,
      system: system ?? this.system,
      required: required ?? this.required,
      unique: unique ?? this.unique,
      options: options.present ? options.value : this.options,
      collectionId: collectionId ?? this.collectionId,
    );</code></pre>
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
  <li><a href="../../unself_local_database/FieldData/FieldData">FieldData</a></li>
  <li class="self-crumb">copyWith method</li>
</ol>


    <h5>FieldData class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/FieldData/FieldData#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/FieldData/FieldData.constructor">FieldData</a></li>
          <li><a href="../../unself_local_database/FieldData/FieldData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/FieldData/FieldData#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/FieldData/collectionId">collectionId</a></li>
          <li><a href="../../unself_local_database/FieldData/hashCode">hashCode</a></li>
          <li><a href="../../unself_local_database/FieldData/id">id</a></li>
          <li><a href="../../unself_local_database/FieldData/name">name</a></li>
          <li><a href="../../unself_local_database/FieldData/options">options</a></li>
          <li><a href="../../unself_local_database/FieldData/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/FieldData/system">system</a></li>
          <li><a href="../../unself_local_database/FieldData/type">type</a></li>
          <li><a href="../../unself_local_database/FieldData/unique">unique</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldData/FieldData#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/FieldData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/FieldData/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/FieldData/toCompanion">toCompanion</a></li>
          <li><a href="../../unself_local_database/FieldData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../unself_local_database/FieldData/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_local_database/FieldData/FieldData#operators">Operators</a></li>
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
