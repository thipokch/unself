import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">labels</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
  <div>
    <ol class="annotation-list">
        <li>@<a href="https://api.flutter.dev/flutter/dart-core/override-constant.html">override</a></li>
    </ol>
  </div>
          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>
          <span class="name ">labels</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        
<section class="desc markdown">
  <p><a href="../../unself_model/Account/labels">labels</a> is a list of labels assigned to the model.</p>
</section>

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">@override
final labels = const ['account'];</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_model</a></li>
  <li><a href="../../unself_model/unself_model">unself_model</a></li>
  <li><a href="../../unself_model/Account">Account</a></li>
  <li class="self-crumb">labels property</li>
</ol>


    <h5>Account class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_model/Account#constructors">Constructors</a></li>
          <li><a href="../../unself_model/Account/Account.constructor">Account</a></li>
          <li><a href="../../unself_model/Account/Account.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../../unself_model/Account#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../../unself_model/Account/app">app</a></li>
          <li class="inherited"><a href="../../unself_model/Account/archiveId">archiveId</a></li>
          <li class="inherited"><a href="../../unself_model/Account/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../../unself_model/Account/created">created</a></li>
          <li class="inherited"><a href="../../unself_model/Account/email">email</a></li>
          <li class="inherited"><a href="../../unself_model/Account/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../../unself_model/Account/id">id</a></li>
          <li><a href="../../unself_model/Account/labels">labels</a></li>
          <li class="inherited"><a href="../../unself_model/Account/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../../unself_model/Account/updated">updated</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Account#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../../unself_model/Account/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_model/Account#operators">Operators</a></li>
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
