import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnselfExtendedSliverNavigationBar</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnselfExtendedSliverNavigationBar</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-largeTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">largeTitle</span>, </span></li>
<li><span class="parameter" id="-param-leading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">leading</span>, </span></li>
<li><span class="parameter" id="-param-automaticallyImplyLeading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyLeading</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-automaticallyImplyTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyTitle</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-previousPageTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">previousPageTitle</span>, </span></li>
<li><span class="parameter" id="-param-middle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">middle</span>, </span></li>
<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>, </span></li>
<li><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Border-class.html">Border</a>?</span> <span class="parameter-name">border</span> = <span class="default-value">_kDefaultNavBarBorder</span>, </span></li>
<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>
<li><span class="parameter" id="-param-brightness"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Brightness.html">Brightness</a>?</span> <span class="parameter-name">brightness</span>, </span></li>
<li><span class="parameter" id="-param-padding"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/EdgeInsetsDirectional-class.html">EdgeInsetsDirectional</a>?</span> <span class="parameter-name">padding</span>, </span></li>
<li><span class="parameter" id="-param-transitionBetweenRoutes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">transitionBetweenRoutes</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-heroTag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">heroTag</span> = <span class="default-value">defaultHeroTag</span>, </span></li>
<li><span class="parameter" id="-param-stretch"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">stretch</span> = <span class="default-value">false</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnselfExtendedSliverNavigationBar({
  Key? key,
  this.largeTitle,
  this.leading,
  this.automaticallyImplyLeading = true,
  this.automaticallyImplyTitle = true,
  this.previousPageTitle,
  this.middle,
  this.trailing,
  this.border = _kDefaultNavBarBorder,
  this.backgroundColor,
  this.brightness,
  this.padding,
  this.transitionBetweenRoutes = true,
  this.heroTag = defaultHeroTag,
  this.stretch = false,
})  : assert(
        automaticallyImplyTitle || largeTitle != null,
        'No largeTitle has been provided but automaticallyImplyTitle is also '
        'false. Either provide a largeTitle or set automaticallyImplyTitle to '
        'true.',
      ),
      super(key: key);</code></pre>
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
  <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
  <li class="self-crumb">UnselfExtendedSliverNavigationBar const constructor</li>
</ol>


    <h5>UnselfExtendedSliverNavigationBar class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar.constructor">UnselfExtendedSliverNavigationBar</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnselfExtendedSliverNavigationBar#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/automaticallyImplyTitle">automaticallyImplyTitle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/backgroundColor">backgroundColor</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/border">border</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/brightness">brightness</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/heroTag">heroTag</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/largeTitle">largeTitle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/leading">leading</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/middle">middle</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/opaque">opaque</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/padding">padding</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/previousPageTitle">previousPageTitle</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/stretch">stretch</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/trailing">trailing</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>

        <li class="section-title"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../unself_component/UnselfExtendedSliverNavigationBar/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnselfExtendedSliverNavigationBar#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>




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
