import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">XPlatformFile</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile-class.html">PlatformFile</a></li>
      <li>XPlatformFile</li>
    </ul>
  </dd>

        
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="../unself_file/XPlatformFileExtension">XPlatformFileExtension</a></li>
        </ul></dd>

        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="XPlatformFile" class="callable">
          <span class="name"><a href="../unself_file/XPlatformFile/XPlatformFile.constructor">XPlatformFile</a></span><span class="signature">(<span class="parameter" id="-param-path">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">path</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-size"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">size</span>, </span><span class="parameter" id="-param-bytes"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a>?</span> <span class="parameter-name">bytes</span>, </span><span class="parameter" id="-param-readStream"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>&gt;</span>?</span> <span class="parameter-name">readStream</span>, </span><span class="parameter" id="-param-identifier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">identifier</span>, </span><span class="parameter" id="-param-objectUrl"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">objectUrl</span>}</span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="bytes" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/bytes.html">bytes</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a>?</span> 

</dt>
<dd class="inherited">
  Byte data for this file. Particularly useful if you want to manipulate its data
or easily upload to somewhere else.
<a href="https://github.com/miguelpruivo/flutter_file_picker/wiki/FAQ">Check here in the FAQ</a> an example on how to use it to upload on web.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="extension" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/extension.html">extension</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  File extension for this file.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="identifier" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/identifier.html">identifier</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  The platform identifier for the original file, refers to an <a href="https://developer.android.com/reference/android/net/Uri">Uri</a> on Android and
to a <a href="https://developer.apple.com/documentation/foundation/nsurl">NSURL</a> on iOS.
Is set to <code>null</code> on all other platforms since those are all already referencing the original file content.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="name" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/name.html">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  File name including its extension.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="path" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/path.html">path</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="readStream" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/readStream.html">readStream</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  File content as stream
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="size" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/size.html">size</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The file size in bytes. Defaults to <code>0</code> if the file size could not be
determined.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  The equality operator.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
    
    


  </div> <!-- /.main-content -->

  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">
    <header id="header-search-sidebar" class="hidden-l">
  <form class="search-sidebar" role="search">
    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">
  </form>
</header>

<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">
  <li><a href="../index">unself_file</a></li>
  <li><a href="../unself_file/unself_file">unself_file</a></li>
  <li class="self-crumb">XPlatformFile class</li>
</ol>


    <h5>unself_file library</h5>
    <ol>
      <li class="section-title"><a href="../unself_file/unself_file#classes">Classes</a></li>
        <li><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/CrossFileTestOverrides-class.html">CrossFileTestOverrides</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePicker-class.html">FilePicker</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerResult-class.html">FilePickerResult</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile-class.html">PlatformFile</a></li>
        <li><a href="https://pub.dev/documentation/cross_file/0.3.3+4/cross_file/XFile-class.html">XFile</a></li>
        <li><a href="../unself_file/XFilePicker">XFilePicker</a></li>
        <li><a href="../unself_file/XPlatformFile">XPlatformFile</a></li>
        <li><a href="../unself_file/XZipDecoder">XZipDecoder</a></li>

      <li class="section-title"><a href="../unself_file/unself_file#extensions">Extensions</a></li>
        <li><a href="../unself_file/XPlatformFileExtension">XPlatformFileExtension</a></li>


      <li class="section-title"><a href="../unself_file/unself_file#constants">Constants</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/defaultDialogTitle-constant.html">defaultDialogTitle</a></li>



      <li class="section-title"><a href="../unself_file/unself_file#enums">Enums</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FilePickerStatus.html">FilePickerStatus</a></li>
        <li><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/FileType.html">FileType</a></li>


</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_file/XPlatformFile#constructors">Constructors</a></li>
          <li><a href="../unself_file/XPlatformFile/XPlatformFile.constructor">XPlatformFile</a></li>


        <li class="section-title inherited">
          <a href="../unself_file/XPlatformFile#instance-properties">Properties</a>
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

        <li class="section-title inherited"><a href="../unself_file/XPlatformFile#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_file/XPlatformFile#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/file_picker/5.2.5/file_picker/PlatformFile/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
