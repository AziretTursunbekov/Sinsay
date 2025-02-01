import React, { useContext } from "react";
import Header from "../pages/header/Header";
// import { MainPage } from "../pages/MainPage";
// import { OrderPage } from "../pages/OrderPage";
// import { FavoritePage } from "../pages/FavoritePage";
import Footer from "../pages/Footer/Footer";
import Login from "../components/auth/Login";
// import About from "../pages/about/About";
import { AuthContext } from "../logincontext/LoginContext";
import { ProductList } from "../components/ProductList";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? <ProductList /> : <Login />}
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
