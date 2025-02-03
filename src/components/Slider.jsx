import React, { useState, useEffect } from "react";
import leaves from "../assets/images/leaves.png";
import cream from "../assets/images/cream.png";
import creams from "../assets/images/creams.png";
import styled from "styled-components";

const Slider = () => {
  const banners = [leaves, cream, creams];

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
  width: 1280px;
  height: 845px;
`;
