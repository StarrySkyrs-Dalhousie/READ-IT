import axios from 'axios';

const API = "http://localhost:3000/auth";

class AuthService{
    signin(username, password){
        return axios.post(API+"/signin", {
            "username":username,
            "password":password
        })
        .then(response =>{
            if(response.data.accessToken){
                localStorage.setItem("client", JSON.stringify(response.data))
            }
            return response.data;
        });
    }
    signout() {
        localStorage.removeItem("client");
    }
    signup(username, password, city, role, name) {
        return axios.post(API + "/signup", {
          username,
          city,
          role,
          name,
          password
        });
    }
    fetchCurrentUser() {
        return JSON.parse(localStorage.getItem('client'));;
    }
}

export default new AuthService();