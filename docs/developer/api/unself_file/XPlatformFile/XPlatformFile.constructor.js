import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-constructor">XPlatformFile</span> constructor 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
</h1></div>

    <section class="multi-line-signature">
      
      <span class="name ">XPlatformFile</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="-param-path">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">path</span>, </span></li>
<li><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span></li>
<li><span class="parameter" id="-param-size"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">size</span>, </span></li>
<li><span class="parameter" id="-param-bytes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a>?</span> <span class="parameter-name">bytes</span>, </span></li>
<li><span class="parameter" id="-param-readStream"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">readStream</span>, </span></li>
<li><span class="parameter" id="-param-identifier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">identifier</span>, </span></li>
<li><span class="parameter" id="-param-objectUrl"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">objectUrl</span>}</span></li>
</ol>)
    </section>

    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">XPlatformFile({
  super.path,
  required super.name,
  required super.size,
  super.bytes,
  super.readStream,
  super.identifier,
  required String objectUrl,
}) : _unsafePath = objectUrl;</code></pre>
</section>


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../../index">unself_file</a></li>
  <li><a href="../../unself_file/unself_file">unself_file</a></li>
  <li><a href="../../unself_file/XPlatformFile">XPlatformFile</a></li>
  <li class="self-crumb">XPlatformFile constructor</li>
</ol>


    <h5>XPlatformFile class</h5>
    <ol>

        <li class="section-title"><a href="../../unself_file/XPlatformFile#constructors">Constructors</a></li>
          <li><a href="../../unself_file/XPlatformFile/XPlatformFile.constructor">XPlatformFile</a></li>


        <li class="section-title inherited">
          <a href="../../unself_file/XPlatformFile#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/bytes.html">bytes</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/extension.html">extension</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/identifier.html">identifier</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/name.html">name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/path.html">path</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/readStream.html">readStream</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/size.html">size</a></li>

        <li class="section-title inherited"><a href="../../unself_file/XPlatformFile#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../../unself_file/XPlatformFile#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
