import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">sortPackages</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype">void</span>
<span class="name ">sortPackages</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="sortPackages-param-compare">[<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">compare</span>(<ol class="parameter-list"><li><span class="parameter" id="param-a"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">a</span>, </span></li>
<li><span class="parameter" id="param-b"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">b</span></span></li>
</ol>
)?]</span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void sortPackages([int Function(String a, String b)? compare]) {
  packages.sort(compare ??
      (String a, String b) {
        if (a == firstPackage) {
          return -1;
        }
        if (b == firstPackage) {
          return 1;
        }

        return a.toLowerCase().compareTo(b.toLowerCase());
      });
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
  <li><a href="../../index">un_license</a></li>
  <li><a href="../../un_license/un_license">un_license</a></li>
  <li><a href="../../un_license/LicenseData">LicenseData</a></li>
  <li class="self-crumb">sortPackages method</li>
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
