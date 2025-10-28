import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";

import photo_m from "/products/product1/main.png";
import photo_1 from "/products/product1/1.png";
import photo_2 from "/products/product1/2.png";
import stare from "/products/view/Stare.svg";
import stard from "/products/view/Stard.svg";
import Heart from "/products/view/heart.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 0 90px;
`;

const Details = styled.div``;

const Line = styled.div`
  border-bottom: 1px solid #46A358;
  opacity: 0.5;
  width: 565px;
  padding-top: 10px;
`;

const Column = styled.div`
  display: inline;
  width: 100px; 
  & img {
    padding-bottom: 40px;
  }
`;

const Photos = styled.div`
  display: flex;
`;

const MainPhoto = styled.div`
  height: 444px;
  width: 444px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 153px;
`;

const Name = styled.div``;

const Price = styled.div``;

const Review = styled.div`
  display: flex;
  & p {
    font-weight: 300;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-top: 62px;
  margin-left: 90px;
  align-items: center;
  & img {
    height: 15px;
    width: 15px;
  }
  & p {
    padding-left: 5px;
  }
  font-size: 15px;
`;


const Container1 = styled.div`
  width: 240px;
  height: 60px;
  font-size: 28px;
  font-weight: 700;
  & span {
    display: flex;
    color: #46A358;
    font-size: 22px;
    margin-top: 20px;
  }
`;


const PriceContainer = styled.div`
  display: flex;
`;


const Description = styled.div`
  padding-top: 15px;
  font-size: 15px;
  width: 570px;
  line-height: 24px;

  & h3 {
    font-weight: 400;
  }

  & p {
    font-size: 14px;
    font-weight: 300;
    padding-top: 10px;
  }
`;




const Piece = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  margin-top: 41px;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`;

const ButtonT1 = styled.button`
  font-weight: 500;
  font-size: 25px;
  height: 34px;
  width: 34px;
  border-radius: 20px;
  color: white;
  background-color: #46A358;
  border: 1px solid #46A358;
  &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  } 
  & span {
    display: flex;
    font-size: 2rem;
    width: 50px;
    text-align: center;
    align-items: center;
  }
`;

const OffsetContainer = styled.div`
  display: flex;
`;

const ButtonT2 = styled.button`
  margin-left: 25px;
  font-weight: 700;
  height: 34px;
  width: 140px;
  border-radius: 9px;
  color: white;
  background-color: #46A358;
  border: 1px solid #46A358;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  } 
`;

const ButtonT3 = styled.button`
  margin-left: 10px;
  font-weight: 700;
  height: 38px;
  width: 160px;
  border-radius: 9px;
  color: #46A358;
  background-color: white;
  border: 1px solid #46A358;
  &:hover {
    background-color: #d6d6d6;
  } 
`;

const ButtonT4 = styled.button`
  font-size: 25px;
  margin-left: 10px;
  font-weight: 400;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  color: #46A358;
  background-color: white;
  border: 1px solid #46A358;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #d6d6d6;

  } 
`;

const ContainerEnd = styled.div`
  word-break: break-all;
  font-size: 15px;
  margin-top: 20px;
`;

const End = styled.div`
  color: #A5A5A5;

  & span {
    color: #727272;
  }
`;

const BuyNow = styled.div`
  float: right;
`;

function View() {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value > 1 ? value - 1 : 1);
  };

  return (
    <Container>

      <OffsetContainer>
        <Photos>
          <Column>
            <img src={photo_1} alt="Additional photo 1" />
            <img src={photo_2} alt="Additional photo 2" />
          </Column>
          <MainPhoto>
            <img src={photo_m} alt="Main product photo" />
          </MainPhoto>
        </Photos>
        <Details>
          <PriceContainer>
            <Container1>
              <Name>Barberton Daisy</Name>
              <span>
                <p>$</p><Price>119.00</Price>
              </span>
            </Container1>
            <Review>
              <Stars>
                <img src={stare} alt="Star" />
                <img src={stare} alt="Star" />
                <img src={stare} alt="Star" />
                <img src={stare} alt="Star" />
                <img src={stard} alt="Half star" />
                <p>19 Customer Review</p>
              </Stars>
            </Review>
          </PriceContainer>
          <Line />
          <Description>
            <h3>Short Description:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
            </p>
          </Description>
          <Piece>
            <span>
              <ButtonT1 onClick={decrement}>-</ButtonT1>
              <span>{value}</span>
              <ButtonT1 onClick={increment}>+</ButtonT1>
            </span>
            <BuyNow>
            <Animated animationIn="tada" animationOut="fadeOut" isVisible={true} animationInDelay={500}>
              <ButtonT2 as={Link} to="../basket">BUY NOW</ButtonT2>
            </Animated>
              
            </BuyNow>
            <span>
              <ButtonT3>ADD TO CART</ButtonT3>
            </span>
            <span>
              <ButtonT4><img src={Heart} alt="Wishlist" /></ButtonT4>
            </span>
          </Piece>
          <ContainerEnd>
            <End>SKU: <span>1995751877966</span></End>
            <End>Categories: <span>Potter Plants</span></End>
            <End>Tags: <span>Home, Garden, Plants</span></End>
          </ContainerEnd>
        </Details>
      </OffsetContainer>
    </Container>
  );
}

export default View;
