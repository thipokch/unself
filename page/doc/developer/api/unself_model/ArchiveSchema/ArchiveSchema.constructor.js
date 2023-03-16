import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">ArchiveSchema</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">ArchiveSchema</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-id">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span></li>
<li><span class="parameter" id="-param-created"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span></li>
<li><span class="parameter" id="-param-updated"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span></li>
<li><span class="parameter" id="-param-appId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">appId</span>, </span></li>
<li><span class="parameter" id="-param-version"><span>@<a href="../../unself_model/JsonVersion">JsonVersion</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></span> <span class="parameter-name">version</span>, </span></li>
<li><span class="parameter" id="-param-constraint"><span>@<a href="../../unself_model/JsonVersionConstraint">JsonVersionConstraint</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></span> <span class="parameter-name">constraint</span>, </span></li>
<li><span class="parameter" id="-param-part"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></span>&gt;</span></span> <span class="parameter-name">part</span>, </span></li>
<li><span class="parameter" id="-param-extra"><span>@<a href="../../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span></li>
</ol>)
    </section>

    
<section class="desc markdown">
  <p>ArchiveSchema description</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const factory ArchiveSchema({
  /// [id] is unself unique identifier for the ArchiveSchema.
  required String id,

  /// [created] is the date and time when the [ArchiveSchema] was created inside unself app.
  required DateTime created,

  /// [updated] is the date and time when the [ArchiveSchema] was last updated inside unself app.
  required DateTime updated,

  /// [appId] is the id of the [App] the [ArchiveSchema] is for.
  required String appId,

  /// [version] is the revision version of the [ArchiveSchema].
  /// See [Version] from pub_semver for more information.
  @JsonVersion() required Version version,

  /// [constraint] is the constraint version of the [App].
  /// See [VersionConstraint] from pub_semver for more information.
  ///
  /// [VersionConstraint.compatibleWith] is used to define the minimum version.
  @JsonVersionConstraint() required VersionConstraint constraint,

  /// [entries] is a list of [ArchiveSchemaEntry]s.
  required List&lt;ArchiveSchemaPart&gt; part,

  /// [extra] is a map of additional properties.
  @JsonExtra() @Default({}) Map&lt;String, dynamic&gt; extra,
}) = _ArchiveSchema;</code></pre>
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
  <li><a href="../../unself_model/ArchiveSchema">ArchiveSchema</a></li>
  <li class="self-crumb">ArchiveSchema const constructor</li>
</ol>


    <h5>ArchiveSchema class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/ArchiveSchema#constructors">Constructors</a></li>
          <li><a href="../../unself_model/ArchiveSchema/ArchiveSchema.constructor">ArchiveSchema</a></li>
          <li><a href="../../unself_model/ArchiveSchema/ArchiveSchema.fromJson">fromJson</a></li>


        <li class="section-title inherited">
          <a href="../../unself_model/ArchiveSchema#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/appId">appId</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/constraint">constraint</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/id">id</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/part">part</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/updated">updated</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/version">version</a></li>

        <li class="section-title"><a href="../../unself_model/ArchiveSchema#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_model/ArchiveSchema/read">read</a></li>
          <li class="inherited"><a href="../../unself_model/ArchiveSchema/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/ArchiveSchema#operators">Operators</a></li>
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
