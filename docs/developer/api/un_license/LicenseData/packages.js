import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">packages</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

        <section class="multi-line-signature">
          
          <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span>
          <span class="name ">packages</span>
          <div class="features"><span class="feature">final</span></div>

        </section>
        

        
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">final List&lt;String&gt; packages = &lt;String&gt;[];</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">un_license</a></li>
  <li><a href="../../un_license/un_license">un_license</a></li>
  <li><a href="../../un_license/LicenseData">LicenseData</a></li>
  <li class="self-crumb">packages property</li>
</ol>


    <h5>LicenseData class</h5>
    <ol>

        <li class="section-title"><a href="../../un_license/LicenseData#constructors">Constructors</a></li>
          <li><a href="../../un_license/LicenseData/LicenseData.constructor">LicenseData</a></li>


        <li class="section-title">
          <a href="../../un_license/LicenseData#instance-properties">Properties</a>
        </li>
          <li><a href="../../un_license/LicenseData/firstPackage">firstPackage</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_license/LicenseData/licenses">licenses</a></li>
          <li><a href="../../un_license/LicenseData/packageLicenseBindings">packageLicenseBindings</a></li>
          <li><a href="../../un_license/LicenseData/packages">packages</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_license/LicenseData#instance-methods">Methods</a></li>
          <li><a href="../../un_license/LicenseData/addLicense">addLicense</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../un_license/LicenseData/sortPackages">sortPackages</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_license/LicenseData#operators">Operators</a></li>
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
