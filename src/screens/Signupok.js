import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
import group from '../img/Group 2.png';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    z-index: -1;
`;

const Square = styled.div`
    width: 896px;
    height: 570px;
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:178px;
`;
const Sdiv = styled.div`
    width: 350px;
    height: 45px;
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
    color: #494949;
`;
const StyledLink2 = styled(Link)`
    position: relative;
    top:43px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 60px;
    width: 454px;
    height: 61px;
    background: #EF5252;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
`;
const StyledLink3 = styled(StyledLink2)`
    position: relative;
    top:62px;
    background: #FFFFFF;
    color: #A9A9A9;
`;

const SImg3 = styled.img`
    position: relative;
    bottom:25px;
    width: 111.67px;
    height: 109px;
    
`;



function Signupok() {

    
    return (
        
        <Container>
            <PageTitle title1="SignupOK" />
            <Header/>
            
            <Square>
                <SImg3 src={group} alt='congrat' />
                <Sdiv>회원가입이 완료되었습니다!</Sdiv>
                <StyledLink2 to={routes.Petprofile}>반려동물 건강정보 입력하러갈래요!</StyledLink2>
                <StyledLink3 to={routes.home}>홈으로 돌아갈래요!</StyledLink3>
               
            </Square>
         
        </Container>
            
    
    );
  }
  export default Signupok;