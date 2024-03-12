import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody , CardText, CardTitle} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWater } from '@fortawesome/free-solid-svg-icons';

import im from '../assets/images/monstera.jpeg';

const CardPlants = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Dahlia",
      category: "classique",
      image: im,
      lumiere: 2,
      eau: 3
    },
    {
      id: 2,
      name: "Rose",
      category: "classique",
      image: im,
      lumiere: 3,
      eau: 1
    },
    {
      id: 3,
      name: "Vanille",
      category: "classique",
      image: im,
      lumiere: 1,
      eau: 2
    },
    {
      id: 4,
      name: "Inc",
      category: "extérieure",
      image: im,
      lumiere: 2,
      eau: 2
    },
    {
      id: 5,
      name: "Tournesol",
      category: "extérieure",
      image: im,
      lumiere: 2,
      eau: 2
    },
  ]);

  const getIcons = (type, value) => {
    const icons = [];
    for (let i = 0; i < value; i++) {
      switch (type) {
        case "lumiere":
          icons.push(<FontAwesomeIcon key={`lumiere-${i}`} icon={faSun} size="sm" color= "yellow"  />);
          break;
        case "eau":
          icons.push(<FontAwesomeIcon key={`eau-${i}`} icon={faWater} size="sm" color="blue"  />);
          break;
        default:
          break;
      }
    }
    return icons;
  };

  return (
    <Container>
      <Row>
        {plants.map((plant) => (
          <Col xs="4" sm="6" md="5" lg="2" className='mt-2' key={plant.id}>
            <Card>
              <CardImg top src={plant.image} alt={plant.name} />
              <CardBody>
                <CardTitle>{plant.name}</CardTitle>
                <CardText>
                  <Row>
                    {getIcons("lumiere", plant.lumiere).map((icon, index) => (
                      <Col key={index}>{icon}</Col>
                    ))}
                  </Row>
                </CardText>
                <CardText>
                  <Row>
                    {getIcons("eau", plant.eau).map((icon, index) => (
                      <Col  key={index}>{icon}</Col>
                    ))}
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardPlants;
