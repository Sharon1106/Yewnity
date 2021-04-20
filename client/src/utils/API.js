import axios from "axios";

export default {
    //save new user
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    //grab user by id
    getUser: function(id) {
        return axios.get("/api/users", + id);
    }
}