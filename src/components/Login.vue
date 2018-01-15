<template>
  <div class="login">
      <div class="container center-align">
        <h3>Log In</h3>
        <div class="row">
            <div class="col s2"></div>
            <div class="input-field col s8">
                <input type="text" v-model="email" required />
                <label>Email</label>
            </div>
            <div class="col s2"></div>
        </div>
        <div class="row">
            <div class="col s2"></div>
            <div class="input-field col s8">
                <input type="password" v-model="password" required />
                <label>Password</label>
            </div>
            <div class="col s2"></div>
        </div>
        <div class="row">
            <button class="btn green" v-on:click="signIn">Log In</button>
        </div>
        <div class="row" style="margin-top: 15%;">
            <p>Don't have an account? Sign up here.</p>
            <router-link to="/signup" class="btn red">Sign Up</router-link>
        </div>
      </div>
  </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
     name: 'login',
     data: function() {
         return {
             email: '',
             password: ''
         }
     },
     methods: {
            signIn: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        swal('You have logged in')
                        this.$router.replace('landing')
                    },
                    (err) => {
                        swal('Oops. ' + err.message)
                    }
                )
            }
        }   
    }
</script>

<style scoped>
    h3 {
        margin-top: 4rem;
    }
</style>
