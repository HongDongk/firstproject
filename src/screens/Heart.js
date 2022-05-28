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



function Heart() {

   
    
    return (
        
        <Container>
            <PageTitle title1="heart" />
            <Header/>
            
            <Square>
                           
               
            </Square>
         
        </Container>
            
    
    );
  }
  export default Heart;