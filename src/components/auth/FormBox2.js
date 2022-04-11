import styled from "styled-components";


const Container = styled.div`
  
  
  form {
    margin-top:50px;
    height:550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    
  }
`;

function FormBox2({ children }) {
  return <Container>{children}</Container>;
}
export default FormBox2;