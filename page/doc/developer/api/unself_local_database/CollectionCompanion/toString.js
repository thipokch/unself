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
  return (StringBuffer('CollectionCompanion(')
        ..write('id: \$id, ')
        ..write('created: \$created, ')
        ..write('updated: \$updated, ')
        ..write('type: \$type, ')
        ..write('name: \$name, ')
        ..write('system: \$system, ')
        ..write('listRule: \$listRule, ')
        ..write('viewRule: \$viewRule, ')
        ..write('createRule: \$createRule, ')
        ..write('updateRule: \$updateRule, ')
        ..write('deleteRule: \$deleteRule, ')
        ..write('extra: \$extra')
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
  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>
  <li class="self-crumb">toString method</li>
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
