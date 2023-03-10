import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">createRoute</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
<span class="name ">createRoute</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="createRoute-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Creates the <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> that corresponds to this page.</p>
<p>The created <a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a> must have its <a href="https://api.flutter.dev/flutter/widgets/Route/settings.html">Route.settings</a> property set to this <a href="https://api.flutter.dev/flutter/widgets/Page-class.html">Page</a>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Route&lt;T&gt; createRoute(BuildContext context) =&gt;
    _PageBasedMaterialWithModalsPageRoute&lt;T&gt;(page: this);</code></pre>
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
  <li><a href="../../unself_component/UnRootSheetPage">UnRootSheetPage<span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></a></li>
  <li class="self-crumb">createRoute method</li>
</ol>


    <h5>UnRootSheetPage class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnRootSheetPage/UnRootSheetPage.constructor">UnRootSheetPage</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnRootSheetPage#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/arguments.html">arguments</a></li>
          <li><a href="../../unself_component/UnRootSheetPage/child">child</a></li>
          <li><a href="../../unself_component/UnRootSheetPage/fullscreenDialog">fullscreenDialog</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/key.html">key</a></li>
          <li><a href="../../unself_component/UnRootSheetPage/maintainState">maintainState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings/name.html">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/restorationId.html">restorationId</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_component/UnRootSheetPage#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/canUpdate.html">canUpdate</a></li>
          <li><a href="../../unself_component/UnRootSheetPage/createRoute">createRoute</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Page/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnRootSheetPage#operators">Operators</a></li>
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
