import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firstSlider from "../assets/images/firstSlider.png";
import secondSlider from "../assets/images/secondSlider.png";
import thirdSlider from "../assets/images/thirdSlider.png";
import fifthSlider from "../assets/images/5th.png";
import fourthSlider from "../assets/images/4th.png";

const Slider = () => {
  const banners = [
    firstSlider,
    thirdSlider,
    secondSlider,
    fifthSlider,
    fourthSlider,
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <div>
      <BannerStyle src={banners[currentBannerIndex]} alt="Banner" />
    </div>
  );
};

export default Slider;

const BannerStyle = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
