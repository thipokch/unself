import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UngraphService</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    



    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UngraphService" class="callable">
          <span class="name"><a href="../ungraph/UngraphService/UngraphService.constructor">UngraphService</a></span><span class="signature">(<span class="parameter" id="-param-repository">{<span>required</span> <span class="type-annotation">UngraphRepository</span> <span class="parameter-name">repository</span>}</span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="activeEdges" class="property">
  <span class="name"><a href="../ungraph/UngraphService/activeEdges">activeEdges</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="activeNodes" class="property">
  <span class="name"><a href="../ungraph/UngraphService/activeNodes">activeNodes</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

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
        <dt id="clear" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/clear">clear</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/FutureOr-class.html">FutureOr</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="dispose" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/dispose">dispose</a></span><span class="signature">(<wbr><span class="parameter" id="dispose-param-instanceSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">instanceSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="edge" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/edge">edge</a></span><span class="signature">(<wbr><span class="parameter" id="edge-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">EdgeService</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="edgeOfNode" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/edgeOfNode">edgeOfNode</a></span><span class="signature">(<wbr><span class="parameter" id="edgeOfNode-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="node" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/node">node</a></span><span class="signature">(<wbr><span class="parameter" id="node-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">NodeService</span>&gt;</span></span>
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

        <dt id="registerEdge" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/registerEdge">registerEdge</a></span><span class="signature">(<wbr><span class="parameter" id="registerEdge-param-spec"><span class="type-annotation">EdgeSpec</span> <span class="parameter-name">spec</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="registerNode" class="callable">
  <span class="name"><a href="../ungraph/UngraphService/registerNode">registerNode</a></span><span class="signature">(<wbr><span class="parameter" id="registerNode-param-spec"><span class="type-annotation">NodeSpec</span> <span class="parameter-name">spec</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">void</span>&gt;</span></span>
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
  <li><a href="../index">ungraph</a></li>
  <li><a href="../ungraph/ungraph">ungraph</a></li>
  <li class="self-crumb">UngraphService class</li>
</ol>


    <h5>ungraph library</h5>
    <ol>
      <li class="section-title"><a href="../ungraph/ungraph#classes">Classes</a></li>
        <li><a href="../ungraph/UngraphService">UngraphService</a></li>








</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../ungraph/UngraphService#constructors">Constructors</a></li>
          <li><a href="../ungraph/UngraphService/UngraphService.constructor">UngraphService</a></li>


        <li class="section-title">
          <a href="../ungraph/UngraphService#instance-properties">Properties</a>
        </li>
          <li><a href="../ungraph/UngraphService/activeEdges">activeEdges</a></li>
          <li><a href="../ungraph/UngraphService/activeNodes">activeNodes</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../ungraph/UngraphService#instance-methods">Methods</a></li>
          <li><a href="../ungraph/UngraphService/clear">clear</a></li>
          <li><a href="../ungraph/UngraphService/dispose">dispose</a></li>
          <li><a href="../ungraph/UngraphService/edge">edge</a></li>
          <li><a href="../ungraph/UngraphService/edgeOfNode">edgeOfNode</a></li>
          <li><a href="../ungraph/UngraphService/node">node</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../ungraph/UngraphService/registerEdge">registerEdge</a></li>
          <li><a href="../ungraph/UngraphService/registerNode">registerNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../ungraph/UngraphService#operators">Operators</a></li>
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
