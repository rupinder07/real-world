import AxiosService from './baseaxiosservice';

const LoginService = {

    login(email, password) {
        console.log(email, password);
        return AxiosService.post('users/login', {
            "user": {
              "email": email,
              "password": password
            }
          });
    }
}

export default LoginService;