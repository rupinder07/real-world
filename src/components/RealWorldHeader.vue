<template>
<nav class="navbar-brand">
    <div class="logo-out">
        <div class="logo">conduit</div>
    </div>
    <div class="nav-right">
        <ul>
            <li>Home</li>
            <li v-if="isLoggedIn"> <router-link to="/sign-in">New Article</router-link></li>
            <li v-if="isLoggedIn"> <router-link to="/sign-in">Settings</router-link></li>
            <li v-if="isLoggedIn"> <router-link to="/sign-in">{{ userName }}</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/sign-in">Sign In</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/sign-up">Sign Up</router-link></li>
        </ul>
    </div>
    <div class="clear"></div>
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

</style>


