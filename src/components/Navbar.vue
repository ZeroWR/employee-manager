<template>
  <header>
    <nav>
      <div class="nav-wrapper cyan darken-1">
        <div class="container">
          <router-link to="/">
            <a href="#!" class="brand-logo">Employee Manager</a>
          </router-link>
          <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="fa fa-bars" style="font-size: 2rem;"></i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
          </ul>
          <ul class="side-nav" id="mobile-nav">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>  
</template>
