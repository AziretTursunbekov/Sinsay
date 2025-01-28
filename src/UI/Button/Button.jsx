import styled from "styled-components";
const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <MyButton
      className="button"
      onClick={onClick}
      disabled={disabled}
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
  width: 283px;
  height: 65px;
  border: none;
  background: #000000;
  color: white;
  flex: none;
  font-size: 21px;
  font-weight: 400;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;
