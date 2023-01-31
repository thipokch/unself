import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-property">licenses</span> property 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>


        
<section id="getter">

<section class="multi-line-signature">
  
  <span class="returntype"><a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../../unself_license/LicenseData/LicenseData">LicenseData</a></span>&gt;</span></span>
  <span class="name ">licenses</span>
  

</section>




<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">Future&lt;LicenseData&gt; get licenses async =&gt;
    (_licenses ??= await LicenseRegistry.licenses
        .fold&lt;LicenseData&gt;(
          LicenseData(),
          (LicenseData prev, LicenseEntry license) =&gt;
              prev..addLicense(license),
        )
        .then((LicenseData licenseData) =&gt; licenseData..sortPackages()))!;</code></pre>
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
  <li><a href="../../index">unself_license</a></li>
  <li><a href="../../unself_license/unself_license">unself_license</a></li>
  <li><a href="../../unself_license/LicenseService/LicenseService">LicenseService</a></li>
  <li class="self-crumb">licenses property</li>
</ol>


    <h5>LicenseService class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_license/LicenseService/LicenseService#constructors">Constructors</a></li>
          <li><a href="../../unself_license/LicenseService/LicenseService.constructor">LicenseService</a></li>


        <li class="section-title">
          <a href="../../unself_license/LicenseService/LicenseService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_license/LicenseService/licenses">licenses</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_license/LicenseService/LicenseService#instance-methods">Methods</a></li>
          <li><a href="../../unself_license/LicenseService/getLicenseDetail">getLicenseDetail</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_license/LicenseService/LicenseService#operators">Operators</a></li>
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
