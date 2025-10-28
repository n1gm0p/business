import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Filtres from './Filters';
import itemsData from './items.json'; 
import {Animated} from "react-animated-css";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-left: 100px;
  grid-template-columns: repeat(3, 300px);
`;

function ItemsComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  return (
    <Container>
       <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true} >
        <Filtres />
       </Animated>
      <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
       <GridContainer>
        {items.map(item => (
            <Item key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </GridContainer> 
      </Animated>
    </Container>
  );
}

export default ItemsComponent;
