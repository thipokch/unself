import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">normalize</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype">dynamic</span>
<span class="name ">normalize</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="normalize-param-json"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">json</span>, </span></li>
<li><span class="parameter" id="normalize-param-schema"><span class="type-annotation">JsonSchema</span> <span class="parameter-name">schema</span>, </span></li>
<li><span class="parameter" id="normalize-param-accumulator"><span class="type-annotation">AccumulatorCallback</span> <span class="parameter-name">accumulator</span>, </span></li>
<li><span class="parameter" id="normalize-param-find"><span class="type-annotation">SchemaFinder</span> <span class="parameter-name">find</span></span></li>
</ol>)

        

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">dynamic /* String / Int */ normalize(
  Map&lt;String, dynamic&gt; json,
  JsonSchema schema,
  AccumulatorCallback accumulator,
  SchemaFinder find,
) {
  return schema.map(
    entity: (schema) {
      final result = &lt;String, dynamic&gt;{};
      // final id = json[schema.key];

      final resultSchema = schema.definition.entries
          .groupListsBy(
            (e) =&gt; e.value is JsonRefValue
                ? (e.value as JsonRefValue).name
                : e.key,
          )
          .map((key, value) =&gt; MapEntry(key, {
                for (var d in value) d.key: d.value,
              }));

      json.forEach((k, v) {
        final define = resultSchema[k];

        if (define != null &amp;&amp; define.isNotEmpty) {
          define.forEach((target, schema) {
            if (schema is ValueFrom) {
              result[target] = v;
            } else if (schema is SlugFrom) {
              result[target] = slugify(v);
            } else if (schema is IJsonSchemaRef) {
              result[target] = normalizeRef(
                v,
                schema,
                find,
                accumulator,
              );
            }
          });
        } else {
          result[k] = v;
        }
      });

      accumulator(schema.name, json[schema.key].toString(), result);
      return result[schema.key];
    },
    struct: (schema) {
      json.forEach((key, value) {
        final define = schema.definition[key];

        if (define is IJsonSchemaRef) {
          normalizeRef(
            value,
            define,
            find,
            accumulator,
          );
        } else if (define is Map &amp;&amp; value is Map&lt;String, dynamic&gt;) {
          normalize(
            value,
            schema.copyWith(definition: define),
            accumulator,
            find,
          );
        } else if (define is List &amp;&amp; value is List) {
          for (final value in value) {
            normalize(
              value,
              schema.copyWith(definition: define.first),
              accumulator,
              find,
            );
          }
        }
      });

      return schema.name;
    },
    flat: (schema) {
      final flattened = flatten(json,
          recordPath: schema.entityPath,
          includePath: schema.includePath,
          addMissingKeys: schema.addMissingKeys);

      flattened.forEachIndexed((key, value) {
        normalize(
          value,
          Entity(schema.name, definition: schema.definition),
          accumulator,
          find,
        );
      });
      return schema.name;
    },
  );
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
  <li><a href="../index">unpack</a></li>
  <li><a href="../unpack/unpack">unpack</a></li>
  <li class="self-crumb">normalize function</li>
</ol>


    <h5>unpack library</h5>
    <ol>
      <li class="section-title"><a href="../unpack/unpack#classes">Classes</a></li>
        <li><a href="../unpack/ExtractJson">ExtractJson</a></li>
        <li><a href="../unpack/IExtract">IExtract</a></li>
        <li><a href="../unpack/IFile">IFile</a></li>
        <li><a href="../unpack/ILoad">ILoad</a></li>
        <li><a href="../unpack/IRetrieve">IRetrieve</a></li>
        <li><a href="../unpack/ITransform">ITransform</a></li>
        <li><a href="../unpack/IUnpack">IUnpack</a></li>
        <li><a href="../unpack/JsonNormalizer">JsonNormalizer</a></li>
        <li><a href="../unpack/LoadUngraph">LoadUngraph</a></li>
        <li><a href="../unpack/ModuleComplete">ModuleComplete</a></li>
        <li><a href="../unpack/ModuleError">ModuleError</a></li>
        <li><a href="../unpack/ModuleExtract">ModuleExtract</a></li>
        <li><a href="../unpack/ModuleFile">ModuleFile</a></li>
        <li><a href="../unpack/ModuleInitial">ModuleInitial</a></li>
        <li><a href="../unpack/ModuleLoad">ModuleLoad</a></li>
        <li><a href="../unpack/Moduler">Moduler</a></li>
        <li><a href="../unpack/ModuleState">ModuleState</a></li>
        <li><a href="../unpack/ModuleTransform">ModuleTransform</a></li>
        <li><a href="../unpack/PatternConverter">PatternConverter</a></li>
        <li><a href="../unpack/RetrieveLocalFile">RetrieveLocalFile</a></li>
        <li><a href="../unpack/TransformJson">TransformJson</a></li>
        <li><a href="../unpack/UnpackService">UnpackService</a></li>
        <li><a href="../unpack/XFileConverter">XFileConverter</a></li>
        <li><a href="../unpack/ZipFile">ZipFile</a></li>

      <li class="section-title"><a href="../unpack/unpack#extensions">Extensions</a></li>
        <li><a href="../unpack/PatternEquality">PatternEquality</a></li>


      <li class="section-title"><a href="../unpack/unpack#constants">Constants</a></li>
        <li><a href="../unpack/jsonTypeKey-constant">jsonTypeKey</a></li>


      <li class="section-title"><a href="../unpack/unpack#functions">Functions</a></li>
        <li><a href="../unpack/flatten">flatten</a></li>
        <li><a href="../unpack/iFromJson">iFromJson</a></li>
        <li><a href="../unpack/includeAccumulator">includeAccumulator</a></li>
        <li><a href="../unpack/listAccumulator">listAccumulator</a></li>
        <li><a href="../unpack/mapAccumulator">mapAccumulator</a></li>
        <li><a href="../unpack/normalize">normalize</a></li>
        <li><a href="../unpack/normalizeRef">normalizeRef</a></li>

      <li class="section-title"><a href="../unpack/unpack#enums">Enums</a></li>
        <li><a href="../unpack/ModuleStep">ModuleStep</a></li>
        <li><a href="../unpack/Position">Position</a></li>

      <li class="section-title"><a href="../unpack/unpack#typedefs">Typedefs</a></li>
        <li><a href="../unpack/Accumulator">Accumulator</a></li>
        <li><a href="../unpack/IFromJson">IFromJson</a></li>

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
