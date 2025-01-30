import React from "react";
import styled from "styled-components";
import { Icons } from "../../assets";

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

const Styledman = styled.div`
  display: flex;
  justify-content: end;
  gap: 50px;
  align-items: center;
`;

const AnimatedHeading = styled.h2`
  display: flex;
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
  width: 100%;
  height: 89px;
  padding: 0 30px;
  margin: 0 auto;
`;
