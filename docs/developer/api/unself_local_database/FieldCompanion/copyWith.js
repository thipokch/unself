import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">copyWith</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></span>
<span class="name ">copyWith</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="copyWith-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="copyWith-param-created"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">created</span>, </span></li>
<li><span class="parameter" id="copyWith-param-updated"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span>?</span> <span class="parameter-name">updated</span>, </span></li>
<li><span class="parameter" id="copyWith-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter">FieldType</span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="copyWith-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="copyWith-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span></li>
<li><span class="parameter" id="copyWith-param-required"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">required</span>, </span></li>
<li><span class="parameter" id="copyWith-param-unique"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">unique</span>, </span></li>
<li><span class="parameter" id="copyWith-param-collectionId"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">collectionId</span>, </span></li>
<li><span class="parameter" id="copyWith-param-extra"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">extra</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">FieldCompanion copyWith(
    {Value&lt;String&gt;? id,
    Value&lt;DateTime&gt;? created,
    Value&lt;DateTime&gt;? updated,
    Value&lt;FieldType&gt;? type,
    Value&lt;String&gt;? name,
    Value&lt;bool&gt;? system,
    Value&lt;bool&gt;? required,
    Value&lt;bool&gt;? unique,
    Value&lt;String&gt;? collectionId,
    Value&lt;String&gt;? extra}) {
  return FieldCompanion(
    id: id ?? this.id,
    created: created ?? this.created,
    updated: updated ?? this.updated,
    type: type ?? this.type,
    name: name ?? this.name,
    system: system ?? this.system,
    required: required ?? this.required,
    unique: unique ?? this.unique,
    collectionId: collectionId ?? this.collectionId,
    extra: extra ?? this.extra,
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
  <li><a href="../../unself_local_database/FieldCompanion">FieldCompanion</a></li>
  <li class="self-crumb">copyWith method</li>
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
