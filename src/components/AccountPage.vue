<template>
  <div class="account">
      <div class="container">
          <div class="row">
            <h1>My Account</h1> 
            <div class="row">
                <div class="col s12 m3 center-align">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <img v-bind:src="photo" style="height: 120px">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <p><span>Name:</span> {{name}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <p><span>Email:</span> {{email}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col s12 m6">     
                   <div class="card-panel grey lighten-5 z-depth-1">
                        <p><span>User ID:</span> {{userId}}</p>
                    </div>
               </div>
            </div>
            <router-link class="btn green" to="/dash">Get to Work</router-link>
            <button v-on:click="logout" class="btn red">Sign Out</button>
          </div>
          <br>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
    data() {
        return {
            name: '',
            email: '',
            userId: '',
            photo: '',
            shown: false
        }
    },
    created() {
        this.user = firebase.auth().currentUser; 
        if(this.user) {
            this.name = this.user.displayName;
            this.email = this.user.email;
            this.userId = this.user.uid; 
            this.photo = this.user.photoURL;
        } 
    },
    methods: {
    logout: function() {
        firebase.auth().signOut().then(() => {
          swal('You have successfully logged out')
          this.$router.replace('login')
        })
      }
    }
}

</script>

<style scoped>
    img {
        margin-top: 20px;
        border-radius: 50%;
        width: 8rem;
    }
</style>

<style scoped>
    .shown {
        display: none;
    }

    span {
        font-weight: 600;
        padding-right: .5rem;
        font-size: 1.2rem;
    }
</style>

