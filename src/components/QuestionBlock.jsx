import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

const Container = styled.section`
  position: relative;
  padding-top: 250px;
  overflow: hidden;
  height: 850px;
  background-color: #FFFFFF;
  background-image: url("/Blue.svg");
  background-repeat: no-repeat;
  background-position: left 70px;
  background-size: 500px auto;
`;

const All_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff2d59;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;

  & span {
    display: inline-block;
    font-size: 42px;
    font-weight: 600;
    color: #111029;
    max-width: 1000px;
    line-height: 1.2;
    margin-top: 20px;
  }

  & p {
    margin: 0;
  }
`;

const FAQContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const QuestionItem = styled.div`
  background-color: #ffffff;
  border: 2px solid ${(props) => (props.isopen ? "#4C40F7" : "#E0E0E0")};
  border-radius: 8px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const QuestionHeader = styled.div`
  padding: 22px 28px;
  font-size: 18px;
  font-weight: 400;
  color: #111029;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;

  svg {
    transition: transform 0.2s ease;
    color: #111029;
    ${(props) => props.isopen && "transform: rotate(180deg);"}
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 0 28px;
  opacity: ${(props) => (props.isopen ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const Answer = styled.div`
  max-height: ${(props) => (props.isopen ? "500px" : "0")};
  opacity: ${(props) => (props.isopen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.2s ease;
  padding: ${(props) => (props.isopen ? "20px 28px 22px 28px" : "0 28px")};
  font-size: 18px;
  color: #6b6b6b;
  line-height: 1.6;
  text-align: left;
`;

function QuestionBlock() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      q: "What are the services provided to customers?",
      a: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.",
    },
    {
      q: "How can I submit a proposal for cooperation?",
      a: "I don`t know",
    },
    {
      q: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
      a: "I don`t know",
    },
    {
      q: "How do I get the payment complete?",
      a: "I don`t know",
    },
    {
      q: "How long can the collaboration last?",
      a: "I don`t know",
    },
  ];

  return (
    <Container>
      <All_container>
        <p>Frequently Ask Question</p>
        <span>Some of our frequently asked questions</span>
      </All_container>

      <FAQContainer>
        {questions.map((item, index) => (
          <QuestionItem key={index} isopen={openIndex === index}>
            <QuestionHeader
              onClick={() => toggleQuestion(index)}
              isopen={openIndex === index}
            >
              {item.q}
              <ChevronDown isopen={openIndex === index ? 1 : 0} />
            </QuestionHeader>
            <Divider isopen={openIndex === index} />
            <Answer isopen={openIndex === index}>{item.a}</Answer>
          </QuestionItem>
        ))}
      </FAQContainer>
    </Container>
  );
}

export default QuestionBlock;