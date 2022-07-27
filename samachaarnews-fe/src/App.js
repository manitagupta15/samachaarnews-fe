import "./App.css";

import { userNameContext } from "./Context/context";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Users from "./components/Users";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import ArticleDetails from "./components/ArticleDetails";
import ErrorPage from "./components/ErrorPage";

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("grumpy19");
  const [name, setName] = useState("Paul Grump");

  return (
    <BrowserRouter>
      <userNameContext.Provider
        value={{ name, setName, username, setUsername }}
      >
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route
              path="/articles/articleId/:article_id"
              element={<ArticleDetails />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
