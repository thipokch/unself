import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_model</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="Account">
  <span class="name "><a href="unself_model/Account">Account</a></span> 

</dt>
<dd>
  <a href="unself_model/Account">Account</a> is a user's and their acquaintances' identity on a <a href="unself_model/App">App</a>.
Each person can have multiple <a href="unself_model/Account">Account</a>s and on multiple <a href="unself_model/App">App</a>s.
</dd>

        <dt id="Activity">
  <span class="name "><a href="unself_model/Activity">Activity</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="App">
  <span class="name "><a href="unself_model/App">App</a></span> 

</dt>
<dd>
  <a href="unself_model/App">App</a> is a software application or services that the user uses.
</dd>

        <dt id="Archive">
  <span class="name "><a href="unself_model/Archive">Archive</a></span> 

</dt>
<dd>
  <a href="unself_model/Archive">Archive</a> is a set of data user imported from other apps.
</dd>

        <dt id="ArchiveData">
  <span class="name "><a href="unself_model/ArchiveData">ArchiveData</a></span> 

</dt>
<dd>
  <a href="unself_model/ArchiveData">ArchiveData</a> is used to
</dd>

        <dt id="ArchiveSchema">
  <span class="name "><a href="unself_model/ArchiveSchema">ArchiveSchema</a></span> 

</dt>
<dd>
  ArchiveSchema description
</dd>

        <dt id="ArchiveSchemaPart">
  <span class="name "><a href="unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></span> 

</dt>
<dd>
  ArchiveSchemaPart description
</dd>

        <dt id="Base">
  <span class="name "><a href="unself_model/Base">Base</a></span> 

</dt>
<dd>
  <a href="unself_model/Base">Base</a> is a base class for all unself models.
</dd>

        <dt id="Collection">
  <span class="name "><a href="unself_model/Collection">Collection</a></span> 

</dt>
<dd>
  <a href="unself_model/Collection">Collection</a> is a dynamic data structure that can be used to store any kind of data.
It is used to store a generalized data structure of user's <a href="unself_model/Archive">Archive</a>s.
</dd>

        <dt id="Edge">
  <span class="name "><a href="unself_model/Edge">Edge</a></span> 

</dt>
<dd>
  <a href="unself_model/Base">Base</a> is a base class for all unself models.
</dd>

        <dt id="Entity">
  <span class="name "><a href="unself_model/Entity">Entity</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Field">
  <span class="name "><a href="unself_model/Field">Field</a></span> 

</dt>
<dd>
  {@template field}
<a href="unself_model/Field">Field</a> is a field inside of a <a href="unself_model/Collection">Collection</a>'s schema.
</dd>

        <dt id="Flat">
  <span class="name "><a href="unself_model/Flat">Flat</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="IJsonSchema">
  <span class="name "><a href="unself_model/IJsonSchema">IJsonSchema</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="IJsonSchemaRef">
  <span class="name "><a href="unself_model/IJsonSchemaRef">IJsonSchemaRef</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonDateTime">
  <span class="name "><a href="unself_model/JsonDateTime">JsonDateTime</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonExtra">
  <span class="name "><a href="unself_model/JsonExtra">JsonExtra</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonPart">
  <span class="name "><a href="unself_model/JsonPart">JsonPart</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonRef">
  <span class="name "><a href="unself_model/JsonRef">JsonRef</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonRefList">
  <span class="name "><a href="unself_model/JsonRefList">JsonRefList</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonRefValue">
  <span class="name "><a href="unself_model/JsonRefValue">JsonRefValue</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonSchema">
  <span class="name "><a href="unself_model/JsonSchema">JsonSchema</a></span> 

</dt>
<dd>
  JsonSchema description
</dd>

        <dt id="JsonString">
  <span class="name "><a href="unself_model/JsonString">JsonString</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonVersion">
  <span class="name "><a href="unself_model/JsonVersion">JsonVersion</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="JsonVersionConstraint">
  <span class="name "><a href="unself_model/JsonVersionConstraint">JsonVersionConstraint</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Mapping">
  <span class="name "><a href="unself_model/Mapping">Mapping</a></span> 

</dt>
<dd>
  Mapping description@freezed
</dd>

        <dt id="Node">
  <span class="name "><a href="unself_model/Node">Node</a></span> 

</dt>
<dd>
  <a href="unself_model/Base">Base</a> is a base class for all unself models.
</dd>

        <dt id="Ref">
  <span class="name "><a href="unself_model/Ref">Ref</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="RefList">
  <span class="name "><a href="unself_model/RefList">RefList</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Settings">
  <span class="name "><a href="unself_model/Settings">Settings</a></span> 

</dt>
<dd>
  Settings description
</dd>

        <dt id="SlugFrom">
  <span class="name "><a href="unself_model/SlugFrom">SlugFrom</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Struct">
  <span class="name "><a href="unself_model/Struct">Struct</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Topic">
  <span class="name "><a href="unself_model/Topic">Topic</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Union">
  <span class="name "><a href="unself_model/Union">Union</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="UnionList">
  <span class="name "><a href="unself_model/UnionList">UnionList</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="ValueFrom">
  <span class="name "><a href="unself_model/ValueFrom">ValueFrom</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="Version">
  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span> 

</dt>
<dd>
  A parsed semantic version number.
</dd>

        <dt id="VersionConstraint">
  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span> 

</dt>
<dd>
  A <a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a> is a predicate that can determine whether a given
version is valid or not.
</dd>

        <dt id="VersionRange">
  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></span> 

</dt>
<dd>
  Constrains versions to a fall within a given range.
</dd>

        <dt id="VersionUnion">
  <span class="name "><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></span> 

</dt>
<dd>
  A version constraint representing a union of multiple disjoint version
ranges.
</dd>

        <dt id="ZipJsonPart">
  <span class="name "><a href="unself_model/ZipJsonPart">ZipJsonPart</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>






    <section class="summary offset-anchor" id="enums">
      <h2>Enums</h2>

      <dl>
        <dt id="CollectionType">
  <span class="name "><a href="unself_model/CollectionType">CollectionType</a></span> 

</dt>
<dd>
  
</dd>

        <dt id="FieldType">
  <span class="name "><a href="unself_model/FieldType">FieldType</a></span> 

</dt>
<dd>
  
</dd>

      </dl>
    </section>

    <section class="summary offset-anchor" id="typedefs">
      <h2>Typedefs</h2>

      <dl>
          
  <dt id="AccumulatorCallback" class="callable">
    <span class="name"><a href="unself_model/AccumulatorCallback">AccumulatorCallback</a></span><span class="signature">
      <span class="returntype parameter">= void Function<span class="signature">(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="param-key"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">key</span>, </span><span class="parameter" id="param-entity"><span class="type-annotation">dynamic</span> <span class="parameter-name">entity</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    
    

  </dd>

          
  <dt id="DoCallback" class="callable">
    <span class="name"><a href="unself_model/DoCallback">DoCallback</a></span><span class="signature">
      <span class="returntype parameter">= dynamic Function<span class="signature">(<span class="parameter" id="param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span><span class="parameter" id="param-schema"><span class="type-annotation"><a href="unself_model/JsonRef">JsonRef</a></span> <span class="parameter-name">schema</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    
    

  </dd>

          
  <dt id="SchemaFinder" class="callable">
    <span class="name"><a href="unself_model/SchemaFinder">SchemaFinder</a></span><span class="signature">
      <span class="returntype parameter">= <a href="unself_model/JsonSchema">JsonSchema</a> Function<span class="signature">(<span class="parameter" id="param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span></span>)</span></span>
    </span>
    

  </dt>
  <dd>
    
    

  </dd>

      </dl>
    </section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="index">unself_model</a></li>
  <li class="self-crumb">unself_model library</li>
</ol>


    <h5><span class="package-name">unself_model</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unself_model/unself_model">unself_model</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_model library</h5>
    <ol>
      <li class="section-title"><a href="unself_model/unself_model#classes">Classes</a></li>
        <li><a href="unself_model/Account">Account</a></li>
        <li><a href="unself_model/Activity">Activity</a></li>
        <li><a href="unself_model/App">App</a></li>
        <li><a href="unself_model/Archive">Archive</a></li>
        <li><a href="unself_model/ArchiveData">ArchiveData</a></li>
        <li><a href="unself_model/ArchiveSchema">ArchiveSchema</a></li>
        <li><a href="unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>
        <li><a href="unself_model/Base">Base</a></li>
        <li><a href="unself_model/Collection">Collection</a></li>
        <li><a href="unself_model/Edge">Edge</a></li>
        <li><a href="unself_model/Entity">Entity</a></li>
        <li><a href="unself_model/Field">Field</a></li>
        <li><a href="unself_model/Flat">Flat</a></li>
        <li><a href="unself_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="unself_model/JsonDateTime">JsonDateTime</a></li>
        <li><a href="unself_model/JsonExtra">JsonExtra</a></li>
        <li><a href="unself_model/JsonPart">JsonPart</a></li>
        <li><a href="unself_model/JsonRef">JsonRef</a></li>
        <li><a href="unself_model/JsonRefList">JsonRefList</a></li>
        <li><a href="unself_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="unself_model/JsonSchema">JsonSchema</a></li>
        <li><a href="unself_model/JsonString">JsonString</a></li>
        <li><a href="unself_model/JsonVersion">JsonVersion</a></li>
        <li><a href="unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>
        <li><a href="unself_model/Mapping">Mapping</a></li>
        <li><a href="unself_model/Node">Node</a></li>
        <li><a href="unself_model/Ref">Ref</a></li>
        <li><a href="unself_model/RefList">RefList</a></li>
        <li><a href="unself_model/Settings">Settings</a></li>
        <li><a href="unself_model/SlugFrom">SlugFrom</a></li>
        <li><a href="unself_model/Struct">Struct</a></li>
        <li><a href="unself_model/Topic">Topic</a></li>
        <li><a href="unself_model/Union">Union</a></li>
        <li><a href="unself_model/UnionList">UnionList</a></li>
        <li><a href="unself_model/ValueFrom">ValueFrom</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>
        <li><a href="unself_model/ZipJsonPart">ZipJsonPart</a></li>






      <li class="section-title"><a href="unself_model/unself_model#enums">Enums</a></li>
        <li><a href="unself_model/CollectionType">CollectionType</a></li>
        <li><a href="unself_model/FieldType">FieldType</a></li>

      <li class="section-title"><a href="unself_model/unself_model#typedefs">Typedefs</a></li>
        <li><a href="unself_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="unself_model/DoCallback">DoCallback</a></li>
        <li><a href="unself_model/SchemaFinder">SchemaFinder</a></li>

</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
