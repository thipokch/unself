import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">settings_data</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="SettingsDataPage">
  <span class="name "><a href="settings_data/SettingsDataPage">SettingsDataPage</a></span> 

</dt>
<dd>
  A description for SettingsDataPage
</dd>

        <dt id="SettingsDataSliver">
  <span class="name "><a href="settings_data/SettingsDataSliver">SettingsDataSliver</a></span> 

</dt>
<dd>
  Sliver of the SettingsDataPage.
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
  <li><a href="index">un_settings_data</a></li>
  <li class="self-crumb">settings_data library</li>
</ol>


    <h5><span class="package-name">un_settings_data</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="settings_data/settings_data">settings_data</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>settings_data library</h5>
    <ol>
      <li class="section-title"><a href="settings_data/settings_data#classes">Classes</a></li>
        <li><a href="settings_data/SettingsDataPage">SettingsDataPage</a></li>
        <li><a href="settings_data/SettingsDataSliver">SettingsDataSliver</a></li>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
