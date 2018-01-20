<template>
  <header>
    <nav>
      <div class="nav-wrapper cyan darken-1">
        <div class="container">
          <router-link to="/">
            <a href="#!" class="brand-logo font-weight">Employee Manager</a>
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
            <li><router-link to="/" ><h3 class="center-align">Navigation</h3></router-link> </li>
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
        isAuth: false,
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          swal('You have successfully logged out')
          this.$router.replace('login')
        })
      },
      checkAuth: function() {
        let isAuth = firebase.auth().onAuthStateChanged(user);
        if(this.user) {
          this.isAuth = true
        }
      }
    },
    // created() {
    //   this.user = firebase.auth().onAuthStateChanged; 
    //   if(this.user) {
    //     this.isAuth = true
    //   }
    // },
  }
</script>

<style scoped>
  @media (max-width: 575.99px) {
    .brand-logo {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
</style>
