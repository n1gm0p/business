import React from 'react'
import styled from 'styled-components';
import Cart from './Cart'
import Card from './basket_card';

const Container = styled.div`
display: flex;
justify-content: center;
padding-left: 100px;
padding-top: 70px;
`;

const Header = styled.div`
display: grid;
grid-template-columns: 500px 1fr ;
 & span{
    display: grid;
    grid-template-columns: 163px 207px 10px;
 }
`;
const Container_Product = styled.div`

`;
const Container_all = styled.div`

`;


function Products() {
    return (
        <Container>
            <Container_all>
            <Header>
                <div>Products</div> <span><p>Price</p> <p>Quantity</p> <p>Total</p></span>
            </Header>
            <Container_Product>
               <Card></Card>
            </Container_Product>
        </Container_all>
        <Cart></Cart>
        </Container>
    )
}

export default Products