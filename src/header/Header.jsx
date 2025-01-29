import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";

export default function Header() {
  return (
    <StyledHeader>
      <Icons.menuburger />
      <AnimatedHeading className="svgclogo">
        {"SINSAY".split("").map((letter, index) => (
          <AnimatedLetter key={index} delay={index * 0.5}>
            {letter}
          </AnimatedLetter>
        ))}
      </AnimatedHeading>

      <Styledman>
        <Icons.Poisk />
        <Icons.profile />
        <Icons.like />
        <Icons.Sumka />
      </Styledman>
    </StyledHeader>
  );
}
const Styledh4 = styled.h4`
  text-align: center;
  font-size: 36px;
`;
const Styledman = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 50px;
  width: 275px;
  height: 30px;
`;

const AnimatedHeading = styled.h2`
  display: flex;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateX(100%);
  animation: slideIn 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    20% {
      opacity: 1;
      transform: translateX(0);
    }
    80% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid;
  width: 80%;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
`;
