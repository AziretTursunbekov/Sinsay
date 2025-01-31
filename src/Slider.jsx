import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { images } from "./utils/constatnts";

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <StyledImage src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
