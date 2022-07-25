const axios = require("axios");

exports.fetchUsers = () => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path.get("/users").then(({ data: { users } }) => {
    return users;
  });
};
