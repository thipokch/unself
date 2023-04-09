import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">debugFillProperties</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>

<span class="returntype">void</span>
<span class="name ">debugFillProperties</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span></li>
</ol>)

      <div class="features"><span class="feature">override</span></div>

    </section>
    
<section class="desc markdown">
  <p>Add additional properties associated with the node.</p>
<p>Use the most specific <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> existing subclass to describe
each property instead of the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> base class. There are
only a small number of <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> subclasses each covering a
common use case. Consider what values a property is relevant for users
debugging as users debugging large trees are overloaded with information.
Common named parameters in <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a> subclasses help filter when
and how properties are displayed.</p>
<p><code>defaultValue</code>, <code>showName</code>, <code>showSeparator</code>, and <code>level</code> keep string
representations of diagnostics terse and hide properties when they are not
very useful.</p>
<ul>
<li>Use <code>defaultValue</code> any time the default value of a property is
uninteresting. For example, specify a default value of null any time
a property being null does not indicate an error.</li>
<li>Avoid specifying the <code>level</code> parameter unless the result you want
cannot be achieved by using the <code>defaultValue</code> parameter or using
the <a href="https://api.flutter.dev/flutter/foundation/ObjectFlagProperty-class.html">ObjectFlagProperty</a> class to conditionally display the property
as a flag.</li>
<li>Specify <code>showName</code> and <code>showSeparator</code> in rare cases where the string
output would look clumsy if they were not set.
<pre class="language-dart"><code class="language-dart">DiagnosticsProperty&lt;Object&gt;('child(3, 4)', null, ifNull: 'is null', showSeparator: false).toString()
</code></pre>Shows using <code>showSeparator</code> to get output <code>child(3, 4) is null</code> which
is more polished than <code>child(3, 4): is null</code>.
<pre class="language-dart"><code class="language-dart">DiagnosticsProperty&lt;IconData&gt;('icon', icon, ifNull: '&lt;empty&gt;', showName: false).toString()
</code></pre>Shows using <code>showName</code> to omit the property name as in this context the
property name does not add useful information.</li>
</ul>
<p><code>ifNull</code>, <code>ifEmpty</code>, <code>unit</code>, and <code>tooltip</code> make property
descriptions clearer. The examples in the code sample below illustrate
good uses of all of these parameters.</p>
<h2 id="diagnosticsproperty-subclasses-for-primitive-types">DiagnosticsProperty subclasses for primitive types</h2>
<ul>
<li><a href="https://api.flutter.dev/flutter/foundation/StringProperty-class.html">StringProperty</a>, which supports automatically enclosing a <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>
value in quotes.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/DoubleProperty-class.html">DoubleProperty</a>, which supports specifying a unit of measurement for
a <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a> value.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/PercentProperty-class.html">PercentProperty</a>, which clamps a <a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a> to between 0 and 1 and
formats it as a percentage.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/IntProperty-class.html">IntProperty</a>, which supports specifying a unit of measurement for an
<a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a> value.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/FlagProperty-class.html">FlagProperty</a>, which formats a <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a> value as one or more flags.
Depending on the use case it is better to format a bool as
<code>DiagnosticsProperty&lt;bool&gt;</code> instead of using <a href="https://api.flutter.dev/flutter/foundation/FlagProperty-class.html">FlagProperty</a> as the
output is more verbose but unambiguous.</li>
</ul>
<h2 id="other-important-diagnosticsproperty-variants">Other important <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> variants</h2>
<ul>
<li><a href="https://api.flutter.dev/flutter/foundation/EnumProperty-class.html">EnumProperty</a>, which provides terse descriptions of enum values
working around limitations of the <code>toString</code> implementation for Dart
enum types.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/IterableProperty-class.html">IterableProperty</a>, which handles iterable values with display
customizable depending on the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a> used.</li>
<li><a href="https://api.flutter.dev/flutter/foundation/ObjectFlagProperty-class.html">ObjectFlagProperty</a>, which provides terse descriptions of whether a
property value is present or not. For example, whether an <code>onClick</code>
callback is specified or an animation is in progress.</li>
<li><a href="https://api.flutter.dev/flutter/painting/ColorProperty-class.html">ColorProperty</a>, which must be used if the property value is
a <a href="https://api.flutter.dev/flutter/dart-ui/Color-class.html">Color</a> or one of its subclasses.</li>
<li><a href="https://api.flutter.dev/flutter/widgets/IconDataProperty-class.html">IconDataProperty</a>, which must be used if the property value
is of type <a href="https://api.flutter.dev/flutter/widgets/IconData-class.html">IconData</a>.</li>
</ul>
<p>If none of these subclasses apply, use the <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>
constructor or in rare cases create your own <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>
subclass as in the case for <a href="https://api.flutter.dev/flutter/painting/TransformProperty-class.html">TransformProperty</a> which handles <a href="https://pub.dev/documentation/vector_math/2.1.4/vector_math_64/Matrix4-class.html">Matrix4</a>
that represent transforms. Generally any property value with a good
<code>toString</code> method implementation works fine using <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a>
directly.</p>
<p>{@tool snippet}</p>
<p>This example shows best practices for implementing <a href="../../un_ui/PairingScrollController/debugFillProperties">debugFillProperties</a>
illustrating use of all common <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> subclasses and all
common <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsProperty-class.html">DiagnosticsProperty</a> parameters.</p>
<pre class="language-dart"><code class="language-dart">class ExampleObject extends ExampleSuperclass {

  // ...various members and properties...

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    // Always add properties from the base class first.
    super.debugFillProperties(properties);

    // Omit the property name 'message' when displaying this String property
    // as it would just add visual noise.
    properties.add(StringProperty('message', message, showName: false));

    properties.add(DoubleProperty('stepWidth', stepWidth));

    // A scale of 1.0 does nothing so should be hidden.
    properties.add(DoubleProperty('scale', scale, defaultValue: 1.0));

    // If the hitTestExtent matches the paintExtent, it is just set to its
    // default value so is not relevant.
    properties.add(DoubleProperty('hitTestExtent', hitTestExtent, defaultValue: paintExtent));

    // maxWidth of double.infinity indicates the width is unconstrained and
    // so maxWidth has no impact.
    properties.add(DoubleProperty('maxWidth', maxWidth, defaultValue: double.infinity));

    // Progress is a value between 0 and 1 or null. Showing it as a
    // percentage makes the meaning clear enough that the name can be
    // hidden.
    properties.add(PercentProperty(
      'progress',
      progress,
      showName: false,
      ifNull: '&lt;indeterminate&gt;',
    ));

    // Most text fields have maxLines set to 1.
    properties.add(IntProperty('maxLines', maxLines, defaultValue: 1));

    // Specify the unit as otherwise it would be unclear that time is in
    // milliseconds.
    properties.add(IntProperty('duration', duration.inMilliseconds, unit: 'ms'));

    // Tooltip is used instead of unit for this case as a unit should be a
    // terse description appropriate to display directly after a number
    // without a space.
    properties.add(DoubleProperty(
      'device pixel ratio',
      ui.window.devicePixelRatio,
      tooltip: 'physical pixels per logical pixel',
    ));

    // Displaying the depth value would be distracting. Instead only display
    // if the depth value is missing.
    properties.add(ObjectFlagProperty&lt;int&gt;('depth', depth, ifNull: 'no depth'));

    // bool flag that is only shown when the value is true.
    properties.add(FlagProperty('using primary controller', value: primary));

    properties.add(FlagProperty(
      'isCurrent',
      value: isCurrent,
      ifTrue: 'active',
      ifFalse: 'inactive',
    ));

    properties.add(DiagnosticsProperty&lt;bool&gt;('keepAlive', keepAlive));

    // FlagProperty could have also been used in this case.
    // This option results in the text "obscureText: true" instead
    // of "obscureText" which is a bit more verbose but a bit clearer.
    properties.add(DiagnosticsProperty&lt;bool&gt;('obscureText', obscureText, defaultValue: false));

    properties.add(EnumProperty&lt;TextAlign&gt;('textAlign', textAlign, defaultValue: null));
    properties.add(EnumProperty&lt;ImageRepeat&gt;('repeat', repeat, defaultValue: ImageRepeat.noRepeat));

    // Warn users when the widget is missing but do not show the value.
    properties.add(ObjectFlagProperty&lt;Widget&gt;('widget', widget, ifNull: 'no widget'));

    properties.add(IterableProperty&lt;BoxShadow&gt;(
      'boxShadow',
      boxShadow,
      defaultValue: null,
      style: style,
    ));

    // Getting the value of size throws an exception unless hasSize is true.
    properties.add(DiagnosticsProperty&lt;Size&gt;.lazy(
      'size',
      () =&gt; size,
      description: '\${ hasSize ? size : "MISSING" }',
    ));

    // If the \`toString\` method for the property value does not provide a
    // good terse description, write a DiagnosticsProperty subclass as in
    // the case of TransformProperty which displays a nice debugging view
    // of a Matrix4 that represents a transform.
    properties.add(TransformProperty('transform', transform));

    // If the value class has a good \`toString\` method, use
    // DiagnosticsProperty&lt;YourValueType&gt;. Specifying the value type ensures
    // that debugging tools always know the type of the field and so can
    // provide the right UI affordances. For example, in this case even
    // if color is null, a debugging tool still knows the value is a Color
    // and can display relevant color related UI.
    properties.add(DiagnosticsProperty&lt;Color&gt;('color', color));

    // Use a custom description to generate a more terse summary than the
    // \`toString\` method on the map class.
    properties.add(DiagnosticsProperty&lt;Map&lt;Listenable, VoidCallback&gt;&gt;(
      'handles',
      handles,
      description: handles != null
        ? '\${handles!.length} active client\${ handles!.length == 1 ? "" : "s" }'
        : null,
      ifNull: 'no notifications ever received',
      showName: false,
    ));
  }
}
</code></pre>
<p>{@end-tool}</p>
<p>Used by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a> and <a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a>.</p>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
void debugFillProperties(DiagnosticPropertiesBuilder properties) {
  super.debugFillProperties(properties);
  properties.add(DiagnosticsProperty&lt;PairingScrollControllerGroup&gt;(
    'group',
    group,
    ifNull: 'no controller',
    showName: false,
  ));
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
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/PairingScrollController">PairingScrollController</a></li>
  <li class="self-crumb">debugFillProperties method</li>
</ol>


    <h5>PairingScrollController class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/PairingScrollController#constructors">Constructors</a></li>
          <li><a href="../../un_ui/PairingScrollController/PairingScrollController.constructor">PairingScrollController</a></li>


        <li class="section-title">
          <a href="../../un_ui/PairingScrollController#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/automaticallyInheritForPlatforms.html">automaticallyInheritForPlatforms</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/ProxyWidget/child.html">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/controller.html">controller</a></li>
          <li><a href="../../un_ui/PairingScrollController/group">group</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/PrimaryScrollController/scrollDirection.html">scrollDirection</a></li>

        <li class="section-title"><a href="../../un_ui/PairingScrollController#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/InheritedWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li><a href="../../un_ui/PairingScrollController/debugFillProperties">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>
          <li><a href="../../un_ui/PairingScrollController/updateShouldNotify">updateShouldNotify</a></li>

        <li class="section-title inherited"><a href="../../un_ui/PairingScrollController#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../un_ui/PairingScrollController#static-methods">Static methods</a></li>
          <li><a href="../../un_ui/PairingScrollController/of">of</a></li>

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
