import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled(Link)`
  width: 258px;
  height: 320px;
  background-color: #F5F5F5;
  border-radius: 25px;
  margin-top: 100px;
  border: none;
  text-decoration: none;
  color: inherit;
  & img {
    height: 250px;
    width: 250px;
  }
`;

const Card = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  color: #000; 
  & p {
    margin-left: 20px;
  }
  & span {
    padding-left: 20px;
    color: #46A358;
  }
`;

function Item({ name, price, image }) {
  return (

      <Container to="shop">
      <Card>
        <img src={image} alt={name} />
        <p>{name}</p><span>{price}</span>
      </Card>
    </Container>

          

  );
}

export default Item;
