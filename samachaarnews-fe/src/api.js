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

exports.fetchArticleById = (article_id) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

exports.patchArticleVotes = (article_id, vote) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  const input = { inc_votes: +vote };
  return path
    .patch(`/articles/${article_id}`, input)
    .then(({ data: { article } }) => {
      return article;
    });
};

exports.fetchComments = (article_id) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });
  return path
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

exports.postComment = (newComment, article_id) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });

  return path
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

exports.deleteComment = (commentId) => {
  const path = axios.create({
    baseURL: "https://nc-news-samachaara.herokuapp.com/api",
  });

  return path.delete(`comments/${commentId}`).then(({ statusText }) => {
    return statusText;
  });
};
