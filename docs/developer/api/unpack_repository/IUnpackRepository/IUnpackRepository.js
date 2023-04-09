import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">IUnpackRepository</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p>An interface for UnpackRepository</p>
</section>


    <section>
      <dl class="dl-horizontal">
        

        
        

        <dt>Implementers</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="../unpack_repository/UnpackRepository">UnpackRepository</a></li>
        </ul></dd>


        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="IUnpackRepository" class="callable">
          <span class="name"><a href="../unpack_repository/IUnpackRepository/IUnpackRepository.constructor">IUnpackRepository</a></span><span class="signature">()</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isSpecsEmpty" class="property">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/isSpecsEmpty">isSpecsEmpty</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="isStatesEmpty" class="property">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/isStatesEmpty">isStatesEmpty</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="runtimeType" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> 

</dt>
<dd class="inherited">
  A representation of the runtime type of the object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="getAllSpecs" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/getAllSpecs">getAllSpecs</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="getAllStates" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/getAllStates">getAllStates</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackState</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="getSpecById" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/getSpecById">getSpecById</a></span><span class="signature">(<wbr><span class="parameter" id="getSpecById-param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="getStateById" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/getStateById">getStateById</a></span><span class="signature">(<wbr><span class="parameter" id="getStateById-param-id"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackState</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="noSuchMethod" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)
    <span class="returntype parameter">→ dynamic</span>
  </span>
  

</dt>
<dd class="inherited">
  Invoked when a non-existent method or property is accessed.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="putSpec" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/putSpec">putSpec</a></span><span class="signature">(<wbr><span class="parameter" id="putSpec-param-spec"><span class="type-annotation">UnpackSpec</span> <span class="parameter-name">spec</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="putState" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/putState">putState</a></span><span class="signature">(<wbr><span class="parameter" id="putState-param-state"><span class="type-annotation">UnpackState</span> <span class="parameter-name">state</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackState</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="watchAllSpecs" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/watchAllSpecs">watchAllSpecs</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackSpec</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="watchAllStates" class="callable">
  <span class="name"><a href="../unpack_repository/IUnpackRepository/watchAllStates">watchAllStates</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">UnpackState</span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
  <li><a href="../index">unpack_repository</a></li>
  <li><a href="../unpack_repository/unpack_repository">unpack_repository</a></li>
  <li class="self-crumb">IUnpackRepository abstract class</li>
</ol>


    <h5>unpack_repository library</h5>
    <ol>
      <li class="section-title"><a href="../unpack_repository/unpack_repository#classes">Classes</a></li>
        <li><a href="../unpack_repository/IUnpackRepository">IUnpackRepository</a></li>
        <li><a href="../unpack_repository/UnpackRepository">UnpackRepository</a></li>
        <li><a href="../unpack_repository/UnpackSpecMapper">UnpackSpecMapper</a></li>
        <li><a href="../unpack_repository/UnpackStateMapper">UnpackStateMapper</a></li>








</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unpack_repository/IUnpackRepository#constructors">Constructors</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/IUnpackRepository.constructor">IUnpackRepository</a></li>


        <li class="section-title">
          <a href="../unpack_repository/IUnpackRepository#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/isSpecsEmpty">isSpecsEmpty</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/isStatesEmpty">isStatesEmpty</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../unpack_repository/IUnpackRepository#instance-methods">Methods</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/getAllSpecs">getAllSpecs</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/getAllStates">getAllStates</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/getSpecById">getSpecById</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/getStateById">getStateById</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/putSpec">putSpec</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/putState">putState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/watchAllSpecs">watchAllSpecs</a></li>
          <li><a href="../unpack_repository/IUnpackRepository/watchAllStates">watchAllStates</a></li>

        <li class="section-title inherited"><a href="../unpack_repository/IUnpackRepository#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
