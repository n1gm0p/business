import React, { useState } from 'react';
import RangeSliderInput from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import styled from 'styled-components';

import sale from "/SaleBanner.png"; 

const Container = styled.div`
display: flex;

width: 310px;
height: 774px;
background-color: #F5F5F5;
border-radius: 25px;
margin-top: 47px;
.range-slider {
  background: #46a3592b;
  width: 250px;
  
}


.range-slider .range-slider__thumb {
  background: #46A358;
  width: 17px;
  height: 17px;
}


.range-slider .range-slider__range {

  background: #46A358;
}


`;
const Filter = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
font-size: 15px;
line-height: 45px;
padding-left:30px;

& span {
        color: #46A358;
        font-weight: 600;
        padding-left: 90px;
    }
`;

const All_container = styled.div`

  `;

const Filter_header = styled.div`
font-weight: 700;
padding-left:18px;
padding-top:14px;
`;

const Wrapper_header = styled.div`
font-weight: 700;
padding-left:18px;
padding-top:14px;
`;
const Sl = styled.div`
display: flex;
justify-content: center;
padding-top: 30PX;
padding-bottom: 10px;
`;
const Wrapper = styled.div`

display: flex;
font-size: 15px;
line-height: 50px;
padding-left:30px;

& span {
        color: #46A358;
        font-weight: 600;
        margin-left:10px;
    }
`;

const Filter_header2 = styled.div`
font-weight: 700;
padding-left: 18px;
padding-top: 50px;
`;

const Filter2 = styled.div`
display: grid;
font-size: 15px;
grid-template-columns: 1fr 1fr;
font-weight: 400;
padding-left: 30px;
line-height: 35px;
padding-top: 7px;
& span {
        color: #46A358;
        font-weight: 600;
        padding-left: 90px;
    }
`;

const ShopButton = styled.button`

    margin-left: 29px;
    color: white;
    height: 35px;
    width: 90px;
    border-radius: 6px;
    border: none;
    background-color: #46A358;
    align-items: center;
    font-size: 16;
    font-weight: 700;
    &:hover {
    background-color: #286634;
    border: 1px solid #286634;
  } 
    
`;



function Filtres() {
    const [values, setValues] = useState([0, 1000]);
  
    const handleChange = (newValues) => {
      setValues(newValues);
    };
    return (
        <Container>
            <All_container>
                <Filter_header>
                    <p>Categories</p>
                </Filter_header>
                <Filter>
                    <p>House Plants </p><span>(33)</span>
                </Filter>
                <Filter>
                    <p>Potter Plants </p><span>(12)</span>
                </Filter>
                <Filter>
                    <p>Seeds </p><span>(64)</span>
                </Filter>
                <Filter>
                    <p>Small Plants </p><span>(36)</span>
                </Filter>
                <Filter>
                    <p>Big Plants </p><span>(15)</span>
                </Filter>
                <Filter>
                    <p>Trerrariums </p><span>(35)</span>
                </Filter>
                <Filter>
                    <p>Gardening </p><span>(29)</span>
                </Filter>
                <Filter>
                    <p>Accessories </p><span>(40)</span>
                </Filter>
                <Wrapper_header>
                    <p>Price Range</p>
                </Wrapper_header>
                <Sl>
                  <RangeSliderInput
                    value={values}
                    onInput={handleChange}
                    min={0}
                    max={2000}
                    step={1}
                />  
                </Sl>
                <Wrapper>
                    <p>Price:</p> <span>${values[0]} - ${values[1]}</span>

                </Wrapper>
                

                

                <ShopButton>Filter</ShopButton>
                <Filter_header2>
                    <p>Size</p>
                </Filter_header2>
                <Filter2>
                <p>Small </p><span>(119)</span>
                </Filter2>
                <Filter2>
                <p>Medium </p><span>(86)</span>
                </Filter2>
                <Filter2>
                <p>Large </p><span>(78)</span>
                </Filter2>
                <img src={sale} alt="SaleBanner" />
            </All_container>
        </Container>
    )
}

export default Filtres