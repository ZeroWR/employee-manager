<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
    <footer>
      <mat-footer />
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    'mat-footer': Footer
  }
}
</script>

<style>
  nav {
    margin-bottom: 10px;
  }
    #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
      
</style>
