import React, { useContext } from "react";
import Header from "../pages/header/Header";
import { MainPage } from "../pages/MainPage";
import { OrderPage } from "../pages/OrderPage";
import { FavoritePage } from "../pages/FavoritePage";
import CartList from "../components/CartList";
import Footer from "../pages/Footer/Footer";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? (
          <MainPage />
        ) : isLoggedIn === "cart" ? (
          <OrderPage />
        ) : isLoggedIn === "favorite" ? (
          <FavoritePage />
        ) : isLoggedIn == "about" ? (
          <CartList />
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
