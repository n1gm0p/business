import React from "react";
import styled from "styled-components";
import phito from "/Phito.png";
import Shape from "/Shape.svg";

const Container = styled.section`
  position: relative; /* для абсолютного позиционирования фигуры */
  padding-top: 200px;
  text-align: center;
  overflow: hidden; /* чтобы фигура не вылезала за блок */
  height: 1000px; /* высота блока с запасом под фигуру */
`;

const All_container = styled.div`
  position: relative; /* содержимое выше фигуры */
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
`;

const BackgroundShape = styled.img`
  position: absolute;
  bottom: -800px; /* располагаем ближе к низу блока */
  left: 50%;
  transform: translateX(-50%);
  width: 1600px; /* ширина фигуры */
  height: auto;
  z-index: 1; /* позади всего блока */
  pointer-events: none; /* чтобы не мешала кликам */
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