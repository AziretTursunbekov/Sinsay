import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <StyledBigContainer>
      <StyledForm>
        <h1>Login</h1>

        <StyledContainer>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" id="email" />
        </StyledContainer>

        <StyledContainer>
          <label htmlFor="password">Password</label>
          <StyledInput type="password" id="password" />
        </StyledContainer>

        <StyledForgot>Forgot your password</StyledForgot>
        <StyledButton>Sign in</StyledButton>
      </StyledForm>
    </StyledBigContainer>
  );
}

const StyledBigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 543px;
  height: 542px;
  gap: 30px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 542px;
  height: 80px;
  font-size: x-large;
  padding-left: 15px;
`;

const StyledForgot = styled.p`
  font-size: larger;
`;

const StyledButton = styled.button`
  width: 173px;
  height: 72px;
  background-color: black;
  color: white;
  font-size: x-large;
  border: none;
  margin-top: 15px;
`;
