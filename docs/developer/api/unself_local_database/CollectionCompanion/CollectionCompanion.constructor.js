import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">CollectionCompanion.insert</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">CollectionCompanion.insert</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="insert-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="insert-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>
<li><span class="parameter" id="insert-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>
<li><span class="parameter" id="insert-param-type"><span>required</span> <span class="type-annotation">CollectionType</span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="insert-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="insert-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span></li>
<li><span class="parameter" id="insert-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">listRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="insert-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">viewRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="insert-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">createRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="insert-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">updateRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="insert-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Value-class.html">Value</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>&gt;</span></span> <span class="parameter-name">deleteRule</span> = <span class="default-value">const Value.absent()</span>, </span></li>
<li><span class="parameter" id="insert-param-extra"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">extra</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">CollectionCompanion.insert({
  required String id,
  required DateTime created,
  required DateTime updated,
  required CollectionType type,
  required String name,
  required bool system,
  this.listRule = const Value.absent(),
  this.viewRule = const Value.absent(),
  this.createRule = const Value.absent(),
  this.updateRule = const Value.absent(),
  this.deleteRule = const Value.absent(),
  required String extra,
})  : id = Value(id),
      created = Value(created),
      updated = Value(updated),
      type = Value(type),
      name = Value(name),
      system = Value(system),
      extra = Value(extra);</code></pre>
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
  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>
  <li class="self-crumb">CollectionCompanion.insert constructor</li>
</ol>


    <h5>CollectionCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/CollectionCompanion/created">created</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/extra">extra</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/updated">updated</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/updateRule">updateRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/viewRule">viewRule</a></li>

        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/toString">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/CollectionCompanion#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#static-methods">Static methods</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/custom">custom</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
