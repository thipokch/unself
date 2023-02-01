import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">addLicense</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">void</span>
<span class="name ">addLicense</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="addLicense-param-entry"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/LicenseEntry-class.html">LicenseEntry</a></span> <span class="parameter-name">entry</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void addLicense(LicenseEntry entry) {
  for (final String package in entry.packages) {
    _addPackage(package);

    packageLicenseBindings[package]!.add(licenses.length);
  }
  licenses.add(entry);
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
  <li><a href="../../index">unself_license</a></li>
  <li><a href="../../unself_license/unself_license">unself_license</a></li>
  <li><a href="../../unself_license/LicenseData">LicenseData</a></li>
  <li class="self-crumb">addLicense method</li>
</ol>


    <h5>LicenseData class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_license/LicenseData#constructors">Constructors</a></li>
          <li><a href="../../unself_license/LicenseData/LicenseData.constructor">LicenseData</a></li>


        <li class="section-title">
          <a href="../../unself_license/LicenseData#instance-properties">Properties</a>
        </li>
          <li><a href="../../unself_license/LicenseData/firstPackage">firstPackage</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../unself_license/LicenseData/licenses">licenses</a></li>
          <li><a href="../../unself_license/LicenseData/packageLicenseBindings">packageLicenseBindings</a></li>
          <li><a href="../../unself_license/LicenseData/packages">packages</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../unself_license/LicenseData#instance-methods">Methods</a></li>
          <li><a href="../../unself_license/LicenseData/addLicense">addLicense</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../../unself_license/LicenseData/sortPackages">sortPackages</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_license/LicenseData#operators">Operators</a></li>
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
