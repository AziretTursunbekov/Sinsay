import React from "react";
import styled from "styled-components";

import { product } from "../../utils/constants";

const CartList = () => {
  return (
    <StyledContainer>
      <StyledCart>Cart</StyledCart>
      <StyledLi>
        <StyledAteg href="#">Product</StyledAteg>

        <StyledDivBOOx>
          <StyledAteg href="#">Price</StyledAteg>
          <StyledAteg href="#">Quantity</StyledAteg>
          <StyledAteg href="#">Total</StyledAteg>
        </StyledDivBOOx>
      </StyledLi>
      <StyledUl>
        {product.map((item, i) => (
          <StyledDivMap>
            <StyledDivMap2>
              <StyledLi key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "85rem",
                  }}
                >
                  <img src={item.image} alt="" />
                  <StyledP>{item.title}</StyledP>
                  <SDA>
                    <StyledSpan1>${item.price}</StyledSpan1>
                    <StyledContainerDiv>
                      <StyledCounterButton>-</StyledCounterButton>
                      <b>1</b>
                      <StyledCounterButton>+</StyledCounterButton>
                    </StyledContainerDiv>
                    <StyledSpan2>${item.price}</StyledSpan2>
                  </SDA>
                </div>
                <img src={item.cartina} alt="" />
              </StyledLi>
            </StyledDivMap2>
          </StyledDivMap>
        ))}
      </StyledUl>
      <StyledDIVH1>Subtotal: $86.00</StyledDIVH1>
      <StyledPP>Tax included. Shipping calculated at checkout.</StyledPP>
      <ButtonContainer>
        <StyledButtOn1> Continue shopping</StyledButtOn1>
        <SyledBUTTON2>Checkout </SyledBUTTON2>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default CartList;

const SDA = styled.div`
  width: 400px;
  display: flex;

  justify-content: space-between;
`;

const StyledCounterButton = styled.button`
  padding: 8px 10px;
  background-color: #cfc9cb;
  border: none;
  cursor: pointer;
`;

const StyledContainerDiv = styled.div`
  background-color: #cfc9cb;
  width: 85px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledP = styled.p`
  width: 265px;
  font-size: 21px;
  font-weight: 400;
`;

const StyledDIVVV = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;
  /* margin-top: 10px; */
`;
const StyledDivMap2 = styled.div`
  gap: 100px;
  display: flex;
  align-items: center;
`;

const StyledDivMap = styled.div`
  display: flex;
  gap: 25px;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledSpan1 = styled.span`
  font-size: 21px;
  font-weight: 400;
`;

const StyledSpan2 = styled.span`
  font-size: 21px;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  width: 37%;
`;

const StyledButtOn1 = styled.button`
  width: 283px;
  height: 65px;
  font-size: 21px;
  font-weight: 400;
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 20px 15px;
`;

const SyledBUTTON2 = styled.button`
  width: 182px;
  height: 65px;
  font-size: 21px;
  font-weight: 400;
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 20px 15px;
`;
const StyledDIVH1 = styled.h1`
  margin-top: 50px;
`;

const StyledPP = styled.p`
  font-size: 20px;
`;

const StyledContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCart = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;

  font-size: 81px;
  line-height: 73.2px;
  font-weight: 500px;
`;

const StyledAteg = styled.a`
  text-decoration: none;
  margin-left: 10px;
  color: black;
  font-size: 21px;
  font-weight: 400;
`;

const StyledLi = styled.li`
  width: 100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 10px 120px 25px 120px;
`;

const StyledDivBOOx = styled.div`
  gap: 100px;
  padding: 5px;
  display: flex;
  justify-content: start;
`;
