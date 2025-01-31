import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/7308/6fee/517969f1f8e965882137c95699f252f7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MgdK5wdxWJG1w~Y6ZdjXYaI9g2T2csYTtsig4YhsOjD3W7DT2HhIKv6GDxechZvbVLD~rDh6X1uSPALmJiAarZHYR3wQaTCNUaR87lBpQ~e0WVCIMz6~70Y6uJUeFgf8wr1n2gxv20gZv9tPvHRcHhvFYr-h78y3Gy4Z13Z8qrDIEEUr4z31DFQs4v9T6y3ASWPHP09hJS8hROkFRCd2x4deEaAJnwgBlJIP7G3gQAp06p9sNArvGRpUxud0hQFccjVi8ClZmw~mIjNzMl5Wk-d3jT1EPz8RIDgnSazjR9oeL7fzei1XTmF0~mFUQCZ~KhmZcbWSdqM~3NtGwfUuvw__",
    "https://s3-alpha-sig.figma.com/img/139e/a8b8/c20604c3f65cb14be6e9c56937030956?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXl-TKhpflXOJtXkRUL9auuaqbeaNQt1n~c~y2k25Ls9CiWoVfM4XPXpt9izFiOeO8CG4sxOMz8~ZcAtC3FB1PmQAfsIlzdXBgyKbVe4aZVmYl6gHaL75SYDn1dxVF9QDQA8nR8jnYBch7aRUesXncqB4lzYFXSLfmlgw1e7vBp~zgiQwtCJk-lPb7o-Oz6DOYWGmzAgmIBvuO-T~yNYvBEzcOfck94icVBh28t9gf-FT7ZG5nBrwChwtVgXCBb91D~FxJSmwxGnYy6SZzN211c8i5uBWhkUbG~tpIUhqYJS9KM-fkdgSx3~ah4aXMd4pB3w90kkvpJFgRjZ9C5EUg__",
    "https://s3-alpha-sig.figma.com/img/96d6/6c79/c41c5f761303eec79b3b22104ba79a46?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5W7b7Hf8z8DlmPSkLVDeevIKt9iUXL1u6LOr2T8FOw2e3qWMHMYj-l1zEtzr6gejKn-CMi2tTx7WFdQ6lFBpLOScx5Y9-Ngv1YqHVAcGi~8UTQRfdJC6bQdWVhGmJ~FcrfS1xnq45jBopHC2iL54edWv8s0~fEPCyfn9rgLw7DuHHGQjAsjfCah5HD-o3mVwpy-FUHK~-k7hHRbNWwZgW0ishZ1hRWVSr-MmdWYo8JK67kT8IGGpCISxcefCyZOGOU8WzAJZncXQWIjOLkVJ7Bkomo4cKRQQl0WPJD00tsxjr2xooFijAJsZftTPzm4JjOe3Zdo8oiKL64PhxT30A__",
  ];

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
