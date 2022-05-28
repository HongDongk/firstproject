import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import back from '../img/back.png';
import photo from '../img/photo.png';
import detail from '../img/detail1.png';

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    z-index: -1;
    overflow-x: hidden
`;
const Frontsquare = styled.div`
    display: flex;
    height: 33vh;
    align-items: center;
    flex-direction: column;
    background: #F5F5F5;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
`;
const Top = styled.div`
    display: flex;
    width:300px;
    margin-right:40vw;
    margin-top:12vh;
`;
const Bottom = styled.div`
    display: flex;
    width:200px;
    margin-right:34vw;
    margin-top:3vh;
    margin-bottom:2vh;
`;
const Sp = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #A9A9A9;
    margin-left:10px;
    margin-top:5px;
`;
const Sp2 = styled(Sp)`
    margin-left:30px;    
`;
const Sp3 = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #000000;
    margin-top:40px;
    width:80%;    
`;
const Mainbox = styled.div`
    margin-top:50px;
    width:40%;
    display:flex;
    flex-direction: column;    
`;
const Title = styled.div`
    margin-left:30px;
    font-weight: 900;
    font-size: 24px;
    line-height: 45px;
    color: #EF5252;     
`;
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-align: center;
`;
const SImg = styled.img`
    width: 22px;
    height: 22px;
`;
const SImg2 = styled.img`
    width: 27px;
    height: 27px;
`;
const SImg3 = styled.img`
    margin-top:40px;
    width: 100%;
    height: 478px;
`;




function PeopleDetail() {

    
    
    return (
        
        <Container>
            <PageTitle title1="PeopleDetail" />
            <Frontsquare>
                <Header/>
                <Top>
                    <StyledLink to={routes.peoplestory}><SImg src={back} alt='Logo' /></StyledLink>
                    <Title>새로운병원에 다녀오다</Title>
                </Top>
                <Bottom>
                    <SImg2 src={photo} alt='Logo' />
                    <Sp>홍동근</Sp>
                    <Sp2>2022.5.19</Sp2>
                </Bottom>
            </Frontsquare>
            <Mainbox>
                <SImg3 src={detail} alt='Logo' />
                <Sp3>
                    열락의 노년에게서 같지 뭇 날카로우나 보이는 전인 얼마나 굳세게 이것이다. 내는 웅대한 되려니와, 쓸쓸하랴? 것이 그들의 때까지 그리하였는가? 뜨고, 타오르고 있는 위하여, 노년에게서 이 우리 칼이다. 봄날의 따뜻한 같은 같이, 있는가? 원대하고, 미인을 천고에 무엇이 간에 힘있다. 
                </Sp3>
                <SImg3 src={detail} alt='Logo' />
                <Sp3>
                    열락의 노년에게서 같지 뭇 날카로우나 보이는 전인 얼마나 굳세게 이것이다. 내는 웅대한 되려니와, 쓸쓸하랴? 것이 그들의 때까지 그리하였는가? 뜨고, 타오르고 있는 위하여, 노년에게서 이 우리 칼이다. 봄날의 따뜻한 같은 같이, 있는가? 원대하고, 미인을 천고에 무엇이 간에 힘있다. 
                </Sp3>
                  
                  
            </Mainbox>

        </Container>           
    
    );
  }
  export default PeopleDetail;