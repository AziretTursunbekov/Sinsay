import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import Button from "./UI/Button";
import { Icons } from "../assets";

const CartList = () => {
  const { cart, dispatch } = useCart();

  return (
    <StyledContainer>
      <StyledCart>Cart</StyledCart>
      <StyledLi>
        <StyledAteg href="#">Product</StyledAteg>
        <StyledDivBOOx>
          <div className="firstDiv">
            <StyledAteg href="#">Price</StyledAteg>
            <StyledAteg href="#">Quantity</StyledAteg>
            <StyledAteg href="#">Total</StyledAteg>
          </div>
        </StyledDivBOOx>
      </StyledLi>
      <StyledUl>
        {cart.map((item) => (
          <div key={item.id}>
            <StyledLi>
              <div className="div">
                <img src={item.image} alt="" />
                <StyledP>{item.name}</StyledP>
                <StyledPriceDiv>
                  <StyledSpan1>${item.price}</StyledSpan1>
                  <StyledContainerDiv>
                    <StyledCounterButton
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_QUANTITY",
                          payload: item.id,
                        })
                      }
                    >
                      -
                    </StyledCounterButton>
                    <b>{item.quantity}</b>
                    <StyledCounterButton
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: item.id,
                        })
                      }
                    >
                      +
                    </StyledCounterButton>
                  </StyledContainerDiv>
                  <StyledSpan2>${item.price}</StyledSpan2>
                </StyledPriceDiv>
              </div>
              <Icons.Delete
                className="svg"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              />
            </StyledLi>
          </div>
        ))}
      </StyledUl>
      <StyledSubtotal>
        <h1>
          Subtotal: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </h1>
        <StyledPP>Tax included. Shipping calculated at checkout.</StyledPP>
      </StyledSubtotal>
      <ButtonContainer>
        <Button variant="contained"> Continue shopping</Button>
        <Button variant="contained"> Checkout</Button>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default CartList;

const StyledSubtotal = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 8px;
  padding: 35px 50px;
`;

const StyledPriceDiv = styled.div`
  width: 530px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 90px;
`;

const StyledCounterButton = styled.button`
  padding: 5px 5px;
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
  width: 100vw;

  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

const StyledPP = styled.p`
  font-size: 20px;
`;
const StyledContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 90px;
`;

const StyledCart = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  font-size: 81px;
  line-height: 73.2px;
  font-weight: 500px;
`;

const StyledAteg = styled.a`
  text-decoration: none;
  color: black;
  font-size: 21px;
  font-weight: 400;
`;
const StyledLi = styled.li`
  width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;

  padding: 10px 60px 25px 60px;
  .div {
    width: 300rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 90px;
    img {
      width: 164px;
      height: 157px;
      object-fit: cover;
      border: 1px solid;
    }
  }
  .svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;

const StyledDivBOOx = styled.div`
  width: 560px;
  display: flex;
  justify-content: start;
  .firstDiv {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 90px;
  }
`;
