import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import search from '../img/search.png';


const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Frontsquare = styled.div`
    display: flex;
    height: 33vh;
    align-items: center;
    flex-direction: column;
    background: #F5F5F5;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
`;
const Title = styled.div`
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
    color: #EF5252;   
    margin-right:40vw;
    margin-top:20vh;
`;
const Searchbox = styled.div`
    position:relative;
    bottom:15px;
    margin-left:35vw;
`;
const Input = styled.input`
    width: 227px;
    height: 33px;
    background: #FFFFFF;
    border-radius: 3px;  
    border:none;
`;
const Topbutton = styled.button`
    border: none;
    background: white;
    height: 33px;   
`;
const LinkAdd = styled(Link)`
    padding-top:10px;
    color: #A9A9A9;
    border: none;
    border-radius: 50%;
    background: white;
    text-align: center;
    width:80px;
    height:80px;
    font-size:50px;      
`;
const Plus = styled.div`
    margin-top:20vh;
    display:flex;
    justify-content: space-between;
    width:50vw;
`;
const Smallplus = styled.div`
    width: 239px;
    height: 321px;
    background: #F5F5F5;
    border-radius: 9px;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const SImg = styled.img`
    width: 15px;
    height: 15px;   
`;
const SImg2 = styled.img`
    width: 239px;
    height: 321px;
`;





function Mystory() {

    const [text, setText] = useState('');
    const onSearch = (e) => {
      setText(e.target.value);
    };
    const onReset = () => {
      setText('');
    };

    
    return (
        
        <Container>
            <PageTitle title1="Mystory" />
            <Frontsquare>
                <Header/>
                <Title>?????? ?????????</Title>
                <Searchbox>
                  <Topbutton onClick={onReset}><SImg src={search} alt='Logo' /></Topbutton>
                  <Input onChange={onSearch} value={text}/>
                </Searchbox>
            </Frontsquare>
            <Plus>
               
            </Plus>
        </Container>
            
    
    );
  }
  export default Mystory;