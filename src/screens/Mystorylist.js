import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import search from '../img/search.png';
import storyimg from '../img/storyimg.png';


const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const Frontsquare = styled.div`
    display: flex;
    width:100vw;
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
const Mainbox = styled.div`
    margin-top:70px;
    align-items: center;
    display:flex;
    flex-direction: column;
`;
const Content = styled.div`
    margin-top:20px;
    padding: 38px;
    width: 824px;
    height: 225px;
    background: #F5F5F5;
`;
const H1 = styled.h1`
    color: #EF5252;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
`;
const P = styled.p`
    margin-top:20px;
    width:500px;   
`;
const SImg = styled.img`
    width: 15px;
    height: 15px;   
`;
const SImg2 = styled.img`
    width: 158px;
    height: 124px;
    margin-left:550px;
    position:relative;
    bottom:90px;
`;
const LinkAdd = styled(Link)`
    position:fixed;
    right:150px;
    top:90vh;
    color: white;
    border: none;
    border-radius: 50%;
    background: #EF5252;
    text-align: center;
    width: 54.81px;
    height: 54.81px;
    font-size:50px;      
`;


function Mystorylist() {

    const [text, setText] = useState('');
    const onSearch = (e) => {
      setText(e.target.value);
    };
    const onReset = () => {
      setText('');
    };

    
    return (
        
        <Container>
            <PageTitle title1="Mystorylist" />
            <Frontsquare>
                <Header/>
                <Title>?? 이야기</Title>
                <Searchbox>
                  <Topbutton onClick={onReset}><SImg src={search} alt='Search' /></Topbutton>
                  <Input onChange={onSearch} value={text}/>
                </Searchbox>
                <Mainbox>
                    <Content>
                        <H1>새로운병원에 다녀오다</H1>
                        <P>대한 우리 가지에 자신과 힘있다. 길지 노년에게서 있으며, 사랑의 오직 뛰노는 가는 힘차게 아름다우냐? 위하여 이상, 작고 목숨이 있으며, 것이다. 갑 대중을 노래하며 그들의 것이다.대한 우리 가지에 자신과 힘있다. 길지 노년에게서 있으며, 사랑의 오직 뛰노는 가는 힘차게 아름다우냐? 위하여 이상, 작고 목숨이 있으며, 것이다. 갑 대중을 노래하며 그들의 것이다.</P>
                        <SImg2 src={storyimg} alt='Bell' />
                    </Content>
                    <Content>내용</Content>
                    <Content>내용</Content>
                    <Content>내용</Content>
                </Mainbox>
                <LinkAdd to={routes.writestory}>+</LinkAdd>

            </Frontsquare>

        </Container>           
    
    );
  }
  export default Mystorylist;