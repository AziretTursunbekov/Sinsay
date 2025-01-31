import React from "react";
import styled from "styled-components";
import { carta } from "./constants";
import { Icons } from "../assets";

export const WishList = () => {
  return (
    <StyledWishList>
      <StyledTitle>Wish list</StyledTitle>
      <StyledSection>
        {carta.map((item) => (
          <StyledArticle>
            <StyledImage src={item.image} />
            <p>{item.description}</p>
            <PriceContainer>
              <b>{item.price}</b>
              <Icons.likeblack />
            </PriceContainer>
            <Button>Add to cart</Button>

            <DeleteContainer>
              <Icons.Delete />
              <Delete>Delete</Delete>
            </DeleteContainer>
          </StyledArticle>
        ))}
      </StyledSection>
    </StyledWishList>
  );
};

const StyledWishList = styled.div`
  font-family: "Roboto", sans-serif;
  width: 1250px;
  padding: 90px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledTitle = styled.h1`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSection = styled.section`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;

const StyledArticle = styled.article`
  text-align: center;
  flex-direction: column;
  width: 300px;
  transition: transform 0.2s;
`;

const StyledImage = styled.img`
  width: 313px;
  height: 318px;
  object-fit: cover;
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

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  height: 69px;
  font-size: larger;
  font-weight: bold;
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
  font-size: larger;
  background-color: white;
  border: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
