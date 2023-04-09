import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-method">getLicenseDetail</span> method 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      

<span class="returntype"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/LicenseParagraph-class.html">LicenseParagraph</a></span>&gt;</span></span>&gt;</span></span>
<span class="name ">getLicenseDetail</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="getLicenseDetail-param-packageName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">packageName</span></span></li>
</ol>)

      

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">List&lt;List&lt;LicenseParagraph&gt;&gt; getLicenseDetail(String packageName) {
  if (_licenses == null) throw Exception('LicenseData is not loaded yet.');

  // if (_licensesDetail.containsKey(packageName)) {
  //   return _licensesDetail[packageName]!;
  // }

  final List&lt;int&gt; bindings =
      _licenses!.packageLicenseBindings[packageName] ?? [];
  final List&lt;LicenseEntry&gt; licenseEntries =
      bindings.map((int i) =&gt; _licenses!.licenses[i]).toList(growable: false);

  List&lt;List&lt;LicenseParagraph&gt;&gt; licenseDetail = List.empty(growable: true);

  for (final LicenseEntry license in licenseEntries) {
    licenseDetail.add(
      license.paragraphs.toList(),
    );
  }

  // _licensesDetail[packageName] = licenseDetail;

  return licenseDetail;
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
  <li><a href="../../un_license/LicenseService">LicenseService</a></li>
  <li class="self-crumb">getLicenseDetail method</li>
</ol>


    <h5>LicenseService class</h5>
    <ol>

        <li class="section-title"><a href="../../un_license/LicenseService#constructors">Constructors</a></li>
          <li><a href="../../un_license/LicenseService/LicenseService.constructor">LicenseService</a></li>


        <li class="section-title">
          <a href="../../un_license/LicenseService#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../../un_license/LicenseService/licenses">licenses</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../../un_license/LicenseService#instance-methods">Methods</a></li>
          <li><a href="../../un_license/LicenseService/getLicenseDetail">getLicenseDetail</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../un_license/LicenseService#operators">Operators</a></li>
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
