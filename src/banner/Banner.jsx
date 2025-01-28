import React from "react";
import { products } from "../utils/constants";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledContainer>
      <ul>
        {products.map((item, i) => (
          <StyledItem key={i}>
            <StyledImage src={item.ssylka} alt="" />
            <StyledH4>
              View all <br />
              products
            </StyledH4>
          </StyledItem>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default Banner;

const StyledImage = styled.img`
  max-width: 70%;
  height: auto;
`;
const StyledContainer = styled.div`
  font-family: "Roboto", sans-serif;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const StyledH4 = styled.p`
  font-size: 50px;
  position: absolute;
  top: 75%;
  left: 27%;
  transform: translate(-50%, -50%);
`;
