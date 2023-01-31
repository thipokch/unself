import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnpackAssistantEvent</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent">UnpackAssistantEvent</a> are the events that the <a href="../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc">UnpackAssistantBloc</a> can
respond to.</p>
</section>


    <section>
      <dl class="dl-horizontal">
        

        
        



        
  <dt>Annotations</dt>
  <dd>
    <ul class="annotation-list clazz-relationships">
        <li>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/freezed-constant.html">freezed</a></li>
    </ul>
  </dd>


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnpackAssistantEvent.selectApp" class="callable">
          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">UnpackAssistantEvent.selectApp</a></span><span class="signature">(<span class="parameter" id="selectApp-param-app">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span>}</span>)</span>
        </dt>
        <dd>
          User selected the app or service to import data from.
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="UnpackAssistantEvent.selectArchive" class="callable">
          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">UnpackAssistantEvent.selectArchive</a></span><span class="signature">(<span class="parameter" id="selectArchive-param-file">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-io/File-class.html">File</a></span> <span class="parameter-name">file</span>}</span>)</span>
        </dt>
        <dd>
          User selected the archive file to be imported
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="UnpackAssistantEvent.selectData" class="callable">
          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">UnpackAssistantEvent.selectData</a></span><span class="signature">(<span class="parameter" id="selectData-param-data">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span>}</span>)</span>
        </dt>
        <dd>
          User selected the data to be imported from the archive.
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="UnpackAssistantEvent.start" class="callable">
          <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">UnpackAssistantEvent.start</a></span><span class="signature">()</span>
        </dt>
        <dd>
          User starts the import process.
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
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

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="map" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="map-param-selectApp">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-selectArchive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-selectData"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>), </span><span class="parameter" id="map-param-start"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="mapOrNull" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="mapOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="mapOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeMap" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeMap-param-selectApp">{<span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectApp</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-selectArchive"><span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectArchive</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-selectData"><span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-value"><span class="type-annotation">_SelectData</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-start"><span class="type-annotation">TResult</span> <span class="parameter-name">start</span>(<span class="parameter" id="param-value"><span class="type-annotation">_Start</span> <span class="parameter-name">value</span></span>)?, </span><span class="parameter" id="maybeMap-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="maybeWhen" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="maybeWhen-param-selectApp">{<span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>)?, </span><span class="parameter" id="maybeWhen-param-selectArchive"><span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-file"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-io/File-class.html">File</a></span> <span class="parameter-name">file</span></span>)?, </span><span class="parameter" id="maybeWhen-param-selectData"><span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>)?, </span><span class="parameter" id="maybeWhen-param-start"><span class="type-annotation">TResult</span> <span class="parameter-name">start</span>()?, </span><span class="parameter" id="maybeWhen-param-orElse"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">orElse</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

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

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="when" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="when-param-selectApp">{<span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>), </span><span class="parameter" id="when-param-selectArchive"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-file"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-io/File-class.html">File</a></span> <span class="parameter-name">file</span></span>), </span><span class="parameter" id="when-param-selectData"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>), </span><span class="parameter" id="when-param-start"><span>required</span> <span class="type-annotation">TResult</span> <span class="parameter-name">start</span>()}</span>)
    <span class="returntype parameter">→ TResult</span>
  </span>
  

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="whenOrNull" class="callable inherited">
  <span class="name"><a href="../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></span><span class="signature">&lt;<wbr><span class="type-parameter">TResult extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a>?</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="whenOrNull-param-selectApp">{<span class="type-annotation">TResult?</span> <span class="parameter-name">selectApp</span>(<span class="parameter" id="param-app"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">app</span></span>)?, </span><span class="parameter" id="whenOrNull-param-selectArchive"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectArchive</span>(<span class="parameter" id="param-file"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-io/File-class.html">File</a></span> <span class="parameter-name">file</span></span>)?, </span><span class="parameter" id="whenOrNull-param-selectData"><span class="type-annotation">TResult?</span> <span class="parameter-name">selectData</span>(<span class="parameter" id="param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">data</span></span>)?, </span><span class="parameter" id="whenOrNull-param-start"><span class="type-annotation">TResult?</span> <span class="parameter-name">start</span>()?}</span>)
    <span class="returntype parameter">→ TResult?</span>
  </span>
  

</dt>
<dd class="inherited">
  
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
  <li><a href="../index">unself_unpack_assistant</a></li>
  <li><a href="../unself_unpack_assistant/unself_unpack_assistant">unself_unpack_assistant</a></li>
  <li class="self-crumb">UnpackAssistantEvent class</li>
</ol>


    <h5>unself_unpack_assistant library</h5>
    <ol>
      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#classes">Classes</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Bloc-class.html">Bloc</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocBase-class.html">BlocBase</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilder-class.html">BlocBuilder</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderBase-class.html">BlocBuilderBase</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocConsumer-class.html">BlocConsumer</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocEventSink-class.html">BlocEventSink</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListener-class.html">BlocListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerBase-class.html">BlocListenerBase</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocObserver-class.html">BlocObserver</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/BlocOverrides-class.html">BlocOverrides</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocProvider-class.html">BlocProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocSelector-class.html">BlocSelector</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Change-class.html">Change</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Closable-class.html">Closable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Cubit-class.html">Cubit</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emittable-class.html">Emittable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Emitter-class.html">Emitter</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/ErrorSink-class.html">ErrorSink</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocListener-class.html">MultiBlocListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiBlocProvider-class.html">MultiBlocProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/MultiRepositoryProvider-class.html">MultiRepositoryProvider</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/RepositoryProvider-class.html">RepositoryProvider</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamable-class.html">StateStreamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/StateStreamableSource-class.html">StateStreamableSource</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Streamable-class.html">Streamable</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/Transition-class.html">Transition</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantBloc/UnpackAssistantBloc">UnpackAssistantBloc</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent">UnpackAssistantEvent</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantPage/UnpackAssistantPage">UnpackAssistantPage</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantSliver/UnpackAssistantSliver">UnpackAssistantSliver</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantState/UnpackAssistantState">UnpackAssistantState</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantView/UnpackAssistantView">UnpackAssistantView</a></li>

      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#extensions">Extensions</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ReadContext.html">ReadContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/SelectContext.html">SelectContext</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/WatchContext.html">WatchContext</a></li>






      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#typedefs">Typedefs</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocBuilderCondition.html">BlocBuilderCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocListenerCondition.html">BlocListenerCondition</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetBuilder.html">BlocWidgetBuilder</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetListener.html">BlocWidgetListener</a></li>
        <li><a href="https://pub.dev/documentation/flutter_bloc/8.1.1/flutter_bloc/BlocWidgetSelector.html">BlocWidgetSelector</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventHandler.html">EventHandler</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventMapper.html">EventMapper</a></li>
        <li><a href="https://pub.dev/documentation/bloc/8.1.0/bloc/EventTransformer.html">EventTransformer</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantBuilder">UnpackAssistantBuilder</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantConsumer">UnpackAssistantConsumer</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantListener">UnpackAssistantListener</a></li>
        <li><a href="../unself_unpack_assistant/UnpackAssistantSelector">UnpackAssistantSelector</a></li>

      <li class="section-title"><a href="../unself_unpack_assistant/unself_unpack_assistant#exceptions">Exceptions</a></li>
        <li><a href="https://pub.dev/documentation/provider/6.0.5/provider/ProviderNotFoundException-class.html">ProviderNotFoundException</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#constructors">Constructors</a></li>
          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectApp">selectApp</a></li>
          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectArchive">selectArchive</a></li>
          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.selectData">selectData</a></li>
          <li><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent.start">start</a></li>


        <li class="section-title inherited">
          <a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#instance-methods">Methods</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/map">map</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/mapOrNull">mapOrNull</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeMap">maybeMap</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/maybeWhen">maybeWhen</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/when">when</a></li>
          <li class="inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/whenOrNull">whenOrNull</a></li>

        <li class="section-title inherited"><a href="../unself_unpack_assistant/UnpackAssistantEvent/UnpackAssistantEvent#operators">Operators</a></li>
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
