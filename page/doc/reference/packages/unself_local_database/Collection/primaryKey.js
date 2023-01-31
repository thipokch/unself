import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">primaryKey</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>
  <span class="name ">primaryKey</span>
  <div class="features"><span class="feature">override</span></div>

</section>


<section class="desc markdown">
  <p>Override this to specify custom primary keys:</p>
<pre class="language-dart"><code class="language-dart">class IngredientInRecipes extends Table {
 @override
 Set&lt;Column&gt; get primaryKey =&gt; {recipe, ingredient};

 IntColumn get recipe =&gt; integer()();
 IntColumn get ingredient =&gt; integer()();

 IntColumn get amountInGrams =&gt; integer().named('amount')();
}
</code></pre>
<p>The getter must return a set literal using the <code>=&gt;</code> syntax so that the
drift generator can understand the code.
Also, please note that it's an error to have an
<code>BuildIntColumn.autoIncrement</code> column and a custom primary key.
As an auto-incremented <code>IntColumn</code> is recognized by drift to be the
primary key, doing so will result in an exception thrown at runtime.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Set&lt;Column&gt; get primaryKey =&gt; {id};</code></pre>
</section>

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
  <li><a href="../../unself_local_database/Collection/Collection">Collection</a></li>
  <li class="self-crumb">primaryKey property</li>
</ol>


    <h5>Collection class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_local_database/Collection/Collection#constructors">Constructors</a></li>
          <li><a href="../../unself_local_database/Collection/Collection.constructor">Collection</a></li>


        <li class="section-title">
          <a href="../../unself_local_database/Collection/Collection#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_local_database/Collection/createRule">createRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>
          <li><a href="../../unself_local_database/Collection/deleteRule">deleteRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_local_database/Collection/id">id</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>
          <li><a href="../../unself_local_database/Collection/listRule">listRule</a></li>
          <li><a href="../../unself_local_database/Collection/name">name</a></li>
          <li><a href="../../unself_local_database/Collection/options">options</a></li>
          <li><a href="../../unself_local_database/Collection/primaryKey">primaryKey</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_local_database/Collection/system">system</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>
          <li><a href="../../unself_local_database/Collection/type">type</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></li>
          <li><a href="../../unself_local_database/Collection/updateRule">updateRule</a></li>
          <li><a href="../../unself_local_database/Collection/viewRule">viewRule</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/Collection/Collection#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_local_database/Collection/Collection#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
