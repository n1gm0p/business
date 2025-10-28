import React from 'react'
import styled from 'styled-components';

import plant1 from "/plant1.png"
import plant2 from "/plant2.png"


const Container = styled.div`
display:flex;
justify-content: center;
`;

const InnerContainer = styled.div`
display: flex;
margin-left: -100px;
margin-top: 300px;

width: 586px;
height: 250px;background-color: #FBFBFB;
border-radius: 15px;
`;

const Ph = styled.div`
& button {
        background-color: #46A358;
  }    
& img {
        height: 292px;
        width: 292px;
        position: relative;
        bottom: 50px;

    }
`;

const Text1 = styled.p`
font-weight: 900;
letter-spacing: 10%;
text-transform: uppercase;
text-align: right;
padding-right: 25px;
padding-top: 37px;
font-size:18px;
line-height: 24px;
color: #3D3D3D;
`;

const Text2 = styled.p`
color: #3D3D3D;
font-weight: 400;
line-height: 24px;
padding-top:9px;
font-size:14px;
`;

const Text_Container = styled.div`

`;

const ShopButton = styled.button`
    margin-top: 25px;
    margin-left: 129px;
    color: white;
    height: 35px;
    width: 135px;
    border-radius: 6px;
    border: none;
    background-color: #46A358;
    align-items: center;
    font-size: 14;
    font-weight: 500;
    &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  }   
`;
const InnerContainer1 = styled.div`
display: flex;

margin-top: 300px;
margin-left: 120px;
width: 586px;
height: 250px;background-color: #FBFBFB;
border-radius: 15px;
`;

function Basement() {
    return (
        <Container>
            <InnerContainer>
                <Ph>
                    <img src={plant1} alt="Plant1" />
                </Ph>
                <Text_Container>
                    <Text1>
                        Summer cactus & succulents
                    </Text1>
                    <Text2>
                        We are an online plant shop offering a wide range of cheap and trendy plants
                    </Text2>
                    <ShopButton>Find More</ShopButton>
                </Text_Container>
            </InnerContainer>
            <InnerContainer1>
                <Ph>
                    <img src={plant2} alt="Plant2" />
                </Ph>
                <Text_Container>
                    <Text1>
                        Styling Trends & much more
                    </Text1>
                    <Text2>
                        We are an online plant shop offering a wide range of cheap and trendy plants
                    </Text2>
                    <ShopButton>Find More</ShopButton>
                </Text_Container>
            </InnerContainer1>
        </Container>
    )
}

export default Basement