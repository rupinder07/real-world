<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between container">
        <a class="navbar-brand">conduit</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="home">Home</router-link>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" v-if="isLoggedIn" to="editor">New Article</router-link>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" v-if="isLoggedIn" to="article">Settings</router-link>
                <span class="sr-only">(current)</span>
            </li>
            <li class="navbar-text" v-if="isLoggedIn">{{ userName }}</li>
            <li class="nav-item">
                <router-link class="nav-link" v-if="!isLoggedIn" to="sign-in"> Sign In</router-link>
                    <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
                    <router-link class="nav-link" v-if="!isLoggedIn" to="sign-up"> Sign Up</router-link>
                    <span class="sr-only">(current)</span>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'RealWorldHeader',
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.getUser != null;
        },

        userName: function() {
            return this.$store.getters.getUser.username;
        }
    }
}
</script>


<style>
    .navbar-brand {
        clear: both;
        padding: 10px;
        border-bottom: 1px solid #e8e8e8;
    }

    .clear {
        clear: both;
    }

    .logo-out {
        float: left;
        position: relative;
    }

    .nav-right {
        float: right;
        position: relative;
    }

    .nav-right ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .nav-right ul li {
        list-style: none;
        margin: 0;
        padding: 3px 5px;
        display: inline-block;
    }

    .logo-out .logo {
        color: #5cb85c;
        font-family: titillium web,sans-serif;
        font-size: 1.5rem;
        padding-top: 0;
        margin-right: 2rem;
    }

    .navbar-nav li.nav-item {
        display: inline-block;
        position: relative;
    }

    .center {
        text-align: center;
    }

    .size-3-rem {
        font-size: 3rem
    }

</style>


