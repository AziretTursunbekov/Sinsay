import styled from "styled-components";

const Button = ({ children, onClick, disabled, variant, ...rest }) => {
  return (
    <MyButton
      className="button"
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...rest}
    >
      {children}
    </MyButton>
  );
};
export default Button;
const MyButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 10px;
  border: none;
  background: ${(props) =>
    props.variant === "outlined"
      ? "transparent"
      : props.variant === "contained"
      ? "#000000"
      : "none"};
  color: ${(props) =>
    props.variant === "outlined"
      ? "#000000"
      : props.variant === "contained"
      ? "#fff"
      : "none"};
  flex: none;
  font-size: 21px;
  font-weight: 400;
  cursor: pointer;
`;
