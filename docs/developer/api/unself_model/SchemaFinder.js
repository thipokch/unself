import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-typedef">SchemaFinder</span> typedef 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        <span class="name ">SchemaFinder</span> =
     <span class="returntype"><a href="../unself_model/JsonSchema">JsonSchema</a> Function<span class="signature">(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)</span></span>

    </section>

    

    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">typedef SchemaFinder = JsonSchema Function(String name);</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_model</a></li>
  <li><a href="../unself_model/unself_model">unself_model</a></li>
  <li class="self-crumb">SchemaFinder typedef</li>
</ol>


    <h5>unself_model library</h5>
    <ol>
      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>
        <li><a href="../unself_model/Account">Account</a></li>
        <li><a href="../unself_model/Activity">Activity</a></li>
        <li><a href="../unself_model/App">App</a></li>
        <li><a href="../unself_model/Archive">Archive</a></li>
        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>
        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>
        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>
        <li><a href="../unself_model/Base">Base</a></li>
        <li><a href="../unself_model/Collection">Collection</a></li>
        <li><a href="../unself_model/Edge">Edge</a></li>
        <li><a href="../unself_model/Entity">Entity</a></li>
        <li><a href="../unself_model/Field">Field</a></li>
        <li><a href="../unself_model/Flat">Flat</a></li>
        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>
        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>
        <li><a href="../unself_model/JsonPart">JsonPart</a></li>
        <li><a href="../unself_model/JsonRef">JsonRef</a></li>
        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>
        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>
        <li><a href="../unself_model/JsonString">JsonString</a></li>
        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>
        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>
        <li><a href="../unself_model/Mapping">Mapping</a></li>
        <li><a href="../unself_model/Node">Node</a></li>
        <li><a href="../unself_model/Ref">Ref</a></li>
        <li><a href="../unself_model/RefList">RefList</a></li>
        <li><a href="../unself_model/Settings">Settings</a></li>
        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>
        <li><a href="../unself_model/Struct">Struct</a></li>
        <li><a href="../unself_model/Topic">Topic</a></li>
        <li><a href="../unself_model/Union">Union</a></li>
        <li><a href="../unself_model/UnionList">UnionList</a></li>
        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>
        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>






      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>
        <li><a href="../unself_model/CollectionType">CollectionType</a></li>
        <li><a href="../unself_model/FieldType">FieldType</a></li>

      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>
        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="../unself_model/DoCallback">DoCallback</a></li>
        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>

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
