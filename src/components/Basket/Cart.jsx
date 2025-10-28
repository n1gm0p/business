import React, { useContext } from 'react';
import styled from 'styled-components';
import { BasketContext } from './BasketContext'; 

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 50px;
`;

const Card1 = styled.div``;

const Header = styled.div`
  & h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Point = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 15px;
  line-height: 45px;
  font-weight: 400;

  & span {
    font-weight: 500;
    margin-left: 70px;
  }
`;

const Point_end = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;
  line-height: 45px;
  font-weight: 700;

  & span {
    color: #46A358;
    font-weight: 700;
    font-size: 18px;
    margin-left: 70px;
  }
`;

const Button1 = styled.button`
  margin-top: 25px;
  font-size: 15px;
  font-weight: 700;
  height: 40px;
  width: 330px;
  border-radius: 3px;
  color: white;
  background-color: #46A358;
  border-color: #46A358;
  border-style: solid;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  }
`;

const Text = styled.div`
  font-size: 15px;
  margin-top: 8px;
  color: #46A358;
  margin-left: 90px;
  font-weight: 400;
`;

function Cart() {
  const { allCost, discount, shipping } = useContext(BasketContext);

  return (
    <Container>
      <Card1>
        <Header>
          <h1>Cart Totals</h1>
        </Header>
        <Point>
          <p>Subtotal </p><span>${allCost}.00</span>
        </Point>
        <Point>
          <p>Coupon Discount </p><span>-{discount}%</span>
        </Point>
        <Point>
          <p>Shipping </p><span>${shipping}.00</span>
        </Point>
        <Point_end>
          <p>Total </p><span>${(allCost - ((allCost*discount)/100) + shipping).toFixed(2)}</span>
        </Point_end>
        <Button1>Proceed To Checkout</Button1>
        <Text>Continue Shopping</Text>
      </Card1>
    </Container>
  );
}

export default Cart;
