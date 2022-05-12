import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Frontsquare = styled.div`
    display: flex;
    height: 380px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
`;
const Input = styled.input`
    margin-bottom:57px;
    margin-right:25vw;
    width: 653px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 3px;  
    border:none;
    &::placeholder {
        font-weight: 900;
        font-size: 30px;
        line-height: 45px;
        color: #C7C7C7;
      }
`;
const Bottomsquare = styled.div`
    display:flex;
    width: 769px;
    height: 603px;
    background: #FFFFFF;
    margin-top:10px;
    padding:20px;
`;
const Input2 = styled.textarea`
    width: 730px;
    height: 570px;
    border:none;
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        color: #C7C7C7;
      }
`;



function Writestory() {
    
    
    const [text, setText] = useState('');
    const onSearch = (e) => {
      setText(e.target.value);
    };
    const [text2, setText2] = useState('');
    const onSearch2 = (e) => {
      setText2(e.target.value);
    };

    return (
        
        <Container>
            <PageTitle title1="Writestory" />
            <Frontsquare>
                <Header/>
                <Input onChange={onSearch} value={text} placeholder={"제목을 입력하세요"}/>
            </Frontsquare>
            <Bottomsquare>
                <Input2 onChange={onSearch2} value={text2} placeholder={"내용을 입력하세요"}/>
            </Bottomsquare>
            
            
            
        </Container>
            
    
    );
  }
  
  export default Writestory;