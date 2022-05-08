import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import logo from '../img/Logo.png';
import bell from '../img/bell.png';



const SHeader = styled.div`
    width:100vw;
    display: flex;
    justify-content: flex-end;
    margin-top:25px;
    padding: 0 32px;
`;

const Rightbox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;    
`;
const SImg = styled.img`
    position: relative;
    right:42vw;
    width: 96px;
    height: 24px;   
`;
const SImg2 = styled.img`
    position: relative;
    right:18px;
    width: 14px;
    height: 17px;
`;
const StyledLink = styled(Link)`
    width: 86px;
    height: 30px;
    padding: 5px 15px;
    border-radius: 3px;
    background: #EF5252;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
`;

function Header() {
    return (
      <SHeader>
        <SImg src={logo} alt='Logo' />
            <Rightbox>
                <SImg2 src={bell} alt='Bell' />
                <StyledLink to={routes.login}>마이페이지</StyledLink>
            </Rightbox>
      </SHeader>
    );
  }

export default Header;