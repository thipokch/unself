import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">unpack</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span></span>&gt;</span></span>
<span class="name ">unpack</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="unpack-param-options"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter">Mapping</span>&gt;</span>?</span> <span class="parameter-name">options</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p><a href="../../unself_unpack/ZipImport/unpack">unpack</a> unpacks the opened <a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a> object the given <code>mappings</code> and
returns a <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a> of <code>Map&lt;String, Object?&gt;</code>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
FutureOr&lt;Map&lt;String, Object?&gt;&gt; unpack(List&lt;Mapping&gt;? options) {
  assert(options != null);
  // 1. Group mappings by file to read from.
  final fromGroup = options!.groupListsBy((_) =&gt; _.from.split('/').first);

  // 2. Read file and decode JSON into group key.
  final jsonFiles = &lt;String, Map&lt;String, dynamic&gt;&gt;{
    for (final key in fromGroup.keys)
      key: jsonDecode(String.fromCharCodes(_dotDirectory![key]!.content))
  };

  // 3. Group mappings by key to write to.
  final toGroup = options.groupListsBy((_) =&gt; _.to.split('/').first);

  // 4. Create result map with keys from toGroup to write to.
  final instant = clock.now();
  final archiveId = Slugid.nice().toString();
  final result = {
    'id': Slugid.nice().toString(),
    'created': instant,
    'updated': instant,
    'archiveId': archiveId,
    for (final String key in toGroup.keys) key: &lt;Map&lt;String, Object?&gt;&gt;[]
  };

  for (final mapping in options) {
    // Assert that mapping can only be a single level deep.
    assert(mapping.fields.every((e) =&gt; e.fields.isEmpty &amp;&amp; e.extra.isEmpty));

    if (mapping.to.startsWith("\\$") || mapping.from.startsWith("\\$")) {
      throw ArgumentError('Mapping cannot be a JSON Pointer');
    }

    final fromKey = mapping.from.split('/').first;
    final toKey = mapping.to.split('/').first;
    final entryPath = mapping.from.split('/').sublist(1).join('/');

    final norm = normalize(
      jsonFiles[fromKey],
      entryPath: entryPath,
      includePath: mapping.options['includePath'] ?? const [],
    ) as List&lt;Map&lt;String, Object?&gt;&gt;;

    final mapped = norm
        .map((e) =&gt; {
              'created': instant,
              'updated': instant,
              'archiveId': archiveId,
              for (final entry in mapping.fields) entry.to: e[entry.from],
              ...mapping.extra,
            })
        .toList();

    if (mapping.options.containsKey('idFrom')) {
      for (var element in mapped) {
        element.putIfAbsent(
            'id', () =&gt; slugify(element[mapping.options['idFrom']!]));
      }
    }

    result[toKey] = mapped;
  }
  return result;
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
  <li><a href="../../index">unself_unpack</a></li>
  <li><a href="../../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li><a href="../../unself_unpack/ZipImport">ZipImport</a></li>
  <li class="self-crumb">unpack method</li>
</ol>


    <h5>ZipImport class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_unpack/ZipImport#constructors">Constructors</a></li>
          <li><a href="../../unself_unpack/ZipImport/ZipImport.constructor">ZipImport</a></li>


        <li class="section-title inherited">
          <a href="../../unself_unpack/ZipImport#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_unpack/ZipImport#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_unpack/ZipImport/open">open</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../../unself_unpack/ZipImport/unpack">unpack</a></li>

        <li class="section-title inherited"><a href="../../unself_unpack/ZipImport#operators">Operators</a></li>
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
