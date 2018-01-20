<template>
  <div class="login">
      <div class="container center-align">
        <h3>Log In</h3>
        <h5>Sign in using your Google account</h5>
        <div id="firebaseui-auth-container"></div>
        <div class="row">
            <h5>Sign in using your email address</h5>
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
            <p>Want to sign up with an email? Click the button!</p>
            <router-link to="/signup" class="btn red">Sign Up</router-link>
        </div>
      </div>
  </div>
</template>

<script>
    import firebase from 'firebase'
    import firebaseui from 'firebaseui'
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
                        this.$router.replace('acct')
                        swal('You have logged in')
                    },
                    (err) => {
                        swal('Oops. ' + err.message)
                    }
                )
            }
        },
        mounted() {
            var uiConfig = {
                signInSuccessUrl: '/acct',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                ]
            };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        } 
    }
</script>

<style scoped>
    h3, h5 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>
