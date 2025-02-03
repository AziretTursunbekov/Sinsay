import { useContext } from "react";
import { Icons } from "../../assets";
import styled from "styled-components";
import { AuthContext } from "../../context/LoginContext";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { cart } = useCart();

  return (
    <StyledHeader>
      <Icons.menuburger
        onClick={() => setIsLoggedIn("/")}
        style={{ cursor: "pointer" }}
      />
      <AnimatedHeading className="svgclogo">
        {"SINSAY".split("").map((letter, index) => (
          <AnimatedLetter key={index} delay={index * 0.5}>
            {letter}
          </AnimatedLetter>
        ))}
      </AnimatedHeading>
      <StyledMan>
        <Icons.Poisk style={{ cursor: "pointer" }} />
        <Icons.profile style={{ cursor: "pointer" }} />
        <Icons.like
          onClick={() => setIsLoggedIn("like")}
          style={{ cursor: "pointer" }}
        />
        <CartIcon
          onClick={() => setIsLoggedIn("sumka")}
          style={{ cursor: "pointer" }}
        >
          <Icons.Sumka style={{ cursor: "pointer" }} />
          {cart.length > 0 && <CartCounter>{cart.length}</CartCounter>}
        </CartIcon>
      </StyledMan>
    </StyledHeader>
  );
}

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCounter = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMan = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 50px;
`;

const AnimatedHeading = styled.h2`
  display: flex;
  font-size: 40px;
  font-weight: bold;
  color: black;
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
