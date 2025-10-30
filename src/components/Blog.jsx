import React from "react";
import styled from "styled-components";
import {
  Flame,
  PenTool,
  LaptopMinimal,
  Smartphone,
  Building2,
  ChartColumnBig,
  MoveRight,
} from "lucide-react";

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
  font-weight: 600;
  text-align: center;

  & span {
    display: inline-block;
    font-size: 42px;
    font-weight: 500;
    color: #111029;
    max-width: 990px;
    white-space: normal;
    line-height: 1.2;
    margin-top: 8px;
  }

  & p {
    margin: 0;
  }
`;

const Card_container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 352px);
  justify-content: center;
  column-gap: 0;
  row-gap: 60px;
  margin-top: 60px;
`;

const IconCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  transition: all 0.5s ease;
  /* тень цветная по bgColor */
  box-shadow: 2px 8px 30px ${(props) => props.bgColor}99;

  & svg {
    width: 44px;
    height: 44px;
    stroke: white;
    transition: all 0.5s ease;
  }
`;

const InnerContainer = styled.article`
  width: 352px;
  height: 458px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: -2px 2px 30px rgba(0, 0, 0, 0.07);
  padding-top: 90px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #4c40f7;
    color: #ffffff;
    box-shadow: -10px 10px 90px rgba(76, 64, 247, 0.6);

    h3,
    p,
    a {
      color: #ffffff;
      transition: all 0.5s ease;
    }

    ${IconCircle} {
      background-color: #ffffff;
      box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.2);
      & svg {
        stroke: #4c40f7;
      }
      transition: all 0.5s ease;
    }
  }
`;

const circleColors = [
  "#F12DFF",
  "#FF2D59",
  "#4ADB61",
  "#FFCC00",
  "#007BFF",
  "#FF6800",
];

const Text_Container = styled.div`
  padding: 0 30px 24px 30px;
  text-align: center;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Text2 = styled.h3`
  margin: 0;
  margin-top: 90px;
  font-weight: 600;
  font-size: 20px;
  color: #111029;
`;

const Text3 = styled.p`
  margin: 25px 20px 0 20px;
  font-weight: 400;
  font-size: 20px;
  color: #6B6B6B;
  line-height: 1.5;
`;

const ReadCircle = styled.div`
  margin-top: 40px;
  margin-left: 150px;
  width: 45px;
  height: 45px;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    width: 18px;
    height: 18px;
    color: #4c40f7;
    stroke-width: 3;
  }
`;

const Card = ({ Icon, title, text, bgColor }) => (
  <InnerContainer>
    <IconCircle bgColor={bgColor}>
      <Icon />
    </IconCircle>

    <Text_Container>
      <Text2>{title}</Text2>
      <Text3>{text}</Text3>
      <ReadCircle>
        <MoveRight />
      </ReadCircle>
    </Text_Container>
  </InnerContainer>
);

function Blog() {
  return (
    <Container>
      <All_container>
        <p>Our Services</p>
        <span>
          The various services we provide to make your business more powerful
        </span>
      </All_container>

      <Card_container>
        <Card
          Icon={Flame}
          title="Ideate"
          text="We help you develop creative ideas so that your business can grow more rapidly."
          bgColor={circleColors[0]}
        />
        <Card
          Icon={PenTool}
          title="Design"
          text="We provide services with the best designs from our designer team for your business."
          bgColor={circleColors[1]}
        />
        <Card
          Icon={LaptopMinimal}
          title="Web Development"
          text="We help develop company websites to be more professional and attractive."
          bgColor={circleColors[2]}
        />
        <Card
          Icon={Smartphone}
          title="App Development"
          text="We help develop company mobile apps to be more professional and attractive."
          bgColor={circleColors[3]}
        />
        <Card
          Icon={Building2}
          title="Business Growth"
          text="We also provide services by providing input for your business growth."
          bgColor={circleColors[4]}
        />
        <Card
          Icon={ChartColumnBig}
          title="Digital Marketing"
          text="We also help you market your products through an online marketplace."
          bgColor={circleColors[5]}
        />
      </Card_container>
    </Container>
  );
}

export default Blog;