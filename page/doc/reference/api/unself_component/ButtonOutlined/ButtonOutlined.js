import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">ButtonOutlined</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></li>
        <li><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a></li>
        <li><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton-class.html">ButtonStyleButton</a></li>
        <li><a href="https://api.flutter.dev/flutter/material/OutlinedButton-class.html">OutlinedButton</a></li>
      <li>ButtonOutlined</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="ButtonOutlined" class="callable">
          <span class="name"><a href="../unself_component/ButtonOutlined/ButtonOutlined.constructor">ButtonOutlined</a></span><span class="signature">(<span class="parameter" id="-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="-param-onPressed"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onPressed</span>, </span><span class="parameter" id="-param-onLongPress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onLongPress</span>, </span><span class="parameter" id="-param-onHover"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onHover</span>, </span><span class="parameter" id="-param-onFocusChange"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onFocusChange</span>, </span><span class="parameter" id="-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> <span class="parameter-name">style</span>, </span><span class="parameter" id="-param-focusNode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> <span class="parameter-name">focusNode</span>, </span><span class="parameter" id="-param-autofocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">autofocus</span> = <span class="default-value">false</span>, </span><span class="parameter" id="-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a></span> <span class="parameter-name">clipBehavior</span> = <span class="default-value">Clip.none</span>, </span><span class="parameter" id="-param-child"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">child</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">const</div>
        </dd>
        <dt id="ButtonOutlined.icon" class="callable">
          <span class="name"><a href="../unself_component/ButtonOutlined/ButtonOutlined.icon">ButtonOutlined.icon</a></span><span class="signature">(<span class="parameter" id="icon-param-key">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> <span class="parameter-name">key</span>, </span><span class="parameter" id="icon-param-onPressed"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onPressed</span>, </span><span class="parameter" id="icon-param-onLongPress"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> <span class="parameter-name">onLongPress</span>, </span><span class="parameter" id="icon-param-onHover"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onHover</span>, </span><span class="parameter" id="icon-param-onFocusChange"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> <span class="parameter-name">onFocusChange</span>, </span><span class="parameter" id="icon-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> <span class="parameter-name">style</span>, </span><span class="parameter" id="icon-param-focusNode"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> <span class="parameter-name">focusNode</span>, </span><span class="parameter" id="icon-param-autofocus"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> <span class="parameter-name">autofocus</span>, </span><span class="parameter" id="icon-param-clipBehavior"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a>?</span> <span class="parameter-name">clipBehavior</span>, </span><span class="parameter" id="icon-param-icon"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">icon</span>, </span><span class="parameter" id="icon-param-label"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a></span> <span class="parameter-name">label</span>}</span>)</span>
        </dt>
        <dd>
          
            <div class="constructor-modifier features">factory</div>
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="autofocus" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  True if this widget will be selected as the initial focus when no other
node in its scope is currently focused.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="child" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/widgets/Widget-class.html">Widget</a>?</span> 

</dt>
<dd class="inherited">
  Typically the button's label.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="clipBehavior" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/Clip.html">Clip</a></span> 

</dt>
<dd class="inherited">
  The content will be clipped (or not) according to this option.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="enabled" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether the button is enabled or disabled.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="focusNode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/widgets/FocusNode-class.html">FocusNode</a>?</span> 

</dt>
<dd class="inherited">
  An optional focus node to use as the focus node for this widget.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="isEnabled" class="property">
  <span class="name"><a href="../unself_component/ButtonOutlined/isEnabled">isEnabled</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">read-only</span></div>

</dd>

        <dt id="key" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/foundation/Key-class.html">Key</a>?</span> 

</dt>
<dd class="inherited">
  Controls how one widget replaces another widget in the tree.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onFocusChange" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  Handler called when the focus changes.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onHover" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/foundation/ValueChanged.html">ValueChanged</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  Called when a pointer enters or exits the button response area.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onLongPress" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> 

</dt>
<dd class="inherited">
  Called when the button is long-pressed.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onPressed" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/VoidCallback.html">VoidCallback</a>?</span> 

</dt>
<dd class="inherited">
  Called when the button is tapped or otherwise activated.
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

        <dt id="statesController" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/material/MaterialStatesController-class.html">MaterialStatesController</a>?</span> 

</dt>
<dd class="inherited">
  Represents the interactive "state" of this widget in terms of
a set of <a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState</a>s, like <a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState.pressed</a> and
<a href="https://api.flutter.dev/flutter/material/MaterialState.html">MaterialState.focused</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="style" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span> 

</dt>
<dd class="inherited">
  Customizes this button's appearance.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="createElement" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/widgets/StatefulElement-class.html">StatefulElement</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates a <a href="https://api.flutter.dev/flutter/widgets/StatefulElement-class.html">StatefulElement</a> to manage this widget's location in the tree.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="createState" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/widgets/State-class.html">State</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton-class.html">ButtonStyleButton</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Creates the mutable state for this widget at a given location in the tree.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugDescribeChildren" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a list of <code>DiagnosticsNode</code> objects describing this node's
children.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugFillProperties" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Add additional properties associated with the node.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="defaultStyleOf" class="callable">
  <span class="name"><a href="../unself_component/ButtonOutlined/defaultStyleOf">defaultStyleOf</a></span><span class="signature">(<wbr><span class="parameter" id="defaultStyleOf-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a></span>
  </span>
  

</dt>
<dd>
  Defines the button's default appearance.
  <div class="features"><span class="feature">override</span></div>

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

        <dt id="themeStyleOf" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/material/OutlinedButton/themeStyleOf.html">themeStyleOf</a></span><span class="signature">(<wbr><span class="parameter" id="themeStyleOf-param-context"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/material/ButtonStyle-class.html">ButtonStyle</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Returns the ButtonStyle that belongs to the button's component theme.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toDiagnosticsNode" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></span><span class="signature">(<wbr><span class="parameter" id="toDiagnosticsNode-param-name">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">name</span>, </span><span class="parameter" id="toDiagnosticsNode-param-style"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html">DiagnosticsTreeStyle</a>?</span> <span class="parameter-name">style</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a debug representation of the object that is used by debugging
tools and by <a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html">DiagnosticsNode.toStringDeep</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toString" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></span><span class="signature">(<wbr><span class="parameter" id="toString-param-minLevel">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.info</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A string representation of this object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toStringDeep" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></span><span class="signature">(<wbr><span class="parameter" id="toStringDeep-param-prefixLineOne">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">prefixLineOne</span> = <span class="default-value">''</span>, </span><span class="parameter" id="toStringDeep-param-prefixOtherLines"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> <span class="parameter-name">prefixOtherLines</span>, </span><span class="parameter" id="toStringDeep-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a string representation of this node and its descendants.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toStringShallow" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></span><span class="signature">(<wbr><span class="parameter" id="toStringShallow-param-joiner">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">joiner</span> = <span class="default-value">', '</span>, </span><span class="parameter" id="toStringShallow-param-minLevel"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html">DiagnosticLevel</a></span> <span class="parameter-name">minLevel</span> = <span class="default-value">DiagnosticLevel.debug</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a one-line detailed description of the object.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="toStringShort" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A short, textual description of this widget.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
  <li><a href="../index">unself_component</a></li>
  <li><a href="../unself_component/unself_component">unself_component</a></li>
  <li class="self-crumb">ButtonOutlined class</li>
</ol>


    <h5>unself_component library</h5>
    <ol>
      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>
        <li><a href="../unself_component/ButtonAction">ButtonAction</a></li>
        <li><a href="../unself_component/ButtonBackground">ButtonBackground</a></li>
        <li><a href="../unself_component/ButtonElevated">ButtonElevated</a></li>
        <li><a href="../unself_component/ButtonElevation">ButtonElevation</a></li>
        <li><a href="../unself_component/ButtonFilled">ButtonFilled</a></li>
        <li><a href="../unself_component/ButtonForeground">ButtonForeground</a></li>
        <li><a href="../unself_component/ButtonIcon">ButtonIcon</a></li>
        <li><a href="../unself_component/ButtonOutlined">ButtonOutlined</a></li>
        <li><a href="../unself_component/ButtonOverlay">ButtonOverlay</a></li>
        <li><a href="../unself_component/ButtonText">ButtonText</a></li>
        <li><a href="../unself_component/ButtonTonal">ButtonTonal</a></li>
        <li><a href="../unself_component/CardTextEdit">CardTextEdit</a></li>
        <li><a href="../unself_component/CardTextEditState">CardTextEditState</a></li>
        <li><a href="../unself_component/CardTile">CardTile</a></li>
        <li><a href="../unself_component/ChipEmoji">ChipEmoji</a></li>
        <li><a href="../unself_component/ChipText">ChipText</a></li>
        <li><a href="../unself_component/ConditionalParentWidget">ConditionalParentWidget</a></li>
        <li><a href="../unself_component/FloatContainer">FloatContainer</a></li>
        <li><a href="../unself_component/FloatScaffold">FloatScaffold</a></li>
        <li><a href="../unself_component/HeadingHeadline">HeadingHeadline</a></li>
        <li><a href="../unself_component/HeadingSection">HeadingSection</a></li>
        <li><a href="../unself_component/HeadingTitle">HeadingTitle</a></li>
        <li><a href="../unself_component/HeroTag">HeroTag</a></li>
        <li><a href="../unself_component/ListItemBuilder">ListItemBuilder</a></li>
        <li><a href="../unself_component/NavigationContext">NavigationContext</a></li>
        <li><a href="../unself_component/PairingScrollController">PairingScrollController</a></li>
        <li><a href="../unself_component/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
        <li><a href="../unself_component/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
        <li><a href="../unself_component/TextArea">TextArea</a></li>
        <li><a href="../unself_component/TextBox">TextBox</a></li>
        <li><a href="../unself_component/TranslucentDecoration">TranslucentDecoration</a></li>
        <li><a href="../unself_component/UnAppPage">UnAppPage</a></li>
        <li><a href="../unself_component/UnArtPage">UnArtPage</a></li>
        <li><a href="../unself_component/UnCard">UnCard</a></li>
        <li><a href="../unself_component/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>
        <li><a href="../unself_component/Unmoji">Unmoji</a></li>
        <li><a href="../unself_component/UnmojiText">UnmojiText</a></li>
        <li><a href="../unself_component/UnmojiTextSpan">UnmojiTextSpan</a></li>
        <li><a href="../unself_component/UnRootSheetPage">UnRootSheetPage</a></li>
        <li><a href="../unself_component/UnScaffold">UnScaffold</a></li>
        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBar">UnselfNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
        <li><a href="../unself_component/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnSheet">UnSheet</a></li>
        <li><a href="../unself_component/UnSliverAppBar">UnSliverAppBar</a></li>
        <li><a href="../unself_component/UnSliverArtBar">UnSliverArtBar</a></li>



      <li class="section-title"><a href="../unself_component/unself_component#constants">Constants</a></li>
        <li><a href="../unself_component/defaultHeroTag-constant">defaultHeroTag</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#properties">Properties</a></li>
        <li><a href="../unself_component/regex">regex</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#functions">Functions</a></li>
        <li><a href="../unself_component/emojiToUnicode">emojiToUnicode</a></li>
        <li><a href="../unself_component/loadImageShader">loadImageShader</a></li>
        <li><a href="../unself_component/show">show</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#enums">Enums</a></li>
        <li><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></li>

      <li class="section-title"><a href="../unself_component/unself_component#typedefs">Typedefs</a></li>
        <li><a href="../unself_component/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>
        <li><a href="../unself_component/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>
        <li><a href="../unself_component/UnTransitionPage">UnTransitionPage</a></li>

</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <ol>

        <li class="section-title"><a href="../unself_component/ButtonOutlined#constructors">Constructors</a></li>
          <li><a href="../unself_component/ButtonOutlined/ButtonOutlined.constructor">ButtonOutlined</a></li>
          <li><a href="../unself_component/ButtonOutlined/ButtonOutlined.icon">icon</a></li>


        <li class="section-title">
          <a href="../unself_component/ButtonOutlined#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/autofocus.html">autofocus</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/child.html">child</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/clipBehavior.html">clipBehavior</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/enabled.html">enabled</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/focusNode.html">focusNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/hashCode.html">hashCode</a></li>
          <li><a href="../unself_component/ButtonOutlined/isEnabled">isEnabled</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/key.html">key</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onFocusChange.html">onFocusChange</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onHover.html">onHover</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onLongPress.html">onLongPress</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/onPressed.html">onPressed</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/statesController.html">statesController</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/style.html">style</a></li>

        <li class="section-title"><a href="../unself_component/ButtonOutlined#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/StatefulWidget/createElement.html">createElement</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/createState.html">createState</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/ButtonStyleButton/debugFillProperties.html">debugFillProperties</a></li>
          <li><a href="../unself_component/ButtonOutlined/defaultStyleOf">defaultStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/material/OutlinedButton/themeStyleOf.html">themeStyleOf</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html">toStringShort</a></li>

        <li class="section-title inherited"><a href="../unself_component/ButtonOutlined#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
