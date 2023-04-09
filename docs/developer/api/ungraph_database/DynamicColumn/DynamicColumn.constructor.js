import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">DynamicColumn&lt;<wbr><span class="type-parameter">T extends Object</span>&gt;</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">DynamicColumn&lt;<wbr><span class="type-parameter">T extends Object</span>&gt;</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-tableName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">tableName</span>, </span></li>
<li><span class="parameter" id="-param-nullable"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullable</span></span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">factory DynamicColumn(
  String name,
  String tableName,
  bool nullable,
) =&gt;
    DynamicColumn._(
      name,
      tableName,
      nullable,
      type: DriftSqlType.forType(),
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
  <li><a href="../../index">ungraph_database</a></li>
  <li><a href="../../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li><a href="../../ungraph_database/DynamicColumn">DynamicColumn<span class="signature">&lt;<wbr><span class="type-parameter">T extends Object</span>&gt;</span></a></li>
  <li class="self-crumb">DynamicColumn factory constructor</li>
</ol>


    <h5>DynamicColumn class</h5>
    <ol>

        <li class="section-title"><a href="../../ungraph_database/DynamicColumn#constructors">Constructors</a></li>
          <li><a href="../../ungraph_database/DynamicColumn/DynamicColumn.constructor">DynamicColumn</a></li>


        <li class="section-title inherited">
          <a href="../../ungraph_database/DynamicColumn#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$customConstraints.html">\$customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$name.html">\$name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$nullable.html">\$nullable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/additionalChecks.html">additionalChecks</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/check.html">check</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/clientDefault.html">clientDefault</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/defaultValue.html">defaultValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/driftSqlType.html">driftSqlType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/escapedName.html">escapedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/generatedAs.html">generatedAs</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hasAutoIncrement.html">hasAutoIncrement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isLiteral.html">isLiteral</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/name.html">name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/precedence.html">precedence</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/requiredDuringInsert.html">requiredDuringInsert</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/tableName.html">tableName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/type.html">type</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/DynamicColumn#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/caseMatch.html">caseMatch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/cast.html">cast</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/dartCast.html">dartCast</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equals.html">equals</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsExp.html">equalsExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsNullable.html">equalsNullable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/iif.html">iif</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableOrUnknown.html">isAcceptableOrUnknown</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableValue.html">isAcceptableValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isExp.html">isExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isIn.html">isIn</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isInQuery.html">isInQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotExp.html">isNotExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotIn.html">isNotIn</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotInQuery.html">isNotInQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotNull.html">isNotNull</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotValue.html">isNotValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNull.html">isNull</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isValue.html">isValue</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/nullIf.html">nullIf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/withConverter.html">withConverter</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeAroundPrecedence.html">writeAroundPrecedence</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeColumnDefinition.html">writeColumnDefinition</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeInner.html">writeInner</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeInto.html">writeInto</a></li>

        <li class="section-title inherited"><a href="../../ungraph_database/DynamicColumn#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../ungraph_database/DynamicColumn#static-methods">Static methods</a></li>
          <li><a href="../../ungraph_database/DynamicColumn/fromString">fromString</a></li>

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
