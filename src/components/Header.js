import React from "react";
import feuille from '../assets/images/feuille.jpeg';
import { Container,Row } from "reactstrap";


const Header = ()  => {
    return(
        
        <header>
             <Container>
             <Row className="pt-0 mt-50 position-relative align-items-center justify-content-end w-100">
                    <img src={feuille} alt="feuille" style={{ width: 36 }} />
                    <h2 style={{ margin: 0 }}>PLANTES</h2>
                </Row>
            </Container>
        </header>
    );
}

export default Header;