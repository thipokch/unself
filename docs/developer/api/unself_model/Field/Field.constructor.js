import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">Field</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">Field</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>
<li><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>
<li><span class="parameter" id="-param-type"><span>required</span> <span class="type-annotation"><a href="../../unself_model/FieldType">FieldType</a></span> <span class="parameter-name">type</span>, </span></li>
<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-system"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">system</span>, </span></li>
<li><span class="parameter" id="-param-required"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">required</span>, </span></li>
<li><span class="parameter" id="-param-unique"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">unique</span>, </span></li>
<li><span class="parameter" id="-param-collection"><span>required</span> <span class="type-annotation"><a href="../../unself_model/Collection">Collection</a></span> <span class="parameter-name">collection</span>, </span></li>
<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory Field({
  /// [id] is unself unique identifier for the [Field].
  required String id,

  /// [created] is the date and time when the [Field] was created inside unself app.
  required DateTime created,

  /// [updated] is the date and time when the [Field] was last updated inside unself app.
  required DateTime updated,

  /// [type] is the data type of the [Field].
  required FieldType type,

  /// [name] is the name of the [Field].
  required String name,

  /// [system] is a flag that indicates if the [Field] is a system field.
  required bool system,

  /// [required] is a flag that indicates if the [Field] is required.
  required bool required,

  /// [unique] is a flag that indicates if the [Field] must be unique.
  required bool unique,

  /// [collection] is the [Collection] that the [Field] belongs to.
  required Collection collection,

  /// [extra] is a map of additional properties.
  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,
}) = _Field;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/Field">Field</a></li>
  <li class="self-crumb">Field const constructor</li>
</ol>


    <h5>Field class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/Field#constructors">Constructors</a></li>
          <li><a href="../../unself_model/Field/Field.constructor">Field</a></li>
          <li><a href="../../unself_model/Field/Field.fromJson">fromJson</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/Field#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/Field/collection">collection</a></li>
          <li class="inherited"><a href="../../unself_model/Field/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/Field/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/Field/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/Field/id">id</a></li>
          <li class="inherited"><a href="../../unself_model/Field/name">name</a></li>
          <li class="inherited"><a href="../../unself_model/Field/required">required</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/Field/system">system</a></li>
          <li class="inherited"><a href="../../unself_model/Field/type">type</a></li>
          <li class="inherited"><a href="../../unself_model/Field/unique">unique</a></li>
          <li class="inherited"><a href="../../unself_model/Field/updated">updated</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Field#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/Field/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Field#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




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
