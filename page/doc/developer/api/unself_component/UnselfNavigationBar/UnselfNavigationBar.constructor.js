import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">UnselfNavigationBar</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      const
      <span class="name ">UnselfNavigationBar</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span></li>
<li><span class="parameter" id="-param-leading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">leading</span>, </span></li>
<li><span class="parameter" id="-param-automaticallyImplyLeading"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyLeading</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-automaticallyImplyMiddle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">automaticallyImplyMiddle</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-previousPageTitle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">previousPageTitle</span>, </span></li>
<li><span class="parameter" id="-param-middle"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">middle</span>, </span></li>
<li><span class="parameter" id="-param-trailing"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> <span class="parameter-name">trailing</span>, </span></li>
<li><span class="parameter" id="-param-border"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Border-class.html">Border</a>?</span> <span class="parameter-name">border</span> = <span class="default-value">_kDefaultNavBarBorder</span>, </span></li>
<li><span class="parameter" id="-param-backgroundColor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a>?</span> <span class="parameter-name">backgroundColor</span>, </span></li>
<li><span class="parameter" id="-param-brightness"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Brightness.html">Brightness</a>?</span> <span class="parameter-name">brightness</span>, </span></li>
<li><span class="parameter" id="-param-padding"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/EdgeInsetsDirectional-class.html">EdgeInsetsDirectional</a>?</span> <span class="parameter-name">padding</span>, </span></li>
<li><span class="parameter" id="-param-transitionBetweenRoutes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">transitionBetweenRoutes</span> = <span class="default-value">true</span>, </span></li>
<li><span class="parameter" id="-param-heroTag"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">heroTag</span> = <span class="default-value">defaultHeroTag</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">const UnselfNavigationBar({
  Key? key,
  this.leading,
  this.automaticallyImplyLeading = true,
  this.automaticallyImplyMiddle = true,
  this.previousPageTitle,
  this.middle,
  this.trailing,
  this.border = _kDefaultNavBarBorder,
  this.backgroundColor,
  this.brightness,
  this.padding,
  this.transitionBetweenRoutes = true,
  this.heroTag = defaultHeroTag,
})  : assert(
        !transitionBetweenRoutes || identical(heroTag, defaultHeroTag),
        'Cannot specify a heroTag override if this navigation bar does not '
        'transition due to transitionBetweenRoutes = false.',
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
  <li><a href="../../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>
  <li class="self-crumb">UnselfNavigationBar const constructor</li>
</ol>


    <h5>UnselfNavigationBar class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/UnselfNavigationBar.constructor">UnselfNavigationBar</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnselfNavigationBar#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyLeading">automaticallyImplyLeading</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/automaticallyImplyMiddle">automaticallyImplyMiddle</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/backgroundColor">backgroundColor</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/border">border</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/brightness">brightness</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/heroTag">heroTag</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/leading">leading</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/middle">middle</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/padding">padding</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/preferredSize">preferredSize</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/previousPageTitle">previousPageTitle</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/trailing">trailing</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/transitionBetweenRoutes">transitionBetweenRoutes</a></li>

        <li class="section-title"><a href="../../unself_component/UnselfNavigationBar#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/createState">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_component/UnselfNavigationBar/shouldFullyObstruct">shouldFullyObstruct</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnselfNavigationBar#operators">Operators</a></li>
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
