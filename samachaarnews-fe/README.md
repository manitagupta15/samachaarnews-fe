# About The App

Deployed App link - https://samachaar-news.netlify.app

Link to backend repository (API) - https://github.com/manitagupta15/samachaarNews

Heroku Link - https://nc-news-samachaara.herokuapp.com/

It makes requests to the back end hosted on Heroku to get data and manipulate it based on the request made.

Samachaar News is a social news aggregation, web content rating, and discussion website.

Samachaar News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add and delete comments about an article.

## Wire frames

Link to the planning of the app - https://www.figma.com/file/cDbZPEEZvi0xnx64CC9EYP/Samachaar-News-FrontEnd?node-id=5%3A239

During the designing of the app, decisions were made to change the look slightly to make the app more accessable and easy to use.

## Endpoints

'/' -> Shows a list of all articles.

'/articles/:topic -> Shows articles that are :topic specific.

'/articles/articleId/:article_id' -> Shows the article details with that article_id.

'/users' -> Shows a list of all users and can also select specific users.

## Installation

Run the following command to install all the dependencies -

```bash
npm install
```

## To run the app locally

```bash

git clone https://github.com/manitagupta15/samachaarnews-fe.git

cd samachaarnews-fe

npm start
```

## Versions

```bash
    - developed on VS Code Version: 1.68.1
    - PostgreSQL Version: 2.5.8
    - Node Version: 18.1.0
```
