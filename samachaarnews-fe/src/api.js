const axios = require("axios");

exports.fetchUsers = () => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

exports.fetchArticles = () => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path.get(`/articles`).then(({ data: { articles } }) => {
    return articles;
  });
};

exports.fetchArticlesByTopic = (topic) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path.get(`/articles?topic=${topic}`).then(({ data: { articles } }) => {
    return articles;
  });
};
