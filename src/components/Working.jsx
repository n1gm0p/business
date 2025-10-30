import React from "react";
import styled from "styled-components";

import space1 from "/space1.png";
import space2 from "/space2.png";
import space3 from "/space3.png";
import space4 from "/space4.png";
import space5 from "/space5.png";
import space6 from "/space6.png";

const Container = styled.section`
  padding-top: 200px;
  text-align: center;
`;

const All_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff2d59;
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  & span {
    display: inline-block;
    font-size: 42px;
    font-weight: 600;
    color: #111029;
    max-width: 990px;
    white-space: normal;
    line-height: 1.2;
    margin-top: 20px;
  }

  & p {
    margin: 0;
  }
`;

const Card_container = styled.div`
  display: grid;
  grid-template-columns: 353px 352px 353px; 
  justify-content: center;
  column-gap: 32px; 
  row-gap: 30px;
  margin-top: 60px;
`;

const PhotoCard = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: -2px 2px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;

  ${(props) =>
        props.lift &&
        `
    transform: translateY(-80px);
  `}
    ${(props) =>
        props.rog &&
        `
    transform: translateY(-131px);
  `}
`;

const Caption = styled.div`
  position: absolute;
  bottom: 18px;
  left: 25px;
  color: white;
  font-size: 17px;
  font-weight: 300;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
`;

function Working() {
    return (
        <Container>
            <All_container>
                <p>Working space</p>
                <span>Let’s meet our interior room decoration</span>
            </All_container>

            <Card_container>
                <PhotoCard img={space1} width={353} height={400}>
                    <Caption>Front working space</Caption>
                </PhotoCard>
                <PhotoCard img={space2} width={352} height={530}>
                    <Caption>Meeting corner</Caption>
                </PhotoCard>
                <PhotoCard img={space3} width={353} height={450}>
                    <Caption>Guest meeting room</Caption>
                </PhotoCard>

                <PhotoCard img={space4} width={353} height={550} rog>
                    <Caption>Guest rest room</Caption>
                </PhotoCard>
                <PhotoCard img={space5} width={352} height={420}>
                    <Caption>Single working space</Caption>
                </PhotoCard>
                <PhotoCard img={space6} width={353} height={500} lift>
                    <Caption>Kitchen room</Caption>
                </PhotoCard>
            </Card_container>
        </Container>
    );
}

export default Working;