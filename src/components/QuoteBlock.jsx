import React from "react";
import styled from "styled-components";
import { Quote as QuoteIconSvg, ArrowRight } from "lucide-react";
import Options from "/Options.svg";

const Container = styled.section`
  position: relative;
  text-align: center;
  overflow: hidden;
  height: 550px;
  background-color: #fe9602;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 900px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QuoteIcon = styled(QuoteIconSvg)`
  width: 64px;
  height: 64px;
  color: white;
  margin-bottom: 20px;
`;

const Text1 = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 700px;
  margin: 0;
`;

const Text2 = styled.span`
  display: inline-block;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
`;

const BottomImage = styled.img`
  width: 72px;
  height: 4px;
  margin-top: 30px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  & svg {
    width: 22px;
    height: 22px;
    color: #6b6b6b;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: #4c40f7;
    & svg {
      color: white;
    }
  }
`;

const LeftButton = styled(ArrowButton)`
  left: 60px;
  & svg {
    transform: rotate(180deg);
  }
`;

const RightButton = styled(ArrowButton)`
  right: 60px;
`;

function QuoteBlock() {
  return (
    <Container>
      <LeftButton>
        <ArrowRight />
      </LeftButton>

      <Content>
        <QuoteIcon />
        <Text1>
          We are serious about providing our best service to all the customers we help. 
          Customers satisfaction is our number one priority.
        </Text1>
        <Text2>
          Mark Garfield <br /> CEO & Head of Product
        </Text2>
        <BottomImage src={Options} alt="options" />
      </Content>

      <RightButton>
        <ArrowRight />
      </RightButton>
    </Container>
  );
}

export default QuoteBlock;