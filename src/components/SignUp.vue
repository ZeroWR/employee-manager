<template>
    <div class="sign-up">
      <div class="container center-align">
        <h3>Sign Up</h3>
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
            <button class="btn green" v-on:click="signUp" >Sign Up</button>
        </div>
        <div class="row" style="margin-top: 15%;">
            <p>Already have an account with us? Return to the <router-link to="/login">log in</router-link> screen.</p>
        </div>
      </div>
  </div>
</template>

<script>
    import firebase from 'firebase'   
    export default {
        name: 'signup',
        data: function() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        swal('Your account has been created!')
                        this.$router.replace('acct')
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