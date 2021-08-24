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
          <Row>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nihil inventore beatae nisi praesentium quasi laborum reiciendis
            quaerat commodi officiis, facilis ut perspiciatis totam recusandae
            ea ipsam aliquam natus ab dolorum exercitationem ratione. Vitae,
            distinctio! Facilis ipsa aut et eos quisquam rem dolores dolorum
            molestiae laudantium ipsum repellendus, quia, mollitia itaque? Sunt
            cumque error adipisci, quod, id eligendi, tenetur nulla consequuntur
            accusantium quae itaque necessitatibus! Totam, amet. Sint rerum
            alias id distinctio blanditiis pariatur praesentium, eius illo
            dolorem numquam. Deserunt maxime quam corporis ad adipisci, eum a
            maiores illum. Ut quibusdam unde quo beatae accusantium molestiae
            consequuntur, repudiandae natus ipsum.
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchScreen;
