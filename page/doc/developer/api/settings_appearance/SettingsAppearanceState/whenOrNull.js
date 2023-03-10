import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://pub.dev/documentation/meta/1.8.0/meta/optionalTypeArgs-constant.html">optionalTypeArgs</a></li>
    </ol>
  </div>

<span class="returntype">TResult?</span>
<span class="name ">whenOrNull</span>&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt;(<wbr><ol class="parameter-list"><li><span class="parameter" id="whenOrNull-param-\$default"><span class="type-annotation">TResult?</span> <span class="parameter-name">\$default</span>(<ol class="parameter-list"><li><span class="parameter" id="param-themeMode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ThemeMode.html">ThemeMode</a></span> <span class="parameter-name">themeMode</span></span></li>
</ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-initial">{<span class="type-annotation">TResult?</span> <span class="parameter-name">initial</span>(<ol class="parameter-list"></ol>
)?, </span></li>
<li><span class="parameter" id="whenOrNull-param-errored"><span class="type-annotation">TResult?</span> <span class="parameter-name">errored</span>(<ol class="parameter-list"><li><span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">error</span>, </span></li>
<li><span class="parameter" id="param-stackTrace"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StackTrace-class.html">StackTrace</a></span> <span class="parameter-name">stackTrace</span></span></li>
</ol>
)?}</span></li>
</ol>)

      <div class="features"><span class="feature">inherited</span></div>

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@optionalTypeArgs
TResult? whenOrNull&lt;TResult extends Object?&gt;(
  TResult? Function(ThemeMode themeMode)? \$default, {
  TResult? Function()? initial,
  TResult? Function(Object error, StackTrace stackTrace)? errored,
}) =&gt;
    throw _privateConstructorUsedError;</code></pre>
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
  <li><a href="../../settings_appearance/SettingsAppearanceState">SettingsAppearanceState</a></li>
  <li class="self-crumb">whenOrNull&lt;<wbr><span class="type-parameter">TResult extends Object?</span>&gt; method</li>
</ol>


    <h5>SettingsAppearanceState class</h5>
    <ol>

        <li class="section-title"><a href="../../settings_appearance/SettingsAppearanceState#constructors">Constructors</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.constructor">SettingsAppearanceState</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.errored">errored</a></li>
          <li><a href="../../settings_appearance/SettingsAppearanceState/SettingsAppearanceState.initial">initial</a></li>


        <li class="section-title inherited">
          <a href="../../settings_appearance/SettingsAppearanceState#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/map">map</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/when">when</a></li>
          <li class="inherited"><a href="../../settings_appearance/SettingsAppearanceState/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../../settings_appearance/SettingsAppearanceState#operators">Operators</a></li>
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
