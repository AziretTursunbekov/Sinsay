import styled from "styled-components";
import green from "../assets/images/green.png";
import black1 from "../assets/images/black1.png";
import white1 from "../assets/images/white1.png";
import icon from "../assets/images/icon.png";
import moloko from "../assets/images/moloko.png";

const products = [
  {
    category: "Face care",
    items: [
      {
        id: 1,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$19.50",
        image: green,
      },
      {
        id: 2,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",

        price: "$19.50",
        image: green,
      },
      {
        id: 3,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",

        price: "$19.50",
        image: green,
      },
      {
        id: 4,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",

        price: "$19.50",
        image: green,
      },
    ],
  },
  {
    category: "Body care",
    items: [
      {
        id: 5,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$15.00",
        image: black1,
      },
      {
        id: 6,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$15.00",
        image: black1,
      },
      {
        id: 7,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$15.00",
        image: black1,
      },
      {
        id: 8,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$15.00",
        image: black1,
      },
    ],
  },
  {
    category: "Hair care",
    items: [
      {
        id: 9,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$12.00",
        image: white1,
      },
      {
        id: 10,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$12.00",
        image: white1,
      },
      {
        id: 11,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$12.00",
        image: white1,
      },
      {
        id: 12,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$12.00",
        image: white1,
      },
    ],
  },
  {
    category: "Hand care",
    items: [
      {
        id: 13,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$10.00",
        image: icon,
      },
      {
        id: 14,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$10.00",
        image: icon,
      },
      {
        id: 15,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$10.00",
        image: icon,
      },
      {
        id: 16,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$10.00",
        image: icon,
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        id: 17,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$8.00",
        image: moloko,
      },
      {
        id: 18,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$8.00",
        image: moloko,
      },
      {
        id: 19,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$8.00",
        image: moloko,
      },
      {
        id: 20,
        name: "PURITO Centella Unscented Recovery Cream 50 ml / 1.7 fl. oz.",
        price: "$8.00",
        image: moloko,
      },
    ],
  },
];

export const ProductList = () => {
  return (
    <Container>
      {products.map((category) => (
        <div key={category.category}>
          <CategoryTitle>{category.category}</CategoryTitle>
          <Grid>
            {category.items.map((item) => (
              <Card key={item.id}>
                <Image src={item.image} alt={item.name} />
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
                <Button>Add to cart</Button>
              </Card>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Montserrat", sans-serif;
`;

const CategoryTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #333;
  }
`;
