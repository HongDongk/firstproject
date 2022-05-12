import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import photo from '../img/photo.png';
import book from '../img/book.png';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
`;
const Mainbox = styled.div`
    margin-top:250px;
    margin-left:5vw;
    display: flex;
    width:1200px;
    height:400px;
    align-items: center;
   
`;
const Leftbox = styled.div`
    display: flex;
    margin-top:10px;
    flex-wrap: wrap;
    justify-content: space-evenly;  
    width:50%;
    align-items: center;  
    
`;
const Lp = styled.p`
    font-weight: 700;
    font-size: 25px;
    line-height: 21px;
    color: #000000;
`;
const SLp = styled.p`
    margin-top:10px;   
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
`;
const Lpbox = styled.div`
    display:flex;
    flex-direction: column;
    padding-left:23px;
    padding-top:45px;
`;
const Leftsbox = styled.div`
    display: flex;
    align-items: center; 
    
`;
const Llink = styled(Link)`
    margin-top:70px;
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 138px;
    height: 40px;
    background: #EF5252;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
`;
const Lbottombox = styled.div`
    width: 473px;
    margin-top:33px;
    height: 184px;
    background: #EDEDED;
    border-radius: 10px;
`;
const Rightbox = styled.div`
    display: flex;
    flex-direction: column;
    width:50%
    align-items: center;    
`;
const Rtop = styled.div`
    display: flex;
    margin-left:16px;
    padding-bottom:15px;
   
`;
const Rp = styled.p`
    margin-left:16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #EF5252; 
`;
const Rbottom = styled.div`
    display: flex;
    width: 473px;
    height: 290px;
    background: #EDEDED;
    border-radius: 10px;  
    padding: 13px 20px 14px;
`;
const Rcontent = styled.div`
    width: 400px;
    height: 52px;
    background: #F5F5F5;
    border-radius: 3px;
    padding: 13px 20px 14px;
`;

const SImg = styled.img`
    width: 100px;
    height: 100px;
`;
const SImg2 = styled.img`
    width: 36px;
    height: 32.4px;
`;


function Mypage() {
    
    return (
        
        <Container>
            <PageTitle title1="Mypage"/>
            <Header/>
            
            <Mainbox>
                <Leftbox>
                    <Leftsbox>
                        <SImg src={photo} alt='포토' />
                        <Lpbox>
                            <Lp>홍동근님 </Lp>
                            <SLp>반려동물 2마리와함께해요</SLp>
                        </Lpbox>                      
                    </Leftsbox>
                    <Llink>나의 댓글</Llink>
                    <Lbottombox>
                        안녕
                    </Lbottombox>
                </Leftbox>

                <Rightbox>
                    <Rtop>
                        <SImg2 src={book} alt='북' />
                        <Rp>나의 이야기</Rp>
                    </Rtop>
                    <Rbottom>
                        <Rcontent>가지마</Rcontent>
                        <Rcontent/>
                        <Rcontent/>

                    </Rbottom>
                </Rightbox>
            </Mainbox>
            
        </Container> 
    );
  }
  
export default Mypage;