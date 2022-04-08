import logo from '../img/Logo.png';
import styled from "styled-components";

const SHeader = styled.header`
    width: 100%;
    padding: 24px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SImg = styled.img`
    width: 96px;
    height: 24px;
`;

function Header() {
    
    return (
        <SHeader>
            <SImg src={logo} className='Logo' alt='Logo' />
        </SHeader>
    );
  }
  export default Header;