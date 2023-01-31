import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
      <div>
<h1><span class="kind-function">show</span> function 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    <section class="multi-line-signature">
        

<span class="returntype">void</span>
<span class="name ">show</span>(<wbr><ol class="parameter-list"><li><span class="parameter" id="show-param-context">{<span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a></span> <span class="parameter-name">context</span>, </span></li>
<li><span class="parameter" id="show-param-builder"><span>required</span> <span class="type-annotation"><a href="https://api.flutter.dev/flutter/widgets/WidgetBuilder.html">WidgetBuilder</a></span> <span class="parameter-name">builder</span>}</span></li>
</ol>)

        

    </section>
    


    
<section class="summary source-code" id="source">
  <h2><span>Implementation</span></h2>
  <pre class="language-dart"><code class="language-dart">void show({
  required BuildContext context,
  required WidgetBuilder builder,
}) =&gt;
    Navigator.of(context).push(MaterialPageRoute(
      builder: (BuildContext context) =&gt; builder(context),
    ));</code></pre>
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
  <li class="self-crumb">show function</li>
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

  </div><!--/.sidebar-offcanvas-left-->

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
  </div><!--/.sidebar-offcanvas-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
