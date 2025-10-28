import React, { useContext } from 'react';
import styled from 'styled-components';
import { BasketContext } from './BasketContext'; 
import bas1 from '/bas1.png';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  width: 1000px;
  height: 80px;
  background-color: #fbfbfb;
  border-radius: 15px;

  & img {
    margin-left: 10px;
    width: 60px;
    height: 60px;
  }
`;

const Name = styled.div`
  font-size: 14px;
  color: #3d3d3d;

  & span {
    color: #727272;
  }

  & p {
    color: #3d3d3d;
    font-weight: 600;
    font-size: 16px;
  }
`;

const Price = styled.div`
  color: #727272;
  margin-left: 100px;
`;

const Total = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #46a358;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quantity = styled.div`
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Value = styled.p`
  padding-left: 10px;
  padding-right: 10px;
`;

const Button_t1 = styled.button`
  font-weight: 500;
  font-size: 16px;
  height: 22px;
  width: 22px;
  border-radius: 20px;
  color: white;
  background-color: #46a358;
  border-color: #46a358;
  border-style: solid;

  &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  }
`;

function BasketCard() {
  const { value, setValue, allCost, cost } = useContext(BasketContext);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value > 1 ? value - 1 : 1);
  };

  return (
    <Card>
      <img src={bas1} alt="basket" />
      <Name>
        <p>Barberton Daisy</p>
        <span>SKU: 1995751877966</span>
      </Name>
      <Price>
        $<span>{cost}.00</span>
      </Price>
      <Quantity>
        <span>
          <Button_t1 onClick={decrement}>-</Button_t1>
          <Value>{value}</Value>
          <Button_t1 onClick={increment}>+</Button_t1>
        </span>
      </Quantity>
      <Total>
        $<p>{allCost}.00</p>
      </Total>
    </Card>
  );
}

export default BasketCard;
