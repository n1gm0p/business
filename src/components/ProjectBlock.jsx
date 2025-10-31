import React from "react";
import styled from "styled-components";
import { MoveRight } from "lucide-react";

const Container = styled.section`
  padding-top: 150px;
  text-align: center;
`;

const Card_container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const InnerContainer = styled.article`
  width: 1050px;
  height: 320px;
  background-color: #ffcc00;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: -2px 2px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease;
`;

const Text_Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text2 = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const Text3 = styled.p`
  margin: 12px 0 35px 0;
  font-weight: 500;
  font-size: 36px;
  color: #ffffff;
  line-height: 1.3;
`;

const ActionButton = styled.button`
  padding: 19px 42px;
  background-color: #4C40F7;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 5px 20px rgba(214, 41, 41, 0.6);
  transition: all 0.3s ease;
  svg {
    transition: transform 0.3s ease;
  }
`;

const Card = ({ title, text, buttonText }) => (
  <InnerContainer>
    <Text_Container>
      <Text2>{title}</Text2>
      <Text3>{text}</Text3>
      <ActionButton>
        {buttonText}
        <MoveRight />
      </ActionButton>
    </Text_Container>
  </InnerContainer>
);

function ProjectBlock() {
  return (
    <Container>
      <Card_container>
        <Card
          title="Are You Ready For"
          text="Start a New Project"
          buttonText="Start Now"
        />
      </Card_container>
    </Container>
  );
}

export default ProjectBlock;