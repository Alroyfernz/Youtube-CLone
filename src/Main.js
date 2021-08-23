import React, { useState } from "react";
import "./_main.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";

import HomeScreen from "./components/homescreen/HomeScreen";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [sidebar, toggleSide] = useState(false);

  const handleClick = () => toggleSide(!sidebar);

  return (
    <>
      <Header handleClick={handleClick} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main ">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
