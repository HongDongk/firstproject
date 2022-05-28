import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "../routes";
import Header from "../components/Header";
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
    height: 637px;
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top:150px;
    padding:35px;
`;
const StyledLink = styled(Link)`
    margin-top:5px;
   
`;
const SImg = styled.img`
    width: 22px;
    height: 22px;
`;
const P =  styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #EF5252;
    margin-left:31px;
`;
const Title =  styled.p`
    position:relative;
    bottom:115px;
    right:15px;
    width: 700px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #494949;
`;
const Sp =  styled.p`
    position:relative;
    bottom:260px;
    left:30px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #A9A9A9;
    width: 680px;
    height: 40px;
`;
const Top = styled.div`
    width: 896px;
    height:35px;
    display:flex;  
`;


function Heart() {

   
    
    return (
        
        <Container>
            <PageTitle title1="HeartBeat" />
            <Header/>
            
            <Square>
                <Top>
                    <StyledLink to={routes.Petprofile}><SImg src={back} alt='Logo' />
                    </StyledLink><P>심박수측정</P>
                </Top>
                <Title>반려동물이 안정된 상태일 때 심장에 귀를 대고 심박에 따라 그림을 눌러주세요.</Title>
                <Sp>앞다리를 흉곽에 붙였을 때 왼쪽 겨드랑이와 팔꿈치 사이 왼쪽 가슴에 귀를 대고 심장소리를 들을 수 있습니다. 측정된 심박수를 꾸준히 기록하며 급격한 변화가 감지되면 동물병원에서 검사받기를 권해드립니다.</Sp>
                           
               
            </Square>
         
        </Container>
            
    
    );
  }
  export default Heart;