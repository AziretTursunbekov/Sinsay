import React from "react";
import Leaves from "../../assets/images/leaves.png";
import Creams from "../../assets/images/creams.png";
import styled from "styled-components";
const About = () => {
  return (
    <article>
      <FirstBox>
        <div className="f_box">
          <h1>ABOUT SINSEY</h1>
        </div>
        <div className="box">
          <p>
            I wanted to create a radical new skincare brand. For too long, the
            world of skincare had been defined by exaggerated promises and
            suspect chemicals. After gathering a team of health and skincare
            experts, we set out together to challenge the industry. That meant
            going back to basics.
          </p>
          <span>
            We wanted to take an autonomous approach. Working from the ground
            up, we built an online-only, direct to customer model, which means
            we can sell premium products with the highest quality ingredients at
            a great price.
          </span>
          <span>
            Staying true to our philosophy of simplicity and transparency, we
            intend to remain uncompromising in our mission to offer consumers a
            premium natural skincare alternative. Ning Li, Typology Founder
          </span>
        </div>
      </FirstBox>
      <SecondBox>
        <div className="container">
          <h1>OUR FORMULATIONS</h1>
          <div className="s_box">
            <p>
              Our philosophy is not to add anything to our products to make them
              stand out; instead we pare them back and distil each formula down
              to the most-essential, natural active ingredients.
            </p>
            <span>
              We're tireless in our mission to hunt down the best
              ingredients.Whether in France, around Europe or further afield in
              search of exotic extracts, they must be sourced from sustainable
              farms using gentle extraction techniques.
            </span>
            <span>
              Our formulas are simple, considered and effective. Provenance is
              important to us, so you'll always know where our ingredients come
              from. And we'll even show you how to create your own skincare
              formulations along the way.
            </span>
            <span>
              All formulations are 100% French. Our partner laboratories in
              Bergerac, Aix en Provence and Compiègne work with us to put their
              French skincare heritage to good use.
            </span>
          </div>
        </div>
        <img className="image" src={Creams} alt="" />
      </SecondBox>
    </article>
  );
};

export default About;
const FirstBox = styled.div`
  background-image: url(${Leaves});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  .f_box {
    height: 70vh;
    h1 {
      font-size: 61px;
      font-weight: 500;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 50vh;
    gap: 20px;
    p,
    span {
      font-size: 21px;
      text-align: end;
      font-weight: 500;
    }
    span {
      font-weight: 400;
    }
  }
`;
const SecondBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 70px;
  padding: 10px 50px;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 500px;
    justify-content: center;
    h1 {
      font-size: 45px;
      font-weight: 500;
    }
  }
  .s_box {
    width: 454px;
    height: 727px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    p,
    span {
      font-size: 21px;
      font-weight: 500;
    }
    span {
      font-weight: 400;
    }
  }
  .image {
    width: 650px;
    height: 940px;
    object-fit: cover;
  }
`;
