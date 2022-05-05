import { Link } from "react-router-dom";
import styled from "styled-components";


const SBottomBox = styled.div`
  margin-bottom:10px;
  text-align: center;
  color:#A9A9A9;
  font-weight: 400;
  font-size: 12px;
  a {
    font-weight: 400;
    font-size: 14px;
    margin-left: 9px;
    color: ${(props) => props.theme.bgColor};
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}


export default BottomBox;