import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../logincontext/LoginContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setIsLoggedIn } = useContext(AuthContext);



  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordR = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordR.test(password);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(
      validateEmail(newEmail) ? "" : "Электронная почта должна быть @gmail.com"
    );
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(
      validatePassword(newPassword)
        ? ""
        : "Пароль должен быть не менее 8 символов"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Пожалуйста, введите действительный адрес @gmail.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Пароль должен быть не более 8 символов.");
      return;
    }

    localStorage.setItem("auth", JSON.stringify({ email, password }));
    setIsLoggedIn("/");

    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <StyledBigContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Login</h1>

        <StyledContainer>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
        </StyledContainer>

        <StyledContainer>
          <label htmlFor="password">Password</label>
          <PasswordWrapper>
            <StyledInput
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <TogglePasswordButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeSharp className="IoEyeSharp" />
              ) : (
                <FaEyeSlash className="IoEyeSharp" />
              )}
            </TogglePasswordButton>
          </PasswordWrapper>
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
        </StyledContainer>

        <StyledForgot>Forgot your password</StyledForgot>
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledForm>
    </StyledBigContainer>
  );
}

const StyledBigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 543px;
  height: 542px;
  gap: 20px;
`;

const StyledContainer = styled.div`
  height: 125px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 542px;
  height: 80px;
  font-size: large;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: medium;
  color: black;
  .IoEyeSharp {
    width: 30px;
    height: 30px;
  }
`;

const StyledForgot = styled.p`
  font-size: larger;
  cursor: pointer;
  color: black;
`;

const StyledButton = styled.button`
  width: 173px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: large;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: small;
  margin-top: -5px;
`;
