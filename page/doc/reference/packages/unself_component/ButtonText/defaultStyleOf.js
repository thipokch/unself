import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">defaultStyleOf</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a></span>
<span class="name ">defaultStyleOf</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="defaultStyleOf-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Defines the button's default appearance.</p>
<p>The button <a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a>'s <a href="https://api.flutter.dev/flutter/widgets/Text-class.html">Text</a> and <a href="https://api.flutter.dev/flutter/widgets/Icon-class.html">Icon</a> widgets are rendered with
the <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>'s foreground color. The button's <a href="https://api.flutter.dev/flutter/material/InkWell-class.html">InkWell</a> adds
the style's overlay color when the button is focused, hovered
or pressed. The button's background color becomes its <a href="https://api.flutter.dev/flutter/material/Material-class.html">Material</a>
color and is transparent by default.</p>
<p>All of the <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>'s defaults appear below.</p>
<p>In this list "Theme.foo" is shorthand for
<code>Theme.of(context).foo</code>. Color scheme values like
"onSurface(0.38)" are shorthand for
<code>onSurface.withOpacity(0.38)</code>. <a href="https://api.flutter.dev/flutter/material/MaterialStateProperty-class.html">MaterialStateProperty</a> valued
properties that are not followed by a sublist have the same
value for all states, otherwise the values are as specified for
each state and "others" means all other states.</p>
<p>The <code>textScaleFactor</code> is the value of
<code>MediaQuery.of(context).textScaleFactor</code> and the names of the
EdgeInsets constructors and <code>EdgeInsetsGeometry.lerp</code> have been
abbreviated for readability.</p>
<p>The color of the <a href="https://api.flutter.dev/flutter/material/ButtonStyle/textStyle.html">ButtonStyle.textStyle</a> is not used, the
<a href="https://api.flutter.dev/flutter/material/ButtonStyle/foregroundColor.html">ButtonStyle.foregroundColor</a> color is used instead.</p>
<h2 id="material-2-defaults">Material 2 defaults</h2>
<ul>
<li><code>textStyle</code> - Theme.textTheme.button</li>
<li><code>backgroundColor</code> - transparent</li>
<li><code>foregroundColor</code>
<ul>
<li>disabled - Theme.colorScheme.onSurface(0.38)</li>
<li>others - Theme.colorScheme.primary</li>
</ul>
</li>
<li><code>overlayColor</code>
<ul>
<li>hovered - Theme.colorScheme.primary(0.04)</li>
<li>focused or pressed - Theme.colorScheme.primary(0.12)</li>
</ul>
</li>
<li><code>shadowColor</code> - Theme.shadowColor</li>
<li><code>elevation</code> - 0</li>
<li><code>padding</code>
<ul>
<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>
<li><code>1 &lt; textScaleFactor &lt;= 2</code> - lerp(all(8), horizontal(8))</li>
<li><code>2 &lt; textScaleFactor &lt;= 3</code> - lerp(horizontal(8), horizontal(4))</li>
<li><code>3 &lt; textScaleFactor</code> - horizontal(4)</li>
</ul>
</li>
<li><code>minimumSize</code> - Size(64, 36)</li>
<li><code>fixedSize</code> - null</li>
<li><code>maximumSize</code> - Size.infinite</li>
<li><code>side</code> - null</li>
<li><code>shape</code> - RoundedRectangleBorder(borderRadius: BorderRadius.circular(4))</li>
<li><code>mouseCursor</code>
<ul>
<li>disabled - SystemMouseCursors.basic</li>
<li>others - SystemMouseCursors.click</li>
</ul>
</li>
<li><code>visualDensity</code> - theme.visualDensity</li>
<li><code>tapTargetSize</code> - theme.materialTapTargetSize</li>
<li><code>animationDuration</code> - kThemeChangeDuration</li>
<li><code>enableFeedback</code> - true</li>
<li><code>alignment</code> - Alignment.center</li>
<li><code>splashFactory</code> - InkRipple.splashFactory</li>
</ul>
<p>The default padding values for the <a href="https://api.flutter.dev/flutter/material/TextButton/TextButton.icon.html">TextButton.icon</a> factory are slightly different:</p>
<ul>
<li><code>padding</code>
<ul>
<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>
<li><code>1 &lt; textScaleFactor &lt;= 2 </code>- lerp(all(8), horizontal(4))</li>
<li><code>2 &lt; textScaleFactor</code> - horizontal(4)</li>
</ul>
</li>
</ul>
<p>The default value for <code>side</code>, which defines the appearance of the button's
outline, is null. That means that the outline is defined by the button
shape's <a href="https://api.flutter.dev/flutter/painting/OutlinedBorder/side.html">OutlinedBorder.side</a>. Typically the default value of an
<a href="https://api.flutter.dev/flutter/painting/OutlinedBorder-class.html">OutlinedBorder</a>'s side is <a href="https://api.flutter.dev/flutter/painting/BorderSide/none-constant.html">BorderSide.none</a>, so an outline is not drawn.</p>
<h2 id="material-3-defaults">Material 3 defaults</h2>
<p>If <a href="https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html">ThemeData.useMaterial3</a> is set to true the following defaults will
be used:</p>
<ul>
<li><code>textStyle</code> - Theme.textTheme.labelLarge</li>
<li><code>backgroundColor</code> - transparent</li>
<li><code>foregroundColor</code>
<ul>
<li>disabled - Theme.colorScheme.onSurface(0.38)</li>
<li>others - Theme.colorScheme.primary</li>
</ul>
</li>
<li><code>overlayColor</code>
<ul>
<li>hovered - Theme.colorScheme.primary(0.08)</li>
<li>focused or pressed - Theme.colorScheme.primary(0.12)</li>
<li>others - null</li>
</ul>
</li>
<li><code>shadowColor</code> - null</li>
<li><code>surfaceTintColor</code> - null</li>
<li><code>elevation</code> - 0</li>
<li><code>padding</code>
<ul>
<li><code>textScaleFactor &lt;= 1</code> - all(8)</li>
<li><code>1 &lt; textScaleFactor &lt;= 2</code> - lerp(all(8), horizontal(8))</li>
<li><code>2 &lt; textScaleFactor &lt;= 3</code> - lerp(horizontal(8), horizontal(4))</li>
<li><code>3 &lt; textScaleFactor</code> - horizontal(4)</li>
</ul>
</li>
<li><code>minimumSize</code> - Size(64, 40)</li>
<li><code>fixedSize</code> - null</li>
<li><code>maximumSize</code> - Size.infinite</li>
<li><code>side</code> - null</li>
<li><code>shape</code> - StadiumBorder()</li>
<li><code>mouseCursor</code>
<ul>
<li>disabled - SystemMouseCursors.basic</li>
<li>others - SystemMouseCursors.click</li>
</ul>
</li>
<li><code>visualDensity</code> - theme.visualDensity</li>
<li><code>tapTargetSize</code> - theme.materialTapTargetSize</li>
<li><code>animationDuration</code> - kThemeChangeDuration</li>
<li><code>enableFeedback</code> - true</li>
<li><code>alignment</code> - Alignment.center</li>
<li><code>splashFactory</code> - Theme.splashFactory</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
ButtonStyle defaultStyleOf(BuildContext context) {
  return super
      .defaultStyleOf(
        context,
      )
      .copyWith(
        elevation: ButtonStyleButton.allOrNull(.0),
        foregroundColor: ButtonForeground(
          Theme.of(context).colorScheme.primary,
          Theme.of(context).colorScheme.onSurface,
        ),
        overlayColor: ButtonOverlay(
          Theme.of(context).colorScheme.primary,
        ),
        splashFactory: kIsWeb ? null : InkSparkle.splashFactory,
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
  <li><a href="../../index">unself_component</a></li>
  <li><a href="../../unself_component/unself_component">unself_component</a></li>
  <li><a href="../../unself_component/ButtonText/ButtonText">ButtonText</a></li>
  <li class="self-crumb">defaultStyleOf method</li>
</ol>


    <h5>ButtonText class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/ButtonText/ButtonText#constructors">Constructors</a></li>
          <li><a href="../../unself_component/ButtonText/ButtonText.constructor">ButtonText</a></li>
          <li><a href="../../unself_component/ButtonText/ButtonText.icon">icon</a></li>


        <li class="section-title inherited">
          <a href="../../unself_component/ButtonText/ButtonText#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>

        <li class="section-title"><a href="../../unself_component/ButtonText/ButtonText#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>
          <li><a href="../../unself_component/ButtonText/defaultStyleOf">defaultStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/TextButton/themeStyleOf.html">themeStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../unself_component/ButtonText/ButtonText#operators">Operators</a></li>
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
