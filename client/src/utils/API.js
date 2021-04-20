import axios from "axios";

export default {
<<<<<<< HEAD
    //save new user
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    //grab user by id
    getUser: function(id) {
        return axios.get("/api/users", + id);
    }
}
=======
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
>>>>>>> 172f3c17c35396612d76774cbf51da87d85fb42f
