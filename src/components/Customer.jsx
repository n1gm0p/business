import React from 'react';
import styled from 'styled-components';
import { Animated } from "react-animated-css";
import { Check } from 'lucide-react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F9F9FD;
  width: 100%;
  padding: 100px 0;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  min-height: 500px;
  gap: 200px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 260px);
  grid-template-rows: repeat(2, 290px);
  gap: 40px;
  position: relative;

  
  & > div:nth-child(1),
  & > div:nth-child(3) {
    transform: translateY(40px);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: -2px 2px 50px rgba(138 , 146 , 255, 0.2 );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 260px;
  height: 290px;
  text-align: center;
  padding: 5px;
`;

const CardTitle = styled.h3`
  margin-top: 25px;
  font-size: 56px;
  font-weight: 700;
  color: ${(props) => props.color || "#111029"};
  margin-bottom: 10px;

`;

const CardText = styled.p`
  font-size: 18px;
  color: #444444;
  max-width: 214px;
  font-weight: 400;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 600px;
`;

const Text1 = styled.h2`
  font-weight: 700;
  font-size: 56px;
  color: #111029;
  margin: 0 0 15px 0;
  line-height: 1.3;
  max-width: 460px;
`;

const Text2 = styled.p`
  color: #6B6B6B;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  max-width: 460px;

  & span {
    color: #4C40F7;
    font-weight: 700;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 25px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #6B6B6B;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  & span {
    display: inline-block;
    max-width: 416px;
    line-height: 1.6;
  }
`;

const IconCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #4C40F7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    color: white;
    width: 17px;
    height: 17px;
    stroke-width: 3;
    transform: translateY(1px);
  }
`;

function Customer() {
    return (
        <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            <Container>
                <InnerContainer>
                    <CardsContainer>
                        <Card>
                            <CardTitle color="#4C40F7">70K+</CardTitle>
                            <CardText>We have more than customers</CardText>
                        </Card>
                        <Card>
                            <CardTitle color="#FF6800">100+</CardTitle>
                            <CardText>Projects we have completed</CardText>
                        </Card>
                        <Card>
                            <CardTitle color="#FF2D59">10M+</CardTitle>
                            <CardText>People who are helped because of our hard work</CardText>
                        </Card>
                        <Card>
                            <CardTitle color="#4ADB61">200+</CardTitle>
                            <CardText>Support from world-renowned companies</CardText>
                        </Card>
                    </CardsContainer>
                    <TextContainer>
                        <Text1>Customer satisfaction is our first priority</Text1>
                        <Text2>
                            We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:
                        </Text2>

                        <FeatureList>
                            <FeatureItem><IconCircle><Check /></IconCircle><span>Provide idea support from our creative team</span></FeatureItem>
                            <FeatureItem><IconCircle><Check /></IconCircle><span>Provide attractive and professional design services</span></FeatureItem>
                            <FeatureItem><IconCircle><Check /></IconCircle><span>Support for service 24 hours a week</span></FeatureItem>
                            <FeatureItem><IconCircle><Check /></IconCircle><span>Helping our customers to grow their business</span></FeatureItem>
                            <FeatureItem><IconCircle><Check /></IconCircle><span>Provide support to market products through online marketplace</span></FeatureItem>
                        </FeatureList>
                    </TextContainer>
                </InnerContainer>
            </Container>
        </Animated>
    );
}

export default Customer;