import React from 'react'
import styled from 'styled-components';
import trava from "/logobis.svg"; 
import Calling from "/End/Calling.svg"; 
import Location from "/End/Location.svg"; 
import Message from "/End/Message.svg"; 

const Container = styled.div`
margin-top: 158px;
height: 85px;

background-color: #46a35947;
`;


const Container_items = styled.div`
padding-left: 50px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding-top: 20px;


`;

const Item = styled.div`
display: flex;
height: 50px;
width: 300px;
align-items: center;
& img{
    height: 30px;
    width: 30px;
    padding-right: 5px;
}
& h1{
    color: rgba(70, 163, 88, 1);
    text-transform: uppercase;
}
& .logo{
    height: 50px;
    width: 50px;
    padding-right: 5px;
}
`;


function end() {
  return (
    <Container>
        <Container_items>
            <Item><img className='logo' src={trava} alt="" /><h1>Travaman</h1></Item>
            <Item><img src={Location} alt="" /><p>70 West Buckingham Ave. Farmingdale, NY 11735</p></Item>
            <Item><img src={Message} alt="" /><p>contact@greenshop.com</p></Item>
            <Item><img src={Calling} alt="" /><p>+88 01911 717 490</p></Item>
        </Container_items>
    </Container>
  )
}

export default end