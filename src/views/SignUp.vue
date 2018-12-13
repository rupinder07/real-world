<template>
    <div class="container">
        
        <div class="sign-up">Sign up</div>
        <a href="#">Have an account?</a>
        <input placeholder="Username" v-model="username"/>
        <input placeholder="Email" v-model="email" type="email"/>
        <input placeholder="Password" v-model="password" type="password"/>
        <button @click="signUp">Sign up</button>
    
    </div>
</template>

<script>

import AxiosService from "@/services/baseaxiosservice";
import { userInfo } from 'os';

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
            AxiosService.post('users', {
                "user": {
                    "email":this.email,
                    "password":this.password,
                    "username":this.username
                }
            })
            .then((response) => {
                let user = response.user;
                console.log(user.id);
            })
            .catch((error) => console.log(error));
        }
    }
}
</script>

