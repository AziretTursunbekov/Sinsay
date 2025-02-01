import styled from "styled-components";
import { Icons } from "../assets";
import Button from "./UI/Button";
import { products } from "../utils/constatnts";
import { useContext } from "react";

export const ProductList = () => {
  // const { products } = useContext(ProductContext);

  return (
    <Container>
      {products.map((category) => (
        <div
          key={category.category}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <CategoryTitle>{category.category}</CategoryTitle>
          <Grid>
            {category.items.map((item) => (
              <Card key={item.id}>
                <Image src={item.image} alt={item.name} />
                <Name>{item.name}</Name>
                <Sdabi>
                  <Price>{item.price}</Price>
                  <Icons.like />
                </Sdabi>
                <Button variant={"contained"} className="button">
                  Add to cart
                </Button>
              </Card>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

const Sdabi = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CategoryTitle = styled.h3`
  font-size: 47px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  .button {
    background: black;
    color: white;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 10px rgba(0, 0, 0, 0.1);

      transition: 2s;
    }
    &:active {
      transform: translateY(+10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #000000;
  font-weight: 700;
`;
