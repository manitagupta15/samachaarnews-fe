import "./App.css";

import { userNameContext } from "./Context/context";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Users from "./components/Users";

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Paul Grump");

  return (
    <BrowserRouter>
      <userNameContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <Header />
          <Navigation />

          <Routes>
            <Route
              path="/"
              element={<Users username={username} setUsername={setUsername} />}
            />
          </Routes>
        </div>
      </userNameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
