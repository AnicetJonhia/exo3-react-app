import { Fragment } from "react";
import React from "react";
import { Container } from "reactstrap";

import CardPlants from "./components/CardPlants";
import Header from "./components/Header";
import Checking  from "./components/Checking";
import Prix from "./components/Prix";

const  App = ()  =>{ 
  return(
    <Fragment>
        <Container>
            <Header></Header>
            <hr />
            <Checking></Checking>
            <CardPlants></CardPlants>
            <hr />
            <Prix></Prix>
        </Container>
    </Fragment>
  );
}

export default App;