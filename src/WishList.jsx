import React from "react";
import styled from "styled-components";
import { product } from "./constants";
import { Icons } from "./assets";

export default function WishList() {
  return (
    <StyledWishList>
      <StyledTitle>Wish list</StyledTitle>
      <StyledSection>
        <TopRow>
          {product.slice(0, 3).map((item) => (
            <StyledArticle key={item.id}>
              <StyledImage src={item.image} alt="img" />
              <Description>{item.description}</Description>

              <PriceContainer>
                <h3>{item.price}</h3>
                <Icons.likeblack />
              </PriceContainer>

              <Button>Add to cart</Button>

              <DeleteContainer>
                <Icons.Delete />
                <Delete>Delete</Delete>
              </DeleteContainer>
            </StyledArticle>
          ))}
        </TopRow>
        <BottomRow>
          {product.slice(3, 6).map((item) => (
            <StyledArticle key={item.id}>
              <StyledImage src={item.image} alt="img" />
              <Description>{item.description}</Description>

              <PriceContainer>
                <h3>{item.price}</h3>
                <Icons.likeblack />
              </PriceContainer>

              <Button>Add to cart</Button>

              <DeleteContainer>
                <Icons.Delete />
                <Delete>Delete</Delete>
              </DeleteContainer>
            </StyledArticle>
          ))}
        </BottomRow>
      </StyledSection>
    </StyledWishList>
  );
}

const StyledWishList = styled.div`
  font-family: "Roboto", sans-serif;
  width: 1250px;
  padding: 200px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledTitle = styled.h2`
  font-size: 61px;
  font-weight: 500;
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledArticle = styled.article`
  text-align: center;
  transition: transform 0.2s;
`;

const StyledImage = styled.img`
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

const Description = styled.p`
  font-size: x-large;
  padding: 10px;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  height: 69px;
  font-size: 24px;
  font-weight: 400;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Delete = styled.button`
  width: 94px;
  height: 25px;
  font-size: 21px;
  font-weight: 400;
  background-color: white;
  border: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
