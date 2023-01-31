import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-class">UnmojiTextSpan</span> class 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    
<section class="desc markdown">
  <p>The <a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan">UnmojiTextSpan</a> widget extends <a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a>
widget and it can be used in a <a href="https://api.flutter.dev/flutter/widgets/RichText-class.html">RichText</a> widget
and it also renders text with twitter emojis</p>
</section>


    <section>
      <dl class="dl-horizontal">
        
  <dt>Inheritance</dt>
  <dd>
    <ul class="gt-separated dark clazz-relationships">
      <li><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></li>
        <li><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html">DiagnosticableTree</a></li>
        <li><a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a></li>
        <li><a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a></li>
      <li>UnmojiTextSpan</li>
    </ul>
  </dd>

        
        



        


      </dl>
    </section>

    
  <section class="summary offset-anchor" id="constructors">
    <h2>Constructors</h2>

    <dl class="constructor-summary-list">
        <dt id="UnmojiTextSpan" class="callable">
          <span class="name"><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor">UnmojiTextSpan</a></span><span class="signature">(<span class="parameter" id="-param-style">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a>?</span> <span class="parameter-name">style</span>, </span><span class="parameter" id="-param-text"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span> <span class="parameter-name">text</span>, </span><span class="parameter" id="-param-children"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a></span>&gt;</span>?</span> <span class="parameter-name">children</span>, </span><span class="parameter" id="-param-emojiFontMultiplier"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">emojiFontMultiplier</span> = <span class="default-value">1</span>, </span><span class="parameter" id="-param-twemojiFormat"><span class="type-annotation"><a href="../unself_component/UnmojiFormat">UnmojiFormat</a></span> <span class="parameter-name">twemojiFormat</span> = <span class="default-value">UnmojiFormat.svg</span>}</span>)</span>
        </dt>
        <dd>
          
        </dd>
    </dl>
  </section>

    <section class="summary offset-anchor" id="instance-properties">
      <h2>Properties</h2>

      <dl class="properties">
        <dt id="children" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/children.html">children</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a></span>&gt;</span>?</span> 

</dt>
<dd class="inherited">
  Additional spans to include as children.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="cursor" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/cursor.html">cursor</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/services/MouseCursor-class.html">MouseCursor</a></span> 

</dt>
<dd class="inherited">
  Returns the value of <a href="https://api.flutter.dev/flutter/painting/TextSpan/mouseCursor.html">mouseCursor</a>.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="hashCode" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/hashCode.html">hashCode</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> 

</dt>
<dd class="inherited">
  The hash code for this object.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

        <dt id="locale" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/locale.html">locale</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-ui/Locale-class.html">Locale</a>?</span> 

</dt>
<dd class="inherited">
  The language of the text in this span and its span children.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="mouseCursor" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/mouseCursor.html">mouseCursor</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/services/MouseCursor-class.html">MouseCursor</a></span> 

</dt>
<dd class="inherited">
  Mouse cursor when the mouse hovers over this span.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onEnter" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onEnter.html">onEnter</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/services/PointerEnterEventListener.html">PointerEnterEventListener</a>?</span> 

</dt>
<dd class="inherited">
  Triggered when a mouse pointer, with or without buttons pressed, has
entered the region and <a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a> is true.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="onExit" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onExit.html">onExit</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/services/PointerExitEventListener.html">PointerExitEventListener</a>?</span> 

</dt>
<dd class="inherited">
  Triggered when a mouse pointer, with or without buttons pressed, has
exited the region and <a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a> is true.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="recognizer" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/recognizer.html">recognizer</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/gestures/GestureRecognizer-class.html">GestureRecognizer</a>?</span> 

</dt>
<dd class="inherited">
  A gesture recognizer that will receive events that hit this span.
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

        <dt id="semanticsLabel" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/semanticsLabel.html">semanticsLabel</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  An alternative semantics label for this <a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a>.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="spellOut" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/spellOut.html">spellOut</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a>?</span> 

</dt>
<dd class="inherited">
  Whether the assistive technologies should spell out this text character
by character.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="style" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/style.html">style</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a>?</span> 

</dt>
<dd class="inherited">
  The <a href="https://api.flutter.dev/flutter/painting/TextStyle-class.html">TextStyle</a> to apply to this span.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="text" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/text.html">text</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a>?</span> 

</dt>
<dd class="inherited">
  The text contained in this span.
  <div class="features"><span class="feature">final</span><span class="feature">inherited</span></div>

</dd>

        <dt id="twemojiFormat" class="property">
  <span class="name"><a href="../unself_component/UnmojiTextSpan/twemojiFormat">twemojiFormat</a></span>
  <span class="signature">→ <a href="../unself_component/UnmojiFormat">UnmojiFormat</a></span> 

</dt>
<dd>
  
  <div class="features"><span class="feature">final</span></div>

</dd>

        <dt id="validForMouseTracker" class="property inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a></span>
  <span class="signature">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> 

</dt>
<dd class="inherited">
  Whether this is included when <a href="https://api.flutter.dev/flutter/rendering/MouseTracker-class.html">MouseTracker</a> collects the list of
annotations.
  <div class="features"><span class="feature">read-only</span><span class="feature">inherited</span></div>

</dd>

      </dl>
    </section>

    
  <section class="summary offset-anchor inherited" id="instance-methods">
    <h2>Methods</h2>
    <dl class="callables">
        <dt id="build" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/build.html">build</a></span><span class="signature">(<wbr><span class="parameter" id="build-param-builder"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/ParagraphBuilder-class.html">ParagraphBuilder</a></span> <span class="parameter-name">builder</span>, </span><span class="parameter" id="build-param-textScaleFactor">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/double-class.html">double</a></span> <span class="parameter-name">textScaleFactor</span> = <span class="default-value">1.0</span>, </span><span class="parameter" id="build-param-dimensions"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/PlaceholderDimensions-class.html">PlaceholderDimensions</a></span>&gt;</span>?</span> <span class="parameter-name">dimensions</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Apply the <a href="https://api.flutter.dev/flutter/painting/InlineSpan/style.html">style</a>, <a href="https://api.flutter.dev/flutter/painting/TextSpan/text.html">text</a>, and <a href="https://api.flutter.dev/flutter/painting/TextSpan/children.html">children</a> of this object to the
given <a href="https://api.flutter.dev/flutter/dart-ui/ParagraphBuilder-class.html">ParagraphBuilder</a>, from which a <a href="https://api.flutter.dev/flutter/dart-ui/Paragraph-class.html">Paragraph</a> can be obtained.
<a href="https://api.flutter.dev/flutter/dart-ui/Paragraph-class.html">Paragraph</a> objects can be drawn on <a href="https://api.flutter.dev/flutter/dart-ui/Canvas-class.html">Canvas</a> objects.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="codeUnitAt" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/codeUnitAt.html">codeUnitAt</a></span><span class="signature">(<wbr><span class="parameter" id="codeUnitAt-param-index"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">index</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Returns the UTF-16 code unit at the given <code>index</code> in the flattened string.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="codeUnitAtVisitor" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/codeUnitAtVisitor.html">codeUnitAtVisitor</a></span><span class="signature">(<wbr><span class="parameter" id="codeUnitAtVisitor-param-index"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span> <span class="parameter-name">index</span>, </span><span class="parameter" id="codeUnitAtVisitor-param-offset"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Accumulator-class.html">Accumulator</a></span> <span class="parameter-name">offset</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Performs the check at each <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> for if the <code>index</code> falls within the range
of the span and returns the corresponding code unit. Returns null otherwise.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="compareTo" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/compareTo.html">compareTo</a></span><span class="signature">(<wbr><span class="parameter" id="compareTo-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a></span> <span class="parameter-name">other</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/RenderComparison.html">RenderComparison</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Describe the difference between this span and another, in terms of
how much damage it will make to the rendering. The comparison is deep.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="computeSemanticsInformation" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeSemanticsInformation.html">computeSemanticsInformation</a></span><span class="signature">(<wbr><span class="parameter" id="computeSemanticsInformation-param-collector"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/InlineSpanSemanticsInformation-class.html">InlineSpanSemanticsInformation</a></span>&gt;</span></span> <span class="parameter-name">collector</span>, </span><span class="parameter" id="computeSemanticsInformation-param-inheritedLocale">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/Locale-class.html">Locale</a>?</span> <span class="parameter-name">inheritedLocale</span>, </span><span class="parameter" id="computeSemanticsInformation-param-inheritedSpellOut"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">inheritedSpellOut</span> = <span class="default-value">false</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Walks the <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> tree and accumulates a list of
<a href="https://api.flutter.dev/flutter/painting/InlineSpanSemanticsInformation-class.html">InlineSpanSemanticsInformation</a> objects.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="computeToPlainText" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeToPlainText.html">computeToPlainText</a></span><span class="signature">(<wbr><span class="parameter" id="computeToPlainText-param-buffer"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/StringBuffer-class.html">StringBuffer</a></span> <span class="parameter-name">buffer</span>, </span><span class="parameter" id="computeToPlainText-param-includeSemanticsLabels">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">includeSemanticsLabels</span> = <span class="default-value">true</span>, </span><span class="parameter" id="computeToPlainText-param-includePlaceholders"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">includePlaceholders</span> = <span class="default-value">true</span>}</span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Walks the <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> tree and writes the plain text representation to <code>buffer</code>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugAssertIsValid" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugAssertIsValid.html">debugAssertIsValid</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  In debug mode, throws an exception if the object is not in a valid
configuration. Otherwise, returns true.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugDescribeChildren" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugDescribeChildren.html">debugDescribeChildren</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html">DiagnosticsNode</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Returns a list of <code>DiagnosticsNode</code> objects describing this node's
children.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="debugFillProperties" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugFillProperties.html">debugFillProperties</a></span><span class="signature">(<wbr><span class="parameter" id="debugFillProperties-param-properties"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html">DiagnosticPropertiesBuilder</a></span> <span class="parameter-name">properties</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Add additional properties associated with the node.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="describeSemantics" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/describeSemantics.html">describeSemantics</a></span><span class="signature">(<wbr><span class="parameter" id="describeSemantics-param-offset"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Accumulator-class.html">Accumulator</a></span> <span class="parameter-name">offset</span>, </span><span class="parameter" id="describeSemantics-param-semanticsOffsets"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/dart-core/int-class.html">int</a></span>&gt;</span></span> <span class="parameter-name">semanticsOffsets</span>, </span><span class="parameter" id="describeSemantics-param-semanticsElements"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a></span> <span class="parameter-name">semanticsElements</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Populates the <code>semanticsOffsets</code> and <code>semanticsElements</code> with the appropriate data
to be able to construct a <a href="https://api.flutter.dev/flutter/semantics/SemanticsNode-class.html">SemanticsNode</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="getSemanticsInformation" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSemanticsInformation.html">getSemanticsInformation</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/List-class.html">List</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/painting/InlineSpanSemanticsInformation-class.html">InlineSpanSemanticsInformation</a></span>&gt;</span></span>
  </span>
  

</dt>
<dd class="inherited">
  Flattens the <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> tree to a list of
<code>InlineSpanSemanticsInformation</code> objects.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="getSpanForPosition" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSpanForPosition.html">getSpanForPosition</a></span><span class="signature">(<wbr><span class="parameter" id="getSpanForPosition-param-position"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextPosition-class.html">TextPosition</a></span> <span class="parameter-name">position</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Returns the <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> that contains the given position in the text.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="getSpanForPositionVisitor" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/getSpanForPositionVisitor.html">getSpanForPositionVisitor</a></span><span class="signature">(<wbr><span class="parameter" id="getSpanForPositionVisitor-param-position"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-ui/TextPosition-class.html">TextPosition</a></span> <span class="parameter-name">position</span>, </span><span class="parameter" id="getSpanForPositionVisitor-param-offset"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/Accumulator-class.html">Accumulator</a></span> <span class="parameter-name">offset</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a>?</span>
  </span>
  

</dt>
<dd class="inherited">
  Returns the text span that contains the given position in the text.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="handleEvent" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/handleEvent.html">handleEvent</a></span><span class="signature">(<wbr><span class="parameter" id="handleEvent-param-event"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/gestures/PointerEvent-class.html">PointerEvent</a></span> <span class="parameter-name">event</span>, </span><span class="parameter" id="handleEvent-param-entry"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/gestures/HitTestEntry-class.html">HitTestEntry</a><span class="signature">&lt;<wbr><span class="type-parameter"><a href="https://api.flutter.dev/flutter/gestures/HitTestTarget-class.html">HitTestTarget</a></span>&gt;</span></span> <span class="parameter-name">entry</span></span>)
    <span class="returntype parameter">→ void</span>
  </span>
  

</dt>
<dd class="inherited">
  Override this method to receive events.
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

        <dt id="toPlainText" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/toPlainText.html">toPlainText</a></span><span class="signature">(<wbr><span class="parameter" id="toPlainText-param-includeSemanticsLabels">{<span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">includeSemanticsLabels</span> = <span class="default-value">true</span>, </span><span class="parameter" id="toPlainText-param-includePlaceholders"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span> <span class="parameter-name">includePlaceholders</span> = <span class="default-value">true</span>}</span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Flattens the <a href="https://api.flutter.dev/flutter/painting/InlineSpan-class.html">InlineSpan</a> tree into a single string.
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
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/toStringShort.html">toStringShort</a></span><span class="signature">(<wbr>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/String-class.html">String</a></span>
  </span>
  

</dt>
<dd class="inherited">
  A brief description of this object, usually just the <a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a> and the
<a href="https://api.flutter.dev/flutter/painting/TextSpan/hashCode.html">hashCode</a>.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

        <dt id="visitChildren" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/visitChildren.html">visitChildren</a></span><span class="signature">(<wbr><span class="parameter" id="visitChildren-param-visitor"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/painting/InlineSpanVisitor.html">InlineSpanVisitor</a></span> <span class="parameter-name">visitor</span></span>)
    <span class="returntype parameter">→ <a href="https://api.flutter.dev/flutter/dart-core/bool-class.html">bool</a></span>
  </span>
  

</dt>
<dd class="inherited">
  Walks this <a href="https://api.flutter.dev/flutter/painting/TextSpan-class.html">TextSpan</a> and its descendants in pre-order and calls <code>visitor</code>
for each span that has text.
  <div class="features"><span class="feature">inherited</span></div>

</dd>

    </dl>
  </section>
    
  <section class="summary offset-anchor inherited" id="operators">
    <h2>Operators</h2>
    <dl class="callables">
        <dt id="operator ==" class="callable inherited">
  <span class="name"><a href="https://api.flutter.dev/flutter/painting/TextSpan/operator_equals.html">operator ==</a></span><span class="signature">(<wbr><span class="parameter" id="==-param-other"><span class="type-annotation"><a href="https://api.flutter.dev/flutter/dart-core/Object-class.html">Object</a></span> <span class="parameter-name">other</span></span>)
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
  <li class="self-crumb">UnmojiTextSpan class</li>
</ol>


    <h5>unself_component library</h5>
    <ol>
      <li class="section-title"><a href="../unself_component/unself_component#classes">Classes</a></li>
        <li><a href="../unself_component/ButtonAction/ButtonAction">ButtonAction</a></li>
        <li><a href="../unself_component/ButtonBackground/ButtonBackground">ButtonBackground</a></li>
        <li><a href="../unself_component/ButtonElevated/ButtonElevated">ButtonElevated</a></li>
        <li><a href="../unself_component/ButtonElevation/ButtonElevation">ButtonElevation</a></li>
        <li><a href="../unself_component/ButtonFilled/ButtonFilled">ButtonFilled</a></li>
        <li><a href="../unself_component/ButtonForeground/ButtonForeground">ButtonForeground</a></li>
        <li><a href="../unself_component/ButtonIcon/ButtonIcon">ButtonIcon</a></li>
        <li><a href="../unself_component/ButtonOutlined/ButtonOutlined">ButtonOutlined</a></li>
        <li><a href="../unself_component/ButtonOverlay/ButtonOverlay">ButtonOverlay</a></li>
        <li><a href="../unself_component/ButtonText/ButtonText">ButtonText</a></li>
        <li><a href="../unself_component/ButtonTonal/ButtonTonal">ButtonTonal</a></li>
        <li><a href="../unself_component/CardTextEdit/CardTextEdit">CardTextEdit</a></li>
        <li><a href="../unself_component/CardTextEditState/CardTextEditState">CardTextEditState</a></li>
        <li><a href="../unself_component/CardTile/CardTile">CardTile</a></li>
        <li><a href="../unself_component/ChipEmoji/ChipEmoji">ChipEmoji</a></li>
        <li><a href="../unself_component/ChipText/ChipText">ChipText</a></li>
        <li><a href="../unself_component/ConditionalParentWidget/ConditionalParentWidget">ConditionalParentWidget</a></li>
        <li><a href="../unself_component/FloatContainer/FloatContainer">FloatContainer</a></li>
        <li><a href="../unself_component/FloatScaffold/FloatScaffold">FloatScaffold</a></li>
        <li><a href="../unself_component/HeadingHeadline/HeadingHeadline">HeadingHeadline</a></li>
        <li><a href="../unself_component/HeadingSection/HeadingSection">HeadingSection</a></li>
        <li><a href="../unself_component/HeadingTitle/HeadingTitle">HeadingTitle</a></li>
        <li><a href="../unself_component/HeroTag/HeroTag">HeroTag</a></li>
        <li><a href="../unself_component/ListItemBuilder/ListItemBuilder">ListItemBuilder</a></li>
        <li><a href="../unself_component/NavigationContext/NavigationContext">NavigationContext</a></li>
        <li><a href="../unself_component/PairingScrollController/PairingScrollController">PairingScrollController</a></li>
        <li><a href="../unself_component/PairingScrollControllerGroup/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
        <li><a href="../unself_component/ResponsiveLayoutBuilder/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
        <li><a href="../unself_component/TextArea/TextArea">TextArea</a></li>
        <li><a href="../unself_component/TextBox/TextBox">TextBox</a></li>
        <li><a href="../unself_component/TranslucentDecoration/TranslucentDecoration">TranslucentDecoration</a></li>
        <li><a href="../unself_component/UnAppPage/UnAppPage">UnAppPage</a></li>
        <li><a href="../unself_component/UnArtPage/UnArtPage">UnArtPage</a></li>
        <li><a href="../unself_component/UnCard/UnCard">UnCard</a></li>
        <li><a href="../unself_component/UnCupertinoContextMenu/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>
        <li><a href="../unself_component/Unmoji/Unmoji">Unmoji</a></li>
        <li><a href="../unself_component/UnmojiText/UnmojiText">UnmojiText</a></li>
        <li><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan">UnmojiTextSpan</a></li>
        <li><a href="../unself_component/UnRootSheetPage/UnRootSheetPage">UnRootSheetPage</a></li>
        <li><a href="../unself_component/UnScaffold/UnScaffold">UnScaffold</a></li>
        <li><a href="../unself_component/UnselfExtendedSliverNavigationBar/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBar/UnselfNavigationBar">UnselfNavigationBar</a></li>
        <li><a href="../unself_component/UnselfNavigationBarBackButton/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
        <li><a href="../unself_component/UnselfSliverNavigationBar/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>
        <li><a href="../unself_component/UnSheet/UnSheet">UnSheet</a></li>
        <li><a href="../unself_component/UnSliverAppBar/UnSliverAppBar">UnSliverAppBar</a></li>
        <li><a href="../unself_component/UnSliverArtBar/UnSliverArtBar">UnSliverArtBar</a></li>



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

        <li class="section-title"><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan#constructors">Constructors</a></li>
          <li><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan.constructor">UnmojiTextSpan</a></li>


        <li class="section-title">
          <a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan#instance-properties">Properties</a>
        </li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/children.html">children</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/cursor.html">cursor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/hashCode.html">hashCode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/locale.html">locale</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/mouseCursor.html">mouseCursor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onEnter.html">onEnter</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/onExit.html">onExit</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/recognizer.html">recognizer</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html">runtimeType</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/semanticsLabel.html">semanticsLabel</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/spellOut.html">spellOut</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/style.html">style</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/text.html">text</a></li>
          <li><a href="../unself_component/UnmojiTextSpan/twemojiFormat">twemojiFormat</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/validForMouseTracker.html">validForMouseTracker</a></li>

        <li class="section-title inherited"><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan#instance-methods">Methods</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/build.html">build</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/codeUnitAt.html">codeUnitAt</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/codeUnitAtVisitor.html">codeUnitAtVisitor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/compareTo.html">compareTo</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeSemanticsInformation.html">computeSemanticsInformation</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/computeToPlainText.html">computeToPlainText</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugAssertIsValid.html">debugAssertIsValid</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugDescribeChildren.html">debugDescribeChildren</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/debugFillProperties.html">debugFillProperties</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/describeSemantics.html">describeSemantics</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSemanticsInformation.html">getSemanticsInformation</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/getSpanForPosition.html">getSpanForPosition</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/getSpanForPositionVisitor.html">getSpanForPositionVisitor</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/handleEvent.html">handleEvent</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html">noSuchMethod</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html">toDiagnosticsNode</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/InlineSpan/toPlainText.html">toPlainText</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html">toString</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html">toStringDeep</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html">toStringShallow</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/toStringShort.html">toStringShort</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/visitChildren.html">visitChildren</a></li>

        <li class="section-title inherited"><a href="../unself_component/UnmojiTextSpan/UnmojiTextSpan#operators">Operators</a></li>
          <li class="inherited"><a href="https://api.flutter.dev/flutter/painting/TextSpan/operator_equals.html">operator ==</a></li>




</ol>

  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
