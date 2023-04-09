import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">section</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>
<span class="name ">section</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="section-param-text"><span class="type-annotation">dynamic</span> <span class="parameter-name">text</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static Widget section(text) =&gt; Padding(
      padding: const EdgeInsets.fromLTRB(16, 36, 16, 12),
      child: Text(text),
    );</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/ListItemBuilder">ListItemBuilder</a></li>
  <li class="self-crumb">section static method</li>
</ol>


    <h5>ListItemBuilder class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/ListItemBuilder#constructors">Constructors</a></li>
          <li><a href="../../unself_component/ListItemBuilder/ListItemBuilder.constructor">ListItemBuilder</a></li>


        <li class="section-title inherited">
          <a href="../../unself_component/ListItemBuilder#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../unself_component/ListItemBuilder#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_component/ListItemBuilder#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../unself_component/ListItemBuilder#static-methods">Static methods</a></li>
          <li><a href="../../unself_component/ListItemBuilder/section">section</a></li>
          <li><a href="../../unself_component/ListItemBuilder/tile">tile</a></li>

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
