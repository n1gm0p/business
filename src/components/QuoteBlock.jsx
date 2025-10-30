import React from "react";
import styled from "styled-components";
import { Quote as QuoteIconSvg, ArrowRight } from 'lucide-react';
import Options from "/Options.svg";

const Container = styled.section`
  position: relative;
  padding-top: 50px;
  text-align: center;
  overflow: hidden;
  height: 500px;
  background-color: #FE9602;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const QuoteIcon = styled(QuoteIconSvg)`
  width: 60px;
  height: 60px;
  color: white;
  margin-bottom: 44px;
  margin-top: 40px;
`;

const Text1 = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: white;
  max-width: 780px;
  line-height: 1.5;
  margin: 0 auto 44px auto;
`;

const Text2 = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-bottom: 8px;
  display: block;
`;

const Text3 = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-bottom: 30px;
  display: block;
`;

const BottomImage = styled.img`
  width: 72px;
  height: 4px;
  margin-bottom: 50px;
`;

const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4c40f7;
    & svg {
      color: white;
    }
  }
    
  svg {
    color: #ABAFC7;
    width: 20px;
    height: 20px;
  }
`;

const LeftButton = styled(NavButton)`
  left: 150px;
`;

const RightButton = styled(NavButton)`
  right: 150px;
`;

function QuoteBlock() {
  return (
    <Container>
      <Content>
        <QuoteIcon />
        <Text1>
          We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.
        </Text1>
        <Text2>
          Mark Garfield
        </Text2>
        <Text3>
          CEO & Head of Product
        </Text3>
        <BottomImage src={Options} alt="options" />
      </Content>
      <LeftButton>
        <ArrowRight style={{ transform: "rotate(180deg)" }} />
      </LeftButton>
      <RightButton>
        <ArrowRight />
      </RightButton>
    </Container>
  );
}

export default QuoteBlock;