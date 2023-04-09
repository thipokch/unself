import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">flatten</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>&gt;</span></span>
<span class="name ">flatten</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="flatten-param-json"><span class="type-annotation">dynamic</span> <span class="parameter-name">json</span>, </span></li>
<li><span class="parameter" id="flatten-param-separator">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">separator</span> = <span class="default-value">'.'</span>, </span></li>
<li><span class="parameter" id="flatten-param-recordPath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">recordPath</span> = <span class="default-value">const []</span>, </span></li>
<li><span class="parameter" id="flatten-param-includePath"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">includePath</span> = <span class="default-value">const []</span>, </span></li>
<li><span class="parameter" id="flatten-param-addMissingKeys"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">addMissingKeys</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="flatten-param-maxLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">maxLevel</span> = <span class="default-value">-1</span>}</span></li>
</ol>)

        

    </section>
    
<section class="desc markdown">
  <p><a href="../unself_unpack/flatten">flatten</a> is similar to pandas' json_normalize function, this function
recursively flattens the nested JSON objects into a flat tabular list.
It returns <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List&lt;Map&lt;String, dynamic&gt;&gt;</a> of the flattened records.</p>
<p>Simple example:</p>
<pre class="language-json"><code class="language-json">[
  {"id": 1, "name": {"first": "Coleen", "last": "Volk"}},
  {"name": {"given": "Mark", "family": "Regner"}},
  {"id": 2, "name": "Faye Raker"},
]
</code></pre>
<pre class="language-dart"><code class="language-dart">flatten(input);
</code></pre>
<p>Results in:</p>
<pre class="language-json"><code class="language-json">[
  {"id": 1, "name.first": "Coleen", "name.last": "Volk", "name.given": null, "name.family": null},
  {"id": null, "name.first": null, "name.last": null, "name.given": "Mark", "name.family": "Regner"},
  {"id": 2, "name": "Faye Raker", "name.first": null, "name.last": null, "name.given": null, "name.family": null},
]
</code></pre>
<p>Advanced example:</p>
<pre class="language-json"><code class="language-json">[
   {
       "state": "Florida",
       "shortname": "FL",
       "info": {"governor": "Rick Scott"},
       "counties": [
           {"name": "Dade", "population": 12345},
           {"name": "Broward", "population": 40000},
           {"name": "Palm Beach", "population": 60000},
       ],
   },
   {
       "state": "Ohio",
       "shortname": "OH",
       "info": {"governor": "John Kasich"},
       "counties": [
           {"name": "Summit", "population": 1234},
           {"name": "Cuyahoga", "population": 1337},
       ],
   },
]
</code></pre>
<pre class="language-dart"><code class="language-dart">flatten(input, recordPath: ["counties"], includePath: [["state"], ["shortname"], ["info", "governor"]]);
</code></pre>
<p>Results in:</p>
<pre class="language-json"><code class="language-json">[
  {
    "state": "Florida",
    "shortname": "FL",
    "info.governor": "Rick Scott",
    "name": "Dade",
    "population": 12345
  },
  {
    "state": "Florida",
    "shortname": "FL",
    "info.governor": "Rick Scott",
    "name": "Broward",
    "population": 40000
  },
  {
    "state": "Florida",
    "shortname": "FL",
    "info.governor": "Rick Scott",
    "name": "Palm Beach",
    "population": 60000
  },
  {
    "state": "Ohio",
    "shortname": "OH",
    "info.governor": "John Kasich",
    "name": "Summit",
    "population": 1234
  },
  {
    "state": "Ohio",
    "shortname": "OH",
    "info.governor": "John Kasich",
    "name": "Cuyahoga",
    "population": 1337
  },
]
</code></pre>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">List&lt;Map&lt;String, dynamic&gt;&gt; flatten(
  /// Json to flatten
  dynamic json, {
  /// Separator used to join the path of the nested keys
  String separator = '.',

  /// Json path of records in the given json. This will be the entry point for the flattening.
  List&lt;String&gt; recordPath = const [],

  /// Json path from the root of data to extract from the nested records.
  /// Each path will become a column in the resulting table.
  List&lt;List&lt;String&gt;&gt; includePath = const [],

  /// Add missing fields or column to the records.
  bool addMissingKeys = true,

  // TODO: Implement maxLevel
  /// Level of nesting to flatten
  int maxLevel = -1,
}) {
  final result = &lt;Map&lt;String, dynamic&gt;&gt;[];
  final seenKeys = addMissingKeys ? &lt;String&gt;{} : null;

  final includeResult = &lt;String, dynamic&gt;{};
  final includeKeys = includePath.map((i) =&gt; i.join(separator)).toSet();

  final commonPath = includePath.isNotEmpty
      ? (includePath
          .map((i) =&gt; i
              .headIntersect(recordPath)
              // .whereNot((e) =&gt; e == '*')
              .join(separator))
          .toSet())
      : const &lt;String&gt;{};

  // if (kDebugMode) print(includeKeys);
  // if (kDebugMode) print(commonPath);

  _flatten(
    json,
    separator,
    const [],
    recordPath,
    includeKeys,
    commonPath,
    maxLevel,
    listAccumulator(result, seenKeys),
    includeAccumulator(includeResult, includeKeys),
  );

  // if (kDebugMode) print(includeResult);

  if (seenKeys != null) {
    for (final e in result) {
      for (final k in seenKeys) {
        e.putIfAbsent(k, () =&gt; null);
      }
    }
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
  <li><a href="../index">unself_unpack</a></li>
  <li><a href="../unself_unpack/unself_unpack">unself_unpack</a></li>
  <li class="self-crumb">flatten function</li>
</ol>


    <h5>unself_unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unself_unpack/unself_unpack#classes">Classes</a></li>
        <li><a href="../unself_unpack/ArchiveExport">ArchiveExport</a></li>
        <li><a href="../unself_unpack/Export">Export</a></li>
        <li><a href="../unself_unpack/Import">Import</a></li>
        <li><a href="../unself_unpack/IUnpackService">IUnpackService</a></li>
        <li><a href="../unself_unpack/Normalize">Normalize</a></li>
        <li><a href="../unself_unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unself_unpack/ZipImport">ZipImport</a></li>




      <li class="section-title"><a href="../unself_unpack/unself_unpack#properties">Properties</a></li>
        <li><a href="../unself_unpack/facebookSchema">facebookSchema</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#functions">Functions</a></li>
        <li><a href="../unself_unpack/flatten">flatten</a></li>
        <li><a href="../unself_unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="../unself_unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="../unself_unpack/mapAccumulator">mapAccumulator</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#enums">Enums</a></li>
        <li><a href="../unself_unpack/Position">Position</a></li>

      <li class="section-title"><a href="../unself_unpack/unself_unpack#typedefs">Typedefs</a></li>
        <li><a href="../unself_unpack/Accumulator">Accumulator</a></li>

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
