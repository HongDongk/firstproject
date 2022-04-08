import styled from "styled-components";

const Button = styled.input`
  margin-top: 56px;
  width: 359px;
  height: 45px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  text-align: center;
  color: white;
  opacity: ${(props) => (props.disabled ? "0.2" : "1")};
`;

export default Button;