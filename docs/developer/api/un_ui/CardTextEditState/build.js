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
<p>The framework calls this method in a number of different situations. For
example:</p>
<ul>
<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a>.</li>
<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a>.</li>
<li>After receiving a call to <a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a>.</li>
<li>After a dependency of this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object changes (e.g., an
<a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by the previous <a href="../../un_ui/CardTextEditState/build">build</a> changes).</li>
<li>After calling <a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a> and then reinserting the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object into
the tree at another location.</li>
</ul>
<p>This method can potentially be called in every frame and should not have
any side effects beyond building a widget.</p>
<p>The framework replaces the subtree below this widget with the widget
returned by this method, either by updating the existing subtree or by
removing the subtree and inflating a new subtree, depending on whether the
widget returned by this method can update the root of the existing
subtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>
<p>Typically implementations return a newly created constellation of widgets
that are configured with information from this widget's constructor, the
given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>, and the internal state of this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object.</p>
<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the
tree at which this widget is being built. For example, the context
provides the set of inherited widgets for this location in the tree. The
<a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> argument is always the same as the <code>context</code> property of
this <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object and will remain the same for the lifetime of this
object. The <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> argument is provided redundantly here so that
this method matches the signature for a <a href="https://api.flutter.dev/flutter/widgets/WidgetBuilder.html">WidgetBuilder</a>.</p>
<h2 id="design-discussion">Design discussion</h2>
<h3 id="why-is-the-build-method-on-state-and-not-statefulwidget">Why is the <a href="../../un_ui/CardTextEditState/build">build</a> method on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a>, and not <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>?</h3>
<p>Putting a <code>Widget build(BuildContext context)</code> method on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> rather
than putting a <code>Widget build(BuildContext context, State state)</code> method
on <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> gives developers more flexibility when subclassing
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>.</p>
<p>For example, <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a> is a subclass of <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> that
introduces an abstract <code>Widget build(BuildContext context)</code> method for its
subclasses to implement. If <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> already had a <a href="../../un_ui/CardTextEditState/build">build</a> method
that took a <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> argument, <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a> would be forced to provide
its <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object to subclasses even though its <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object is an
internal implementation detail of <a href="https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html">AnimatedWidget</a>.</p>
<p>Conceptually, <a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a> could also be implemented as a subclass of
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> in a similar manner. If the <a href="../../un_ui/CardTextEditState/build">build</a> method were on
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> rather than <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a>, that would not be possible anymore.</p>
<p>Putting the <a href="../../un_ui/CardTextEditState/build">build</a> function on <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> rather than <a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> also
helps avoid a category of bugs related to closures implicitly capturing
<code>this</code>. If you defined a closure in a <a href="../../un_ui/CardTextEditState/build">build</a> function on a
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>, that closure would implicitly capture <code>this</code>, which is
the current widget instance, and would have the (immutable) fields of that
instance in scope:</p>
<pre class="language-dart"><code class="language-dart">// (this is not valid Flutter code)
class MyButton extends StatefulWidgetX {
  MyButton({super.key, required this.color});

  final Color color;

  @override
  Widget build(BuildContext context, State state) {
    return SpecialWidget(
      handler: () { print('color: \$color'); },
    );
  }
}
</code></pre>
<p>For example, suppose the parent builds <code>MyButton</code> with <code>color</code> being blue,
the <code>\$color</code> in the print function refers to blue, as expected. Now,
suppose the parent rebuilds <code>MyButton</code> with green. The closure created by
the first build still implicitly refers to the original widget and the
<code>\$color</code> still prints blue even through the widget has been updated to
green; should that closure outlive its widget, it would print outdated
information.</p>
<p>In contrast, with the <a href="../../un_ui/CardTextEditState/build">build</a> function on the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, closures
created during <a href="../../un_ui/CardTextEditState/build">build</a> implicitly capture the <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> instance instead of
the widget instance:</p>
<pre class="language-dart"><code class="language-dart">class MyButton extends StatefulWidget {
  const MyButton({super.key, this.color = Colors.teal});

  final Color color;
  // ...
}

class MyButtonState extends State&lt;MyButton&gt; {
  // ...
  @override
  Widget build(BuildContext context) {
    return SpecialWidget(
      handler: () { print('color: \${widget.color}'); },
    );
  }
}
</code></pre>
<p>Now when the parent rebuilds <code>MyButton</code> with green, the closure created by
the first build still refers to <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object, which is preserved across
rebuilds, but the framework has updated that <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a> object's <a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a>
property to refer to the new <code>MyButton</code> instance and <code>\${widget.color}</code>
prints green, as expected.</p>
<p>See also:</p>
<ul>
<li><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a>, which contains the discussion on performance considerations.</li>
</ul>
</section>


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
Widget build(BuildContext context) =&gt; TextField(
      controller: controller,
      autofocus: widget.autoFocus ?? true,
      onChanged: widget.onChanged,
      textAlign: TextAlign.center,
      textAlignVertical: TextAlignVertical.center,
      style: Theme.of(context).textTheme.bodyLarge,
      expands: true,
      maxLines: null,
      maxLength: 300,
      onTap: widget.onTap,
      decoration: const InputDecoration(
        hintText: 'Start Writing...',
        border: InputBorder.none,
        contentPadding: EdgeInsets.only(
          top: 16.0,
          left: 16.0,
          right: 16.0,
          bottom: 16.0,
        ),
      ),
      buildCounter: (
        _, {
        required currentLength,
        maxLength,
        required isFocused,
      }) =&gt;
          Container(
        height: 16,
        alignment: Alignment.center,
        child: Text(
          isFocused ? "\$currentLength / \$maxLength" : "",
          textAlign: TextAlign.center,
          style: Theme.of(_).textTheme.labelMedium?.copyWith(
                color: Theme.of(context).colorScheme.outline,
              ),
        ),
      ),
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
  <li><a href="../../index">un_ui</a></li>
  <li><a href="../../un_ui/un_ui">un_ui</a></li>
  <li><a href="../../un_ui/CardTextEditState">CardTextEditState</a></li>
  <li class="self-crumb">build method</li>
</ol>


    <h5>CardTextEditState class</h5>
    <ol>

        <li class="section-title"><a href="../../un_ui/CardTextEditState#constructors">Constructors</a></li>
          <li><a href="../../un_ui/CardTextEditState/CardTextEditState.constructor">CardTextEditState</a></li>


        <li class="section-title">
          <a href="../../un_ui/CardTextEditState#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/context.html">context</a></li>
          <li><a href="../../un_ui/CardTextEditState/controller">controller</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/mounted.html">mounted</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/widget.html">widget</a></li>

        <li class="section-title"><a href="../../un_ui/CardTextEditState#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/activate.html">activate</a></li>
          <li><a href="../../un_ui/CardTextEditState/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/deactivate.html">deactivate</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didChangeDependencies.html">didChangeDependencies</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/didUpdateWidget.html">didUpdateWidget</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/dispose.html">dispose</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/initState.html">initState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/reassemble.html">reassemble</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../un_ui/CardTextEditState#operators">Operators</a></li>
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
