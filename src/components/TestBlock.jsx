import React from "react";
import styled from "styled-components";

import Avatar1 from "/Avatar1.png";
import Avatar2 from "/Avatar2.png";
import Avatar3 from "/Avatar3.png";
import Avatar4 from "/Avatar4.png";
import Avatar5 from "/Avatar5.png";
import Avatar6 from "/Avatar6.png";
import FiveStars from "/FiveStars.svg";

const Container = styled.section`
  padding-top: 90px;
  text-align: center;
  height: 1150px;
  background-color: #F9F9FD;
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
  column-gap: 32px;
  row-gap: 100px;
  margin-top: 100px;
`;

const InnerContainer = styled.article`
  width: 352px;
  height: 370px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  box-shadow: -2px 2px 30px rgba(0, 0, 0, 0.07);
  padding-top: 70px;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: -2px 2px 50px rgba(76, 64, 247, 0.3);
  }
`;

const AvatarCircle = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.1);

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
`;

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
  margin-top: 30px;
  font-weight: 600;
  font-size: 24px;
  color: #111029;
  
`;

const JobTitle = styled.p`
  margin: 4px 0 0 0;
  font-size: 15px;
  font-weight: 400;
  color: #ABAFC7;
`;

const Text3 = styled.p`
  margin: 30px 10px 0 30px;
  font-weight: 400;
  font-size: 18px;
  color: #70798b;
  line-height: 1.5;
  max-width: 288px;
`;

const Stars = styled.img`
  margin-top: 25px;
  width: 120px;
  height: 15px;
  margin-left: 116px;
`;

const Card = ({ avatar, title, job, text }) => (
  <InnerContainer>
    <AvatarCircle>
      <img src={avatar} alt={title} className="avatar" />
    </AvatarCircle>

    <Text_Container>
      <Text2>{title}</Text2>
      <JobTitle>{job}</JobTitle>
      <Text3>{text}</Text3>
      <Stars src={FiveStars} alt="rating" />
    </Text_Container>
  </InnerContainer>
);

function TestBlock() {
  return (
    <Container>
      <All_container>
        <p>Testimonials</p>
        <span>Some testimonials from our customers</span>
      </All_container>

      <Card_container>
        <Card
          avatar={Avatar1}
          title="Ronald Richards"
          job="CEO at StartUp"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          avatar={Avatar2}
          title="Guy Hawkins"
          job="Marketing Manager"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          avatar={Avatar3}
          title="Kristin Watson"
          job="Product Designer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          avatar={Avatar4}
          title="Robert Fox"
          job="CTO at WebCorp"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          avatar={Avatar5}
          title="Savannah Nguyen"
          job="Freelance Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          avatar={Avatar6}
          title="Courtney Henry"
          job="UI/UX Designer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </Card_container>
    </Container>
  );
}

export default TestBlock;