import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">children</span> static method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span>&gt;</span></span>
<span class="name ">children</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="children-param-bloc">{<span>required</span> <span class="type-annotation"><a href="../../settings_appearance/SettingsAppearanceBloc">SettingsAppearanceBloc</a></span> <span class="parameter-name">bloc</span>, </span></li>
<li><span class="parameter" id="children-param-state"><span>required</span> <span class="type-annotation"><a href="../../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></span> <span class="parameter-name">state</span>}</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">static List&lt;Widget&gt; children({
  required SettingsAppearanceBloc bloc,
  required SettingsAppearanceState state,
}) =&gt;
    [
      ...{
        "Automatic": ThemeMode.system,
        "Light": ThemeMode.light,
        "Dark": ThemeMode.dark,
      }.entries.map&lt;ListTile&gt;((_) =&gt; ListTile(
            title: Text(_.key),
            trailing: Visibility(
              visible: state.themeMode == _.value,
              child: const Icon(UnSymbols.checkmark),
            ),
            onTap: () =&gt; bloc.add(
              SettingsAppearanceEvent.setThemeMode(themeMode: _.value),
            ),
          )),
    ];</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_settings_appearance</a></li>
  <li><a href="../../settings_appearance/settings_appearance">settings_appearance</a></li>
  <li><a href="../../settings_appearance/SettingsAppearanceView">SettingsAppearanceView</a></li>
  <li class="self-crumb">children static method</li>
</ol>


    <h5>SettingsAppearanceView class</h5>
    <ol>

        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#constructors">Constructors</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceView/SettingsAppearanceView.constructor">SettingsAppearanceView</a></li>


        <li class="section-title inherited">
          <a href="../../settings_appearance/SettingsAppearanceView#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#instance-methods">Methods</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceView/build">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceView#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceView#static-methods">Static methods</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceView/children">children</a></li>

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
