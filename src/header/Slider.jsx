import { useState, useEffect } from "react";
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
    <div>
      <img
        src={banners[currentBannerIndex]}
        alt="Banner"
        width={"100%"}
        height={"600vh"}
      />
    </div>
  );
};
