import { useContext } from "react";
import { Icons } from "../../assets";
import styled from "styled-components";
import { AuthContext } from "../../context/LoginContext";
import { useCart } from "../../context/CartContext";
import { useProduct } from "../../context/ProductContext";

export default function Header() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { cart } = useCart();
  const { logout, state } = useContext(AuthContext);

  const { favorites } = useProduct();
  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <Icons.Sinsay
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
        <Icons.profile
          style={{ cursor: "pointer" }}
          onClick={() => handleLogout()}
        />
        <Icons.like
          onClick={() => setIsLoggedIn("like")}
          style={{ cursor: "pointer" }}
        />
        {state ? null : (
          <>
            {favorites.length > 0 && (
              <LikeCounter>{favorites.length}</LikeCounter>
            )}
          </>
        )}
        <CartIcon
          onClick={() => setIsLoggedIn("sumka")}
          style={{ cursor: "pointer" }}
        >
          <Icons.Sumka style={{ cursor: "pointer" }} />
          {state ? null : (
            <>{cart.length > 0 && <Counter>{cart.length}</Counter>}</>
          )}
        </CartIcon>
      </StyledMan>
    </StyledHeader>
  );
}

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const LikeCounter = styled.span`
  position: absolute;
  top: 28px;
  right: 100px;
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

const Counter = styled.span`
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
  animation-delay: ${(props) => props.delay};

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
  text-align: center;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid;
  padding: 0 30px;
  margin: 0 auto;
  background-color: rgb(203, 206, 208);
`;
