import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import search from '../img/search.png';
import logo from '../img/Logo.png';
import bell from '../img/bell.png';
import storyimg from '../img/storyimg.png';


const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;
const SHeader = styled.div`
    position:fixed;
    width:100vw;
    display: flex;
    justify-content: flex-end;
    margin-top:25px;
    padding: 0 32px;
`;

const Rightbox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;    
`;
const ShImg = styled.img`
    position: relative;
    right:42vw;
    width: 96px;
    height: 24px;   
`;
const ShImg2 = styled.img`
    position: relative;
    right:18px;
    width: 14px;
    height: 17px;
`;
const StyledLink = styled(Link)`
    width: 86px;
    height: 30px;
    padding: 5px 15px;
    border-radius: 3px;
    background: #EF5252;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
`;
const StyledLink2 = styled(Link)`
    
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
const SImg = styled.img`
    width: 15px;
    height: 15px;   
`;
const SImg2 = styled.img`
    width: 158px;
    height: 124px;
    margin-left:550px;
    position: absolute;
    top:430px;
`;

function Peoplestory() {

    const [text, setText] = useState('');
    const onSearch = (e) => {
      setText(e.target.value);
    };
    const onReset = () => {
      setText('');
    };

    
    return (
        
        <Container>
            <PageTitle title1="PeopleStory" />
            <Frontsquare>
            <SHeader>
                <StyledLink2 to={routes.home}><ShImg src={logo} alt='Logo' /></StyledLink2>
                    <Rightbox>
                        <ShImg2 src={bell} alt='Bell' />
                        <StyledLink to={routes.mypage}>마이페이지</StyledLink>
                    </Rightbox>
            </SHeader>
                <Title>사람들 이야기</Title>
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
                    <Content>
                    </Content>
                    <Content>가지마</Content>
                    <Content>가지마</Content>
                    <Content>가지마</Content>
                </Mainbox>
                <LinkAdd to={routes.writestory}>+</LinkAdd>

            </Frontsquare>

        </Container>           
    
    );
  }
  export default Peoplestory;