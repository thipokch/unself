import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UngraphRepository</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="../ungraph_repository/IUngraphRepository">IUngraphRepository</a></li>
    </ul>
  </dd>
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UngraphRepository" class="callable">
          <span class="name"><a href="../ungraph_repository/UngraphRepository/UngraphRepository.constructor">UngraphRepository</a></span><span class="signature">(<span class="parameter" id="-param-_db"><span class="type-annotation">UngraphDatabase</span> <span class="parameter-name">_db</span></span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
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
        <dt id="getEdgeOfNode" class="callable">
  <span class="name"><a href="../ungraph_repository/UngraphRepository/getEdgeOfNode">getEdgeOfNode</a></span><span class="signature">(<wbr><span class="parameter" id="getEdgeOfNode-param-slugs"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">slugs</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="initEdge" class="callable">
  <span class="name"><a href="../ungraph_repository/UngraphRepository/initEdge">initEdge</a></span><span class="signature">(<wbr><span class="parameter" id="initEdge-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_repository/EdgeRepository">EdgeRepository</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="initNode" class="callable">
  <span class="name"><a href="../ungraph_repository/UngraphRepository/initNode">initNode</a></span><span class="signature">(<wbr><span class="parameter" id="initNode-param-specSlug"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">specSlug</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="../ungraph_repository/NodeRepository">NodeRepository</a></span>&gt;</span></span>
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
  <span class="name"><a href="../ungraph_repository/UngraphRepository/registerEdge">registerEdge</a></span><span class="signature">(<wbr><span class="parameter" id="registerEdge-param-spec"><span class="type-annotation">EdgeSpec</span> <span class="parameter-name">spec</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">EdgeSpecData</span>&gt;</span></span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="registerNode" class="callable">
  <span class="name"><a href="../ungraph_repository/UngraphRepository/registerNode">registerNode</a></span><span class="signature">(<wbr><span class="parameter" id="registerNode-param-spec"><span class="type-annotation">NodeSpec</span> <span class="parameter-name">spec</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Future-class.html">Future</a><span class="signature">&lt;<wbr><span class="type-parameter">NodeSpecData</span>&gt;</span></span>
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

        <dt id="watchTables" class="callable">
  <span class="name"><a href="../ungraph_repository/UngraphRepository/watchTables">watchTables</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-async/Stream-class.html">Stream</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>&gt;</span></span>
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
  <li><a href="../index">ungraph_repository</a></li>
  <li><a href="../ungraph_repository/ungraph_repository">ungraph_repository</a></li>
  <li class="self-crumb">UngraphRepository class</li>
</ol>


    <h5>ungraph_repository library</h5>
    <ol>
      <li class="section-title"><a href="../ungraph_repository/ungraph_repository#classes">Classes</a></li>
        <li><a href="../ungraph_repository/EdgeMapper">EdgeMapper</a></li>
        <li><a href="../ungraph_repository/EdgeRepository">EdgeRepository</a></li>
        <li><a href="../ungraph_repository/EdgeSpecMapper">EdgeSpecMapper</a></li>
        <li><a href="../ungraph_repository/IUngraphRepository">IUngraphRepository</a></li>
        <li><a href="../ungraph_repository/NodeMapper">NodeMapper</a></li>
        <li><a href="../ungraph_repository/NodeRepository">NodeRepository</a></li>
        <li><a href="../ungraph_repository/NodeSpecMapper">NodeSpecMapper</a></li>
        <li><a href="../ungraph_repository/PropSpecMapper">PropSpecMapper</a></li>
        <li><a href="../ungraph_repository/UngraphRepository">UngraphRepository</a></li>








</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../ungraph_repository/UngraphRepository#constructors">Constructors</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/UngraphRepository.constructor">UngraphRepository</a></li>


        <li class="section-title inherited">
          <a href="../ungraph_repository/UngraphRepository#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../ungraph_repository/UngraphRepository#instance-methods">Methods</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/getEdgeOfNode">getEdgeOfNode</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/initEdge">initEdge</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/initNode">initNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/registerEdge">registerEdge</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/registerNode">registerNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li><a href="../ungraph_repository/UngraphRepository/watchTables">watchTables</a></li>

        <li class="section-title inherited"><a href="../ungraph_repository/UngraphRepository#operators">Operators</a></li>
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
