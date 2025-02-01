import styled from "styled-components";
import { Icons } from "../../assets";
import Button from "../../components/UI/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/LoginContext";

const Footer = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <FooterStyled>
      <ArticleStyled>
        <p className="PTag">Contact Us</p>
        <p className="PTag2">+778 456 893 0283</p>
        <p className="PTag2">Sinseybeauty@gmail.com</p>
        <p className="PTag2">
          <div>Monday - Friday</div>
          <div>10:00 am to 17:00 pm</div>
        </p>
        <SpanStyled>
          <Icons.twiter />
          <Icons.iconoir_facebook />
          <Icons.instagramm />
        </SpanStyled>
        <p className="PTag5">© 2025 SINSEY Official. Powered by Shopify</p>
      </ArticleStyled>
      <ArticleStyled2>
        <p className="Ptag_1Art2">Shop</p>
        <a
          href="#"
          className="Ptag_2Art2"
          onClick={() => setIsLoggedIn("about")}
        >
          About
        </a>
        <a href="#" className="Ptag_2Art2">
          Product
        </a>
        <a href="#" className="Ptag_2Art2">
          Reviews
        </a>
        <a href="#" className="Ptag_2Art2">
          Contact
        </a>
      </ArticleStyled2>
      <ArticleStyled3>
        <p className="PTag-1Art3">Newsletter</p>
        <p className="ptag3">
          Sign up for exclusive offers, original stories, events and more.
        </p>
        <input type="text" placeholder="Enter email" />
        <Button variant={"contained"} className="BtnStyled">
          Subscribe
        </Button>
      </ArticleStyled3>
    </FooterStyled>
  );
};

export default Footer;
const FooterStyled = styled.footer`
  width: 100%;
  height: 360px;
  background-color: #cfc9cb;
  font-weight: 400px;
  display: flex;
  justify-content: space-between;
  padding: 40px 80px;
`;
const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .PTag {
    font-size: 21px;
    line-height: 25, 2px;
    color: #000000;
  }
  .PTag2 {
    color: #000000;
    size: 16px;
    line-height: 19, 2px;
  }
  .PTag5 {
    color: #676869;
    font-size: 14px;
    line-height: 19, 6px;
  }
`;
const ArticleStyled2 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .Ptag_1Art2 {
    color: #000000;
    font-size: 21px;
    line-height: 25.2px;
  }
  .Ptag_2Art2 {
    color: #131313;
    font-size: 16px;
    line-height: 19.2px;
    text-decoration: none;
  }
`;
const ArticleStyled3 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .PTag-1Art3 {
    color: #171717;
    font-size: 21px;
    line-height: 25.2px;
    font-weight: 400;
  }
  input {
    width: 310px;
    height: 48px;
    padding: 5px 5px;
    border: none;
  }
  ::placeholder {
    color: #171717;
  }

  .ptag3 {
    width: 281px;
    height: 38px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    color: #676869;
  }
  .BtnStyled {
    width: 130px;
    height: 49px;
    border: none;
    padding: 15px 25px;
    color: white;
    background-color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
  }
`;
const SpanStyled = styled.span`
  display: flex;
  gap: 30px;
`;
