import styled from "styled-components";

const Input = styled.input`
  width: 348px;
  height: 39px;
  background: #FFFFFF;
  border-radius: 3px;
  padding: 14px;
  background-color: #fafafa;
  border: 0.3px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

export default Input;