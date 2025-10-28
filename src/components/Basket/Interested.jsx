import React from 'react'
import styled from 'styled-components';


import tree1 from "/tree1.png"
import tree2 from "/tree2.png"
import tree3 from "/tree3.png"
import tree4 from "/tree4.png"
import tree5 from "/tree5.png"


const Container = styled.div`
  border-radius: 25px;

  display: flex;
  justify-content: center;
`;

const Card1 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  font-size: 16px;
  margin-left: 120px;
  & p {
    margin-left: 10px;
    margin-top: 19px;
  }
  & span {
    padding-left: 10px;
    color: #46A358;
    font-weight: 700;
}
  & img {
    height: 243px;
    width: 190px;
    margin-left: 15px;
  }
`;

const Card2 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  font-size: 16px;
  margin-left:50px;
  margin-top: 25px;
  & p {
    margin-left: 10px;
    margin-top: 19px;
  }
  & span {
    padding-left: 10px;
    color: #46A358;
    font-weight: 700;
  }
  & img {
    height: 212px;
    width: 212px;
    margin-left: 15px;
  }
`;

const Card3 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  font-size: 16px;
  margin-left:50px;
  margin-top: 28px;
  & p {
    margin-left: 10px;
    margin-top: 19px;
  }
  & span {
    padding-left: 10px;
    color: #46A358;
    font-weight: 700;
  }
  & img {
    height: 212px;
    width: 212px;
    margin-left: 15px;
  }
`;

const Card4 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  font-size: 16px;
  margin-left:50px;
  margin-top: 32px;
  & p {
    margin-left: 10px;
    margin-top: 19px;
  }
  & span {
    padding-left: 10px;
    color: #46A358;
    font-weight: 700;
  }
  & img {
    height: 213px;
    width: 213px;
    margin-left: 15px;
  }
`;

const Card5 = styled.div`
  font-weight: 400;
  letter-spacing: 10%;
  font-size: 16px;
  margin-left:50px;
  margin-top: 30px;
  & p {
    margin-left: 10px;
    margin-top: 19px;
  }
  & span {
    padding-left: 10px;
    color: #46A358;
    font-weight: 700;
  }
  & img {
    height: 213px;
    width: 213px;
    margin-left: 15px;
  }
`;


const Container_t = styled.div`

`;

const Text1 = styled.div`
color: #46A358;
font-weight: 700;
font-size: 17px;
margin-bottom: 55px;
margin-left: 130px;
`;

const Card_container = styled.div`
display:flex;
justify-content: center;
`;

const Container_all = styled.div`
margin-top: 150px;
`;

function Interested() {
    return (
        <Container>
            <Container_all>
                <Container_t>
                    <Text1>You may be interested in</Text1>
                </Container_t>
                <Card_container>
                    <Card1>
                        <img src={tree1} alt="tree" />
                        <p>Beach Spider Lily</p><span>$129.00</span>
                    </Card1>
                    <Card2>
                        <img src={tree2} alt="tree" />
                        <p>Blushing Bromeliad</p><span>$139.00</span>
                    </Card2>
                    <Card3>
                        <img src={tree3} alt="tree" />
                        <p>Aluminum Plant</p><span>$179.00</span>
                    </Card3>
                    <Card4>
                        <img src={tree4} alt="tree" />
                        <p>Bird's Nest Fern</p><span>$99.00</span>
                    </Card4>
                    <Card5>
                        <img src={tree5} alt="tree" />
                        <p>Chinese Evergreen</p><span>$39.00</span>
                    </Card5>
                </Card_container>
            </Container_all>
        </Container>
    )
}

export default Interested