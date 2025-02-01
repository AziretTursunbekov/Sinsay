import React, { useContext } from "react";
import Footer from "../pages/Footer/Footer";
import Login from "../components/auth/Login";
import { AuthContext } from "../context/LoginContext";
import { ProductList } from "../components/ProductList";

import styled from "styled-components";
import Header from "../pages/header/Header";
import CartList from "../components/CartList";
import About from "../pages/about/About";
import WishList from "../components/Whishlist";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? (
          <ProductList />
        ) : isLoggedIn === "like" ? (
          <WishList />
        ) : isLoggedIn === "sumka" ? (
          <CartList />
        ) : isLoggedIn === "about" ? (
          <About />
        ) : (
          <Login />
        )}

        <Footer />
      </StyledCono>
    </div>
  );
};

export default Layout;
const StyledCono = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
