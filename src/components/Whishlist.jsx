import { useProduct } from "../context/ProductContext";
import styled from "styled-components";
import { Icons } from "../assets";
import { useCart } from "../context/CartContext";

export default function WishList() {
  const { favorites, toggleFavorite } = useProduct();

  const { dispatch } = useCart();

  return (
    <StyledWishList>
      <StyledTitle>Wish List</StyledTitle>
      <StyledSection>
        {favorites.map((item) => (
          <Article key={item.id}>
            <Image src={item.image} alt={item.name} />
            <Description>{item.description}</Description>
            <PriceContainer>
              <Price>${item.price}</Price>
              <LikeIcon
                onClick={() => toggleFavorite(item)}
                style={{ cursor: "pointer" }}
              >
                <Icons.likeblack />
              </LikeIcon>
            </PriceContainer>
            <StyledButton
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              Add to cart
            </StyledButton>
          </Article>
        ))}
      </StyledSection>
    </StyledWishList>
  );
}

const StyledWishList = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 70px;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Article = styled.article`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const Price = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
`;

const LikeIcon = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: gray;
    transform: translateY(-3px);
  }
`;

const EmptyMessage = styled.p`
  font-size: 1.5rem;
  color: gray;
  text-align: center;
  margin-top: 20px;
`;
