const axios = require("axios");

export function getRequest(title, location, type) {
  let query = title + " " + type + " position " + location + " indeed";
  return axios
    .get("http://localhost:5000", {
      params: {
        search: query
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}
