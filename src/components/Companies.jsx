import React from "react";
import styled from "styled-components";
import Amazon from "/Amazon.svg";


const Container = styled.section`
  position: relative;
  padding-top: 50px;
  text-align: center;
  overflow: hidden;
  height: 600px;
`;

const All_container = styled.div`
  position: relative;
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
    font-weight: 600;
    color: #111029;
    max-width: 1120px;
    white-space: normal;
    line-height: 1.2;
    margin-top: 30px;
  }

  & p {
    margin: 0;
  }
`;

const Photo = styled.img`
  width: 806px;
  height: 130px;
  object-fit: cover;
  margin-top: 150px;
  position: relative;
`;


function Companies() {
  return (
    <Container>
      <All_container>
        <p>Some of Our Great Customers</p>
        <span>
          Some of the companies we have worked with
        </span>
        <Photo src={Amazon} alt="Amazon"/>
      </All_container>
    </Container>
  );
}

export default Companies;