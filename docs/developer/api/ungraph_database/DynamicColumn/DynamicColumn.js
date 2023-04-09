import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">DynamicColumn&lt;<wbr><span class="type-parameter">T extends Object</span>&gt;</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column-class.html">Column</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn-class.html">GeneratedColumn</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></li>
      <li>DynamicColumn</li>
    </ul>
  </dd>

        
        


        <dt>Available Extensions</dt>
        <dd><ul class="comma-separated clazz-relationships">
          <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/ArithmeticAggregates.html">ArithmeticAggregates</a></li>
          <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/ArithmeticExpr.html">ArithmeticExpr</a></li>
          <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/BaseAggregate.html">BaseAggregate</a></li>
          <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/ComparableExpr.html">ComparableExpr</a></li>
        </ul></dd>

        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="DynamicColumn" class="callable">
          <span class="name"><a href="../ungraph_database/DynamicColumn/DynamicColumn.constructor">DynamicColumn</a></span><span class="signature">(<span class="parameter" id="-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="-param-tableName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">tableName</span>, </span><span class="parameter" id="-param-nullable"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullable</span></span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor inherited" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="\$customConstraints" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$customConstraints.html">\$customConstraints</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  Custom constraints that have been specified for this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="\$name" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$name.html">\$name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  The sql name of this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="\$nullable" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$nullable.html">\$nullable</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether null values are allowed for this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="additionalChecks" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/additionalChecks.html">additionalChecks</a></span>
  <span class="signature">→ (<a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationResult-class.html">VerificationResult</a> Function<span class="signature">(<span class="parameter" id="param-"><span class="type-annotation">T?</span>, </span><span class="parameter" id="param-"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationMeta-class.html">VerificationMeta</a></span></span>)</span>?)</span> 

</dt>
<dd class="inherited">
  Additional checks performed on values before inserts or updates.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="check" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/check.html">check</a></span>
  <span class="signature">→ (<a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span> Function<span class="signature">()</span>?)</span> 

</dt>
<dd class="inherited">
  A <code>CHECK</code> column constraint present on this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="clientDefault" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/clientDefault.html">clientDefault</a></span>
  <span class="signature">→ (T? Function<span class="signature">()</span>?)</span> 

</dt>
<dd class="inherited">
  A function that yields a default column for inserts if no value has been
set. This is different to <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/defaultValue.html">defaultValue</a> since the function is written in
Dart, not SQL. It's a compile-time error to declare columns where both
<a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/defaultValue.html">defaultValue</a> and <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/clientDefault.html">clientDefault</a> are non-null.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="defaultValue" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/defaultValue.html">defaultValue</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  The default expression to be used during inserts when no value has been
specified. Can be null if no default value is set.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="driftSqlType" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/driftSqlType.html">driftSqlType</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftSqlType.html">DriftSqlType</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd class="inherited">
  The supported <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftSqlType.html">DriftSqlType</a> backing this expression.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="escapedName" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/escapedName.html">escapedName</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/name.html">name</a>, but wrapped in double quotes to escape it as a a same identifier.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="generatedAs" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/generatedAs.html">generatedAs</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedAs-class.html">GeneratedAs</a>?</span> 

</dt>
<dd class="inherited">
  If this column is generated (that is, it is a SQL expression of other)
columns, contains information about how to generate this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hasAutoIncrement" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hasAutoIncrement.html">hasAutoIncrement</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether this column has an <code>AUTOINCREMENT</code> primary key constraint that was
created by drift.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isLiteral" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isLiteral.html">isLiteral</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether this expression is a literal. Some use-sites need to put
parentheses around non-literals.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="name" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/name.html">name</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  The (unescaped) name of this column.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="precedence" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/precedence.html">precedence</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Precedence.html">Precedence</a></span> 

</dt>
<dd class="inherited">
  The precedence of this expression. This can be used to automatically put
parentheses around expressions as needed.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="requiredDuringInsert" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/requiredDuringInsert.html">requiredDuringInsert</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether a value is required for this column when inserting a new row.
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

        <dt id="tableName" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/tableName.html">tableName</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> 

</dt>
<dd class="inherited">
  The name of the table that contains this column
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="type" class="property inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/type.html">type</a></span>
  <span class="signature">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/DriftSqlType.html">DriftSqlType</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> 

</dt>
<dd class="inherited">
  The sql type to use for this column.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="caseMatch" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/caseMatch.html">caseMatch</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="caseMatch-param-when">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Map-class.html">Map</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>, <span class="type-parameter"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>&gt;</span></span> <span class="parameter-name">when</span>, </span><span class="parameter" id="caseMatch-param-orElse"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span>?</span> <span class="parameter-name">orElse</span>}</span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  A <code>CASE WHEN</code> construct using the current expression as a base.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="cast" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/cast.html">cast</a></span><span class="signature">&lt;<wbr><span class="type-parameter">D2 extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">D2</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Generates a <code>CAST(expression AS TYPE)</code> expression.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="dartCast" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/dartCast.html">dartCast</a></span><span class="signature">&lt;<wbr><span class="type-parameter">D2 extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">D2</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Casts this expression to an expression of <code>D</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="equals" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equals.html">equals</a></span><span class="signature">(<wbr><span class="parameter" id="equals-param-compare"><span class="type-annotation">T</span> <span class="parameter-name">compare</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Whether this column is equal to the given value, which must have a fitting
type. The <code>compare</code> value will be written
as a variable using prepared statements, so there is no risk of
an SQL-injection.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="equalsExp" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsExp.html">equalsExp</a></span><span class="signature">(<wbr><span class="parameter" id="equalsExp-param-compare"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">compare</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Whether this expression is equal to the given expression.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="equalsNullable" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsNullable.html">equalsNullable</a></span><span class="signature">(<wbr><span class="parameter" id="equalsNullable-param-compare"><span class="type-annotation">T?</span> <span class="parameter-name">compare</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Compares the value of this column to <code>compare</code> or <code>null</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="iif" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/iif.html">iif</a></span><span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="iif-param-predicate"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span> <span class="parameter-name">predicate</span>, </span><span class="parameter" id="iif-param-ifFalse"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">ifFalse</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Evaluates to <code>this</code> if <code>predicate</code> is true, otherwise evaluates to <code>ifFalse</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isAcceptableOrUnknown" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableOrUnknown.html">isAcceptableOrUnknown</a></span><span class="signature">(<wbr><span class="parameter" id="isAcceptableOrUnknown-param-value"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span> <span class="parameter-name">value</span>, </span><span class="parameter" id="isAcceptableOrUnknown-param-meta"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationMeta-class.html">VerificationMeta</a></span> <span class="parameter-name">meta</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationResult-class.html">VerificationResult</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A more general version of <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableValue.html">isAcceptableValue</a> that supports any sql
expression.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isAcceptableValue" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableValue.html">isAcceptableValue</a></span><span class="signature">(<wbr><span class="parameter" id="isAcceptableValue-param-value"><span class="type-annotation">T?</span> <span class="parameter-name">value</span>, </span><span class="parameter" id="isAcceptableValue-param-meta"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationMeta-class.html">VerificationMeta</a></span> <span class="parameter-name">meta</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/VerificationResult-class.html">VerificationResult</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Checks whether the given value fits into this column. The default
implementation only checks for nullability, but subclasses might enforce
additional checks. For instance, a text column might verify that a text
has a certain length.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isExp" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isExp.html">isExp</a></span><span class="signature">(<wbr><span class="parameter" id="isExp-param-other"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Generates an <code>IS</code> expression in SQL, comparing this expression with the
<code>other</code> expression.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isIn" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isIn.html">isIn</a></span><span class="signature">(<wbr><span class="parameter" id="isIn-param-values"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">values</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  An expression that is true if <code>this</code> resolves to any of the values in
<code>values</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isInQuery" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isInQuery.html">isInQuery</a></span><span class="signature">(<wbr><span class="parameter" id="isInQuery-param-select"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/BaseSelectStatement-class.html">BaseSelectStatement</a></span> <span class="parameter-name">select</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  An expression checking whether <code>this</code> is included in any row of the
provided <code>select</code> statement.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNotExp" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotExp.html">isNotExp</a></span><span class="signature">(<wbr><span class="parameter" id="isNotExp-param-other"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Generates an <code>IS NOT</code> expression in SQL, comparing this expression with
the <code>other</code> expression.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNotIn" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotIn.html">isNotIn</a></span><span class="signature">(<wbr><span class="parameter" id="isNotIn-param-values"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Iterable-class.html">Iterable</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">values</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  An expression that is true if <code>this</code> does not resolve to any of the values
in <code>values</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNotInQuery" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotInQuery.html">isNotInQuery</a></span><span class="signature">(<wbr><span class="parameter" id="isNotInQuery-param-select"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/BaseSelectStatement-class.html">BaseSelectStatement</a></span> <span class="parameter-name">select</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  An expression checking whether <code>this</code> is <em>not</em> included in any row of the
provided <code>select</code> statement.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNotNull" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotNull.html">isNotNull</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Expression that is true if the inner expression resolves to a non-null
value.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNotValue" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotValue.html">isNotValue</a></span><span class="signature">(<wbr><span class="parameter" id="isNotValue-param-value"><span class="type-annotation">T</span> <span class="parameter-name">value</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Generates an <code>IS NOT</code> expression in SQL, comparing this expression with
the Dart <code>value</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isNull" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNull.html">isNull</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Expression that is true if the inner expression resolves to a null value.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="isValue" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isValue.html">isValue</a></span><span class="signature">(<wbr><span class="parameter" id="isValue-param-value"><span class="type-annotation">T</span> <span class="parameter-name">value</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Generates an <code>IS</code> expression in SQL, comparing this expression with the
Dart <code>value</code>.
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

        <dt id="nullIf" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/nullIf.html">nullIf</a></span><span class="signature">(<wbr><span class="parameter" id="nullIf-param-matcher"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span> <span class="parameter-name">matcher</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns <code>null</code> if <code>matcher</code> is equal to this expression, <code>this</code> otherwise.
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

        <dt id="withConverter" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/withConverter.html">withConverter</a></span><span class="signature">&lt;<wbr><span class="type-parameter">D</span>&gt;</span><span class="signature">(<wbr><span class="parameter" id="withConverter-param-converter"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/TypeConverter-class.html">TypeConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>, <span class="type-parameter">T?</span>&gt;</span></span> <span class="parameter-name">converter</span></span>)
    <span class="returntype parameter">→ <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumnWithTypeConverter-class.html">GeneratedColumnWithTypeConverter</a><span class="signature">&lt;<wbr><span class="type-parameter">D</span>, <span class="type-parameter">T</span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Applies a type converter to this column.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="writeAroundPrecedence" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeAroundPrecedence.html">writeAroundPrecedence</a></span><span class="signature">(<wbr><span class="parameter" id="writeAroundPrecedence-param-context"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span> <span class="parameter-name">context</span>, </span><span class="parameter" id="writeAroundPrecedence-param-precedence"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Precedence.html">Precedence</a></span> <span class="parameter-name">precedence</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Writes this expression into the <a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a>, assuming that there's
an outer expression with <code>precedence</code>. If the <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/precedence.html">Expression.precedence</a> of
<code>this</code> expression is lower, it will be wrap}ped in
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="writeColumnDefinition" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeColumnDefinition.html">writeColumnDefinition</a></span><span class="signature">(<wbr><span class="parameter" id="writeColumnDefinition-param-into"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span> <span class="parameter-name">into</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Writes the definition of this column, as defined
<a href="https://www.sqlite.org/syntax/column-def.html">here</a>, into the given
buffer.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="writeInner" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeInner.html">writeInner</a></span><span class="signature">(<wbr><span class="parameter" id="writeInner-param-ctx"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span> <span class="parameter-name">ctx</span>, </span><span class="parameter" id="writeInner-param-inner"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span></span> <span class="parameter-name">inner</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  If this <a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression-class.html">Expression</a> wraps an <code>inner</code> expression, this utility method can
be used inside <a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeInto.html">writeInto</a> to write that inner expression while wrapping
it in parentheses if necessary.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="writeInto" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeInto.html">writeInto</a></span><span class="signature">(<wbr><span class="parameter" id="writeInto-param-context"><span class="type-annotation"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext-class.html">GenerationContext</a></span> <span class="parameter-name">context</span>, </span><span class="parameter" id="writeInto-param-ignoreEscape">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">ignoreEscape</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Writes this component into the <code>context</code> by writing to its
<a href="https://pub.dev/documentation/drift/2.6.0/drift/GenerationContext/buffer.html">GenerationContext.buffer</a> or by introducing bound variables. When writing
into the buffer, no whitespace around the this component should be
introduced. When a component consists of multiple composed component, it's
responsible for introducing whitespace between its child components.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
        <dt id="fromString" class="callable">
  <span class="name"><a href="../ungraph_database/DynamicColumn/fromString">fromString</a></span><span class="signature">(<wbr><span class="parameter" id="fromString-param-name"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">name</span>, </span><span class="parameter" id="fromString-param-tableName"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">tableName</span>, </span><span class="parameter" id="fromString-param-nullable"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">nullable</span>, </span><span class="parameter" id="fromString-param-type">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">type</span>}</span>)
    <span class="returntype parameter">→ dynamic</span>
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
  <li><a href="../index">ungraph_database</a></li>
  <li><a href="../ungraph_database/ungraph_database">ungraph_database</a></li>
  <li class="self-crumb">DynamicColumn<span class="signature">&lt;<wbr><span class="type-parameter">T extends <a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span>&gt;</span> class</li>
</ol>


    <h5>ungraph_database library</h5>
    <ol>
      <li class="section-title"><a href="../ungraph_database/ungraph_database#classes">Classes</a></li>
        <li><a href="../ungraph_database/\$EdgeSpecTable">\$EdgeSpecTable</a></li>
        <li><a href="../ungraph_database/\$NodeSpecTable">\$NodeSpecTable</a></li>
        <li><a href="../ungraph_database/\$UnpackSpecTable">\$UnpackSpecTable</a></li>
        <li><a href="../ungraph_database/\$UnpackStateTable">\$UnpackStateTable</a></li>
        <li><a href="../ungraph_database/DynamicColumn">DynamicColumn</a></li>
        <li><a href="../ungraph_database/DynamicDao">DynamicDao</a></li>
        <li><a href="../ungraph_database/DynamicData">DynamicData</a></li>
        <li><a href="../ungraph_database/DynamicDatabase">DynamicDatabase</a></li>
        <li><a href="../ungraph_database/DynamicTable">DynamicTable</a></li>
        <li><a href="../ungraph_database/EdgeDao">EdgeDao</a></li>
        <li><a href="../ungraph_database/EdgeData">EdgeData</a></li>
        <li><a href="../ungraph_database/EdgeSpec">EdgeSpec</a></li>
        <li><a href="../ungraph_database/EdgeSpecCompanion">EdgeSpecCompanion</a></li>
        <li><a href="../ungraph_database/EdgeSpecDao">EdgeSpecDao</a></li>
        <li><a href="../ungraph_database/EdgeSpecData">EdgeSpecData</a></li>
        <li><a href="../ungraph_database/EdgeTable">EdgeTable</a></li>
        <li><a href="../ungraph_database/ListConverter">ListConverter</a></li>
        <li><a href="../ungraph_database/MapConverter">MapConverter</a></li>
        <li><a href="../ungraph_database/NodeDao">NodeDao</a></li>
        <li><a href="../ungraph_database/NodeData">NodeData</a></li>
        <li><a href="../ungraph_database/NodeSpec">NodeSpec</a></li>
        <li><a href="../ungraph_database/NodeSpecCompanion">NodeSpecCompanion</a></li>
        <li><a href="../ungraph_database/NodeSpecDao">NodeSpecDao</a></li>
        <li><a href="../ungraph_database/NodeSpecData">NodeSpecData</a></li>
        <li><a href="../ungraph_database/NodeTable">NodeTable</a></li>
        <li><a href="https://pub.dev/documentation/slugid/1.1.1/slugid/Slugid-class.html">Slugid</a></li>
        <li><a href="../ungraph_database/UngraphDatabase">UngraphDatabase</a></li>
        <li><a href="../ungraph_database/UnpackSpec">UnpackSpec</a></li>
        <li><a href="../ungraph_database/UnpackSpecCompanion">UnpackSpecCompanion</a></li>
        <li><a href="../ungraph_database/UnpackSpecDao">UnpackSpecDao</a></li>
        <li><a href="../ungraph_database/UnpackSpecData">UnpackSpecData</a></li>
        <li><a href="../ungraph_database/UnpackState">UnpackState</a></li>
        <li><a href="../ungraph_database/UnpackStateCompanion">UnpackStateCompanion</a></li>
        <li><a href="../ungraph_database/UnpackStateDao">UnpackStateDao</a></li>
        <li><a href="../ungraph_database/UnpackStateData">UnpackStateData</a></li>
        <li><a href="https://pub.dev/documentation/drift/2.6.0/drift/Value-class.html">Value</a></li>


      <li class="section-title"><a href="../ungraph_database/ungraph_database#mixins">Mixins</a></li>
        <li><a href="../ungraph_database/PrimaryUuid-mixin">PrimaryUuid</a></li>



      <li class="section-title"><a href="../ungraph_database/ungraph_database#functions">Functions</a></li>
        <li><a href="../ungraph_database/connect">connect</a></li>



</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../ungraph_database/DynamicColumn#constructors">Constructors</a></li>
          <li><a href="../ungraph_database/DynamicColumn/DynamicColumn.constructor">DynamicColumn</a></li>


        <li class="section-title inherited">
          <a href="../ungraph_database/DynamicColumn#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$customConstraints.html">\$customConstraints</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$name.html">\$name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/\$nullable.html">\$nullable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/additionalChecks.html">additionalChecks</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/check.html">check</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/clientDefault.html">clientDefault</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/defaultValue.html">defaultValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/driftSqlType.html">driftSqlType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/escapedName.html">escapedName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/generatedAs.html">generatedAs</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hasAutoIncrement.html">hasAutoIncrement</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isLiteral.html">isLiteral</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/name.html">name</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Column/precedence.html">precedence</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/requiredDuringInsert.html">requiredDuringInsert</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/tableName.html">tableName</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/type.html">type</a></li>

        <li class="section-title inherited"><a href="../ungraph_database/DynamicColumn#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/caseMatch.html">caseMatch</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/cast.html">cast</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/dartCast.html">dartCast</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equals.html">equals</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsExp.html">equalsExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/equalsNullable.html">equalsNullable</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/iif.html">iif</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableOrUnknown.html">isAcceptableOrUnknown</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/isAcceptableValue.html">isAcceptableValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isExp.html">isExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isIn.html">isIn</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isInQuery.html">isInQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotExp.html">isNotExp</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotIn.html">isNotIn</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotInQuery.html">isNotInQuery</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotNull.html">isNotNull</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNotValue.html">isNotValue</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isNull.html">isNull</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/isValue.html">isValue</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/nullIf.html">nullIf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/toString.html">toString</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/withConverter.html">withConverter</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeAroundPrecedence.html">writeAroundPrecedence</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeColumnDefinition.html">writeColumnDefinition</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/Expression/writeInner.html">writeInner</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/writeInto.html">writeInto</a></li>

        <li class="section-title inherited"><a href="../ungraph_database/DynamicColumn#operators">Operators</a></li>
          <li class="inherited"><a href="https://pub.dev/documentation/drift/2.6.0/drift/GeneratedColumn/operator_equals.html">operator ==</a></li>



        <li class="section-title"><a href="../ungraph_database/DynamicColumn#static-methods">Static methods</a></li>
          <li><a href="../ungraph_database/DynamicColumn/fromString">fromString</a></li>

</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
