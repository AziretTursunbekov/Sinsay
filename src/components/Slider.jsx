import { useState, useEffect } from "react";
import styled from "styled-components";
import leaves from "../assets/images/leaves.png";
import creams from "../assets/images/creams.png";
import cream from "../assets/images/cream.png";

export const Slider = () => {
  const banners = [creams, leaves, cream];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <SliderWrapper>
      <BannerImage src={banners[currentBannerIndex]} alt="Banner" />
    </SliderWrapper>
  );
};
const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`;
