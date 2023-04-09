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
  <li><a href="../index">un_ui</a></li>
  <li><a href="../un_ui/un_ui">un_ui</a></li>
  <li class="self-crumb">show function</li>
</ol>


    <h5>un_ui library</h5>
    <ol>
      <li class="section-title"><a href="../un_ui/un_ui#classes">Classes</a></li>
        <li><a href="../un_ui/ButtonAction">ButtonAction</a></li>
        <li><a href="../un_ui/ButtonBackground">ButtonBackground</a></li>
        <li><a href="../un_ui/ButtonElevated">ButtonElevated</a></li>
        <li><a href="../un_ui/ButtonElevation">ButtonElevation</a></li>
        <li><a href="../un_ui/ButtonFilled">ButtonFilled</a></li>
        <li><a href="../un_ui/ButtonForeground">ButtonForeground</a></li>
        <li><a href="../un_ui/ButtonIcon">ButtonIcon</a></li>
        <li><a href="../un_ui/ButtonOutlined">ButtonOutlined</a></li>
        <li><a href="../un_ui/ButtonOverlay">ButtonOverlay</a></li>
        <li><a href="../un_ui/ButtonText">ButtonText</a></li>
        <li><a href="../un_ui/ButtonTonal">ButtonTonal</a></li>
        <li><a href="../un_ui/CardTextEdit">CardTextEdit</a></li>
        <li><a href="../un_ui/CardTextEditState">CardTextEditState</a></li>
        <li><a href="../un_ui/CardTile">CardTile</a></li>
        <li><a href="../un_ui/ChipEmoji">ChipEmoji</a></li>
        <li><a href="../un_ui/ChipText">ChipText</a></li>
        <li><a href="../un_ui/ConditionalParentWidget">ConditionalParentWidget</a></li>
        <li><a href="../un_ui/FloatContainer">FloatContainer</a></li>
        <li><a href="../un_ui/FloatScaffold">FloatScaffold</a></li>
        <li><a href="../un_ui/HeadingHeadline">HeadingHeadline</a></li>
        <li><a href="../un_ui/HeadingSection">HeadingSection</a></li>
        <li><a href="../un_ui/HeadingTitle">HeadingTitle</a></li>
        <li><a href="../un_ui/HeroTag">HeroTag</a></li>
        <li><a href="../un_ui/ListItemBuilder">ListItemBuilder</a></li>
        <li><a href="../un_ui/NavigationContext">NavigationContext</a></li>
        <li><a href="../un_ui/PairingScrollController">PairingScrollController</a></li>
        <li><a href="../un_ui/PairingScrollControllerGroup">PairingScrollControllerGroup</a></li>
        <li><a href="../un_ui/ResponsiveLayoutBuilder">ResponsiveLayoutBuilder</a></li>
        <li><a href="../un_ui/TextArea">TextArea</a></li>
        <li><a href="../un_ui/TextBox">TextBox</a></li>
        <li><a href="../un_ui/TranslucentDecoration">TranslucentDecoration</a></li>
        <li><a href="../un_ui/UnAppPage">UnAppPage</a></li>
        <li><a href="../un_ui/UnArtPage">UnArtPage</a></li>
        <li><a href="../un_ui/UnCard">UnCard</a></li>
        <li><a href="../un_ui/UnCupertinoContextMenu">UnCupertinoContextMenu</a></li>
        <li><a href="../un_ui/Unmoji">Unmoji</a></li>
        <li><a href="../un_ui/UnmojiText">UnmojiText</a></li>
        <li><a href="../un_ui/UnmojiTextSpan">UnmojiTextSpan</a></li>
        <li><a href="../un_ui/UnRootSheetPage">UnRootSheetPage</a></li>
        <li><a href="../un_ui/UnScaffold">UnScaffold</a></li>
        <li><a href="../un_ui/UnselfExtendedSliverNavigationBar">UnselfExtendedSliverNavigationBar</a></li>
        <li><a href="../un_ui/UnselfNavigationBar">UnselfNavigationBar</a></li>
        <li><a href="../un_ui/UnselfNavigationBarBackButton">UnselfNavigationBarBackButton</a></li>
        <li><a href="../un_ui/UnselfSliverNavigationBar">UnselfSliverNavigationBar</a></li>
        <li><a href="../un_ui/UnSheet">UnSheet</a></li>
        <li><a href="../un_ui/UnSliverAppBar">UnSliverAppBar</a></li>
        <li><a href="../un_ui/UnSliverArtBar">UnSliverArtBar</a></li>



      <li class="section-title"><a href="../un_ui/un_ui#constants">Constants</a></li>
        <li><a href="../un_ui/defaultHeroTag-constant">defaultHeroTag</a></li>

      <li class="section-title"><a href="../un_ui/un_ui#properties">Properties</a></li>
        <li><a href="../un_ui/regex">regex</a></li>

      <li class="section-title"><a href="../un_ui/un_ui#functions">Functions</a></li>
        <li><a href="../un_ui/emojiToUnicode">emojiToUnicode</a></li>
        <li><a href="../un_ui/loadImageShader">loadImageShader</a></li>
        <li><a href="../un_ui/show">show</a></li>

      <li class="section-title"><a href="../un_ui/un_ui#enums">Enums</a></li>
        <li><a href="../un_ui/UnmojiFormat">UnmojiFormat</a></li>

      <li class="section-title"><a href="../un_ui/un_ui#typedefs">Typedefs</a></li>
        <li><a href="../un_ui/ContextMenuPreviewBuilder">ContextMenuPreviewBuilder</a></li>
        <li><a href="../un_ui/ResponsiveLayoutWidgetBuilder">ResponsiveLayoutWidgetBuilder</a></li>
        <li><a href="../un_ui/UnTransitionPage">UnTransitionPage</a></li>

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
