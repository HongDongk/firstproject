import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import back from '../img/back.png';




const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Square = styled.div`
    width: 896px;
    height: 665px;
    background: #EDEDED;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top:150px;
    padding:35px;
`;
const Topbox = styled.div`
    display:flex;
    flex-wrap: wrap;   
`;
const Bottombox = styled.div`
    display:flex;
    flex-wrap: wrap; 
    justify-content: center;
    width: 540px;
    justify-content: space-between;   
`;
const Title = styled.div`
    display:flex;
    flex-wrap: wrap; 
    width: 540px;
    height:50px;
    border-bottom: 2px solid #EF5252;
    padding:15px;
  
`;
const P = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #EF5252;
`;
const SP = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    margin-top:5px;
    padding-left:8px;
`;
const SP2 = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #494949;
`;

const Formbox = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 290px;
    height:180px;
    margin-top:80px;
    margin-left:150px;
    
`;
const Input = styled.input`
    margin-top:10px;
    width: 285.9px;
    height: 37px;
    background: #F5F5F5;
    border-radius: 3px;
    padding: 8px 20px;
    gap: 200px;
    border: 0.3px solid white 
`;
const Input2 = styled.input`
    width: 216px;
    height: 37px;
    background: #F5F5F5;
    border-radius: 3px;
    border: 0.3px solid white;
    
`;
const Last = styled.div`
    width: 263px;
    height: 40px;
    background: #F5F5F5;
    border-radius: 3px;   
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:19px;
`;

const StyledLink = styled(Link)`
    position:relative;
    right:80px;  
`;
const StyledLink2 = styled(Link)`
    width: 61px;
    height: 20px;
    background: #EF5252;
    border-radius: 3px;
    color: #F5F5F5;
    display:flex;
    align-items: center;
    justify-content: center;

`;

const Circle = styled.div`
    width: 168px;
    height: 168px;
    margin-top:100px;
    background: #FFFFFF;
    border-radius:50%;
`;
const SImg = styled.img`
    width: 22px;
    height: 22px;
`;






function Petprofile() {

   
    
    return (
        
        <Container>
            <PageTitle title1="petprofile" />
            <Header/>
            
            <Square>
                <StyledLink to={routes.mypage}><SImg src={back} alt='Logo' /></StyledLink>
                <Topbox>
                    <Circle/>
                    <Formbox>
                        <Input defaultValue="??????"/>
                        <Input defaultValue="?????????"/>
                        <Input defaultValue="???"/>
                        <Input defaultValue="2020???8???29???"/>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="??????" />
                        <FormControlLabel control={<Checkbox/>} label="??????" />
                        <FormControlLabel control={<Checkbox/>} label="???????????????" />                      
                    </Formbox>                   
                </Topbox>
                <Bottombox>
                    <Title><P>???????????? ????????????</P></Title>
                    <SP>??????</SP>
                    <Input2/>
                    <SP>?????????</SP>
                    <Input2/>
                    <Last><SP2>?????????</SP2><StyledLink2 to={routes.Heart}>????????????</StyledLink2></Last>
                    <Last><SP2>?????????</SP2><StyledLink2 to={routes.peoplestory}>????????????</StyledLink2></Last>
                   
                </Bottombox>
               
               
            </Square>
         
        </Container>
            
    
    );
  }
  export default Petprofile;