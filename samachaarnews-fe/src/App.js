import "./App.css";

import { userNameContext } from "./Context/context";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Users from "./components/Users";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("grumpy19");
  const [name, setName] = useState("Paul Grump");

  return (
    <BrowserRouter>
      <userNameContext.Provider value={{ name, setName }}>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={<Users username={username} setUsername={setUsername} />}
            />
            <Route path="/articles" element={<Topics />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles/:topic" element={<Topics />} />
          </Routes>{" "}
          <Footer />
        </div>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
