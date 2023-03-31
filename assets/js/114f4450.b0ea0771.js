"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95029],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var d=n.createContext({}),o=function(a){var e=n.useContext(d),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=o(a.components);return n.createElement(d.Provider,{value:e},a.children)},p="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,d=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),p=o(t),f=s,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||l;return t?n.createElement(h,r(r({ref:e},c),{},{components:t})):n.createElement(h,r({ref:e},c))}));function h(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,r=new Array(l);r[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=a,i[p]="string"==typeof a?a:s,r[1]=i;for(var o=2;o<l;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37098:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),s=t(67294),l=t(3905);function r(){return s.createElement("div",{dangerouslySetInnerHTML:{__html:'<main>\n\n  <div id="dartdoc-main-content" class="main-content">\n      <div>\n<h1><span class="kind-class">Field</span> class \n    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>\n \n</h1></div>\n\n    \n\n\n    <section>\n      <dl class="dl-horizontal">\n        \n  <dt>Inheritance</dt>\n  <dd>\n    <ul class="gt-separated dark clazz-relationships">\n      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>\n        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/HasResultSet-class.html">HasResultSet</a></li>\n        <li><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a></li>\n      <li>Field</li>\n    </ul>\n  </dd>\n\n        \n        \n\n        <dt>Implementers</dt>\n        <dd><ul class="comma-separated clazz-relationships">\n          <li><a href="../unself_local_database/$FieldTable">$FieldTable</a></li>\n        </ul></dd>\n\n\n        \n\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor" id="constructors">\n    <h2>Constructors</h2>\n\n    <dl class="constructor-summary-list">\n        <dt id="Field" class="callable">\n          <span class="name"><a href="../unself_local_database/Field/Field.constructor">Field</a></span><span class="signature">()</span>\n        </dt>\n        <dd>\n          \n        </dd>\n    </dl>\n  </section>\n\n    <section class="summary offset-anchor" id="instance-properties">\n      <h2>Properties</h2>\n\n      <dl class="properties">\n        <dt id="collectionId" class="property">\n  <span class="name"><a href="../unself_local_database/Field/collectionId">collectionId</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="created" class="property">\n  <span class="name"><a href="../unself_local_database/Field/created">created</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/DateTimeColumn.html">DateTimeColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="customConstraints" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span> \n\n</dt>\n<dd class="inherited">\n  Custom table constraints that should be added to the table.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="dontWriteConstraints" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Drift will write some table constraints automatically, for instance when\nyou override <a href="../unself_local_database/Field/primaryKey">primaryKey</a>. You can turn this behavior off if you want to.\nThis is intended to be used by generated code only.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="extra" class="property">\n  <span class="name"><a href="../unself_local_database/Field/extra">extra</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="hashCode" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> \n\n</dt>\n<dd class="inherited">\n  The hash code for this object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="id" class="property">\n  <span class="name"><a href="../unself_local_database/Field/id">id</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="isStrict" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Whether this table is <code>STRICT</code>.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="name" class="property">\n  <span class="name"><a href="../unself_local_database/Field/name">name</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="primaryKey" class="property">\n  <span class="name"><a href="../unself_local_database/Field/primaryKey">primaryKey</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span> \n\n</dt>\n<dd>\n  Override this to specify custom primary keys:\n  <div class="features"><span class="feature">read-only</span><span class="feature">override</span></div>\n\n</dd>\n\n        <dt id="required" class="property">\n  <span class="name"><a href="../unself_local_database/Field/required">required</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="runtimeType" class="property inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/Type-class.html">Type</a></span> \n\n</dt>\n<dd class="inherited">\n  A representation of the runtime type of the object.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="system" class="property">\n  <span class="name"><a href="../unself_local_database/Field/system">system</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="tableName" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> \n\n</dt>\n<dd class="inherited">\n  The sql table name to be used. By default, drift will use the snake_case\nrepresentation of your class name as the sql table name. For instance, a\n<a href="https://pub.dev/documentation/drift/2.4.2/drift/Table-class.html">Table</a> class named <code>LocalSettings</code> will be called <code>local_settings</code> by\ndefault.\nYou can change that behavior by overriding this method to use a custom\nname. Please note that you must directly return a string literal by using\na getter. For instance <code>@override String get tableName =&gt; \'my_table\';</code> is\nvalid, whereas <code>@override final String tableName = \'my_table\';</code> or\n<code>@override String get tableName =&gt; createMyTableName();</code> is not.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="type" class="property">\n  <span class="name"><a href="../unself_local_database/Field/type">type</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/TextColumn.html">TextColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="unique" class="property">\n  <span class="name"><a href="../unself_local_database/Field/unique">unique</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/BoolColumn.html">BoolColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="uniqueKeys" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Set-class.html">Set</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span>&gt;</span></span>&gt;</span>?</span> \n\n</dt>\n<dd class="inherited">\n  Unique constraints in this table.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="updated" class="property">\n  <span class="name"><a href="../unself_local_database/Field/updated">updated</a></span>\n  <span class="signature">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/DateTimeColumn.html">DateTimeColumn</a></span> \n\n</dt>\n<dd>\n  \n  <div class="features"><span class="feature">read-only</span></div>\n\n</dd>\n\n        <dt id="withoutRowId" class="property inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></span>\n  <span class="signature">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> \n\n</dt>\n<dd class="inherited">\n  Whether to append a <code>WITHOUT ROWID</code> clause in the <code>CREATE TABLE</code>\nstatement. This is intended to be used by generated code only.\n  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>\n\n</dd>\n\n      </dl>\n    </section>\n\n    \n  <section class="summary offset-anchor inherited" id="instance-methods">\n    <h2>Methods</h2>\n    <dl class="callables">\n        <dt id="blob" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-typed_data/Uint8List-class.html">Uint8List</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds arbitrary\ndata blobs, stored as an <code>Uint8List</code>. Example:\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="boolean" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds bools.\nExample (inside the body of a table class):\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="dateTime" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html">DateTime</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds date and\ntime.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="int64" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/BigInt-class.html">BigInt</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds a 64-big\ninteger as a <code>BigInt</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="integer" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds integers.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="intEnum" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></span>&gt;</span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Creates a column to store an <code>enum</code> class <code>T</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="noSuchMethod" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></span><span class="signature">(<wbr><span class="parameter" id="noSuchMethod-param-invocation"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Invocation-class.html">Invocation</a></span> <span class="parameter-name">invocation</span></span>)\n    <span class="returntype parameter">\u2192 dynamic</span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Invoked when a non-existent method or property is accessed.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="real" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds floating\npoint numbers. Example\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="text" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Use this as the body of a getter to declare a column that holds strings.\nExample (inside the body of a table class):\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="textEnum" class="callable inherited">\n  <span class="name"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Enum-class.html">Enum</a></span>&gt;</span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://pub.dev/documentation/drift/2.4.2/drift/ColumnBuilder-class.html">ColumnBuilder</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>&gt;</span></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  Creates a column to store an <code>enum</code> class <code>T</code>.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n        <dt id="toString" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></span><span class="signature">(<wbr>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  A string representation of this object.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n  <section class="summary offset-anchor inherited" id="operators">\n    <h2>Operators</h2>\n    <dl class="callables">\n        <dt id="operator ==" class="callable inherited">\n  <span class="name"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)\n    <span class="returntype parameter">\u2192 <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>\n  </span>\n  \n\n</dt>\n<dd class="inherited">\n  The equality operator.\n  <div class="features"><span class="feature">inherited</span></div>\n\n</dd>\n\n    </dl>\n  </section>\n    \n    \n    \n\n\n  </div> \x3c!-- /.main-content --\x3e\n\n  <div id="dartdoc-sidebar-left" class="sidebar sidebar-offcanvas-left">\n    <header id="header-search-sidebar" class="hidden-l">\n  <form class="search-sidebar" role="search">\n    <input type="text" id="search-sidebar" autocomplete="off" disabled="" class="form-control typeahead" placeholder="Loading search...">\n  </form>\n</header>\n\n<ol class="breadcrumbs gt-separated dark hidden-l" id="sidebar-nav">\n  <li><a href="../index">unself_local_database</a></li>\n  <li><a href="../unself_local_database/unself_local_database">unself_local_database</a></li>\n  <li class="self-crumb">Field class</li>\n</ol>\n\n\n    <h5>unself_local_database library</h5>\n    <ol>\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#classes">Classes</a></li>\n        <li><a href="../unself_local_database/$CollectionTable">$CollectionTable</a></li>\n        <li><a href="../unself_local_database/$FieldTable">$FieldTable</a></li>\n        <li><a href="../unself_local_database/Collection">Collection</a></li>\n        <li><a href="../unself_local_database/CollectionCompanion">CollectionCompanion</a></li>\n        <li><a href="../unself_local_database/CollectionDao">CollectionDao</a></li>\n        <li><a href="../unself_local_database/CollectionData">CollectionData</a></li>\n        <li><a href="../unself_local_database/CollectionOrm">CollectionOrm</a></li>\n        <li><a href="../unself_local_database/DocumentDao">DocumentDao</a></li>\n        <li><a href="../unself_local_database/Field">Field</a></li>\n        <li><a href="../unself_local_database/FieldCompanion">FieldCompanion</a></li>\n        <li><a href="../unself_local_database/FieldData">FieldData</a></li>\n        <li><a href="../unself_local_database/ListConverter">ListConverter</a></li>\n        <li><a href="../unself_local_database/LocalDatabase">LocalDatabase</a></li>\n        <li><a href="../unself_local_database/MapConverter">MapConverter</a></li>\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#extensions">Extensions</a></li>\n        <li><a href="../unself_local_database/CollectionFromDomain">CollectionFromDomain</a></li>\n        <li><a href="../unself_local_database/CollectionToOrm">CollectionToOrm</a></li>\n        <li><a href="../unself_local_database/FieldFromDomain">FieldFromDomain</a></li>\n        <li><a href="../unself_local_database/FieldToOrm">FieldToOrm</a></li>\n\n\n\n\n      <li class="section-title"><a href="../unself_local_database/unself_local_database#functions">Functions</a></li>\n        <li><a href="../unself_local_database/connect">connect</a></li>\n\n\n\n</ol>\n\n  </div>\n\n  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">\n    <ol>\n\n        <li class="section-title"><a href="../unself_local_database/Field#constructors">Constructors</a></li>\n          <li><a href="../unself_local_database/Field/Field.constructor">Field</a></li>\n\n\n        <li class="section-title">\n          <a href="../unself_local_database/Field#instance-properties">Properties</a>\n        </li>\n          <li><a href="../unself_local_database/Field/collectionId">collectionId</a></li>\n          <li><a href="../unself_local_database/Field/created">created</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/customConstraints.html">customConstraints</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dontWriteConstraints.html">dontWriteConstraints</a></li>\n          <li><a href="../unself_local_database/Field/extra">extra</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/hashCode.html">hashCode</a></li>\n          <li><a href="../unself_local_database/Field/id">id</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/isStrict.html">isStrict</a></li>\n          <li><a href="../unself_local_database/Field/name">name</a></li>\n          <li><a href="../unself_local_database/Field/primaryKey">primaryKey</a></li>\n          <li><a href="../unself_local_database/Field/required">required</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>\n          <li><a href="../unself_local_database/Field/system">system</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/tableName.html">tableName</a></li>\n          <li><a href="../unself_local_database/Field/type">type</a></li>\n          <li><a href="../unself_local_database/Field/unique">unique</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/uniqueKeys.html">uniqueKeys</a></li>\n          <li><a href="../unself_local_database/Field/updated">updated</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/withoutRowId.html">withoutRowId</a></li>\n\n        <li class="section-title inherited"><a href="../unself_local_database/Field#instance-methods">Methods</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/blob.html">blob</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/boolean.html">boolean</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/dateTime.html">dateTime</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/int64.html">int64</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/integer.html">integer</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/intEnum.html">intEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/real.html">real</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/text.html">text</a></li>\n          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.4.2/drift/Table/textEnum.html">textEnum</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>\n\n        <li class="section-title inherited"><a href="../unself_local_database/Field#operators">Operators</a></li>\n          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html">operator ==</a></li>\n\n\n\n\n</ol>\n\n  </div>\x3c!--/.sidebar-offcanvas--\x3e\n\n</main>'}})}const i={title:"Field class",sidebar_label:"Field",hide_title:!0},d=void 0,o={unversionedId:"api/unself_local_database/Field/Field",id:"api/unself_local_database/Field/Field",title:"Field class",description:"",source:"@site/developer/api/unself_local_database/Field/Field.mdx",sourceDirName:"api/unself_local_database/Field",slug:"/api/unself_local_database/Field/",permalink:"/developer/api/unself_local_database/Field/",draft:!1,editUrl:"https://github.com/thipokch/unself/tree/master/page/doc/developer/api/unself_local_database/Field/Field.mdx",tags:[],version:"current",lastUpdatedAt:1680247563,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Field class",sidebar_label:"Field",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"saveRecord",permalink:"/developer/api/unself_local_database/DocumentDao/saveRecord"},next:{title:"Field constructor",permalink:"/developer/api/unself_local_database/Field/Field.constructor"}},c={},p=[],u={toc:p};function f(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(r,{mdxType:"RawHtml"}))}f.isMDXComponent=!0}}]);