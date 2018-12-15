<template>
    <div class="container">
        <div class="row">
            <div class="col center size-3-rem margin-top-30">
                Sign Up
            </div>
        </div>
        <div class="row">
            <div class="col center">
                <router-link to="/sign-in" style="color:#3D8B3D">Have an account?</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
            </div>
            <div class="col-7">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" v-model="email" placeholder="Email">
                    </div>
                    <button type="submit" class="btn btn-success align-right"  @click="signUp">Submit</button>
                </form>
            </div>
            <div class="col">
            </div>
        </div>
    </div>
</template>

<script>

import AxiosService from "@/services/baseaxiosservice";

export default {
    name: 'SignUp',
    data() {
        return {
            username: null,
            email: null,
            password: null
        }
    }, 
    methods: {
        signUp() {
            let router = this.$router; 
            let store = this.$store;
            AxiosService.post('users', {
                "user": {
                    "email":this.email,
                    "password":this.password,
                    "username":this.username
                }
            })
            .then((response) => {
                store.dispatch('login', response.data.user)   
                router.push('home');
            })
            .catch((error) => console.log(error));
        }
    }
}
</script>

<style>
    .align-right {
        float: right;
    }

</style>


