import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">operator ==</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
<span class="name ">operator ==</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>The equality operator.</p>
<p>The default behavior for all <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>s is to return true if and
only if this object and <code>other</code> are the same object.</p>
<p>Override this method to specify a different equality relation on
a class. The overriding method must still be an equivalence relation.
That is, it must be:</p>
<ul>
<li>
<p>Total: It must return a boolean for all arguments. It should never throw.</p>
</li>
<li>
<p>Reflexive: For all objects <code>o</code>, <code>o == o</code> must be true.</p>
</li>
<li>
<p>Symmetric: For all objects <code>o1</code> and <code>o2</code>, <code>o1 == o2</code> and <code>o2 == o1</code> must
either both be true, or both be false.</p>
</li>
<li>
<p>Transitive: For all objects <code>o1</code>, <code>o2</code>, and <code>o3</code>, if <code>o1 == o2</code> and
<code>o2 == o3</code> are true, then <code>o1 == o3</code> must be true.</p>
</li>
</ul>
<p>The method should also be consistent over time,
so whether two objects are equal should only change
if at least one of the objects was modified.</p>
<p>If a subclass overrides the equality operator, it should override
the <a href="../../unself_local_database/CollectionData/hashCode">hashCode</a> method as well to maintain consistency.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
bool operator ==(Object other) =&gt;
    identical(this, other) ||
    (other is CollectionData &amp;&amp;
        other.id == this.id &amp;&amp;
        other.type == this.type &amp;&amp;
        other.name == this.name &amp;&amp;
        other.system == this.system &amp;&amp;
        other.listRule == this.listRule &amp;&amp;
        other.viewRule == this.viewRule &amp;&amp;
        other.createRule == this.createRule &amp;&amp;
        other.updateRule == this.updateRule &amp;&amp;
        other.deleteRule == this.deleteRule &amp;&amp;
        other.options == this.options);</code></pre>
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
  <li><a href="../../unself_local_database/CollectionData/CollectionData">CollectionData</a></li>
  <li class="self-crumb">operator == method</li>
</ol>


    <h5>CollectionData class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/CollectionData/CollectionData.constructor">CollectionData</a></li>
          <li><a href="../../unself_local_database/CollectionData/CollectionData.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/CollectionData/CollectionData#instance-properties">Properties</a>
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

        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#instance-methods">Methods</a></li>
          <li><a href="../../unself_local_database/CollectionData/copyWith">copyWith</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_local_database/CollectionData/toColumns">toColumns</a></li>
          <li><a href="../../unself_local_database/CollectionData/toCompanion">toCompanion</a></li>
          <li><a href="../../unself_local_database/CollectionData/toJson">toJson</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/DataClass/toJsonString.html">toJsonString</a></li>
          <li><a href="../../unself_local_database/CollectionData/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_local_database/CollectionData/CollectionData#operators">Operators</a></li>
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
