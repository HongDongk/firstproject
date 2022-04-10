import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Home() {
    return (
      <Container>
        
          <Header/>
          <Link to={routes.login}>로그인페이지로</Link>
      
      </Container>
    );
  }
  export default Home;