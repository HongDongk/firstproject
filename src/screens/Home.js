import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import logo from '../img/Logo.png';
import logobig from '../img/logobig.png';
import menu from '../img/menu.png';
import background from '../img/home.png';
import petmory from '../img/petmory.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import main1 from '../img/1.png';
import main2 from '../img/2.png';




const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height:4300px;
`;
const Header = styled.div`
    display: flex;
    width:90vw;
    justify-content: center;
    justify-content: space-between; 
    margin-top:24px;
`;
const StyledLink = styled(Link)`
    width: 57px;
    height: 26px;
    background: #EF5252;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
`;
const StyledLink2 = styled(Link)`
    width: 130px;
    height: 41px;
    background: #EF5252;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
`;


const Mainbox = styled.div`
    position: relative;
    bottom:25vh;
    left:6vw;
    width:50vw;
    display: flex;
    justify-content: center;  
    align-items: center;
`;
const Sleft = styled.div`
    margin-right:78vw;
    margin-top:40vh;
    height: 180px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    justify-content: space-around; 
    justify-content: space-between; 
`;
const Sleftbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Sleftp = styled.p`
    position:relative;
    left:8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #C7C7C7;
`;
const SMenu = styled.button`
    border:none;
    background-color: Transparent;
`;
const RButton = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border:none;
`;
const SButton = styled.button`
    margin-top:90vh;
    width: 151px;
    height: 36px;
    background: #EF5252;
    border-radius: 3px;  
    border:none;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
`;
const Sp3 = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    text-align: center;  
`;
const Sp4 = styled.p`
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
    color: #EF5252;
    text-align: center;
`;
const Sp5 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #494949;
`;
const Smiddle = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;   
`;
const Smiddle2 = styled(Smiddle)`
    margin-top:73vh;
`;
const Smiddle3 = styled(Smiddle)`
    margin-top:26px;
`;

const SImg = styled.img`
    width: 96px;
    height: 24px;      
`;
const SImg2 = styled.img`
    width: 25px;
    height: 16.67px; 
`;
const SImg4 = styled.img`
    width: 220px;
    height: 57px;
    margin-top:90vh;
`;
const SImg5 = styled.img`
    width: 204px;
    height: 32px;
    margin-top:80px;
`;
const Stextbox = styled.div`
    margin-top:13.3px;
`;
const Sinfo = styled.div`
    position:absolute;
    left:30px;
    top:70px;
    width: 395px;    
`;
const Sp = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #EF5252; 
`;
const Sp2 = styled.p`
    position:relative;
    top:11px;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
`;
const SImg3 = styled.img`
    width: 662.81px;
    height: 367.04px;
    margin-left:60px;
`;



function Home() {

    const [currentButton, setCurrentButton] = useState(0);

    const Smbutton0 = styled(RButton)`
        background-color: ${currentButton === 0 ? 'red' : '#A9A9A9'} };
        SImg src: ${currentButton === 0 ? {main1} : {main1}} };
    `;
    const Smbutton1 = styled(RButton)`
        background-color: ${currentButton === 1 ? 'red' : '#A9A9A9'} };
        ${currentButton === 0 ? main1 : main2} };
    `;
    const Smbutton2 = styled(RButton)`
        background-color: ${currentButton === 2 ? 'red' : '#A9A9A9'} };
    `;
    const Smbutton3 = styled(RButton)`
        background-color: ${currentButton === 3 ? 'red' : '#A9A9A9'} };
    `;

    const change = (buttonIndex) => { setCurrentButton(buttonIndex);};
  
    const goToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {setAnchorEl(event.currentTarget); };
    const handleClose = () => {setAnchorEl(null);};

  return (
      <Container>
        <PageTitle title1="Home" />
        <Header>
            <SMenu>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                    <SImg2 src={menu} alt='Menu' />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><StyledLink2 to={routes.login}>사람들의 이야기</StyledLink2></MenuItem>
                        <MenuItem onClick={handleClose}><StyledLink2 to={routes.login}>나의 이야기</StyledLink2></MenuItem>
                    </Menu>
            </SMenu>
            <SImg src={logo} alt='Logo' />
            <StyledLink to={routes.login}>Login</StyledLink>
        </Header>
            <Sleft>
                <Sleftbox><Smbutton0 onClick={() => change(0)}/><Sleftp>공유할 수 있어요</Sleftp></Sleftbox>
                <Sleftbox><Smbutton1 onClick={() => change(1)}/><Sleftp>작성할 수 있어요</Sleftp></Sleftbox>
                <Sleftbox><Smbutton2 onClick={() => change(2)}/><Sleftp>확인할 수 있어요</Sleftp></Sleftbox>
                <Sleftbox><Smbutton3 onClick={() => change(3)}/><Sleftp>관리할 수 있어요</Sleftp></Sleftbox>
            </Sleft>
        <Mainbox>
            <Sinfo>
                <Sp>간편한 게시글 형식으로 반려인들끼리 다양한 정보를 공유할 수 있습니다.</Sp>
                <Sp2>매일매일 반려인들이 적은 투병 일지가 업로드 됩니다.</Sp2>
                <Sp2>이를 통해 반려인들은 서로서로 정보를 공유하고 대화할 수 있습니다.</Sp2>
            </Sinfo>
        <SImg3 src={main1} alt='Main' />
        </Mainbox>
        <SImg4 src={logobig} alt='logo' />
        <Smiddle>
          <SImg5 src={petmory} alt='logo' />
          <Stextbox>
            <Sp3>Petmory는 반려동물을 뜻하는 Pet과 기억을 뜻하는 Memory의 합성어입니다.</Sp3> 
            <Sp3>펫모리는 반려동물과 함께 살아가는 기억들을 소중히 여기고 간직하며,</Sp3>
            <Sp3>투병일지 작성 서비스를 통해 투병 과정을 기억하고자 하는 의미를 담고 있습니다.</Sp3>
          </Stextbox>
        </Smiddle>
        <Smiddle2>
            <Sp4>반려동물 투병일지 작성 서비스를 제공합니다.</Sp4> 
            <Sp4>반려인들간의 정보 공유 플랫폼 형성을 위해 노력합니다.</Sp4>
            <Smiddle3>
                <Sp5>본 사이트는 반려인들이 아픈 반려동물과 함께 살아가며 겪은 경험과 정보를 한 곳에 묶어놓기 위해 만들어졌습니다.</Sp5> 
                <Sp5>반려인들은 반려동물들을 위해 긴 시간 동안 인터넷 서칭을 하며 정보를 찾아보기도 하고,</Sp5> 
                <Sp5>상황이 호전되길 원하면서 여러 의약품을 시도하거나 결과가 보장되지 않은 보조제를 사용해보기도 합니다.</Sp5>
                <Sp5>이들을 위해 Petmory는 정리된 투병일지를 작성할 수 있는 서비스를 제공하며,</Sp5>   
                <Sp5>이곳을 통해 남겨진 여러 투병 기록들로 반려인들이 서로 정보를 공유할 수 있도록 도와줍니다.</Sp5>
            </Smiddle3>
        </Smiddle2> 
        <SButton onClick={goToTop}>Go to Top</SButton>
      </Container>
    );
  }
  
  export default Home;