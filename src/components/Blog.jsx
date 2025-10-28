import React from 'react'
import styled from 'styled-components';

import flov1 from "/flov1.png"
import flov2 from "/flov2.png"
import flov3 from "/flov3.png"
import flov4 from "/flov4.png"

const Container = styled.div`
padding-top:121px;
text-align:center;
height: 500px;
`;

const InnerContainer = styled.div`
position:static;

margin-top: 100px;
margin-right: 44px;
margin-bottom: -60px;

width: 268px;
height: 362px;
background-color: #FBFBFB;
border-radius: 5px;
`;

const Ph = styled.div`
& img {
        height: 195px;
        width: 268px;


    }
`;

const Text_Container = styled.div`

`;

const All_container = styled.div`

display: inline;

font-size:30px;
font-weight: 700;
& span{
    font-size: 14px;
    font-weight: 400;

    margin-top:15px;
}

`;

const Text1 = styled.div`

font-weight: 400;
text-align:center;

font-size: 14px;

color: #46A358;
`;

const Text2 = styled.div`
margin-left: 15px;
margin-top: 4px;
font-weight: 700;
font-size: 20px;
color: #3D3D3D;
`;

const Text3 = styled.div`
margin-left: 15px;
margin-top: 4px;
font-weight: 400;
font-size: 14px;
color: #3D3D3D;
`;

const Text4 = styled.div`
margin-left: 15px;
margin-top: 9px;
font-weight: 500;
font-size: 14px;
color: #3D3D3D;
`;

const Card_container = styled.div`
display:flex;
justify-content: center;
margin-top:-35px;
`;

function Blog() {
    return (
        <Container>
            <All_container>
            <p>Our Blog Posts</p>
            <span>We are an online plant shop offering a wide range of cheap and trendy plants. </span>
            </All_container>
            <Card_container>
                <InnerContainer>
                        <Ph>
                            <img src={flov1} alt="Flov" />
                            <Text_Container>
                                <Text1>
                                    September 12  I Read in 6 minutes
                                </Text1>
                                <Text2>
                                    Cactus & Succulent Care Tips
                                </Text2>
                                <Text3>
                                    Cacti are succulents are easy care plants for any home or patio.
                                </Text3>
                                <Text4>
                                    Read More
                                </Text4>
                            </Text_Container>
                        </Ph>
                    </InnerContainer>
                    <InnerContainer>
                        <Ph>
                            <img src={flov2} alt="Flov" />
                            <Text_Container>
                                <Text1>
                                    September 13  I Read in 2 minutes
                                </Text1>
                                <Text2>
                                    Top 10 Succulents for Your Home
                                </Text2>
                                <Text3>
                                    Best in hanging baskets. Prefers medium to high light.
                                </Text3>
                                <Text4>
                                    Read More
                                </Text4>
                            </Text_Container>
                        </Ph>
                    </InnerContainer>
                    <InnerContainer>
                        <Ph>
                            <img src={flov3} alt="Flov" />
                            <Text_Container>
                                <Text1>
                                    September 15  I Read in 3 minutes
                                </Text1>
                                <Text2>
                                    Cacti & Succulent
                                    Care Tips
                                </Text2>
                                <Text3>
                                    Cacti and succulents thrive in containers and because most are..
                                </Text3>
                                <Text4>
                                    Read More
                                </Text4>
                            </Text_Container>
                        </Ph>
                    </InnerContainer>
                    <InnerContainer>
                        <Ph>
                            <img src={flov4} alt="Flov" />
                            <Text_Container>
                                <Text1>
                                    September 15  I Read in 2 minutes
                                </Text1>
                                <Text2>
                                    Best Houseplants
                                    Room by Room
                                </Text2>
                                <Text3>
                                    The benefits of houseplants are endless. In addition to..
                                </Text3>
                                <Text4>
                                    Read More
                                </Text4>
                            </Text_Container>
                        </Ph>
                    </InnerContainer>
            </Card_container>

        </Container>
    )
}

export default Blog