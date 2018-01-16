<template>
  <div class="account">
      <div class="container">
          <div class="row">
            <h1>My Account</h1> 
            <div class="row">
                <div class="col s12">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                        <div class="col s2">
                            <img src="../assets/avatar.png" alt="" class="circle responsive-img cyan darken-3"> <!-- notice the "circle" class -->
                        </div>
                        <div class="col s10">
                            <span class="black-text">
                                Your account information can be found below, click the pencil icon to update your Name.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <!-- Name and change name -->
            <!-- <div class="fixed-action-btn">
                <div class="btn-floating btn-large green lighten-2">
                    <i class="fa fa-pencil" v-on:click="shown = !shown"></i>
                </div>
            </div> -->
            <!-- <div class="row">
                <div class="col s12 m6 offset-m3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <p>Name: {{name}}</p>
                    </div>
                </div>
            </div> -->
            <!-- <div class="row" v-bind:class="{shown: !shown}">
                <div class="col s12 m6 offset-m3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <form>
                            <input type="text" placeholder="Name">
                            <button class="btn cyan darken-2">Change Name</button>
                        </form>
                    </div>
                </div>
            </div> -->
            <div class="row">
                <div class="col s12 m6 offset-m3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <p>Email: {{email}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col s12 m6 offset-m3">     
                   <div class="card-panel grey lighten-5 z-depth-1">
                        <p>User ID: {{userId}}</p>
                    </div>
               </div>
            </div>
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
            shown: false
        }
    },
    created() {
        this.user = firebase.auth().currentUser; 
        if(this.user) { 
            this.email = this.user.email;
            this.userId = this.user.uid; 
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
</style>

