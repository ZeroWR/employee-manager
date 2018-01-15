<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <!-- <div class="container"> -->
        <router-view/>
      <!-- </div> -->
    </main>
    <footer>
      <mat-footer />
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import swal from 'sweetalert'

export default {
  name: 'app',
  components: {
    Navbar,
    'mat-footer': Footer
  }
}
</script>

<style>
    #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
      
</style>
