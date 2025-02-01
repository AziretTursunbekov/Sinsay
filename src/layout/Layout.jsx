import React, { useContext } from "react";
import Header from "../pages/header/Header";
import Footer from "../pages/Footer/Footer";
import Login from "../components/auth/Login";
import { AuthContext } from "../logincontext/LoginContext";
import { ProductList } from "../components/ProductList";

import Slider from "../components/Slider";
import styled from "styled-components";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? <ProductList /> : <Login />}
        {((<Header />), (<Slider />), (<ProductList />))}
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
