import axios from "axios";

export default {
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

const options = {
  method: 'GET',
  url: 'https://charityapi.p.rapidapi.com/organizations/474262060',
  headers: {
    'x-rapidapi-key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
    'x-rapidapi-host': 'charityapi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
