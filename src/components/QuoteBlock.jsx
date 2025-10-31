import React, { useState } from "react";
import styled from "styled-components";
import { Quote as QuoteIconSvg, ArrowRight } from "lucide-react";

const Container = styled.section`
  position: relative;
  padding-top: 50px;
  text-align: center;
  overflow: hidden;
  height: 550px;
  background-color: #fe9602;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;
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
  font-weight: 300;
  color: white;
  max-width: 780px;
  line-height: 1.5;
  margin: 0 auto 50px auto;
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

const Indicators = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 50px;
`;

const Indicator = styled.div`
  width: 15px;
  height: 4px;
  border-radius: 2px;
  background-color: ${(props) => (props.active ? "white" : "#d9d9d9")};
  transition: background-color 0.3s ease;
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
    color: #abaFC7;
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
  const quotes = [
    {
      text: "We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.",
      name: "Mark Garfield",
      position: "CEO & Head of Product",
    },
    {
      text: "dont khow",
      name: "dont khow",
      position: "dont khow",
    },
    {
      text: "dont khow",
      name: "dont khow",
      position: "dont khow",
    },
    {
      text: "dont khow",
      name: "dont khow",
      position: "dont khow",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <Container>
      <Content key={current}>
        <QuoteIcon />
        <Text1>{quotes[current].text}</Text1>
        <Text2>{quotes[current].name}</Text2>
        <Text3>{quotes[current].position}</Text3>

        <Indicators>
          {quotes.map((_, index) => (
            <Indicator key={index} active={index === current} />
          ))}
        </Indicators>
      </Content>

      <LeftButton onClick={handlePrev}>
        <ArrowRight style={{ transform: "rotate(180deg)" }} />
      </LeftButton>

      <RightButton onClick={handleNext}>
        <ArrowRight />
      </RightButton>
    </Container>
  );
}

export default QuoteBlock;