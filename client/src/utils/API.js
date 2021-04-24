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
  //login route 
  login: function (user ) {
    return axios.post("/api/login", user);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  //grabs events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // grabs specific events
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the user with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a user to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
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
