<template>
  <div class="signin">
    <div class="row">
      <label>Username</label>
      <input v-model="username"/>
    </div>
    <div class="row">
      <label>Password</label>
      <input v-model="password" type="password"/>
    </div>
    <div class="row" v-if="showError">
      <label>Invalid username/password</label>
    </div>
    <div class="row">
      <button @click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script>

import LoginService from "@/services/loginservice";

export default {
  name: 'SignIn',
  data() {
    return {
      username: null,
      password: null,
      showError: false
    }
  },
  methods: {
    signIn() {
       let store = this.$store;
       let router = this.$router; 
       LoginService.login(this.username, this.password)
       .then(response => {
          let user = response.data.user;
          store.dispatch('login', user);
          router.push('home');
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style>
  .signin {
    text-align: center;
    background-color: #f6f6f6;
    border: 1px solid #ccc;
    padding: 100px;
  }

  .signin .row {
    margin-bottom: 15px;
  }

  .signin label {
    padding: 3px 5px;
  }

   .signin input {
     padding: 5px;
     border: 1px solid #a8a8a8;
   }

  .signin input-field {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: x-large;
  }
</style>

