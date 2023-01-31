import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">build</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>
<span class="name ">build</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="build-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Describes the part of the user interface represented by this widget.</p>
<p>The framework calls this method when this widget is inserted into the tree
in a given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change
(e.g., an <a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This
method can potentially be called in every frame and should not have any side
effects beyond building a widget.</p>
<p>The framework replaces the subtree below this widget with the widget
returned by this method, either by updating the existing subtree or by
removing the subtree and inflating a new subtree, depending on whether the
widget returned by this method can update the root of the existing
subtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>
<p>Typically implementations return a newly created constellation of widgets
that are configured with information from this widget's constructor and
from the given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>
<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the
tree at which this widget is being built. For example, the context
provides the set of inherited widgets for this location in the tree. A
given widget might be built with multiple different <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>
arguments over time if the widget is moved around the tree or if the
widget is inserted into the tree in multiple places at once.</p>
<p>The implementation of this method must only depend on:</p>
<ul>
<li>the fields of the widget, which themselves must not change over time,
and</li>
<li>any ambient state obtained from the <code>context</code> using
<a href="https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>
</ul>
<p>If a widget's <a href="../../unself_component/UnselfNavigationBarBackButton/build">build</a> method is to depend on anything else, use a
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>
<p>See also:</p>
<ul>
<li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Widget build(BuildContext context) {
  final ModalRoute&lt;dynamic&gt;? currentRoute = ModalRoute.of(context);
  if (onPressed == null) {
    assert(
      currentRoute?.canPop ?? false,
      'UnselfNavigationBarBackButton should only be used in routes that can be popped',
    );
  }

  // TextStyle actionTextStyle = Theme.of(context).textTheme.labelMedium!;
  // if (color != null) {
  //   actionTextStyle = actionTextStyle.copyWith(
  //     color: Theme.of(context).colorScheme.primary,
  //   );
  // }

  // return const Icon(UnSymbols.chevronBack);

  return Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      IconButton(
        onPressed: () {
          if (onPressed != null) {
            onPressed!();
          } else {
            Navigator.maybePop(context);
          }
        },
        icon: Icon(
          UnSymbols.chevronBack,
          color: Theme.of(context).colorScheme.onSurface,
        ),

        // highlightColor: Colors.transparent,
      ),
      _backLabel ??
          _BackLabel(
            specifiedPreviousTitle: previousPageTitle,
            route: currentRoute,
          ),
    ],
  );

  // cupertino.CupertinoButton(
  //   padding: EdgeInsets.zero,
  //   child: Semantics(
  //     container: true,
  //     excludeSemantics: true,
  //     label: 'Back',
  //     button: true,
  //     child: DefaultTextStyle(
  //       style: actionTextStyle,
  //       child: ConstrainedBox(
  //         constraints:
  //             const BoxConstraints(minWidth: _kNavBarBackButtonTapWidth),
  //         child: Row(
  //           mainAxisSize: MainAxisSize.min,
  //           children: &lt;Widget&gt;[
  //             const Padding(padding: EdgeInsetsDirectional.only(start: 8.0)),
  //             _backChevron ?? const _BackChevron(),
  //             const Padding(padding: EdgeInsetsDirectional.only(start: 6.0)),
  //             Flexible(
  //               child: _backLabel ??
  //                   _BackLabel(
  //                     specifiedPreviousTitle: previousPageTitle,
  //                     route: currentRoute,
  //                   ),
  //             ),
  //           ],
  //         ),
  //       ),
  //     ),
  //   ),
  //   onPressed: () {
  //     if (onPressed != null) {
  //       onPressed!();
  //     } else {
  //       Navigator.maybePop(context);
  //     }
  //   },
  // );
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
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
  <li class="self-crumb">build method</li>
</ol>


    <h5>UnselfNavigationBarBackButton class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton#constructors">Constructors</a></li>
          <li><a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton.constructor">UnselfNavigationBarBackButton</a></li>


        <li class="section-title">
          <a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/UnselfNavigationBarBackButton/color">color</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li><a href="../../unself_component/UnselfNavigationBarBackButton/onPressed">onPressed</a></li>
          <li><a href="../../unself_component/UnselfNavigationBarBackButton/previousPageTitle">previousPageTitle</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton#instance-methods">Methods</a></li>
          <li><a href="../../unself_component/UnselfNavigationBarBackButton/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>




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
