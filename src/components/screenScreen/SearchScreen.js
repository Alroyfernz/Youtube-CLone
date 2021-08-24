import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const SearchScreen = () => {
  const { query } = useParams();

  const [sidebar, toggleSide] = useState(false);

  const handleClick = () => toggleSide(!sidebar);
  return (
    <>
      <Header handleClick={handleClick} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main ">
          <Row>searchss</Row>
        </Container>
      </div>
    </>
  );
};

export default SearchScreen;
