import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import logo from '../img/Logo.png';
import menu from '../img/menu.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 80vh;
    background: #F5F5F5;
    display: flex;
    align-content: center;
    flex-direction: column;
    
`;

const Header = styled.div`
    width: 100vw;
    padding:24px 50px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    flex-wrap: wrap
    position: fixed;
`;
const SImg = styled.img`
    width: 96px;
    height: 24px;      
`;
const SImg2 = styled.img`
    width: 25px;
    height: 16.67px; 
`;
const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57px;
    height: 26px;
    background: #EF5252;
    border-radius: 3px;
    color:white;
    font-size: 10px;
    font-weight: 400;   
`;
const Button = styled.button`
    border: none;
    
`;


function Home() {


  return (
      <Container>
        <PageTitle title1="Home" />
           
        <Wrapper>
          <Header>
            <SImg src={logo} alt='Logo' />
            <StyledLink to={routes.login}>Login</StyledLink>
          </Header>
          
         
         


        </Wrapper>
         
      
      </Container>
    );
  }
  export default Home;