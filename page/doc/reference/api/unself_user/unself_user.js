import React from 'react';

export default function RawHtml() {
  const data = `<main>

  <div id="dartdoc-main-content" class="main-content">
    
      <div>
<h1><span class="kind-library">unself_user</span> library 
    <a href="https://dart.dev/null-safety" class="feature feature-null-safety" title="Supports the null safety language feature.">Null safety</a>
 
</h1></div>

    


    <section class="summary offset-anchor" id="classes">
      <h2>Classes</h2>

      <dl>
        <dt id="IUserService">
  <span class="name "><a href="unself_user/IUserService">IUserService</a></span> 

</dt>
<dd>
  An interface for UserService
</dd>

        <dt id="UserService">
  <span class="name "><a href="unself_user/UserService">UserService</a></span> 

</dt>
<dd>
  UserService description
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
  <li><a href="index">unself_user</a></li>
  <li class="self-crumb">unself_user library</li>
</ol>


    <h5><span class="package-name">unself_user</span> <span class="package-kind">package</span></h5>
    <ol>
      <li class="section-title">Libraries</li>
      <li><a href="unself_user/unself_user">unself_user</a></li>
</ol>

  </div>

  <div id="dartdoc-sidebar-right" class="sidebar sidebar-offcanvas-right">
    <h5>unself_user library</h5>
    <ol>
      <li class="section-title"><a href="unself_user/unself_user#classes">Classes</a></li>
        <li><a href="unself_user/IUserService">IUserService</a></li>
        <li><a href="unself_user/UserService">UserService</a></li>








</ol>

  </div><!--/sidebar-offcanvas-right-->

</main>`;

  return (
    <div
      dangerouslySetInnerHTML={{__html: data}}
    />
  );
}
