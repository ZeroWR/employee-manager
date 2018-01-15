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
            <li><router-link to="/login">Log In</router-link></li>
            <li><router-link to="/acct">My Account</router-link></li>
            <li><router-link to="/dash">Dashboard</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li class="center-align"><button v-on:click="logout" class="btn red">Sign Out</button></li>
          </ul>
          <ul class="side-nav" id="mobile-nav">
            <li><h3 class="cyan darken-2 center-align">Header</h3></li>
            <li><router-link to="/login">Log In</router-link></li>
            <li><router-link to="/acct">My Account</router-link></li>
            <hr/>
            <li><router-link to="/dash">Dashboard</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li class="center-align"><button v-on:click="logout" class="btn red">Sign Out</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>  
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'hello',
    data() {
      return {

      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          swal('You have successfully logged out')
          this.$router.replace('landing')
        })
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin-top: 0;
    color: #fff;
    display: block;
    font-size: 3rem;
    font-weight: 400;
    height: 6rem;
    padding-top: 1rem;
  }
</style>
