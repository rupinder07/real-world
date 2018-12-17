<template>
  <div class="container">
        <div class="row">
            <div class="col center size-3-rem margin-top-30">
                Sign In
            </div>
        </div>
        <div class="row">
            <div class="col center">
                <router-link to="/sign-in" style="color:#3D8B3D">Need an account?</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
            </div>
            <div class="col-7">
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" v-model="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-success align-right"  @click="signIn">Submit</button>
                </form>
            </div>
            <div class="col">
            </div>
        </div>
    </div>
</template>

<script>

import LoginService from "@/services/loginservice";

export default {
  name: 'SignIn',
  data() {
    return {
      email: null,
      password: null,
      showError: false
    }
  },
  methods: {
    signIn() {
       let store = this.$store;
       let router = this.$router; 
       LoginService.login(this.email, this.password)
       .then(response => {
          let user = response.data.user;
          store.dispatch('login', user);
          router.push({name: 'home'});
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

