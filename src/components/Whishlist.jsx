import React from "react";
import styled from "styled-components";
import { product } from "../utils/constatnts";
import { Icons } from "../assets";

export default function WishList() {
  return (
    <StyledWishList>
      <StyledTitle>Wish list</StyledTitle>
      <StyledSection>
        {product.map((item) => (
          <article key={item.id}>
            <img src={item.image} alt="img" />
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
          </article>
        ))}
      </StyledSection>
    </StyledWishList>
  );
}

const StyledWishList = styled.div`
  width: 100%;
  height: 1500px;
  gap: 60px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSection = styled.section`
  width: 90rem;
  height: 666px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  article {
    width: 413px;
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
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  width: 413px;
  height: 69px;
  font-size: larger;
  font-weight: bold;
  &:hover {
    background: gray;
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;
const Delete = styled.button`
  width: 94px;
  height: 25px;
  font-size: larger;
  background-color: white;
  border: none;
  cursor: pointer;
`;
