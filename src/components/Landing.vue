<template>
    <div>
        <div class="landing-img">
            <div class="center-align">
                <h1>Welcome to the Employee Manager</h1>
                <h5>Log in below or create an account to get started</h5>
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

    @media (min-width: 1200px) {
        h1 {
            padding-top: 20%;
        }
    }

    @media (max-width: 576px) {
        h1 {
            padding-top: 50%;
        }
    }
</style>
