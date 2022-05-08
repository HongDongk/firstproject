import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import logo from '../img/Logo.png';
import logobig from '../img/logobig.png';
import menu from '../img/menu.png';
import main1 from '../img/1.png';
import background from '../img/home.png';
import petmory from '../img/petmory.png';


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
const Mainbox = styled.div`
    position: relative;
    bottom:21vh;
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
const Button = styled.button`
    width: 15px;
    height: 15px;
    background: #A9A9A9;
    border-radius: 50%;
    border:none;
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
const Sp3 = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    text-align: center;    
`;

const Smiddle = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;   
`;
const SImg = styled.img`
    width: 96px;
    height: 24px;      
`;
const SImg2 = styled.img`
    width: 25px;
    height: 16.67px; 
`;
const SImg3 = styled.img`
    width: 662.81px;
    height: 367.04px;
    position:relative;
    left:4vw;
`;
const SImg4 = styled.img`
    width: 220px;
    height: 57px;
`;
const SImg5 = styled.img`
    width: 204px;
    height: 32px;
`;




function Home() {


  return (
      <Container>
        <PageTitle title1="Home" />
        <Header>
          <SImg2 src={menu} alt='Menu' />
          <SImg src={logo} alt='Logo' />
          <StyledLink to={routes.login}>Login</StyledLink>
        </Header>
        <Sleft>
            <Sleftbox><Button/><Sleftp>공유할 수 있어요</Sleftp></Sleftbox>
            <Sleftbox><Button/><Sleftp>작성할 수 있어요</Sleftp></Sleftbox>
            <Sleftbox><Button/><Sleftp>확인할 수 있어요</Sleftp></Sleftbox>
            <Sleftbox><Button/><Sleftp>관리할 수 있어요</Sleftp></Sleftbox>
          </Sleft>
        <Mainbox>
          <Sinfo>
            <Sp>간편한 게시글 형식으로 반려인들끼리 다양한 정보를 공유할 수 있습니다.</Sp>
            <Sp2>매일매일 반려인들이 적은 투병 일지가 업로드 됩니다.</Sp2>
            <Sp2>이를 통해 반려인들은 서로서로 정보를 공유하고 대화할 수 있습니다.</Sp2>
          </Sinfo>
          <SImg3 src={main1} alt='Main' />.
        </Mainbox>
        <SImg4 src={logobig} alt='logo' />
        <Smiddle>
          <SImg5 src={petmory} alt='logo' />
          <Sp3>Petmory는 반려동물을 뜻하는 Pet과 기억을 뜻하는 Memory의 합성어입니다.</Sp3> 
          <Sp3>펫모리는 반려동물과 함께 살아가는 기억들을 소중히 여기고 간직하며,</Sp3>
          <Sp3>투병일지 작성 서비스를 통해 투병 과정을 기억하고자 하는 의미를 담고 있습니다.</Sp3>
        </Smiddle>
  
         
      
      </Container>
    );
  }
  export default Home;