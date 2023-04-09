import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">Account</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p><a href="../unself_model/Account">Account</a> is a user's and their acquaintances' identity on a <a href="../unself_model/App">App</a>.
Each person can have multiple <a href="../unself_model/Account">Account</a>s and on multiple <a href="../unself_model/App">App</a>s.</p>
</section>


    <section>
      <dl class="dl-horizontal">
        

        
  <dt>Implemented types</dt>
  <dd>
    <ul class="comma-separated clazz-relationships">
        <li><a href="../unself_model/Node">Node</a></li>
    </ul>
  </dd>
        



        
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
        <dt id="Account" class="callable">
          <span class="name"><a href="../unself_model/Account/Account.constructor">Account</a></span><span class="signature">(<span class="parameter" id="-param-id">{<span>@<a href="../unself_model/JsonString">JsonString</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">id</span>, </span><span class="parameter" id="-param-created"><span>@<a href="../unself_model/JsonDateTime">JsonDateTime</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">created</span>, </span><span class="parameter" id="-param-updated"><span>@<a href="../unself_model/JsonDateTime">JsonDateTime</a>()</span> <span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> <span class="parameter-name">updated</span>, </span><span class="parameter" id="-param-archiveId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">archiveId</span>, </span><span class="parameter" id="-param-name"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-appId"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">appId</span>, </span><span class="parameter" id="-param-isOwner"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">isOwner</span>, </span><span class="parameter" id="-param-emails"><span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>([])</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> <span class="parameter-name">emails</span>, </span><span class="parameter" id="-param-extra"><span>@<a href="../unself_model/JsonExtra">JsonExtra</a>()</span> <span>@<a href="https://pub.dev/documentation/freezed_annotation/2.2.0/freezed_annotation/Default-class.html">Default</a>({})</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">extra</span>}</span>)</span>
        </dt>
        <dd>
          <a href="../unself_model/Account">Account</a> is a user's and their acquaintances' identity on a <a href="../unself_model/App">App</a>.
Each person can have multiple <a href="../unself_model/Account">Account</a>s and on multiple <a href="../unself_model/App">App</a>s.
            <div class="constructor-modifier features">const</div>
            <div class="constructor-modifier features">factory</div>
        </dd>
        <dt id="Account.fromJson" class="callable">
          <span class="name"><a href="../unself_model/Account/Account.fromJson">Account.fromJson</a></span><span class="signature">(<span class="parameter" id="fromJson-param-data"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> <span class="parameter-name">data</span></span>)</span>
        </dt>
        <dd>
          Creates a <a href="../unself_model/Account">Account</a> from Json map
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="appId" class="property inherited">
  <span class="name"><a href="../unself_model/Account/appId">appId</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  <code>app</code> is the <a href="../unself_model/App">App</a> where the <a href="../unself_model/Account">Account</a> is registered.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="archiveId" class="property inherited">
  <span class="name"><a href="../unself_model/Account/archiveId">archiveId</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="copyWith" class="property inherited">
  <span class="name"><a href="../unself_model/Account/copyWith">copyWith</a></span>
  <span class="signature">→ \$AccountCopyWith<span class="signature">&lt;<wbr><span class="type-parameter"><a href="../unself_model/Account">Account</a></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="created" class="property inherited">
  <span class="name"><a href="../unself_model/Account/created">created</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="emails" class="property inherited">
  <span class="name"><a href="../unself_model/Account/emails">emails</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd class="inherited">
  <a href="../unself_model/Account/emails">emails</a> is the email used by the <a href="../unself_model/Account">Account</a> on the <a href="../unself_model/App">App</a>.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="extra" class="property inherited">
  <span class="name"><a href="../unself_model/Account/extra">extra</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span> 

</dt>
<dd class="inherited">
  <a href="../unself_model/Account/extra">extra</a> is a map of additional properties.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="id" class="property inherited">
  <span class="name"><a href="../unself_model/Account/id">id</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isOwner" class="property inherited">
  <span class="name"><a href="../unself_model/Account/isOwner">isOwner</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  <a href="../unself_model/Account/isOwner">isOwner</a> is true if the <a href="../unself_model/Account">Account</a> is the owner of the <a href="../unself_model/Archive">Archive</a>.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="labels" class="property">
  <span class="name"><a href="../unself_model/Account/labels">labels</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> 

</dt>
<dd>
  <a href="../unself_model/Account/labels">labels</a> is a list of labels assigned to the model.
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="name" class="property inherited">
  <span class="name"><a href="../unself_model/Account/name">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  <a href="../unself_model/Account/name">name</a> is the name used by the <a href="../unself_model/Account">Account</a> on the <a href="../unself_model/App">App</a>.
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

        <dt id="updated" class="property inherited">
  <span class="name"><a href="../unself_model/Account/updated">updated</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span> 

</dt>
<dd class="inherited">
  
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

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

        <dt id="toJson" class="callable inherited">
  <span class="name"><a href="../unself_model/Account/toJson">toJson</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>, <span class="type-parameter">dynamic</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  
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
  <li><a href="../index">unself_model</a></li>
  <li><a href="../unself_model/unself_model">unself_model</a></li>
  <li class="self-crumb">Account class</li>
</ol>


    <h5>unself_model library</h5>
    <ol>
      <li class="section-title"><a href="../unself_model/unself_model#classes">Classes</a></li>
        <li><a href="../unself_model/Account">Account</a></li>
        <li><a href="../unself_model/Activity">Activity</a></li>
        <li><a href="../unself_model/App">App</a></li>
        <li><a href="../unself_model/Archive">Archive</a></li>
        <li><a href="../unself_model/ArchiveData">ArchiveData</a></li>
        <li><a href="../unself_model/ArchiveSchema">ArchiveSchema</a></li>
        <li><a href="../unself_model/ArchiveSchemaPart">ArchiveSchemaPart</a></li>
        <li><a href="../unself_model/Base">Base</a></li>
        <li><a href="../unself_model/Collection">Collection</a></li>
        <li><a href="../unself_model/Edge">Edge</a></li>
        <li><a href="../unself_model/Entity">Entity</a></li>
        <li><a href="../unself_model/Field">Field</a></li>
        <li><a href="../unself_model/Flat">Flat</a></li>
        <li><a href="../unself_model/IJsonSchema">IJsonSchema</a></li>
        <li><a href="../unself_model/IJsonSchemaRef">IJsonSchemaRef</a></li>
        <li><a href="../unself_model/JsonDateTime">JsonDateTime</a></li>
        <li><a href="../unself_model/JsonExtra">JsonExtra</a></li>
        <li><a href="../unself_model/JsonPart">JsonPart</a></li>
        <li><a href="../unself_model/JsonRef">JsonRef</a></li>
        <li><a href="../unself_model/JsonRefList">JsonRefList</a></li>
        <li><a href="../unself_model/JsonRefValue">JsonRefValue</a></li>
        <li><a href="../unself_model/JsonSchema">JsonSchema</a></li>
        <li><a href="../unself_model/JsonString">JsonString</a></li>
        <li><a href="../unself_model/JsonVersion">JsonVersion</a></li>
        <li><a href="../unself_model/JsonVersionConstraint">JsonVersionConstraint</a></li>
        <li><a href="../unself_model/Mapping">Mapping</a></li>
        <li><a href="../unself_model/Node">Node</a></li>
        <li><a href="../unself_model/Ref">Ref</a></li>
        <li><a href="../unself_model/RefList">RefList</a></li>
        <li><a href="../unself_model/Settings">Settings</a></li>
        <li><a href="../unself_model/SlugFrom">SlugFrom</a></li>
        <li><a href="../unself_model/Struct">Struct</a></li>
        <li><a href="../unself_model/Topic">Topic</a></li>
        <li><a href="../unself_model/Union">Union</a></li>
        <li><a href="../unself_model/UnionList">UnionList</a></li>
        <li><a href="../unself_model/ValueFrom">ValueFrom</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/Version-class.html">Version</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionConstraint-class.html">VersionConstraint</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionRange-class.html">VersionRange</a></li>
        <li><a href="https://pub.dev/documentation/pub_semver/2.1.3/pub_semver/VersionUnion-class.html">VersionUnion</a></li>
        <li><a href="../unself_model/ZipJsonPart">ZipJsonPart</a></li>






      <li class="section-title"><a href="../unself_model/unself_model#enums">Enums</a></li>
        <li><a href="../unself_model/CollectionType">CollectionType</a></li>
        <li><a href="../unself_model/FieldType">FieldType</a></li>

      <li class="section-title"><a href="../unself_model/unself_model#typedefs">Typedefs</a></li>
        <li><a href="../unself_model/AccumulatorCallback">AccumulatorCallback</a></li>
        <li><a href="../unself_model/DoCallback">DoCallback</a></li>
        <li><a href="../unself_model/SchemaFinder">SchemaFinder</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_model/Account#constructors">Constructors</a></li>
          <li><a href="../unself_model/Account/Account.constructor">Account</a></li>
          <li><a href="../unself_model/Account/Account.fromJson">fromJson</a></li>


        <li class="section-title">
          <a href="../unself_model/Account#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="../unself_model/Account/appId">appId</a></li>
          <li class="inherited"><a href="../unself_model/Account/archiveId">archiveId</a></li>
          <li class="inherited"><a href="../unself_model/Account/copyWith">copyWith</a></li>
          <li class="inherited"><a href="../unself_model/Account/created">created</a></li>
          <li class="inherited"><a href="../unself_model/Account/emails">emails</a></li>
          <li class="inherited"><a href="../unself_model/Account/extra">extra</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="../unself_model/Account/id">id</a></li>
          <li class="inherited"><a href="../unself_model/Account/isOwner">isOwner</a></li>
          <li><a href="../unself_model/Account/labels">labels</a></li>
          <li class="inherited"><a href="../unself_model/Account/name">name</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="../unself_model/Account/updated">updated</a></li>

        <li class="section-title inherited"><a href="../unself_model/Account#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="../unself_model/Account/toJson">toJson</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>

        <li class="section-title inherited"><a href="../unself_model/Account#operators">Operators</a></li>
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
