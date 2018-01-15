<template>
    <div>
        <div class="landing-img">
            <div class="center-align">
                <h1 >Testing the Overlay Header</h1>
                <h5>Here is some information about the website to get you started.</h5>
                <router-link to="/login" class="btn red">Log In</router-link>
                <router-link to="/signup" class="btn red">Sign Up</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    h1, h5 {
        z-index: 1000000000;
        color: #fff;
        text-shadow: 2px 2px 5px black;
        margin-top: 0;
        margin-bottom: 2rem;
    }
    h1 {
        padding-top: 35%;
    }
    
    .landing-img {
        background-image: url('../assets/corporate1.jpeg');
        background-position: center center;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-size: cover;
        min-height: 100vh;
    }

    .btn {
        margin-right: 1rem;
        margin-left: 1rem;
    }
</style>
