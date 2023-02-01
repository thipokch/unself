import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">custom</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Insertable-class.html">Insertable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_local_database/CollectionData">CollectionData</a></span>&gt;</span></span>
<span class="name ">custom</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="custom-param-id">{<span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="custom-param-type"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="custom-param-name"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="custom-param-system"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">system</span>, </span></li>
<li><span class="parameter" id="custom-param-listRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">listRule</span>, </span></li>
<li><span class="parameter" id="custom-param-viewRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">viewRule</span>, </span></li>
<li><span class="parameter" id="custom-param-createRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">createRule</span>, </span></li>
<li><span class="parameter" id="custom-param-updateRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">updateRule</span>, </span></li>
<li><span class="parameter" id="custom-param-deleteRule"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">deleteRule</span>, </span></li>
<li><span class="parameter" id="custom-param-options"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>?</span> <span class="parameter-name">options</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Insertable&lt;CollectionData&gt; custom({
  Expression&lt;String&gt;? id,
  Expression&lt;String&gt;? type,
  Expression&lt;String&gt;? name,
  Expression&lt;bool&gt;? system,
  Expression&lt;String&gt;? listRule,
  Expression&lt;String&gt;? viewRule,
  Expression&lt;String&gt;? createRule,
  Expression&lt;String&gt;? updateRule,
  Expression&lt;String&gt;? deleteRule,
  Expression&lt;String&gt;? options,
}) {
  return RawValuesInsertable({
    if (id != null) 'id': id,
    if (type != null) 'type': type,
    if (name != null) 'name': name,
    if (system != null) 'system': system,
    if (listRule != null) 'list_rule': listRule,
    if (viewRule != null) 'view_rule': viewRule,
    if (createRule != null) 'create_rule': createRule,
    if (updateRule != null) 'update_rule': updateRule,
    if (deleteRule != null) 'delete_rule': deleteRule,
    if (options != null) 'options': options,
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
  <li><a href="../../index">unself_local_database</a></li>
  <li><a href="../../unself_local_database/unself_local_database">unself_local_database</a></li>
  <li><a href="../../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>
  <li class="self-crumb">custom static method</li>
</ol>


    <h5>CollectionCompanion class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/CollectionCompanion#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.constructor">CollectionCompanion</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/CollectionCompanion.insert">insert</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/CollectionCompanion#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/CollectionCompanion/createRule">createRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/deleteRule">deleteRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/UpdateCompanion/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/id">id</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/listRule">listRule</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/name">name</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/options">options</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/system">system</a></li>
          <li><a href="../../unself_local_database/CollectionCompanion/type">type</a></li>
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
