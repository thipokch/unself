import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">toCompanion</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></span>
<span class="name ">toCompanion</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="toCompanion-param-nullToAbsent"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullToAbsent</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">CollectionCompanion toCompanion(bool nullToAbsent) {
  return CollectionCompanion(
    id: Value(id),
    type: Value(type),
    name: Value(name),
    system: Value(system),
    listRule: listRule == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(listRule),
    viewRule: viewRule == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(viewRule),
    createRule: createRule == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(createRule),
    updateRule: updateRule == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(updateRule),
    deleteRule: deleteRule == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(deleteRule),
    options: options == null &amp;&amp; nullToAbsent
        ? const Value.absent()
        : Value(options),
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
  <li><a href="../../unself_local_database/CollectionData">CollectionData</a></li>
  <li class="self-crumb">toCompanion method</li>
</ol>


    <h5>CollectionData class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/CollectionData#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>
          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/CollectionData#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/CollectionData/createRule">createRule</a></li>
          <li><a href="../../unself_local_database/CollectionData/deleteRule">deleteRule</a></li>
          <li><a href="../../unself_local_database/CollectionData/hashCode">hashCode</a></li>
          <li><a href="../../unself_local_database/CollectionData/id">id</a></li>
          <li><a href="../../unself_local_database/CollectionData/listRule">listRule</a></li>
          <li><a href="../../unself_local_database/CollectionData/name">name</a></li>
          <li><a href="../../unself_local_database/CollectionData/options">options</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/CollectionData/system">system</a></li>
          <li><a href="../../unself_local_database/CollectionData/type">type</a></li>
          <li><a href="../../unself_local_database/CollectionData/updateRule">updateRule</a></li>
          <li><a href="../../unself_local_database/CollectionData/viewRule">viewRule</a></li>

        <li class="section-title"><a href="../../unself_local_database/CollectionData#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>
          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_local_database/CollectionData#operators">Operators</a></li>
          <li><a href="../../unself_local_database/CollectionData/operator_equals">operator ==</a></li>




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
