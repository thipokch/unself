import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">hashCode</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>
  <span class="name ">hashCode</span>
  <div class="features"><span class="feature">override</span></div>

</section>


<section class="desc markdown">
  <p>The hash code for this object.</p>
<p>A hash code is a single integer which represents the state of the object
that affects <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> comparisons.</p>
<p>All objects have hash codes.
The default hash code implemented by <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>
represents only the identity of the object,
the same way as the default <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> implementation only considers objects
equal if they are identical (see <a href="https://api.flutter.dev/flutter/dart-core/identityHashCode.html">identityHashCode</a>).</p>
<p>If <a href="../../unself_component/HeroTag/operator_equals">operator ==</a> is overridden to use the object state instead,
the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures
like the default <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a> and <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a> implementations.</p>
<p>Hash codes must be the same for objects that are equal to each other
according to <a href="../../unself_component/HeroTag/operator_equals">operator ==</a>.
The hash code of an object should only change if the object changes
in a way that affects equality.
There are no further requirements for the hash codes.
They need not be consistent between executions of the same program
and there are no distribution guarantees.</p>
<p>Objects that are not equal are allowed to have the same hash code.
It is even technically allowed that all instances have the same hash code,
but if clashes happen too often,
it may reduce the efficiency of hash-based data structures
like <a href="https://api.flutter.dev/flutter/dart-collection/HashSet-class.html">HashSet</a> or <a href="https://api.flutter.dev/flutter/dart-collection/HashMap-class.html">HashMap</a>.</p>
<p>If a subclass overrides <a href="../../unself_component/HeroTag/hashCode">hashCode</a>, it should override the
<a href="../../unself_component/HeroTag/operator_equals">operator ==</a> operator as well to maintain consistency.</p>
</section>


<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
int get hashCode =&gt; identityHashCode(navigator);</code></pre>
</section>

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
  <li><a href="../../unself_component/HeroTag/HeroTag">HeroTag</a></li>
  <li class="self-crumb">hashCode property</li>
</ol>


    <h5>HeroTag class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#constructors">Constructors</a></li>
          <li><a href="../../unself_component/HeroTag/HeroTag.constructor">HeroTag</a></li>


        <li class="section-title">
          <a href="../../unself_component/HeroTag/HeroTag#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_component/HeroTag/hashCode">hashCode</a></li>
          <li><a href="../../unself_component/HeroTag/navigator">navigator</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_component/HeroTag/toString">toString</a></li>

        <li class="section-title"><a href="../../unself_component/HeroTag/HeroTag#operators">Operators</a></li>
          <li><a href="../../unself_component/HeroTag/operator_equals">operator ==</a></li>




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
