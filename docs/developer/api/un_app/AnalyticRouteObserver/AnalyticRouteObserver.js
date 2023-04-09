import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">AnalyticRouteObserver</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver-class.html">NavigatorObserver</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/RouteObserver-class.html">RouteObserver</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span>&gt;</span></li>
      <li>AnalyticRouteObserver</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="AnalyticRouteObserver" class="callable">
          <span class="name"><a href="../un_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></span><span class="signature">(<span class="parameter" id="-param-analytic">{<span>required</span> <span class="type-annotation">AnalyticService</span> <span class="parameter-name">analytic</span>, </span><span class="parameter" id="-param-nameExtractor"><span class="type-annotation"><a href="../un_app/ScreenNameExtractor">ScreenNameExtractor</a></span> <span class="parameter-name">nameExtractor</span> = <span class="default-value">defaultNameExtractor</span>, </span><span class="parameter" id="-param-routeFilter"><span class="type-annotation"><a href="../un_app/RouteFilter">RouteFilter</a></span> <span class="parameter-name">routeFilter</span> = <span class="default-value">defaultRouteFilter</span>, </span><span class="parameter" id="-param-onError"><span class="type-annotation">dynamic</span> <span class="parameter-name">onError</span>(<span class="parameter" id="param-error"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/services/PlatformException-class.html">PlatformException</a></span> <span class="parameter-name">error</span></span>)?}</span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="analytic" class="property">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/analytic">analytic</a></span>
  <span class="signature">→ AnalyticService</span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="nameExtractor" class="property">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></span>
  <span class="signature">→ <a href="../un_app/ScreenNameExtractor">ScreenNameExtractor</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="navigator" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/widgets/NavigatorState-class.html">NavigatorState</a>?</span> 

</dt>
<dd class="inherited">
  The navigator that the observer is observing, if any.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="routeFilter" class="property">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/routeFilter">routeFilter</a></span>
  <span class="signature">→ <a href="../un_app/RouteFilter">RouteFilter</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

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
        <dt id="debugObservingRoute" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></span><span class="signature">(<wbr><span class="parameter" id="debugObservingRoute-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span> <span class="parameter-name">route</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Whether this observer is managing changes for the specified route.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="didPop" class="callable">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/didPop">didPop</a></span><span class="signature">(<wbr><span class="parameter" id="didPop-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didPop-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> popped <code>route</code>.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="didPush" class="callable">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/didPush">didPush</a></span><span class="signature">(<wbr><span class="parameter" id="didPush-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didPush-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> pushed <code>route</code>.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="didRemove" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></span><span class="signature">(<wbr><span class="parameter" id="didRemove-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didRemove-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> removed <code>route</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="didReplace" class="callable">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/didReplace">didReplace</a></span><span class="signature">(<wbr><span class="parameter" id="didReplace-param-newRoute">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">newRoute</span>, </span><span class="parameter" id="didReplace-param-oldRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">oldRoute</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd>
  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a> replaced <code>oldRoute</code> with <code>newRoute</code>.
  <div class="features"><span class="feature">override</span></div>

</dd>

        <dt id="didStartUserGesture" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></span><span class="signature">(<wbr><span class="parameter" id="didStartUserGesture-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a></span> <span class="parameter-name">route</span>, </span><span class="parameter" id="didStartUserGesture-param-previousRoute"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">previousRoute</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  The <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a>'s routes are being moved by a user gesture.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="didStopUserGesture" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  User gesture is no longer controlling the <a href="https://api.flutter.dev/flutter/widgets/Navigator-class.html">Navigator</a>.
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

        <dt id="subscribe" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></span><span class="signature">(<wbr><span class="parameter" id="subscribe-param-routeAware"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteAware-class.html">RouteAware</a></span> <span class="parameter-name">routeAware</span>, </span><span class="parameter" id="subscribe-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/ModalRoute-class.html">ModalRoute</a></span> <span class="parameter-name">route</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Subscribe <code>routeAware</code> to be informed about changes to <code>route</code>.
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

        <dt id="unsubscribe" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></span><span class="signature">(<wbr><span class="parameter" id="unsubscribe-param-routeAware"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteAware-class.html">RouteAware</a></span> <span class="parameter-name">routeAware</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Unsubscribe <code>routeAware</code>.
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
    
    
  <section class="summary offset-anchor" id="static-methods">
    <h2>Static Methods</h2>
    <dl class="callables">
        <dt id="defaultNameExtractor" class="callable">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></span><span class="signature">(<wbr><span class="parameter" id="defaultNameExtractor-param-settings"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/RouteSettings-class.html">RouteSettings</a></span> <span class="parameter-name">settings</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span>
  </span>
  

</dt>
<dd>
  
  

</dd>

        <dt id="defaultRouteFilter" class="callable">
  <span class="name"><a href="../un_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></span><span class="signature">(<wbr><span class="parameter" id="defaultRouteFilter-param-route"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Route-class.html">Route</a>?</span> <span class="parameter-name">route</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd>
  
  

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
  <li><a href="../index">un_app</a></li>
  <li><a href="../un_app/un_app">un_app</a></li>
  <li class="self-crumb">AnalyticRouteObserver class</li>
</ol>


    <h5>un_app library</h5>
    <ol>
      <li class="section-title"><a href="../un_app/un_app#classes">Classes</a></li>
        <li><a href="../un_app/AnalyticRouteObserver">AnalyticRouteObserver</a></li>
        <li><a href="../un_app/App">App</a></li>
        <li><a href="../un_app/AppRouter">AppRouter</a></li>
        <li><a href="../un_app/AppShell">AppShell</a></li>
        <li><a href="../un_app/LicenseDetailRoute">LicenseDetailRoute</a></li>
        <li><a href="../un_app/LicenseListRoute">LicenseListRoute</a></li>
        <li><a href="../un_app/SettingsAppearanceRoute">SettingsAppearanceRoute</a></li>
        <li><a href="../un_app/SettingsDataRoute">SettingsDataRoute</a></li>
        <li><a href="../un_app/SettingsListRoute">SettingsListRoute</a></li>
        <li><a href="../un_app/SettingsRoutes">SettingsRoutes</a></li>
        <li><a href="../un_app/UnpackAssistantRoute">UnpackAssistantRoute</a></li>
        <li><a href="../un_app/UnpackRoutes">UnpackRoutes</a></li>

      <li class="section-title"><a href="../un_app/un_app#extensions">Extensions</a></li>
        <li><a href="../un_app/\$LicenseDetailRouteExtension">\$LicenseDetailRouteExtension</a></li>
        <li><a href="../un_app/\$LicenseListRouteExtension">\$LicenseListRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsAppearanceRouteExtension">\$SettingsAppearanceRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsDataRouteExtension">\$SettingsDataRouteExtension</a></li>
        <li><a href="../un_app/\$SettingsRoutesExtension">\$SettingsRoutesExtension</a></li>
        <li><a href="../un_app/\$UnpackRoutesExtension">\$UnpackRoutesExtension</a></li>



      <li class="section-title"><a href="../un_app/un_app#properties">Properties</a></li>
        <li><a href="../un_app/\$appRoutes">\$appRoutes</a></li>
        <li><a href="../un_app/\$settingsRoutes">\$settingsRoutes</a></li>
        <li><a href="../un_app/\$unpackRoutes">\$unpackRoutes</a></li>



      <li class="section-title"><a href="../un_app/un_app#typedefs">Typedefs</a></li>
        <li><a href="../un_app/RouteFilter">RouteFilter</a></li>
        <li><a href="../un_app/ScreenNameExtractor">ScreenNameExtractor</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../un_app/AnalyticRouteObserver#constructors">Constructors</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/AnalyticRouteObserver.constructor">AnalyticRouteObserver</a></li>


        <li class="section-title">
          <a href="../un_app/AnalyticRouteObserver#instance-properties">Properties</a>
        </li>
          <li><a href="../un_app/AnalyticRouteObserver/analytic">analytic</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/nameExtractor">nameExtractor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/navigator.html">navigator</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/routeFilter">routeFilter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>

        <li class="section-title"><a href="../un_app/AnalyticRouteObserver#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/debugObservingRoute.html">debugObservingRoute</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/didPop">didPop</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/didPush">didPush</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didRemove.html">didRemove</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/didReplace">didReplace</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStartUserGesture.html">didStartUserGesture</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/NavigatorObserver/didStopUserGesture.html">didStopUserGesture</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/subscribe.html">subscribe</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/RouteObserver/unsubscribe.html">unsubscribe</a></li>

        <li class="section-title inherited"><a href="../un_app/AnalyticRouteObserver#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../un_app/AnalyticRouteObserver#static-methods">Static methods</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/defaultNameExtractor">defaultNameExtractor</a></li>
          <li><a href="../un_app/AnalyticRouteObserver/defaultRouteFilter">defaultRouteFilter</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
