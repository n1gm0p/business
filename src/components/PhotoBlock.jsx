import React from "react";
import styled from "styled-components";
import phito from "/Phito.png";
import Shape from "/Shape.svg";

const Container = styled.section`
  position: relative;
  padding-top: 200px;
  text-align: center;
  overflow: hidden;
  height: 1000px;
`;

const All_container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff2d59;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  & span {
    display: inline-block;
    font-size: 42px;
    font-weight: 500;
    color: #111029;
    max-width: 1120px;
    white-space: normal;
    line-height: 1.2;
    margin-top: 8px;
  }

  & p {
    margin: 0;
  }
`;

const Photo = styled.img`
  width: 1120px;
  height: 650px;
  object-fit: cover;
  margin-top: 40px;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 25px rgba(9, 0, 255, 0.4);

`;

const BackgroundShape = styled.img`
  position: absolute;
  bottom: -800px;
  left: 50%;
  transform: translateX(-50%);
  width: 1600px;
  height: auto;
  z-index: 1;
  pointer-events: none;
`;

function PhotoBlock() {
  return (
    <Container>
      <BackgroundShape src={Shape} alt="Background Shape" />
      <All_container>
        <p>Our Documentation</p>
        <span>
          See what our profile is like and how we work for your business
        </span>
        <Photo src={phito} alt="Phito" />
      </All_container>
    </Container>
  );
}

export default PhotoBlock;